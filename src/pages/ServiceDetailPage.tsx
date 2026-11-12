import React from 'react';
import { 
  KeyRound, 
  Phone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  AlertTriangle, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { techRekeyingImg, carKeyProgImg, keyMachineImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_SERVICES } from '../data/spanishTranslations';
import { trackPhoneClick } from '../utils/analytics';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const { t, isSpanish } = useLanguage();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4">
          <KeyRound className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="font-heading font-bold text-2xl text-white">
            {isSpanish ? 'Servicio No Encontrado' : 'Service Not Found'}
          </h2>
          <button
            onClick={() => onNavigate('/services')}
            className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs cursor-pointer"
          >
            {isSpanish ? 'Volver a Todos los Servicios' : 'Back to All Locksmith Services'}
          </button>
        </div>
      </div>
    );
  }

  const esData = SPANISH_SERVICES[service.slug];
  const serviceName = isSpanish && esData ? esData.name : service.name;
  const serviceBadge = isSpanish && esData ? esData.badge : (service.badge || service.category);
  const serviceShortDesc = isSpanish && esData ? esData.shortDescription : service.shortDescription;
  const serviceFullDesc = isSpanish && esData ? esData.fullDescription : service.fullDescription;
  const serviceFeatures = isSpanish && esData ? esData.features : service.features;

  // Choose appropriate image based on category
  const serviceImage = service.category === 'automotive' 
    ? carKeyProgImg 
    : service.category === 'commercial' 
      ? keyMachineImg 
      : techRekeyingImg;

  // =========================================================================
  // COMPREHENSIVE JSON-LD LocalBusiness & Service Schema Markup for AEO & SEO
  // =========================================================================
  const serviceLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Locksmith", "LocalBusiness", "AutomotiveBusiness"],
        "@id": `https://prolocksmith-tech.com/services/${service.slug}#locksmith`,
        "name": `Pro Locksmith Tech - ${service.name}`,
        "legalName": "Pro Locksmith Tech",
        "url": `https://prolocksmith-tech.com/services/${service.slug}`,
        "logo": "https://prolocksmith-tech.com/icon-512.png",
        "image": "https://prolocksmith-tech.com/icon-512.png",
        "telephone": "+1-754-261-6528",
        "email": "prolocksmithtech@gmail.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Mobile Pay",
        "currenciesAccepted": "USD",
        "description": service.fullDescription,
        "serviceType": service.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coral Springs",
          "addressRegion": "FL",
          "postalCode": "33076",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Broward County, FL",
            "containsPlace": [
              { "@type": "City", "name": "Coral Springs" },
              { "@type": "City", "name": "Fort Lauderdale" },
              { "@type": "City", "name": "Hollywood" },
              { "@type": "City", "name": "Pembroke Pines" },
              { "@type": "City", "name": "Pompano Beach" }
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Miami-Dade County, FL",
            "containsPlace": [
              { "@type": "City", "name": "Miami" },
              { "@type": "City", "name": "Miami Beach" },
              { "@type": "City", "name": "Hialeah" },
              { "@type": "City", "name": "Doral" },
              { "@type": "City", "name": "Coral Gables" }
            ]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Palm Beach County, FL",
            "containsPlace": [
              { "@type": "City", "name": "Boca Raton" },
              { "@type": "City", "name": "West Palm Beach" },
              { "@type": "City", "name": "Delray Beach" },
              { "@type": "City", "name": "Boynton Beach" },
              { "@type": "City", "name": "Jupiter" }
            ]
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
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
          "name": `${service.name} Solutions Catalog`,
          "itemListElement": service.features.map(f => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": f,
              "serviceType": service.name,
              "provider": {
                "@type": "Locksmith",
                "name": "Pro Locksmith Tech",
                "telephone": "+1-754-261-6528"
              }
            }
          }))
        }
      },
      {
        "@type": "Service",
        "@id": `https://prolocksmith-tech.com/services/${service.slug}#service`,
        "name": service.name,
        "serviceType": `${service.category} locksmith`,
        "description": service.fullDescription,
        "provider": {
          "@type": "Locksmith",
          "name": "Pro Locksmith Tech",
          "telephone": "+1-754-261-6528",
          "url": "https://prolocksmith-tech.com"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Broward County, FL" },
          { "@type": "AdministrativeArea", "name": "Miami-Dade County, FL" },
          { "@type": "AdministrativeArea", "name": "Palm Beach County, FL" }
        ],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceRange": "$$",
          "availability": "https://schema.org/InStock",
          "url": `https://prolocksmith-tech.com/services/${service.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://prolocksmith-tech.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://prolocksmith-tech.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.name,
            "item": `https://prolocksmith-tech.com/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://prolocksmith-tech.com/services/${service.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Does Pro Locksmith Tech provide mobile ${service.name} at my location?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. Pro Locksmith Tech provides 100% mobile ${service.name} directly at your location across Coral Springs, Broward, Miami-Dade, and Palm Beach counties. Our locksmith technicians arrive in fully equipped vans stocked with key blanks, laser cutting machinery, OBD-II programmers, and commercial-grade locksets to complete work on-site.`
            }
          },
          {
            "@type": "Question",
            "name": `How quickly can a mobile locksmith arrive for ${service.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our mobile locksmith units are actively patrolling South Florida roadways. Typical emergency arrival times range from 15 to 25 minutes depending on current traffic and your specific city. For immediate priority dispatch to your vehicle, residence, or commercial property, call our 24/7 hotline directly at +1 (754) 261-6528."
            }
          },
          {
            "@type": "Question",
            "name": `Do I need to visit a storefront or shop for ${service.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Pro Locksmith Tech is exclusively a mobile service provider with no public walk-in storefront. We bring all specialized automotive key programming tools, residential lock rekeying pins, and commercial door hardware directly to your site, saving you the expense and hassle of towing your vehicle or removing locks yourself."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
      <SEOHead
        title={isSpanish 
          ? `${serviceName} en el Sur de la Florida | Cerrajería Móvil 24/7` 
          : `${service.name} South Florida | Pro Locksmith Tech`
        }
        description={isSpanish
          ? `${serviceName} en el Sur de la Florida. Despacho de cerrajería móvil 24/7 en Broward, Miami-Dade y Palm Beach. Llame al +1 754-261-6528.`
          : `${service.name} in South Florida. 24/7 mobile locksmith dispatch across Broward, Miami-Dade & Palm Beach counties. Call +1 754-261-6528.`
        }
        keywords={`${service.name}, ${serviceName}, cerrajero sur de la florida, mobile locksmith South Florida, emergency locksmith`}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLocalBusinessSchema) }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button onClick={() => onNavigate('/')} className="hover:text-amber-400 transition-colors cursor-pointer">
            {t('nav.home')}
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/services')} className="hover:text-amber-400 transition-colors cursor-pointer">
            {t('nav.services')}
          </button>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{serviceName}</span>
        </div>

        {/* Hero Section for Service */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  {serviceBadge}
                </span>
                <span className="text-xs text-slate-400">
                  {isSpanish ? 'Despacho Móvil en el Sur de la Florida' : 'Mobile Dispatch Across South Florida'}
                </span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {serviceName}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {serviceFullDesc}
              </p>

              {/* Direct Actions: Call Now & Text */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: 'service_detail_hero', pagePath: `/services/${service.slug}` })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>{isSpanish ? 'Llamar Ahora: (754) 261-6528' : 'Call Now: +1 754-261-6528'}</span>
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

            {/* Service Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={serviceImage}
                  alt={serviceName}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-[11px] text-amber-400 font-semibold">
                  {isSpanish ? 'Cerrajería Móvil 24/7 · Broward, Miami-Dade y Palm Beach' : '24/7 Mobile Service · Broward, Miami-Dade & Palm Beach'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Features & Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Capabilities / Features */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{isSpanish ? 'Servicios Incluidos en su Ubicación' : 'On-Site Service Capabilities'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {isSpanish 
                ? 'Nuestros técnicos móviles realizan los siguientes trabajos directamente en su vehículo, domicilio o empresa:'
                : `Comprehensive tasks performed directly at your vehicle, home, or business for ${service.name}:`
              }
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {serviceFeatures.map((feat, i) => (
                <li key={i} className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Techniques */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-amber-400" />
              <span>{isSpanish ? 'Equipos y Métodos Profesionales' : 'Techniques & Equipment Used'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {isSpanish
                ? 'Nuestras unidades móviles cuentan con instrumental de alta tecnología para garantizar aperturas e instalaciones limpias:'
                : 'Our mobile workshops carry high-grade field equipment to complete the work with zero damage:'
              }
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.techniquesAndTools.map((tool, i) => (
                <li key={i} className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frequently Asked Questions (AEO & AI Search Snippet Block) */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-white">
                {isSpanish ? `Preguntas Frecuentes sobre ${serviceName}` : `Frequently Asked Questions: ${service.name}`}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {isSpanish 
                  ? 'Respuestas rápidas y claras de nuestros técnicos móviles en el Sur de la Florida.' 
                  : 'Direct answers regarding our 24/7 mobile locksmith dispatch in South Florida.'
                }
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <article className="p-5 bg-slate-900/90 rounded-xl border border-slate-800/80 space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span>
                  {isSpanish 
                    ? `¿Pro Locksmith Tech ofrece ${serviceName} a domicilio en mi zona?`
                    : `Does Pro Locksmith Tech provide mobile ${service.name} at my location?`
                  }
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                {isSpanish
                  ? `Sí. Pro Locksmith Tech brinda servicio 100% móvil de ${serviceName} directamente en su ubicación en Coral Springs, Broward, Miami-Dade y Palm Beach. Nuestras unidades móviles disponen de maquinaria de corte láser computarizada, programadores de llaves y repuestos de alta seguridad para resolver el problema en el acto sin necesidad de traslados.`
                  : `Yes. Pro Locksmith Tech provides 100% mobile ${service.name} directly at your location across Coral Springs, Broward, Miami-Dade, and Palm Beach counties. Our locksmith technicians arrive in fully equipped vans stocked with key blanks, laser cutting machinery, OBD-II programmers, and commercial-grade locksets to complete work on-site.`
                }
              </p>
            </article>

            <article className="p-5 bg-slate-900/90 rounded-xl border border-slate-800/80 space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span>
                  {isSpanish 
                    ? `¿Cuánto tarda en llegar un cerrajero móvil para ${serviceName}?`
                    : `How quickly can a mobile locksmith arrive for ${service.name}?`
                  }
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                {isSpanish
                  ? 'Nuestras unidades móviles patrullan activamente las principales autopistas del Sur de la Florida. El tiempo promedio de llegada es de 15 a 25 minutos según el tráfico y su ciudad. Para despacho prioritario a su vehículo, casa o negocio, llame de inmediato a nuestra línea directa 24/7 al +1 (754) 261-6528.'
                  : 'Our mobile locksmith units are actively patrolling South Florida roadways. Typical emergency arrival times range from 15 to 25 minutes depending on current traffic and your specific city. For immediate priority dispatch to your vehicle, residence, or commercial property, call our 24/7 hotline directly at +1 (754) 261-6528.'
                }
              </p>
            </article>

            <article className="p-5 bg-slate-900/90 rounded-xl border border-slate-800/80 space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span>
                  {isSpanish 
                    ? `¿Debo desplazarme a una tienda física para ${serviceName}?`
                    : `Do I need to visit a storefront or shop for ${service.name}?`
                  }
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4">
                {isSpanish
                  ? 'No. Pro Locksmith Tech opera 100% como servicio móvil a domicilio y no cuenta con tienda de atención al público. Llevamos todo el equipo computarizado de programación de llaves, pines de recodificación y herrajes comerciales hasta donde usted se encuentre, evitándole costosos remolques de autos o desmontar cerraduras por su cuenta.'
                  : 'No. Pro Locksmith Tech is exclusively a mobile service provider with no public walk-in storefront. We bring all specialized automotive key programming tools, residential lock rekeying pins, and commercial door hardware directly to your site, saving you the expense and hassle of towing your vehicle or removing locks yourself.'
                }
              </p>
            </article>
          </div>
        </section>

        {/* Immediate Call Banner */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            {isSpanish ? '¿Listo Para el Servicio?' : 'Ready For Service?'}
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            {isSpanish 
              ? `Solicite ${serviceName} con Nuestro Cerrajero Móvil` 
              : `Schedule ${service.name} with Our Mobile Technician`
            }
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {isSpanish
              ? 'Llame a nuestra línea directa de despacho para enviar una camioneta taller a su ubicación en el Sur de la Florida.'
              : 'Call our direct dispatch line to request a mobile locksmith van to your location in South Florida.'
            }
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+17542616528"
              onClick={() => trackPhoneClick({ ctaLocation: 'service_detail_bottom', pagePath: `/services/${service.slug}` })}
              className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] justify-center bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-base rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>{isSpanish ? 'Llamar +1 754-261-6528' : 'Call +1 754-261-6528'}</span>
            </a>
            <a
              href="sms:+17542616528"
              className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] justify-center bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-slate-100 font-bold text-sm rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{isSpanish ? 'Enviar Texto' : 'Text Us'}</span>
            </a>
          </div>
        </div>

        {/* Other Services Navigation */}
        <div className="pt-6 border-t border-slate-800">
          <h3 className="font-heading font-bold text-lg text-white mb-4">
            {isSpanish ? 'Explorar Otros Servicios de Cerrajería' : 'Explore Other Locksmith Services'}
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 8).map(other => {
              const otherDisplayName = isSpanish 
                ? (SPANISH_SERVICES[other.slug]?.name || other.name)
                : other.name;

              return (
                <button
                  key={other.id}
                  onClick={() => onNavigate(`/services/${other.slug}`)}
                  className="p-3 min-h-[46px] bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 rounded-xl text-left text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate mr-2">{otherDisplayName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
