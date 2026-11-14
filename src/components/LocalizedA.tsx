import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { localizePath } from '../utils/locale';

/**
 * A normal <a> that keeps Spanish visitors on the Spanish version (/es/...) of every
 * page that has one. Links to phone numbers, other sites and English-only pages are untouched.
 */
export function LocalizedA({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { language } = useLanguage();
  const finalHref = typeof href === 'string' ? localizePath(href, language) : href;
  return <a href={finalHref} {...rest} />;
}
