import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const services = [
  'emergency-lockout-service', 'residential-locksmith', 'commercial-locksmith',
  'automotive-locksmith', 'lock-repair', 'lock-replacement', 'lock-rekeying',
  'key-duplication', 'key-replacement', 'lock-installation', 'security-hardware',
  'emergency-locksmith-service',
];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE });

try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await context.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort());
  await context.addInitScript(() => {
    window.pltConversionEvents = [];
    window.gtag = (...args) => {
      if (args[0] === 'event') window.pltConversionEvents.push(args);
    };
    document.addEventListener('click', event => {
      if (event.target.closest('a[href^="tel:"]')) event.preventDefault();
    }, true);
  });
  const page = await context.newPage();
  let serviceVisits = 0;

  for (const prefix of ['', '/es']) {
    for (const slug of services) {
      const path = `${prefix}/services/${slug}/`;
      const result = await page.goto(base + path);
      assert.equal(result.status(), 200, path);
      const panel = page.locator('#service-direct-help');
      assert.equal(await panel.count(), 1, `Missing conversion panel at ${path}`);
      assert((await panel.textContent()).trim().length > 15, `Empty conversion panel at ${path}`);
      const cta = page.locator('section[aria-labelledby="service-direct-help"] a[href="tel:+17542616528"]');
      assert.equal(await cta.count(), 1, `Missing benefit CTA at ${path}`);
      assert(await cta.isVisible(), `Hidden benefit CTA at ${path}`);
      await cta.click();
      const clicks = await page.evaluate(() => window.pltConversionEvents.filter(args => args[1] === 'phone_click'));
      assert.equal(clicks.length, 1, `Duplicate/missing phone click at ${path}`);
      assert.equal(clicks[0][2].service_category, slug, `Incorrect service attribution at ${path}`);
      assert.equal(clicks[0][2].page_path, path.slice(0, -1), `Incorrect path attribution at ${path}`);
      serviceVisits++;
    }
    const home = await page.goto(base + (prefix || '/') + (prefix ? '/' : ''));
    assert.equal(home.status(), 200);
    assert(await page.locator('section[aria-label="Why customers call us"], section[aria-label="Ventajas de nuestro servicio"]').count());
    assert.equal(await page.locator('section[aria-label="Why customers call us"] h2, section[aria-label="Ventajas de nuestro servicio"] h2').count(), 3);

    const contact = await page.goto(base + `${prefix}/contact/`);
    assert.equal(contact.status(), 200);
    const mainCopy = await page.locator('main').innerText();
    assert(!/mobile vans on duty right now|unidades móviles en servicio ahora|100% direct live contact/i.test(mainCopy));
  }
  await context.close();
  console.log(`Phase VIII conversion checks passed across ${serviceVisits} bilingual service renders, 2 homepages and 2 contact pages. No real calls were placed.`);
} finally {
  await browser.close();
}
