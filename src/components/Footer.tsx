import { Phone } from 'lucide-react';
import { PHONE, TEL, VERIFIED_PROFILES } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { counties, services } from '../generated/navigation';
import { trackPhoneClick } from '../utils/analytics';
import { LanguageToggle } from './LanguageToggle';
import { LocalizedA } from './LocalizedA';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

const resources = [
  ['/completed-work', 'Our work', 'Nuestro trabajo'],
  ['/faq', 'Frequently asked questions', 'Preguntas frecuentes'],
  ['/about', 'About us', 'Acerca de nosotros'],
  ['/tips', 'Locksmith guides', 'Guías de cerrajería'],
  ['/blog', 'Blog and advice', 'Artículos (en inglés)'],
  ['/reviews', 'Google customer reviews', 'Opiniones de clientes (en inglés)'],
  ['/contact', 'Contact', 'Contacto'],
] as const;

export function Footer() {
  const { isSpanish, t } = useLanguage();
  return (
    <footer className="plt-footer">
      <div className="plt-wrap">
        <div className="plt-footer-grid">
          <div className="space-y-3">
            <LocalizedA href="/" className="plt-brand" aria-label="Pro Locksmith Tech"><Logo size="md" /></LocalizedA>
            <p className="max-w-[33ch] text-slate-300">{isSpanish
              ? 'Cerrajería móvil para autos, viviendas y negocios en el sur de Florida desde 2000. Atención las 24 horas.'
              : 'Mobile locksmith service for vehicles, homes and businesses across South Florida since 2000. Available 24 hours.'}</p>
            <LocalizedA href={TEL} className="plt-text-link"
              onClick={() => trackPhoneClick({ ctaLocation: 'footer_call_link', pagePath: window.location.pathname })}>
              <Phone size={16} className="mr-2" aria-hidden="true" />{PHONE}
            </LocalizedA>
            <SocialLinks variant="footer" />
          </div>
          <div>
            <h2 className="plt-label mb-2">{isSpanish ? 'Servicios' : 'Services'}</h2>
            <ul>
              {services.map(service => (
                <li key={service.slug}>
                  <LocalizedA href={'/services/' + service.slug}>{isSpanish ? service.spanishName : service.name}</LocalizedA>
                </li>
              ))}
              <li><LocalizedA href="/services">{isSpanish ? 'Todos los servicios' : 'All services'}</LocalizedA></li>
            </ul>
          </div>
          <div>
            <h2 className="plt-label mb-2">{isSpanish ? 'Cobertura' : 'Service areas'}</h2>
            <ul>
              {counties.map(county => (
                <li key={county.slug} className="mb-2">
                  <LocalizedA href={'/service-areas/' + county.slug}>{isSpanish ? county.spanishName : county.name}</LocalizedA>
                  <div className="flex flex-wrap gap-x-3 text-sm text-slate-300">
                    {county.majorCities.map(city => (
                      <LocalizedA key={city.slug} href={'/service-areas/' + city.slug}>{city.name}</LocalizedA>
                    ))}
                  </div>
                </li>
              ))}
              <li><LocalizedA href="/service-areas">{isSpanish ? 'Directorio de áreas' : 'Coverage directory'}</LocalizedA></li>
            </ul>
          </div>
          <div>
            <h2 className="plt-label mb-2">{isSpanish ? 'Ayuda y recursos' : 'Help and resources'}</h2>
            <ul>
              {resources.map(([href, en, es]) => <li key={href}><LocalizedA href={href}>{isSpanish ? es : en}</LocalizedA></li>)}
            </ul>
          </div>
        </div>
        <div className="plt-footer-meta">
          <div className="flex flex-wrap gap-x-4" aria-label={isSpanish ? 'Perfiles oficiales' : 'Official profiles'}>
            {VERIFIED_PROFILES.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
            ))}
            <a href="https://www.trustpilot.com/review/prolocksmith-tech.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
            <a href="https://ezlocal.com/fl/coral-springs/mobile-locksmith/0919941311" target="_blank" rel="noopener noreferrer">EZlocal</a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4">
            <LocalizedA href="/sitemap">{isSpanish ? 'Mapa del sitio' : 'Sitemap'}</LocalizedA>
            <LocalizedA href="/privacy">{isSpanish ? 'Privacidad' : 'Privacy'}</LocalizedA>
            <LocalizedA href="/terms">{isSpanish ? 'Términos' : 'Terms'}</LocalizedA>
          </div>
          <p className="max-w-[70ch] text-sm leading-6 text-slate-300">{isSpanish
            ? 'Los tiempos de llegada son estimados y dependen de la ubicación, el tráfico, el clima y la disponibilidad.'
            : 'Arrival estimates depend on location, traffic, weather and technician availability.'}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>&copy; {new Date().getFullYear()} Pro Locksmith Tech. {t('footer.rights')}</span>
            <LanguageToggle variant="compact" className="plt-languages" />
          </div>
        </div>
      </div>
    </footer>
  );
}
