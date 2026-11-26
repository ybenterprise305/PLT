/**
 * Pro Locksmith Tech - Conversion Analytics & Click-to-Call Tracking
 *
 * - Loads the Google tag (GA4 and/or Google Ads) only when IDs are configured through
 *   build-time environment variables:
 *     VITE_GA_MEASUREMENT_ID   e.g. G-XXXXXXXXXX
 *     VITE_GOOGLE_ADS_ID       e.g. AW-XXXXXXXXXX
 *   Without them nothing is loaded and tracking calls are safe no-ops.
 * - Tracks every tel: link automatically through one document-level listener,
 *   so new buttons are covered without extra code.
 * - Remembers the ad click id (gclid) and UTM values for the session and attaches them to events.
 *
 * A phone link click shows call intent, not a completed call. Use call assets / call tracking
 * in Google Ads for completed-call reporting.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const PHONE_E164 = '+17542616528';
const SEARCH_ADS_TAG = 'AW-18475105079';
const SEARCH_WEBSITE_CALL_ACTION = SEARCH_ADS_TAG + '/qiWsCNj2jsAdELf2zulE';
const SEARCH_PHONE_DISPLAY = '(754) 261-6528';
const ATTRIBUTION_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'city'];
const ATTRIBUTION_STORAGE_KEY = 'plt_attribution';
const DEDUPE_WINDOW_MS = 1000;

let lastPhoneClickAt = 0;
let initialized = false;

export interface PhoneClickEventParams {
  ctaLocation: string; // e.g. 'header_call_btn', 'hero_cta', 'mobile_sticky_bar', 'ppc_hero_cta'
  pagePath: string;
  serviceCategory?: string;
  campaignSlug?: string;
}

function readAttribution(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function captureAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    ATTRIBUTION_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, 200);
    });
    // Yelp still receives referral credit when its profile URL has not yet been updated
    // with UTMs. Never overwrite an explicit campaign or Google Ads click identifier.
    const previous = readAttribution();
    if (!found.utm_source && !found.gclid && !found.gbraid && !found.wbraid &&
        !previous.utm_source && !previous.gclid && !previous.gbraid && !previous.wbraid &&
        document.referrer) {
      try {
        const hostname = new URL(document.referrer).hostname.toLowerCase();
        if (hostname === 'yelp.com' || hostname.endsWith('.yelp.com')) {
          found.utm_source = 'yelp';
          found.utm_medium = 'referral';
          found.utm_campaign = 'business_profile';
        }
      } catch { /* Ignore invalid or unavailable referrer */ }
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify({ ...previous, ...found }));
    }
  } catch {
    // Storage can be blocked (private mode); tracking still works without it.
  }
}

function campaignFromPath(pathname: string): string {
  const match = pathname.match(/^\/(?:lp|landing|ad)\/([^/]+)/);
  return match ? match[1] : '';
}

// Optional Google Ads conversion targets, copied from the Google tag event snippet as
// send_to: 'AW-123456789/AbCdEfGhIjK'. Set as build variables in Cloudflare.
const CALL_CONVERSION = import.meta.env.VITE_ADS_CALL_CONVERSION as string | undefined;

function fireAdsConversion(eventName: string): void {
  const target = eventName === 'phone_click' ? CALL_CONVERSION : undefined;
  if (!target || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', 'conversion', { send_to: target });
  } catch {
    // Silently fail if gtag is misconfigured
  }
}

function send(eventName: string, params: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Silently fail if gtag is misconfigured
    }
  }

  fireAdsConversion(eventName);

  // Also feed Google Tag Manager style dataLayer consumers (skipped when gtag already pushed it)
  if (typeof window.gtag !== 'function' && Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push({ event: eventName, ...params });
    } catch {
      // Silently fail if dataLayer is blocked
    }
  }
}

/**
 * Tracks inbound phone call click events.
 */
export function trackPhoneClick(params: PhoneClickEventParams): void {
  if (typeof window === 'undefined') return;
  lastPhoneClickAt = Date.now();

  const pagePath = params.pagePath || window.location.pathname;
  send('phone_click', {
    event_category: 'Conversion',
    event_label: params.ctaLocation,
    phone_number: PHONE_E164,
    page_path: pagePath,
    service_category: params.serviceCategory || 'general_mobile_locksmith',
    campaign_slug: params.campaignSlug || campaignFromPath(pagePath),
    ...readAttribution(),
  });
}

/**
 * Generic custom event tracker for engagement and navigation interactions.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  send(eventName, { ...params, ...readAttribution() });
}

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target as Element | null;
  const link = target && 'closest' in target ? (target.closest('a[href^="tel:"]') as HTMLAnchorElement | null) : null;
  if (!link) return;

  const href = link.getAttribute('href') || '';
  const pagePath = window.location.pathname;
  const ctaLabel = (link.getAttribute('aria-label') || link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);

  if (href.startsWith('tel:')) {
    // Skip when a component-level handler has just reported this same click
    if (Date.now() - lastPhoneClickAt < DEDUPE_WINDOW_MS) return;
    trackPhoneClick({ ctaLocation: `auto:${ctaLabel || 'tel_link'}`, pagePath });
  }
}

const configuredGoogleTags = new Set<string>();

function configureGoogleTag(id: string): void {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js expects the arguments object itself on the dataLayer.
      window.dataLayer!.push(arguments);
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
  }

  if (!configuredGoogleTags.has(id)) {
    window.gtag('config', id);
    configuredGoogleTags.add(id);
  }
}

interface ForwardingNumber {
  display: string;
  tel: string;
}

let forwardingNumber: ForwardingNumber | undefined;
let websiteCallsConfigured = false;
const forwardNumberListeners = new Set<(number: ForwardingNumber) => void>();

export function watchSearchWebsiteCallNumber(listener: (number: ForwardingNumber) => void): () => void {
  forwardNumberListeners.add(listener);
  if (forwardingNumber) listener(forwardingNumber);
  if (!websiteCallsConfigured) {
    configureGoogleTag(SEARCH_ADS_TAG);
    window.gtag?.('config', SEARCH_WEBSITE_CALL_ACTION, {
      phone_conversion_number: SEARCH_PHONE_DISPLAY,
      phone_conversion_callback: (display: string, mobile: string) => {
        if (typeof display !== 'string' || !display.trim() || typeof mobile !== 'string') return;
        const usNumber = /^\+?1?(\d{10})$/.exec(mobile);
        if (!usNumber) return;
        const number = { display, tel: 'tel:+1' + usNumber[1] };
        forwardingNumber = number;
        forwardNumberListeners.forEach(onNumber => onNumber(number));
      },
    });
    websiteCallsConfigured = true;
  }
  return () => { forwardNumberListeners.delete(listener); };
}

function loadGoogleTag(): void {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
  if (gaId) configureGoogleTag(gaId);
  if (adsId) configureGoogleTag(adsId);
}

/**
 * Call once at startup. Safe to call more than once.
 */
export function initAnalytics(): void {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  captureAttribution();
  loadGoogleTag();
  document.addEventListener('click', handleDocumentClick, { passive: true });
}
