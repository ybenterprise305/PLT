import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';

const { outputFiles } = await build({
  stdin: {
    contents: `
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
  format: 'esm',
  write: false,
});

const encoded = Buffer.from(outputFiles[0].text).toString('base64');
const { services, counties } = await import(`data:text/javascript;base64,${encoded}`);
await mkdir('src/generated', { recursive: true });
await writeFile('src/generated/navigation.ts',
  `// Generated from service and area data by scripts/generate-navigation.mjs.\nexport const services = ${JSON.stringify(services, null, 2)};\nexport const counties = ${JSON.stringify(counties, null, 2)};\n`);
