import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { hasSpanishVersion, localizePath, stripLocale } from '../utils/locale';

const SITE = 'https://prolocksmith-tech.com';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  noIndex?: boolean;
}

/** Filled while pre-rendering at build time so the script can write each page's head tags. */
export const headCollector: { current: SEOHeadProps | null } = { current: null };

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

export function SEOHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const { language, path } = useLanguage();
  title = tidyTitle(title);
  description = tidyDescription(description);

  // Which page this is (ignoring the language prefix) and where its canonical address is.
  const basePath =
    (canonicalPath ? (canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath) : stripLocale(path)).replace(/\/+$/, '') || '/';
  const spanishVersionExists = hasSpanishVersion(basePath);
  // Spanish pages are indexable only where the Spanish content is real; elsewhere they point at the English page.
  const finalNoIndex = noIndex || (language === 'es' && !spanishVersionExists);
  const finalCanonicalPath = language === 'es' && spanishVersionExists ? localizePath(basePath, 'es') : basePath;

  if (typeof window === 'undefined') {
    headCollector.current = { title, description, canonicalPath: finalCanonicalPath, keywords, ogType, noIndex: finalNoIndex };
  }

  useEffect(() => {
    const setTag = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    const meta = (key: 'name' | 'property', name: string) => () => {
      const m = document.createElement('meta');
      m.setAttribute(key, name);
      return m;
    };

    const canonical = SITE + finalCanonicalPath;

    document.title = title;
    setTag('meta[name="description"]', meta('name', 'description'), 'content', description);
    setTag('meta[name="robots"]', meta('name', 'robots'), 'content', finalNoIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, 'href', canonical);
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', title);
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', description);
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', canonical);
    setTag('meta[property="og:type"]', meta('property', 'og:type'), 'content', ogType);
    setTag('meta[name="twitter:title"]', meta('name', 'twitter:title'), 'content', title);
    setTag('meta[name="twitter:description"]', meta('name', 'twitter:description'), 'content', description);
    if (keywords) setTag('meta[name="keywords"]', meta('name', 'keywords'), 'content', keywords);

    // Tell search engines which address is the English and which the Spanish version of this page.
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (spanishVersionExists) {
      const alternates: [string, string][] = [
        ['en', SITE + basePath],
        ['es', SITE + localizePath(basePath, 'es')],
        ['x-default', SITE + basePath],
      ];
      alternates.forEach(([lang, href]) => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'alternate');
        l.setAttribute('hreflang', lang);
        l.setAttribute('href', href);
        document.head.appendChild(l);
      });
    }
  }, [title, description, finalCanonicalPath, finalNoIndex, keywords, ogType, basePath, spanishVersionExists]);

  return null;
}
