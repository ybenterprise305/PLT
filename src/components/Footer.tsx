import React from 'react';
import { Phone, MapPin, Clock, ChevronRight, ShieldCheck, Truck } from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { SocialLinks } from './SocialLinks';
import { SPANISH_SERVICES, SPANISH_COUNTIES } from '../data/spanishTranslations';
import { trackPhoneClick } from '../utils/analytics';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, isSpanish } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Main Structured Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile, SAB Privacy Notice, Socials & Direct Call */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('/')} 
              className="text-left group focus:outline-none cursor-pointer"
            >
              <Logo size="md" textColor="light" />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isSpanish 
                ? 'Pro Locksmith Tech es un servicio de cerrajería 100% móvil en el Sur de la Florida. Atendemos emergencias automotrices, residenciales y comerciales en los condados de Broward, Miami-Dade y Palm Beach directamente en su ubicación.'
                : 'Pro Locksmith Tech is a 100% mobile locksmith service provider in South Florida. We dispatch equipped mobile workshop vans directly to your stranded vehicle, home, or commercial facility across Broward, Miami-Dade, and Palm Beach counties.'}
            </p>

            {/* SAB Privacy & Operational Reassurance */}
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Servicio Móvil a Domicilio — Sin Tienda Física' : '100% Mobile Service Area Business (SAB)'}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                {isSpanish
                  ? 'Operamos como un servicio 100% móvil sin tienda de atención al público. Nuestros técnicos viajan directamente a su vehículo, residencia o empresa en todo el Sur de la Florida.'
                  : 'We operate as a 100% mobile service without a walk-in storefront. Technicians travel directly to your vehicle, home, or business throughout our South Florida service area.'}
              </p>
            </div>

            {/* Direct Phone Trigger */}
            <div className="pt-1 space-y-2">
              <a 
                href="tel:+17542616528" 
                onClick={() => trackPhoneClick({ ctaLocation: 'footer_call_link', pagePath: window.location.pathname })}
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300 font-bold text-base transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 fill-current text-amber-400 animate-pulse" />
                </div>
                <span>(754) 261-6528</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isSpanish ? 'Despacho de Emergencia 24/7 · Todos los Días' : '24/7 Emergency Dispatch · 365 Days a Year'}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Coral Springs, FL 33076 &amp; Tri-County Region</span>
              </div>
            </div>

            {/* Social Media Integration */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {isSpanish ? 'Canales Oficiales' : 'Official Channels'}
              </div>
              <SocialLinks variant="footer" />
            </div>
          </div>

          {/* Column 2: Specialized Locksmith Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Servicios Móviles' : 'Mobile Services'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_DATA.slice(0, 8).map((srv) => {
                const displayName = isSpanish 
                  ? (SPANISH_SERVICES[srv.slug]?.name || srv.name)
                  : srv.name;

                return (
                  <li key={srv.id}>
                    <button
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                      <span className="truncate">{displayName}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="text-amber-400 hover:underline font-bold pt-1 flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <span>{isSpanish ? 'Ver los 12 Servicios' : 'View All 12 Services'} &rarr;</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Áreas de Servicio' : 'Service Areas'}
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
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
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

          {/* Column 4: Relocated Pages (FAQ, Tips, Blog, Landing Hub, Legal) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Ayuda, Guías y Legal' : 'Help, Guides & Legal'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{isSpanish ? 'Preguntas Frecuentes (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{isSpanish ? '¿Por Qué Elegirnos?' : 'Why Choose Pro Locksmith Tech'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tips')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-amber-300"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-bold">{isSpanish ? 'Consejos y Trucos de Cerrajería' : 'Locksmith Tips & Technical Guides'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Artículos de Seguridad y Blog' : 'Security Blog & Advice'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/lp')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Páginas Especializadas de Anuncios' : 'Specialized Ad Landing Hub'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 py-0.5 cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Términos de Servicio' : 'Terms of Service'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher & Quick Navigation */}
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
            <button onClick={() => onNavigate('/faq')} className="hover:text-amber-400 transition-colors cursor-pointer">
              {t('nav.faq')}
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {t('nav.contact')}
            </button>
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {isSpanish ? 'Privacidad' : 'Privacy'}
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300 transition-colors cursor-pointer">
              {isSpanish ? 'Términos' : 'Terms'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
