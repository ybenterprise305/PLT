// Browser checks run in CI against the built site (npm run preview must be running).
import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:4173';
const routes = ['/', '/services', '/services/emergency-lockout-service', '/service-areas', '/service-areas/boca-raton', '/contact', '/lp/car-lockout', '/blog', '/faq'];
const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1280, height: 800 },
];

const failures = [];
const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(String(e)));
    const res = await page.goto(BASE + route, { waitUntil: 'networkidle' });
    const tag = `${vp.name} ${route}`;
    if (!res || res.status() >= 400) { failures.push(`${tag}: HTTP ${res && res.status()}`); await page.close(); continue; }

    const bad = errors.filter((e) => /hydrat|#418|#423|#425|did not match|Minified React error/i.test(e));
    if (bad.length) failures.push(`${tag}: hydration/console errors: ${bad[0].slice(0, 160)}`);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) failures.push(`${tag}: page scrolls sideways by ${overflow}px`);

    const h1 = await page.locator('h1').count();
    if (h1 < 1) failures.push(`${tag}: no <h1>`);

    await page.close();
  }
  await context.close();
}

// Sticky header + in-page link navigation (no full reload) on the phone size
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(300);
  const top = await page.evaluate(() => document.querySelector('header')?.getBoundingClientRect().top);
  if (top === undefined || Math.abs(top) > 2) failures.push(`phone /: header not pinned to top while scrolling (top=${top})`);

  await page.evaluate(() => { window.__plt_marker = 'same-page'; window.scrollTo(0, 0); });
  const link = page.locator('main a[href="/services"]').first();
  if (await link.count()) {
    await link.click();
    await page.waitForURL('**/services');
    const marker = await page.evaluate(() => window.__plt_marker);
    if (marker !== 'same-page') failures.push('link click caused a full page reload instead of in-page navigation');
  } else {
    failures.push('home page has no /services link in main');
  }
  await context.close();
}

await browser.close();
if (failures.length) {
  console.error('SITE CHECK FAILED:\n- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('Site checks passed');
