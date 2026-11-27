import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';

const { pages } = JSON.parse(fs.readFileSync('src/generated/build-seo-inventory.json', 'utf8'));
const origin = process.env.BASE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE });
const snapshot = () => ({
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content,
  robots: document.querySelector('meta[name="robots"]')?.content,
  canonical: [...document.querySelectorAll('link[rel="canonical"]')].map(link => link.href),
  alternates: [...document.querySelectorAll('link[hreflang]')].map(link => [link.hreflang, link.href]),
  lang: document.documentElement.lang,
  h1: document.querySelector('h1')?.textContent,
  schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent)),
});

const chosen = new Map();
for (const record of pages.filter(page => page.status === 200)) {
  const key = record.type === 'directory'
    ? record.path : record.type + ':' + record.language;
  if (!chosen.has(key)) chosen.set(key, record);
}

async function context(javascript) {
  const ctx = await browser.newContext({ javaScriptEnabled: javascript, viewport: { width: 390, height: 844 } });
  await ctx.route('**/*', request => new URL(request.request().url()).origin === new URL(origin).origin
    ? request.continue() : request.abort());
  return ctx;
}

try {
  const staticContext = await context(false);
  const clientContext = await context(true);
  const noJS = await staticContext.newPage();
  const client = await clientContext.newPage();
  const runtimeErrors = [];
  client.on('pageerror', error => runtimeErrors.push(error.message));
  for (const page of chosen.values()) {
    const href = new URL(page.path.replace(/\/+$/, '') + '/', origin).href;
    for (const browserPage of [noJS, client]) {
      const response = await browserPage.goto(href, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, href);
      assert(await browserPage.locator('a[href="tel:+17542616528"]').count(), href);
    }
    const expected = await noJS.evaluate(snapshot);
    assert.deepEqual(await client.evaluate(snapshot), expected, href);
    assert.equal(expected.lang, page.language, href);
    assert.equal(expected.canonical[0], page.canonical, href);
    assert.equal(expected.robots, page.robots, href);
    assert(expected.h1?.trim(), href);
  }
  assert.deepEqual(runtimeErrors, []);
  await client.goto(origin + '/', { waitUntil: 'networkidle' });
  const serviceLink = client.locator('main a[href="/services/"]:visible').first();
  await serviceLink.click();
  await client.waitForURL('**/services/');
  await client.waitForFunction(() => document.querySelector('link[rel="canonical"]')?.href.endsWith('/services/'));
  const spanish = client.locator('a[aria-label="Español (ES)"]:visible').first();
  await spanish.click();
  await client.waitForURL('**/es/services/');
  await client.waitForFunction(() => document.documentElement.lang === 'es' && document.querySelector('link[rel="canonical"]')?.href.endsWith('/es/services/'));
  assert.equal(await client.locator('link[hreflang]').count(), 3);
  assert.equal(await client.locator('link[rel="canonical"]').count(), 1);
  await client.goBack();
  await client.waitForFunction(() => document.documentElement.lang === 'en' && document.querySelector('link[rel="canonical"]')?.href === 'https://prolocksmith-tech.com/services/');
  await staticContext.close();
  await clientContext.close();
  console.log(`Static and hydrated metadata, JSON-LD and phone links matched for ${chosen.size} representative routes. History and Spanish language switching passed.`);
} finally {
  await browser.close();
}
