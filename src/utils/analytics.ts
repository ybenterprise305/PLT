/**
 * Pro Locksmith Tech - Conversion Analytics & Click-to-Call Tracking
 *
 * - Loads the Google tag (GA4 and/or Google Ads) only when IDs are configured through
 *   build-time environment variables:
 *     VITE_GA_MEASUREMENT_ID   e.g. G-XXXXXXXXXX
 *     VITE_GOOGLE_ADS_ID       e.g. AW-XXXXXXXXXX
 *   Without them nothing is loaded and tracking calls are safe no-ops.
 * - Tracks every tel: and sms: link automatically through one document-level listener,
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
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify({ ...readAttribution(), ...found }));
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
const TEXT_CONVERSION = import.meta.env.VITE_ADS_TEXT_CONVERSION as string | undefined;

function fireAdsConversion(eventName: string): void {
  const target =
    eventName === 'phone_click'
      ? CALL_CONVERSION
      : eventName === 'sms_click' || eventName === 'location_text_click'
        ? TEXT_CONVERSION
        : undefined;
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
  const link = target && 'closest' in target ? (target.closest('a[href^="tel:"], a[href^="sms:"]') as HTMLAnchorElement | null) : null;
  if (!link) return;

  const href = link.getAttribute('href') || '';
  const pagePath = window.location.pathname;
  const ctaLabel = (link.getAttribute('aria-label') || link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);

  if (href.startsWith('tel:')) {
    // Skip when a component-level handler has just reported this same click
    if (Date.now() - lastPhoneClickAt < DEDUPE_WINDOW_MS) return;
    trackPhoneClick({ ctaLocation: `auto:${ctaLabel || 'tel_link'}`, pagePath });
  } else if (href.startsWith('sms:')) {
    trackEvent('sms_click', {
      event_category: 'Conversion',
      event_label: ctaLabel || 'sms_link',
      phone_number: PHONE_E164,
      page_path: pagePath,
      campaign_slug: campaignFromPath(pagePath),
    });
  }
}

function loadGoogleTag(): void {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
  const primaryId = gaId || adsId;
  if (!primaryId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself on the dataLayer
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  if (gaId) window.gtag('config', gaId);
  if (adsId) window.gtag('config', adsId);
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
