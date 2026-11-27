// Runs after `vite build` and `vite build --ssr`. Writes a ready-made HTML file for every
// page so visitors, Google and AI assistants get the full content without waiting for JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Vite 8 may emit the SSR entry in assets/ with a content hash. Resolve the
// actual generated entry instead of assuming a fixed file name.
const serverDir = path.join(root, 'dist-server');
const candidates = [
  path.join(serverDir, 'entry-server.js'),
  ...(
    fs.existsSync(path.join(serverDir, 'assets'))
      ? fs.readdirSync(path.join(serverDir, 'assets'))
          .filter((name) => /^entry-server(?:-[A-Za-z0-9_-]+)?\.js$/.test(name))
          .map((name) => path.join(serverDir, 'assets', name))
      : []
  ),
].filter((file) => fs.existsSync(file));

if (candidates.length !== 1) {
  throw new Error(
    `Expected exactly one built SSR entry in dist-server, found ${candidates.length}: ${candidates.join(', ')}`
  );
}
const { render, SITE, homeVan } = await import(pathToFileURL(candidates[0]).href);

const manifest = JSON.parse(fs.readFileSync(path.join(dist, '.vite/manifest.json'), 'utf8'));
const sharedPreloads = new Set([...template.matchAll(/rel="modulepreload"[^>]*href="\/([^"]+)"/g)].map(match => match[1]));

function preloadRoute(html, moduleId) {
  const visited = new Set();
  const files = new Set();
  function visit(id) {
    if (visited.has(id)) return;
    visited.add(id);
    const entry = manifest[id];
    if (!entry) throw new Error(`Missing client module for ${id}`);
    if (!sharedPreloads.has(entry.file)) files.add(entry.file);
    for (const dependency of entry.imports ?? []) visit(dependency);
  }
  visit(moduleId);
  const tags = [...files].map(file => `  <link rel="modulepreload" crossorigin href="/${file}" />`);
  return html.replace('</head>', tags.join('\n') + '\n  </head>');
}
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setMeta(html, attr, name, value) {
  const re = new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${name}" content="${esc(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

function withHead(html, head) {
  if (!head) throw new Error('Page did not provide SEO metadata');
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(head.title)}</title>`);
  for (const [name, value] of Object.entries(head.meta)) {
    html = setMeta(html, name.startsWith('og:') ? 'property' : 'name', name, value);
  }
  html = html.replace(/<link rel="canonical"[^>]*>\s*/g, '');
  const links = head.canonical ? [`  <link rel="canonical" href="${esc(head.canonical)}" />`] : [];
  for (const [language, url] of head.alternates) {
    links.push(`  <link rel="alternate" hreflang="${language}" href="${esc(url)}" />`);
  }
  return html.replace('</head>', links.join('\n') + '\n  </head>');
}

const { pages, errorRoute, serviceRedirects } = JSON.parse(fs.readFileSync(path.join(root, 'src/generated/seoInventory.json'), 'utf8'));
const headings = new Map();
let count = 0;
for (const record of [...pages, errorRoute]) {
  const route = record.path;
  const { html, head, moduleId } = await render(route);
  let page = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  if (page === template) throw new Error('Could not find <div id="root"></div> in dist/index.html');
  page = withHead(page, head);
  if (head.canonical !== record.canonical || head.robots.startsWith('noindex') === record.indexable) {
    throw new Error(`Render metadata disagrees with registry for ${route}`);
  }
  if (JSON.stringify(Object.fromEntries(head.alternates)) !== JSON.stringify(record.alternates || {})) {
    throw new Error(`Render alternates disagree with registry for ${route}`);
  }
  headings.set(route, { title: head.title, description: head.meta.description, robots: head.robots });
  if (route === '/404.html') {
    // The same shared document can be returned under any missing URL without a hydration mismatch.
    page = page.replace(/<script type="module"[^>]*><\/script>\s*/g, '')
      .replace(/<link rel="modulepreload"[^>]*>\s*/g, '')
      .replace(/<link rel="canonical"[^>]*>\s*/g, '');
  } else {
    page = preloadRoute(page, moduleId);
  }
  if (route === '/' || route === '/es') {
    page = page.replace('</head>', `  <link rel="preload" as="image" type="image/avif" href="${homeVan.avif}" imagesrcset="${homeVan.srcSet('avif')}" imagesizes="${homeVan.sizes}" fetchpriority="high" />\n  </head>`);
  }
  if (record.language === 'es') page = page.replace('<html lang="en">', '<html lang="es">');
  const out = route === '/404.html'
    ? path.join(dist, '404.html')
    : path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  count += 1;
}
console.log(`Pre-rendered ${count} documents`);

const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const record of pages.filter(page => page.sitemap)) {
  xml.push('  <url>', `    <loc>${esc(record.canonical)}</loc>`);
  if (record.lastModified) xml.push(`    <lastmod>${record.lastModified}</lastmod>`);
  for (const [language, url] of Object.entries(record.alternates || {})) {
    xml.push(`    <xhtml:link rel="alternate" hreflang="${language}" href="${esc(url)}" />`);
  }
  xml.push('  </url>');
}
xml.push('</urlset>', '');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml.join('\n'));

const redirects = [['/lp', '/services/']];
for (const [from, to] of Object.entries(serviceRedirects)) redirects.push(['/services/' + from, '/services/' + to + '/']);
fs.writeFileSync(path.join(dist, '_redirects'), redirects.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]).join('\n') + '\n');
fs.writeFileSync(path.join(root, 'src/generated/build-seo-inventory.json'), JSON.stringify({
  pages: [...pages, errorRoute].map(record => ({ ...record, ...headings.get(record.path), publication: 'published' })),
  redirects,
}, null, 2));
if (!fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8').includes(`Sitemap: ${SITE}/sitemap.xml`)) throw new Error('robots.txt must advertise the canonical sitemap');

// Prevent blog-related service links from pointing to nonexistent service routes.
const serviceSource = fs.readFileSync(path.join(root, 'src/data/servicesData.ts'), 'utf8');
const blogSource = fs.readFileSync(path.join(root, 'src/data/blogData.ts'), 'utf8');
const validServiceSlugs = new Set([...serviceSource.matchAll(/\bslug:\s*'([^']+)'/g)].map((m) => m[1]));
const blogServiceSlugs = [...blogSource.matchAll(/\{\s*name:\s*'[^']+',\s*slug:\s*'([^']+)'\s*\}/g)].map((m) => m[1]);
const invalidServiceSlugs = [...new Set(blogServiceSlugs.filter((slug) => !validServiceSlugs.has(slug)))];
if (invalidServiceSlugs.length) {
  throw new Error('Blog posts contain links to missing service URLs: ' + invalidServiceSlugs.join(', '));
}
console.log('Related service link check passed: all blog service links resolve to existing routes.');

fs.copyFileSync(path.join(root, 'src/generated/llms.txt'), path.join(dist, 'llms.txt'));
