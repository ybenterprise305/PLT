import { SITE } from './business';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { getNeighborhoods, neighborhoodPath } from '../data/neighborhoods';
import { BLOG_POSTS } from '../data/blogData';
import { LOCKSMITH_TIPS_DATA } from '../data/locksmithTipsData';
import { AD_CAMPAIGNS } from '../data/adLandingPagesData';
import { canonicalSitePath } from '../utils/paths';

interface RouteDefinition {
  path: string;
  page: string;
  type: 'home' | 'core' | 'legal' | 'directory' | 'service' | 'county' | 'city' | 'neighborhood' | 'article' | 'guide' | 'paid' | 'error';
  parent: string | null;
  source: string;
  translate?: boolean;
  slug?: string;
  related?: string[];
  lastModified?: string;
}

const core: RouteDefinition[] = [
  { path: '/', page: 'HomePage', type: 'home', parent: null, source: 'HomePage', translate: true },
  { path: '/services', page: 'ServicesPage', type: 'directory', parent: '/', source: 'servicesData', translate: true },
  { path: '/service-areas', page: 'ServiceAreasPage', type: 'directory', parent: '/', source: 'locationsData', translate: true },
  { path: '/about', page: 'AboutPage', type: 'core', parent: '/', source: 'AboutPage', translate: true },
  { path: '/contact', page: 'ContactPage', type: 'core', parent: '/', source: 'ContactPage', translate: true },
  { path: '/faq', page: 'FAQPage', type: 'core', parent: '/', source: 'faqData', translate: true },
  { path: '/reviews', page: 'ReviewsPage', type: 'core', parent: '/', source: 'customerReviews' },
  { path: '/blog', page: 'BlogListPage', type: 'directory', parent: '/', source: 'blogData' },
  { path: '/tips', page: 'LocksmithTipsPage', type: 'directory', parent: '/', source: 'locksmithTipsData', translate: true },
  { path: '/sitemap', page: 'SitemapPage', type: 'directory', parent: '/', source: 'SitemapPage' },
  { path: '/privacy', page: 'PrivacyPolicyPage', type: 'legal', parent: '/', source: 'PrivacyPolicyPage' },
  { path: '/terms', page: 'TermsPage', type: 'legal', parent: '/', source: 'TermsPage' },
];

const es = (path: string) => path === '/' ? '/es' : '/es' + path;
const area = (slug: string) => '/service-areas/' + slug;
const service = (slug: string) => '/services/' + slug;

export function getRouteRegistry() {
  const english: RouteDefinition[] = [...core];
  for (const entry of SERVICES_DATA) {
    english.push({ path: service(entry.slug), slug: entry.slug, page: 'ServiceDetailPage', type: 'service', parent: '/services', source: 'servicesData', translate: true });
  }
  for (const county of COUNTIES_DATA) {
    english.push({ path: area(county.slug), slug: county.slug, page: 'LocationDetailPage', type: 'county', parent: '/service-areas', source: 'locationsData', translate: true });
    for (const city of county.majorCities) {
      english.push({ path: area(city.slug), slug: city.slug, page: 'LocationDetailPage', type: 'city', parent: area(county.slug), source: 'locationsData', translate: true });
      for (const neighborhood of getNeighborhoods(city.slug)) {
        english.push({ path: neighborhoodPath(city.slug, neighborhood.slug), slug: city.slug + '/' + neighborhood.slug, page: 'NeighborhoodPage', type: 'neighborhood', parent: area(city.slug), source: 'neighborhoods' });
      }
    }
  }
  for (const post of BLOG_POSTS) {
    english.push({ path: '/blog/' + post.slug, slug: post.slug, page: 'BlogPostPage', type: 'article', parent: '/blog', source: 'blogData', lastModified: post.dateModified, related: post.relatedServices?.map(ref => service(ref.slug)) });
  }
  for (const tip of LOCKSMITH_TIPS_DATA) {
    english.push({ path: '/tips/' + tip.slug, slug: tip.slug, page: 'TipDetailPage', type: 'guide', parent: '/tips', source: 'locksmithTipsData', translate: Boolean(tip.es), related: [tip.service[1], ...tip.related.map(link => link[1])] });
  }

  const localized = new Set(english.filter(route => route.translate).map(route => route.path));
  const records = english.flatMap(route => {
    const alternates = route.translate ? { en: SITE + canonicalSitePath(route.path), es: SITE + canonicalSitePath(es(route.path)), 'x-default': SITE + canonicalSitePath(route.path) } : null;
    const published = { ...route, language: 'en', indexable: true, sitemap: true, status: 200, canonical: SITE + canonicalSitePath(route.path), alternates };
    if (!route.translate) return [published];
    const parent = route.parent && localized.has(route.parent) ? es(route.parent) : route.parent;
    const localizedPage = ['HomePage', 'LocksmithTipsPage', 'TipDetailPage'].includes(route.page) ? route.page : 'SpanishContentPage';
    return [published, {
      ...published, path: es(route.path), parent, language: 'es', canonical: SITE + canonicalSitePath(es(route.path)),
      page: localizedPage,
      source: localizedPage === route.page ? route.source : route.source + ' + SpanishContentPage',
    }];
  });

  for (const campaign of AD_CAMPAIGNS) {
    const canonical = SITE + canonicalSitePath('/lp/' + campaign.slug);
    for (const prefix of ['lp', 'landing', 'ad']) {
      records.push({
        path: '/' + prefix + '/' + campaign.slug, page: 'AdLandingPage', slug: campaign.slug,
        type: 'paid', parent: null, source: 'adLandingPagesData', status: 200,
        language: 'en', indexable: false, sitemap: false, canonical, alternates: null,
      });
    }
  }
  return records;
}

export const errorRoute = { path: '/404.html', type: 'error', status: 404, indexable: false, sitemap: false, language: 'en', parent: null, canonical: null, alternates: null, source: 'NotFoundPage' };

export const serviceRedirects = {
  'emergency-lockouts': 'emergency-lockout-service',
  'transponder-programming': 'automotive-locksmith',
  'car-key-replacement': 'key-replacement',
  'key-fob-services': 'automotive-locksmith',
  'car-lockouts': 'emergency-lockout-service',
  'rekeying': 'lock-rekeying',
  'broken-car-key-extraction': 'automotive-locksmith',
  'home-lockouts': 'emergency-lockout-service',
  'smart-lock-services': 'security-hardware',
  'ignition-related-services': 'automotive-locksmith',
};
