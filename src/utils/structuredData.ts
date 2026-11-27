import { BUSINESS_NAME, PHONE_E164, SERVICE_SINCE, SITE, VERIFIED_PROFILES } from '../config/business';
import { canonicalLink, localizePath, type Lang } from './locale';

const homeURL = SITE + '/';
const businessId = homeURL + '#locksmith';

export const siteIdentity = {
  '@graph': [
    {
      '@type': 'Organization',
      '@id': businessId,
      name: BUSINESS_NAME,
      url: homeURL,
      telephone: PHONE_E164,
      logo: SITE + '/icon-192.png',
      description: `Serving South Florida since ${SERVICE_SINCE}, ${BUSINESS_NAME} provides 24/7 mobile automotive, residential and commercial locksmith services.`,
      sameAs: VERIFIED_PROFILES.map(([, url]) => url),
    },
    {
      '@type': 'WebSite',
      '@id': homeURL + '#website',
      name: BUSINESS_NAME,
      url: homeURL,
      publisher: { '@id': businessId },
    },
  ],
};

function pageURL(path: string, language: Lang) {
  return SITE + canonicalLink(localizePath(path, language));
}

export function breadcrumbData(items: [string, string][], language: Lang) {
  return {
    '@type': 'BreadcrumbList',
    '@id': pageURL(items[items.length - 1][1], language) + '#breadcrumb',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: pageURL(path, language),
    })),
  };
}

interface ArticleData {
  type: 'Article' | 'BlogPosting';
  path: string;
  language: Lang;
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  image?: string;
}

export function articleData({ type, path, language, headline, description, author, datePublished, image }: ArticleData) {
  const url = pageURL(path, language);
  return {
    '@type': type,
    '@id': url + '#article',
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: language,
    publisher: { '@id': businessId },
    ...(author ? { author: {
      '@type': 'Organization',
      name: author,
      ...(author === BUSINESS_NAME ? { '@id': businessId, url: homeURL } : {}),
    } } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(image ? { image: new URL(image, SITE).href } : {}),
  };
}
