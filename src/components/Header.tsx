import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  MessageSquare
} from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { SocialLinks } from './SocialLinks';
import { trackPhoneClick } from '../utils/analytics';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const { t, isSpanish } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Utility Bar with Location, Socials, Language, and Direct Call */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Dispatch area indicator & SAB Positioning */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{isSpanish ? 'Cerrajería Móvil 24/7 · Vamos a Ti' : '24/7 Mobile Locksmith · We Come to You'}</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{isSpanish ? 'Cerrajería Móvil en Todo el Sur de la Florida' : 'Serving All of South Florida'}</span>
            </div>
          </div>

          {/* Right: Social Media, Language Switcher & Quick Call CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 ml-auto">
            {/* Official Social Media Channels */}
            <div className="hidden sm:flex items-center">
              <SocialLinks variant="header" />
            </div>

            <div className="hidden sm:block w-px h-3.5 bg-slate-800" />

            {/* Language Switcher */}
            <LanguageToggle variant="compact" />

            {/* Fast Call Button */}
            <a
              href="tel:+17542616528"
              onClick={() => trackPhoneClick({ ctaLocation: 'header_call_btn', pagePath: currentPath })}
              className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] sm:text-xs rounded uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
              title={isSpanish ? "Llamar a Cerrajería Móvil" : "Click to Call Mobile Dispatch"}
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{t('nav.call')}</span>
            </a>

            {/* Direct Phone Number */}
            <a
              href="tel:+17542616528"
              onClick={() => trackPhoneClick({ ctaLocation: 'header_phone_number', pagePath: currentPath })}
              className="text-amber-400 hover:text-amber-300 font-bold text-xs sm:text-sm tracking-tight transition-colors pl-0.5"
            >
              (754) 261-6528
            </a>
          </div>
        </div>
      </div>

      {/* Main Minimalist Header Navigation Bar (Home, Services, Service Areas, Contact ONLY) */}
      <div className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl sticky top-0' 
          : 'bg-slate-900 border-b border-slate-800'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => handleLinkClick('/')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 transition-opacity hover:opacity-95 shrink-0 cursor-pointer"
            >
              <Logo size="md" textColor="light" />
            </button>

            {/* Strictly Clean Desktop Navigation Links (ONLY 4 LINKS) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => handleLinkClick('/')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPath === '/' 
                    ? 'text-amber-400 bg-slate-800/90' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {t('nav.home')}
              </button>

              <button
                onClick={() => handleLinkClick('/services')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPath.startsWith('/services') 
                    ? 'text-amber-400 bg-slate-800/90' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {t('nav.services')}
              </button>

              <button
                onClick={() => handleLinkClick('/service-areas')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPath.startsWith('/service-areas') 
                    ? 'text-amber-400 bg-slate-800/90' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {t('nav.serviceAreas')}
              </button>

              <button
                onClick={() => handleLinkClick('/contact')}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentPath === '/contact' 
                    ? 'text-amber-400 bg-slate-800/90' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {t('nav.contact')}
              </button>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_main_btn', pagePath: currentPath })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current animate-pulse" />
                <span>{isSpanish ? 'Llamar: (754) 261-6528' : 'Call (754) 261-6528'}</span>
              </a>
            </div>

            {/* Mobile Actions: Call Button & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle variant="compact" />
              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_mobile_top_btn', pagePath: currentPath })}
                className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-black shadow-md flex items-center gap-1.5 text-xs uppercase"
                aria-label="Call Pro Locksmith Tech"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{t('nav.call')}</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Mobile Navigation Drawer (ONLY 4 Main Links + Socials + CTAs) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
            
            {/* Language Switcher in Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400">
                {isSpanish ? 'Idioma del sitio:' : 'Language:'}
              </span>
              <LanguageToggle variant="standard" />
            </div>

            {/* Only 4 Main Links */}
            <div className="grid gap-1.5">
              <button
                onClick={() => handleLinkClick('/')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  currentPath === '/' ? 'text-amber-400 bg-slate-800' : 'text-slate-200 hover:bg-slate-800 hover:text-amber-400'
                }`}
              >
                {t('nav.home')}
              </button>
              
              <button
                onClick={() => handleLinkClick('/services')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  currentPath.startsWith('/services') ? 'text-amber-400 bg-slate-800' : 'text-slate-200 hover:bg-slate-800 hover:text-amber-400'
                }`}
              >
                {t('nav.services')}
              </button>

              <button
                onClick={() => handleLinkClick('/service-areas')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  currentPath.startsWith('/service-areas') ? 'text-amber-400 bg-slate-800' : 'text-slate-200 hover:bg-slate-800 hover:text-amber-400'
                }`}
              >
                {t('nav.serviceAreas')}
              </button>

              <button
                onClick={() => handleLinkClick('/contact')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                  currentPath === '/contact' ? 'text-amber-400 bg-slate-800' : 'text-slate-200 hover:bg-slate-800 hover:text-amber-400'
                }`}
              >
                {t('nav.contact')}
              </button>
            </div>

            {/* Social channels in mobile drawer */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {isSpanish ? 'Redes Sociales' : 'Follow Our Dispatch'}
              </div>
              <SocialLinks variant="drawer" />
            </div>

            {/* Direct Mobile CTAs */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="sms:+17542616528"
                className="w-full py-3 px-3 bg-slate-800 hover:bg-slate-750 text-slate-100 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>{t('nav.textUs')}</span>
              </a>

              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_drawer_call_btn', pagePath: currentPath })}
                className="w-full py-3 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t('nav.callNow')}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
