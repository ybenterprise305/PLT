import React from 'react';
import { Phone, MapPin, ArrowRight, Clock, Car, Home, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA, getAllCities, getCityBySlug, getCountyBySlug } from '../data/locationsData';
import { SPANISH_SERVICES, SPANISH_FAQS } from '../data/spanishTranslations';
import { carKeyProgImg, techRekeyingImg, locksmithVanImg } from '../assets/images';
import { trackPhoneClick } from '../utils/analytics';

interface Props { path: string; }
const PHONE = '(754) 261-6528';
const TEL = 'tel:+17542616528';


const serviceFallbacks: Record<string, {name:string; desc:string; features:string[]}> = {
  'emergency-lockout-service': {name:'Aperturas de emergencia', desc:'Apertura de puertas de autos, viviendas y negocios cuando no puede entrar.',features:['Asistencia a domicilio','Aperturas de autos, viviendas y negocios']},
  'residential-locksmith': {name:'Cerrajería residencial',desc:'Instalación y reparación de cerraduras para viviendas.',features:['Cerraduras para viviendas','Cerrojos y cambio de combinación']},
  'commercial-locksmith': {name:'Cerrajería comercial',desc:'Servicio de cerraduras y herrajes para locales y oficinas.',features:['Cerraduras de comercios','Herrajes y mantenimiento']},
  'automotive-locksmith': {name:'Cerrajería de autos',desc:'Apertura de vehículos, corte de llaves y programación de controles compatibles.',features:['Apertura de autos','Llaves y controles para vehículos']},
  'lock-repair': {name:'Reparación de cerraduras',desc:'Asistencia con cerraduras que se atascan o funcionan mal.',features:['Diagnóstico de fallas','Reparación de cerraduras']},
  'lock-replacement': {name:'Reemplazo de cerraduras',desc:'Cambio de cerraduras dañadas o antiguas en viviendas y negocios.',features:['Cambio de cerraduras','Instalación de herrajes']},
  'lock-rekeying': {name:'Cambio de combinación de cerraduras',desc:'Modificamos cerraduras compatibles para que funcionen con nuevas llaves.',features:['Cambio de combinación','Control de acceso con llaves nuevas']},
  'key-duplication': {name:'Duplicado de llaves',desc:'Copias de llaves compatibles para autos y cerraduras.',features:['Copias de llaves','Corte de llaves compatibles']},
  'key-replacement': {name:'Reemplazo de llaves',desc:'Ayuda cuando pierde o rompe una llave y necesita un reemplazo.',features:['Llaves de reemplazo','Llaves para autos y cerraduras compatibles']},
  'lock-installation': {name:'Instalación de cerraduras',desc:'Instalación de cerraduras y cerrojos en puertas residenciales y comerciales.',features:['Cerraduras nuevas','Cerrojos y herrajes']},
  'security-hardware': {name:'Herrajes de seguridad',desc:'Instalación y mantenimiento de herrajes de seguridad para puertas.',features:['Herrajes para puertas','Soluciones de control de acceso']},
  'emergency-locksmith-service': {name:'Cerrajero de emergencia 24 horas',desc:'Servicio móvil de cerrajería disponible a cualquier hora.',features:['Asistencia móvil las 24 horas','Aperturas y problemas de cerraduras']}
};

export function SpanishContentPage({ path }: Props) {
  const service = path.startsWith('/services/') ? SERVICES_DATA.find(s => s.slug === path.replace('/services/', '')) : undefined;
  const cityMatch = path.startsWith('/service-areas/') ? getCityBySlug(path.replace('/service-areas/', '')) : undefined;
  const county = path.startsWith('/service-areas/') ? getCountyBySlug(path.replace('/service-areas/', '')) : undefined;
  const details = service ? SPANISH_SERVICES[service.slug] : undefined;
  const fallback = service ? serviceFallbacks[service.slug] : undefined;
  const call = (location: string) => trackPhoneClick({ ctaLocation: location, pagePath: '/es' + path });
  const cta = (location: string) => (
    <LocalizedA href={TEL} onClick={() => call(location)} className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-base font-extrabold text-slate-950 hover:bg-amber-300 sm:w-auto">
      <Phone className="h-5 w-5" /> LLAMAR AHORA · {PHONE}
    </LocalizedA>
  );
  const sections: Record<string, {title:string; desc:string}> = {
    '/services': {title:'Servicios de cerrajería móvil',desc:'Asistencia móvil para autos, viviendas y negocios en el sur de Florida.'},
    '/service-areas': {title:'Ciudades donde ofrecemos servicio',desc:'Cerrajería móvil en áreas de Broward, Miami-Dade y Palm Beach. Consulte nuestra cobertura.'},
    '/about': {title:'Acerca de Pro Locksmith Tech',desc:'Somos un servicio de cerrajería móvil. Nuestros técnicos se desplazan hasta su vehículo, vivienda o negocio en el sur de Florida.'},
    '/contact': {title:'Contacte a Pro Locksmith Tech',desc:'¿Necesita un cerrajero móvil? Llámenos las 24 horas del día. Vamos hasta su ubicación.'},
    '/faq': {title:'Preguntas frecuentes sobre cerrajería',desc:'Respuestas claras a las preguntas más comunes sobre nuestros servicios móviles.'}
  };
  const info = sections[path];
  const title = service ? (details?.name || fallback?.name || 'Servicio de cerrajería') : cityMatch ? 'Cerrajero móvil en ' + cityMatch.city.name : county ? 'Cerrajería móvil en ' + county.name : info?.title || 'Cerrajería móvil';
  const desc = service ? (details?.shortDescription || fallback?.desc || 'Servicio de cerrajería móvil las 24 horas en el sur de Florida.') : cityMatch ? 'Servicio móvil de aperturas, llaves y cerraduras en ' + cityMatch.city.name + ', Florida.' : county ? 'Cerrajería móvil para autos, casas y negocios en ' + county.name + ', Florida.' : info?.desc || '';
  const image = service?.category === 'automotive' ? carKeyProgImg : service ? techRekeyingImg : locksmithVanImg;

  return (
    <div className="min-h-screen bg-slate-950 pb-12 text-white">
      <SEOHead title={title + ' | Pro Locksmith Tech'} description={desc + ' Llame al ' + PHONE + '.'} canonicalPath={path} />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300"><Clock className="h-4 w-4"/>Cerrajería móvil 24/7 · Sur de Florida</p>
            <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
            <p className="text-lg leading-8 text-slate-200">{desc}</p>
            {cta('spanish_page_hero_call')}
          </div>
          <img src={image} alt={service ? 'Equipo de servicio de cerrajería' : 'Camioneta de cerrajería móvil'} className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {path === '/services' && (
        <section className="mx-auto max-w-6xl px-5 py-5">
          <h2 className="mb-5 font-heading text-2xl font-bold">¿Qué servicio necesita?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map(s => (
              <LocalizedA key={s.slug} href={'/services/' + s.slug} className="rounded-xl border border-slate-700 bg-slate-900 p-5 hover:border-amber-400">
                <h3 className="mb-2 text-lg font-bold">{SPANISH_SERVICES[s.slug]?.name || serviceFallbacks[s.slug]?.name || 'Servicio de cerrajería'}</h3>
                <p className="text-base leading-7 text-slate-300">{SPANISH_SERVICES[s.slug]?.shortDescription || serviceFallbacks[s.slug]?.desc || 'Servicio móvil a domicilio.'}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-semibold text-amber-300">Ver detalles <ArrowRight className="h-4 w-4"/></span>
              </LocalizedA>
            ))}
          </div>
        </section>
      )}

      {service && (
        <section className="mx-auto max-w-6xl px-5 py-7">
          <h2 className="mb-5 font-heading text-2xl font-bold">¿Cómo podemos ayudarle?</h2>
          <p className="mb-6 max-w-3xl text-base leading-8 text-slate-300">{details?.fullDescription || desc}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {(details?.features || fallback?.features || []).map((feature, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4 text-base"><ShieldCheck className="h-5 w-5 shrink-0 text-amber-400"/>{feature}</div>
            ))}
          </div>
          <div className="mt-8">{cta('spanish_service_call')}</div>
        </section>
      )}

      {path === '/service-areas' && (
        <section className="mx-auto max-w-6xl px-5 py-6">
          {COUNTIES_DATA.map(county => (
            <div key={county.slug} className="mb-8">
              <h2 className="mb-4 font-heading text-2xl font-bold"><LocalizedA href={'/service-areas/' + county.slug} className="hover:text-amber-400">{county.name}</LocalizedA></h2>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {county.majorCities.map(city => (
                  <LocalizedA href={'/service-areas/' + city.slug} key={city.slug} className="flex min-h-[48px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-base hover:border-amber-400"><MapPin className="h-4 w-4 text-amber-400"/>{city.name}</LocalizedA>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {(cityMatch || county) && (
        <section className="mx-auto max-w-6xl px-5 py-7">
          <h2 className="mb-5 font-heading text-2xl font-bold">Servicios disponibles en esta zona</h2>
          <p className="mb-5 max-w-3xl text-base leading-8 text-slate-300">
            Podemos ayudarle con aperturas de autos y viviendas, llaves de auto y servicios de cerraduras. Nuestra empresa trabaja a domicilio, sin tienda de atención al público.
          </p>
          {cityMatch && (
            <div className="mb-6 rounded-xl border border-slate-700 bg-slate-900 p-5">
              <p className="mb-2 text-sm font-bold text-amber-300">Zonas de referencia de {cityMatch.city.name}</p>
              <p className="text-base leading-7 text-slate-300">{cityMatch.city.popularAreas.slice(0, 5).join(' · ')}</p>
              <p className="mt-2 text-sm text-slate-400">Mencionamos estas zonas como referencia geográfica; llame para confirmar la disponibilidad en su dirección.</p>
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {name:'Cerrajería de autos', slug:'automotive-locksmith'},
              {name:'Aperturas de emergencia',slug:'emergency-lockout-service'},
              {name:'Cambio de combinación de cerraduras',slug:'lock-rekeying'},
              {name:'Reemplazo de cerraduras',slug:'lock-replacement'}
            ].map(s=>(
              <LocalizedA key={s.slug} href={'/services/' + s.slug} className="rounded-xl border border-slate-700 bg-slate-900 p-4 font-semibold hover:border-amber-400">{s.name} <ArrowRight className="inline h-4 w-4 text-amber-300"/></LocalizedA>
            ))}
          </div>
          <div className="mt-7">{cta('spanish_city_call')}</div>
          {county && <div className="mt-8"><h2 className="mb-3 text-xl font-bold">Ciudades atendidas</h2><div className="flex flex-wrap gap-2">{county.majorCities.map(city=><LocalizedA key={city.slug} href={'/service-areas/'+city.slug} className="rounded-lg border border-slate-700 px-3 py-2 text-sm">{city.name}</LocalizedA>)}</div></div>}
          {cityMatch && <p className="mt-8 text-base text-slate-300">Consulte más ciudades en <LocalizedA className="font-semibold text-amber-300 underline" href="/service-areas">nuestro directorio de cobertura</LocalizedA>.</p>}
        </section>
      )}

      {path === '/faq' && (
        <section className="mx-auto max-w-4xl space-y-4 px-5 py-5">
          {SPANISH_FAQS.map((item,i) => (
            <article className="rounded-xl border border-slate-700 bg-slate-900 p-5" key={item.id || i}>
              <h2 className="mb-2 text-lg font-bold">{item.question}</h2><p className="text-base leading-7 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </section>
      )}

      {(path === '/about' || path === '/contact') && (
        <section className="mx-auto max-w-4xl space-y-5 px-5 py-6">
          <h2 className="font-heading text-2xl font-bold">Cerrajería móvil para su tranquilidad</h2>
          <p className="text-base leading-8 text-slate-300">Ofrecemos servicios de cerrajería para vehículos, viviendas y comercios. Nuestro equipo se desplaza directamente a la ubicación del cliente. Estamos disponibles las 24 horas del día, todos los días del año.</p>
          <p className="text-base leading-8 text-slate-300">No tenemos una tienda abierta al público. Para consultar disponibilidad y solicitar servicio, llámenos.</p>
          {cta('spanish_company_call')}
        </section>
      )}
    </div>
  );
}
