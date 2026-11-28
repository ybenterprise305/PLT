import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { parse } from 'parse5';
import sharp from 'sharp';

const { outputFiles } = await build({
  stdin: {
    contents: `
      export { COUNTIES_DATA } from './src/data/locationsData';
      export { getNeighborhoods } from './src/data/neighborhoods';
      export { getLocalHelp, nearbyServiceAreas } from './src/data/localServiceContent';
      export { workExamples, workExampleImage, WORK_PATH } from './src/data/completedWork';
    `,
    resolveDir: process.cwd(),
  },
  bundle: true, platform: 'node', format: 'esm', write: false,
});
const { COUNTIES_DATA, getNeighborhoods, getLocalHelp, nearbyServiceAreas, workExamples, workExampleImage, WORK_PATH } =
  await import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));

const pages = JSON.parse(fs.readFileSync('src/generated/build-seo-inventory.json', 'utf8')).pages;
const live = new Map(pages.map(route => [route.path, route]));
const directory = '/service-areas';
const site = 'https://prolocksmith-tech.com';
const walk = node => [node, ...(node.childNodes ?? []).flatMap(walk)];
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.value ?? (node.childNodes ?? []).map(text).join(' ');
const read = path => {
  const tree = walk(parse(fs.readFileSync(`dist${path}/index.html`, 'utf8')));
  const main = tree.find(node => node.tagName === 'main');
  assert(main, `Missing main landmark at ${path}`);
  return walk(main);
};
const hasLink = (nodes, href) => nodes.some(node => node.tagName === 'a' && attr(node, 'href') === href);
const routes = new Set();
const cities = new Set();
const headings = new Set();

function checkPublished(path, parent) {
  const route = live.get(path);
  assert(route?.indexable && route.sitemap && route.canonical === site + path + '/', `Invalid publication at ${path}`);
  assert.equal(route.parent, parent, `Invalid geographic parent at ${path}`);
  routes.add(path);
  const nodes = read(path);
  const h1 = nodes.filter(node => node.tagName === 'h1');
  assert.equal(h1.length, 1);
  assert(!headings.has(text(h1[0])), `Duplicate local heading at ${path}`);
  headings.add(text(h1[0]));
  return nodes;
}

for (const locale of ['', '/es']) {
  const directoryPath = locale + directory;
  const directoryNodes = checkPublished(directoryPath, locale || '/');
  for (const county of COUNTIES_DATA) {
    const countyPath = directoryPath + '/' + county.slug;
    assert(hasLink(directoryNodes, countyPath + '/'), `County absent from ${directoryPath}`);
    const countyNodes = checkPublished(countyPath, directoryPath);
    for (const city of county.majorCities) {
      const cityPath = directoryPath + '/' + city.slug;
      if (!locale) {
        assert(!cities.has(city.slug), `Duplicate city slug ${city.slug}`);
        cities.add(city.slug);
        assert.equal(Boolean(getLocalHelp(city.slug)), city.priorityTier < 3);
      }
      assert(hasLink(directoryNodes, cityPath + '/') && hasLink(countyNodes, cityPath + '/'), `Missing locality link to ${cityPath}`);
      const cityNodes = checkPublished(cityPath, countyPath);
      assert(hasLink(cityNodes, countyPath + '/'), `Missing county link at ${cityPath}`);
      assert(cityNodes.some(node => node.tagName === 'a' && attr(node, 'href')?.startsWith(locale + '/services/')), `Missing service at ${cityPath}`);
      for (const nearby of nearbyServiceAreas[city.slug] ?? []) {
        assert(nearby !== city.slug && hasLink(cityNodes, directoryPath + '/' + nearby + '/'), `Invalid nearby link at ${cityPath}`);
      }
      for (const area of getNeighborhoods(city.slug)) {
        const areaPath = directory + '/' + city.slug + '/' + area.slug;
        assert(hasLink(cityNodes, areaPath + '/'), `Missing neighborhood link at ${cityPath}`);
        if (locale) continue;
        const areaNodes = checkPublished(areaPath, cityPath);
        assert(hasLink(areaNodes, cityPath + '/'), `Neighborhood missing parent link at ${areaPath}`);
        assert(hasLink(areaNodes, '/services/' + area.service + '/'), `Neighborhood missing relevant service at ${areaPath}`);
      }
    }
  }
}

assert.equal(workExamples.length, 4);
assert.equal(new Set(workExamples.map(job => job.id)).size, workExamples.length);
for (const locale of ['', '/es']) {
  const workPath = locale + WORK_PATH;
  const main = checkPublished(workPath, locale || '/');
  assert.equal(main.filter(node => node.tagName === 'img').length, workExamples.length);
  assert(main.some(node => node.tagName === 'p' && /images illustrate|imágenes ilustran/i.test(text(node))), workPath);
  for (const job of workExamples) {
    const image = workExampleImage(job);
    const node = main.find(node => node.tagName === 'img' && attr(node, 'src') === image.src);
    assert(node && attr(node, 'alt') && attr(node, 'loading') === 'lazy');
    assert.equal(attr(node, 'width'), String(image.width));
    assert.equal(attr(node, 'height'), String(image.height));
    assert.equal(attr(node, 'srcset'), image.srcSet);
    assert(main.some(node => node.tagName === 'li' && attr(node, 'id') === job.id));
    assert(hasLink(main, locale + '/services/' + job.service + '/'));
  }
}
for (const job of workExamples) {
  const image = workExampleImage(job);
  for (const variant of image.srcSet.split(', ')) {
    const [path, descriptor] = variant.split(' ');
    const file = 'dist' + path;
    const meta = await sharp(file).metadata();
    assert.equal(meta.format, 'webp');
    assert.equal(meta.width + 'w', descriptor);
    if (path === image.src) assert.equal(meta.height, image.height);
    assert(!meta.exif && !meta.iptc && !meta.xmp && !meta.hasProfile && fs.statSync(file).size < 65000, path);
  }
}
const rejected = /completed-work-images|car-key-fob-comparison-(320|640)\.webp/;
const deploymentFiles = fs.readdirSync('dist', { recursive: true });
for (const relative of deploymentFiles) {
  assert(!rejected.test(relative), `Rejected asset remains in build: ${relative}`);
  if (/\.(html|js|xml|json|txt)$/.test(relative) && fs.statSync('dist/' + relative).isFile()) {
    assert(!rejected.test(fs.readFileSync('dist/' + relative, 'utf8')), `Rejected reference in ${relative}`);
  }
}
console.log(`Verified ${routes.size - 2} geographic routes, ${cities.size} classified localities, and four authorized illustrated service categories in both languages.`);
