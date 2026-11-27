import { Phone } from 'lucide-react';
import { PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';
import { LocalizedA } from './LocalizedA';

export function MobileCallBar() {
  const { isSpanish } = useLanguage();
  return (
    <aside className="plt-mobile-call" aria-label={isSpanish ? 'Atención de emergencia' : 'Emergency Mobile Call Bar'}>
      <LocalizedA href={TEL} className="plt-cta"
        onClick={() => trackPhoneClick({ ctaLocation: 'mobile_sticky_bottom_bar', pagePath: window.location.pathname })}>
        <Phone size={18} aria-hidden="true" />
        {isSpanish ? 'Llamar al' : 'Call'} {PHONE}
      </LocalizedA>
    </aside>
  );
}
