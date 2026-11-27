# Phase III structured data and business identity

The recovery baseline is Git `69cbc2245390de321919013161ddadb794f4bb02` and Cloudflare Workers version `1e28c8a5`. Release through one validated merge. For a critical production regression, roll back to that Workers version and recheck the homepage, a bilingual service, a missing URL, paid routes and the sitemap.

## Implementation

- The canonical root is the single source of the Organization and WebSite definitions. Keep the original `/#locksmith` and `/#website` identifiers. The business name and telephone come from the existing business configuration. The Organization description reflects 24/7 mobile service and the visible “Serving South Florida since 2000” statement. The exact date is unknown, so no full founding date is declared.
- The brand uses the existing 192 × 192 PNG version of the emblem already present in the site branding. The original vector, site imagery and favicon remain in place. The URL is absolute and included in the build. The homepage Organization definition carries the logo. Article publishers and the WebSite reference that same entity by ID.
- `sameAs` references the Google Maps CID explicitly confirmed against the business name and official site, Nextdoor and Yelp matched by identity and contact details, and Facebook, Instagram and Pinterest matched against the precise profiles linked from the site. Omit X from the graph because its identity could not be independently confirmed. Trustpilot and EZlocal are optional directory references. Their existing visible links are unchanged.
- Google requires the physical location for LocalBusiness eligibility. Remove the competing Locksmith, LocalBusiness and AutomotiveBusiness markup from the geographic templates and service-area directory. The existing county, city and neighborhood coverage pages still describe services. No office, address, coordinates, price range or separate establishment is inferred.
- The existing localized Breadcrumbs component now passes the exact visible items to the JSON-LD generator. The build checks the canonical destinations and parent chain against the Phase II registry, in addition to order, labels and languages. Coverage includes service directories and services, geographic directories and subpages, blog and guide directories and their articles. Neighborhoods include their existing county parent. The Spanish site continues to use the single homepage business identity.
- All 14 posts are BlogPosting with their existing visible headlines, bylines and publication dates and their published hero images. The exact dispatch-team byline is retained where present. Each article exposes its existing excerpt for parity. All eight guides use Article with their visible summaries and the shared publisher. The guide data has no verified exact publication or revised date and the templates have no article hero image or author byline. Do not infer these recommended fields from “Updated Recently,” a generic brand image, or a verification statement.
- Preserve visible FAQs, guides, reviews and service content. Drop FAQPage, HowTo, TechArticle, generic collection markup and unsupported supporting entity types. Review, AggregateRating, SearchAction, Product, Offer and VideoObject are excluded. No eligible watch pages were found. Search Console's breadcrumb enhancement is distinct from where Google displays the breadcrumb in results.
- Initial HTML includes page-specific schema without waiting for JavaScript. Existing components render the same data on hydration and on navigation. Advertisements and the 404 have no JSON-LD. Existing Google Ads attribution, tags and phone functionality continue through the current tracking code.

## Reproduce and verify

Run `npm run lint`, `npm run build`, `node scripts/check-seo.mjs`, and `node scripts/check-phase-i.mjs`. Start the existing dist server and run `check-site.mjs`, `check-seo-browser.mjs` and `check-tracking.mjs`. The SEO report under `src/generated/` includes structured data per page. The route policy distinguishes critical errors from optional guide recommendations. Use the stored before-and-after audit to compare entity counts and IDs across releases. CI runs all gates through the existing workflow.

| Generated markup | Phase II | Phase III |
|---|---:|---:|
| Documents inspected, including the 404 | 270 | 270 |
| Valid JSON-LD blocks | 383 | 235 |
| Invalid JSON-LD blocks | 0 | 0 |
| Documents repeating a top-level entity ID | 41 | 0 |
| Documents with Organization / WebSite definitions | 270 | 1 |
| Documents with physical-business classifications | 41 | 0 |
| BreadcrumbList documents | 88 | 212 |
| BlogPosting documents | 14 | 14 |
| Guide documents with TechArticle / Article | 8 TechArticle | 8 Article |

## Official guidance

- [Google Organization eligibility and logo requirements](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google LocalBusiness required properties](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google site-name placement and WebSite entity](https://developers.google.com/search/docs/appearance/site-names)
- [Google BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google Article and authorship guidance](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google FAQ and HowTo eligibility changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google review snippet and self-serving review rules](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Google video requirements](https://developers.google.com/search/docs/appearance/structured-data/video)
