import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { SPANISH_SERVICES, SPANISH_COUNTIES } from '../data/spanishTranslations';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const { t, isSpanish } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
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
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Banner with Language switcher, Call box, Text box, and full phone number */}
      <div className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Dispatch area */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{t('header.topBanner')}</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('header.serving')}</span>
            </div>
          </div>

          {/* Right: Language Switcher, Box Call, Box Text, and Full Phone Number */}
          <div className="flex items-center gap-2.5 ml-auto">
            {/* Language Switcher */}
            <LanguageToggle variant="compact" />

            {/* Box: Call */}
            <a
              href="tel:+17542616528"
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
              title={isSpanish ? "Llamar a Cerrajería Móvil" : "Click to Call Mobile Dispatch"}
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{t('nav.call')}</span>
            </a>

            {/* Box: Text */}
            <a
              href="sms:+17542616528"
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-amber-400 border border-slate-700 font-black text-xs rounded uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
              title={isSpanish ? "Enviar mensaje de texto" : "Click to Text Dispatch"}
            >
              <MessageSquare className="w-3 h-3" />
              <span>{t('nav.text')}</span>
            </a>

            {/* Full Phone Number */}
            <a
              href="tel:+17542616528"
              className="text-amber-400 hover:text-amber-300 font-bold text-xs sm:text-sm tracking-tight transition-colors pl-1"
            >
              +1 754-261-6528
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
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
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 transition-opacity hover:opacity-95 shrink-0"
            >
              <Logo size="md" textColor="light" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => handleLinkClick('/')}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  currentPath === '/' 
                    ? 'text-amber-400 bg-slate-800/80' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {t('nav.home')}
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick('/services')}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    currentPath.startsWith('/services') 
                      ? 'text-amber-400 bg-slate-800/80' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2.5 grid gap-1 z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-amber-400 uppercase border-b border-slate-800 flex justify-between items-center">
                      <span>{t('header.allServices')}</span>
                      <button 
                        onClick={() => handleLinkClick('/services')}
                        className="text-slate-400 hover:text-white text-[11px] font-normal lowercase"
                      >
                        {t('header.viewAll')} &rarr;
                      </button>
                    </div>
                    <div className="max-h-[380px] overflow-y-auto space-y-0.5 pr-1">
                      {SERVICES_DATA.map((srv) => {
                        const srvDisplayName = isSpanish 
                          ? (SPANISH_SERVICES[srv.slug]?.name || srv.name)
                          : srv.name;
                        const srvCategoryLabel = isSpanish
                          ? (SPANISH_SERVICES[srv.slug]?.categoryName || srv.category)
                          : srv.category;

                        return (
                          <button
                            key={srv.id}
                            onClick={() => handleLinkClick(`/services/${srv.slug}`)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800 text-xs text-slate-200 hover:text-amber-400 flex items-center justify-between group transition-colors"
                          >
                            <span className="font-medium truncate mr-2">{srvDisplayName}</span>
                            <span className="text-[10px] text-slate-400 group-hover:text-amber-300 font-semibold uppercase">{srvCategoryLabel}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick('/service-areas')}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    currentPath.startsWith('/service-areas') 
                      ? 'text-amber-400 bg-slate-800/80' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{t('nav.serviceAreas')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2.5 z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-amber-400 uppercase border-b border-slate-800 flex justify-between items-center">
                      <span>{t('header.counties')}</span>
                      <button 
                        onClick={() => handleLinkClick('/service-areas')}
                        className="text-slate-400 hover:text-white text-[11px] font-normal lowercase"
                      >
                        {t('header.viewDirectory')} &rarr;
                      </button>
                    </div>
                    <div className="py-1 space-y-1">
                      {COUNTIES_DATA.map((county) => {
                        const countyDisplayName = isSpanish
                          ? (SPANISH_COUNTIES[county.slug]?.name || county.name)
                          : county.name;

                        return (
                          <div key={county.id} className="p-1 rounded-lg hover:bg-slate-800/60">
                            <button
                              onClick={() => handleLinkClick(`/service-areas/${county.slug}`)}
                              className="w-full text-left px-2 py-1 text-xs font-bold text-white hover:text-amber-400 flex items-center justify-between"
                            >
                              <span>{countyDisplayName}</span>
                              <span className="text-[10px] text-slate-400 font-normal">
                                {county.majorCities.length} {isSpanish ? 'Ciudades' : 'Cities'}
                              </span>
                            </button>
                            <div className="flex flex-wrap gap-1 px-2 pt-1 pb-1">
                              {county.majorCities.slice(0, 4).map((c) => (
                                <button
                                  key={c.id}
                                  onClick={() => handleLinkClick(`/service-areas/${c.slug}`)}
                                  className="text-[10px] text-slate-300 hover:text-amber-300 bg-slate-800/90 px-1.5 py-0.5 rounded"
                                >
                                  {c.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleLinkClick('/contact')}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  currentPath === '/contact' 
                    ? 'text-amber-400 bg-slate-800/80' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {t('nav.contact')}
              </button>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+17542616528"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t('header.phoneLabel')}</span>
              </a>
            </div>

            {/* Mobile Menu Button & Mobile Call Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle variant="compact" />
              <a
                href="tel:+17542616528"
                className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold shadow-md flex items-center gap-1 text-xs"
                aria-label="Call Pro Locksmith Tech"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span className="font-black text-[11px]">{t('nav.call')}</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
            
            {/* Language Switcher in Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400">
                {isSpanish ? 'Idioma del sitio:' : 'Website language:'}
              </span>
              <LanguageToggle variant="standard" />
            </div>

            <div className="grid gap-1">
              <button
                onClick={() => handleLinkClick('/')}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                {t('nav.home')}
              </button>
              
              <button
                onClick={() => handleLinkClick('/services')}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                {t('nav.services')}
              </button>

              <button
                onClick={() => handleLinkClick('/service-areas')}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                {t('nav.serviceAreas')}
              </button>

              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                {t('nav.contact')}
              </button>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="sms:+17542616528"
                className="w-full py-3 px-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-lg border border-slate-700 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>{t('nav.textUs')}</span>
              </a>

              <a
                href="tel:+17542616528"
                className="w-full py-3 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-lg"
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
