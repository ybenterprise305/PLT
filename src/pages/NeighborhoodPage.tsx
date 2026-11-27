import { Breadcrumbs } from '../components/Breadcrumbs';
import { getCityBySlug } from '../data/locationsData';
import { getLocalGuide, getLocalHelp } from '../data/localServiceContent';
import { NotFoundPage } from './NotFoundPage';
import type { RouteProps } from '../routes';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import type { Neighborhood } from '../data/neighborhoods';
import { getNeighborhoods, neighborhoodPath } from '../data/neighborhoods';
import { trackPhoneClick } from '../utils/analytics';

const serviceLabels = {
  'automotive-locksmith': 'Car keys and lockouts',
  'residential-locksmith': 'Home lockouts, repairs and rekeying',
  'commercial-locksmith': 'Business door locks and hardware',
};

interface Props {
  city: { name: string; slug: string };
  county: { name: string; slug: string };
  area: Neighborhood;
}

export function NeighborhoodPage({ slug, onNavigate }: RouteProps) {
  const [citySlug, areaSlug] = slug.split('/');
  const location = getCityBySlug(citySlug);
  const area = getNeighborhoods(citySlug).find(entry => entry.slug === areaSlug);
  return location && area ? <NeighborhoodContent city={location.city} county={location.county} area={area} /> : <NotFoundPage onNavigate={onNavigate} />;
}

function NeighborhoodContent({ city, county, area }: Props) {
  const path = neighborhoodPath(city.slug, area.slug);
  const guide = getLocalHelp(city.slug) && getLocalGuide(
    area.service === 'automotive-locksmith' ? 'vehicle-key-compatibility'
      : area.service === 'commercial-locksmith' ? 'business-key-handover'
        : 'locksmith-pricing-factors', 'en');

  return (
    <article className="mx-auto max-w-4xl space-y-7 px-5 py-10 sm:py-14">
      <SEOHead
        title={`Mobile Locksmith in ${area.name} | ${city.name}`}
        description={`${area.name} in ${city.name}, FL. Local service information and what to have ready before you call Pro Locksmith Tech for mobile locksmith help.`}
        canonicalPath={path}
      />
      <Breadcrumbs trail={[['Service areas', '/service-areas'], [county.name, `/service-areas/${county.slug}`], [city.name, `/service-areas/${city.slug}`], [area.name, path]]} />
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">Mobile locksmith service in {area.name}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">{area.localContext}</p>
        <p className="mt-3 text-slate-300">Pro Locksmith Tech serves {city.name} by mobile dispatch. Call with your location to confirm service and availability.</p>
        <LocalizedA href="tel:+17542616528" onClick={() => trackPhoneClick({ ctaLocation: 'neighborhood_call', pagePath: path })}
          className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300">
          Call (754) 261-6528
        </LocalizedA>
      </div>
      <section className="space-y-3">
        <h2 className="font-heading text-2xl font-bold text-white">What to tell dispatch in {area.name}</h2>
        <p className="leading-7 text-slate-300">{area.callNotes}</p>
        <p className="leading-7 text-slate-300">For this type of request, see <LocalizedA href={`/services/${area.service}`} className="text-amber-300 underline">{serviceLabels[area.service]}</LocalizedA>.</p>
      </section>
      {guide && <p><LocalizedA href={guide[1]} className="text-amber-300 underline">{guide[0]}</LocalizedA></p>}
      <p><LocalizedA href={`/service-areas/${city.slug}`} className="text-amber-300 underline">See all {city.name} service information</LocalizedA></p>
    </article>
  );
}
