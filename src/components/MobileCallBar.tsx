import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';

export function MobileCallBar() {
  const { t, isSpanish } = useLanguage();

  return (
    <aside 
      aria-label="Emergency Call Bar"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-amber-500/40 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {/* Secondary: Text Us */}
        <a
          href="sms:+17542616528"
          className="flex flex-col items-center justify-center py-2 px-3.5 bg-slate-900 active:bg-slate-800 text-slate-200 active:text-amber-400 font-bold text-[11px] rounded-xl border border-slate-700 shadow transition-colors shrink-0"
          aria-label="Text Pro Locksmith Tech at 754-261-6528"
        >
          <MessageSquare className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>{isSpanish ? 'TEXTO' : 'TEXT US'}</span>
        </a>

        {/* PRIMARY ULTRA-PROMINENT CALL BUTTON */}
        <a
          href="tel:+17542616528"
          onClick={() => trackPhoneClick({ ctaLocation: 'mobile_sticky_bottom_bar', pagePath: window.location.pathname })}
          className="flex-1 flex items-center justify-center gap-2.5 py-3 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 active:from-amber-500 active:to-amber-700 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/40 transition-transform active:scale-[0.98]"
          aria-label="Call Pro Locksmith Tech now at +1 754-261-6528"
        >
          <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
            <Phone className="w-4 h-4 fill-current animate-pulse" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-slate-900 font-extrabold">
              {isSpanish ? 'Cerrajería Móvil 24/7' : '24/7 Mobile Dispatch'}
            </span>
            <span className="text-base sm:text-lg font-black tracking-tight text-slate-950">
              {isSpanish ? 'LLAMAR AHORA' : 'CALL NOW'} <span className="font-extrabold text-xs sm:text-sm opacity-90">· (754) 261-6528</span>
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
}
export default MobileCallBar;
