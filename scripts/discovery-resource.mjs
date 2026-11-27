const links = [
  ['Home and mobile service overview', '/'],
  ['Locksmith services', '/services'],
  ['Automotive locksmith and key fob programming', '/services/automotive-locksmith'],
  ['On-site car key replacement', '/services/key-replacement'],
  ['Residential locksmith services', '/services/residential-locksmith'],
  ['Commercial locksmith services', '/services/commercial-locksmith'],
  ['Emergency lockout service', '/services/emergency-lockout-service'],
  ['South Florida service areas', '/service-areas'],
  ['Coral Springs service coverage', '/service-areas/coral-springs'],
  ['Completed locksmith work', '/completed-work'],
  ['Áreas de cerrajería móvil en el sur de Florida', '/es/service-areas'],
  ['Contact, pricing factors and payment methods', '/contact'],
  ['Frequently asked questions', '/faq'],
  ['About Pro Locksmith Tech', '/about'],
  ['Locksmith guides', '/tips'],
  ['Vehicle key compatibility', '/tips/vehicle-key-compatibility'],
  ['Locksmith pricing factors', '/tips/locksmith-pricing-factors'],
  ['Qué hacer si se queda sin acceso', '/es/tips/lockout-what-to-do'],
  ['Servicios de cerrajería en español', '/es/services'],
  ['Contacto y formas de pago', '/es/contact'],
];

export function discoveryResource(registry, business) {
  const canonicals = new Map(registry.filter(route => route.indexable).map(route => [route.path, route.canonical]));
  const directory = links.map(([label, path]) => {
    const canonical = canonicals.get(path);
    if (!canonical) throw new Error(`Missing indexable discovery route: ${path}`);
    return `- [${label}](${canonical})`;
  });
  const { BUSINESS_NAME, PHONE, SERVICE_SINCE, PAYMENT_METHODS, VERIFIED_PROFILES } = business;
  return [
    `# ${BUSINESS_NAME}`,
    '',
    `> ${BUSINESS_NAME} provides 24/7 mobile locksmith service in South Florida and has served the area since ${SERVICE_SINCE}. Technicians travel to vehicles, homes and businesses in served parts of Broward, Miami-Dade and Palm Beach counties.`,
    '',
    `Call ${PHONE} to discuss your location, service and availability. Accepted payments include ${PAYMENT_METHODS.en}.`,
    '',
    '## Official pages',
    '',
    ...directory,
    '',
    '## Verified business profiles',
    '',
    ...VERIFIED_PROFILES.map(([name, url]) => `- [${name}](${url})`),
    '',
    'This optional directory describes public pages. Crawler policies are published in robots.txt.',
    '',
  ].join('\n');
}
