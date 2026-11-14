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
const { render, getRoutes } = await import(pathToFileURL(candidates[0]).href);

const SITE = 'https://prolocksmith-tech.com';
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setMeta(html, attr, name, value) {
  const re = new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${name}" content="${esc(value)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

function withHead(html, route, head) {
  if (!head) return html;
  const canonical = SITE + (head.canonicalPath ? (head.canonicalPath.startsWith('/') ? head.canonicalPath : '/' + head.canonicalPath) : route === '/' ? '/' : route);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(head.title)}</title>`);
  html = setMeta(html, 'name', 'description', head.description);
  html = setMeta(html, 'name', 'robots', head.noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  html = setMeta(html, 'property', 'og:title', head.title);
  html = setMeta(html, 'property', 'og:description', head.description);
  html = setMeta(html, 'property', 'og:type', head.ogType || 'website');
  html = setMeta(html, 'property', 'og:url', canonical);
  html = setMeta(html, 'name', 'twitter:title', head.title);
  html = setMeta(html, 'name', 'twitter:description', head.description);
  if (head.keywords) html = setMeta(html, 'name', 'keywords', head.keywords);
  html = html.replace(/<link rel="canonical"[^>]*>\s*/g, '');
  return html.replace('</head>', `  <link rel="canonical" href="${esc(canonical)}" />\n  </head>`);
}

const routes = [...new Set(getRoutes())];
let count = 0;
for (const route of routes) {
  const { html, head } = render(route);
  let page = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  if (page === template) throw new Error('Could not find <div id="root"></div> in dist/index.html');
  page = withHead(page, route, head);
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  count += 1;
}
console.log(`Pre-rendered ${count} pages`);
