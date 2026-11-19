import React from 'react';
import { Phone, Car, Home, Building2, KeyRound, ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { getServiceImage } from '../assets/images/serviceImages';
import { trackPhoneClick } from '../utils/analytics';
import { ReviewCarousel } from '../components/ReviewCarousel';

interface HomePageProps { onNavigate: (path: string) => void; }
const TEL = 'tel:+17542616528';
const PHONE = '(754) 261-6528';

const services = [
  { slug: 'automotive-locksmith', en: 'Car Lockouts & Keys', es: 'Apertura y llaves de autos', enDesc: 'Locked out or lost your keys? We come to your vehicle.', esDesc: '¿Quedó fuera de su auto o perdió sus llaves? Vamos hasta usted.', img: getServiceImage('automotive-locksmith').src, srcSet: getServiceImage('automotive-locksmith').srcSet, icon: Car },
  { slug: 'residential-locksmith', en: 'Home Locksmith', es: 'Cerrajería residencial', enDesc: 'House lockouts, rekeying and new door locks.', esDesc: 'Aperturas de viviendas, cambios de combinación e instalación de cerraduras.', img: getServiceImage('residential-locksmith').src, srcSet: getServiceImage('residential-locksmith').srcSet, icon: Home },
  { slug: 'commercial-locksmith', en: 'Business Locksmith', es: 'Cerrajería comercial', enDesc: 'Lock service for offices, shops and businesses.', esDesc: 'Servicios de cerraduras para oficinas, tiendas y negocios.', img: getServiceImage('commercial-locksmith').src, srcSet: getServiceImage('commercial-locksmith').srcSet, icon: Building2 },
];

export function HomePage({ onNavigate: _onNavigate }: HomePageProps) {
  const { isSpanish } = useLanguage();
  const call = (where: string) => trackPhoneClick({ ctaLocation: where, pagePath: isSpanish ? '/es' : '/' });
  return (
    <div className="bg-slate-950 text-white">
      <SEOHead
        title={isSpanish ? 'Cerrajero móvil 24/7 en el sur de Florida | Pro Locksmith Tech' : '24/7 Mobile Locksmith South Florida | Pro Locksmith Tech'}
        description={isSpanish
          ? 'Cerrajería móvil las 24 horas en el sur de Florida: aperturas de autos y casas, llaves de auto, programación de controles y cambio de cerraduras. Llame al (754) 261-6528.'
          : '24/7 mobile locksmith in South Florida. Car lockouts, replacement car keys, key fob programming, home lockouts and rekeying. Call (754) 261-6528.'}
        canonicalPath="/"
      />
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-sm font-semibold text-amber-300">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {isSpanish ? 'Servicio móvil 24/7, día y noche · Vamos hasta usted' : '24/7 day and night · We Come to You'}
            </p>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              {isSpanish ? '¿Necesita un cerrajero en el sur de Florida?' : 'Need a Locksmith in South Florida?'}
              <span className="mt-2 block text-amber-400">{isSpanish ? 'Llámenos ahora.' : 'We’re One Call Away.'}</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              {isSpanish
                ? 'Aperturas de autos y casas, llaves de auto, programación de controles y cambio de cerraduras. Servicio móvil en el sur de Florida, todos los días.'
                : 'Car and home lockouts, replacement car keys, key fob programming and lock changes. Mobile service throughout South Florida, day or night.'}
            </p>
            <LocalizedA href={TEL} onClick={() => call('homepage_hero_call')}
              className="inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 text-lg font-extrabold text-slate-950 shadow-lg hover:bg-amber-300 sm:w-auto">
              <Phone className="h-6 w-6" aria-hidden="true" />
              {isSpanish ? 'LLAME AHORA' : 'CALL NOW'} · {PHONE}
            </LocalizedA>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-400" />{isSpanish ? 'Servicio móvil' : 'Mobile service'}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-400" />{isSpanish ? 'Sur de Florida' : 'South Florida'}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-400" />{isSpanish ? '24/7 día y noche' : '24/7 day and night'}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">
            <picture>
              <source type="image/avif" srcSet="/home-images/mobile-van-360.avif 360w, /home-images/mobile-van-480.avif 480w, /home-images/mobile-van-720.avif 720w, /home-images/mobile-van-960.avif 960w" sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 40px), 50vw" />
              <img src="/home-images/mobile-van-720.webp" srcSet="/home-images/mobile-van-360.webp 360w, /home-images/mobile-van-480.webp 480w, /home-images/mobile-van-720.webp 720w, /home-images/mobile-van-960.webp 960w" sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 40px), 50vw" width={960} height={720} alt={isSpanish ? 'Camioneta de servicio móvil con equipos de cerrajería' : 'Illustrative mobile locksmith service van with equipment'} className="aspect-[4/3] w-full object-cover" fetchPriority="high" loading="eager" decoding="sync" />
            </picture>
          </div>
        </div>
      </section>

      <section className="below-fold-section border-t border-slate-800 bg-slate-900/60 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-400">{isSpanish ? 'Nuestros servicios' : 'Our services'}</p>
            <h2 className="font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? '¿En qué podemos ayudarle?' : 'How Can We Help?'}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <LocalizedA href={'/services/' + service.slug} key={service.slug}
                className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 transition-colors hover:border-amber-400">
                <img src={service.img} srcSet={service.srcSet} sizes="(max-width: 767px) 100vw, 33vw" width={960} height={540} alt={isSpanish ? service.es : service.en} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-bold">{isSpanish ? service.es : service.en}</h3>
                  <p className="min-h-[56px] text-base leading-6 text-slate-300">{isSpanish ? service.esDesc : service.enDesc}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-amber-300">
                    {isSpanish ? 'Ver servicio' : 'View service'} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </LocalizedA>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-slate-300">
            <span className="font-semibold">{isSpanish ? 'Opiniones reales publicadas en Google' : 'Real Google customer reviews'}</span>
            <LocalizedA href="/reviews" className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200">
              {isSpanish ? 'Ver opiniones' : 'Read reviews'}
            </LocalizedA>
          </div>
          <div className="mt-7 text-center">
            <LocalizedA href="/services" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-base font-semibold text-white hover:border-amber-400">
              {isSpanish ? 'Ver todos los servicios' : 'Explore all services'} <ArrowRight className="h-4 w-4" />
            </LocalizedA>
          </div>
        </div>
      </section>

      {/* High-intent service discovery for visitors and search crawlers. */}
      <section className="border-y border-slate-800 bg-slate-950 py-12 sm:py-16" aria-labelledby="popular-locksmith-requests">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="popular-locksmith-requests" className="font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Servicios de cerrajería más solicitados' : 'Popular Locksmith Requests'}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{isSpanish ? 'Servicio móvil disponible las 24 horas. Llame para confirmar cobertura, disponibilidad y precio para su trabajo.' : 'Our mobile locksmith team takes calls 24/7. Call to confirm service coverage, availability and an estimate for your specific job.'}</p>
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

      {/* Concise, visible answers are useful to callers and machine-readable search systems. */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16" aria-labelledby="locksmith-quick-answers">
        <h2 id="locksmith-quick-answers" className="font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Preguntas antes de llamar' : 'Quick Answers Before You Call'}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              question: isSpanish ? '¿Atienden las 24 horas?' : 'Are you available 24/7?',
              answer: isSpanish ? 'Sí. Pro Locksmith Tech recibe llamadas las 24 horas, los 7 días de la semana. La disponibilidad para su ubicación se confirma por teléfono.' : 'Yes. Pro Locksmith Tech accepts calls 24 hours a day, seven days a week. Call to confirm a technician is available for your location.'
            },
            {
              question: isSpanish ? '¿Tienen una tienda abierta al público?' : 'Do you have a walk-in shop?',
              answer: isSpanish ? 'No. Somos un servicio móvil y vamos hasta su vehículo, hogar o negocio.' : 'No. We are a mobile service-area business. We travel to your vehicle, home or business rather than operating a public storefront.'
            },
            {
              question: isSpanish ? '¿Qué información debo tener lista?' : 'What should I have ready when I call?',
              answer: isSpanish ? 'Indique su ciudad y ubicación, el tipo de cerradura o vehículo, y el servicio que necesita. Puede ser necesario verificar la autorización.' : 'Have your city and location, lock or vehicle details, and the problem you need solved. Proof of authorization may be required before service.'
            },
            {
              question: isSpanish ? '¿Cuánto cuesta un cerrajero móvil?' : 'How much does mobile locksmith service cost?',
              answer: isSpanish ? 'El costo depende del trabajo, las piezas y la ubicación. Llame para solicitar un presupuesto y confirmar los cargos antes de autorizar el trabajo.' : 'Pricing depends on the service, parts and location. Call for an estimate and confirm applicable charges before authorizing work.'
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

      <ReviewCarousel compact />

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
