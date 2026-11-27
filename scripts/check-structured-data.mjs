import fs from 'node:fs';
import path from 'node:path';

const hierarchicalTypes = new Set(['service', 'county', 'city', 'neighborhood', 'article', 'guide']);
const directoryTrails = new Set(['/services/', '/es/services/', '/service-areas/', '/es/service-areas/', '/blog/', '/tips/', '/es/tips/']);
const permittedTypes = new Set(['Organization', 'WebSite', 'BreadcrumbList', 'ListItem', 'Article', 'BlogPosting']);
const clean = value => typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';

function visibleTextOf(node) {
  if (!node || ['script', 'style', 'template'].includes(node.tagName)) return '';
  return node.value ?? (node.childNodes || []).map(visibleTextOf).join(' ');
}

export function validateStructuredData({ document, page, pathname, byPath, site, dist, elements, attr, plain, errors }) {
  const issue = message => errors.push(`${pathname}: structured data ${message}`);
  const scripts = document.filter(node => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  const nodes = [];
  let validBlocks = 0;
  for (const script of scripts) {
    try {
      const data = JSON.parse(plain(script));
      if (data?.['@context'] !== 'https://schema.org') {
        issue('is missing the Schema.org context');
        continue;
      }
      nodes.push(...(Array.isArray(data['@graph']) ? data['@graph'] : [data]));
      validBlocks++;
    } catch {
      issue('is malformed JSON-LD');
    }
  }
  const type = node => node?.['@type'];
  const id = node => node?.['@id'];
  const counts = Object.create(null);
  const ids = new Set();
  const businessId = site + '/#locksmith';
  const canonical = page.canonical;
  const expected = [];
  if (pathname === '/') expected.push('Organization', 'WebSite');
  if (hierarchicalTypes.has(page.type) || directoryTrails.has(pathname)) expected.push('BreadcrumbList');
  if (page.type === 'article') expected.push('BlogPosting');
  if (page.type === 'guide') expected.push('Article');
  if (nodes.map(type).sort().join(',') !== expected.sort().join(',')) issue('types do not match the route policy');

  function walk(value) {
    if (!value || typeof value !== 'object') return;
    const schemaType = type(value);
    if (schemaType && !permittedTypes.has(schemaType)) issue(`uses unsupported type ${schemaType}`);
    for (const forbidden of ['address', 'geo', 'aggregateRating', 'review', 'priceRange', 'potentialAction']) {
      if (Object.hasOwn(value, forbidden)) issue(`uses excluded property ${forbidden}`);
    }
    if (id(value) && !ids.has(id(value)) && id(value) !== businessId) issue(`references undefined entity ${id(value)}`);
    Object.values(value).forEach(walk);
  }

  function canonicalAsset(url) {
    if (typeof url !== 'string' || !url.startsWith(site + '/')) return null;
    const resolved = path.resolve(dist, '.' + new URL(url).pathname);
    return resolved.startsWith(dist + path.sep) && fs.statSync(resolved, { throwIfNoEntry: false })?.isFile() ? resolved : null;
  }

  for (const node of nodes) {
    if (!node || typeof node !== 'object' || !id(node) || ids.has(id(node))) {
      issue('contains a missing or duplicate top-level identifier');
      continue;
    }
    ids.add(id(node));
    counts[type(node)] = (counts[type(node)] || 0) + 1;
  }

  const visible = document.find(node => node.tagName === 'main');
  const visibleElements = visible ? elements(visible) : [];
  const visibleText = clean(visibleTextOf(visible));
  const visibleLinks = new Set(document.filter(node => node.tagName === 'a').map(node => attr(node, 'href')));

  for (const node of nodes.filter(node => node && typeof node === 'object')) {
    walk(node);
    switch (type(node)) {
      case 'Organization': {
        if (id(node) !== businessId || node.url !== canonical || node.name !== 'Pro Locksmith Tech' || node.telephone !== '+17542616528') issue('has an inconsistent organization identity');
        const raw = canonicalAsset(node.logo);
        const png = raw && fs.readFileSync(raw);
        if (!png || png.length < 24 || png.subarray(1, 4).toString() !== 'PNG' || png.readUInt32BE(16) < 112 || png.readUInt32BE(20) < 112) issue('logo must be a crawlable PNG of at least 112 × 112');
        if (!node.description || !visibleText.includes('South Florida') || !visibleText.includes('2000') || !visibleLinks.has('tel:' + node.telephone)) issue('organization claims are missing page corroboration');
        if (!Array.isArray(node.sameAs) || !node.sameAs.length || new Set(node.sameAs).size !== node.sameAs.length ||
            node.sameAs.some(url => typeof url !== 'string' || !url.startsWith('https://') || !visibleLinks.has(url))) issue('profile references must be unique HTTPS links visible on the page');
        break;
      }
      case 'WebSite':
        if (id(node) !== canonical + '#website' || node.url !== canonical || node.name !== 'Pro Locksmith Tech' || id(node.publisher) !== businessId) issue('has an inconsistent site name, URL or publisher');
        break;
      case 'BreadcrumbList': {
        const nav = document.filter(node => node.tagName === 'nav' && ['Breadcrumb', 'Ruta de navegación'].includes(attr(node, 'aria-label')));
        const visibleItems = nav.length === 1 ? elements(nav[0]).filter(node => node.tagName === 'li') : [];
        const trail = node.itemListElement;
        if (!Array.isArray(trail) || trail.length < 2 || trail.length !== visibleItems.length || id(node) !== canonical + '#breadcrumb') {
          issue('breadcrumb list is missing or differs from the visible trail');
          break;
        }
        let parent = null;
        trail.forEach((crumb, index) => {
          const href = typeof crumb?.item === 'string' && crumb.item.startsWith(site + '/') ? new URL(crumb.item) : null;
          const target = href && byPath.get(href.pathname);
          const visibleItem = elements(visibleItems[index]).find(node => node.tagName === 'a' || attr(node, 'aria-current') === 'page');
          const last = index === trail.length - 1;
          if (type(crumb) !== 'ListItem' || crumb.position !== index + 1 || !target?.indexable ||
              target.canonical !== crumb.item || target.language !== page.language ||
              (target.parent || null) !== parent || clean(plain(visibleItem)) !== crumb.name ||
              (last ? crumb.item !== canonical || attr(visibleItem, 'aria-current') !== 'page' : attr(visibleItem, 'href') !== href?.pathname)) {
            issue(`breadcrumb item ${index + 1} differs from the visible canonical hierarchy`);
          }
          parent = target?.path;
        });
        break;
      }
      case 'Article':
      case 'BlogPosting': {
        const h1 = visibleElements.find(node => node.tagName === 'h1');
        if (id(node) !== canonical + '#article' || node.url !== canonical || node.mainEntityOfPage !== canonical ||
            node.inLanguage !== page.language || id(node.publisher) !== businessId ||
            clean(node.headline) !== clean(plain(h1)) || !node.description || !visibleText.includes(clean(node.description))) issue('article identity or visible content is inconsistent');
        if (node.dateModified) {
          const revised = new Date(node.dateModified);
          if (!/^\d{4}-\d{2}-\d{2}$/.test(node.dateModified) || Number.isNaN(revised.valueOf()) ||
              revised.toISOString().slice(0, 10) !== node.dateModified || node.dateModified < (node.datePublished || '') ||
              !visibleElements.some(el => el.tagName === 'time' && attr(el, 'datetime') === node.dateModified)) {
            issue('article revision date is invalid or not visible');
          }
        }
        if (type(node) === 'BlogPosting') {
          const byline = visibleElements.find(element => attr(element, 'class') === 'article-byline');
          const time = visibleElements.find(element => element.tagName === 'time');
          const date = new Date(node.datePublished);
          const matchingImage = visibleElements.some(element => element.tagName === 'img' && (site + attr(element, 'src') === node.image || attr(element, 'src') === node.image));
          if (type(node.author) !== 'Organization' || !node.author.name || clean(plain(byline)) !== node.author.name ||
              !time || !/^\d{4}-\d{2}-\d{2}$/.test(node.datePublished) || Number.isNaN(date.valueOf()) ||
              date.toISOString().slice(0, 10) !== node.datePublished || attr(time, 'datetime') !== node.datePublished ||
              !matchingImage || !canonicalAsset(node.image)) issue('blog byline, publication date or hero image is invalid');
        }
        break;
      }
    }
  }
  return { blocks: scripts.length, validBlocks, counts, ids: [...ids] };
}
