import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';

const { outputFiles } = await build({
  stdin: {
    contents: `
      export { getRouteRegistry, errorRoute, serviceRedirects } from './src/config/routeRegistry';
      import { SERVICES_DATA } from './src/data/servicesData';
      import { COUNTIES_DATA } from './src/data/locationsData';
      import { SPANISH_SERVICES, SPANISH_COUNTIES } from './src/data/spanishTranslations';
      const localize = ({ id, slug, name }, translated) => ({ id, slug, name, spanishName: translated?.name || name });
      export const services = SERVICES_DATA.slice(0, 8).map(service => localize(service, SPANISH_SERVICES[service.slug]));
      export const counties = COUNTIES_DATA.map(county => ({
        ...localize(county, SPANISH_COUNTIES[county.slug]),
        majorCities: county.majorCities.slice(0, 3).map(({ id, slug, name }) => ({ id, slug, name })),
      }));
    `,
    resolveDir: process.cwd(),
  },
  bundle: true,
  platform: 'node',
  loader: { '.webp': 'empty' },
  format: 'esm',
  write: false,
});

const encoded = Buffer.from(outputFiles[0].text).toString('base64');
const { services, counties, getRouteRegistry, errorRoute, serviceRedirects } = await import(`data:text/javascript;base64,${encoded}`);
await mkdir('src/generated', { recursive: true });
await writeFile('src/generated/navigation.ts',
  `// Generated from service and area data by scripts/generate-navigation.mjs.\nexport const services = ${JSON.stringify(services, null, 2)};\nexport const counties = ${JSON.stringify(counties, null, 2)};\n`);

const registry = getRouteRegistry();
const clients = Object.fromEntries(registry.map(route => [route.path, [route.page, route.slug || '']]));
const translations = registry.filter(route => route.language === 'en' && route.alternates).map(route => route.path);
await writeFile('src/generated/routeData.ts',
  `// Generated from the publication registry.
export const clients: Record<string, [string, string]> = ${JSON.stringify(clients)};
export const translations = new Set<string>(${JSON.stringify(translations)});
export const serviceRedirects: Record<string, string> = ${JSON.stringify(serviceRedirects)};
`);
await writeFile('src/generated/seoInventory.json', JSON.stringify({ pages: registry, errorRoute, serviceRedirects }, null, 2));
