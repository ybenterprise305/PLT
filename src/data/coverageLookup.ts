import { COUNTIES_DATA } from './locationsData';
import { getNeighborhoods } from './neighborhoods';

// County geographic inventories identify names. Additional names never imply dispatch coverage.
const municipalNames: Record<string, string> = {
  'broward-county': 'Coconut Creek|Cooper City|Coral Springs|Dania Beach|Davie|Deerfield Beach|Fort Lauderdale|Hallandale Beach|Hillsboro Beach|Hollywood|Lauderdale-by-the-Sea|Lauderdale Lakes|Lauderhill|Lazy Lake|Lighthouse Point|Margate|Miramar|North Lauderdale|Oakland Park|Parkland|Pembroke Park|Pembroke Pines|Plantation|Pompano Beach|Sea Ranch Lakes|Southwest Ranches|Sunrise|Tamarac|Weston|West Park|Wilton Manors',
  'miami-dade-county': 'Aventura|Bal Harbour|Bay Harbor Islands|Biscayne Park|Coral Gables|Cutler Bay|Doral|El Portal|Florida City|Golden Beach|Hialeah|Hialeah Gardens|Homestead|Indian Creek|Key Biscayne|Medley|Miami|Miami Beach|Miami Gardens|Miami Lakes|Miami Shores|Miami Springs|North Bay Village|North Miami|North Miami Beach|Opa-locka|Palmetto Bay|Pinecrest|South Miami|Sunny Isles Beach|Surfside|Sweetwater|Virginia Gardens|West Miami',
  'palm-beach-county': 'Atlantis|Boca Raton|Boynton Beach|Briny Breezes|Cloud Lake|Delray Beach|Glen Ridge|Golf|Greenacres|Gulf Stream|Haverhill|Highland Beach|Hypoluxo|Juno Beach|Jupiter|Jupiter Inlet Colony|Lake Clarke Shores|Lake Park|Lake Worth Beach|Lantana|Manalapan|Mangonia Park|North Palm Beach|Ocean Ridge|Palm Beach|Palm Beach Gardens|Palm Beach Shores|Palm Springs|Riviera Beach|Royal Palm Beach|South Palm Beach|Tequesta|Wellington|West Palm Beach|Westlake',
};

const communityNames: Record<string, string> = {
  'broward-county': 'Broadview Park|Boulevard Gardens|Franklin Park|Roosevelt Gardens|Washington Park',
  'miami-dade-county': 'Country Walk|Fountainebleau|Glenvar Heights|Kendale Lakes|Kendall West|Olympia Heights|Richmond Heights|Sunset|Tamiami|The Crossings|Westchester|West Little River',
  'palm-beach-county': 'Boca Del Mar|Boca Pointe|Century Village|Jupiter Farms|The Acreage',
};

const aliases: Record<string, readonly string[]> = {
  'fort lauderdale': ['ft lauderdale'],
  'lauderdale by the sea': ['lauderdale by sea', 'lbts'],
  'lake worth beach': ['lake worth'],
  'hallandale beach': ['hallandale'],
  'boca raton': ['boca'],
  'west palm beach': ['wpb', 'west palm'],
  'miami beach': ['south beach'],
};

export function normalizeLocality(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[^a-z0-9]+/g,' ').trim();
}

export function coverageMatches(term: string, words: readonly string[]) {
  const query = normalizeLocality(term);
  return query !== '' && words.some(word => {
    const normalized = normalizeLocality(word);
    return [normalized, ...(aliases[normalized] ?? [])].some(value => value.includes(query));
  });
}

export function availabilityLocalities(countySlug: string) {
  const county = COUNTIES_DATA.find(area => area.slug === countySlug);
  if (!county) return [];
  const served = new Set(county.majorCities.flatMap(city => [city.name, ...getNeighborhoods(city.slug).map(area => area.name)]).map(normalizeLocality));
  return [...(municipalNames[countySlug] ?? '').split('|'), ...(communityNames[countySlug] ?? '').split('|')]
    .filter(name => name && !served.has(normalizeLocality(name)))
    .sort((a,b) => a.localeCompare(b,'en'));
}
