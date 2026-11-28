# Phase VIII — Conversion optimization: implementation and verification

## Owner-approved scope and release gate

Phase VIII improves **organic** customer journeys while preserving the approved Phase VII-B appearance, 24/7 call-first model and real customer reviews. Do not create an online quote form, appointment promise, pricing table, chatbot, pop-up, external tracking script or inferred customer testimonial. Use only approved photography; continue excluding the expressly rejected Google review/attached personal photograph and the seven rejected job photographs.

The full phase remains **in development** until owner visual approval, completed technical and browser testing, confirmation of paid-path integrity and exactly one production merge/publication. The owner will personally measure PageSpeed Insights and provide results, so **do not consume Work mode usage on PSI testing**.

## Conversion jobs and customer questions

| Visitor intent | Primary answer | Next step |
| --- | --- | --- |
| Locked out of vehicle, house or business | On-site locksmith assistance, 24/7 emergency availability | Call dispatch |
| Lost all car keys or needs a spare | Mobile compatible key cutting/programming and key fob support | Call for service |
| Moving or lost home keys | Rekey compatible hardware, install or repair locks | Call dispatch |
| Storefront door or office access issue | Business lock service, repair, rekeying, installation | Call dispatch |
| Unsure whether city is served | Miami-Dade/Broward/Palm Beach service-area directory and direct mobile service request | Call dispatch |
| Comparing reputation | Genuine verified Google reviews, relevant service examples labeled accurately | Read reviews or call |

Emphasize convenience, professional mobile technicians, service on site, same-day availability and 24/7 emergency help. No unverified response-time guarantees, pricing, inventory guarantees, discounts, comparative dealer multiples, licensing/insurance assertions, fake before/after examples or first-person fictional reviews. Do not introduce instructions referring routine customers to competing businesses or public emergency services; exclude life-threatening scenarios from marketing examples.

## Implementation in this branch (chat)

1. Organic service-detail templates: service-specific benefit copy for 12 registered services, bilingual relevance, a call-and-review decision panel, improved headings, no extra JavaScript or third-party resources.
2. Organic homepage: clear compact reasons to call (same-day mobile, on-site compatible car key/fob work, 24/7 dispatch), improved English/Spanish coverage and FAQs. Keep hero/approved photo, review carousel and call buttons.
3. Contact page: replace unsupported live operational claim "vans on duty right now" with supportable 24/7 dispatch messaging; replace absolutist "100% live contact" with direct-dispatch language.
4. Preserve service navigation, original tel: destinations and current phone event tracking. No paid landing page body or account settings edits.

## Funnel definitions — preserve truthful measurement

**Website sessions → organic/paid landing page → phone-link click → connected call → qualified conversation → dispatched/booked ticket → completed job → realized gross revenue → gross margin.**

Website `phone_click` records intent **only**, not a connected call, booking, job or sale. Never label clicks or dial-pad opens as completed calls. The existing handler emits `phone_click`, captures permitted URL attribution (gclid, gbraid, wbraid, UTM parameters), and deduplicates direct/document phone-link handlers. Google Ads call forwarding and existing Zaraz/GA4 or other tag configuration must not be changed accidentally. Never fabricate conversions or submit test conversions to live endpoints.

A future read-only assessment should identify which fields can be reliably joined **without exposing customer personal data**:
- Website campaign/landing page, channel, time and CTA placement;
- Calling platform: connected/missed call, repeat calls, duration, forwarding number, routing;
- Dispatch/CRM: new ticket, qualified, dispatched/booked, completed/cancelled, reason lost;
- Revenue ledger: actual customer payment, parts spend, technician commission, platform costs.

Join offline records only if account/CRM access, authorization, identifiers and privacy rules support it. Do not upload offline conversions, change GA4 or Ads goals/bidding, enable call recordings, create integrations, send real test calls, process customer PII or create a data store as part of this draft.

### Recommended baseline dashboard (proposed, not currently measured)

| KPI | Definition |
| --- | --- |
| Mobile CTA click rate | Eligible mobile landing sessions with at least one phone CTA click / eligible mobile landing sessions |
| Organic assisted-call intent | Organic sessions that click a phone link (mark as intent, not connected call) |
| Connected call rate | Connected distinct inbound calls / eligible distinct inbound calls, source-defined |
| Qualified call rate | Qualified distinct connected conversations / connected distinct conversations |
| Dispatch rate | Dispatched tickets / qualified calls |
| Completed job rate | Completed jobs / dispatched tickets |
| Contribution per job | Collected payment minus parts, technician pay and directly allocable expenses (when available) |
| Ads cost per completed job | Attributable ad spend / attributed completed jobs |
| Revenue per qualified call | Attributable collected revenue / qualified connected calls |

Before producing actual metrics, agree on source of truth, attribution window, deduplication across call channel and direct website clicks, returned customers and cancellations. Segment by automotive, residential, commercial, urgent intent, geography, EN/ES, paid vs organic and page family only where volume supports interpretation. Avoid converting owner-supplied historical averages into current measurements.

## Paid routes and ads protection

All **45** paid URLs and **six** ad destinations remain protected, with original bodies, noindex/canonical directives, Search Ads website-call number forwarding and the existing Google/Zaraz/UTM/GCLID/GBRAID/WBRAID behavior preserved. The dedicated ad landing component is intentionally not modified in this chat implementation. A read-only paid copy and conversion audit may identify narrowly scoped improvements, but proposed paid creative changes must be itemized and approved before implementation. Never touch ads/LSA/GBP settings, subscriptions, billing or click ads.

## Validation and handover gates

- GitHub type check, build, prerender, sitemap/SEO and link checks, asset budgets, browser checks, mobile sticky bar and bilingual navigation;
- Organic homepage, key automotive/residential/commercial/lockout service pages and contact at phone, tablet and desktop widths;
- Confirm all 12 service templates show correct benefit text in EN and ES, call links work without dialing, and the additional panel does not duplicate or obscure sticky call bar;
- Confirm genuine reviews remain accurate and excluded review/personal image remain absent;
- Recheck **235 indexable**, **162 geographic**, **45 noindex paid** URLs, 41 critical journeys, six mocked forwarding/attribution tests and no change in published ads content;
- Owner supplies external PageSpeed readings; do not replace these with unverified assumptions.
- Review screenshots/visual changes before owner approves a single publication.

Any unperformed check must be labeled **pending**, not assumed passed. Do not publish automatically, and do not initiate Phase IX without authorization.

## Completed development review

The Spanish service routes use a separate template. Both templates now render the same service-specific decision panel, keeping the localized copy and CTA event label consistent on all 24 routes. The organic reviews page now opens with its heading, Google review context and a call link before the carousel. The mobile call bar has a Spanish accessible name and respects reduced motion. The existing English-only reviews URL and Spanish links to it remain valid.

### Source map for the call-to-profit funnel

| Stage | Source and minimum fields | Counting and validation |
| --- | --- | --- |
| Visit and phone intent | GA4. Date, session key when available in a permitted export, first landing path, session source/medium/campaign, device, language from path, event timestamp, and CTA label. | Count distinct eligible sessions and distinct sessions with a phone click. Preserve raw click count separately. Use session grain only with a dependable key. |
| Connected call | Inbound call provider or Google Ads call detail where forwarding covered the call. Use opaque call ID, route/channel, start time, disposition and connected duration. | Deduplicate by provider call ID. Use the provider's answered/connected definition. Report missed calls and repeats separately. An Ads call conversion threshold is not the same as an answered call. |
| Qualified lead | Dispatch disposition with opaque lead or ticket ID, provider call ID where carried through, qualification status/reason and timestamps. | Agree on a definition such as a genuine applicable request in the service area. Exclude spam, vendor calls and duplicates. |
| Dispatch and completion | CRM. Opaque job ID, related lead ID, dispatched/booked/completed/cancelled status timestamps and service category. | Keep one row per job and a one-to-many relationship from a lead to jobs where applicable. Track cancellations and reassignment as outcomes. |
| Revenue and contribution | Payment records. Opaque payment and job IDs, currency, collected net-of-refunds amount, parts, technician commission and direct fees. Aggregate spend by attributable source/date when available. | Reconcile refunds, split payments and fees. Report direct contribution separately from profit after overhead. Include attributable media costs once and state the allocation method. |

Use the provider call ID carried into the dispatch record and the CRM job ID carried into payments as deterministic joins. Use a supported attribution identifier only if the phone system captures it and transfers it with permission. Standard calls to the shared public number cannot be assigned to an individual organic website click with the currently verified fields. Keep such calls in an unmatched bucket, or report aggregate channel trends with that limitation. Avoid joins on timestamps alone. Agree on timezone, attribution window and duplicate rules before comparing sources. Restrict any exports to operational IDs and aggregate counts, and exclude caller names, phone numbers, addresses, recordings and raw attribution IDs from the shared evidence.

The connected GA4 website property reported 309 `session_start` events, 791 `page_view` events and 15 `phone_click` events from 8 reported users for October 31–November 27, 2026. These observations predate Phase VIII publication. They cannot be used to compute a click-session rate or treated as answered calls or sales. GA4 total revenue on the displayed event rows was $0.00, which is not a measure of collected locksmith revenue. No cross-system integration was implemented. See the handover evidence for the available reporting scope.

Google Ads listed the six existing website destinations in its Landing pages report for November 21–27, 2026. The predefined Call Details report exposes routing and outcome fields but did not establish an all-channel answered-call total. No operational CRM or ledger access was available.
The current website can emit an optional separate Ads conversion event on a phone click if its build-time target is configured. Any change to that action or its reporting role requires separate approval and a read-only inventory of existing Ads metrics first.
