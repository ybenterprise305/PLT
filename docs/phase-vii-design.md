# Phase VII design and user experience

## Design direction

The organic website uses one compact navigation row, a navy canvas, warm paper for the main service choices, and gold for primary actions and important links. The logo uses the existing approved SVG and keeps its intrinsic aspect ratio. The previously established Plus Jakarta Sans and Space Grotesk typography remain self-hosted. The header uses the platform UI font and reserved control space to isolate shared navigation from web-font loading.

The design keeps phone service easy to find and supports the existing service, location, guide and gallery relationships. The home, service, geographic, gallery, editorial, about, contact and FAQ templates use the same typography and spacing principles, with visible business facts and existing SEO metadata. English and Spanish build from the same styles. Paid routes continue to render outside the organic shell.

## Original photography

The homepage features the approved Dodge key fob image. Automotive and commercial service leads use the approved Nissan and storefront images, respectively. The caption identifies the precise verified work. The gallery retains each of its seven entries and the privacy-safe image variants. Contextual cards use a deliberately cropped homepage frame or contained media to retain the photo evidence. The old homepage image preload was removed. Server-rendered responsive image hints follow the active image, and the gallery retains lazy loading and explicit dimensions.

## Components and accessibility

Shared colors, reading length, content width, rhythm, radii and movement are defined as CSS custom properties and scoped to the organic page shell. The `plt-wrap`, `plt-page-lead` and `plt-service-lead` classes handle cadence and page structure. Gold actions and inline links have distinct treatments. Icons use the existing Lucide line library. Organic visuals use restrained hover states and honor reduced-motion preferences.

Primary navigation and both language choices are ordinary HTML links. The mobile menu uses a native dialog with focus restoration on Escape or close, and normal route focus on navigation. Sticky contact remains a telephone link and preserves its established event. Existing native FAQ summaries, geographic search, captions and headings remain available. The design targets WCAG 2.2 AA. Manual browser checks and automated scores cover a sample. Individual assistive-technology and field testing remain separate.

## Competitive observations

- [Einstein Locksmith Coral Springs](https://einsteinlocksmith.com/einstein-locksmith-coral-springs/) makes the mobile model and service choices visible immediately. The Pro Locksmith Tech homepage prioritizes a captioned example of its own work and a direct coverage path.
- [YourMechanic](https://www.yourmechanic.com/request-service-online) groups the mobile-service experience around the user's immediate need. The locksmith site keeps established service paths and focuses the first action on reaching the team by phone.
- The earlier competitor study covers locksmith and national home-service sites built on different platforms. The visual comparison focuses on hierarchy, logo visibility, contact access and verified evidence. The available evidence is insufficient to rank every design or assign unknown competitor CMSs.

## Recovery and validation

Run the usual build, SEO, local-content, editorial, discovery, budget, browser parity, journey and mocked attribution gates. Use representative viewport captures for all organic families and paid regression checks. Compare lighthouse runs and controlled delayed-font traces separately from field data. The emergency rollback target is Git `7e0ae473edc8c57a25bf80eb89f71253bf303ca4` and Workers `53aa62ab`.
