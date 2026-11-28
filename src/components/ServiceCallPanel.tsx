import { Phone } from 'lucide-react';
import { TEL } from '../config/business';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';
import { LocalizedA } from './LocalizedA';

const SERVICE_CONVERSION_PROMISES: Record<string, { en: string; es: string }> = {
  'automotive-locksmith': {
    en: 'Locked out, missing your keys or dealing with a key fob problem? We bring mobile locksmith equipment to your vehicle.',
    es: '¿No puede abrir su auto, perdió las llaves o tiene problemas con el control? Llevamos nuestro equipo de cerrajería hasta su vehículo.',
  },
  'key-replacement': {
    en: 'Lost your only car key? We cut and program compatible replacements at your vehicle, often without a dealership visit.',
    es: '¿Perdió la única llave de su auto? Cortamos y programamos reemplazos compatibles junto a su vehículo, sin necesidad de visitar el concesionario en muchos casos.',
  },
  'key-duplication': {
    en: 'Need a spare key? Our mobile technicians can cut compatible duplicates and program supported vehicle keys on site.',
    es: '¿Necesita una copia? Nuestros técnicos pueden cortar llaves compatibles y programar llaves de auto admitidas en el lugar.',
  },
  'emergency-lockout-service': {
    en: 'Locked out of your car, home or business? Call our 24/7 dispatch team for mobile locksmith assistance.',
    es: '¿Se quedó fuera de su auto, casa o negocio? Llame a nuestro equipo de despacho 24/7 para solicitar servicio móvil.',
  },
  'emergency-locksmith-service': {
    en: 'A broken key, failed lock or unexpected lockout does not have to disrupt your day. Our mobile locksmith team is available 24/7.',
    es: 'Una llave rota, una cerradura averiada o una apertura urgente no tiene por qué interrumpir su día. Nuestro equipo móvil atiende llamadas 24/7.',
  },
  'residential-locksmith': {
    en: 'From house lockouts to rekeying and new deadbolts, our locksmiths bring the right tools to your door.',
    es: 'Desde aperturas de viviendas hasta cambios de combinación y cerraduras nuevas, nuestros cerrajeros llevan el equipo hasta su puerta.',
  },
  'lock-rekeying': {
    en: 'Moved, lost a key or need to change access? Rekeying compatible locks gives you new working keys without replacing every lock.',
    es: '¿Se mudó, perdió una llave o necesita cambiar el acceso? Podemos cambiar la combinación de cerraduras compatibles sin reemplazarlas todas.',
  },
  'lock-repair': {
    en: 'A sticking, loose or damaged lock may be repairable. We inspect the hardware at your location and explain your options.',
    es: 'Una cerradura atascada, floja o dañada puede tener reparación. Revisamos el mecanismo en su ubicación y le explicamos las opciones.',
  },
  'lock-replacement': {
    en: 'Need a new lock after wear, damage or a move? We install suitable replacement hardware at your property.',
    es: '¿Necesita una cerradura nueva por desgaste, daño o una mudanza? Instalamos herrajes de reemplazo adecuados en su propiedad.',
  },
  'lock-installation': {
    en: 'Upgrade your entry hardware without arranging a separate trip. We come to your home or business for on-site installation.',
    es: 'Mejore las cerraduras de sus entradas sin desplazarse. Vamos a su casa o negocio para realizar la instalación.',
  },
  'security-hardware': {
    en: 'Better hardware starts with the right fit. We assess compatible lock and door options at your location.',
    es: 'Una buena instalación empieza por elegir los herrajes adecuados. Evaluamos opciones compatibles para sus puertas y cerraduras en su ubicación.',
  },
  'commercial-locksmith': {
    en: 'Storefront door not securing, or business keys need changing? We help shops and offices with mobile lock repair, rekeying and installation.',
    es: '¿La puerta de su negocio no cierra bien o necesita cambiar las llaves? Ayudamos a comercios y oficinas con reparaciones, cambios de combinación e instalaciones móviles.',
  },
};

export function ServiceCallPanel({ slug }: { slug: string }) {
  const { isSpanish } = useLanguage();
  const message = SERVICE_CONVERSION_PROMISES[slug];
  if (!message) return null;

  return (
    <section className="rounded-2xl border border-amber-400/35 bg-slate-950 p-6 sm:p-8" aria-labelledby="service-direct-help">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 id="service-direct-help" className="font-heading text-xl font-bold text-white sm:text-2xl">
            {isSpanish ? 'Soluciones de cerrajería en su ubicación' : 'Locksmith help where you need it'}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
            {isSpanish ? message.es : message.en}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {isSpanish
              ? 'Servicio móvil el mismo día y atención de emergencia las 24 horas en Miami-Dade, Broward y Palm Beach.'
              : 'Same-day mobile service and 24/7 emergency assistance across Miami-Dade, Broward and Palm Beach.'}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <LocalizedA href={TEL}
            onClick={() => trackPhoneClick({ ctaLocation: 'service_benefit_call', pagePath: isSpanish ? `/es/services/${slug}` : `/services/${slug}`, serviceCategory: slug })}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-extrabold text-slate-950 hover:bg-amber-300">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {isSpanish ? 'Llamar para solicitar servicio' : 'Call for locksmith service'}
          </LocalizedA>
          <LocalizedA href="/reviews" className="inline-flex min-h-11 items-center justify-center text-center text-sm font-semibold text-amber-300 underline underline-offset-4">
            {isSpanish ? 'Ver opiniones reales de clientes' : 'Read real customer reviews'}
          </LocalizedA>
        </div>
      </div>
    </section>
  );
}
