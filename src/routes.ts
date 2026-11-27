import type { ComponentType } from 'react';
import { isEsPath, stripLocale } from './utils/locale';

export interface RouteProps {
  path: string;
  slug: string;
  onNavigate: (path: string) => void;
}

const pages = import.meta.glob<Record<string, ComponentType<RouteProps>>>([
  './pages/*Page.tsx',
  '!./pages/AdLandingHubPage.tsx',
]);

export const standalonePages = {
  '/': 'HomePage',
  '/services': 'ServicesPage',
  '/service-areas': 'ServiceAreasPage',
  '/about': 'AboutPage',
  '/reviews': 'ReviewsPage',
  '/contact': 'ContactPage',
  '/faq': 'FAQPage',
  '/blog': 'BlogListPage',
  '/tips': 'LocksmithTipsPage',
  '/sitemap': 'SitemapPage',
  '/privacy': 'PrivacyPolicyPage',
  '/terms': 'TermsPage',
} as const;

export const paidPrefixes = ['lp', 'landing', 'ad'] as const;

export function matchRoute(pathname: string) {
  const fullPath = pathname.replace(/\/+$/, '') || '/';
  const path = stripLocale(fullPath);
  const [group, slug = '', nested = '', ...rest] = path.slice(1).split('/');
  const spanish = isEsPath(fullPath);
  let name: string = 'NotFoundPage';

  if (spanish && path !== '/' && !nested && (
    ['/services', '/service-areas', '/about', '/contact', '/faq'].includes(path)
    || ((group === 'services' || group === 'service-areas') && slug)
  )) {
    name = 'SpanishContentPage';
  } else if (Object.hasOwn(standalonePages, path)) {
    name = standalonePages[path as keyof typeof standalonePages];
  } else if (slug && !nested && !rest.length) {
    if (paidPrefixes.some(prefix => prefix === group)) name = 'AdLandingPage';
    else if (group === 'services') name = 'ServiceDetailPage';
    else if (group === 'service-areas') name = 'LocationDetailPage';
    else if (group === 'blog') name = 'BlogPostPage';
    else if (group === 'tips') name = 'TipDetailPage';
  } else if (group === 'service-areas' && slug && nested && !rest.length && !spanish) {
    name = 'NeighborhoodPage';
  }

  return { name, fullPath, path, slug: name === 'NeighborhoodPage' ? `${slug}/${nested}` : slug };
}

export async function loadRoute(pathname: string) {
  const match = matchRoute(pathname);
  const file = `./pages/${match.name}.tsx`;
  const module = await pages[file]();
  return {
    ...match,
    moduleId: `src/${file.slice(2)}`,
    Component: module[match.name],
  };
}

export type LoadedRoute = Awaited<ReturnType<typeof loadRoute>>;
