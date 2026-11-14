import React from 'react';
import { Phone, Car, Home, Building2, KeyRound, ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { locksmithVanImg, carKeyProgImg, techRekeyingImg, locksmithCrewImg } from '../assets/images';
import { trackPhoneClick } from '../utils/analytics';

interface HomePageProps { onNavigate: (path: string) => void; }
const TEL = 'tel:+17542616528';
const PHONE = '(754) 261-6528';

const services = [
  { slug: 'automotive-locksmith', en: 'Car Lockouts & Keys', es: 'Apertura y llaves de autos', enDesc: 'Locked out or lost your keys? We come to your vehicle.', esDesc: '¿Quedó fuera de su auto o perdió sus llaves? Vamos hasta usted.', img: carKeyProgImg, icon: Car },
  { slug: 'residential-locksmith', en: 'Home Locksmith', es: 'Cerrajería residencial', enDesc: 'House lockouts, rekeying and new door locks.', esDesc: 'Aperturas de viviendas, cambios de combinación e instalación de cerraduras.', img: techRekeyingImg, icon: Home },
  { slug: 'commercial-locksmith', en: 'Business Locksmith', es: 'Cerrajería comercial', enDesc: 'Lock service for offices, shops and businesses.', esDesc: 'Servicios de cerraduras para oficinas, tiendas y negocios.', img: locksmithCrewImg, icon: Building2 },
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
              {isSpanish ? 'Servicio móvil 24/7 · Vamos hasta usted' : '24/7 Mobile Service · We Come to You'}
            </p>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              {isSpanish ? '¿Necesita un cerrajero?' : 'Need a Locksmith?'}
              <span className="mt-2 block text-amber-400">{isSpanish ? 'Estamos a una llamada.' : 'We’re One Call Away.'}</span>
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
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-400" />24/7/365</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">
            <img src={locksmithVanImg} alt={isSpanish ? 'Camioneta de servicio móvil con equipos de cerrajería' : 'Mobile locksmith service van with professional equipment'} className="aspect-[4/3] w-full object-cover" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/60 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-400">{isSpanish ? 'Nuestros servicios' : 'Our services'}</p>
            <h2 className="font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? '¿En qué podemos ayudarle?' : 'How Can We Help?'}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <LocalizedA href={'/services/' + service.slug} key={service.slug}
                className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 transition-colors hover:border-amber-400">
                <img src={service.img} alt={isSpanish ? service.es : service.en} loading="lazy" className="aspect-[16/9] w-full object-cover" />
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
          <div className="mt-7 text-center">
            <LocalizedA href="/services" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-base font-semibold text-white hover:border-amber-400">
              {isSpanish ? 'Ver todos los servicios' : 'Explore all services'} <ArrowRight className="h-4 w-4" />
            </LocalizedA>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img src={techRekeyingImg} alt={isSpanish ? 'Instalación de cerradura residencial' : 'Residential lock service'} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
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

      <section className="border-y border-slate-800 bg-slate-900/60 py-12 sm:py-16">
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
            <img src={locksmithCrewImg} alt={isSpanish ? 'Equipo de servicio móvil de cerrajería' : 'Mobile locksmith team'} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:py-12">
        <div className="max-w-3xl">
          <h2 className="mb-3 font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Experiencias compartidas por clientes' : 'Customer-Reported Service Examples'}</h2>
          <p className="mb-5 text-base leading-7 text-slate-300">{isSpanish ? 'Algunos ejemplos anónimos basados en comentarios de clientes; no se muestran direcciones ni datos personales.' : 'Anonymous examples based on customer feedback, without customer names or addresses.'}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="mb-2 text-lg font-bold">{isSpanish ? 'Apertura de vivienda' : 'Home Lockout'}</h3>
            <p className="text-base leading-7 text-slate-300">{isSpanish ? 'Una persona compartió que nuestro técnico llegó pronto y ayudó a abrir la puerta de su casa en pocos minutos.' : 'A customer reported that our technician arrived quickly and helped open their house within minutes.'}</p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="mb-2 text-lg font-bold">{isSpanish ? 'Asistencia para abrir una cerradura' : 'Lockout Assistance'}</h3>
            <p className="text-base leading-7 text-slate-300">{isSpanish ? 'Otra persona destacó la buena comunicación y el trato profesional al recibir ayuda para abrir una cerradura.' : 'Another customer praised the clear communication and professional service they received during an unlocking job.'}</p>
          </article>
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
