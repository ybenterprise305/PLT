import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';

import { LocalizedA } from './LocalizedA';
export function MobileCallBar() {
  const { t, isSpanish } = useLanguage();

  return (
    <aside 
      aria-label="Emergency Mobile Call Bar"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/98 backdrop-blur-xl border-t-2 border-amber-500/80 px-2.5 py-2 shadow-[0_-10px_35px_rgba(0,0,0,0.9)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-transform"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto w-full">
        {/* Secondary Action: Quick Text */}
        <LocalizedA
          href="sms:+17542616528"
          className="flex flex-col items-center justify-center min-h-[48px] px-3 bg-slate-900 active:bg-slate-800 text-slate-200 active:text-amber-400 rounded-xl border border-slate-700/80 shadow shrink-0 cursor-pointer select-none"
          aria-label="Text Pro Locksmith Tech at 754-261-6528"
        >
          <MessageSquare className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-wider leading-none">
            {isSpanish ? 'TEXTO' : 'TEXT'}
          </span>
        </LocalizedA>

        {/* PRIMARY UNMISSABLE TAP-TO-CALL BUTTON */}
        <LocalizedA
          href="tel:+17542616528"
          onClick={() => trackPhoneClick({ ctaLocation: 'mobile_sticky_bottom_bar', pagePath: window.location.pathname })}
          className="flex-1 min-h-[48px] py-2 px-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 active:from-amber-500 active:to-amber-700 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer select-none transition-transform active:scale-[0.98]"
          aria-label="Call Pro Locksmith Tech now at (754) 261-6528"
        >
          <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
            <Phone className="w-4 h-4 fill-current" />
          </div>

          <div className="flex flex-col text-left justify-center min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-950/80 leading-none truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping inline-block" />
              <span>{isSpanish ? 'Cerrajería Móvil 24/7' : '24/7 Mobile Dispatch'}</span>
            </span>
            <span className="text-sm xs:text-base font-black tracking-tight text-slate-950 leading-tight truncate">
              {isSpanish ? 'LLAMAR: (754) 261-6528' : 'CALL: (754) 261-6528'}
            </span>
          </div>
        </LocalizedA>
      </div>
    </aside>
  );
}
export default MobileCallBar;
