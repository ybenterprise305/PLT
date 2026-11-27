import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocalizedA } from '../components/LocalizedA';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { completedJobImage, completedJobs, WORK_PATH } from '../data/completedWork';
import { localServiceLabels } from '../data/localServiceContent';

export function CompletedWorkPage() {
  const { language } = useLanguage();
  const es = language === 'es';
  const title = es ? 'Trabajos de cerrajería realizados' : 'Completed locksmith work';
  const desc = es
    ? 'Fotos de trabajos de Pro Locksmith Tech con llaves y controles de auto y la instalación de una cerradura comercial.'
    : 'Job photos from Pro Locksmith Tech technicians, including automotive keys and fobs and a commercial storefront lock installation.';

  return (
    <div className="plt-gallery space-y-8">
      <SEOHead title={title + ' | Pro Locksmith Tech'} description={desc} canonicalPath={WORK_PATH} />
      <Breadcrumbs trail={[[title, WORK_PATH]]} />
      <header className="plt-gallery-intro">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{desc}</p>
      </header>
      <ul className="plt-gallery-grid">
        {completedJobs.map(job => {
          const { caption, alt } = job[language];
          return (
            <li id={job.id} key={job.id} className="plt-job scroll-mt-28">
              <figure>
                <img {...completedJobImage(job)} alt={alt} loading="lazy" decoding="async"
                  sizes="(min-width: 1024px) 326px, (min-width: 640px) calc(50vw - 50px), calc(100vw - 72px)"
                  />
                <figcaption className="mt-4 text-base leading-7 text-slate-200">{caption}</figcaption>
              </figure>
              <LocalizedA href={'/services/' + job.service} className="mt-3 inline-flex min-h-11 items-center text-amber-300 underline">
                {localServiceLabels[job.service][language]}
              </LocalizedA>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
