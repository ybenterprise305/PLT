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
  Zap, 
  HelpCircle, 
  Star, 
  ShieldCheck 
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
import { trackPhoneClick } from '../utils/analytics';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const ENGLISH_REVIEWS = [
  {
    id: 'rev-en-1',
    author: 'Michael R.',
    location: 'Fort Lauderdale, FL (Las Olas)',
    serviceBadge: 'Verified Car Unlock',
    dispatchType: 'Automotive Emergency',
    quote: 'Locked my keys and phone in my car late on a Friday night near Las Olas. The mobile locksmith van arrived in 18 minutes. Used professional air wedge and reach tools to open the door in two minutes without scratching the window tint. Absolute lifesaver.'
  },
  {
    id: 'rev-en-2',
    author: 'Carlos & Elena M.',
    location: 'Coral Springs, FL (Ramblewood)',
    serviceBadge: 'Verified House Rekeying',
    dispatchType: 'Residential Rekeying',
    quote: 'We just moved into our home in Coral Springs and needed all exterior locks rekeyed immediately. The technician arrived on time with a complete key workshop in his van. Rekeyed all 6 Schlage deadbolts to one master key and cut extra copies on-site. Fast and upfront.'
  },
  {
    id: 'rev-en-3',
    author: 'David S.',
    location: 'Boca Raton, FL (Mizner Park)',
    serviceBadge: 'Commercial Storefront',
    dispatchType: 'Commercial Hardware',
    quote: "Our restaurant storefront door lock jammed on a busy Friday afternoon right before dinner service in Boca. Called the dispatch line, spoke to an active technician, and he was on-site in 22 minutes. Replaced the commercial mortise cylinder and aligned the strike plate perfectly."
  },
  {
    id: 'rev-en-4',
    author: 'Jessica T.',
    location: 'Miami Beach, FL (South Beach)',
    serviceBadge: 'Key Fob Programming',
    dispatchType: 'Lost Car Key Replacement',
    quote: 'Lost my proximity push-to-start fob on the beach. Dealership wanted hundreds for a tow and a 3-day wait. Pro Locksmith Tech drove straight to the parking garage, cut the laser emergency key, and programmed a brand-new smart key fob on the spot in 30 minutes.'
  },
  {
    id: 'rev-en-5',
    author: 'Robert K.',
    location: 'West Palm Beach, FL',
    serviceBadge: 'Trunk Lockout Bypass',
    dispatchType: 'Trunk Lockout',
    quote: "Slammed my trunk shut with my car keys inside while loading groceries in West Palm Beach. Roadside assistance gave up on the deadlock. Pro Locksmith Tech decoded the driver cylinder directly and released the latch in minutes with zero damage."
  },
  {
    id: 'rev-en-6',
    author: 'Amanda L.',
    location: 'Pembroke Pines, FL',
    serviceBadge: 'Smart Deadbolt Setup',
    dispatchType: 'Residential Security',
    quote: 'Tried installing an electronic keypad deadbolt myself, but our heavy Florida impact door kept jamming. The locksmith mortised the strike plate deeper, aligned the latch smoothly, and programmed the keypad. Highly recommended!'
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  const { isSpanish } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  // Service Area Business (SAB) Backend JSON-LD Schema
  // Complies with Google hidden-address rules: city/state/zip only, no physical street address line
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Locksmith", "LocalBusiness", "AutomotiveBusiness"],
        "@id": "https://prolocksmith-tech.com/#locksmith",
        "name": "Pro Locksmith Tech",
        "url": "https://prolocksmith-tech.com",
        "image": "https://prolocksmith-tech.com/icon-512.png",
        "telephone": "+1-754-261-6528",
        "email": "prolocksmithtech@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Mobile Pay, Apple Pay, Google Pay",
        "currenciesAccepted": "USD",
        "description": "24/7 Mobile Locksmith Service in South Florida. Direct on-site emergency dispatch for car lockouts, laser key replacement, transponder key fobs, house rekeying, and commercial master key systems across Broward, Miami-Dade, and Palm Beach counties.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coral Springs",
          "addressRegion": "FL",
          "postalCode": "33076",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "City", "name": "Coral Springs", "sameAs": "https://en.wikipedia.org/wiki/Coral_Springs,_Florida" },
          { "@type": "City", "name": "Fort Lauderdale" },
          { "@type": "City", "name": "Pompano Beach" },
          { "@type": "City", "name": "Boca Raton" },
          { "@type": "City", "name": "Hollywood" },
          { "@type": "City", "name": "Miami" },
          { "@type": "City", "name": "West Palm Beach" },
          { "@type": "City", "name": "Pembroke Pines" },
          { "@type": "AdministrativeArea", "name": "Broward County, FL" },
          { "@type": "AdministrativeArea", "name": "Miami-Dade County, FL" },
          { "@type": "AdministrativeArea", "name": "Palm Beach County, FL" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "248",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile Locksmith Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Automotive Car Lockouts & Key Replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transponder Chip Key & Push-to-Start Fob Programming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential House Rekeying & Deadbolt Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Storefront Hardware & Master Key Systems" } }
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
          ? "Cerrajería Móvil 24/7 en el Sur de la Florida | Pro Locksmith Tech"
          : "24/7 Mobile Locksmith in South Florida | Pro Locksmith Tech"}
        description={isSpanish
          ? "¿Se quedó afuera o necesita llaves nuevas? Pro Locksmith Tech brinda cerrajería móvil 24/7 en todo el Sur de la Florida. Car keys, lockouts, rekeying y más. Llame al (754) 261-6528."
          : "Locked out or need new keys? Pro Locksmith Tech provides 24/7 mobile locksmith services across South Florida. Car keys, lockouts, rekeying and more. Call now."}
        canonicalPath="/"
        keywords="locksmith South Florida, cerrajero South Florida, mobile locksmith South Florida, emergency locksmith, car lockout, house lockouts, commercial locksmith, transponder key programming, lock rekeying"
      />

      {/* Structured JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* =========================================================================
          1. HERO SECTION — CRO FOCUS: High Urgency, 15-25 Min Arrival, Direct CTA
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Immediate Value Prop & High-Contrast CTA */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              {/* Emergency Service Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>
                  {isSpanish 
                    ? 'Despacho Activo 24/7 · Llegada en 15–25 Minutos'
                    : 'Active 24/7 Mobile Dispatch · 15–25 Min Average Arrival'}
                </span>
              </div>

              {/* Bold Conversion Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                {isSpanish ? (
                  <>Cerrajería Móvil 24/7 <span className="text-amber-400">en el Sur de la Florida</span></>
                ) : (
                  <>24/7 Mobile Locksmith <span className="text-amber-400">Services in South Florida</span></>
                )}
              </h1>

              {/* Persuasive, Fast-to-Digest Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {isSpanish ? (
                  <>¿Se quedó afuera de su auto, casa o negocio? Pro Locksmith Tech brinda servicios profesionales de cerrajería móvil directamente en su ubicación en todo el Sur de la Florida.</>
                ) : (
                  <>Locked out of your car, home, or business? Pro Locksmith Tech provides professional mobile locksmith services directly at your location across South Florida.</>
                )}
              </p>

              {/* Prominent Core USPs (Scannable Bold Bullet Grid) */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/90 border border-amber-500/30 text-slate-100">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-left">{isSpanish ? 'Llegada Rápida en 15–25 Min' : '15–25 Min Rapid Arrival'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/90 border border-amber-500/30 text-amber-300">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-left">{isSpanish ? '100% Móvil — Vamos a Ti' : 'Mobile — We Come to You'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-left">{isSpanish ? 'Respuesta Inmediata 24/7' : '24/7 Live Emergency Response'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-left">{isSpanish ? 'Apertura Sin Daños Garantizada' : 'Damage-Free Entry Focus'}</span>
                </div>
              </div>

              {/* High-Contrast Thumb-Friendly Call-To-Action Box */}
              <div className="bg-slate-950 border-2 border-amber-500 rounded-2xl p-4 sm:p-5 max-w-2xl mx-auto lg:mx-0 shadow-2xl shadow-amber-500/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pb-2.5 mb-3 border-b border-slate-800 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    {isSpanish ? 'Línea de Despacho en Vivo' : 'Live Locksmith Dispatch'}
                  </span>
                  <span>{isSpanish ? 'Hable directamente con un técnico en servicio' : 'Direct line · No automated phone menus'}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary Call Us Now Button */}
                  <a
                    href="tel:+17542616528"
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    aria-label="Call Pro Locksmith Tech Now at 754-261-6528"
                  >
                    <Phone className="w-5 h-5 fill-current animate-bounce" />
                    <span>{isSpanish ? 'LLAMAR AHORA: (754) 261-6528' : 'CALL US NOW: (754) 261-6528'}</span>
                  </a>

                  {/* Secondary Quick Text Option */}
                  <a
                    href="sms:+17542616528"
                    className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 hover:text-amber-400 font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                    aria-label="Text Pro Locksmith Tech"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>{isSpanish ? 'Enviar Texto' : 'Text Location'}</span>
                  </a>
                </div>
              </div>

              {/* Social Proof Star Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-400">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5.0 Rating</span>
                <span>•</span>
                <span>{isSpanish ? '240+ Servicios en el Sur de la Florida' : '240+ Verified Dispatches in South Florida'}</span>
              </div>
            </div>

            {/* Right Column: Clean Mobile Van Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
                <div className="absolute top-4 left-4 z-10 bg-slate-950/95 backdrop-blur-md py-1.5 px-3.5 rounded-full border border-amber-500/40 flex items-center shadow-lg">
                  <Logo size="xs" showText={true} textColor="light" />
                </div>

                <img
                  src={locksmithVanImg}
                  alt="Pro Locksmith Tech mobile locksmith van on patrol in South Florida"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">
                        {isSpanish ? 'Taller Móvil en Carretera' : 'Fully Equipped Mobile Workshop'}
                      </div>
                      <div className="text-xs text-amber-400">
                        {isSpanish ? 'Servicio Móvil · Broward · Miami-Dade · Palm Beach' : '24/7 Mobile Service · Broward · Miami-Dade · Palm Beach'}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider">
                      {isSpanish ? '15–25 Min' : '15–25 Min ETA'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. IMMEDIATE EMERGENCY ACTION SELECTOR (CRO Quick-Tap Grid)
          ========================================================================= */}
      <section className="py-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
              {isSpanish ? '¿Cuál Es Su Emergencia en Este Momento?' : 'Select Your Emergency Service For Immediate Dispatch'}
            </h2>
            <p className="text-sm text-slate-300">
              {isSpanish 
                ? 'Toque para llamar directamente y conectar con un técnico en camino a su ubicación' 
                : 'Tap to call directly and connect with an active technician dispatched to your location'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Action 1: Car Lockout */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-sm">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {isSpanish ? 'Auto Cerrado / Llaves Adentro' : 'Car Lockout & Trunk'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish ? 'Apertura rápida sin rayar marcos ni vidrios. Llegada promedio 15-20 min.' : 'Fast, damage-free entry for all makes. Keys locked in cab or trunk released safely.'}
                </p>
              </div>
              <a
                href="tel:+17542616528"
                className="mt-4 w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar: Abrir Auto' : 'Call: Unlock Car Now'}</span>
              </a>
            </div>

            {/* Action 2: House Lockout */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-sm">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {isSpanish ? 'Casa o Apartamento Cerrado' : 'House & Condo Lockout'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish ? 'Acceso rápido y seguro a puertas principales y de patio sin dañar la madera.' : 'Fast entry through front deadbolts, smart keypads, and sliding patio doors.'}
                </p>
              </div>
              <a
                href="tel:+17542616528"
                className="mt-4 w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar: Abrir Casa' : 'Call: Unlock House'}</span>
              </a>
            </div>

            {/* Action 3: Key Fobs & Lost Keys */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-sm">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {isSpanish ? 'Llaves de Auto y Controles' : 'Car Key Replacement & Fobs'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish ? 'Corte láser y programación OBD de llaves inteligentes en el acto sin grúa.' : 'Laser cutting & push-to-start fob programming on-site when all keys are lost.'}
                </p>
              </div>
              <a
                href="tel:+17542616528"
                className="mt-4 w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar: Llave Nueva' : 'Call: Make New Key'}</span>
              </a>
            </div>

            {/* Action 4: Commercial & Rekeying */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-sm">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {isSpanish ? 'Cerrajería Comercial y Rekey' : 'Business Locks & Rekeying'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish ? 'Cerraduras comerciales, barras antipánico y cambio de combinación inmediato.' : 'Storefront mortise locks, crash bars, master key systems, and commercial rekeys.'}
                </p>
              </div>
              <a
                href="tel:+17542616528"
                className="mt-4 w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar: Comercial' : 'Call: Business Service'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DEDICATED MOBILE SERVICE EXPLANATION ("We Come to You")
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{isSpanish ? '100% Cerrajería Móvil — Sin Tienda Física' : '100% Mobile Service — We Come to You'}</span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
                  {isSpanish ? (
                    <>El Taller de Cerrajería Viene a <span className="text-amber-400">Su Ubicación</span></>
                  ) : (
                    <>A Complete Locksmith Workshop <span className="text-amber-400">At Your Door</span></>
                  )}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {isSpanish ? (
                    <>Pro Locksmith Tech no es una tienda de mostrador donde usted tiene que llevar piezas o esperar días. Nuestras camionetas son talleres móviles de alta tecnología equipadas con máquinas de corte computarizadas por láser, equipos diagnósticos OBD para llaves con chip y repuestos de cerraduras Grado 1.</>
                  ) : (
                    <>You never need to tow your car to a dealership or remove jammed deadbolts to carry into a store. Our mobile locksmith vehicles arrive directly at your location equipped with computerized laser key cutters, OBD-II transponder diagnostics, and heavy-duty locks to solve your issue on the spot.</>
                  )}
                </p>

                {/* 3 Core Convenience Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-white text-sm flex items-center gap-1.5 mb-1">
                      <Car className="w-4 h-4 text-amber-400" />
                      <span>{isSpanish ? 'En Su Auto' : 'At Your Car'}</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {isSpanish ? 'Apertura inmediata y llaves con chip programadas al lado de su carro.' : 'Keys cut & push-to-start fobs programmed right by your driver door.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-white text-sm flex items-center gap-1.5 mb-1">
                      <Home className="w-4 h-4 text-amber-400" />
                      <span>{isSpanish ? 'En Su Casa' : 'At Your Home'}</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {isSpanish ? 'Aperturas, rekeying de todas las puertas y cerraduras smart instaladas.' : 'Lockouts, whole-house rekeying packages, and smart deadbolt setups.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-white text-sm flex items-center gap-1.5 mb-1">
                      <Building2 className="w-4 h-4 text-amber-400" />
                      <span>{isSpanish ? 'En Su Negocio' : 'At Your Business'}</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {isSpanish ? 'Puertas comerciales, cerraduras de embutir y barras antipánico.' : 'Storefront unlocks, commercial rekeys, panic bars, and master key systems.'}
                    </p>
                  </div>
                </div>

                {/* Direct Call Button */}
                <div className="pt-2">
                  <a
                    href="tel:+17542616528"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>{isSpanish ? 'Solicitar Técnico Móvil: (754) 261-6528' : 'Dispatch Mobile Locksmith: (754) 261-6528'}</span>
                  </a>
                </div>
              </div>

              {/* Real Crew Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                  <img
                    src={locksmithCrewImg}
                    alt="Pro Locksmith Tech mobile service team"
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-xs text-amber-400 font-bold">
                    {isSpanish ? 'Equipo de Cerrajería Móvil en Todo el Sur de la Florida' : 'Dedicated Mobile Technicians on Duty 24/7'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FOUR CORE SERVICE DIVISIONS (CRO & Semantic Keyword Depth)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {isSpanish ? 'Nuestras 4 Divisiones de Cerrajería' : 'Comprehensive Locksmith Capabilities'}
            </h2>
            <p className="font-heading font-black text-2xl sm:text-4xl text-white">
              {isSpanish ? 'Servicios Profesionales de Cerrajería Móvil' : 'High-Quality Lock & Key Services on Wheels'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Automotive Locksmith */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase text-amber-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {isSpanish ? 'En Su Auto' : 'Roadside & Parking'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {isSpanish ? 'Cerrajería Automotriz' : 'Automotive Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {isSpanish 
                      ? 'Aperturas de autos sin daños, llaves nuevas cortadas por láser y programación de chips transponder.'
                      : 'Car lockouts, laser-cut key duplication, transponder programming, and push-to-start smart fobs.'}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Car lockouts:</strong> Non-destructive air-wedge bypass (doors &amp; trunks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Key replacement:</strong> All keys lost origination for domestic, Asian &amp; European</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Transponder fobs:</strong> OBD-II diagnostic chip pairing &amp; push-to-start remotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Ignitions:</strong> Sticking ignition repair, cylinder rebuilds &amp; broken key extraction</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 flex items-center justify-between gap-3 border-t border-slate-800 mt-4">
                <a
                  href="tel:+17542616528"
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Auto' : 'Call For Car Service'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/automotive-locksmith')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. Residential Locksmith */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Home className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase text-amber-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {isSpanish ? 'En Su Casa' : 'House & Condo'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {isSpanish ? 'Cerrajería Residencial' : 'Residential Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {isSpanish 
                      ? 'Aperturas de casas, cambio de combinación (rekeying), cerrojos de alta seguridad y cerraduras smart.'
                      : 'Emergency house lockouts, lock rekeying, high-security deadbolts, and smart keypad installation.'}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Home lockouts:</strong> Rapid entry through front doors, knobs &amp; patio sliders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Lock rekeying:</strong> Repin existing cylinders so old keys cannot open your home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Lock replacement:</strong> ANSI Grade 1 &amp; 2 deadbolts installed with reinforced strike plates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Smart locks:</strong> Keypad &amp; Wi-Fi digital lock setup calibrated for heavy Florida doors</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 flex items-center justify-between gap-3 border-t border-slate-800 mt-4">
                <a
                  href="tel:+17542616528"
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Casa' : 'Call For Home Service'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/residential-locksmith')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. Commercial Locksmith */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase text-amber-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {isSpanish ? 'En Su Negocio' : 'Storefront & Office'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {isSpanish ? 'Cerrajería Comercial' : 'Commercial Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {isSpanish 
                      ? 'Cerraduras comerciales para puertas de aluminio y vidrio, barras antipánico y llaves maestras.'
                      : 'Commercial lockouts, Adams Rite mortise cylinders, panic crash bars, and master key systems.'}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Business lockouts:</strong> Emergency unlock for retail glass doors &amp; commercial suites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Master key systems:</strong> Tiered key hierarchy for property managers &amp; staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Exit hardware:</strong> Panic exit crash bars &amp; fire-code compliant egress hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Commercial rekeys:</strong> Instant rekeying following employee turnover or lease changes</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 flex items-center justify-between gap-3 border-t border-slate-800 mt-4">
                <a
                  href="tel:+17542616528"
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar Por Negocio' : 'Call For Business'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/commercial-locksmith')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4. Emergency Locksmith */}
            <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase text-amber-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {isSpanish ? 'Prioridad 24/7' : '24/7 Priority'}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {isSpanish ? 'Cerrajería de Emergencia 24/7' : '24/7 Emergency Locksmith'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {isSpanish 
                      ? 'Despacho prioritario día y noche ante llaves rotas, autos cerrados o cerraduras trabadas.'
                      : 'Immediate emergency dispatch across South Florida for urgent lockouts, broken keys & security incidents.'}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>15–25 Min Arrival:</strong> The closest active mobile technician is sent directly to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Broken key extraction:</strong> Safe removal from door cylinders &amp; car ignitions without damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Lost key generation:</strong> Brand-new key cut on-site so you are never stranded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Direct Phone Line:</strong> Speak with a technician immediately with zero automated hold</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 flex items-center justify-between gap-3 border-t border-slate-800 mt-4">
                <a
                  href="tel:+17542616528"
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Llamar a Emergencias' : 'Call 24/7 Emergency'}</span>
                </a>
                <button
                  onClick={() => onNavigate('/services/emergency-lockout-service')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SOCIAL PROOF & TESTIMONIALS (Instant Trust Building)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              {isSpanish ? 'Opiniones Reales de Clientes en el Sur de la Florida' : 'Real Reviews from South Florida Drivers & Homeowners'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSpanish 
                ? 'Testimonios verificados de clientes en Coral Springs, Fort Lauderdale, Boca Raton y Miami.' 
                : 'See why local residents rely on our fast mobile dispatch for lockouts, rekeying, and car keys.'}
            </p>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="bg-slate-900 border border-amber-500/30 rounded-xl px-6 py-3.5 flex flex-col items-center">
                <span className="text-4xl font-heading font-black text-amber-400">4.9</span>
                <div className="flex items-center gap-1 text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-bold mt-1">240+ Dispatches</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white font-heading">
                  {isSpanish ? 'Flota de Cerrajería Móvil Más Confiable' : 'South Florida’s Trusted Mobile Locksmith Fleet'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {isSpanish 
                    ? 'Técnicos calificados que llegan directamente a su ubicación con herramientas profesionales.' 
                    : '15–25 min average mobile response. Damage-free vehicle entry and upfront pricing.'}
                </p>
              </div>
            </div>

            <a
              href="tel:+17542616528"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{isSpanish ? 'Llamar: (754) 261-6528' : 'Call (754) 261-6528'}</span>
            </a>
          </div>

          {/* 6 Real Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentReviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
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

        </div>
      </section>

      {/* =========================================================================
          6. SERVICE AREA MAP (Coral Springs Hub & Tri-County Dispatch)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Despacho Móvil en el Sur de la Florida' : 'Tri-County Mobile Dispatch Radius'}</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              {isSpanish ? 'Cobertura Móvil en Todo el Sur de la Florida' : '24/7 Mobile Locksmith Coverage Across South Florida'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSpanish 
                ? 'Nuestras camionetas taller patrullan activamente Broward, Miami-Dade y Palm Beach para llegar rápido a donde esté.' 
                : 'Mobile dispatch across Broward, Miami-Dade, and Palm Beach counties. We come directly to your vehicle, home, or business.'}
            </p>
          </div>

          {/* Interactive Map Component */}
          <SouthFloridaMap
            onSelectCity={(slug) => onNavigate(`/service-areas/${slug}`)}
            title={isSpanish ? "Mapa de Despacho de Cerrajería Móvil" : "Interactive South Florida Mobile Coverage Map"}
            subtitle={isSpanish ? "Haga clic en cualquier ciudad para abrir los detalles de servicio local." : "Click any city or county below to connect directly with active mobile dispatch."}
          />
        </div>
      </section>

      {/* =========================================================================
          7. AEO-OPTIMIZED FAQ ACCORDION (Clear Answers for Search Engines & AI)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Preguntas Frecuentes' : 'Direct Answers'}</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              {isSpanish ? 'Preguntas Frecuentes sobre el Servicio' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSpanish 
                ? 'Respuestas claras sobre nuestro modelo de cerrajería móvil 24/7 en Coral Springs y el Sur de la Florida.' 
                : 'Clear, direct answers regarding our 24/7 mobile locksmith service model across South Florida.'}
            </p>
          </div>

          {/* FAQ Accordions with H3 headings and clean answers */}
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
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider cursor-pointer"
            >
              <span>{isSpanish ? 'Ver Todas las Preguntas' : 'View Full FAQ Center'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. FINAL EMERGENCY CTA SECTION (Unmissable Conversion Trigger)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-center relative overflow-hidden shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-5 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950/20 rounded-full text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span>{isSpanish ? 'Despacho de Emergencia 24/7' : '24/7 Emergency Dispatch Active'}</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight">
            {isSpanish ? '¿Necesita un Cerrajero Ahora Mismo?' : 'Need a Locksmith Right Now?'}
          </h2>

          <p className="text-slate-950 font-bold text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {isSpanish 
              ? 'Llame a Pro Locksmith Tech al (754) 261-6528. Llegada promedio de 15 a 25 minutos directamente a su ubicación en el Sur de la Florida.' 
              : 'Call Pro Locksmith Tech at (754) 261-6528 for fast 15–25 min mobile dispatch across South Florida.'}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+17542616528"
              onClick={() => trackPhoneClick({ ctaLocation: 'home_bottom_cta', pagePath: '/' })}
              className="w-full sm:w-auto px-10 py-5 bg-slate-950 hover:bg-slate-900 text-white font-black text-lg sm:text-xl rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
              aria-label="Call Pro Locksmith Tech now at 754-261-6528"
            >
              <Phone className="w-6 h-6 text-amber-400 fill-current animate-bounce" />
              <span>CALL NOW: (754) 261-6528</span>
            </a>

            <a
              href="sms:+17542616528"
              className="w-full sm:w-auto px-8 py-5 bg-white/30 hover:bg-white/40 text-slate-950 font-extrabold text-base sm:text-lg rounded-2xl transition-colors flex items-center justify-center gap-2"
              aria-label="Text Pro Locksmith Tech"
            >
              <MessageSquare className="w-5 h-5" />
              <span>TEXT (754) 261-6528</span>
            </a>
          </div>

          <p className="text-xs font-semibold text-slate-900/80 pt-1">
            {isSpanish 
              ? 'Servicio 100% Móvil · Vamos a Donde Estés · En Todo el Sur de la Florida' 
              : '100% Mobile Service — We Come to You Throughout Our South Florida Service Area'}
          </p>
        </div>
      </section>

    </div>
  );
}
export default HomePage;
