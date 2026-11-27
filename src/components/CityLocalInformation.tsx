import { getNeighborhoods, neighborhoodPath } from '../data/neighborhoods';
import { LocalizedA } from './LocalizedA';

interface Props {
  city: string;
  slug: string;
  spanish?: boolean;
}

export function CityLocalInformation({ city, slug, spanish = false }: Props) {
  const neighborhoods = getNeighborhoods(slug);
  if (!neighborhoods.length) return null;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
      <h2 className="font-heading text-2xl font-bold text-white">
        {spanish ? `Vecindarios y zonas de ${city}` : `Neighborhoods and local areas in ${city}`}
      </h2>
      {spanish && <p className="mt-2 text-sm text-slate-300">Guías locales en inglés.</p>}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.map(area => (
          <li key={area.slug}>
            <LocalizedA href={neighborhoodPath(slug, area.slug)} className="flex min-h-12 items-center rounded-lg border border-slate-700 px-4 py-2 font-semibold text-amber-300 hover:border-amber-400">
              {area.name}
            </LocalizedA>
          </li>
        ))}
      </ul>
    </section>
  );
}
