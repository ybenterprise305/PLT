import { renderToString } from 'react-dom/server';
import App from './App';
import { headCollector } from './components/SEOHead';
import { SERVICES_DATA } from './data/servicesData';
import { COUNTIES_DATA, getAllCities } from './data/locationsData';
import { BLOG_POSTS } from './data/blogData';
import { LOCKSMITH_TIPS_DATA } from './data/locksmithTipsData';
import { AD_CAMPAIGNS } from './data/adLandingPagesData';

export function getRoutes(): string[] {
  return [
    '/',
    '/services',
    '/service-areas',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/tips',
    '/sitemap',
    '/privacy',
    '/terms',
    '/lp',
    ...SERVICES_DATA.map((s) => `/services/${s.slug}`),
    ...COUNTIES_DATA.map((c) => `/service-areas/${c.slug}`),
    ...getAllCities().map((c) => `/service-areas/${c.city.slug}`),
    ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
    ...LOCKSMITH_TIPS_DATA.map((t) => `/tips/${t.slug}`),
    ...AD_CAMPAIGNS.map((a) => `/lp/${a.slug}`),
  ];
}

export function render(path: string) {
  headCollector.current = null;
  const html = renderToString(<App initialPath={path} />);
  return { html, head: headCollector.current };
}
