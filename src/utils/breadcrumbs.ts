import { SITE } from '../config/business';
import { canonicalLink, localizePath, type Lang } from './locale';

export function breadcrumbSchema(trail: [string, string][], language: Lang = 'en') {
  const home: [string, string] = [language === 'es' ? 'Inicio' : 'Home', '/'];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [home, ...trail].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: SITE + canonicalLink(localizePath(path, language)),
    })),
  };
}
