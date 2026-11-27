import { services, counties } from '../generated/navigation';
import React from 'react';
import { Phone, MapPin, Clock, ChevronRight, ShieldCheck, Truck } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { SocialLinks } from './SocialLinks';
import { trackPhoneClick } from '../utils/analytics';

import { LocalizedA } from './LocalizedA';
interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, isSpanish } = useLanguage();
  const yelpUrl = 'https://www.yelp.com/biz/pro-locksmith-tech-coral-springs-2';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Main Structured Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile, SAB Privacy Notice, Socials & Direct Call */}
          <div className="lg:col-span-2 space-y-4">
            <LocalizedA href="/" 
              className="text-left group focus:outline-none cursor-pointer inline-block"
            >
              <Logo size="md" textColor="light" />
            </LocalizedA>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isSpanish 
                ? 'Desde el año 2000, Pro Locksmith Tech ofrece cerrajería automotriz, residencial y comercial las 24 horas en Miami-Dade, Broward y Palm Beach.'
                : 'Serving South Florida since 2000, Pro Locksmith Tech provides 24/7 automotive, residential and commercial locksmith services across Miami-Dade, Broward and Palm Beach counties.'}
            </p>

            {/* SAB Privacy & Operational Reassurance */}
            <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Servicio el mismo día y de emergencia' : 'Same-Day & Emergency Locksmith Service'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {isSpanish
                  ? 'Nuestros cerrajeros acuden a su vehículo, hogar o negocio con servicio el mismo día y de emergencia.'
                  : 'Our equipped locksmiths come to your vehicle, home or business, with same-day and emergency service available.'}
              </p>
            </div>

            {/* Direct Phone Trigger */}
            <div className="pt-1 space-y-2">
              <LocalizedA 
                href="tel:+17542616528" 
                onClick={() => trackPhoneClick({ ctaLocation: 'footer_call_link', pagePath: window.location.pathname })}
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300 font-bold text-base transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 fill-current text-amber-400 animate-pulse" />
                </div>
                <span>(754) 261-6528</span>
              </LocalizedA>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isSpanish ? 'Despacho de Emergencia 24/7' : '24/7 Emergency Dispatch'}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Same-Day & Emergency Locksmith Service</span>
              </div>
            </div>

            {/* Social Media Integration */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {isSpanish ? 'Canales Oficiales' : 'Official Channels'}
              </div>
              <SocialLinks variant="footer" />
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href="https://maps.google.com/maps?cid=16992150185739281311" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">{isSpanish ? 'Opiniones en Google Maps' : 'Google Maps & Reviews'}</a>
                <a href="https://nextdoor.com/pages/pro-locksmith-tech-coral-springs-fl/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Nextdoor</a>
                {yelpUrl && <a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Yelp</a>}
                <a href="https://www.pinterest.com/prolocksmithtech/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Pinterest</a>
                <a href="https://www.trustpilot.com/review/prolocksmith-tech.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Trustpilot</a>
                <a href="https://ezlocal.com/fl/coral-springs/mobile-locksmith/0919941311" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">EZlocal</a>
              </div>
            </div>
          </div>

          {/* Column 2: Specialized Locksmith Services */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Servicios Móviles' : 'Mobile Services'}
            </h2>
            <ul className="space-y-1.5 text-xs">
              {services.map((srv) => {
                const displayName = isSpanish 
                  ? srv.spanishName
                  : srv.name;

                return (
                  <li key={srv.id}>
                    <LocalizedA href={`/services/${srv.slug}`}
                      className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-300 hover:text-white"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                      <span className="truncate">{displayName}</span>
                    </LocalizedA>
                  </li>
                );
              })}
              <li>
                <LocalizedA href="/services"
                  className="text-amber-400 hover:underline font-bold pt-1 flex items-center gap-1 text-[11px] cursor-pointer text-center"
                >
                  <span>{isSpanish ? 'Ver los 12 Servicios' : 'View All 12 Services'} &rarr;</span>
                </LocalizedA>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas Directory */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Áreas de Servicio' : 'Service Areas'}
            </h2>
            <div className="space-y-3 text-xs">
              {counties.map((county) => {
                const countyName = isSpanish
                  ? county.spanishName
                  : county.name;

                return (
                  <div key={county.id} className="space-y-1">
                    <LocalizedA href={`/service-areas/${county.slug}`}
                      className="font-bold text-white hover:text-amber-400 transition-colors flex min-h-[28px] items-center gap-1 cursor-pointer text-center"
                    >
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{countyName}</span>
                    </LocalizedA>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-300 pl-4">
                      {county.majorCities.map((city) => (
                        <LocalizedA href={`/service-areas/${city.slug}`}
                          key={city.id}
                          className="hover:text-amber-300 transition-colors cursor-pointer inline-flex min-h-[28px] items-center text-center"
                        >
                          {city.name}
                        </LocalizedA>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="pt-1">
                <LocalizedA href="/service-areas"
                  className="text-amber-400 hover:underline font-bold text-xs flex min-h-[28px] items-center gap-1 cursor-pointer text-center"
                >
                  <span>{isSpanish ? 'Mapa Interactivo (37 Ciudades)' : 'Interactive Map (37 Cities)'} &rarr;</span>
                </LocalizedA>
              </div>
            </div>
          </div>

          {/* Column 4: Relocated Pages (FAQ, Tips, Blog, Landing Hub, Legal) */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              {isSpanish ? 'Ayuda, Guías y Legal' : 'Help, Guides & Legal'}
            </h2>
            <ul className="space-y-2 text-xs">
              <li>
                <LocalizedA href="/faq"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{isSpanish ? 'Preguntas Frecuentes (FAQ)' : 'Frequently Asked Questions (FAQ)'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/about"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-200"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{isSpanish ? '¿Por Qué Elegirnos?' : 'Why Choose Pro Locksmith Tech'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/tips"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-amber-300"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="font-bold">{isSpanish ? 'Guías de cerrajería' : 'Locksmith Guides'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/blog"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Artículos (en inglés)' : 'Security Blog & Advice'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/reviews" className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Opiniones de clientes (en inglés)' : 'Google Customer Reviews'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/privacy"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}</span>
                </LocalizedA>
              </li>
              <li>
                <LocalizedA href="/terms"
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 min-h-[28px] py-1 cursor-pointer text-slate-400"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0" />
                  <span>{isSpanish ? 'Términos de Servicio' : 'Terms of Service'}</span>
                </LocalizedA>
              </li>
            </ul>
          </div>
        </div>

        <p className="mb-5 max-w-4xl text-xs leading-5 text-slate-400">*{isSpanish ? 'Los tiempos de llegada anunciados son solo estimaciones, no garantías. Pueden variar según el tráfico, la ubicación, el clima y la disponibilidad de técnicos.' : 'Advertised arrival times are estimates only, not guarantees. Actual arrival varies with traffic, location, weather and technician availability.'} <LocalizedA href="/terms" className="underline underline-offset-2 hover:text-slate-200">{isSpanish ? 'Consulte los términos' : 'See Terms of Service'}</LocalizedA>.</p>

        {/* Bottom Bar: Copyright, Language Switcher & Quick Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} Pro Locksmith Tech. {t('footer.rights')}
            </span>
            <LanguageToggle variant="compact" />
          </div>
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center sm:justify-end">
            <LocalizedA href="/" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {t('nav.home')}
            </LocalizedA>
            <LocalizedA href="/services" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {t('nav.services')}
            </LocalizedA>
            <LocalizedA href="/service-areas" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {t('nav.serviceAreas')}
            </LocalizedA>
            <LocalizedA href="/faq" className="hover:text-amber-400 transition-colors cursor-pointer inline-block text-center">
              {t('nav.faq')}
            </LocalizedA>
            <LocalizedA href="/contact" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {t('nav.contact')}
            </LocalizedA>
            <LocalizedA href="/sitemap" className="hover:text-slate-300 transition-colors">
              {isSpanish ? 'Mapa del sitio' : 'Sitemap'}
            </LocalizedA>
            <LocalizedA href="/privacy" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {isSpanish ? 'Privacidad' : 'Privacy'}
            </LocalizedA>
            <LocalizedA href="/terms" className="hover:text-slate-300 transition-colors cursor-pointer inline-block text-center">
              {isSpanish ? 'Términos' : 'Terms'}
            </LocalizedA>
          </div>
        </div>
      </div>
    </footer>
  );
}
