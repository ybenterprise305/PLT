import { Breadcrumbs } from '../components/Breadcrumbs';
import { CityLocalInformation } from '../components/CityLocalInformation';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import { PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { countyServiceContent, getLocalGuide, getLocalHelp, localServiceLabels, nearbyServiceAreas } from '../data/localServiceContent';
import { availabilityLocalities } from '../data/coverageLookup';
import { getCityBySlug, getCountyBySlug } from '../data/locationsData';
import type { RouteProps } from '../routes';
import { trackPhoneClick } from '../utils/analytics';
import { NotFoundPage } from './NotFoundPage';

const cityServices = ['automotive-locksmith', 'residential-locksmith', 'commercial-locksmith', 'emergency-lockout-service'] as const;
const linkStyle = 'inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-4 py-2 text-amber-300 hover:border-amber-400';
const panel = 'rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8';

export function LocationDetailPage({ slug, onNavigate }: RouteProps) {
  const { language } = useLanguage();
  const es = language === 'es';
  const cityMatch = getCityBySlug(slug);
  const county = cityMatch?.county ?? getCountyBySlug(slug);
  if (!county) return <NotFoundPage onNavigate={onNavigate} />;

  const city = cityMatch?.city;
  const place = city?.name ?? county.name;
  const path = '/service-areas/' + slug;
  const title = es ? 'Cerrajero móvil en ' + place : 'Mobile locksmith in ' + place;
  const intro = city
    ? es
      ? `Pro Locksmith Tech ofrece cerrajería móvil para autos, viviendas y negocios en ${place}. Vamos a su ubicación, con asistencia de emergencia las 24 horas.`
      : `Pro Locksmith Tech comes to your vehicle, home or business in ${place}. Get help with keys, locks or an emergency lockout 24 hours a day.`
    : countyServiceContent[slug][language];
  const description = city ? (es
    ? `Cerrajería móvil en ${place} para autos, viviendas y negocios. Consulte por llaves de auto, cerraduras o aperturas de emergencia las 24 horas.`
    : `Mobile locksmith service in ${place}, Florida. Get help with car keys, home and business locks, or 24/7 emergency lockouts.`)
    : (es
      ? `Encuentre localidades de ${place} con cerrajería móvil para autos, viviendas y negocios. Consulte la cobertura y los servicios de Pro Locksmith Tech.`
      : `Browse the communities served in ${place} and find mobile locksmith help for cars, homes and businesses from Pro Locksmith Tech.`);
  const trail: [string, string][] = [
    [es ? 'Áreas de servicio' : 'Service areas', '/service-areas'],
    [county.name, '/service-areas/' + county.slug],
  ];
  if (city) trail.push([city.name, path]);
  const help = city && getLocalHelp(city.slug);
  const guide = getLocalGuide(help ? help.guide : 'locksmith-pricing-factors', language);
  const lead = es ? 'spanish_city_call' : city ? 'city_hero_call' : 'county_hero_call';
  const nearby = (nearbyServiceAreas[slug] || []).flatMap(areaSlug => {
    const area = getCityBySlug(areaSlug)?.city;
    return area ? [area] : [];
  });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:py-14">
      <SEOHead title={title + ' | Pro Locksmith Tech'} description={description} canonicalPath={path} />
      <Breadcrumbs trail={trail} />
      <section className={panel} aria-labelledby="local-coverage-heading">
        <h1 id="local-coverage-heading" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
          {es ? 'Llámenos y nuestro equipo le ayudará a coordinar el servicio en su ubicación.' : 'Call and our team will help you schedule mobile service at your location.'}
        </p>
        <LocalizedA href={TEL} onClick={() => trackPhoneClick({ ctaLocation: lead, pagePath: es ? '/es' + path : path })}
          className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300">
          {es ? 'Llame al ' : 'Call '}{PHONE}
        </LocalizedA>
      </section>

      {city?.placeType === 'census-designated place' && (
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          {es ? 'Kendall es una comunidad no incorporada del condado de Miami-Dade.' : 'Kendall is an unincorporated community in Miami-Dade County.'}
        </p>
      )}

      {help && <section className={panel + ' plt-paper'}>
        <h2 className="font-heading text-2xl font-bold text-white">{help.title[language]}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-300">{help.detail[language]}</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          <li><LocalizedA className={linkStyle} href={'/services/' + help.service}>{localServiceLabels[help.service][language]}</LocalizedA></li>
          <li><LocalizedA className={linkStyle} href={guide[1]}>{guide[0]}</LocalizedA></li>
        </ul>
      </section>}

      <section className={panel}>
        <h2 className="font-heading text-2xl font-bold text-white">{es ? 'Encuentre el servicio que necesita' : 'Find the locksmith service you need'}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {cityServices.filter(service => service !== (help && help.service)).map(service => (
            <li key={service}><LocalizedA className={linkStyle} href={'/services/' + service}>{localServiceLabels[service][language]}</LocalizedA></li>
          ))}
          {!help && <li><LocalizedA className={linkStyle} href={guide[1]}>{guide[0]}</LocalizedA></li>}
        </ul>
      </section>

      {city && <CityLocalInformation city={city.name} slug={city.slug} spanish={es} />}

      {nearby.length > 0 && <section className={panel}>
        <h2 className="font-heading text-2xl font-bold text-white">{es ? 'Otras localidades cercanas' : 'Other nearby communities we serve'}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {nearby.map(area => <li key={area.slug}><LocalizedA className={linkStyle} href={'/service-areas/' + area.slug}>{area.name}</LocalizedA></li>)}
        </ul>
      </section>}

      {city ? (
        <p className="text-slate-300">
          <LocalizedA className="font-semibold text-amber-300 underline" href={'/service-areas/' + county.slug}>
            {es ? 'Ver otras localidades de ' : 'See more served communities in '}{county.name}
          </LocalizedA>
        </p>
      ) : (
        <section className={panel}>
          <h2 className="font-heading text-2xl font-bold text-white">{es ? 'Localidades con servicio móvil' : 'Communities with mobile service'}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...county.majorCities].sort((a, b) => a.priorityTier - b.priorityTier).map(area => (
              <li key={area.slug}><LocalizedA className={linkStyle + ' w-full'} href={'/service-areas/' + area.slug}>{area.name}</LocalizedA></li>
            ))}
          </ul>
          <p className="mt-5 text-slate-200">{es
            ? 'Ofrecemos servicio en otras comunidades dentro de nuestra zona de atención. Llámenos para consultar disponibilidad en su localidad.'
            : 'We also visit communities within our service area that have no dedicated page. Call us to check availability at your location.'}</p>
          <details className="mt-4">
            <summary className="cursor-pointer py-2 font-semibold text-amber-300">{es ? 'Más localidades para consultar' : 'More localities to check'}</summary>
            <ul className="mt-2 columns-2 gap-5 text-slate-200 sm:columns-3">
              {availabilityLocalities(county.slug).map(name => <li key={name} className="mb-2 break-inside-avoid">{name}</li>)}
            </ul>
            <LocalizedA href={TEL} className={linkStyle}>{es ? 'Consultar disponibilidad · ' : 'Check availability · '}{PHONE}</LocalizedA>
          </details>
        </section>
      )}
    </div>
  );
}
