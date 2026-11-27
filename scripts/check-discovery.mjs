import assert from 'node:assert/strict';
import fs from 'node:fs';

const registry = JSON.parse(fs.readFileSync('src/generated/build-seo-inventory.json', 'utf8')).pages;
const site = new URL(registry[0].canonical).origin;
const allowedUrls = new Set(registry.filter(route => route.indexable).map(route => route.canonical));
const robots = fs.readFileSync('dist/robots.txt', 'utf8');
const groups = new Map();
let agent;
let sitemap;
for (const line of robots.split('\n')) {
  const entry = line.split('#', 1)[0].trim();
  if (!entry) continue;
  const [, key, value] = /^([a-z-]+):\s*(.+)$/i.exec(entry) ?? [];
  assert(key && value, `Invalid robots.txt line: ${entry}`);
  if (key.toLowerCase() === 'user-agent') {
    agent = value.toLowerCase();
    assert(!groups.has(agent), `Unexpected repeated robots.txt agent: ${agent}`);
    groups.set(agent, []);
  } else if (key.toLowerCase() === 'sitemap') {
    assert(!sitemap, 'Expected one canonical sitemap directive');
    sitemap = value;
  } else {
    assert(agent && /^(allow|disallow)$/i.test(key) && value.startsWith('/'), `Invalid crawler directive: ${entry}`);
    groups.get(agent).push([key.toLowerCase(), value]);
  }
}
assert.equal(sitemap, site + '/sitemap.xml');
for (const token of ['*', 'googlebot', 'bingbot', 'oai-searchbot', 'chatgpt-user', 'perplexitybot',
  'perplexity-user', 'claude-searchbot', 'claude-user', 'applebot']) {
  assert.deepEqual(groups.get(token) ?? groups.get('*'), [['allow', '/']], `Unexpected policy for ${token}`);
}

const guide = fs.readFileSync('dist/llms.txt', 'utf8');
assert.equal(guide, fs.readFileSync('src/generated/llms.txt', 'utf8'));
assert(guide.startsWith('# Pro Locksmith Tech\n') && guide.includes('(754) 261-6528') &&
  guide.includes('24/7 mobile locksmith') && guide.includes('since 2000'), 'Incorrect business information');
const links = Array.from(guide.matchAll(/^\- \[[^\n]+\]\((https?:\/\/[^\n]+)\)$/gm), match => match[1]);
assert.equal(new Set(links).size, links.length, 'Duplicate discovery links');
const internal = links.filter(link => new URL(link).origin === site);
assert(internal.length > 5 && internal.every(link => allowedUrls.has(link)), 'Discovery links must use indexable canonical routes');
assert(internal.some(link => link.endsWith('/es/contact/')), 'Missing bilingual discovery');
assert.equal(fs.existsSync('dist/.well-known/ard.json'), false);
assert.equal(fs.existsSync('dist/.well-known/ai-catalog.json'), false);
console.log(`Crawler directives and ${internal.length} canonical discovery URLs validated.`);
