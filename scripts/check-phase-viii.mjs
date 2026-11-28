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

async function openContext(width) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
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
  return context;
}

async function assertCall(page, link, label) {
  const before = await page.evaluate(() => window.pltConversionEvents.length);
  await link.scrollIntoViewIfNeeded();
  await link.click();
  await page.waitForFunction(count => window.pltConversionEvents.length > count, before);
  const events = await page.evaluate(count => window.pltConversionEvents.slice(count).filter(args => args[1] === 'phone_click'), before);
  assert.equal(events.length, 1, label);
  assert.equal(events[0][2].event_label, label);
}

const phone = 'a[href="tel:+17542616528"]';

try {
  const context = await openContext(390);
  const page = await context.newPage();
  let serviceVisits = 0;

  for (const prefix of ['', '/es']) {
    for (const slug of services) {
      const path = `${prefix}/services/${slug}/`;
      const result = await page.goto(base + path);
      assert.equal(result.status(), 200, path);
      const panel = page.locator('#service-direct-help');
      assert.equal(await panel.count(), 1, `Missing conversion panel at ${path}`);
      assert.equal(await panel.innerText(), prefix ? 'Soluciones de cerrajería en su ubicación' : 'Locksmith help where you need it');
      assert((await panel.locator('..').locator('p').first().innerText()).trim().length > 40, `Empty conversion benefits at ${path}`);
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

  let pathsPassed = 0;
  for (const width of [390, 1440]) {
    const visitor = await openContext(width);
    const journey = await visitor.newPage();
    for (const prefix of ['', '/es']) {
      const servicePath = `${prefix}/services/automotive-locksmith/`;
      await journey.goto(base + prefix + '/');
      await journey.locator(`main a[href="${servicePath}"]`).first().click();
      await journey.waitForURL(base + servicePath);
      await assertCall(journey, journey.locator(`section[aria-labelledby="service-direct-help"] ${phone}`), 'service_benefit_call');
      pathsPassed++;

      await journey.goto(base + prefix + '/service-areas/');
      await journey.getByRole('searchbox').fill('Coral Springs');
      const cityPath = prefix + '/service-areas/coral-springs/';
      await journey.locator(`main a[href="${cityPath}"]`).click();
      await journey.waitForURL(base + cityPath);
      await assertCall(journey, journey.locator(`main ${phone}`).first(), prefix ? 'spanish_city_call' : 'city_hero_call');
      pathsPassed++;

      await journey.goto(base + prefix + '/services/emergency-lockout-service/');
      const bar = journey.getByRole('complementary', { name: prefix ? 'Llamada rápida' : 'Quick call' });
      assert.equal(await bar.isVisible(), width < 1024);
      if (width < 1024) {
        const box = await bar.getByRole('link').boundingBox();
        assert(box && box.height >= 44 && box.y + box.height <= 844);
        await assertCall(journey, bar.getByRole('link'), 'mobile_sticky_bottom_bar');
      } else {
        await assertCall(journey, journey.locator(`section[aria-labelledby="service-direct-help"] ${phone}`), 'service_benefit_call');
      }
      pathsPassed++;
    }

    // The existing canonical reviews route is English-only.
    await journey.goto(base + '/reviews/');
    const call = journey.locator(`main ${phone}`).first();
    const bounds = await call.boundingBox();
    assert(bounds && bounds.y >= 0 && bounds.y + bounds.height < 844, 'Reviews call CTA below the initial viewport');
    await assertCall(journey, call, 'reviews_hero_call');
    pathsPassed++;

    await visitor.close();
  }
  console.log(`Phase VIII customer journeys: ${pathsPassed} verified mobile and desktop paths.`);
  console.log(`Phase VIII conversion checks passed across ${serviceVisits} bilingual service renders, 2 homepages and 2 contact pages. No real calls were placed.`);
} finally {
  await browser.close();
}
