// Browser checks run in CI against the built site (npm run preview must be running).
import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:4173';
const routes = ['/', '/services', '/services/emergency-lockout-service', '/service-areas', '/service-areas/boca-raton', '/contact', '/lp/car-lockout', '/blog', '/tips', '/about', '/reviews', '/faq', '/es', '/es/services', '/es/service-areas/boca-raton', '/es/contact', '/completed-work', '/es/completed-work'];
const viewports = [
  { name: 'small phone', width: 320, height: 720 },
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1280, height: 800 },
];

const failures = [];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE });

async function localContext(options = {}) {
  const context = await browser.newContext(options);
  const origin = new URL(BASE).origin;
  await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  return context;
}

for (const vp of viewports) {
  const context = await localContext({ viewport: { width: vp.width, height: vp.height } });
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

    // Every public page (English, Spanish, organic or PPC) must offer phone calls only.
    const clippedControls = await page.locator('header [aria-controls="mobile-site-navigation"]:visible').evaluateAll(nodes =>
      nodes.some(node => {
        const bounds = node.getBoundingClientRect();
        return bounds.right > innerWidth || bounds.left < 0;
      })
    );
    if (clippedControls) failures.push(`${tag}: menu control is clipped`);

    const smsLinks = await page.locator('a[href^="sms:"]').count();
    if (smsLinks) failures.push(`${tag}: found ${smsLinks} forbidden SMS/text buttons`);
    const liveCallLinks = await page.locator('a[href="tel:+17542616528"]').count();
    if (!liveCallLinks) failures.push(`${tag}: missing call-to-phone action`);

    const h1 = await page.locator('h1').count();
    if (h1 < 1) failures.push(`${tag}: no <h1>`);

    await page.close();
  }
  await context.close();
}

// Sticky header + in-page link navigation (no full reload) on the phone size
{
  const context = await localContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(300);
  const top = await page.evaluate(() => document.querySelector('header')?.getBoundingClientRect().top);
  if (top === undefined || Math.abs(top) > 2) failures.push(`phone /: header not pinned to top while scrolling (top=${top})`);

  // This used to break after scrolling: verify drawer remains tappable below a sticky header.
  const toggle = page.locator('button[aria-controls="mobile-site-navigation"]');
  try {
    await toggle.click({timeout:5000});
    const drawer = page.locator('#mobile-site-navigation');
    await drawer.waitFor({state:'visible',timeout:5000});
    const rect = await drawer.boundingBox();
    if (!rect || rect.y < 40 || rect.y >= 180) failures.push('phone /: mobile drawer is not positioned beneath visible header after scrolling');
    const aria = await toggle.getAttribute('aria-expanded');
    if (aria !== 'true') failures.push('phone /: menu button aria-expanded is not true after opening');
    await page.keyboard.press('Escape');
    await drawer.waitFor({state:'detached',timeout:5000});
    await toggle.click({timeout:5000});
    await page.locator('#mobile-site-navigation a[href="/services/"]').click({timeout:5000});
    await page.waitForURL('**/services/',{timeout:5000});
    if (await page.locator('#mobile-site-navigation').count()) failures.push('phone /: drawer remained open after route navigation');
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  } catch (error) { failures.push('phone /: menu cannot be opened after scrolling: '+String(error).slice(0,200)); }

  await page.evaluate(() => { window.__plt_marker = 'same-page'; window.scrollTo(0, 0); });
  const link = page.locator('a[href="/services/"]:visible').first();
  if (await link.count()) {
    await link.click();
    await page.waitForURL('**/services/');
    const marker = await page.evaluate(() => window.__plt_marker);
    if (marker !== 'same-page') failures.push('link click caused a full page reload instead of in-page navigation');
  } else {
    failures.push('home page has no /services link in main');
  }
  await context.close();
}

// Every campaign must have its own image URL and a working mobile call action.
{
  const context = await localContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const campaignSlugs=['car-lockout','car-key-replacement','house-lockout','lock-rekeying','commercial-locksmith','emergency-locksmith','smart-lock-installation','ignition-repair','broken-key-extraction','deadbolt-installation','lock-change','safe-lockout','storage-unit-lockout','car-key-fob-programming','lost-car-keys'];
  const seenImages=new Set();
  for (const slug of campaignSlugs) {
    const res=await page.goto(BASE+'/lp/'+slug,{waitUntil:'domcontentloaded'});
    if (!res || res.status() >= 400) {failures.push(slug+': PPC page unavailable');continue;}
    const img=page.locator('main img[src*="/ppc-images/"]').first();
    if (!await img.count()) {failures.push(slug+': missing dedicated hero image');continue;}
    const src=await img.getAttribute('src');
    if (slug === 'car-lockout' && src !== '/ppc-images/car-lockout-lishi.webp') failures.push('car-lockout: expected professional Lishi tool photo');
    if (seenImages.has(src)) failures.push(slug+': identical PPC image path shared with another campaign');
    seenImages.add(src);
    const imageStatus=await page.request.get(BASE+src);
    if (!imageStatus.ok()) failures.push(slug+': PPC image URL failed with HTTP '+imageStatus.status());
    if (await page.locator('a[href="tel:+17542616528"]').count() < 3) failures.push(slug+': missing repeated call links');
    if (await page.locator('a[href^="sms:"]').count()) failures.push(slug+': SMS option must not appear on PPC page');
    if (!await page.locator('main').textContent().then(x=>x?.includes('Google'))) failures.push(slug+': missing authentic Google review reference');
  }
  await context.close();
}

// Language switch: English home -> Spanish home (URL changes, page language changes, links stay Spanish)
{
  const context = await localContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.locator('a[aria-label="Español (ES)"]:visible').first().click();
  await page.waitForURL('**/es/');
  const lang = await page.evaluate(() => document.documentElement.lang);
  if (lang !== 'es') failures.push(`language switch: <html lang> is "${lang}" after switching to Spanish`);
  const spanishLinks = await page.locator('a[href="/es/services/"]:visible').count();
  if (spanishLinks < 1) failures.push('Spanish home page has no visible link to /es/services');
  const englishLeak = await page.locator('main a[href="/services/"]').count();
  if (englishLeak > 0) failures.push(`Spanish home page still has ${englishLeak} links to the English /services page`);
  await page.locator('a[aria-label="English (EN)"]:visible').first().click();
  await page.waitForURL(BASE + '/');
  await context.close();
}

await browser.close();
if (failures.length) {
  console.error('SITE CHECK FAILED:\n- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('Site checks passed');
