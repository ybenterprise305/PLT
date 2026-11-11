import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  noIndex?: boolean;
}

export function SEOHead({ 
  title, 
  description, 
  canonicalPath, 
  keywords, 
  ogType = 'website',
  noIndex = false 
}: SEOHeadProps) {
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

    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonicalPath, keywords, ogType, noIndex]);

  return null;
}
