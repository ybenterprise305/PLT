import { clients, translations, serviceRedirects } from '../generated/routeData';
import { canonicalSitePath, pathKey } from './paths';
export { canonicalSitePath } from './paths';

export type Lang = 'en' | 'es';

export function isEsPath(path: string): boolean {
  return path === '/es' || path.startsWith('/es/');
}

/** '/es/services' -> '/services', '/es' -> '/'. English paths come back unchanged. */
export function stripLocale(path: string): string {
  if (path === '/es') return '/';
  return path.startsWith('/es/') ? path.slice(3) : path;
}

/** Pages that have real Spanish content, and therefore a /es/ version that search engines can index. */
export function hasSpanishVersion(basePath: string): boolean {
  return translations.has(pathKey(basePath));
}

/** Adds /es to a path (keeping any ?query or #hash). Only pages with a Spanish version are changed. */
export function localizePath(href: string, lang: Lang): string {
  if (lang !== 'es' || !href.startsWith('/') || href.startsWith('//')) return href;
  const cut = href.search(/[?#]/);
  const pathPart = cut === -1 ? href : href.slice(0, cut);
  const rest = cut === -1 ? '' : href.slice(cut);
  if (isEsPath(pathPart) || !hasSpanishVersion(pathPart)) return href;
  return (pathPart === '/' ? '/es' : '/es' + pathPart) + rest;
}

/** Switch to a published translation when one exists. */
export function switchPath(fullPath: string, to: Lang): string {
  const cut = fullPath.search(/[?#]/);
  const pathPart = cut === -1 ? fullPath : fullPath.slice(0, cut);
  const rest = cut === -1 ? '' : fullPath.slice(cut);
  const base = stripLocale(pathKey(pathPart));
  if (to === 'en' || !hasSpanishVersion(base)) return base + rest;
  return (base === '/' ? '/es' : '/es' + base) + rest;
}

/** Normalize only published links and known legacy paths. Keep query strings and fragments intact. */
export function canonicalLink(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const cut = href.search(/[?#]/);
  const raw = cut < 0 ? href : href.slice(0, cut);
  const rest = cut < 0 ? '' : href.slice(cut);
  const current = pathKey(raw);
  const match = /^\/services\/([^/]+)$/.exec(current);
  const redirected = match && Object.hasOwn(serviceRedirects, match[1]) ? '/services/' + serviceRedirects[match[1]] : current;
  return Object.hasOwn(clients, redirected) ? canonicalSitePath(redirected) + rest : href;
}
