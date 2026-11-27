import { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import { PHONE, TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { countyServiceContent } from '../data/localServiceContent';
import { COUNTIES_DATA } from '../data/locationsData';
import { getNeighborhoods } from '../data/neighborhoods';
import { trackPhoneClick } from '../utils/analytics';

export function ServiceAreasPage() {
  const { language } = useLanguage();
  const es = language === 'es';
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const term = query.trim().toLowerCase();
  const groups = COUNTIES_DATA
    .filter(county => !filter || county.slug === filter)
    .map(county => ({
      county,
      areas: county.majorCities.filter(city => !term || [city.name, county.name, ...city.zipCodes, ...getNeighborhoods(city.slug).map(area => area.name)]
        .some(name => name.toLowerCase().includes(term))).sort((a, b) => a.priorityTier - b.priorityTier),
    }))
    .filter(group => group.areas.length);
  const count = groups.reduce((total, group) => total + group.areas.length, 0);
  const title = es ? 'Áreas de cerrajería móvil en el sur de Florida' : 'South Florida locksmith service areas';

  return (
    <div className="plt-wrap space-y-8 py-10 sm:py-14">
      <SEOHead title={title} canonicalPath="/service-areas"
        description={es
          ? 'Busque cerrajería móvil para autos, viviendas y negocios en localidades de Broward, Miami-Dade y Palm Beach. Consulte la cobertura por dirección.'
          : 'Find mobile locksmith service for cars, homes and businesses in listed Broward, Miami-Dade and Palm Beach communities. Confirm coverage by address.'} />
      <Breadcrumbs trail={[[es ? 'Áreas de servicio' : 'Service areas', '/service-areas']]} />
      <section className="plt-page-lead">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{es
          ? 'Vamos a su auto, vivienda o negocio en las localidades indicadas, con asistencia de emergencia las 24 horas. Llame con la dirección exacta para confirmar la disponibilidad.'
          : 'We come to your vehicle, home or business in the listed communities, with 24/7 emergency assistance. Call with the exact service address to confirm availability.'}</p>
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
          {es ? `${count} localidades. Confirme la disponibilidad en su dirección.` : `${count} communities. Confirm availability at your exact address.`}
        </p>
      </section>

      {groups.map(({ county, areas }) => (
        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8" key={county.slug}>
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
          </ul>
        </section>
      ))}
      {!count && <p className="text-slate-300">{es
        ? 'No encontramos esa localidad. Llame para consultar la disponibilidad en su dirección.'
        : 'That search did not match a listed community. Call to check availability at your address.'}</p>}
    </div>
  );
}
