import { useEffect } from 'react';

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
  noIndex = false 
}: SEOHeadProps) {
  title = tidyTitle(title);
  description = tidyDescription(description);
  if (typeof window === 'undefined') {
    headCollector.current = { title, description, canonicalPath, keywords, ogType, noIndex };
  }

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Robots Directives (e.g. noindex, follow for paid ad landing pages)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large');

    // 4. Update Canonical Tag
    const resolvedCanonical = canonicalPath
      ? `https://prolocksmith-tech.com${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`
      : 'https://prolocksmith-tech.com' + (window.location.pathname.replace(/\/+$/, '') || '/');
      
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', resolvedCanonical);

    // 5. Update OG Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', resolvedCanonical);

    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);

    // 6. Update Twitter Meta
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // 7. Update Keywords if present
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) metaKw.setAttribute('content', keywords);
    }

  }, [title, description, canonicalPath, keywords, ogType, noIndex]);

  return null;
}
