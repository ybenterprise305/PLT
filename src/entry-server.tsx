import { renderToString } from 'react-dom/server';
import App from './App';
import { headCollector } from './components/SEOHead';
import { SERVICES_DATA } from './data/servicesData';
import { COUNTIES_DATA, getAllCities } from './data/locationsData';
import { getNeighborhoods, neighborhoodPath } from './data/neighborhoods';
import { BLOG_POSTS } from './data/blogData';
import { LOCKSMITH_TIPS_DATA } from './data/locksmithTipsData';
import { AD_CAMPAIGNS } from './data/adLandingPagesData';
import { canonicalSitePath, hasSpanishVersion, localizePath, isEsPath, stripLocale } from './utils/locale';

export { canonicalSitePath, hasSpanishVersion, localizePath, isEsPath, stripLocale };

export function getRoutes(): string[] {
  const english = [
    '/',
    '/services',
    '/service-areas',
    '/about',
    '/reviews',
    '/contact',
    '/faq',
    '/blog',
    '/tips',
    '/sitemap',
    '/privacy',
    '/terms',
    ...SERVICES_DATA.map((s) => `/services/${s.slug}`),
    ...COUNTIES_DATA.map((c) => `/service-areas/${c.slug}`),
    ...getAllCities().flatMap(({ city }) => [
      `/service-areas/${city.slug}`,
      ...getNeighborhoods(city.slug).map((entry) => neighborhoodPath(city.slug, entry.slug)),
    ]),
    ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
    ...LOCKSMITH_TIPS_DATA.map((t) => `/tips/${t.slug}`),
    ...AD_CAMPAIGNS.map((a) => `/lp/${a.slug}`),
  ];
  // Spanish versions exist only for pages with real Spanish content
  const spanish = english.filter(hasSpanishVersion).map((r) => localizePath(r, 'es'));
  return [...english, ...spanish];
}

export function render(path: string) {
  headCollector.current = null;
  const html = renderToString(<App initialPath={path} />);
  return { html, head: headCollector.current };
}
