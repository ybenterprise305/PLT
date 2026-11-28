import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { WORK_PATH, workExamples, workExampleImage } from '../data/completedWork';

export function CompletedWorkPage() {
  const { language } = useLanguage();
  const es = language === 'es';
  const title = es ? 'Nuestro trabajo de cerrajería' : 'Our locksmith work';
  const description = es
    ? 'Conozca nuestros servicios de cerrajería móvil para autos, viviendas y negocios en el sur de Florida.'
    : 'Explore our mobile locksmith services for vehicles, homes and businesses in South Florida.';

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:py-14">
      <SEOHead title={title + ' | Pro Locksmith Tech'} description={description} canonicalPath={WORK_PATH} />
      <Breadcrumbs trail={[[title, WORK_PATH]]} />
      <header className="space-y-4">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
        <p className="text-sm text-slate-300">{es ? 'Las imágenes ilustran nuestros servicios.' : 'The images illustrate the services we offer.'}</p>
      </header>
      <ul className="grid gap-5 sm:grid-cols-2">
        {workExamples.map(example => {
          const [heading, summary, alt] = example[language];
          return (
            <li id={example.id} key={example.id} className="plt-paper scroll-mt-28 overflow-hidden rounded-xl border">
              <img {...workExampleImage(example)} alt={alt} loading="lazy" decoding="async"
                sizes="(min-width: 1152px) 546px, (min-width: 640px) calc(50vw - 30px), calc(100vw - 42px)"
                className="aspect-[3/2] w-full object-cover" />
              <div className="space-y-2 p-5 sm:p-6">
                <h2 className="font-heading text-xl font-bold sm:text-2xl">{heading}</h2>
                <p className="text-base leading-7 text-slate-300">{summary}</p>
                <div className="flex flex-wrap gap-x-4">
                  <LocalizedA href={'/services/' + example.service} className="inline-flex min-h-11 items-center gap-2 font-semibold text-amber-300 underline underline-offset-4">
                    {es ? 'Ver servicio' : 'View service'} <ArrowRight size={16} aria-hidden="true" />
                  </LocalizedA>
                  {example.id === 'automotive' && (
                    <LocalizedA href="/services/key-replacement" className="inline-flex min-h-11 items-center font-semibold text-amber-300 underline underline-offset-4">
                      {es ? 'Reemplazo de llaves' : 'Key replacement'}
                    </LocalizedA>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
