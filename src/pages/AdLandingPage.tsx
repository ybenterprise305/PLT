import { PHONE, TEL } from '../config/business';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Clock, KeyRound, MapPin, Phone, Star } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NotFoundPage } from './NotFoundPage';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { getAdCampaignBySlug } from '../data/adLandingPagesData';
import { trackPhoneClick, watchSearchWebsiteCallNumber } from '../utils/analytics';

interface AdLandingPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

type ServiceCopy = [headline: string, summary: string, services: string[], question: string, answer: string];

const REVIEWS = 'https://maps.google.com/maps?cid=16992150185739281311';

const copy: Record<string, { en: ServiceCopy; es: ServiceCopy; image: string; alt: [string, string] }> = {
  "car-lockout": {
    "en": [
      "Locked out of your car?",
      "Call for quick dispatch. We come to your vehicle and use damage-free unlocking methods to get you back on the road.",
      [
        "Keys locked inside the car or trunk",
        "Mobile service at your home, work, or roadside",
        "Damage-free unlocking for car doors"
      ],
      "What if I lost my car keys?",
      "Our equipped vans can cut and program a replacement right at your vehicle, even when every key is lost."
    ],
    "es": [
      "¿Se quedó fuera de su auto?",
      "Llámenos para enviarle un técnico. Vamos hasta su auto y utilizamos métodos de apertura sin daños para que pueda seguir su camino.",
      [
        "Llaves dentro del auto o la cajuela",
        "Servicio móvil en casa, el trabajo o la carretera",
        "Apertura de puertas sin daños"
      ],
      "¿Y si perdí las llaves?",
      "Nuestras camionetas están equipadas para cortar y programar una llave junto a su auto, incluso si perdió todas las llaves."
    ],
    "image": "/ppc-images/car-lockout-lishi.webp",
    "alt": [
      "Illustrative automotive locksmith using a Lishi tool in a car door key cylinder",
      "Imagen ilustrativa de un cerrajero utilizando una herramienta Lishi en la cerradura de un auto"
    ]
  },
  "car-key-replacement": {
    "en": [
      "Need a new car key made?",
      "Get same-day car key replacement without a trip to the dealership. We carry car keys, transponder keys, remotes, smart keys and fobs for cutting and programming right at your vehicle.",
      [
        "Lost, broken, or spare car keys",
        "Transponder keys, remotes, and push-to-start fobs",
        "On-site cutting and programming"
      ],
      "Can you make a key if I have no original?",
      "Yes. We cut and program new car keys from scratch at your vehicle. Our vans carry keys, fobs, and the equipment to do the job on site."
    ],
    "es": [
      "¿Necesita una llave nueva para su auto?",
      "Obtenga una llave nueva el mismo día sin viajar al concesionario. Llevamos llaves con chip, controles y llaves inteligentes para corte y programación junto a su auto.",
      [
        "Llaves perdidas, rotas o de repuesto",
        "Llaves con chip y controles para arranque por botón",
        "Corte y programación en el lugar"
      ],
      "¿Pueden hacer una llave sin la original?",
      "Sí. Cortamos y programamos llaves nuevas desde cero junto a su auto. Llevamos llaves, controles y equipos para hacer el trabajo en el lugar."
    ],
    "image": "/ppc-images/car-key-replacement-960.webp",
    "alt": [
      "Car key equipment",
      "Equipos para llaves de auto"
    ]
  },
  "house-lockout": {
    "en": [
      "Locked out of your house?",
      "Call for quick dispatch to your home, apartment, or condo. A trained mobile locksmith uses damage-free entry methods to get you back inside.",
      [
        "Home, apartment, condo, and townhouse lockouts",
        "Damage-free entry for doors and locks",
        "On-site rekeying if your keys went missing"
      ],
      "Can you help if my keys were lost or stolen?",
      "Yes. We can get you inside and rekey compatible locks so the old keys no longer work."
    ],
    "es": [
      "¿Se quedó fuera de su casa?",
      "Llámenos para enviarle un cerrajero a su casa, apartamento o condominio. Nuestros técnicos capacitados usan métodos de apertura sin daños.",
      [
        "Casas, apartamentos, condominios y casas adosadas",
        "Apertura de puertas y cerraduras sin daños",
        "Cambio de combinación si perdió las llaves"
      ],
      "¿Pueden ayudar si perdí las llaves o me las robaron?",
      "Sí. Podemos abrir la puerta y cambiar la combinación de cerraduras compatibles para que las llaves anteriores ya no funcionen."
    ],
    "image": "/ppc-images/house-lockout-960.webp",
    "alt": [
      "Residential locksmith tools",
      "Herramientas de cerrajería residencial"
    ]
  },
  "lock-rekeying": {
    "en": [
      "Mobile lock rekeying",
      "Keep compatible locks and change which keys open them. A mobile locksmith comes to your home or business and cuts new keys on site.",
      [
        "New keys after a move or tenant turnover",
        "Rekey after a key is lost or stolen",
        "Key compatible doors alike"
      ],
      "When should I replace the lock?",
      "Rekeying works well when existing hardware is in good shape. We also replace damaged or worn locks and install upgrades."
    ],
    "es": [
      "Cambio de combinación a domicilio",
      "Conserve sus cerraduras compatibles y cambie las llaves que las abren. Vamos a su casa o negocio y cortamos llaves nuevas en el lugar.",
      [
        "Llaves nuevas después de una mudanza o cambio de inquilino",
        "Cambio de combinación tras pérdida o robo",
        "Una llave para varias cerraduras compatibles"
      ],
      "¿Cuándo conviene cambiar la cerradura?",
      "El cambio de combinación funciona bien si el herraje está en buen estado. También reemplazamos cerraduras dañadas o desgastadas e instalamos mejoras."
    ],
    "image": "/ppc-images/lock-rekeying-960.webp",
    "alt": [
      "Door lock service",
      "Servicio de cerraduras"
    ]
  },
  "commercial-locksmith": {
    "en": [
      "Mobile locksmith for your business",
      "Keep your business secure and running with professional commercial locksmith service. We handle business lockouts, lock repairs, rekeying and replacement, with same-day and emergency service available.",
      [
        "Storefront, office, and business lockouts",
        "Commercial rekeying and lock replacement",
        "Door hardware and access needs"
      ],
      "Can you change access after a staffing change?",
      "Yes. We can rekey compatible business locks so you control who has working keys again."
    ],
    "es": [
      "Cerrajería móvil para su negocio",
      "Proteja su negocio con cerrajería comercial profesional. Atendemos aperturas, reparaciones y cambios de cerraduras con servicio el mismo día y de emergencia.",
      [
        "Apertura de locales y oficinas",
        "Cambio de combinación y cerraduras comerciales",
        "Herrajes para puertas y acceso"
      ],
      "¿Pueden cambiar el acceso tras un cambio de personal?",
      "Sí. Podemos cambiar la combinación de cerraduras comerciales compatibles para que usted controle quién tiene acceso."
    ],
    "image": "/ppc-images/commercial-locksmith-960.webp",
    "alt": [
      "Commercial locksmith tools",
      "Herramientas de cerrajería comercial"
    ]
  },
  "emergency-locksmith": {
    "en": [
      "Need a locksmith right now?",
      "Our 24/7 team answers the phone and dispatches a trained mobile locksmith to your location in South Florida.",
      [
        "Car, house, apartment, and business lockouts",
        "Lost car keys cut and programmed on site",
        "Broken keys and urgent lock problems"
      ],
      "Who comes to my location?",
      "A professionally trained locksmith near you comes in a fully equipped van, ready to work at your location."
    ],
    "es": [
      "¿Necesita un cerrajero ahora?",
      "Nuestro equipo atiende las 24 horas y envía un cerrajero capacitado a su ubicación en el sur de Florida.",
      [
        "Apertura de autos, casas, apartamentos y negocios",
        "Corte y programación de llaves de auto perdidas",
        "Llaves rotas y problemas urgentes de cerraduras"
      ],
      "¿Quién viene a mi ubicación?",
      "Un cerrajero capacitado cerca de usted llega en una camioneta equipada para trabajar en el lugar."
    ],
    "image": "/ppc-images/emergency-locksmith-960.webp",
    "alt": [
      "Mobile locksmith service van",
      "Camioneta de cerrajería móvil"
    ]
  },
  "smart-lock-installation": {
    "en": [
      "Smart lock installation at your door",
      "Get your smart lock or keypad deadbolt installed by a trained mobile locksmith. Call to plan the installation and confirm door compatibility.",
      [
        "Keypad and smart deadbolt installation",
        "Help assessing door fit and alignment",
        "Test the lock and review access setup"
      ],
      "Can I supply my own smart lock?",
      "Yes. We can install compatible customer-supplied smart locks and test them at your door."
    ],
    "es": [
      "Instalación de cerraduras inteligentes",
      "Un cerrajero capacitado instala su cerradura inteligente o de teclado a domicilio. Llame para coordinar y confirmar la compatibilidad.",
      [
        "Instalación de cerrojos inteligentes y de teclado",
        "Revisión de ajuste y alineación",
        "Prueba de la cerradura y de la configuración de acceso"
      ],
      "¿Puedo comprar mi propia cerradura?",
      "Sí. Podemos instalar cerraduras inteligentes compatibles que usted compre y probarlas en su puerta."
    ],
    "image": "/ppc-images/smart-lock-installation-960.webp",
    "alt": [
      "Door lock installation",
      "Instalación de cerradura"
    ]
  },
  "ignition-repair": {
    "en": [
      "Car key won’t turn in the ignition?",
      "Get mobile help with a stuck key, worn ignition cylinder, or ignition switch problem. We come to your vehicle and assess what needs repair.",
      [
        "Keys that stick, won’t turn, or break off",
        "Ignition cylinder assessment, repair, or replacement",
        "Key cutting and programming when needed"
      ],
      "Can you fix the ignition at my vehicle?",
      "Our mobile locksmiths diagnose ignition and key problems at your vehicle and can handle cylinder repair and key replacement on site."
    ],
    "es": [
      "¿La llave no gira en el encendido?",
      "Vamos hasta su auto para revisar llaves atascadas, cilindros desgastados o problemas con el interruptor de encendido.",
      [
        "Llaves atascadas, que no giran o que se rompen",
        "Revisión, reparación o cambio del cilindro de encendido",
        "Corte y programación cuando haga falta"
      ],
      "¿Pueden reparar el encendido donde está mi auto?",
      "Nuestros cerrajeros móviles diagnostican problemas de encendido y llaves junto a su auto y pueden reparar el cilindro o hacer una llave en el lugar."
    ],
    "image": "/ppc-images/ignition-repair-960.webp",
    "alt": [
      "Automotive key service",
      "Servicio de llaves de autos"
    ]
  },
  "broken-key-extraction": {
    "en": [
      "Key snapped in the lock?",
      "A mobile locksmith can remove the broken piece and check whether the lock or ignition needs further work. Call for dispatch to your location.",
      [
        "Broken keys in home and business door locks",
        "Broken keys in car doors and ignitions",
        "Replacement keys or lock repair when needed"
      ],
      "Can you make another key after extraction?",
      "Yes. Our technicians can remove a broken key and make a replacement on site, with the tools and key stock already in the van."
    ],
    "es": [
      "¿Se rompió la llave en la cerradura?",
      "Un cerrajero móvil puede retirar el fragmento y revisar la cerradura o el encendido. Llámenos para enviarle un técnico.",
      [
        "Llaves rotas en puertas de casas y negocios",
        "Llaves rotas en puertas y encendidos de autos",
        "Llaves nuevas o reparación cuando haga falta"
      ],
      "¿Pueden hacer otra llave después de la extracción?",
      "Sí. Nuestros técnicos pueden extraer la llave rota y hacer otra en el lugar con el equipo y los materiales que llevan en la camioneta."
    ],
    "image": "/ppc-images/broken-key-extraction-960.webp",
    "alt": [
      "Professional lock tools",
      "Herramientas para cerraduras"
    ]
  },
  "deadbolt-installation": {
    "en": [
      "High-security deadbolt installation",
      "Upgrade the deadbolt on your home or business door. Our mobile locksmith can assess the door and frame and install compatible hardware.",
      [
        "Exterior door deadbolts and security upgrades",
        "Replace a loose, worn, or damaged bolt",
        "Fit, alignment, and operation checked on site"
      ],
      "Can I use one key for more than one door?",
      "Yes. Compatible locks can be keyed alike so you use one key for multiple doors."
    ],
    "es": [
      "Instalación de cerrojos de alta seguridad",
      "Mejore el cerrojo de su casa o negocio. Un cerrajero móvil revisa la puerta y el marco e instala un herraje compatible.",
      [
        "Cerrojos para puertas exteriores",
        "Cambio de cerrojos flojos, desgastados o dañados",
        "Revisión del ajuste y funcionamiento"
      ],
      "¿Puedo usar la misma llave en varias puertas?",
      "Sí. Podemos ajustar cerraduras compatibles para que use una sola llave en varias puertas."
    ],
    "image": "/ppc-images/deadbolt-installation-960.webp",
    "alt": [
      "Deadbolt installation",
      "Instalación de cerrojo"
    ]
  },
  "lock-change": {
    "en": [
      "Lock replacement and installation",
      "Replace a broken, worn, or outdated lock at your home or business. We bring tools and hardware to your door.",
      [
        "Replace damaged or unreliable door locks",
        "Install new locks and deadbolts",
        "Discuss rekeying if you only need different keys"
      ],
      "Do I need a lock change after moving?",
      "Rekeying is an option when existing locks are in good shape. Replacement is ideal for worn hardware or a security upgrade."
    ],
    "es": [
      "Cambio e instalación de cerraduras",
      "Reemplace una cerradura rota, desgastada o antigua en su casa o negocio. Llevamos herramientas y herrajes hasta su puerta.",
      [
        "Reemplazo de cerraduras dañadas o defectuosas",
        "Instalación de cerraduras y cerrojos",
        "Cambio de combinación si solo necesita otras llaves"
      ],
      "¿Debo cambiar la cerradura después de mudarme?",
      "El cambio de combinación es una opción si las cerraduras están en buen estado. El reemplazo es ideal si están desgastadas o quiere mejorar la seguridad."
    ],
    "image": "/ppc-images/lock-change-960.webp",
    "alt": [
      "Door lock change",
      "Cambio de cerradura"
    ]
  },
  "safe-lockout": {
    "en": [
      "Locked out of your safe?",
      "Call for mobile safe-opening service at your home or business. A trained locksmith assesses the safe and explains the available opening options.",
      [
        "Forgotten combinations and lost safe keys",
        "Mechanical and electronic safe locks",
        "Stuck bolts, keypads, and access problems"
      ],
      "Can the safe be opened without damage?",
      "We assess the safe and prioritize non-destructive methods. The options depend on the lock and the condition of the safe."
    ],
    "es": [
      "¿No puede abrir su caja fuerte?",
      "Solicite apertura a domicilio en su casa o negocio. Un cerrajero capacitado revisa la caja y le explica las opciones de apertura.",
      [
        "Combinaciones olvidadas y llaves perdidas",
        "Cerraduras mecánicas y electrónicas",
        "Pestillos atascados y problemas de teclado o acceso"
      ],
      "¿Se puede abrir la caja sin daños?",
      "Revisamos la caja y damos prioridad a los métodos sin daños. Las opciones dependen de la cerradura y del estado de la caja."
    ],
    "image": "/ppc-images/safe-lockout-960.webp",
    "alt": [
      "Specialist locksmith equipment",
      "Equipo especializado de cerrajería"
    ]
  },
  "storage-unit-lockout": {
    "en": [
      "Locked out of your storage unit?",
      "Call for a mobile locksmith to meet you at the facility and help you regain access to your authorized unit.",
      [
        "Lost keys, stuck locks, and damaged padlocks",
        "Assistance at your storage facility",
        "Replacement lock options after opening"
      ],
      "Can you replace the lock during the visit?",
      "We help authorized renters regain access and can replace a damaged lock during the same visit."
    ],
    "es": [
      "¿No puede abrir su unidad de almacenamiento?",
      "Llámenos para que un cerrajero móvil vaya al centro de almacenamiento y le ayude a entrar a la unidad que tiene autorizada.",
      [
        "Llaves perdidas, candados atascados o dañados",
        "Asistencia en el centro de almacenamiento",
        "Opciones de candado nuevo después de la apertura"
      ],
      "¿Pueden reemplazar el candado en la misma visita?",
      "Ayudamos a los arrendatarios autorizados a recuperar el acceso y podemos reemplazar un candado dañado en la misma visita."
    ],
    "image": "/ppc-images/storage-unit-lockout-960.webp",
    "alt": [
      "Locksmith lock service",
      "Servicio de cerraduras"
    ]
  },
  "car-key-fob-programming": {
    "en": [
      "Need a car key fob programmed?",
      "Our mobile locksmith brings replacement fobs and programming equipment to your vehicle. Call for a new, lost, or spare fob.",
      [
        "Push-to-start remotes and transponder keys",
        "New and spare fobs programmed at your vehicle",
        "Cut a matching emergency blade when needed"
      ],
      "Can you program a fob I bought?",
      "We can program compatible fobs or supply a replacement from our mobile stock and program it right at the vehicle."
    ],
    "es": [
      "¿Necesita programar un control de auto?",
      "Llevamos controles de reemplazo y equipos de programación hasta su vehículo. Llame por un control nuevo, perdido o de repuesto.",
      [
        "Controles de arranque por botón y llaves con chip",
        "Programación de controles nuevos y de repuesto",
        "Corte de llave de emergencia cuando haga falta"
      ],
      "¿Pueden programar un control que compré?",
      "Podemos programar controles compatibles o suministrar un reemplazo y programarlo directamente junto al vehículo."
    ],
    "image": "/ppc-images/car-key-fob-programming-960.webp",
    "alt": [
      "Key fob programming equipment",
      "Equipo para programar controles de auto"
    ]
  },
  "lost-car-keys": {
    "en": [
      "Lost all your car keys?",
      "Get a working key cut and programmed from scratch at your vehicle. Our mobile vans carry key stock, fobs, and cutting and programming equipment.",
      [
        "All-keys-lost service at your location",
        "Transponder, remote, and push-to-start key options",
        "On-site cutting and programming"
      ],
      "Do I need a tow to get a replacement key?",
      "We come to your vehicle and cut and program the new key on site so you can get back on the road."
    ],
    "es": [
      "¿Perdió todas las llaves del auto?",
      "Cortamos y programamos una llave desde cero donde está su vehículo. Llevamos llaves, controles y equipos de corte y programación.",
      [
        "Servicio móvil si perdió todas sus llaves",
        "Llaves con chip, controles y arranque por botón",
        "Corte y programación en el lugar"
      ],
      "¿Necesito una grúa para hacer una llave nueva?",
      "Vamos hasta su auto, cortamos y programamos la llave en el lugar para que pueda seguir su camino."
    ],
    "image": "/ppc-images/lost-car-keys-960.webp",
    "alt": [
      "Replacement car key tools",
      "Herramientas para reemplazar llaves de auto"
    ]
  }
};

const reviews = {
  house: { name: 'isaac', text: 'Shawn came quick and opened my house within minutes so grateful.' },
  keys: { name: 'Roger Celler', text: 'Shawn made a new key for my 2022 Honda Accord and was very knowledgeable. The whole process was smooth and communication was excellent.' },
  general: { name: 'Nick Manning', text: 'Shawn did a Great job. Quick service and very friendly.' },
};

const emergency = new Set(['car-lockout', 'house-lockout', 'emergency-locksmith', 'lost-car-keys', 'broken-key-extraction', 'safe-lockout', 'storage-unit-lockout']);

// Include each destination used by the Search ads or their sitelinks.
const trackedSearchPages = new Set([
  'car-lockout', 'house-lockout', 'car-key-replacement',
  'lost-car-keys', 'car-key-fob-programming', 'emergency-locksmith',
]);

const serviceDetails: Record<string, { en: [string, string][]; es: [string, string][] }> = {
  'car-lockout': {
    en: [
      ['Can you unlock a car with keys in the trunk?', 'Yes. Our mobile locksmiths handle car door and trunk lockouts. The approach depends on the vehicle and where the keys are.'],
      ['What affects the price of a car lockout?', 'The vehicle, the type of lockout, and whether a replacement key is needed affect the price.'],
    ],
    es: [
      ['¿Pueden abrir el auto si dejé las llaves en la cajuela?', 'Sí. Atendemos bloqueos de puertas y cajuelas. El método depende del vehículo y de dónde estén las llaves.'],
      ['¿Qué influye en el precio de la apertura?', 'El precio depende del vehículo, del tipo de bloqueo y de si necesita una llave nueva.'],
    ],
  },
  'house-lockout': {
    en: [
      ['Do you unlock apartments and condos?', 'Yes. We make mobile service calls for houses, apartments, condos, and townhomes.'],
      ['What affects the price of unlocking my door?', 'The door hardware and type of lockout affect the price. Rekeying a lock or replacing damaged hardware is a separate service.'],
    ],
    es: [
      ['¿Abren puertas de apartamentos y condominios?', 'Sí. Vamos a casas, apartamentos, condominios y casas adosadas.'],
      ['¿Qué influye en el precio de la apertura?', 'El tipo de cerradura y el problema afectan el precio. El cambio de combinación o el reemplazo de herrajes dañados son servicios distintos.'],
    ],
  },
  'car-key-replacement': {
    en: [
      ['Can I get a new fob and an emergency blade?', 'Yes. We can supply and program compatible fobs and cut the emergency blade when the fob uses one.'],
      ['What affects the price of a replacement car key?', 'Pricing depends on the type of key and programming required. Call for an estimate and same-day service at your vehicle.'],
    ],
    es: [
      ['¿Pueden hacer un control remoto y una llave de emergencia?', 'Sí. Suministramos y programamos controles compatibles y cortamos la llave de emergencia cuando el control la usa.'],
      ['¿Qué influye en el precio de una llave nueva?', 'El precio depende del tipo de llave y la programación necesaria. Llame para solicitar un presupuesto y servicio el mismo día.'],
    ],
  },
};

export function AdLandingPage({ slug, onNavigate }: AdLandingPageProps) {
  const { isSpanish } = useLanguage();
  const [forwardingNumber, setForwardingNumber] = useState<{ display: string; tel: string }>();
  const trackWebsiteCalls = trackedSearchPages.has(slug);
  useEffect(() => {
    if (trackWebsiteCalls) return watchSearchWebsiteCallNumber(setForwardingNumber);
  }, [trackWebsiteCalls]);
  const displayNumber = trackWebsiteCalls && forwardingNumber ? forwardingNumber.display : PHONE;
  const phoneLink = trackWebsiteCalls && forwardingNumber ? forwardingNumber.tel : TEL;
  const campaign = getAdCampaignBySlug(slug);
  const item = copy[slug];
  if (!campaign || !item) return <NotFoundPage onNavigate={onNavigate} />;

  const [headline, summary, services, question, answer] = isSpanish ? item.es : item.en;
  const details = serviceDetails[slug];
  const questions: [string, string][] = [[question, answer], ...(details ? (isSpanish ? details.es : details.en) : [])];
  const pagePath = '/lp/' + slug;
  const isCarLockout = slug === 'car-lockout';
  const isUrgent = emergency.has(slug);
  const review = slug === 'house-lockout' ? reviews.house
    : ['car-key-replacement', 'car-key-fob-programming', 'lost-car-keys'].includes(slug) ? reviews.keys
    : reviews.general;
  const callLabel = isUrgent
    ? (isSpanish ? 'Llamar para enviar un técnico' : 'Call for Dispatch')
    : (isSpanish ? 'Llamar para servicio' : 'Call for Service');
  const trackCall = (ctaLocation: string) => trackPhoneClick({
    ctaLocation,
    pagePath,
    campaignSlug: slug,
    serviceCategory: campaign.serviceId,
  });
  const callButton = (location: string, wide = false) => (
    <a href={phoneLink} onClick={() => trackCall(location)}
      className={'inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-amber-400 px-4 py-3 text-left font-bold text-slate-950 shadow-[0_5px_22px_#fbbf2426] transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ' + (wide ? 'w-full' : 'w-full sm:w-auto sm:px-6')}>
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="leading-tight">
        <span className="block text-base">{callLabel}</span>
        <span className="block text-sm tabular-nums">{displayNumber}</span>
      </span>
      <ArrowRight className="ml-2 h-5 w-5 shrink-0" aria-hidden="true" />
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-white lg:pb-0">
      <SEOHead title={headline + ' | Pro Locksmith Tech'} description={summary} canonicalPath={pagePath} noIndex={true} />
      <header className="border-b border-slate-800 border-t-2 border-t-amber-400">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 font-heading text-base font-extrabold sm:text-lg">
            <KeyRound className="h-6 w-6 shrink-0 text-amber-400" aria-hidden="true" />
            <span>Pro Locksmith Tech</span>
          </div>
          <a href={phoneLink} onClick={() => trackCall('ppc_header_call')} aria-label={callLabel + ' ' + displayNumber}
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg px-2 text-sm font-bold text-amber-300 hover:underline focus-visible:outline-2 focus-visible:outline-amber-300">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{displayNumber}</span>
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-800 bg-[radial-gradient(ellipse_at_top_right,#3b2b16_0%,transparent_65%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-6 sm:px-6 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-16">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {isSpanish ? 'Cerrajería móvil 24/7 en el sur de Florida' : '24/7 mobile locksmith in South Florida'}
              </p>
              <h1 className="max-w-xl font-heading text-[clamp(2rem,6vw,3.75rem)] leading-[1.07] font-extrabold tracking-tight">{headline}</h1>
              <p className="mt-3 max-w-xl text-base leading-6 text-slate-200 sm:mt-4 sm:text-lg sm:leading-7">{summary}</p>
              <div className="mt-5">{callButton('ppc_hero_call')}</div>
              <ul className="mt-4 grid gap-x-4 gap-y-2 text-sm font-semibold text-slate-100 sm:flex sm:flex-wrap">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  {isSpanish ? 'Técnicos cerca de usted, listos para salir' : 'Nearby technicians ready to go'}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  {isSpanish ? 'Llegada promedio de 10–15 minutos' : '10–15 min average arrival'}
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 shrink-0 fill-current text-amber-300" aria-hidden="true" />
                  {isSpanish ? 'Calificación de 5 estrellas en Google' : '5-star Google rating'}
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-2xl shadow-black/25">
              <img src={item.image}
                srcSet={isCarLockout ? "/ppc-images/car-lockout-lishi-420.webp 420w, /ppc-images/car-lockout-lishi.webp 640w" : `/ppc-images/${slug}-480.webp 480w, /ppc-images/${slug}-960.webp 960w`}
                sizes="(max-width: 1023px) calc(100vw - 32px), 540px"
                width={isCarLockout ? 640 : 960} height={isCarLockout ? 427 : 660}
                alt={item.alt[isSpanish ? 1 : 0]} className="aspect-[2/1] w-full object-cover lg:aspect-[16/11]"
                fetchPriority="high" decoding="async" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-7 px-4 py-9 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-14">
          <div>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{isSpanish ? 'Cómo podemos ayudarle' : 'What we can help with'}</h2>
            <ul className="mt-4 grid gap-2.5">
              {services.map(service => <li key={service} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-slate-100">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-400/10 text-amber-300"><Check className="size-4" aria-hidden="true" /></span>
                {service}
              </li>)}
            </ul>
          </div>
          <figure className="flex flex-col justify-center rounded-3xl border border-amber-300/20 bg-slate-900 px-5 py-6 sm:px-7 lg:p-8">
            <p className="flex items-center gap-2 text-sm font-bold text-amber-300">
              <span className="flex gap-0.5" aria-hidden="true">{Array.from({ length: 5 }, (_, i) =>
                <Star key={i} className="size-3.5 fill-current" />)}</span>
              {isSpanish ? 'Reseña de Google' : 'Google customer review'}
            </p>
            <blockquote lang="en" className="mt-3 text-lg font-medium leading-7 text-white">“{review.text}”</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-slate-300">{review.name}</figcaption>
            <a href={REVIEWS} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-amber-300 underline underline-offset-4">
              {isSpanish ? 'Ver reseñas de clientes' : 'Read customer reviews'}
            </a>
          </figure>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60">
          <div className="mx-auto grid max-w-6xl gap-7 px-4 py-9 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-14">
            <div>
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{isSpanish ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
              <div className="mt-4 divide-y divide-slate-700 border-y border-slate-700">
                {questions.map(([title, text], index) => (
                  <details key={title} open={index === 0} className="group">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                      {title}
                      <ChevronDown className="size-4 shrink-0 text-amber-300 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="pb-4 leading-7 text-slate-200">{text}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="self-center rounded-3xl border border-slate-700 bg-slate-950 px-5 py-6 sm:p-7">
              <h2 className="font-heading text-2xl font-extrabold">{isSpanish ? 'Un cerrajero cerca de usted' : 'Get a locksmith on the way'}</h2>
              <p className="mt-2 leading-7 text-slate-200">{isSpanish ? 'Servicio en Broward, Palm Beach y otras zonas del sur de Florida.' : 'Mobile service in Broward, Palm Beach, and across South Florida.'}</p>
              <div className="mt-4">{callButton('ppc_final_call', true)}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-4 py-6 text-center text-sm text-slate-300">
        <p>Pro Locksmith Tech · {isSpanish ? 'Cerrajería móvil en el sur de Florida' : 'South Florida mobile locksmith'}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-5">
          <LocalizedA href="/privacy" className="inline-flex min-h-11 items-center underline underline-offset-4">{isSpanish ? 'Privacidad' : 'Privacy'}</LocalizedA>
          <LocalizedA href="/terms" className="inline-flex min-h-11 items-center underline underline-offset-4">{isSpanish ? 'Condiciones' : 'Terms'}</LocalizedA>
          <LocalizedA href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">{isSpanish ? 'Sitio principal' : 'Main website'}</LocalizedA>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-950 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] lg:hidden">
        {callButton('ppc_sticky_mobile_call', true)}
      </div>
    </div>
  );
}
