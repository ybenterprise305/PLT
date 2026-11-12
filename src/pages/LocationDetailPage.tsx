import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { getCityBySlug, getCountyBySlug } from '../data/locationsData';
import { SEOHead } from '../components/SEOHead';
import { locksmithVanImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_COUNTIES } from '../data/spanishTranslations';
import { trackPhoneClick } from '../utils/analytics';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function LocationDetailPage({ slug, onNavigate }: LocationDetailPageProps) {
  const { isSpanish } = useLanguage();
  const cityMatch = getCityBySlug(slug);
  const countyMatch = getCountyBySlug(slug);

  if (cityMatch) {
    const { city, county } = cityMatch;

    // Comprehensive JSON-LD LocalBusiness + Breadcrumbs + FAQ Schema for AEO
    const citySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Locksmith", "LocalBusiness", "AutomotiveBusiness"],
          "@id": `https://prolocksmith-tech.com/service-areas/${city.slug}#locksmith`,
          "name": `Pro Locksmith Tech - Mobile Locksmith in ${city.name}, FL`,
          "url": `https://prolocksmith-tech.com/service-areas/${city.slug}`,
          "telephone": "+1-754-261-6528",
          "email": "prolocksmithtech@gmail.com",
          "image": "https://prolocksmith-tech.com/icon-512.png",
          "priceRange": "$$",
          "currenciesAccepted": "USD",
          "paymentAccepted": "Cash, Credit Card, Debit Card, Mobile Pay",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coral Springs",
            "addressRegion": "FL",
            "postalCode": "33076",
            "addressCountry": "US"
          },
          "description": `24/7 mobile locksmith service in ${city.name}, ${county.name}, Florida. We come directly to your vehicle, home, or business for car lockouts, rekeying, lock replacement, and key programming.`,
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": city.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": `${county.name}, Florida`
              }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "248",
            "bestRating": "5",
            "worstRating": "1"
          },
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Emergency Car & Home Lockout Service in ${city.name}`,
                "description": `Fast 24/7 non-destructive door unlock dispatch for vehicles, houses, and offices in ${city.name}, FL.`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Car Key Replacement & Key Fob Programming in ${city.name}`,
                "description": `Mobile automotive key cutting, transponder programming, and push-to-start fob duplication on-site in ${city.name}.`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Residential Lock Rekeying & Deadbolts in ${city.name}`,
                "description": `Whole-house lock changes, cylinder rekeying, and high-security deadbolts installed at your ${city.name} residence.`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Commercial Storefront Locks & Master Key Systems in ${city.name}`,
                "description": `Commercial door hardware, Adams Rite mortise locks, crash bars, and master rekeying for businesses in ${city.name}.`
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://prolocksmith-tech.com/service-areas/${city.slug}#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prolocksmith-tech.com/" },
            { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://prolocksmith-tech.com/service-areas" },
            { "@type": "ListItem", "position": 3, "name": county.name, "item": `https://prolocksmith-tech.com/service-areas/${county.slug}` },
            { "@type": "ListItem", "position": 4, "name": city.name, "item": `https://prolocksmith-tech.com/service-areas/${city.slug}` }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": `https://prolocksmith-tech.com/service-areas/${city.slug}#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Do you have a physical locksmith store in ${city.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `No. Pro Locksmith Tech is 100% mobile. We do not have a customer storefront. Our technicians arrive directly at your location in ${city.name} with fully equipped mobile workshop vans.`
              }
            },
            {
              "@type": "Question",
              "name": `How fast can a mobile locksmith arrive in ${city.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Our mobile technicians actively patrol ${city.name} and ${county.name}. Typical emergency response time is 15-25 minutes depending on traffic. Call +1 (754) 261-6528 for real-time dispatch.`
              }
            },
            {
              "@type": "Question",
              "name": `Can you make replacement car keys on-site in ${city.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes. Our vans carry computer-controlled laser key cutters and OBD-II transponder programmers capable of creating replacement keys and fobs for most vehicle makes and models right in ${city.name}.`
              }
            }
          ]
        }
      ]
    };

    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
        <SEOHead
          title={isSpanish ? `Cerrajería Móvil 24/7 en ${city.name}, FL | Pro Locksmith Tech` : city.metaTitle}
          description={isSpanish 
            ? `¿Se quedó afuera de su auto, casa o negocio en ${city.name}? Pro Locksmith Tech brinda cerrajería móvil 24/7. Llegamos a su ubicación en ${city.name}. Llame al (754) 261-6528.` 
            : city.metaDescription}
          canonicalPath={`/service-areas/${city.slug}`}
          keywords={`locksmith ${city.name}, cerrajero ${city.name}, emergency locksmith ${city.name}, mobile locksmith ${city.name}, locksmith ${county.name}, locksmith South Florida`}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
        />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-400 transition-colors cursor-pointer">
              {isSpanish ? 'Inicio' : 'Home'}
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/service-areas')} className="hover:text-amber-400 transition-colors cursor-pointer">
              {isSpanish ? 'Áreas de Servicio' : 'Service Areas'}
            </button>
            <span>/</span>
            <button onClick={() => onNavigate(`/service-areas/${county.slug}`)} className="hover:text-amber-400 transition-colors cursor-pointer">
              {county.name}
            </button>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{city.name}</span>
          </div>

          {/* City Hero */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isSpanish ? `Servicio Móvil en ${city.name}, FL` : `Mobile Service in ${city.name}, FL`}</span>
                </div>

                <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  {isSpanish ? 'Servicios de Cerrajería en ' : 'Locksmith Services in '}
                  <span className="text-amber-400">{city.name}</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {isSpanish 
                    ? `¿Necesita un cerrajero móvil en ${city.name}? Pro Locksmith Tech despacha unidades móviles de cerrajería directamente a su vehículo, casa o negocio. Atendemos aperturas de emergencia, cambio de cerraduras, rekeying y llaves de auto en el lugar.` 
                    : city.customIntro}
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a
                    href="tel:+17542616528"
                    onClick={() => trackPhoneClick({ ctaLocation: 'city_hero_call', pagePath: `/service-areas/${city.slug}` })}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current animate-pulse" />
                    <span>{isSpanish ? 'Llamar Ahora: (754) 261-6528' : 'Call Now: (754) 261-6528'}</span>
                  </a>

                  <a
                    href="sms:+17542616528"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[48px] rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>{isSpanish ? 'Enviar Mensaje de Texto' : 'Text For Dispatch'}</span>
                  </a>
                </div>
              </div>

              {/* Service Van Photo */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                  <img
                    src={locksmithVanImg}
                    alt={`Locksmith service van in ${city.name}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-[11px] text-amber-400 font-bold">
                    {isSpanish ? `Cobertura Móvil Activa · ${city.name}, FL` : `Active Mobile Coverage · ${city.name}, FL`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>{isSpanish ? `Servicios Destacados en ${city.name}` : `${city.name} Service Highlights`}</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {city.serviceHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>{isSpanish ? 'Modelo de Despacho Móvil 24/7' : '24/7 Mobile Dispatch Model'}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isSpanish 
                  ? `Pro Locksmith Tech atiende a ${city.name} con camionetas taller móviles equipadas con duplicadoras de llaves, programadores de chips automotrices y cerraduras de repuesto.` 
                  : `Pro Locksmith Tech serves ${city.name} through mobile workshop vans equipped with key duplication cutters, transponder programmers, and replacement locksets.`}
              </p>
              <div className="pt-2 text-xs text-slate-300">
                <strong>{isSpanish ? 'Códigos Postales Atendidos:' : 'Serving Zip Codes:'}</strong> {city.zipCodes.join(', ')}
              </div>
              <div className="pt-2">
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: 'city_sidebar_call', pagePath: `/service-areas/${city.slug}` })}
                  className="w-full py-3.5 min-h-[48px] bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>{isSpanish ? `Llamar a Técnico en ${city.name}: (754) 261-6528` : `Call ${city.name} Technician: +1 754-261-6528`}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Neighboring Cities in County */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-heading font-bold text-sm text-white mb-3 uppercase tracking-wider text-amber-400">
              {isSpanish ? `Otras Ciudades Atendidas en ${county.name}` : `Other Cities Served in ${county.name}`}
            </h4>
            <div className="flex flex-wrap gap-2">
              {county.majorCities
                .filter(c => c.id !== city.id)
                .map(neighbor => (
                  <button
                    key={neighbor.id}
                    onClick={() => onNavigate(`/service-areas/${neighbor.slug}`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 text-xs border border-slate-800 transition-colors cursor-pointer"
                  >
                    {neighbor.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (countyMatch) {
    const county = countyMatch;
    const spanishCounty = SPANISH_COUNTIES[county.slug];

    // County Schema for AEO
    const countySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Locksmith", "LocalBusiness", "AutomotiveBusiness"],
          "@id": `https://prolocksmith-tech.com/service-areas/${county.slug}#locksmith`,
          "name": `Pro Locksmith Tech - Mobile Locksmith in ${county.fullName}`,
          "url": `https://prolocksmith-tech.com/service-areas/${county.slug}`,
          "telephone": "+1-754-261-6528",
          "email": "prolocksmithtech@gmail.com",
          "image": "https://prolocksmith-tech.com/icon-512.png",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coral Springs",
            "addressRegion": "FL",
            "postalCode": "33076",
            "addressCountry": "US"
          },
          "description": `24/7 mobile locksmith dispatch across all cities in ${county.fullName}, Florida.`,
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": `${county.name}, Florida`
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "248"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://prolocksmith-tech.com/service-areas/${county.slug}#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prolocksmith-tech.com/" },
            { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://prolocksmith-tech.com/service-areas" },
            { "@type": "ListItem", "position": 3, "name": county.name, "item": `https://prolocksmith-tech.com/service-areas/${county.slug}` }
          ]
        }
      ]
    };

    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
        <SEOHead
          title={isSpanish ? `Cerrajería Móvil en el ${county.name}, FL | Pro Locksmith Tech` : county.metaTitle}
          description={isSpanish 
            ? `Cerrajería móvil 24 horas en el ${county.name}, Florida. Apertura de autos, cambio de cerraduras y llaves nuevas a domicilio. Llame al (754) 261-6528.` 
            : county.metaDescription}
          canonicalPath={`/service-areas/${county.slug}`}
          keywords={`locksmith ${county.name}, cerrajero ${county.name}, emergency locksmith ${county.name}, mobile locksmith ${county.name}, locksmith South Florida`}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(countySchema) }}
        />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-400 transition-colors cursor-pointer">
              {isSpanish ? 'Inicio' : 'Home'}
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/service-areas')} className="hover:text-amber-400 transition-colors cursor-pointer">
              {isSpanish ? 'Áreas de Servicio' : 'Service Areas'}
            </button>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{county.name}</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Condado del Sur de la Florida' : 'South Florida County'}</span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {isSpanish ? 'Servicios de Cerrajería en el ' : 'Locksmith Services in '}
                <span className="text-amber-400">{spanishCounty ? spanishCounty.name : county.fullName}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish && spanishCounty ? spanishCounty.overview : county.overview}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: 'county_hero_call', pagePath: `/service-areas/${county.slug}` })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>{isSpanish ? `Llamar a Despacho de ${county.name}: (754) 261-6528` : `Call ${county.name} Dispatch: (754) 261-6528`}</span>
                </a>

                <a
                  href="sms:+17542616528"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[48px] rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>{isSpanish ? 'Enviar Mensaje' : 'Text Us'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cities Directory for this County */}
          <div className="space-y-6">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              {isSpanish ? `Ciudades Atendidas en el ${county.name}` : `Cities Served in ${county.name}`}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {county.majorCities.map((city) => (
                <div
                  key={city.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">
                      {city.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {isSpanish 
                        ? `Cerrajería móvil 24 horas y apertura de autos en ${city.name}, FL.` 
                        : city.customIntro}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(`/service-areas/${city.slug}`)}
                    className="w-full py-2 px-3 bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-slate-950 rounded-lg text-xs font-bold border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSpanish ? `Ver ${city.name}` : `View ${city.name}`}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="text-center max-w-md bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-white">
          {isSpanish ? 'Ubicación No Encontrada' : 'Location Not Found'}
        </h2>
        <button
          onClick={() => onNavigate('/service-areas')}
          className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs cursor-pointer"
        >
          {isSpanish ? 'Ver Todas las Áreas de Servicio' : 'View All South Florida Service Areas'}
        </button>
      </div>
    </div>
  );
}
