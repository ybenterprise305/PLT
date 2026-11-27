import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { StructuredData } from '../components/StructuredData';
import { ResourceLinks } from '../components/ResourceLinks';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_NAME, PHONE, TEL } from '../config/business';
import { LOCKSMITH_TIPS_DATA } from '../data/locksmithTipsData';
import { articleData } from '../utils/structuredData';
import { trackPhoneClick } from '../utils/analytics';
import { NotFoundPage } from './NotFoundPage';
import type { RouteProps } from '../routes';

export function TipDetailPage({ slug, onNavigate }: RouteProps) {
  const { language } = useLanguage();
  const es = language === 'es';
  const guide = LOCKSMITH_TIPS_DATA.find(record => record.slug === slug);
  const text = es ? guide?.es : guide;
  if (!guide || !text) return <NotFoundPage onNavigate={onNavigate} />;

  const path = '/tips/' + guide.slug;
  const { title, summary, sections, comparison } = text;
  const related = text.related ?? guide.related;
  const [serviceTitle, servicePath] = text.service;

  return (
    <article className="mx-auto max-w-4xl space-y-9 px-5 py-10 sm:px-8">
      <SEOHead title={title} description={summary} canonicalPath={path} ogType="article" />
      <StructuredData data={articleData({ type: 'Article', path, language, headline: title, description: summary })} />
      <Breadcrumbs trail={[[es ? 'Guías de cerrajería' : 'Locksmith guides', '/tips'], [title, path]]} />
      <header className="space-y-4 border-b border-slate-700 pb-7">
        <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="text-lg leading-8 text-slate-200">{summary}</p>
        <p className="text-sm text-slate-300">{es ? 'Publicado por' : 'Published by'} {BUSINESS_NAME}</p>
      </header>
      {comparison && (
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full border-collapse text-left text-sm text-slate-200 sm:text-base">
            <caption className="bg-slate-950 p-4 text-left font-semibold text-white">{comparison.caption}</caption>
            <thead>
              <tr>{comparison.columns.map(column => <th className="border-b border-slate-700 p-3 text-amber-300 sm:px-4" scope="col" key={column}>{column}</th>)}</tr>
            </thead>
            <tbody>
              {comparison.rows.map(([label, ...cells]) => (
                <tr className="border-t border-slate-700 align-top" key={label}>
                  <th className="p-3 font-semibold sm:px-4" scope="row">{label}</th>
                  {cells.map((cell, index) => <td className="p-3 leading-6 sm:px-4" key={index}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {guide.slug === 'vehicle-key-compatibility' && (
        <figure className="max-w-sm space-y-2">
          <img src="/resource-images/car-key-fob-comparison-640.webp"
            srcSet="/resource-images/car-key-fob-comparison-320.webp 320w, /resource-images/car-key-fob-comparison-640.webp 640w"
            sizes="(max-width: 424px) calc(100vw - 40px), 384px" width={640} height={853}
            loading="lazy" decoding="async" className="h-auto w-full rounded-xl"
            alt={es ? 'Dos controles de auto con distintos diseños de botones, sostenidos juntos' : 'Two car remotes with different button layouts held side by side'} />
          <figcaption className="text-sm text-slate-300">
            {es ? 'La forma y los botones no confirman compatibilidad. Foto suministrada por Pro Locksmith Tech.'
              : 'Shape and button layout do not establish compatibility. Photo supplied by Pro Locksmith Tech.'}
          </figcaption>
        </figure>
      )}
      {sections.map(([heading, ...paragraphs]) => (
        <section className="space-y-3" key={heading}>
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">{heading}</h2>
          {paragraphs.map(paragraph => <p className="leading-7 text-slate-200" key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
      <section className="space-y-3 rounded-xl border border-slate-700 bg-slate-950 p-5">
        <h2 className="font-heading text-xl font-bold text-white">{es ? 'Servicio relacionado' : 'Related service'}</h2>
        <p><LocalizedA href={servicePath} className="text-amber-300 underline">{serviceTitle}</LocalizedA></p>
        <LocalizedA href={TEL} className="inline-flex min-h-11 items-center font-bold text-amber-300 underline"
          onClick={() => trackPhoneClick({ ctaLocation: 'resource_guide_call', pagePath: es ? '/es' + path : path })}>
          {es ? 'Llamar a Pro Locksmith Tech' : 'Call Pro Locksmith Tech'} {PHONE}
        </LocalizedA>
      </section>
      <ResourceLinks title={es ? 'Guías relacionadas' : 'Related resources'} links={related} />
      {guide.sources && <ResourceLinks title={es ? 'Fuentes de referencia' : 'Sources'} links={guide.sources} />}
    </article>
  );
}
