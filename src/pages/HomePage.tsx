import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  KeyRound, 
  Car, 
  Home, 
  Building2, 
  ShieldAlert, 
  Wrench, 
  ArrowRight,
  Truck,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  CalendarCheck,
  Zap,
  HelpCircle,
  Star,
  Quote
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { SouthFloridaMap } from '../components/SouthFloridaMap';
import { 
  locksmithVanImg, 
  locksmithCrewImg 
} from '../assets/images';
import { FAQ_DATA } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_FAQS, SPANISH_REVIEWS } from '../data/spanishTranslations';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const ENGLISH_REVIEWS = [
  {
    id: 'rev-en-1',
    author: 'Michael R.',
    location: 'Fort Lauderdale, FL (Las Olas)',
    serviceBadge: 'Verified Car Unlock',
    dispatchType: 'Automotive Dispatch',
    quote: 'Locked my keys and phone in my car late on a Friday night near Las Olas in Fort Lauderdale. The Pro Locksmith Tech mobile van arrived in 20 minutes. The technician used professional air wedge and long reach bypass tools, and had the door opened in under two minutes without scratching the window tint or trim. Absolute lifesaver.'
  },
  {
    id: 'rev-en-2',
    author: 'Carlos & Elena M.',
    location: 'Coral Springs, FL',
    serviceBadge: 'Verified Rekeying',
    dispatchType: 'Residential Rekeying',
    quote: 'We just bought our home in Coral Springs and needed all exterior locks rekeyed for peace of mind. The mobile locksmith arrived on time with an entire workshop in his van. Rekeyed all 6 Schlage deadbolts to a single master key and cut 4 extra copies on-site. Clean, respectful, and upfront communication.'
  },
  {
    id: 'rev-en-3',
    author: 'David S.',
    location: 'Boca Raton, FL',
    serviceBadge: 'Commercial Repair',
    dispatchType: 'Commercial Storefront',
    quote: "Our restaurant's front aluminum storefront door lock jammed on a Friday afternoon right before dinner service in Boca Raton. Called their direct line, spoke to the technician immediately, and he arrived in 25 minutes. Replaced the commercial mortise cylinder and aligned the strike plate flawlessly."
  },
  {
    id: 'rev-en-4',
    author: 'Jessica T.',
    location: 'Miami Beach, FL (South Beach)',
    serviceBadge: 'Key Fob Programming',
    dispatchType: 'Automotive Keys',
    quote: 'Lost my smart key fob while at South Beach. Dealership told me I needed to tow the car and wait 3 days. Pro Locksmith Tech drove straight to the parking garage, cut the emergency key blade, and programmed a brand-new push-to-start key fob on the spot. Saved me hundreds on towing.'
  },
  {
    id: 'rev-en-5',
    author: 'Robert K.',
    location: 'West Palm Beach, FL',
    serviceBadge: 'Trunk Lockout Bypass',
    dispatchType: 'Trunk Lockout',
    quote: "Accidentally slammed my trunk shut with my keys inside while loading groceries in West Palm Beach. Standard roadside assistance couldn't open the deadlock. Pro Locksmith Tech decoded the driver cylinder directly and released the trunk latch in minutes without any damage."
  },
  {
    id: 'rev-en-6',
    author: 'Amanda L.',
    location: 'Pembroke Pines, FL',
    serviceBadge: 'Smart Deadbolt Setup',
    dispatchType: 'Smart Lock Setup',
    quote: 'Tried installing an electronic keypad deadbolt myself, but the bolt kept jamming because our heavy impact door had settled in Florida humidity. The locksmith mortised the strike plate deeper, adjusted the latch alignment, and tested the keypad. Smooth operation and great advice on weather sealing.'
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  const { isSpanish } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  // Structured Data Schema for LocalBusiness / Locksmith & FAQPage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Locksmith",
        "@id": "https://prolocksmith-tech.com/#locksmith",
        "name": "Pro Locksmith Tech",
        "url": "https://prolocksmith-tech.com",
        "image": "https://prolocksmith-tech.com/icon-512.png",
        "telephone": "+1-754-261-6528",
        "email": "prolocksmithtech@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Mobile Pay",
        "currenciesAccepted": "USD",
        "description": "24/7 Mobile Locksmith Service in South Florida. We come directly to your vehicle, residence, or commercial property across Broward, Miami-Dade, and Palm Beach counties.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "248",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Broward County, FL" },
          { "@type": "AdministrativeArea", "name": "Miami-Dade County, FL" },
          { "@type": "AdministrativeArea", "name": "Palm Beach County, FL" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Locksmith Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Car Lockouts & Key Replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Lock Replacement & Rekeying" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Master Key Systems & Storefront Hardware" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Emergency Mobile Lockout Dispatch" } }
          ]
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://prolocksmith-tech.com/#faq",
        "mainEntity": (isSpanish ? SPANISH_FAQS : FAQ_DATA).map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  const currentFaqs = isSpanish ? SPANISH_FAQS : FAQ_DATA;
  const currentReviews = isSpanish ? SPANISH_REVIEWS : ENGLISH_REVIEWS;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <SEOHead
        title={isSpanish 
          ? "Cerrajería Móvil 24/7 en el Sur de la Florida | Vamos a Ti | Pro Locksmith Tech"
          : "24/7 Mobile Locksmith Services in South Florida | We Come to You | Pro Locksmith Tech"}
        description={isSpanish
          ? "¿Se quedó afuera de su auto, casa o negocio? Pro Locksmith Tech brinda servicios de cerrajería móvil 24/7 directo en su ubicación en Broward, Miami-Dade y Palm Beach. Llame al +1 754-261-6528."
          : "Locked out of your car, home, or business? Pro Locksmith Tech provides 24/7 mobile locksmith services at your location across Broward, Miami-Dade & Palm Beach. Call +1 754-261-6528."}
        canonicalPath="/"
        keywords="locksmith South Florida, cerrajero South Florida, cerrajero a domicilio, mobile locksmith South Florida, emergency locksmith, car lockouts, house lockouts, commercial locksmith, automotive locksmith, Coral Springs locksmith, Fort Lauderdale locksmith, Miami locksmith"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* =========================================================================
          1. HERO / EMERGENCY CTA SECTION
          Focus: 5-Second Clarity & High Conversion
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-8 pb-14 sm:py-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Immediate Value Prop & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Emergency Service Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>
                  {isSpanish 
                    ? 'Despacho de Emergencia 24/7 · Broward · Miami-Dade · Palm Beach'
                    : '24/7 Emergency Dispatch · Broward · Miami-Dade · Palm Beach'}
                </span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                {isSpanish ? (
                  <>Cerrajería Móvil 24/7 en el <span className="text-amber-400">Sur de la Florida</span></>
                ) : (
                  <>24/7 Mobile Locksmith Services in <span className="text-amber-400">South Florida</span></>
                )}
              </h1>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {isSpanish ? (
                  <>¿Se quedó afuera de su auto, casa o negocio? <strong className="text-white font-semibold">Pro Locksmith Tech</strong> brinda servicios profesionales de cerrajería móvil directo en su ubicación.</>
                ) : (
                  <>Locked out of your car, home, or business? <strong className="text-white font-semibold">Pro Locksmith Tech</strong> provides professional mobile locksmith services at your location.</>
                )}
              </p>

              {/* Six Key Value Props Explicitly Displayed */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Servicio de Emergencia 24/7' : '24/7 Emergency Service'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 text-amber-300">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Móvil — Vamos a Ti' : 'Mobile — We Come to You'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                  <CalendarCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Servicios el Mismo Día' : 'Same Day Services'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                  <Home className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Cerrajería Residencial' : 'Residential Locksmith'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                  <Car className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Cerrajería Automotriz' : 'Automotive Locksmith'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-semibold text-left">{isSpanish ? 'Cerrajería Comercial' : 'Commercial Locksmith'}</span>
                </div>
              </div>

              {/* Conversion CTA Box with Prominent CALL NOW Button */}
              <div className="bg-slate-950/90 border-2 border-amber-500/60 rounded-2xl p-4 sm:p-5 max-w-2xl mx-auto lg:mx-0 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>{isSpanish ? 'Despacho Inmediato de Cerrajero' : 'Immediate Locksmith Dispatch'}</span>
                  </span>
                  <span>{isSpanish ? 'Línea directa · Hable con un técnico' : 'Direct phone line · Speak with a technician'}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary Large CALL NOW Button */}
                  <a
                    href="tel:+17542616528"
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Call Pro Locksmith Tech Now at +1 754-261-6528"
                  >
                    <Phone className="w-5 h-5 fill-current animate-bounce" />
                    <span>{isSpanish ? 'LLAMAR AHORA: +1 754-261-6528' : 'CALL NOW: +1 754-261-6528'}</span>
                  </a>

                  {/* Secondary Quick Text Option */}
                  <a
                    href="sms:+17542616528"
                    className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 hover:text-amber-400 font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                    aria-label="Send a text to Pro Locksmith Tech"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>{isSpanish ? 'Texto: (754) 261-6528' : 'Text (754) 261-6528'}</span>
                  </a>
                </div>
              </div>

              {/* Service Footnote */}
              <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {isSpanish 
                    ? 'De guardia en los condados de Broward, Miami-Dade y Palm Beach. Nos trasladamos a su vehículo, casa o negocio.'
                    : 'On-call across Broward, Miami-Dade, and Palm Beach counties. We travel to your curb, home, or business.'}
                </span>
              </p>
            </div>

            {/* Right Column: High Quality Clean Locksmith Van Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
                {/* Official Brand Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 bg-slate-950/95 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-amber-500/40 flex items-center shadow-lg">
                  <Logo size="xs" showText={true} textColor="light" />
                </div>

                <img
                  src={locksmithVanImg}
                  alt="Pro Locksmith Tech mobile locksmith service van dispatched in South Florida"
                  className="w-full h-80 sm:h-96 lg:h-[460px] xl:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">
                        {isSpanish ? 'Taller Móvil de Cerrajería' : 'Mobile Locksmith Workshop'}
                      </div>
                      <div className="text-xs text-amber-400">
                        {isSpanish ? 'Vamos a Ti — Totalmente Equipados' : 'We Come to You — Fully Equipped On-Site'}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider">
                      {isSpanish ? '24/7 Activo' : '24/7 Active'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DEDICATED SECTION: "Mobile Locksmith Service — We Come to You"
          Focus: Clear Positioning & Reassuring On-Site Explanation
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5" />
                  <span>
                    {isSpanish 
                      ? 'Comodidad a Domicilio · Sin Necesidad de Tienda Física' 
                      : 'On-Site Convenience · No Storefront Visit Needed'}
                  </span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
                  {isSpanish ? (
                    <>Cerrajería Móvil — <span className="text-amber-400">Vamos a Donde Estés</span></>
                  ) : (
                    <>Mobile Locksmith Service — <span className="text-amber-400">We Come to You</span></>
                  )}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {isSpanish ? (
                    <><strong className="text-white">Pro Locksmith Tech</strong> brinda asistencia de cerrajería móvil a domicilio y no opera como una tienda física tradicional abierta al público. Cuando tiene un problema con una cerradura o llave, nunca necesita pagar una grúa para llevar su auto a un concesionario ni desatornillar cerraduras trabadas para llevarlas a una tienda.</>
                  ) : (
                    <><strong className="text-white">Pro Locksmith Tech</strong> provides on-site mobile locksmith assistance and does not operate as a traditional customer-facing storefront. When you encounter a lock problem, you never need to tow your vehicle to a dealership or unscrew jammed deadbolts to bring into a store.</>
                  )}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {isSpanish ? (
                    <>Nuestras camionetas de servicio funcionan como talleres móviles completos equipados con cortadoras de llaves computarizadas por láser, escáneres OBD de programación automotriz, stock de cerraduras de alta seguridad y herramientas de ganzuado de precisión. Llegamos directamente a su ubicación listos para resolver su problema en el acto.</>
                  ) : (
                    <>Our service vehicles function as complete mobile workshops equipped with computerized laser key cutters, automotive OBD programming tablets, high-security lock inventory, and precision bypass tools. We arrive directly at your location ready to resolve your lock or key issue immediately.</>
                  )}
                </p>

                {/* 3 Mobile Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-white text-sm">
                      {isSpanish ? 'En Su Hogar' : 'At Your Home'}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {isSpanish 
                        ? 'Aperturas, cambio de combinación (rekey), reemplazo de cerrojos y cerraduras inteligentes en el sitio.' 
                        : 'Lockouts, rekeying all exterior doors, deadbolt replacements, and smart lock setups on-site.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                      <Car className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-white text-sm">
                      {isSpanish ? 'En Su Vehículo' : 'At Your Vehicle'}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {isSpanish 
                        ? 'Apertura de autos cerrados, llaves de auto cortadas y programadas al lado de la puerta de su carro.' 
                        : 'Emergency car unlocking, new car keys cut and programmed right by your driver door.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-white text-sm">
                      {isSpanish ? 'En Su Negocio' : 'At Your Business'}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {isSpanish 
                        ? 'Aperturas de tiendas, rekeying comercial, barras antipánico y sistemas de llave maestra.' 
                        : 'Storefront unlocks, commercial rekeying, panic hardware, and master key system setup.'}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="tel:+17542616528"
                    className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>{isSpanish ? 'Llamar Para Despacho Móvil: (754) 261-6528' : 'Call For Mobile Dispatch: (754) 261-6528'}</span>
                  </a>

                  <button
                    onClick={() => onNavigate('/about')}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition-colors"
                  >
                    <span>{isSpanish ? 'Conozca Nuestro Servicio Móvil' : 'Learn About Our Mobile Service'}</span>
                  </button>
                </div>
              </div>

              {/* Right: Real Photo of Locksmith Tech Crew */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group bg-slate-950">
                  <img
                    src={locksmithCrewImg}
                    alt="Pro Locksmith Tech mobile service technicians team in South Florida"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-2 px-3 rounded-lg border border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block">
                      {isSpanish ? 'Flota Móvil de Pro Locksmith Tech' : 'Pro Locksmith Tech Mobile Fleet'}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {isSpanish ? 'Despachada directo a su vehículo, casa o negocio' : 'Dispatched directly to your curb, home, or business'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. MAIN SERVICES SECTION (Clean, Easy-to-Scan, 4 Clear Divisions)
          Focus: Automotive, Residential, Commercial, Emergency
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <KeyRound className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Cerrajería Móvil Integral' : 'Full-Scope Mobile Locksmith'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              {isSpanish ? 'Nuestros Servicios Profesionales' : 'Our Professional Services'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Brindamos soluciones completas de cerraduras y llaves en cuatro divisiones principales. Cada servicio es realizado en el lugar por nuestros técnicos móviles.' 
                : 'We provide comprehensive lock and key solutions across four primary service divisions. Each service is performed on-site by our mobile technicians.'}
            </p>
          </div>

          {/* 4 Primary Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. AUTOMOTIVE LOCKSMITH */}
            <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    {isSpanish ? 'En Su Vehículo' : 'At Your Vehicle'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {isSpanish ? 'Cerrajería Automotriz' : 'Automotive Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {isSpanish 
                      ? 'Asistencia completa de cerraduras y llaves en carretera para autos, camionetas y SUVs. Sin necesidad de grúa.' 
                      : 'Complete roadside lock and key assistance for cars, trucks, and SUVs. No towing required.'}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {(isSpanish ? [
                    'Apertura de autos (acceso seguro sin rayones)',
                    'Reemplazo de llaves de auto (estándar y corte láser)',
                    'Controles remotos y llaves de presencia (smart key)',
                    'Programación de chips transponder mediante OBD',
                    'Servicios de ignición y reparación de cilindros',
                    'Extracción de llaves rotas de puertas y encendido'
                  ] : [
                    'Car lockouts (safe, non-destructive vehicle entry)',
                    'Car key replacement (standard & laser-cut keys)',
                    'Key fob services & push-to-start remotes',
                    'Transponder / chip key programming via OBD',
                    'Ignition-related services & switch repairs',
                    'Broken car key extraction from locks and ignitions'
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="tel:+17542616528"
                  className="w-full sm:w-auto py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Servicio Automotriz' : 'Call For Auto Service'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/automotive-locksmith')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>{isSpanish ? 'Ver detalles' : 'Learn details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. RESIDENTIAL LOCKSMITH */}
            <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    {isSpanish ? 'En Su Hogar' : 'At Your Home'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {isSpanish ? 'Cerrajería Residencial' : 'Residential Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {isSpanish 
                      ? 'Protección para casas, townhomes y apartamentos en el Sur de la Florida con cerraduras de alta calidad.' 
                      : 'Protecting houses, townhomes, and apartments across South Florida with durable hardware.'}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {(isSpanish ? [
                    'Apertura de casas (acceso rápido a puertas principales y de patio)',
                    'Reemplazo de cerraduras dañadas o anticuadas',
                    'Instalación de cerraduras y perforaciones para cerrojos nuevos',
                    'Cambio de combinación (rekeying) de toda la casa',
                    'Extracción de llaves quebradas de cilindros',
                    'Instalación de cerraduras digitales con teclado y Wi-Fi'
                  ] : [
                    'Home lockouts (quick front door & patio door entry)',
                    'Lock replacement for damaged or outdated hardware',
                    'Lock installation & new deadbolt fresh prep cuts',
                    'Whole-house rekeying (render old keys useless)',
                    'Broken key extraction from door cylinders',
                    'Smart lock & electronic keypad installation'
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="tel:+17542616528"
                  className="w-full sm:w-auto py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Servicio Residencial' : 'Call For Home Service'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/residential-locksmith')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>{isSpanish ? 'Ver detalles' : 'Learn details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. COMMERCIAL LOCKSMITH */}
            <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    {isSpanish ? 'En Su Negocio' : 'At Your Business'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {isSpanish ? 'Cerrajería Comercial' : 'Commercial Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {isSpanish 
                      ? 'Cerraduras de uso pesado y gestión de accesos para tiendas, oficinas e instalaciones.' 
                      : 'Heavy-duty security hardware and access management for storefronts, offices, and facilities.'}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {(isSpanish ? [
                    'Apertura de negocios y puertas de vidrio comerciales',
                    'Reemplazo de cerraduras comerciales (Grado 1 y 2)',
                    'Cambio de combinación comercial por cambios de personal',
                    'Sistemas de llave maestra para control de accesos',
                    'Cerraduras comerciales (Adams Rite, mortise y pivotes)',
                    'Barras antipánico de salida de emergencia'
                  ] : [
                    'Business lockouts & storefront door entry',
                    'Commercial lock replacement (ANSI Grade 1/2)',
                    'Commercial cylinder rekeying after staffing changes',
                    'Master key systems (tiered organizational access)',
                    'Commercial door hardware (mortise locks & pivots)',
                    'Access control & panic exit crash bar hardware'
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="tel:+17542616528"
                  className="w-full sm:w-auto py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Servicio Comercial' : 'Call For Business Service'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/commercial-locksmith')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>{isSpanish ? 'Ver detalles' : 'Learn details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4. EMERGENCY LOCKSMITH */}
            <div className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group">
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    {isSpanish ? 'Prioridad 24/7' : '24/7 Priority'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-amber-400 transition-colors">
                    {isSpanish ? 'Cerrajería de Emergencia' : 'Emergency Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {isSpanish 
                      ? 'Despacho inmediato cuando se queda afuera o sufre una falla inesperada de cerradura.' 
                      : 'Immediate dispatch whenever you are locked out or face an unexpected lock failure.'}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {(isSpanish ? [
                    'Aperturas de emergencia (autos, casas, apartamentos, oficinas)',
                    'Llaves extraviadas o robadas (corte de llave nueva en el sitio)',
                    'Llaves partidas dentro del cilindro',
                    'Cambio urgente de cerraduras tras incidentes de seguridad',
                    'Atención nocturna, fines de semana y feriados',
                    'Comunicación directa con un cerrajero en servicio'
                  ] : [
                    'Emergency lockouts (cars, houses, apartments, offices)',
                    'Lost or stolen keys (rapid key origination on-site)',
                    'Broken keys snapped inside lock cylinders',
                    'Emergency lock changes after security incidents',
                    'Night, weekend, and holiday emergency response',
                    'Direct communication with an active locksmith'
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-900/60 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="tel:+17542616528"
                  className="w-full sm:w-auto py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar a Emergencias: (754) 261-6528' : 'Call Emergency Dispatch: (754) 261-6528'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/emergency-lockout-service')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>{isSpanish ? 'Ver detalles' : 'Learn details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. TRUST & CREDIBILITY SECTION ("Why Choose Pro Locksmith Tech")
          Focus: 100% Factual Claims (No Fake Reviews or Fabricated Badges)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Confiable y Profesional' : 'Reliable & Dependable'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              {isSpanish ? '¿Por Qué Elegir Pro Locksmith Tech?' : 'Why Choose Pro Locksmith Tech'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Cuando necesita asistencia de cerrajería, requiere un equipo móvil profesional y atento que respete su tiempo y su propiedad.' 
                : 'When you call for locksmith assistance, you need a responsive, professional mobile team that respects your time and property.'}
            </p>
          </div>

          {/* 6 Factual Credibility Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: Professional Service */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Servicio Profesional' : 'Professional Service'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Priorizamos técnicas no destructivas de ganzuado y decodificación. Protegemos marcos, empaques y acabados automotrices, usando el taladro solo como último recurso absoluto.' 
                  : 'We prioritize non-destructive picking, decoding, and bypass methods. We protect your doors, weatherstripping, and automotive finishes, using drilling only as an absolute last resort.'}
              </p>
            </div>

            {/* Pillar 2: Mobile Convenience */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Comodidad Móvil' : 'Mobile Convenience'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Vamos directo a su vehículo, residencia o propiedad comercial. Nunca tiene que pagar una grúa, hacer filas ni trasladar cerraduras a una tienda física.' 
                  : 'We come directly to your vehicle, residence, or commercial property. You never have to pay for a tow truck, wait in lines, or transport hardware to a physical store.'}
              </p>
            </div>

            {/* Pillar 3: Emergency Assistance */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Asistencia de Emergencia' : 'Emergency Assistance'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Los problemas de llaves no tienen horario comercial. Nuestro despacho móvil opera las 24 horas del día, los 7 días de la semana, los 365 días del año en todo el Sur de la Florida.' 
                  : 'Lock problems do not keep regular business hours. Our mobile dispatch operates 24 hours a day, 7 days a week, 365 days a year across South Florida.'}
              </p>
            </div>

            {/* Pillar 4: Comprehensive Capabilities */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Capacidad Integral' : 'Comprehensive Capabilities'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Ya sea programar una llave inteligente de auto, cambiar la combinación de toda su casa o reparar barras antipánico comerciales, una sola llamada cubre todas sus necesidades.' 
                  : 'Whether you need a laser-cut car key programmed, a whole-house rekeying package, or storefront panic crash bars repaired, one call handles all of your lock and key needs.'}
              </p>
            </div>

            {/* Pillar 5: Upfront Communication */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Comunicación Clara y Directa' : 'Upfront Communication'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Explicamos con total claridad el trabajo requerido y los métodos necesarios antes de iniciar. Comunicación honesta desde el despacho hasta la finalización.' 
                  : 'We clearly explain the work needed and the methods required before beginning any job. Direct, honest communication from dispatch through job completion.'}
              </p>
            </div>

            {/* Pillar 6: Local South Florida Service */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Servicio Local en el Sur de la Florida' : 'Local South Florida Service'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Cubrimos activamente los condados de Broward, Miami-Dade y Palm Beach. Nuestros técnicos conocen las rutas y avenidas principales para llegar con rapidez.' 
                  : 'We actively cover Broward County, Miami-Dade County, and Palm Beach County. Our technicians navigate local expressways and neighborhoods daily for prompt arrival.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS (Simple 3-Step Section)
          Focus: Visual Simplicity & Clear Steps
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Proceso Sencillo de 3 Pasos' : 'Simple 3-Step Process'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              {isSpanish ? '¿Cómo Funciona?' : 'How It Works'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Obtener servicio de cerrajería móvil en el Sur de la Florida es muy sencillo. Esto es lo que sucede al contactarnos:' 
                : 'Getting mobile locksmith service in South Florida is straightforward. Here is what to expect when you contact us:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-heading font-black text-amber-500/30">01</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-white uppercase tracking-tight">
                {isSpanish ? '1. LLAME PARA DESPACHO INMEDIATO' : '1. CALL FOR IMMEDIATE DISPATCH'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish ? (
                  <>Llame directamente a nuestra línea al <strong className="text-white">+1 754-261-6528</strong> o envíe un mensaje de texto. Hablará directamente con nuestro equipo sin menús complicados.</>
                ) : (
                  <>Call our direct dispatch line at <strong className="text-white">+1 754-261-6528</strong> or send us a text message. You will speak directly with our team with no complicated phone menus.</>
                )}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-heading font-black text-amber-500/30">02</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-white uppercase tracking-tight">
                {isSpanish ? '2. INDIQUE SU UBICACIÓN Y SERVICIO' : '2. TELL US YOUR LOCATION & SERVICE NEEDED'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Comparta su dirección actual o coordenadas, e indíquenos si se quedó afuera, perdió sus llaves o desea cambiar la combinación de sus cerraduras.' 
                  : 'Share your current address or coordinates, whether you are locked out, need replacement keys, or want your residential or commercial locks rekeyed.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-4 relative shadow-lg shadow-amber-500/5">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-heading font-black text-amber-400/50">03</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl text-white uppercase tracking-tight">
                {isSpanish ? '3. UN CERRAJERO MÓVIL VA A USTED' : '3. A MOBILE LOCKSMITH COMES TO YOU'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isSpanish 
                  ? 'Una camioneta taller completamente equipada llega directamente a su auto, casa o negocio para resolver el trabajo en el acto con total garantía.' 
                  : 'An equipped mobile workshop van arrives directly at your vehicle, home, or business to complete the service on-site with precision craftsmanship.'}
              </p>
            </div>

          </div>

          {/* Quick CTA beneath How It Works */}
          <div className="mt-12 text-center">
            <a
              href="tel:+17542616528"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{isSpanish ? 'Llamar Para Despacho Móvil: +1 754-261-6528' : 'Call For Mobile Dispatch: +1 754-261-6528'}</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. REVIEWS, RATINGS & DISPATCH TESTIMONIALS
          Focus: Verified South Florida Customer Experiences & Social Proof
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{isSpanish ? 'Opiniones Verificadas de Clientes' : 'Verified Customer Feedback'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              {isSpanish ? 'Opiniones y Calificaciones de Clientes' : 'Customer Reviews & Ratings'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Conozca los testimonios de conductores, propietarios de viviendas y comerciantes en Broward, Miami-Dade y Palm Beach que confían en nuestras camionetas de cerrajería móvil 24/7.' 
                : 'Read authentic feedback from drivers, homeowners, and business owners across Broward, Miami-Dade, and Palm Beach counties who rely on our 24/7 mobile locksmith vans.'}
            </p>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex flex-col items-center justify-center bg-slate-900 border border-amber-500/20 rounded-xl px-6 py-4 shrink-0">
                <span className="text-4xl sm:text-5xl font-black font-heading text-amber-400">4.9</span>
                <div className="flex items-center gap-1 text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">
                  {isSpanish ? '240+ Servicios Verificados' : '240+ Verified Dispatches'}
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {isSpanish ? 'Servicio 100% Móvil' : '100% Mobile Service'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {isSpanish ? 'Llegada en 15-25 Min' : 'Fast 15-25 Min Response'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {isSpanish ? 'Apertura Sin Daños' : 'Damage-Free Entry Focus'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {isSpanish ? 'Flota Móvil Confiable del Sur de la Florida' : "South Florida's Reliable Mobile Locksmith Fleet"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {isSpanish 
                    ? 'Los técnicos viajan directo a su ubicación con máquinas duplicadoras, programadores de chips automotrices y repuestos comerciales.' 
                    : 'Technicians travel directly to your location equipped with key-cutting machinery, transponder programmers, and commercial hardware.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+17542616528"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{isSpanish ? 'Llamar Ahora: (754) 261-6528' : 'Call Now: (754) 261-6528'}</span>
              </a>
            </div>
          </div>

          {/* 6 Real Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {rev.serviceBadge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{rev.author}</div>
                    <div className="text-[11px] text-slate-400">{rev.location}</div>
                  </div>
                  <span className="text-[10px] text-slate-500">{rev.dispatchType}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Emergency Dispatch Call Strip */}
          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-slate-400 mb-3">
              {isSpanish 
                ? '¿Se quedó afuera o necesita cerrajería móvil en su ubicación ahora mismo?' 
                : 'Locked out or need mobile locksmith service at your location right now?'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+17542616528"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{isSpanish ? 'Llamar a Despacho Móvil: (754) 261-6528' : 'Call Mobile Dispatch: (754) 261-6528'}</span>
              </a>
              <a
                href="sms:+17542616528"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>{isSpanish ? 'Enviar Ubicación por Texto' : 'Text Service Location'}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. SERVICE AREA (Interactive Map & South Florida Coverage)
          Focus: Tri-County Coverage Details
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Despacho Tri-Condal Móvil' : 'Tri-County Mobile Dispatch'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              {isSpanish ? 'Áreas de Servicio en el Sur de la Florida' : 'South Florida Service Areas'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish ? (
                <>Viajamos a su ubicación en el <strong className="text-white">Condado de Broward</strong>, el <strong className="text-white">Condado de Miami-Dade</strong> y el <strong className="text-white">Condado de Palm Beach</strong>. Seleccione cualquier ciudad para ver la cobertura.</>
              ) : (
                <>We travel to your location across <strong className="text-white">Broward County</strong>, <strong className="text-white">Miami-Dade County</strong>, and <strong className="text-white">Palm Beach County</strong>. Select any city below to explore local service coverage.</>
              )}
            </p>
          </div>

          {/* Interactive South Florida Map */}
          <SouthFloridaMap
            onSelectCity={(slug) => onNavigate(`/service-areas/${slug}`)}
            title={isSpanish ? "Mapa Interactivo de Cobertura Móvil en el Sur de la Florida" : "Interactive South Florida Mobile Coverage Map"}
            subtitle={isSpanish ? "Haga clic en cualquier ciudad o condado para conectarse directo con despacho móvil." : "Click any city or county below to connect directly with mobile dispatch."}
          />

          {/* 3 County Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="font-heading font-bold text-lg text-white flex items-center justify-between">
                <span>{isSpanish ? 'Condado de Broward' : 'Broward County'}</span>
                <span className="text-xs text-amber-400 font-normal">{isSpanish ? 'Despacho Activo' : 'Active Dispatch'}</span>
              </h3>
              <p className="text-xs text-slate-400">
                Coral Springs, Fort Lauderdale, Hollywood, Pompano Beach, Pembroke Pines, Davie, Sunrise, Plantation, and Deerfield Beach.
              </p>
              <button
                onClick={() => onNavigate('/service-areas/broward-county')}
                className="text-xs font-bold text-amber-400 hover:underline pt-2 flex items-center gap-1 cursor-pointer"
              >
                <span>{isSpanish ? 'Ver Cobertura de Broward →' : 'View Broward Coverage →'}</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="font-heading font-bold text-lg text-white flex items-center justify-between">
                <span>{isSpanish ? 'Condado de Miami-Dade' : 'Miami-Dade County'}</span>
                <span className="text-xs text-amber-400 font-normal">{isSpanish ? 'Despacho Activo' : 'Active Dispatch'}</span>
              </h3>
              <p className="text-xs text-slate-400">
                Miami, Miami Beach, Coral Gables, Doral, Aventura, Hialeah, North Miami, Kendall, and Homestead.
              </p>
              <button
                onClick={() => onNavigate('/service-areas/miami-dade-county')}
                className="text-xs font-bold text-amber-400 hover:underline pt-2 flex items-center gap-1 cursor-pointer"
              >
                <span>{isSpanish ? 'Ver Cobertura de Miami-Dade →' : 'View Miami-Dade Coverage →'}</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="font-heading font-bold text-lg text-white flex items-center justify-between">
                <span>{isSpanish ? 'Condado de Palm Beach' : 'Palm Beach County'}</span>
                <span className="text-xs text-amber-400 font-normal">{isSpanish ? 'Despacho Activo' : 'Active Dispatch'}</span>
              </h3>
              <p className="text-xs text-slate-400">
                Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Wellington, Jupiter, and Lake Worth.
              </p>
              <button
                onClick={() => onNavigate('/service-areas/palm-beach-county')}
                className="text-xs font-bold text-amber-400 hover:underline pt-2 flex items-center gap-1 cursor-pointer"
              >
                <span>{isSpanish ? 'Ver Cobertura de Palm Beach →' : 'View Palm Beach Coverage →'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. FAQ SECTION (Professional Accordion on Homepage)
          Focus: Exact User-Requested Questions
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Preguntas Frecuentes' : 'Common Questions'}</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              {isSpanish ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Respuestas claras sobre nuestro modelo de cerrajería móvil 24/7 en el Sur de la Florida.' 
                : 'Clear answers regarding our 24/7 mobile locksmith service model across South Florida.'}
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {currentFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-slate-950 border transition-all rounded-2xl overflow-hidden ${
                    isOpen ? 'border-amber-500/50 shadow-lg' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/faq')}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer"
            >
              <span>{isSpanish ? 'Ver Centro Completo de Preguntas' : 'View Full FAQ Center'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FINAL CALL-TO-ACTION SECTION
          Focus: Exact Prompt Requirement
          “Need a Locksmith?”
          “Call Pro Locksmith Tech for mobile locksmith service in South Florida.”
          Add a large: “CALL NOW” button.
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 relative overflow-hidden shadow-2xl">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-950/20 rounded-full text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span>{isSpanish ? 'Despacho de Emergencia 24/7 en el Sur de la Florida' : '24/7 South Florida Emergency Dispatch'}</span>
          </div>

          {/* Exact Requested Final Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight">
            {isSpanish ? '¿Necesita un Cerrajero?' : 'Need a Locksmith?'}
          </h2>

          {/* Exact Requested Final Subtitle */}
          <p className="text-slate-900 text-base sm:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
            {isSpanish 
              ? 'Llame a Pro Locksmith Tech para servicio de cerrajería móvil en el Sur de la Florida.' 
              : 'Call Pro Locksmith Tech for mobile locksmith service in South Florida.'}
          </p>

          {/* Large CALL NOW Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17542616528"
              className="w-full sm:w-auto px-10 py-5 bg-slate-950 hover:bg-slate-900 text-white font-black text-lg sm:text-xl rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
              aria-label="Call Pro Locksmith Tech now"
            >
              <Phone className="w-6 h-6 text-amber-400 fill-current animate-bounce" />
              <span>{isSpanish ? 'LLAMAR AHORA: +1 754-261-6528' : 'CALL NOW: +1 754-261-6528'}</span>
            </a>

            <a
              href="sms:+17542616528"
              className="w-full sm:w-auto px-8 py-5 bg-white/30 hover:bg-white/40 text-slate-950 font-extrabold text-base sm:text-lg rounded-2xl transition-colors flex items-center justify-center gap-2.5"
              aria-label="Text Pro Locksmith Tech"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{isSpanish ? 'ENVIAR TEXTO: (754) 261-6528' : 'TEXT US: (754) 261-6528'}</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-900/80 pt-2">
            {isSpanish 
              ? 'Respuesta inmediata por llamada · Servicio 100% Móvil — Vamos a Ti' 
              : 'Average response on call · 100% Mobile Service — We Come to You'}
          </p>
        </div>
      </section>

    </div>
  );
}
export default HomePage;
