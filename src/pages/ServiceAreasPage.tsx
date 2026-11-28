import { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import { PAYMENT_METHODS, PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { availabilityLocalities, coverageMatches } from '../data/coverageLookup';
import { countyServiceContent } from '../data/localServiceContent';
import { COUNTIES_DATA } from '../data/locationsData';
import { getNeighborhoods, neighborhoodPath } from '../data/neighborhoods';
import { trackPhoneClick } from '../utils/analytics';

export function ServiceAreasPage() {
  const { language } = useLanguage();
  const es = language === 'es';
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const term = query.trim();
  const groups = COUNTIES_DATA
    .filter(county => !filter || county.slug === filter)
    .map(county => ({
      county,
      areas: county.majorCities.filter(city => !term || coverageMatches(term, [city.name, county.name, ...city.zipCodes, ...getNeighborhoods(city.slug).map(area => area.name)])).sort((a, b) => a.priorityTier - b.priorityTier),
      neighborhoods: term ? county.majorCities.flatMap(city =>
        getNeighborhoods(city.slug)
          .filter(area => coverageMatches(term, [area.name]))
          .map(area => ({ name: area.name, city: city.name, path: neighborhoodPath(city.slug, area.slug) }))
      ) : [],
      candidates: term ? availabilityLocalities(county.slug).filter(name => coverageMatches(term, [name])) : [],
    }))
    .filter(group => group.areas.length || group.neighborhoods.length || group.candidates.length);
  const count = groups.reduce((total, group) => total + group.areas.length + group.neighborhoods.length + group.candidates.length, 0);
  const title = es ? 'Áreas de cerrajería móvil en el sur de Florida' : 'South Florida locksmith service areas';

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:py-14">
      <SEOHead title={title} canonicalPath="/service-areas"
        description={es
          ? 'Encuentre nuestro servicio de cerrajería móvil para autos, viviendas y negocios en las comunidades que atendemos en Broward, Miami-Dade y Palm Beach.'
          : 'Explore our mobile locksmith service for vehicles, homes and businesses in communities throughout Broward, Miami-Dade and Palm Beach.'} />
      <Breadcrumbs trail={[[es ? 'Áreas de servicio' : 'Service areas', '/service-areas']]} />
      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{es
          ? 'Atendemos comunidades de Miami-Dade, Broward y Palm Beach. Vamos a su auto, vivienda o negocio con cerrajería móvil, servicio el mismo día y atención de emergencia las 24 horas.'
          : 'We serve communities across Miami-Dade, Broward and Palm Beach. Our mobile locksmiths come to your vehicle, home or business, with same-day service and 24/7 emergency assistance.'}</p>
        <p className="mt-3 text-sm text-slate-300">{es ? `Aceptamos ${PAYMENT_METHODS.es}.` : `We accept ${PAYMENT_METHODS.en}.`}</p>
        <LocalizedA href={TEL} onClick={() => trackPhoneClick({ ctaLocation: 'service_areas_hero_call', pagePath: es ? '/es/service-areas' : '/service-areas' })}
          className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300">
          {es ? 'Llame al ' : 'Call '}{PHONE}
        </LocalizedA>
      </section>

      <section aria-labelledby="coverage-search-heading">
        <h2 id="coverage-search-heading" className="font-heading text-2xl font-bold text-white">{es ? 'Busque una localidad' : 'Find your community'}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="text-slate-200">
            {es ? 'Localidad, vecindario o código postal' : 'Community, neighborhood or ZIP code'}
            <input type="search" value={query} onChange={event => setQuery(event.target.value)}
              className="mt-2 min-h-12 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 text-white" />
          </label>
          <label className="text-slate-200">
            {es ? 'Condado' : 'County'}
            <select value={filter} onChange={event => setFilter(event.target.value)}
              className="mt-2 min-h-12 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 text-white">
              <option value="">{es ? 'Todos los condados' : 'All counties'}</option>
              {COUNTIES_DATA.map(county => <option key={county.slug} value={county.slug}>{county.name}</option>)}
            </select>
          </label>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300" aria-live="polite">
          {es ? `${count} localidades en nuestro directorio de servicio.` : `${count} communities in our service directory.`}
        </p>
      </section>

      {groups.map(({ county, areas, neighborhoods, candidates }) => (
        <section className="plt-paper rounded-xl border p-6 sm:p-8" key={county.slug}>
          <h2 className="font-heading text-2xl font-bold text-white">
            <LocalizedA href={'/service-areas/' + county.slug} className="text-amber-300 hover:underline">{county.name}</LocalizedA>
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">{countyServiceContent[county.slug][language]}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(area => (
              <li key={area.slug}><LocalizedA href={'/service-areas/' + area.slug}
                className="flex min-h-12 items-center rounded-lg border border-slate-700 px-4 py-2 font-semibold text-amber-300 hover:border-amber-400">
                {area.name}
              </LocalizedA></li>
            ))}
            {neighborhoods.map(area => (
              <li key={area.path}><LocalizedA href={area.path}
                className="flex min-h-12 items-center rounded-lg border border-slate-700 px-4 py-2 font-semibold text-amber-300 hover:border-amber-400">
                {area.name}, {area.city}
              </LocalizedA></li>
            ))}
            {candidates.map(name => (
              <li key={name} className="rounded-lg border border-slate-700 px-4 py-2">
                <span className="block font-semibold">{name}</span>
                <LocalizedA href={TEL} onClick={() => trackPhoneClick({ ctaLocation: 'service_areas_availability_call', pagePath: es ? '/es/service-areas' : '/service-areas' })}
                  className="inline-flex min-h-11 items-center text-amber-300 underline">
                  {es ? 'Llámenos para recibir servicio' : 'Call for locksmith service'}
                </LocalizedA>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {!count && <p className="text-slate-300">
        {es ? '¿No encuentra su localidad? Atendemos comunidades en todo el sur de Florida. ' : 'Don’t see your community listed? We serve communities throughout South Florida. '}
        <LocalizedA href={TEL} className="font-semibold text-amber-300 underline">
          {es ? 'Llame al ' : 'Call '}{PHONE}
        </LocalizedA>
      </p> }
    </div>
  );
}
