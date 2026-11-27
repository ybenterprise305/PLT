import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const root = path.resolve('dist');
const budget = { jsGzip: 150 * 1024, cssGzip: 25 * 1024, image: 175 * 1024, fonts: 100 * 1024 };
const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('index.html'));
const gzipBytes = new Map();
const size = url => {
  if (!gzipBytes.has(url)) gzipBytes.set(url, gzipSync(fs.readFileSync(path.join(root, url))).length);
  return gzipBytes.get(url);
};
let largestJs = 0;
let largestCss = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const js = new Set([...html.matchAll(/(?:src|href)="(\/assets\/[^"]+\.js)"/g)].map(match => match[1]));
  const css = new Set([...html.matchAll(/href="(\/assets\/[^"]+\.css)"/g)].map(match => match[1]));
  const jsBytes = [...js].reduce((total, url) => total + size(url), 0);
  const cssBytes = [...css].reduce((total, url) => total + size(url), 0);
  assert(js.size >= 2, `${file} missing client entry or preload`);
  assert(css.size > 0, `${file} missing its CSS`);
  assert(jsBytes <= budget.jsGzip, `${file} loads ${jsBytes} gzip JS bytes`);
  assert(cssBytes <= budget.cssGzip, `${file} loads ${cssBytes} gzip CSS bytes`);
  largestJs = Math.max(largestJs, jsBytes);
  largestCss = Math.max(largestCss, cssBytes);

  for (const match of html.matchAll(/(?:src|srcset|imagesrcset)="([^"]+)"/g)) {
    for (const candidate of match[1].split(/,\s*(?=\/)/)) {
      const url = candidate.split(/\s+/)[0];
      if (!/^\/(assets|home-images|service-images|ppc-images)\//.test(url)) continue;
      assert(fs.existsSync(path.join(root, url)), `${file} references missing ${url}`);
    }
  }
}
const mediaFolders = ['home-images', 'service-images', 'ppc-images'];
for (const directory of mediaFolders) {
  for (const file of fs.readdirSync(path.join(root, directory))) {
    assert(fs.statSync(path.join(root, directory, file)).size <= budget.image, `${file} exceeds media budget`);
  }
}
const latinFonts = fs.readdirSync(path.join(root, 'assets')).filter(file => /-latin-wght-normal-.*\.woff2$/.test(file));
assert.equal(latinFonts.length, 2, 'expected both local normal Latin fonts');
assert(latinFonts.reduce((sum, file) => sum + fs.statSync(path.join(root, 'assets', file)).size, 0) <= budget.fonts);
const notFound = fs.readFileSync(path.join(root, '404.html'), 'utf8');
assert(notFound.includes('noindex, follow') && notFound.includes('Page Not Found') && !notFound.includes('type="module"'));
console.log(`Checked assets and budgets for ${files.length} pages. Maximum initial gzip JS ${largestJs} B and CSS ${largestCss} B.`);
