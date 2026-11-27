import { SITE } from '../config/business';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { canonicalSitePath, hasSpanishVersion, localizePath, stripLocale } from '../utils/locale';


interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  noIndex?: boolean;
}

/** Filled while pre-rendering at build time so the script can write each page's head tags. */
interface ResolvedHead {
  title: string;
  robots: string;
  canonical: string | null;
  meta: Record<string, string>;
  alternates: [string, string][];
}

export const headCollector: { current: ResolvedHead | null } = { current: null };

export function resolveHead(input: SEOHeadProps, language: 'en' | 'es', path: string): ResolvedHead {
  const title = tidyTitle(input.title);
  const description = tidyDescription(input.description);
  const base = stripLocale(input.canonicalPath || path).replace(/\/+$/, '') || '/';
  const translated = hasSpanishVersion(base);
  const canonical = base === '/404.html' ? null : SITE + canonicalSitePath(language === 'es' && translated ? localizePath(base, 'es') : base);
  const robots = input.noIndex || (language === 'es' && !translated) ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const alternates: [string, string][] = translated ? [
    ['en', SITE + canonicalSitePath(base)],
    ['es', SITE + canonicalSitePath(localizePath(base, 'es'))],
    ['x-default', SITE + canonicalSitePath(base)],
  ] : [];
  return {
    title, robots, canonical,
    alternates,
    meta: {
      description, robots,
      'og:title': title, 'og:description': description, 'og:type': input.ogType || 'website',
      'og:url': canonical || SITE + '/', 'twitter:title': title, 'twitter:description': description,
      ...(input.keywords ? { keywords: input.keywords } : {}),
    },
  };
}

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

/** Keeps a title within ~60 characters by dropping the middle descriptor, then the brand suffix. */
export function tidyTitle(title: string): string {
  if (title.length <= TITLE_MAX) return title;
  const parts = title.split(' | ');
  if (parts.length >= 3) {
    const shorter = [parts[0], parts[parts.length - 1]].join(' | ');
    if (shorter.length <= TITLE_MAX) return shorter;
  }
  if (parts.length >= 2 && parts[0].length <= TITLE_MAX) return parts[0];
  const cut = title.slice(0, TITLE_MAX - 1);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

/** Keeps a description within ~160 characters, ending on a sentence or word boundary. */
export function tidyDescription(text: string): string {
  if (text.length <= DESCRIPTION_MAX) return text;
  const window = text.slice(0, DESCRIPTION_MAX);
  const sentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '));
  if (sentence >= 100) return window.slice(0, sentence + 1);
  const cut = text.slice(0, DESCRIPTION_MAX - 1);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

export function SEOHead(input: SEOHeadProps) {
  const { language, path } = useLanguage();
  const { title, description, canonicalPath, keywords, ogType, noIndex } = input;
  if (typeof window === 'undefined') headCollector.current = resolveHead(input, language, path);

  useEffect(() => {
    const head = resolveHead({ title, description, canonicalPath, keywords, ogType, noIndex }, language, path);
    document.title = head.title;
    for (const [name, content] of Object.entries(head.meta)) {
      const attribute = name.startsWith('og:') ? 'property' : 'name';
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    }
    if (!keywords) document.head.querySelector('meta[name="keywords"]')?.remove();
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (head.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', head.canonical);
    } else {
      canonical?.remove();
    }
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(node => node.remove());
    for (const [lang, href] of head.alternates) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = href;
      document.head.appendChild(link);
    }
  }, [title, description, canonicalPath, keywords, ogType, noIndex, language, path]);

  return null;
}
