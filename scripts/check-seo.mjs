import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { validateStructuredData } from './check-structured-data.mjs';

const dist = path.resolve('dist');
const { pages, redirects } = JSON.parse(fs.readFileSync('src/generated/build-seo-inventory.json', 'utf8'));
const site = new URL(pages[0].canonical).origin;
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const redirectFile = fs.readFileSync(path.join(dist, '_redirects'), 'utf8');
const byPath = new Map(pages.map(page => [page.path === '/404.html' ? page.path : canonicalPath(page.path), page]));
const indexable = pages.filter(page => page.indexable);
const errors = [];
const advisories = [];
const graph = new Map();
const inventory = [];
const linkCounts = { links: 0, redirected: 0, broken: 0 };
const seenTitles = new Map();
const seenDescriptions = new Map();

function canonicalPath(value) {
  return value.replace(/\/+$/, '') + '/';
}

function assetFile(urlPath) {
  const file = path.resolve(dist, '.' + urlPath);
  return file.startsWith(dist + path.sep) && fs.statSync(file, { throwIfNoEntry: false })?.isFile();
}

function getDocument(record) {
  return record.status === 404 ? path.join(dist, '404.html') : path.join(dist, record.path, 'index.html');
}

function elements(root) {
  const result = [];
  function walk(node) {
    if (node.tagName) result.push(node);
    node.childNodes?.forEach(walk);
  }
  walk(root);
  return result;
}

const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const plain = node => node?.value || node?.childNodes?.map(plain).join('') || '';

function noteDuplicate(map, value, field, pathname) {
  if (!value) return;
  if (map.has(value)) errors.push(`${pathname}: duplicate ${field} with ${map.get(value)}`);
  map.set(value, pathname);
}

if (byPath.size !== pages.length) errors.push('Duplicate registry paths');
for (const [from, to] of redirects) {
  if (!byPath.get(to)?.indexable || byPath.has(from) || byPath.has(canonicalPath(from))) errors.push(`Invalid redirect ${from} → ${to}`);
  if (![from, canonicalPath(from)].every(source => redirectFile.includes(`${source} ${to} 301\n`))) errors.push(`Missing generated redirect for ${from}`);
}

for (const [pathname, page] of byPath) {
  const file = getDocument(page);
  if (!fs.existsSync(file)) {
    errors.push(`Missing rendered document ${pathname}`);
    continue;
  }
  const root = parse(fs.readFileSync(file, 'utf8'));
  const document = elements(root);
  const html = document.find(node => node.tagName === 'html');
  const head = document.find(node => node.tagName === 'head');
  const tags = elements(head);
  const select = (name, key, value) => tags.filter(node => node.tagName === name && attr(node, key) === value);
  const descriptor = (name, key = 'name') => select('meta', key, name);
  const title = tags.filter(node => node.tagName === 'title').map(plain);
  const meta = descriptor('description').map(node => attr(node, 'content'));
  const robots = descriptor('robots').map(node => attr(node, 'content'));
  const canonical = select('link', 'rel', 'canonical').map(node => attr(node, 'href'));
  const alternates = tags.filter(node => node.tagName === 'link' && attr(node, 'hreflang') != null);
  const alternateMap = Object.fromEntries(alternates.map(node => [attr(node, 'hreflang'), attr(node, 'href')]));
  const h1 = document.filter(node => node.tagName === 'h1');
  if (title.length !== 1 || title[0] !== page.title || !title[0]) errors.push(`${pathname}: invalid title`);
  if (meta.length !== 1 || meta[0] !== page.description || !meta[0]) errors.push(`${pathname}: invalid description`);
  if (robots.length !== 1 || robots[0] !== page.robots || robots[0]?.includes('noindex') === page.indexable) errors.push(`${pathname}: invalid robots directive`);
  if (canonical.length !== (page.canonical ? 1 : 0) || (page.canonical && canonical[0] !== page.canonical)) errors.push(`${pathname}: invalid canonical`);
  if (attr(html, 'lang') !== page.language) errors.push(`${pathname}: incorrect HTML language`);
  if (h1.length !== 1 || !plain(h1[0]).trim()) errors.push(`${pathname}: missing or duplicate primary heading`);
  const main = document.find(node => node.tagName === 'main');
  if (!main) errors.push(`${pathname}: missing main landmark`);
  else {
    let previous = 1;
    for (const heading of elements(main).filter(node => /^h[1-6]$/.test(node.tagName))) {
      const level = Number(heading.tagName[1]);
      if (level > previous + 1) advisories.push(`${pathname}: heading jumps from h${previous} to h${level} at "${plain(heading).trim()}"`);
      previous = level;
    }
  }
  if (!document.some(node => node.tagName === 'a' && attr(node, 'href') === 'tel:+17542616528')) errors.push(`${pathname}: missing native phone link`);
  if (document.some(node => attr(node, 'href')?.startsWith('sms:'))) errors.push(`${pathname}: unexpected SMS link`);
  if (page.indexable && (page.canonical !== site + pathname || !page.sitemap)) errors.push(`${pathname}: indexable route is not a registered sitemap canonical`);

  for (const [name, expected] of Object.entries({ 'og:title': title[0], 'og:description': meta[0], 'og:url': page.canonical || site + '/' })) {
    const tags = descriptor(name, 'property');
    if (tags.length !== 1 || attr(tags[0], 'content') !== expected) errors.push(`${pathname}: inconsistent ${name}`);
  }
  const sharingImage = descriptor('og:image', 'property')[0];
  if (!sharingImage || !assetFile(new URL(attr(sharingImage, 'content'), site).pathname)) errors.push(`${pathname}: missing social-sharing image`);

  const expectedAlternates = page.alternates || {};
  if (alternates.length !== Object.keys(expectedAlternates).length || Object.entries(expectedAlternates).some(([lang, value]) => alternateMap[lang] !== value)) errors.push(`${pathname}: incorrect hreflang set`);
  for (const [language, url] of Object.entries(alternateMap)) {
    const u = new URL(url);
    const partner = byPath.get(u.pathname);
    if (!partner?.indexable || partner.canonical !== url || (language !== 'x-default' && partner.language !== language) || partner.alternates?.[page.language] !== page.canonical) {
      errors.push(`${pathname}: nonreciprocal alternate ${url}`);
    }
  }
  const structuredData = validateStructuredData({ document, page, pathname, byPath, site, dist, elements, attr, plain, errors });

  if (page.indexable) {
    noteDuplicate(seenTitles, title[0], 'title', pathname);
    noteDuplicate(seenDescriptions, meta[0], 'description', pathname);
  }
  if (page.parent && !byPath.get(canonicalPath(page.parent))?.indexable) errors.push(`${pathname}: parent is missing from registry`);

  const hrefs = new Set();
  const children = new Set();
  for (const node of document) {
    if (node.tagName === 'img' && attr(node, 'alt') == null) errors.push(`${pathname}: missing image alt`);
    const href = node.tagName === 'a' ? attr(node, 'href') : null;
    if (!href || href.startsWith('#') || hrefs.has(href)) continue;
    hrefs.add(href);
    let target;
    try { target = new URL(href, site + pathname); } catch { errors.push(`${pathname}: invalid link ${href}`); continue; }
    if (!/^https?:$/.test(target.protocol)) continue;
    const host = new URL(site).hostname;
    if (target.hostname !== host && target.hostname !== 'www.' + host) continue;
    if (target.origin !== site) {
      errors.push(`${pathname}: internal link uses an alternate origin ${href}`);
      linkCounts.redirected++;
      continue;
    }
    linkCounts.links++;
    if (byPath.has(target.pathname)) children.add(target.pathname);
    else if (byPath.has(canonicalPath(target.pathname))) {
      errors.push(`${pathname}: internal link redirects ${href}`);
      linkCounts.redirected++;
    } else if (!assetFile(target.pathname)) {
      errors.push(`${pathname}: broken internal link ${href}`);
      linkCounts.broken++;
    }
  }
  graph.set(pathname, children);
  inventory.push({ ...page, pathname, heading: plain(h1[0]), structuredData, internalLinks: [...children].sort() });
}

const seen = new Set();
for (const match of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!loc) { errors.push('Sitemap record without loc'); continue; }
  const url = new URL(loc);
  const target = byPath.get(url.pathname);
  if (seen.has(loc)) errors.push(`Duplicate sitemap URL ${loc}`);
  if (!target?.sitemap || !target.indexable || target.canonical !== loc) errors.push(`Unqualified sitemap URL ${loc}`);
  seen.add(loc);
  const alternates = Object.fromEntries([...match[1].matchAll(/<xhtml:link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(x => x.slice(1)));
  if (JSON.stringify(alternates) !== JSON.stringify(target?.alternates || {})) errors.push(`Sitemap alternates disagree with HTML for ${loc}`);
}
for (const record of indexable) if (!seen.has(record.canonical)) errors.push(`Missing sitemap URL ${record.canonical}`);
const robotsFile = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!robotsFile.includes(`Sitemap: ${site}/sitemap.xml`) || /^Disallow:\s*\S+/mi.test(robotsFile)) errors.push('Unexpected robots.txt variant');

const reachable = new Set();
const queue = ['/'];
for (const target of queue) {
  if (reachable.has(target)) continue;
  reachable.add(target);
  for (const child of graph.get(target) || []) if (byPath.get(child)?.indexable) queue.push(child);
}
const orphans = indexable.filter(page => !reachable.has(canonicalPath(page.path))).map(page => page.path);
if (orphans.length) errors.push(`Orphaned indexable pages: ${orphans.join(', ')}`);
const unexpectedFiles = fs.readdirSync(dist, { recursive: true })
  .filter(file => file.endsWith('index.html')).filter(file => !byPath.has('/' + file.replace(/index\.html$/, '')));
if (unexpectedFiles.length) errors.push(`Rendered pages missing from registry: ${unexpectedFiles.join(', ')}`);

const summary = { documents: pages.length, indexable: indexable.length, sitemapEntries: seen.size,
  translations: pages.filter(page => page.language === 'es').length, redirects: redirects.length, internalLinks: linkCounts,
  orphaned: orphans.length, errors: errors.length, advisories: advisories.length };
fs.writeFileSync('src/generated/technical-seo-report.json', JSON.stringify({ summary, errors, advisories, inventory }, null, 2));
console.log(JSON.stringify(summary));
if (errors.length) {
  console.error(errors.slice(0, 35).join('\n'));
  process.exitCode = 1;
}
