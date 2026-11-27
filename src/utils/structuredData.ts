import { BUSINESS_NAME, PHONE_E164, SITE } from '../config/business';
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
      description: 'Serving South Florida since 2000, Pro Locksmith Tech provides 24/7 mobile automotive, residential and commercial locksmith services.',
      sameAs: [
        'https://maps.google.com/maps?cid=16992150185739281311',
        'https://nextdoor.com/pages/pro-locksmith-tech-coral-springs-fl/',
        'https://www.yelp.com/biz/pro-locksmith-tech-coral-springs-2',
        'https://www.facebook.com/people/Pro-Locksmith-Tech/61596007395772/',
        'https://www.instagram.com/pro_locksmith_tech/',
        'https://www.pinterest.com/prolocksmithtech/',
      ],
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
