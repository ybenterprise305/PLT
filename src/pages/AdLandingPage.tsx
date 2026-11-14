import React from 'react';
import { Phone, KeyRound, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NotFoundPage } from './NotFoundPage';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { AD_CAMPAIGNS, getAdCampaignBySlug } from '../data/adLandingPagesData';
import { locksmithVanImg, carKeyProgImg, techRekeyingImg, keyMachineImg } from '../assets/images';
import { trackPhoneClick } from '../utils/analytics';

interface AdLandingPageProps { slug: string; onNavigate: (path: string) => void; }
const PHONE = '(754) 261-6528';
const TEL = 'tel:+17542616528';

const copy: Record<string, {en: string; es: string; enText: string; esText: string; image: string; imageAltEn: string; imageAltEs: string}> = {
  'car-lockout': {en: 'Locked Out of Your Car?', es: '¿Dejó las llaves dentro del auto?', enText: 'Mobile car unlocking across South Florida. Call our 24/7 team and we’ll come to you.', esText: 'Apertura de autos a domicilio en el sur de Florida. Llámenos a cualquier hora.', image: carKeyProgImg, imageAltEn: 'Automotive locksmith service', imageAltEs: 'Servicio de cerrajería para autos'},
  'car-key-replacement': {en: 'Lost Your Car Keys?', es: '¿Perdió las llaves de su auto?', enText: 'Replacement car keys, cutting and programming at your location.', esText: 'Reemplazo, corte y programación de llaves de auto en su ubicación.', image: carKeyProgImg, imageAltEn: 'Car key equipment', imageAltEs: 'Equipos para llaves de auto'},
  'house-lockout': {en: 'Locked Out of Your House?', es: '¿No puede entrar a su casa?', enText: 'Get mobile help with your home lockout. Call us any time.', esText: 'Le ayudamos a recuperar el acceso a su vivienda. Llámenos a cualquier hora.', image: techRekeyingImg, imageAltEn: 'Residential locksmith tools', imageAltEs: 'Herramientas de cerrajería residencial'},
  'lock-rekeying': {en: 'Need Your Locks Rekeyed?', es: '¿Necesita cambiar la combinación de sus cerraduras?', enText: 'Change which keys work in your existing locks with mobile rekeying service.', esText: 'Cambie las llaves que abren sus cerraduras actuales con servicio a domicilio.', image: techRekeyingImg, imageAltEn: 'Door lock service', imageAltEs: 'Servicio de cerraduras'},
  'commercial-locksmith': {en: 'Need a Locksmith for Your Business?', es: '¿Necesita un cerrajero para su negocio?', enText: 'Mobile locksmith services for storefronts, offices and businesses.', esText: 'Cerrajería móvil para locales, oficinas y negocios.', image: keyMachineImg, imageAltEn: 'Commercial locksmith tools', imageAltEs: 'Herramientas de cerrajería comercial'},
  'emergency-locksmith': {en: 'Need a Locksmith Right Now?', es: '¿Necesita un cerrajero ahora?', enText: '24/7 mobile locksmith assistance across South Florida.', esText: 'Asistencia de cerrajería móvil las 24 horas en el sur de Florida.', image: locksmithVanImg, imageAltEn: 'Mobile locksmith service van', imageAltEs: 'Camioneta de cerrajería móvil'},
  'smart-lock-installation': {en: 'Installing a Smart Lock?', es: '¿Quiere instalar una cerradura inteligente?', enText: 'Mobile installation of compatible smart and keypad door locks.', esText: 'Instalación a domicilio de cerraduras inteligentes y de teclado compatibles.', image: techRekeyingImg, imageAltEn: 'Door lock installation', imageAltEs: 'Instalación de cerradura'},
  'ignition-repair': {en: 'Trouble With Your Ignition?', es: '¿Problemas con el encendido de su auto?', enText: 'Call for mobile vehicle ignition and key assistance.', esText: 'Llámenos para recibir asistencia móvil con la llave o el encendido.', image: carKeyProgImg, imageAltEn: 'Automotive key service', imageAltEs: 'Servicio de llaves de autos'},
  'broken-key-extraction': {en: 'Key Broken in the Lock?', es: '¿Se rompió la llave en la cerradura?', enText: 'Mobile help with broken keys in vehicle or door locks.', esText: 'Extracción de llaves rotas en cerraduras de autos y puertas.', image: techRekeyingImg, imageAltEn: 'Professional lock tools', imageAltEs: 'Herramientas para cerraduras'},
  'deadbolt-installation': {en: 'Need a New Deadbolt?', es: '¿Necesita instalar un cerrojo?', enText: 'Mobile deadbolt and door hardware installation.', esText: 'Instalación a domicilio de cerrojos y herrajes para puertas.', image: techRekeyingImg, imageAltEn: 'Deadbolt installation', imageAltEs: 'Instalación de cerrojo'},
  'lock-change': {en: 'Need to Change Your Locks?', es: '¿Necesita cambiar las cerraduras?', enText: 'Replace damaged or outdated locks at your home or business.', esText: 'Reemplazamos cerraduras dañadas o antiguas en su vivienda o negocio.', image: techRekeyingImg, imageAltEn: 'Door lock change', imageAltEs: 'Cambio de cerradura'},
  'safe-lockout': {en: 'Locked Out of Your Safe?', es: '¿No puede abrir su caja fuerte?', enText: 'Call for safe access assistance from our mobile locksmith team.', esText: 'Llámenos para solicitar ayuda con la apertura de su caja fuerte.', image: keyMachineImg, imageAltEn: 'Specialist locksmith equipment', imageAltEs: 'Equipo especializado de cerrajería'},
  'storage-unit-lockout': {en: 'Locked Out of Your Storage Unit?', es: '¿No puede abrir su unidad de almacenamiento?', enText: 'Mobile assistance with storage unit locks and access.', esText: 'Asistencia móvil con cerraduras de unidades de almacenamiento.', image: techRekeyingImg, imageAltEn: 'Locksmith lock service', imageAltEs: 'Servicio de cerraduras'},
  'car-key-fob-programming': {en: 'Need a New Key Fob?', es: '¿Necesita un nuevo control para su auto?', enText: 'Replacement key fobs and compatible programming at your vehicle.', esText: 'Controles de reemplazo y programación compatible directamente en su vehículo.', image: carKeyProgImg, imageAltEn: 'Key fob programming equipment', imageAltEs: 'Equipo para programar controles de auto'},
  'lost-car-keys': {en: 'Lost All Your Car Keys?', es: '¿Perdió todas las llaves del auto?', enText: 'Call for new car keys made and programmed at your location.', esText: 'Llámenos para solicitar llaves nuevas cortadas y programadas en su ubicación.', image: carKeyProgImg, imageAltEn: 'Replacement car key tools', imageAltEs: 'Herramientas para reemplazar llaves de auto'}
};

export function AdLandingPage({ slug, onNavigate }: AdLandingPageProps) {
  const { isSpanish } = useLanguage();
  const campaign = getAdCampaignBySlug(slug);
  if (!campaign) return <NotFoundPage onNavigate={onNavigate} />;
  const item = copy[slug] || copy['emergency-locksmith'];
  const headline = isSpanish ? item.es : item.en;
  const short = isSpanish ? item.esText : item.enText;
  const pagePath = '/lp/' + slug;
  const call = (location: string) => trackPhoneClick({ ctaLocation: location, pagePath, campaignSlug: slug });
  const callButton = (location: string, wide = false) => (
    <LocalizedA href={TEL} onClick={() => call(location)}
      className={'inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 text-base font-extrabold text-slate-950 shadow-lg hover:bg-amber-300 ' + (wide ? 'w-full' : 'w-full sm:w-auto')}>
      <Phone className="h-5 w-5" aria-hidden="true" /> {isSpanish ? 'LLAMAR AHORA' : 'CALL NOW'} · {PHONE}
    </LocalizedA>
  );
  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-white lg:pb-0">
      <SEOHead
        title={isSpanish ? headline + ' | Pro Locksmith Tech' : headline + ' | Pro Locksmith Tech'}
        description={short + ' ' + (isSpanish ? 'Servicio móvil 24/7. Llame al ' : '24/7 mobile service. Call ') + PHONE + '.'}
        canonicalPath={pagePath}
        noIndex={true}
      />
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <LocalizedA href="/" className="flex min-w-0 items-center gap-2 text-base font-extrabold text-white">
            <KeyRound className="h-7 w-7 flex-none text-amber-400" /> <span>Pro Locksmith Tech</span>
          </LocalizedA>
          <LocalizedA href={TEL} onClick={() => call('ppc_header_call')} className="flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-400 px-3 py-2 font-bold text-slate-950">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">{isSpanish ? 'Llamar' : 'Call'}</span>
          </LocalizedA>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-sm font-semibold text-amber-300">
                <Clock className="h-4 w-4" /> {isSpanish ? 'Cerrajería móvil · 24/7' : 'Mobile Locksmith · 24/7'}
              </p>
              <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl">{headline}</h1>
              <p className="max-w-xl text-lg leading-8 text-slate-200">{short}</p>
              {callButton('ppc_hero_call')}
              <p className="text-sm font-medium text-slate-300">{isSpanish ? 'Llegada habitual en 15–20 minutos · Servicio móvil' : 'Typical 15–20 minute arrival · Mobile service'}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <img src={item.image} alt={isSpanish ? item.imageAltEs : item.imageAltEn}
                className="aspect-[16/11] w-full object-cover" fetchPriority="high" />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/65 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold sm:text-3xl">{isSpanish ? 'Por qué llamarnos' : 'Why Call Us?'}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {en: 'Available 24/7', es: 'Disponibles 24/7', enText: 'Call day or night.', esText: 'Llámenos a cualquier hora.'},
                {en: 'Mobile Service', es: 'Servicio a domicilio', enText: 'We come to your location.', esText: 'Vamos hasta su ubicación.'},
                {en: 'Locksmith Equipment', es: 'Equipo de cerrajería', enText: 'Tools and parts for many locksmith needs.', esText: 'Herramientas y piezas para distintos servicios.'}
              ].map((step, i) => (
                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5" key={i}>
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-base font-extrabold text-slate-950">{i + 1}</span>
                  <h3 className="mb-2 text-lg font-bold">{isSpanish ? step.es : step.en}</h3>
                  <p className="text-base leading-7 text-slate-300">{isSpanish ? step.esText : step.enText}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-lg">{callButton('ppc_process_call', true)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl space-y-5 px-4 py-12 text-center sm:px-6 sm:py-16">
          <CheckCircle2 className="mx-auto h-10 w-10 text-amber-400" aria-hidden="true" />
          <h2 className="font-heading text-2xl font-bold sm:text-4xl">{isSpanish ? '¿Necesita ayuda ahora?' : 'Need Help Right Now?'}</h2>
          <p className="text-lg text-slate-300">{isSpanish ? 'Estamos disponibles las 24 horas. Llámenos.' : 'We’re available around the clock. Call our mobile team.'}</p>
          {callButton('ppc_final_call')}
        </section>
      </main>
      <footer className="border-t border-slate-800 px-4 py-7 text-center text-sm text-slate-400">
        <p>Pro Locksmith Tech · {isSpanish ? 'Servicio móvil 24/7 en el sur de Florida' : '24/7 Mobile Locksmith Serving South Florida'}</p>
        <div className="mt-3 flex justify-center gap-5">
          <LocalizedA href="/privacy" className="underline hover:text-white">{isSpanish ? 'Privacidad' : 'Privacy'}</LocalizedA>
          <LocalizedA href="/" className="underline hover:text-white">{isSpanish ? 'Sitio principal' : 'Main website'}</LocalizedA>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-amber-400 bg-slate-950 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-xl lg:hidden">
        {callButton('ppc_sticky_mobile_call', true)}
      </div>
    </div>
  );
}
