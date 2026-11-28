import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'parse5';

const { pages } = JSON.parse(readFileSync('src/generated/build-seo-inventory.json', 'utf8'));
const ruleSet = [
  ['storefront disclaimer', /\b(?:mobile[- ]only|no storefront|no (?:opera|tenemos) (?:una )?tienda|does not operate (?:a )?(?:public |walk-in |retail )+storefront|(?:exclusively as a mobile|exclusivamente de forma móvil))\b/iu],
  ['pre-call checklist', /\b(?:what to know before calling|what to tell dispatch|what to have ready|tell dispatch what changes the job|información útil antes de llamar|teng[aa] (?:list[oa]s? |a mano )|have (?:your |the )(?:vehicle |car )?(?:ID|registration|year|make|model|proof of ownership)[^.]{0,85}\bready|have your (?:ID|registration) ready|llame con la dirección exacta|call with the exact service address)\b/iu],
  ['ordinary referral', /\b(?:call|contact|visit|find) (?:a |an |your |the )?(?:different locksmith|another locksmith|roadside assistance (?:provider|company)|authorized spare[- ]key holder)|\b(?:contacte?|llame|acuda) (?:a |al )?(?:otro cerrajero|otro servicio de cerrajería|concesionario)\b/iu],
];

const legal = new Set(['/terms', '/privacy', '/es/terms', '/es/privacy']);
const suppressed = new Set(['script', 'style', 'template', 'blockquote']);
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const nodes = node => [node, ...(node.childNodes ?? []).flatMap(nodes)];
function text(node) {
  if (suppressed.has(node.tagName)) return '';
  return node.value ?? (node.childNodes ?? []).map(text).join(' ');
}

const failures = [];
const excludedReview = /\b(?:licksmith|i want to get lockout again)\b/iu;
assert(!excludedReview.test(readFileSync('src/data/customerReviews.ts', 'utf8')), 'Permanently excluded review in customer review data.');
for (const page of pages.filter(page => page.indexable)) {
  const path = page.path.replace(/\/$/, '');
  const document = nodes(parse(readFileSync(`dist${path}/index.html`, 'utf8')));
  const main = document.find(node => node.tagName === 'main');
  const title = document.find(node => node.tagName === 'title');
  const description = document.find(node => node.tagName === 'meta' && attr(node, 'name') === 'description');
  const shared = document.filter(node => ['header', 'footer'].includes(node.tagName)).map(text);
  // Legal disclosures and verbatim customer quotes are outside the sales-copy rules.
  const materials = [text(title), attr(description, 'content'), ...shared];
  if (main && !legal.has(path)) materials.push(text(main));
  const copy = materials.join(' ').replace(/\s+/g, ' ');
  for (const [name, pattern] of ruleSet) {
    const match = copy.match(pattern);
    if (match) failures.push(`${page.path}: ${name} (${match[0]})`);
  }
  const emergency = copy.match(/\b(?:(?:call|dial|contact|llame al|marque) 911|emergency responders|first responders|heatstroke|life-threatening emergency|niño atrapado|peligro inmediato para la vida)\b/iu);
  if (emergency) failures.push(`${page.path}: emergency-response topic in marketing copy`);
  if (excludedReview.test(readFileSync(`dist${path}/index.html`, 'utf8'))) {
    failures.push(`${page.path}: permanently excluded review`);
  }
}
assert.equal(failures.length, 0, failures.join('\n'));
console.log(`Checked bilingual marketing copy and protected review exclusions on ${pages.filter(page => page.indexable).length} organic routes.`);
