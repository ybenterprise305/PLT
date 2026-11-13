import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  MessageSquare,
  Home,
  Wrench,
  Navigation,
  Mail,
  ChevronRight,
  ShieldCheck
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
  const navBarRef = useRef<HTMLDivElement>(null);
  const [drawerTop, setDrawerTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change or escape
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      // Place the drawer flush under the main nav bar, whatever the top strip height is
      if (navBarRef.current) {
        setDrawerTop(Math.round(navBarRef.current.getBoundingClientRect().bottom));
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="contents select-none">
      
      {/* 1. TOP UTILITY BAR: Desktop gets full suite, mobile gets sleek single-line announcement */}
      <div className="bg-slate-950 text-slate-200 border-b border-slate-800/80">
        
        {/* Mobile Single-Line Strip (< sm) */}
        <div className="sm:hidden flex items-center justify-between px-3 py-1.5 text-[11px]">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold truncate">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="truncate">{isSpanish ? 'Cerrajería Móvil 24/7' : '24/7 Mobile Service · We Come To You'}</span>
          </div>

          <a
            href="tel:+17542616528"
            onClick={() => trackPhoneClick({ ctaLocation: 'mobile_top_strip_call', pagePath: currentPath })}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-black text-xs shrink-0 pl-2"
          >
            <Phone className="w-3 h-3 fill-current" />
            <span>(754) 261-6528</span>
          </a>
        </div>

        {/* Desktop & Tablet Utility Bar (sm and up) */}
        <div className="hidden sm:block max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-2 text-xs">
          <div className="flex items-center justify-between gap-3">
            
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
            <div className="flex items-center gap-3 ml-auto">
              <div className="hidden md:flex items-center">
                <SocialLinks variant="header" />
              </div>

              <div className="hidden md:block w-px h-3.5 bg-slate-800" />

              <LanguageToggle variant="compact" />

              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_call_btn', pagePath: currentPath })}
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
                title={isSpanish ? "Llamar a Cerrajería Móvil" : "Click to Call Mobile Dispatch"}
              >
                <Phone className="w-3 h-3 fill-current" />
                <span>{t('nav.call')}</span>
              </a>

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
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR (Home, Services, Service Areas, Contact ONLY) */}
      <div ref={navBarRef} className={`w-full sticky top-0 z-40 select-none transition-shadow duration-200 ${
        isScrolled 
          ? 'bg-slate-900/98 backdrop-blur-md shadow-xl border-b border-slate-800' 
          : 'bg-slate-900 border-b border-slate-800'
      }`}>
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo: Scaled properly for smartphone screens */}
            <button 
              onClick={() => handleLinkClick('/')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-0.5 transition-opacity hover:opacity-95 shrink-0 cursor-pointer"
              aria-label="Pro Locksmith Tech Home"
            >
              <Logo size="md" textColor="light" />
            </button>

            {/* Desktop Navigation Links (ONLY 4 Main Links) */}
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

            {/* Desktop Header CTA */}
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

            {/* Mobile Actions: Clean, Non-Crowded Layout */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              {/* Compact Language Toggle */}
              <LanguageToggle variant="compact" />

              {/* Instant Call Button for Mobile */}
              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_mobile_top_btn', pagePath: currentPath })}
                className="px-2.5 py-2 rounded-xl bg-amber-500 active:bg-amber-400 text-slate-950 font-black shadow-md flex items-center gap-1 text-xs uppercase cursor-pointer min-h-[40px]"
                aria-label="Call Pro Locksmith Tech"
              >
                <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
                <span>{t('nav.call')}</span>
              </a>

              {/* Hamburger Button with Accessible Touch Area */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-slate-800 active:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE NAVIGATION DRAWER (Full-screen overlay for effortless smartphone navigation) */}
        {mobileMenuOpen && (
          <div style={{ top: drawerTop }} className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-slate-950/98 backdrop-blur-xl border-t border-slate-800 overflow-y-auto px-4 py-5 flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Language Switcher Bar in Drawer */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-bold text-slate-300">
                  {isSpanish ? 'Idioma / Language:' : 'Website Language:'}
                </span>
                <LanguageToggle variant="standard" />
              </div>

              {/* 4 Main Core Links with Large Finger-Friendly Touch Targets */}
              <nav className="grid gap-2">
                <button
                  onClick={() => handleLinkClick('/')}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all cursor-pointer min-h-[50px] ${
                    currentPath === '/' 
                      ? 'text-slate-950 bg-amber-500 font-black shadow-lg shadow-amber-500/20' 
                      : 'text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Home className="w-5 h-5" />
                    <span>{t('nav.home')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
                
                <button
                  onClick={() => handleLinkClick('/services')}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all cursor-pointer min-h-[50px] ${
                    currentPath.startsWith('/services') 
                      ? 'text-slate-950 bg-amber-500 font-black shadow-lg shadow-amber-500/20' 
                      : 'text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Wrench className="w-5 h-5" />
                    <span>{t('nav.services')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>

                <button
                  onClick={() => handleLinkClick('/service-areas')}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all cursor-pointer min-h-[50px] ${
                    currentPath.startsWith('/service-areas') 
                      ? 'text-slate-950 bg-amber-500 font-black shadow-lg shadow-amber-500/20' 
                      : 'text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Navigation className="w-5 h-5" />
                    <span>{t('nav.serviceAreas')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>

                <button
                  onClick={() => handleLinkClick('/contact')}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all cursor-pointer min-h-[50px] ${
                    currentPath === '/contact' 
                      ? 'text-slate-950 bg-amber-500 font-black shadow-lg shadow-amber-500/20' 
                      : 'text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>{t('nav.contact')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              </nav>

              {/* Service Status Badge */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">
                    {isSpanish ? 'Cerrajería Móvil 24/7' : '24/7 Mobile Locksmith Service'}
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    {isSpanish ? 'Vamos a su auto, casa o negocio' : 'We travel directly to your location'}
                  </div>
                </div>
              </div>

              {/* Social Channels in Drawer */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">
                  {isSpanish ? 'Canales Oficiales' : 'Official Social Channels'}
                </div>
                <div className="flex justify-center">
                  <SocialLinks variant="drawer" />
                </div>
              </div>
            </div>

            {/* Bottom Large Action Buttons in Drawer */}
            <div className="pt-4 pb-6 space-y-2.5 border-t border-slate-800">
              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'header_drawer_call_btn', pagePath: currentPath })}
                className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm uppercase rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 min-h-[50px] cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current animate-pulse" />
                <span>CALL NOW: (754) 261-6528</span>
              </a>

              <a
                href="sms:+17542616528"
                className="w-full py-3.5 px-4 bg-slate-900 text-slate-200 font-bold text-xs uppercase rounded-xl border border-slate-700 flex items-center justify-center gap-2 min-h-[46px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>{isSpanish ? 'Enviar Mensaje de Texto' : 'Text Location For Dispatch'}</span>
              </a>
            </div>

          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
