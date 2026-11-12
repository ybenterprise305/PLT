import React, { useState } from 'react';
import { 
  KeyRound, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Wrench, 
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { techRekeyingImg, carKeyProgImg, keyMachineImg, locksmithVanImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_SERVICES } from '../data/spanishTranslations';
import { trackPhoneClick } from '../utils/analytics';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { isSpanish } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'emergency' | 'residential' | 'commercial' | 'automotive'>('all');

  const filtered = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getServiceImage = (category: string, id: string) => {
    if (category === 'automotive' || id.includes('car')) return carKeyProgImg;
    if (category === 'commercial' || id.includes('hardware') || id.includes('duplication')) return keyMachineImg;
    return techRekeyingImg;
  };

  const categories = [
    { id: 'all', label: isSpanish ? 'Todos los Servicios (12)' : 'All Services (12)' },
    { id: 'emergency', label: isSpanish ? 'Aperturas de Emergencia' : 'Emergency Lockouts' },
    { id: 'residential', label: isSpanish ? 'Residencial' : 'Residential' },
    { id: 'commercial', label: isSpanish ? 'Comercial' : 'Commercial' },
    { id: 'automotive', label: isSpanish ? 'Automotriz' : 'Automotive' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Servicios de Cerrajería en el Sur de la Florida | Cerrajería Móvil 24/7 | Pro Locksmith Tech"
          : "Locksmith Services in South Florida | 24/7 Mobile Locksmith | Pro Locksmith Tech"}
        description={isSpanish
          ? "Servicios integrales de cerrajería móvil en el Sur de la Florida. Aperturas de emergencia, rekeying residencial, cerraduras comerciales y llaves de auto. Llame al +1 754-261-6528."
          : "Comprehensive mobile locksmith services across South Florida. Emergency lockouts, residential rekeying, commercial hardware & automotive car keys. Call +1 754-261-6528."}
        canonicalPath="/services"
        keywords="emergency lockout service, residential locksmith, commercial locksmith, automotive locksmith, lock rekeying, lock repair, key duplication, locksmith South Florida, cerrajero South Florida"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        
        {/* Header Hero */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Cerrajería Móvil Completa' : 'Full-Service Mobile Locksmith'}</span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {isSpanish ? 'Servicios de Cerrajería en el Sur de la Florida' : 'Locksmith Services in South Florida'}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish 
                  ? 'Desde aperturas de emergencia de autos y casas hasta cambio de cerraduras, rekeying y corte de llaves automotrices con corte láser, Pro Locksmith Tech lleva soluciones precisas directamente a su ubicación.' 
                  : 'From emergency car lockouts and house lockouts to lock changes, lock rekeying, and precision car key cutting, Pro Locksmith Tech brings precision workmanship right to your location.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: 'services_hero_call', pagePath: '/services' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>{isSpanish ? 'Llamar Ahora: (754) 261-6528' : 'Call Now: +1 754-261-6528'}</span>
                </a>

                <a
                  href="sms:+17542616528"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[48px] rounded-xl bg-slate-800 hover:bg-slate-750 active:bg-slate-750 text-slate-100 font-bold text-sm border border-slate-700 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>{isSpanish ? 'Enviar Mensaje' : 'Text Us'}</span>
                </a>
              </div>
            </div>

            {/* Van Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={locksmithVanImg}
                  alt="Pro Locksmith Tech mobile locksmith van"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-[11px] text-amber-400 font-semibold">
                  {isSpanish ? 'Unidades Móviles Equipadas en Todo el Sur de la Florida' : 'Equipped Mobile Van Units Across South Florida'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="font-heading font-bold text-2xl text-white">
              {isSpanish ? 'Todos los 12 Servicios de Cerrajería' : 'All 12 Locksmith Services'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isSpanish ? 'Seleccione cualquier servicio para ver técnicas especializadas y herramientas.' : 'Select any service to view specialized techniques and tooling.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List Grid with Photo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((srv) => {
            const srvImg = getServiceImage(srv.category, srv.id);
            const esTrans = SPANISH_SERVICES[srv.slug];
            const name = (isSpanish && esTrans) ? esTrans.name : srv.name;
            const badge = (isSpanish && esTrans) ? esTrans.badge : srv.badge;
            const shortDesc = (isSpanish && esTrans) ? esTrans.shortDescription : srv.shortDescription;
            const features = (isSpanish && esTrans) ? esTrans.features : srv.features;

            return (
              <div 
                key={srv.id}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div 
                  onClick={() => onNavigate(`/services/${srv.slug}`)}
                  className="h-40 relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={srvImg}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  {badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950/80 border border-amber-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {badge}
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                      {features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isSpanish ? 'Guía Detallada' : 'Detailed Guide'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href="tel:+17542616528"
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>(754) 261-6528</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full text-amber-400 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Despacho Móvil 24/7 Activo Ahora' : '24/7 Mobile Dispatch Active Now'}</span>
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            {isSpanish ? '¿Necesita Servicio de Cerrajería Ahora Mismo?' : 'Need Locksmith Service Right Now?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {isSpanish 
              ? 'Nuestras camionetas de cerrajería móvil están listas para asistirle en todo el Sur de la Florida.' 
              : 'Our mobile locksmith vans are ready to assist you throughout South Florida.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+17542616528"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{isSpanish ? 'Llamar +1 754-261-6528' : 'Call +1 754-261-6528'}</span>
            </a>
            <a
              href="sms:+17542616528"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-100 font-bold text-sm rounded-xl border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{isSpanish ? 'Enviar Mensaje' : 'Text Us'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
