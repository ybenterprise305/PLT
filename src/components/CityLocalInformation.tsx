import { CITY_FACT_SOURCES, CITY_FACTS } from '../data/cityFacts';
import { getNeighborhoods, neighborhoodPath } from '../data/neighborhoods';
import { LocalizedA } from './LocalizedA';

interface Props {
  city: string;
  slug: string;
  spanish?: boolean;
}

export function CityLocalInformation({ city, slug, spanish = false }: Props) {
  const facts = CITY_FACTS[slug];
  const neighborhoods = getNeighborhoods(slug);
  const populationSource = slug === 'kendall' ? CITY_FACT_SOURCES.kendall : CITY_FACT_SOURCES.population;
  const historySource = slug === 'riviera-beach'
    ? 'https://www.rivierabch.com/rbpd/history'
    : slug === 'boca-raton'
      ? 'https://bocahistory.org/virtual-exhibition/boca-raton-mayors/'
      : CITY_FACT_SOURCES.incorporation;

  return (
    <div className="space-y-6">
      {facts && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="font-heading text-xl font-bold text-white">{spanish ? `Datos sobre ${city}` : `About ${city}, Florida`}</h2>
          <dl className="mt-4 grid gap-4 text-slate-200 sm:grid-cols-2">
            <div>
              <dt><a className="text-amber-300 underline" href={populationSource}>{spanish ? 'Población según el Censo de 2020' : '2020 census population'}</a></dt>
              <dd className="mt-1 font-semibold">{facts.population.toLocaleString('en-US')}</dd>
            </div>
            <div>
              <dt>{facts.incorporated ? <a className="text-amber-300 underline" href={historySource}>{spanish ? 'Año de incorporación municipal' : 'Municipal incorporation'}</a> : spanish ? 'Tipo de localidad' : 'Community status'}</dt>
              <dd className="mt-1 font-semibold">
                {facts.incorporated ?? (spanish ? 'Área no incorporada designada por el Censo' : 'Unincorporated census-designated place')}
              </dd>
            </div>
          </dl>
        </section>
      )}

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <h2 className="font-heading text-xl font-bold text-white">{spanish ? `Preguntas sobre cerrajería en ${city}` : `Mobile locksmith questions in ${city}`}</h2>
        <div className="mt-4 space-y-4 text-slate-300">
          <div>
            <h3 className="font-semibold text-white">{spanish ? `¿Prestan servicio en ${city}?` : `Do you serve ${city}?`}</h3>
            <p>{spanish ? `Sí. Pro Locksmith Tech presta servicio móvil en ${city}. Llame con su dirección para confirmar la disponibilidad de una unidad móvil y coordinar la visita.` : `Yes. Pro Locksmith Tech provides mobile locksmith service in ${city}. Call with your address so we can confirm availability and arrange for a mobile van to come to you.`}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">{spanish ? `¿Por qué elegir Pro Locksmith Tech en ${city}?` : `Why choose Pro Locksmith Tech in ${city}?`}</h3>
            <p>{spanish ? 'Puede solicitar ayuda para un vehículo, una vivienda o un negocio por teléfono. Vamos a su ubicación. Indíquenos qué pasó y podremos confirmar el servicio que corresponde a su vehículo o cerradura.' : 'You can call one number for a car key, a home lockout or a business door lock. We come to your location. Tell us what happened so we can confirm whether we can help with your vehicle or lock.'}</p>
          </div>
        </div>
      </section>

      {neighborhoods.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="font-heading text-xl font-bold text-white">{spanish ? `Vecindarios y zonas de ${city}` : `Neighborhoods and local areas in ${city}`}</h2>
          {spanish && <p className="mt-2 text-sm text-slate-300">Guías locales en inglés.</p>}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((area) => (
              <li key={area.slug}>
                <LocalizedA href={neighborhoodPath(slug, area.slug)} className="flex min-h-12 items-center rounded-lg border border-slate-700 px-4 py-2 font-semibold text-amber-300 hover:border-amber-400">
                  {area.name}
                </LocalizedA>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
