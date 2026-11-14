const SITE = 'https://prolocksmith-tech.com';

/** Builds schema.org breadcrumb data: [[name, path], ...] from Home to the current page. */
export function breadcrumbSchema(trail: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'] as [string, string], ...trail].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: SITE + path,
    })),
  };
}
