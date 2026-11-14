export type Lang = 'en' | 'es';

const SPANISH_EXACT = ['/', '/services', '/service-areas', '/about', '/contact', '/faq'];
const SPANISH_PREFIXES = ['/services/', '/service-areas/'];

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
  const p = basePath.replace(/\/+$/, '') || '/';
  return SPANISH_EXACT.includes(p) || SPANISH_PREFIXES.some((prefix) => p.startsWith(prefix));
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

/** The same page in the other language, for the language switch. Pages without a Spanish version still switch (noindex). */
export function switchPath(fullPath: string, to: Lang): string {
  const cut = fullPath.search(/[?#]/);
  const pathPart = cut === -1 ? fullPath : fullPath.slice(0, cut);
  const rest = cut === -1 ? '' : fullPath.slice(cut);
  const base = stripLocale(pathPart);
  if (to === 'en' || !hasSpanishVersion(base)) return base + rest;
  return (base === '/' ? '/es' : '/es' + base) + rest;
}
