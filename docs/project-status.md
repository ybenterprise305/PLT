# Pro Locksmith Tech project record

## Roadmap

| Phase | Scope | State at this release |
|---|---|---|
| I | Elite technical engineering | Published and verified |
| II | Advanced technical SEO | See Phase II implementation and verification |
| III | Structured data and business entity authority | Awaiting explicit approval |
| IV | AEO, AIO, GEO and agentic browsing | Awaiting explicit approval |
| V | Content and topical authority | Awaiting explicit approval |
| VI | Advanced local SEO | Awaiting explicit approval |
| VII | Premium design and user experience | Awaiting explicit approval |
| VIII | Superior conversion optimization | Awaiting explicit approval |
| IX | Enterprise security and reliability | Awaiting explicit approval |
| X | Automated enterprise quality control | Awaiting explicit approval |
| XI | External authority and competitive intelligence | Awaiting explicit approval |
| XII | Measurement and continuous improvement | Awaiting explicit approval |

## Baseline and recovery

- Pre-Phase-I production Git SHA is `4526f809904652f75ac6357729db941d68b25e6e`. The Cloudflare Workers version is `9cc36d1d` on `pro-locksmith-tech`. The version is the recovery target if the Phase I publish introduces a critical regression. Use Workers & Pages → pro-locksmith-tech → Deployments → prior version options → Rollback. Verify the recovered HTML, hashed assets and paid paths before closing the incident.
- The original owner-supplied mobile report showed 89 performance, 96 accessibility, 100 best practices, 100 SEO, 4/4 agentic, FCP 1.5 s, LCP 3.5 s, TBT 0 ms and CLS 0. The independent November 27 audit measured 22 URL templates across both devices and included performance traces, a 633-request crawl and read-only account observations.

## Phase I decisions

- Retain React, Vite, and Workers Static Assets. Route-specific modules use the same route resolver in browser and pre-render builds. The client hydrates the current route. Real links continue to work if a route module fails. Static HTML gets only the preloads for the matching route and its dependencies.
- The 239 primary documents maintain their titles, H1s, canonicals, hreflang, robots and JSON-LD. The sitemap is byte-identical. Thirty paid aliases were pre-rendered to preserve their behavior when turning off the SPA 200 fallback. They specify the primary campaign canonical and remain noindex.
- The generated route and SEO assets are checked by `scripts/check-seo.mjs` and `scripts/check-phase-i.mjs`. The latter bounds each route’s eagerly loaded gzip JS and CSS and checks generated media references and sizes.
- Self-host both existing font families through pinned SIL Open Font License Fontsource packages. Use responsive media from the existing originals. The signed-off ad creative keeps its original fallback asset. Use the existing favicon SVG for the visible logo emblem.
- The app keeps analytics initialization before route hydration. Cloudflare Zaraz is independent of client code and has no change in this release. `scripts/check-tracking.mjs` exercises the six paid paths with local-only test IDs, mocked callbacks, click deduplication and fallbacks without dialing. This confirms code behavior, not Google’s production routing of calls.
- Use one production branch merge after local and preview checks. Verify the active Cloudflare version and main SHA after deployment. Operational release history is recorded by GitHub and Cloudflare. No manual deployment is required after the automatic deployment trigger.
- Sharp was updated to clear the build-time advisory. Package lock and `npm ci` make the checked build reproducible. CI also uses the existing rendering suite plus device-width, attribution, fallback, assets and budget checks.

## Remaining dependencies

Field data is still sparse. Remove no further attribution or analytics dependencies to chase a score. Broader content, canonical migrations, optional zone-level HTTPS/security policies, production consent work and full assisted accessibility testing belong to explicitly approved follow-up phases. Validate the reported production-only diagnostics separately from local Lighthouse. Do not send a synthetic production conversion.

## Phase II

See [Phase II technical SEO implementation](phase-ii-technical-seo.md) for the architecture, index policy, search-intent map and baseline issue register.
