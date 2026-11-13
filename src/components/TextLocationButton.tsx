import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const SMS_NUMBER = '+17542616528';

interface TextLocationButtonProps {
  label?: string;
  className?: string;
  ctaLocation: string;
  campaignSlug?: string;
}

/**
 * Opens the phone's text app addressed to dispatch with a ready-made message.
 * If the visitor allows location access, the message includes a Google Maps link to
 * their position. If they decline or the browser cannot provide it, the text still opens
 * without a location so they can type their address.
 */
export function TextLocationButton({ label = 'Text My Location', className = '', ctaLocation, campaignSlug }: TextLocationButtonProps) {
  const [busy, setBusy] = useState(false);

  const openSms = (body: string) => {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIos ? '&' : '?';
    window.location.href = `sms:${SMS_NUMBER}${separator}body=${encodeURIComponent(body)}`;
  };

  const handleClick = () => {
    const baseMessage = 'Hi, I need a locksmith.';
    trackEvent('location_text_click', {
      event_category: 'Conversion',
      event_label: ctaLocation,
      page_path: window.location.pathname,
      campaign_slug: campaignSlug || '',
    });

    if (!('geolocation' in navigator)) {
      openSms(`${baseMessage} My address is: `);
      return;
    }

    setBusy(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setBusy(false);
        const { latitude, longitude } = position.coords;
        const mapLink = `https://maps.google.com/?q=${latitude.toFixed(6)},${longitude.toFixed(6)}`;
        openSms(`${baseMessage} My location: ${mapLink} Service needed: `);
      },
      () => {
        setBusy(false);
        openSms(`${baseMessage} My address is: `);
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className={className || 'w-full sm:w-auto py-4 px-6 bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base rounded-2xl border border-slate-700 flex items-center justify-center gap-2.5 transition-colors cursor-pointer disabled:opacity-70'}
    >
      <MessageSquare className="w-5 h-5 text-amber-400" />
      <span>{busy ? 'Finding your location…' : label}</span>
    </button>
  );
}

export default TextLocationButton;
