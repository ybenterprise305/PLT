import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'compact' | 'standard' | 'pill';
  className?: string;
}

export function LanguageToggle({ variant = 'standard', className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center rounded-md bg-slate-900 border border-slate-700/80 p-0.5 text-[11px] font-bold ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded transition-colors ${
            language === 'en'
              ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Switch to English"
          title="English"
        >
          EN
        </button>
        <span className="text-slate-600 px-0.5">|</span>
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`px-2 py-0.5 rounded transition-colors ${
            language === 'es'
              ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Cambiar a Español"
          title="Español"
        >
          ES
        </button>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-750 border border-amber-500/40 text-xs font-bold text-slate-200 hover:text-amber-300 transition-all shadow-sm ${className}`}
        title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      >
        <Globe className="w-3.5 h-3.5 text-amber-400" />
        <span>{language === 'en' ? 'Español (ES)' : 'English (EN)'}</span>
      </button>
    );
  }

  // Standard segmented toggle
  return (
    <div className={`inline-flex items-center rounded-lg bg-slate-950/80 border border-slate-700/80 p-1 text-xs font-bold ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
          language === 'en'
            ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="Switch to English"
      >
        <span>🇺🇸</span>
        <span>English</span>
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
          language === 'es'
            ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        aria-label="Cambiar a Español"
      >
        <span>🇪🇸</span>
        <span>Español</span>
      </button>
    </div>
  );
}
