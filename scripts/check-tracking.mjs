import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE });
const routes = ['car-lockout', 'house-lockout', 'car-key-replacement', 'lost-car-keys', 'car-key-fob-programming', 'emergency-locksmith'];
const attribution = {
  gclid: 'synthetic-click', gbraid: 'synthetic-gbraid', wbraid: 'synthetic-wbraid',
  utm_campaign: 'phase-i-test', utm_source: 'local-test',
};
try {
  for (const slug of routes) {
    const context = await browser.newContext({ viewport: {width: 390, height: 844} });
    await context.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort());
    await context.addInitScript(() => {
      window.pltTestTag = [];
      window.gtag = (...args) => window.pltTestTag.push(args);
      document.addEventListener('click', event => {
        if (event.target.closest('a[href^="tel:"]')) event.preventDefault();
      });
    });
    const page = await context.newPage();
    const url = new URL(`/lp/${slug}/`, base);
    url.search = new URLSearchParams(attribution).toString();
    assert.equal((await page.goto(url.href)).status(), 200);
    assert.match((await page.locator('meta[name="robots"]').getAttribute('content')), /noindex/);
    await page.waitForFunction(() => window.pltTestTag.some(args => args[2]?.phone_conversion_callback));
    assert(await page.locator('a[href="tel:+17542616528"]').count() >= 3);
    await page.evaluate(() => {
      const config = window.pltTestTag.find(args => args[2]?.phone_conversion_callback)[2];
      config.phone_conversion_callback('(305) 555-0107', '3055550107');
    });
    const forwarded = page.locator('a[href="tel:+13055550107"]');
    await forwarded.first().waitFor();
    assert(await forwarded.count() >= 3);
    await forwarded.first().click();
    const clicks = await page.evaluate(() => window.pltTestTag.filter(args => args[0] === 'event' && args[1] === 'phone_click'));
    assert.equal(clicks.length, 1, slug);
    for (const [key, value] of Object.entries(attribution)) assert.equal(clicks[0][2][key], value);
    assert.equal(clicks[0][2].campaign_slug, slug);
    assert.equal(new URL(page.url()).search, url.search);
    await context.close();
  }
  const noScript = await browser.newContext({javaScriptEnabled: false});
  const page = await noScript.newPage();
  for (const route of ['/', '/services/automotive-locksmith/', '/es/services/automotive-locksmith/', '/lp/car-lockout/']) {
    assert.equal((await page.goto(base + route)).status(), 200);
    assert(await page.locator('h1').isVisible());
    assert(await page.locator('a[href="tel:+17542616528"]').count());
  }
  assert.equal((await page.goto(base + '/missing-phase-i-route/')).status(), 404);
  assert.equal(await page.locator('h1').textContent(), 'Page Not Found');
  await noScript.close();
  console.log('Verified all six paid routes with mocked forwarding and attribution, plus public HTML without JavaScript and a true 404.');
} finally {
  await browser.close();
}
