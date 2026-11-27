import React from 'react';
import { Globe } from 'lucide-react';
import { canonicalLink, switchPath } from '../utils/locale';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'compact' | 'standard' | 'pill';
  className?: string;
}

export function LanguageToggle({ variant = 'standard', className = '' }: LanguageToggleProps) {
  const { language, path, setLanguage } = useLanguage();
  const change = (event: React.MouseEvent<HTMLAnchorElement>, next: 'en' | 'es') => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (next !== language) setLanguage(next);
  };
  const href = (next: 'en' | 'es') => canonicalLink(switchPath(path, next));

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center rounded-md bg-slate-900 border border-slate-700/80 p-0.5 text-[11px] font-bold ${className}`}>
        <a
          href={href('en')}
          onClick={event => change(event, 'en')}
          className={`min-h-[36px] min-w-[27px] min-[360px]:min-w-[34px] px-1 min-[360px]:px-2 py-1 rounded transition-colors ${
            language === 'en'
              ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="English (EN)"
          title="English"
        >
          EN
        </a>
        <span className="text-slate-600 px-0.5">|</span>
        <a
          href={href('es')}
          onClick={event => change(event, 'es')}
          className={`min-h-[36px] min-w-[27px] min-[360px]:min-w-[34px] px-1 min-[360px]:px-2 py-1 rounded transition-colors ${
            language === 'es'
              ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Español (ES)"
          title="Español"
        >
          ES
        </a>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={href(language === 'en' ? 'es' : 'en')}
        onClick={event => change(event, language === 'en' ? 'es' : 'en')}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-750 border border-amber-500/40 text-xs font-bold text-slate-200 hover:text-amber-300 transition-all shadow-sm ${className}`}
        title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      >
        <Globe className="w-3.5 h-3.5 text-amber-400" />
        <span>{language === 'en' ? 'Español (ES)' : 'English (EN)'}</span>
      </a>
    );
  }

  // Standard segmented toggle
  return (
    <div className={`inline-flex items-center rounded-lg bg-slate-950/80 border border-slate-700/80 p-1 text-xs font-bold ${className}`}>
      <a
        href={href('en')}
        onClick={event => change(event, 'en')}
        className={`inline-flex min-h-[44px] items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
          language === 'en'
            ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="English (EN)"
      >
        <span>🇺🇸</span>
        <span>English</span>
      </a>
      <a
        href={href('es')}
        onClick={event => change(event, 'es')}
        className={`inline-flex min-h-[44px] items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
          language === 'es'
            ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="Español (ES)"
      >
        <span>🇪🇸</span>
        <span>Español</span>
      </a>
    </div>
  );
}
