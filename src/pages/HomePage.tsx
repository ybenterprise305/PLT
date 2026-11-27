import { completedJobs, completedJobImage } from '../data/completedWork';
import { StructuredData } from '../components/StructuredData';
import { siteIdentity } from '../utils/structuredData';
import { PHONE, TEL } from '../config/business';
import React from 'react';
import { Phone, Car, Home, Building2, KeyRound, ArrowRight, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { getServiceImage } from '../assets/images/serviceImages';
import { trackPhoneClick } from '../utils/analytics';
import { ReviewCarousel } from '../components/ReviewCarousel';

interface HomePageProps { onNavigate: (path: string) => void; }

const services = [
  { slug: 'automotive-locksmith', en: 'Car Lockouts & Keys', es: 'Apertura y llaves de autos', enDesc: 'Locked out or lost your keys? We come to your vehicle.', esDesc: '¿Quedó fuera de su auto o perdió sus llaves? Vamos hasta usted.', icon: Car },
  { slug: 'residential-locksmith', en: 'Home Locksmith', es: 'Cerrajería residencial', enDesc: 'House lockouts, rekeying and new door locks.', esDesc: 'Aperturas de viviendas, cambios de combinación e instalación de cerraduras.', icon: Home },
  { slug: 'commercial-locksmith', en: 'Business Locksmith', es: 'Cerrajería comercial', enDesc: 'Lock service for offices, shops and businesses.', esDesc: 'Servicios de cerraduras para oficinas, tiendas y negocios.', icon: Building2 },
  { slug: 'emergency-lockout-service', en: 'Emergency Lockouts', es: 'Aperturas de emergencia', enDesc: '24/7 help for vehicle, home and business lockouts.', esDesc: 'Ayuda las 24 horas para autos, viviendas y negocios.', icon: Clock },
];
const heroJob = completedJobs.find(job => job.id === 'dodge-key-fob')!;
const heroImage = completedJobImage(heroJob);

export function HomePage({ onNavigate: _onNavigate }: HomePageProps) {
  const { isSpanish } = useLanguage();
  const call = (where: string) => trackPhoneClick({ ctaLocation: where, pagePath: isSpanish ? '/es' : '/' });
  return (
    <div className="plt-home">
      <SEOHead
        title={isSpanish ? 'Cerrajero móvil 24/7 en el sur de Florida | Pro Locksmith Tech' : '24/7 Mobile Locksmith South Florida | Pro Locksmith Tech'}
        description={isSpanish
          ? 'Cerrajería móvil las 24 horas en el sur de Florida: aperturas de autos y casas, llaves de auto, programación de controles y cambio de cerraduras. Llame al (754) 261-6528.'
          : '24/7 mobile locksmith in South Florida. Car lockouts, replacement car keys, key fob programming, home lockouts and rekeying. Call (754) 261-6528.'}
        canonicalPath="/"
      />
      {!isSpanish && <StructuredData data={siteIdentity} />}
      <section className="plt-wrap plt-home-hero" aria-labelledby="home-hero-title">
        <div>
          <p className="plt-label">{isSpanish ? 'Cerrajería móvil 24/7' : '24/7 mobile locksmith'}</p>
          <h1 id="home-hero-title">
            {isSpanish ? 'Su cerrajero en ' : 'Your locksmith in '}
            <span>{isSpanish ? 'el sur de Florida' : 'South Florida'}</span>
          </h1>
          <p className="plt-home-hero-copy">{isSpanish
            ? 'Vamos a su auto, vivienda o negocio. Hacemos llaves, programamos controles compatibles y atendemos aperturas y cerraduras. En el sur de Florida desde 2000.'
            : 'We come to your car, home or business for replacement keys, compatible fobs, lockouts and lock changes. Serving South Florida since 2000.'}</p>
          <div className="plt-home-actions">
            <LocalizedA href={TEL} className="plt-cta" onClick={() => call('homepage_hero_call')}>
              <Phone size={18} aria-hidden="true" /> {isSpanish ? 'Llamar al' : 'Call'} {PHONE}
            </LocalizedA>
            <LocalizedA href="/service-areas" className="plt-text-link">{isSpanish ? 'Ver cobertura' : 'Check coverage'}</LocalizedA>
          </div>
        </div>
        <figure className="plt-home-photo">
          <img {...heroImage} sizes="(min-width: 1024px) 530px, calc(100vw - 40px)"
            alt={heroJob[isSpanish ? 'es' : 'en'].alt} loading="eager" fetchPriority="high" decoding="async" />
          <figcaption>
            <span>{heroJob[isSpanish ? 'es' : 'en'].caption}</span>
            <LocalizedA href="/completed-work#dodge-key-fob">{isSpanish ? 'Ver trabajo' : 'See completed work'}</LocalizedA>
          </figcaption>
        </figure>
      </section>

      <section className="plt-services-band plt-section" aria-labelledby="home-services-title">
        <div className="plt-wrap">
          <div className="plt-services-head">
            <h2 id="home-services-title">{isSpanish ? '¿En qué podemos ayudarle?' : 'Find the service you need'}</h2>
            <LocalizedA href="/services" className="plt-text-link">{isSpanish ? 'Todos los servicios' : 'Explore all services'}</LocalizedA>
          </div>
          <div className="plt-service-menu">
            {services.map(service => (
              <LocalizedA href={'/services/' + service.slug} key={service.slug}>
                <service.icon size={25} strokeWidth={1.6} aria-hidden="true" />
                <h3>{isSpanish ? service.es : service.en}</h3>
                <p>{isSpanish ? service.esDesc : service.enDesc}</p>
              </LocalizedA>
            ))}
          </div>
          <LocalizedA href="/reviews" className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#644718] underline underline-offset-4">
            {isSpanish ? 'Leer opiniones publicadas en Google' : 'Read Google customer reviews'}
          </LocalizedA>
        </div>
      </section>

      {/* High-intent service discovery for visitors and search crawlers. */}
      <section className="border-y border-slate-800 bg-slate-950 py-12 sm:py-16" aria-labelledby="popular-locksmith-requests">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="popular-locksmith-requests" className="font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Servicios de cerrajería más solicitados' : 'Popular Locksmith Requests'}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{isSpanish ? 'Servicio móvil disponible las 24 horas. Llame para confirmar cobertura, disponibilidad y precio para su trabajo.' : 'Need a locksmith today? Call our 24/7 team for same-day service, emergency assistance and an estimate for your job.'}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/services/automotive-locksmith', en: 'Car Lockouts & Replacement Keys', es: 'Apertura y llaves de auto' },
              { href: '/services/key-replacement', en: 'Car Key Replacement', es: 'Reemplazo de llaves' },
              { href: '/services/residential-locksmith', en: 'House Lockouts', es: 'Apertura de viviendas' },
              { href: '/services/lock-rekeying', en: 'Rekeying & Lock Changes', es: 'Cambio de combinación y cerraduras' },
            ].map(item => (
              <LocalizedA key={item.href} href={item.href} className="flex min-h-[64px] items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-900 p-4 font-semibold text-white hover:border-amber-400">
                <span>{isSpanish ? item.es : item.en}</span><ArrowRight className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
              </LocalizedA>
            ))}
          </div>
        </div>
      </section>

      {/* Answers to common questions before calling. */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16" aria-labelledby="locksmith-quick-answers">
        <h2 id="locksmith-quick-answers" className="font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Preguntas antes de llamar' : 'Quick Answers Before You Call'}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              question: isSpanish ? '¿Atienden las 24 horas?' : 'Are you available 24/7?',
              answer: isSpanish ? 'Sí. Pro Locksmith Tech recibe llamadas las 24 horas, los 7 días de la semana. La disponibilidad para su ubicación se confirma por teléfono.' : 'Yes. Pro Locksmith Tech accepts calls 24 hours a day, seven days a week. Call to confirm a technician is available for your location.'
            },
            {
              question: isSpanish ? '¿Pueden acudir a mi ubicación?' : 'Can a locksmith come to my location?',
              answer: isSpanish ? 'Sí. Nuestros cerrajeros acuden a su vehículo, hogar o negocio con servicio el mismo día y de emergencia.' : 'Yes. Our equipped locksmiths come directly to your location throughout South Florida, with same-day and emergency service available.'
            },
            {
              question: isSpanish ? '¿Pueden reemplazar una llave de auto perdida?' : 'Can you replace a lost car key?',
              answer: isSpanish ? 'Sí. Pro Locksmith Tech corta llaves de reemplazo y programa controles compatibles en la ubicación de su auto. Llame para confirmar el servicio para su vehículo.' : 'Yes. Pro Locksmith Tech cuts replacement car keys and programs compatible key fobs at your vehicle. Call to confirm service for your vehicle.'
            },
            {
              question: isSpanish ? '¿Pueden abrir autos y cerraduras sin causar daños?' : 'Can you unlock cars and doors without causing damage?',
              answer: isSpanish ? 'Sí. Nuestros técnicos cuentan con herramientas profesionales y capacitación en técnicas de apertura no destructivas para ayudar a abrir vehículos y cerraduras sin causar daños innecesarios siempre que sea posible. El método adecuado depende del tipo y estado de la cerradura.' : 'Yes. Our trained locksmith technicians use professional tools and non-destructive entry techniques to help unlock cars and doors without unnecessary damage whenever possible. The appropriate method depends on the lock type and its condition.'
            }
          ].map(item => (
            <article key={item.question} className="rounded-xl border border-slate-700 bg-slate-900 p-5">
              <h3 className="text-lg font-bold text-white">{item.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-7 text-center">
          <LocalizedA href={TEL} onClick={() => call('homepage_faq_call')} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-extrabold text-slate-950 hover:bg-amber-300">
            <Phone className="h-5 w-5" aria-hidden="true" />{isSpanish ? 'Llamar ahora' : 'Call for Locksmith Help'} · {PHONE}
          </LocalizedA>
        </div>
      </section>

      {/* All main South Florida cities served, organized by county and linking to full location pages. */}
      <section className="border-t border-slate-800 bg-slate-900/60 py-12 sm:py-16" aria-labelledby="south-florida-locksmith-areas">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="south-florida-locksmith-areas" className="font-heading text-2xl font-bold sm:text-3xl">
            {isSpanish ? 'Servicio de cerrajería móvil en todo el sur de Florida' : 'Mobile Locksmith Service Throughout South Florida'}
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">
            {isSpanish
              ? 'Pro Locksmith Tech ofrece servicio móvil de cerrajería las 24 horas en todo el sur de Florida, incluidas ciudades de los condados de Broward, Miami-Dade y Palm Beach. Vamos a su ubicación para ayudarle con llaves y cerraduras.'
              : 'Pro Locksmith Tech offers 24/7 mobile locksmith service throughout South Florida, including cities across Broward, Miami-Dade and Palm Beach counties. We come to your location for lockouts, car keys, key fobs, rekeying and other locksmith services.'}
          </p>
          <div className="mt-7 grid gap-7 md:grid-cols-3">
            {[
              {
                en: 'Broward County', es: 'Condado de Broward',
                cities: [
                  ['fort-lauderdale','Fort Lauderdale'], ['hollywood','Hollywood'], ['pembroke-pines','Pembroke Pines'],
                  ['coral-springs','Coral Springs'], ['pompano-beach','Pompano Beach'], ['miramar','Miramar'],
                  ['davie','Davie'], ['plantation','Plantation'], ['sunrise','Sunrise'],
                  ['deerfield-beach','Deerfield Beach'], ['tamarac','Tamarac'], ['coconut-creek','Coconut Creek'],
                  ['margate','Margate'], ['weston','Weston']
                ]
              },
              {
                en: 'Miami-Dade County', es: 'Condado de Miami-Dade',
                cities: [
                  ['miami','Miami'], ['miami-beach','Miami Beach'], ['hialeah','Hialeah'],
                  ['coral-gables','Coral Gables'], ['doral','Doral'], ['aventura','Aventura'],
                  ['kendall','Kendall'], ['north-miami','North Miami'], ['sunny-isles-beach','Sunny Isles Beach'],
                  ['south-miami','South Miami'], ['pinecrest','Pinecrest'], ['miami-gardens','Miami Gardens']
                ]
              },
              {
                en: 'Palm Beach County', es: 'Condado de Palm Beach',
                cities: [
                  ['west-palm-beach','West Palm Beach'], ['boca-raton','Boca Raton'], ['boynton-beach','Boynton Beach'],
                  ['delray-beach','Delray Beach'], ['jupiter','Jupiter'], ['wellington','Wellington'],
                  ['palm-beach-gardens','Palm Beach Gardens'], ['lake-worth','Lake Worth'],
                  ['royal-palm-beach','Royal Palm Beach'], ['greenacres','Greenacres'], ['riviera-beach','Riviera Beach']
                ]
              },
            ].map(county => (
              <div key={county.en} className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
                <h3 className="mb-4 text-lg font-bold text-white">{isSpanish ? county.es : county.en}</h3>
                <ul className="flex flex-wrap gap-2">
                  {county.cities.map(([slug, name]) => (
                    <li key={slug}>
                      <LocalizedA href={'/service-areas/' + slug}
                        className="inline-flex min-h-[40px] items-center rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-amber-200 hover:border-amber-400 hover:text-white">
                        {name}
                      </LocalizedA>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col items-start gap-4 rounded-2xl border border-amber-400/30 bg-slate-950 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-bold text-white">{isSpanish ? '¿No está seguro si atendemos su ciudad?' : 'Not sure if we serve your area?'}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {isSpanish ? 'Explore nuestras áreas de servicio o llámenos para solicitar un cerrajero en su ubicación.' : 'Explore our South Florida service areas or call to request a locksmith at your location.'}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <LocalizedA href="/service-areas"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-amber-400 px-5 py-3 text-center font-semibold text-amber-300 hover:bg-slate-800">
                {isSpanish ? 'Ver todas las áreas de servicio' : 'See All Cities & Service Areas'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LocalizedA>
              <LocalizedA href={TEL} onClick={() => call('homepage_south_florida_coverage_call')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-center font-extrabold text-slate-950 hover:bg-amber-300">
                <Phone className="h-4 w-4" aria-hidden="true" />{isSpanish ? 'Llamar para servicio el mismo día' : 'Call for Same-Day Service'} · {PHONE}
              </LocalizedA>
            </div>
          </div>
        </div>
      </section>

      <ReviewCarousel compact />

      <section className="plt-wrap py-12 sm:py-16" aria-labelledby="home-resources">
        <h2 id="home-resources" className="text-2xl font-bold sm:text-3xl">{isSpanish ? 'Guías de cerrajería' : 'Locksmith guides'}</h2>
        <div className="mt-3 flex flex-wrap gap-x-7">
          <LocalizedA className="plt-text-link" href="/tips/vehicle-key-compatibility">{isSpanish ? 'Compatibilidad de llaves de auto' : 'Vehicle key compatibility'}</LocalizedA>
          <LocalizedA className="plt-text-link" href="/tips/locksmith-pricing-factors">{isSpanish ? 'Factores que afectan el precio' : 'What affects locksmith pricing'}</LocalizedA>
          <LocalizedA className="plt-text-link" href="/tips">{isSpanish ? 'Todas las guías' : 'All locksmith guides'}</LocalizedA>
        </div>
      </section>

      <section className="below-fold-section mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img src={getServiceImage('lock-rekeying').src} srcSet={getServiceImage('lock-rekeying').srcSet} sizes="(max-width: 767px) 100vw, 50vw" width={960} height={720} alt={isSpanish ? 'Instalación de cerradura residencial' : 'Residential lock service'} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? 'Llámenos. Nosotros vamos.' : 'Call Us. We Come to You.'}</h2>
            <p className="text-base leading-7 text-slate-300">
              {isSpanish
                ? 'Díganos qué servicio necesita. Nuestro equipo le ayudará a coordinar un cerrajero móvil para su ubicación.'
                : 'Tell us what locksmith service you need. Our team will help arrange mobile service at your location.'}
            </p>
            <p className="text-base font-semibold text-amber-300">{isSpanish ? 'Atención disponible las 24 horas' : 'Available 24 hours a day'}</p>
            <LocalizedA href={TEL} onClick={() => call('homepage_mid_call')}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-base font-bold text-slate-950 hover:bg-amber-300 sm:w-auto">
              <Phone className="h-5 w-5" /> {isSpanish ? 'Llamar' : 'Call'} {PHONE}
            </LocalizedA>
          </div>
        </div>
      </section>

      <section className="below-fold-section border-y border-slate-800 bg-slate-900/60 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? 'Servicio móvil en el sur de Florida' : 'Mobile Locksmiths Across South Florida'}</h2>
              <p className="text-base leading-7 text-slate-300">
                {isSpanish
                  ? 'Atendemos áreas de Broward, Miami-Dade y Palm Beach. Consulte las ciudades que cubrimos y llame para confirmar la disponibilidad en su ubicación.'
                  : 'We serve areas across Broward, Miami-Dade and Palm Beach counties. Browse our city directory and call to confirm service at your location.'}
              </p>
              <LocalizedA href="/service-areas" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-amber-400/60 px-5 py-3 font-semibold text-amber-300 hover:bg-slate-800">
                {isSpanish ? 'Ver ciudades atendidas' : 'View service areas'} <ArrowRight className="h-4 w-4" />
              </LocalizedA>
            </div>
            <img src={getServiceImage('commercial-locksmith').src} srcSet={getServiceImage('commercial-locksmith').srcSet} sizes="(max-width: 767px) 100vw, 50vw" width={960} height={720} alt={isSpanish ? 'Equipo de servicio móvil de cerrajería' : 'Mobile locksmith team'} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 text-center sm:py-16">
        <KeyRound className="mx-auto mb-4 h-9 w-9 text-amber-400" aria-hidden="true" />
        <h2 className="mb-3 font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? '¿Necesita ayuda con una cerradura o una llave?' : 'Need Help With a Lock or Key?'}</h2>
        <p className="mb-6 text-base leading-7 text-slate-300">{isSpanish ? 'Estamos disponibles las 24 horas. Llámenos ahora.' : 'We’re available around the clock. Give us a call.'}</p>
        <LocalizedA href={TEL} onClick={() => call('homepage_final_call')} className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-lg font-extrabold text-slate-950 hover:bg-amber-300 sm:w-auto">
          <Phone className="h-6 w-6" /> {PHONE}
        </LocalizedA>
      </section>
    </div>
  );
}
