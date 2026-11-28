import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';

const origin = process.env.BASE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE });
const results = [];

async function go(page, path, status = 200) {
  const response = await page.goto(origin + path, { waitUntil: 'domcontentloaded', timeout: 14000 });
  assert.equal(response?.status(), status, path);
  await page.locator('main h1').waitFor({ timeout: 6000 });
}

async function follow(page, path, selector = 'a') {
  const link = page.locator(`${selector}[href="${path}"]:visible`).first();
  assert((await link.innerText({ timeout: 5000 })).trim(), `Missing link name for ${path}`);
  await link.click({ timeout: 5000 });
  await page.waitForURL(origin + path, { timeout: 5000 });
}

async function visibleText(page, regex) {
  assert.match(await page.locator('main').innerText({ timeout: 5000 }), regex);
}

const cases = [
  ['Official business name', '/', page => visibleText(page, /Pro Locksmith Tech/i)],
  ['Official telephone', '/contact/', async page => assert(await page.locator('main a[href="tel:+17542616528"]:visible').count())],
  ['24/7 availability', '/', page => visibleText(page, /24\/7/)],
  ['Mobile service model', '/', page => visibleText(page, /come to (your|you)|mobile locksmith/i)],
  ['Automotive service', '/services/', page => follow(page, '/services/automotive-locksmith/', 'main a')],
  ['Residential service', '/services/', page => follow(page, '/services/residential-locksmith/', 'main a')],
  ['Commercial service', '/services/', page => follow(page, '/services/commercial-locksmith/', 'main a')],
  ['Emergency service', '/services/', page => follow(page, '/services/emergency-lockout-service/', 'main a')],
  ['Coral Springs coverage', '/', async page => {
    await follow(page, '/service-areas/coral-springs/', 'main a');
    await visibleText(page, /Coral Springs/i);
  }],
  ['Car key replacement', '/', async page => {
    await follow(page, '/services/key-replacement/', 'main a');
    await visibleText(page, /replacement|replace/i);
  }],
  ['Key fob programming', '/services/automotive-locksmith/', page => visibleText(page, /(?:key fob.{0,25}program|program.{0,25}key fob)/i)],
  ['Payment methods', '/contact/', page => visibleText(page, /cash.{0,80}credit.{0,80}Zelle.{0,30}Venmo/i)],
  ['Contact navigation', '/', page => follow(page, '/contact/')],
  ['English and Spanish switching', '/', async page => {
    await follow(page, '/es/', 'a[aria-label="Español (ES)"]');
    await page.waitForFunction(() => document.documentElement.lang === 'es');
    await follow(page, '/', 'a[aria-label="English (EN)"]');
    await page.waitForFunction(() => document.documentElement.lang === 'en');
  }],
  ['Educational guide', '/tips/', page => follow(page, '/tips/transponder-car-key-programming-guide/', 'main a')],
  ['Guide to related service', '/tips/transponder-car-key-programming-guide/', page => follow(page, '/services/automotive-locksmith/', 'main a')],
  ['Named call to action', '/', async page => {
    const call = page.locator('main a[href="tel:+17542616528"]:visible').first();
    assert.match(await call.ariaSnapshot({ timeout: 5000 }), /link.*call/i);
  }],
  ['Unknown URL and recovery link', null, async page => {
    await go(page, '/phase-iv-missing-page/', 404);
    await visibleText(page, /Page Not Found/i);
    assert(await page.locator('main a[href="/"]:visible').count());
  }],
  ['Keyboard can open a FAQ without JavaScript', '/faq/', async page => {
    const question = page.locator('main details:not([open]) summary').first();
    await question.press('Enter', { timeout: 4000 });
    assert(await page.locator('main details[open]').count() > 1);
  }, { noJS: true }],
  ['Spanish contact offers equivalent payment facts', '/es/contact/', page => visibleText(page, /efectivo.{0,80}crédito.{0,80}Zelle.{0,30}Venmo/i), { noJS: true }],
  ['Keyboard focus enters and exits the mobile drawer', '/', async page => {
    const toggle = page.getByRole('button', { name: 'Open menu' });
    await toggle.press('Enter', { timeout: 5000 });
    const dialog = page.getByRole('dialog', { name: 'Site navigation' });
    assert.match(await dialog.ariaSnapshot({ timeout: 5000 }), /Main navigation/);
    assert(await dialog.evaluate(node => node.contains(document.activeElement)));
    await page.keyboard.press('Escape');
    await dialog.waitFor({ state: 'hidden', timeout: 5000 });
    assert(await toggle.evaluate(node => document.activeElement === node));
    await toggle.press('Enter', { timeout: 5000 });
    await page.locator('#mobile-site-navigation .plt-mobile-services summary').press('Enter', { timeout: 5000 });
    await follow(page, '/services/', '#mobile-site-navigation a');
    await page.waitForFunction(() => document.activeElement?.id === 'main-content', { timeout: 5000 });
  }, { mobile: true }],
];

try {
  for (const [device, width] of [['desktop', 1280], ['mobile', 390]]) {
    for (const [task, path, run, options = {}] of cases) {
      if (options.mobile && device !== 'mobile') continue;
      const context = await browser.newContext({ viewport: { width, height: 860 }, javaScriptEnabled: !options.noJS });
      await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
      const page = await context.newPage();
      try {
        if (path) await go(page, path);
        await run(page);
        results.push({ device, task, passed: true });
      } catch (error) {
        results.push({ device, task, passed: false, reason: String(error).split('\n')[0] });
      } finally {
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
}
const passed = results.filter(result => result.passed).length;
console.log(`Customer journeys: ${passed}/${results.length} passed.`);
if (process.env.JOURNEY_REPORT) fs.writeFileSync(process.env.JOURNEY_REPORT, JSON.stringify(results, null, 2));
for (const result of results.filter(result => !result.passed)) console.error(result.device, result.task, result.reason);
if (passed !== results.length && !process.env.JOURNEY_REPORT_ONLY) process.exitCode = 1;
