// Checks every pre-rendered page for basic search-engine problems. Runs in CI after the build.
import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name === 'index.html' ? [p] : [];
  });
}

const files = walk('dist').filter((f) => !f.includes(`${path.sep}assets${path.sep}`));
const problems = [];
const titles = new Map();
const decode = (v) => v.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const page = '/' + path.relative('dist', path.dirname(file)).split(path.sep).join('/');
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const canonicals = html.match(/<link rel="canonical"/g) || [];
  const h1s = html.match(/<h1[\s>]/g) || [];

  if (!title) problems.push(`${page}: missing title`);
  if (title.length > 60) problems.push(`${page}: title is ${title.length} characters (max 60): ${title}`);
  if (!desc) problems.push(`${page}: missing description`);
  if (desc.length > 160) problems.push(`${page}: description is ${desc.length} characters (max 160)`);
  if (canonicals.length !== 1) problems.push(`${page}: ${canonicals.length} canonical tags (need exactly 1)`);
  if (h1s.length !== 1) problems.push(`${page}: ${h1s.length} <h1> headings (need exactly 1)`);
  const isSpanishPage = page === '/es' || page.startsWith('/es/');
  const hreflangs = html.match(/<link rel="alternate" hreflang=/g) || [];
  if (isSpanishPage && !html.includes('<html lang="es">')) problems.push(`${page}: Spanish page is not marked lang="es"`);
  if (isSpanishPage && hreflangs.length !== 3) problems.push(`${page}: ${hreflangs.length} language-alternate links (need 3)`);
  if (isSpanishPage && /noindex/.test(html)) problems.push(`${page}: Spanish page is set to noindex`);
  if (titles.has(title)) problems.push(`${page}: same title as ${titles.get(title)}`);
  titles.set(title, page);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { problems.push(`${page}: a structured-data block is not valid JSON`); }
  }
}

const home = fs.readFileSync('dist/index.html', 'utf8');
if (!home.includes('"sameAs"')) problems.push('/: business schema has no sameAs');

const spanishCount = files.filter((f) => f.includes(`dist${path.sep}es${path.sep}`) || f === path.join('dist', 'es', 'index.html')).length;
if (spanishCount < 30) problems.push(`only ${spanishCount} Spanish pages were built (expected 40+)`);
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
if (!sitemap.includes('https://prolocksmith-tech.com/es/services') || !sitemap.includes('xhtml:link')) problems.push('sitemap.xml has no Spanish pages or language alternates');

console.log(`Checked ${files.length} pre-rendered pages (${spanishCount} Spanish)`);
if (problems.length) {
  console.error('SEO CHECK FAILED:\n- ' + problems.join('\n- '));
  process.exit(1);
}
console.log('SEO checks passed');
