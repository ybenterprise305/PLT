import { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { LOCKSMITH_TIPS_DATA } from '../data/locksmithTipsData';
import { useLanguage } from '../context/LanguageContext';

const groups = [
  ['Automotive', 'Llaves y controles de auto'],
  ['Residential', 'Cerraduras de vivienda'],
  ['Commercial', 'Cerraduras de negocios'],
  ['Emergency', 'Aperturas y emergencias'],
  ['Pricing', 'Presupuestos y precios'],
] as const;

export function LocksmithTipsPage() {
  const { language } = useLanguage();
  const es = language === 'es';
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const title = es ? 'Guías de cerrajería móvil' : 'Locksmith guides and customer resources';
  const description = es
    ? 'Guías para identificar llaves de auto, comparar presupuestos de cerrajería y decidir qué ayuda pedir si se queda sin acceso.'
    : 'Customer guides for car key compatibility, lockouts, pricing, home locks and commercial door access.';
  const find = (value: string) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const results = LOCKSMITH_TIPS_DATA.flatMap(guide => {
    const text = es ? guide.es : guide;
    if (!text || (category !== 'All' && category !== guide.category)) return [];
    if (!find(text.title + ' ' + text.summary).includes(find(query.trim()))) return [];
    return [{ slug: guide.slug, category: guide.category, text }];
  });

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:px-8">
      <SEOHead title={title} description={description} canonicalPath="/tips" />
      <Breadcrumbs trail={[[title, '/tips']]} />
      <header className="space-y-3">
        <h1 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-lg leading-7 text-slate-200">{description}</p>
        <p><LocalizedA className="text-amber-300 underline" href={es ? '/services' : '/blog'}>
          {es ? 'Servicios de cerrajería' : 'Read more locksmith articles'}
        </LocalizedA></p>
      </header>
      <div className="space-y-3">
        <label htmlFor="find-locksmith-guide" className="block font-semibold text-white">{es ? 'Buscar una guía' : 'Find a guide'}</label>
        <input id="find-locksmith-guide" type="search" value={query} onChange={event => setQuery(event.target.value)}
          className="min-h-11 w-full max-w-xl rounded-lg border border-slate-600 bg-slate-950 px-4 text-white" />
        <div className="flex flex-wrap gap-2" aria-label={es ? 'Temas' : 'Topics'}>
          {([['All', 'Todos'], ...groups] as const).filter(([group]) => group === 'All' ||
            LOCKSMITH_TIPS_DATA.some(guide => guide.category === group && (!es || guide.es))).map(([group, spanish]) => (
            <button key={group} type="button" aria-pressed={group === category} onClick={() => setCategory(group)}
              className="min-h-11 rounded-lg border border-slate-600 px-3 font-semibold text-white aria-pressed:bg-amber-300 aria-pressed:text-slate-950">
              {es ? spanish : group}
            </button>
          ))}
        </div>
      </div>
      {groups.map(([group, spanish]) => {
        const guides = results.filter(guide => guide.category === group);
        if (!guides.length) return null;
        return (
          <section className="space-y-3" key={group}>
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">{es ? spanish : group}</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {guides.map(({ slug, text }) => (
                <li className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" key={slug}>
                  <h3 className="font-semibold text-white">
                    <LocalizedA href={'/tips/' + slug} className="inline-flex min-h-11 items-center text-amber-300 underline">{text.title}</LocalizedA>
                  </h3>
                  <p className="leading-6 text-slate-300">{text.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {!results.length && <p role="status">{es ? 'No hay guías para esta búsqueda.' : 'No guides match this search.'}</p>}
    </div>
  );
}
