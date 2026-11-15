# Referral links and UTM attribution — Pro Locksmith Tech

The website **already** captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `gbraid` and `wbraid` from incoming visitors in `src/utils/analytics.ts` and attaches them to phone-click events. These tags go **on external profiles or campaign links pointing TO the website**, not on internal links.

Use each exact URL in the website field of its corresponding account:

| Platform | Tagged website destination |
|---|---|
| Yelp Business Profile | https://prolocksmith-tech.com/?utm_source=yelp&utm_medium=referral&utm_campaign=business_profile |
| Google Business Profile | https://prolocksmith-tech.com/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile |
| Nextdoor | https://prolocksmith-tech.com/?utm_source=nextdoor&utm_medium=referral&utm_campaign=business_profile |
| Instagram | https://prolocksmith-tech.com/?utm_source=instagram&utm_medium=social&utm_campaign=profile |
| Facebook Page | https://prolocksmith-tech.com/?utm_source=facebook&utm_medium=social&utm_campaign=business_page |
| X | https://prolocksmith-tech.com/?utm_source=x&utm_medium=social&utm_campaign=profile |
| Pinterest | https://prolocksmith-tech.com/?utm_source=pinterest&utm_medium=social&utm_campaign=profile |

For Google Ads, retain auto-tagging (`gclid`, `gbraid`, `wbraid`) and avoid manual UTMs that override Ads/GA4 attribution unless an account-specific tracking template is approved.

Do not add UTM tags to the website's own header/footer/internal links, canonical tags, sitemap, JSON-LD identity links, or review links. Doing so creates false sessions and duplicate URL variants.

## Yelp public listing vs owner dashboard

`https://biz.yelp.com/biz_info/7W01dlpqoLl4L96MpX2y-A` is a **private Yelp for Business dashboard**, not the URL customers should visit.

In Yelp for Business, open **View on Yelp** or **View business page**, copy the resulting `https://www.yelp.com/biz/...` URL, and verify it shows Pro Locksmith Tech, (754) 261-6528, and prolocksmith-tech.com. Only then place that customer-facing URL in footer links or the `sameAs` JSON-LD list. Never put `biz.yelp.com` management pages in the site or schema.

## Privacy

Avoid sending customer names, phone numbers, or personal information in URLs or UTM values. UTM collection should follow the website's privacy policy and relevant consent requirements.
