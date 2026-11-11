/**
 * Pro Locksmith Tech - Conversion Analytics & Click-to-Call Tracking
 * Integrates safely with Google Analytics 4 (gtag), Google Tag Manager (dataLayer),
 * and Google Ads conversion tracking without throwing runtime errors when external scripts are pending.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface PhoneClickEventParams {
  ctaLocation: string; // e.g. 'header_call_btn', 'hero_cta', 'mobile_sticky_bar', 'service_page_banner', 'ppc_hero_cta'
  pagePath: string;
  serviceCategory?: string;
  campaignSlug?: string;
}

/**
 * Tracks inbound phone call click events.
 * Note: A phone link click represents call initiation, not a guaranteed completed call.
 */
export function trackPhoneClick(params: PhoneClickEventParams): void {
  const eventData = {
    event_category: 'Conversion',
    event_label: params.ctaLocation,
    phone_number: '+17542616528',
    page_path: params.pagePath || window.location.pathname,
    service_category: params.serviceCategory || 'general_mobile_locksmith',
    campaign_slug: params.campaignSlug || '',
    timestamp: new Date().toISOString()
  };

  // Google Analytics 4 / Google Ads gtag
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'phone_click', eventData);
    } catch {
      // Silently fail if gtag is misconfigured
    }
  }

  // Google Tag Manager dataLayer
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push({
        event: 'phone_click',
        ...eventData
      });
    } catch {
      // Silently fail if dataLayer is blocked
    }
  }

  // Developer console notification in non-production environments
  if (process.env.NODE_ENV !== 'production') {
    // Analytics phone_click triggered
  }
}

/**
 * Generic custom event tracker for engagement and navigation interactions.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Silently fail
    }
  }

  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    } catch {
      // Silently fail
    }
  }
}
