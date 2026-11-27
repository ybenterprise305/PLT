# Phase IV answer discovery and agentic browsing

The production recovery point is Git `9baa2470fae6d4b3e718548fe9120e10ef917c9a` and Workers version `c4a7ad25`. Recover from a critical regression with the previous Workers version and verify the homepage, sitemap, paid paths and redirect attribution.

## Search and crawler policy

| Agent | Documented purpose | Site robots policy |
|---|---|---|
| Googlebot | Search indexing and supporting AI Overviews and AI Mode eligibility | Wildcard allow |
| Bingbot | Bing Search indexing, including sources available to Bing and Microsoft Copilot | Explicit allow |
| OAI-SearchBot | ChatGPT Search discovery | Explicit allow |
| ChatGPT-User | User-initiated retrieval. Some of these requests may fall outside robots.txt | Wildcard allow |
| PerplexityBot | Perplexity Search discovery | Wildcard allow |
| Perplexity-User | User-requested retrieval. It generally ignores robots.txt | Wildcard allow |
| Claude-SearchBot and Claude-User | Search indexing and on-demand retrieval respectively | Wildcard allow |
| Claude-Agent | Claude-hosted, user-directed browser with independently documented source addresses | No dedicated directive |
| Applebot | Apple search, with separately controlled reuse for model training | Wildcard allow |
| GPTBot and ClaudeBot | Model-training collection | Existing wildcard allow preserved |
| Google-Extended and Applebot-Extended | Product-specific controls for reuse of existing crawl data | Existing wildcard preference preserved |

Cloudflare policy can apply before the Worker and independently of robots.txt. Use verified traffic classifications or official source-IP checks for individual crawlers when events are available. The supplied user-agent headers in HTTP probes are simulations. Exclusion from indexing and permission to crawl are independent, so ad pages continue to be fetchable with their existing noindex. The Organic metadata carries no unexpected snippet restriction. Existing training settings stay in effect until the owner makes a separate decision. Broader bot and WAF controls are a Phase IX matter.

## Build and visible content

- Retain `llms.txt` as an optional public directory. Generate it during the existing route data step from indexable canonicals and the shared business facts. The same six verified profile references supply the published Organization. The file excludes paid URLs and arbitrary profiles. It conveys no new crawl permission and Google currently has no requirement to read it.
- Retire the two experimental ARD and legacy catalog files and remove their HTML discovery hint and media-type overrides. They described ordinary Markdown, with no supported tool, callable agent, or skill. Lighthouse 13.6 recognizes the new ARD proposal and flagged the old document media type. Making the document claim to be a skill would be inaccurate. Retain the existing platform-independent sitemap and normal HTML.
- Make payment methods and pricing factors visible on both contact pages. Refine the homepage’s existing lost-key answer and link the existing transponder guide to the relevant automotive service. Replace fixed organic map, contact and Tamarac estimates with a location-specific availability message. Existing paid creative continues through its separate noindex routes.
- Use native disclosure for FAQ answers, with working keyboard interaction before hydration. The topic filters report their pressed state. The modal mobile navigation moves focus inside and restores the opener when dismissed. SPA navigation focuses the destination main region. Essential service, location, language and phone links remain normal anchors.
- Preserve the Phase III Organization, Article and Breadcrumb policy. Match robots.txt, sitemap, side-by-side performance, paid noindex, native phone links, and the six mocked attribution and forwarding journeys. The agentic Lighthouse audit has its own applicable check count. Sites without WebMCP tools do not need to implement a tool just to change the score.

## Repeatable validation

Run `npm run lint`, `npm run build`, `node scripts/check-seo.mjs`, `node scripts/check-discovery.mjs` and `node scripts/check-phase-i.mjs`. With the static server running, use `check-site`, `check-seo-browser`, `check-agent-journeys` and `check-tracking`. The journey suite includes the 18 customer tasks at mobile and desktop widths plus separate bilingual, native FAQ and mobile keyboard checks. CI requires no external AI queries. Review compact performance results and the live HTTP probes in the release evidence.

## Official guidance

- [Google AI features and snippet eligibility](https://developers.google.com/search/docs/appearance/ai-features) and [Google generative AI controls](https://developers.google.com/search/docs/fundamentals/gen-ai-controls)
- [OpenAI crawler roles and published IP ranges](https://developers.openai.com/api/docs/bots)
- [Bing verified crawler guidance](https://blogs.bing.com/webmaster/2012/8/How-to-Verify-that-Bingbot-is-Bingbot) and [Bing AI performance report](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)
- [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) and [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Anthropic hosted browsers](https://support.claude.com/en/articles/18234133-how-do-anthropic-hosted-browsers-identify-themselves-when-they-browse-the-web-on-a-user-s-behalf) and [Applebot](https://support.apple.com/en-ug/119829)
- [Cloudflare crawl and agent policies](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/) and [verified traffic reports](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/)
- [Chrome Agentic Browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) and [Agentic Resource Discovery proposal](https://github.com/ards-project/ard-spec/blob/main/spec/ard.md)

## Content gaps for separately authorized work

| Priority | Gap and intent | Existing foundation | Evidence needed | Effort |
|---|---|---|---|---|
| High | Lost-key and spare-key compatibility by vehicle and fob type | Automotive, key replacement and spare-vs-lost article | Technician-confirmed compatibility and exclusions for models discussed | Medium |
| High | Pricing factors and how estimates are confirmed | Contact answers and key-programming cost article | Verified example scopes, labor and parts factors, and current payment terms | Medium |
| High | Emergency lockout decisions and what 24/7 availability means | Emergency service and FAQ | Verified dispatch guidance and circumstances needing specialized service | Low |
| High | Original job photos and consented case studies | Existing category and location pages | Approved photographs and attributable, redacted completed-job records | High |
| Medium | Rekeying versus replacement and basic residential security | Existing rekey service and comparison article | Technician-reviewed case examples and factual limitations | Low |
| Medium | Commercial door and access-control decision guides | Commercial service and door troubleshooting article | Verified supported hardware, useful photos and installation constraints | Medium |
| Medium | Useful, locally specific English and Spanish answers | Service directories, translated city pages and confirmed coverage | Verified local examples and bilingual review | Medium |

Phase V requires explicit approval. The query-set baseline is an observation of accessible interfaces and cannot establish a ranking or citation effect.
