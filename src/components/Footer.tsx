import React from 'react';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { SPANISH_SERVICES, SPANISH_COUNTIES } from '../data/spanishTranslations';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, isSpanish } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile & Direct Contact */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('/')} 
              className="text-left group focus:outline-none"
            >
              <Logo size="md" textColor="light" />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.about')}
            </p>

            <div className="pt-2 space-y-2.5">
              <a 
                href="tel:+17542616528" 
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300 font-bold text-base transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20">
                  <Phone className="w-4 h-4 fill-current text-amber-400" />
                </div>
                <span>{isSpanish ? 'Llamar: +1 754-261-6528' : 'Call Now: +1 754-261-6528'}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <span>{t('footer.availableHours')}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span>{t('footer.servingNotice')}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Locksmith Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Servicios de Cerrajería' : 'Locksmith Services'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => {
                const displayName = isSpanish 
                  ? (SPANISH_SERVICES[srv.slug]?.name || srv.name)
                  : srv.name;

                return (
                  <li key={srv.id}>
                    <button
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-500/60" />
                      <span>{displayName}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="text-amber-400 hover:underline font-semibold pt-1 flex items-center gap-1 text-[11px]"
                >
                  <span>{isSpanish ? 'Ver los 12 Servicios' : 'View All 12 Services'} &rarr;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Sur de la Florida' : 'Serving South Florida'}
            </h4>
            <div className="space-y-3 text-xs">
              {COUNTIES_DATA.map((county) => {
                const countyName = isSpanish
                  ? (SPANISH_COUNTIES[county.slug]?.name || county.name)
                  : county.name;

                return (
                  <div key={county.id} className="space-y-1">
                    <button
                      onClick={() => onNavigate(`/service-areas/${county.slug}`)}
                      className="font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{countyName}</span>
                    </button>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-400 pl-4">
                      {county.majorCities.slice(0, 3).map((city) => (
                        <button
                          key={city.id}
                          onClick={() => onNavigate(`/service-areas/${city.slug}`)}
                          className="hover:text-amber-300 transition-colors cursor-pointer"
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="pt-1">
                <button
                  onClick={() => onNavigate('/service-areas')}
                  className="text-amber-400 hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>{isSpanish ? 'Mapa Interactivo (37 Ciudades)' : 'Interactive Map (37 Cities)'} &rarr;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Knowledge, Tips & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Empresa y Guías' : 'Company & Guides'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span className="font-semibold text-white">{t('nav.whyChooseUs')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span className="font-semibold text-white">{t('nav.faq')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span className="font-semibold text-white">{t('nav.blog')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tips')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-amber-400"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span className="font-bold text-amber-400">{t('nav.tips')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/lp')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60" />
                  <span>{isSpanish ? 'Páginas Especializadas de Anuncios' : 'Specialized Landing Pages Hub'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60" />
                  <span>{isSpanish ? 'Contacto de Despacho Móvil' : 'Contact Mobile Dispatch'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} Pro Locksmith Tech. {t('footer.rights')}
            </span>
            <LanguageToggle variant="compact" />
          </div>
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center sm:justify-end">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {t('nav.home')}
            </button>
            <button onClick={() => onNavigate('/services')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {t('nav.services')}
            </button>
            <button onClick={() => onNavigate('/service-areas')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {t('nav.serviceAreas')}
            </button>
            <button onClick={() => onNavigate('/about')} className="hover:text-amber-400 transition-colors cursor-pointer font-medium text-slate-300">
              {t('nav.whyChooseUs')}
            </button>
            <button onClick={() => onNavigate('/faq')} className="hover:text-amber-400 transition-colors cursor-pointer font-medium text-slate-300">
              {t('nav.faq')}
            </button>
            <button onClick={() => onNavigate('/blog')} className="hover:text-amber-400 transition-colors cursor-pointer font-medium text-slate-300">
              {t('nav.blog')}
            </button>
            <button onClick={() => onNavigate('/tips')} className="hover:text-amber-300 transition-colors cursor-pointer font-bold text-amber-400">
              {t('nav.tips')}
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {t('nav.contact')}
            </button>
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {isSpanish ? 'Privacidad' : 'Privacy Policy'}
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {isSpanish ? 'Términos' : 'Terms'}
            </button>
            <button onClick={() => onNavigate('/sitemap')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {isSpanish ? 'Mapa del Sitio' : 'Sitemap'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
