import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parse } from 'parse5';
import sharp from 'sharp';

const registry = JSON.parse(fs.readFileSync('src/generated/build-seo-inventory.json', 'utf8')).pages;
const indexable = new Set(registry.filter(route => route.indexable).map(route => route.canonical));
const guides = registry.filter(route => route.type === 'guide');
const editorial = registry.filter(route => ['article', 'guide'].includes(route.type));
const read = path => fs.readFileSync(`dist${path.replace(/\/$/, '')}/index.html`, 'utf8');
const articles = new Set();
const catalog = new Map([['en', read('/tips')], ['es', read('/es/tips')]]);
const normalize = text => text.replace(/\s+/g, ' ').trim();
const elements = node => [node, ...(node.childNodes ?? []).flatMap(elements)];
const textOf = node => node.tagName === 'script' ? '' : node.value ?? (node.childNodes ?? []).map(textOf).join(' ');
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;

for (const entry of editorial) {
  const tree = elements(parse(read(entry.path)));
  const main = tree.find(node => node.tagName === 'main');
  assert(main, `${entry.path}: no main landmark`);
  const sections = elements(main).filter(node => node.tagName === 'section').map(node => normalize(textOf(node))).filter(Boolean);
  const material = sections.join(' ').toLowerCase();
  assert(sections.length >= 3 && material.length >= 550, `${entry.path}: incomplete initial editorial content`);
  assert(!articles.has(material), `${entry.path}: duplicated editorial content`);
  articles.add(material);
  if (entry.type !== 'guide') continue;
  const path = new URL(entry.canonical).pathname;
  assert(indexable.has(entry.canonical) && catalog.get(entry.language).includes(`href="${path}"`), `${entry.path}: absent from its language directory`);
  const links = elements(main).filter(node => node.tagName === 'a').map(node => attr(node, 'href'));
  assert(links.some(href => /^\/(es\/)?(services\/|contact\/)/.test(href)), `${entry.path}: missing relevant service or contact link`);
}

for (const width of [320, 640]) {
  const file = `dist/resource-images/car-key-fob-comparison-${width}.webp`;
  const meta = await sharp(file).metadata();
  assert.equal(meta.width, width);
  assert.equal(meta.format, 'webp');
  assert(!meta.exif && !meta.iptc && !meta.xmp && fs.statSync(file).size < 60000, `Unexpected metadata or size in ${file}`);
}

console.log(`Verified initial editorial content on ${editorial.length} pages and directory links for ${guides.length} guides.`);
