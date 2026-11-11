import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, Navigation, MessageSquare } from 'lucide-react';
import { COUNTIES_DATA, getAllCities } from '../data/locationsData';
import { SEOHead } from '../components/SEOHead';
import { SouthFloridaMap } from '../components/SouthFloridaMap';
import { locksmithVanImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_COUNTIES } from '../data/spanishTranslations';

interface ServiceAreasPageProps {
  onNavigate: (path: string) => void;
}

export function ServiceAreasPage({ onNavigate }: ServiceAreasPageProps) {
  const { isSpanish } = useLanguage();
  const [selectedCountyFilter, setSelectedCountyFilter] = useState<string>('all');
  const allCities = getAllCities();

  const filteredCities = selectedCountyFilter === 'all'
    ? allCities
    : allCities.filter(c => c.county.slug === selectedCountyFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Áreas de Servicio de Cerrajería Móvil | Sur de la Florida | Pro Locksmith Tech"
          : "Locksmith Service Areas | South Florida | Pro Locksmith Tech"}
        description={isSpanish
          ? "Pro Locksmith Tech atiende el Sur de la Florida con cerrajería móvil 24/7 en los condados de Broward, Miami-Dade y Palm Beach. Mapa interactivo y directorio de ciudades. Llame al +1 754-261-6528."
          : "Pro Locksmith Tech serves South Florida with 24/7 mobile locksmith solutions across Broward, Miami-Dade, and Palm Beach counties. Interactive map and cities directory. Call +1 754-261-6528."}
        canonicalPath="/service-areas"
        keywords="locksmith South Florida, cerrajero South Florida, mobile locksmith South Florida, locksmith Broward County, locksmith Miami, locksmith Palm Beach County, emergency locksmith service areas"
      />

      {/* Hero Header */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Cobertura Móvil Dedicada' : 'Dedicated Mobile Coverage'}</span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {isSpanish ? 'Áreas de Servicio de Cerrajería en el Sur de la Florida' : 'South Florida Locksmith Service Areas'}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish 
                  ? 'Pro Locksmith Tech opera una flota dedicada de camionetas taller móviles de cerrajería en todo el Sur de la Florida. Llevamos aperturas de emergencia sin daños, cambio de combinación, llaves de auto y cerraduras comerciales directamente a su vehículo, casa o negocio.' 
                  : 'Pro Locksmith Tech operates a dedicated fleet of fully equipped mobile locksmith vans covering South Florida. We bring non-destructive lockouts, lock rekeying, car key programming, and commercial security hardware directly to your curb, home, or business.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+17542616528"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{isSpanish ? 'Llamar Ahora: (754) 261-6528' : 'Call Now: (754) 261-6528'}</span>
                </a>

                <a
                  href="sms:+17542616528"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 font-bold text-sm border border-slate-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>{isSpanish ? 'Enviar Mensaje' : 'Text Us'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={locksmithVanImg}
                  alt="Locksmith van on service route in South Florida"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-[11px] text-amber-400 font-semibold">
                  {isSpanish ? 'Taller Móvil Despachado Directamente a Sus Coordenadas' : 'Mobile Workshop Dispatched Directly to Your Coordinates'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SOUTH FLORIDA MAP */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-14">
        <SouthFloridaMap
          onSelectCity={(slug) => onNavigate(`/service-areas/${slug}`)}
          title={isSpanish ? "Mapa Interactivo de Cobertura en el Sur de la Florida" : "Interactive South Florida Coverage Map"}
          subtitle={isSpanish ? "Explore nuestro radio de despacho móvil activo en los condados de Palm Beach, Broward y Miami-Dade." : "Explore our active mobile locksmith dispatch radius across Palm Beach, Broward, and Miami-Dade counties."}
        />
      </section>

      {/* Quick City Directory & County Selector */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-heading font-black text-white">
                {isSpanish ? 'Seleccione Su Ciudad Para Despacho Directo' : 'Select Your South Florida City for Direct Dispatch'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {isSpanish ? 'Toque su localidad para ver detalles del servicio móvil o llamar de inmediato.' : 'Tap your local area below to view dedicated mobile locksmith details or call immediately.'}
              </p>
            </div>

            {/* County Quick Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedCountyFilter('all')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCountyFilter === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {isSpanish ? `Todas las 37 Ciudades (${allCities.length})` : `All 37 Cities (${allCities.length})`}
              </button>
              <button
                onClick={() => setSelectedCountyFilter('broward-county')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCountyFilter === 'broward-county'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Broward
              </button>
              <button
                onClick={() => setSelectedCountyFilter('miami-dade-county')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCountyFilter === 'miami-dade-county'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Miami-Dade
              </button>
              <button
                onClick={() => setSelectedCountyFilter('palm-beach-county')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedCountyFilter === 'palm-beach-county'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Palm Beach
              </button>
            </div>
          </div>

          {/* Instant City Click Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {filteredCities.map(({ city, county }) => (
              <button
                key={city.id}
                onClick={() => onNavigate(`/service-areas/${city.slug}`)}
                className="group px-3.5 py-2 bg-slate-900 hover:bg-amber-500 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-amber-400 rounded-xl transition-all font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-950 transition-colors" />
                <span>{city.name}</span>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-900">({county.name.replace(' County', '')})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* County by County Organization */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        {COUNTIES_DATA.map((county) => {
          const spCounty = SPANISH_COUNTIES[county.slug];
          const countyTitle = isSpanish && spCounty ? spCounty.name : county.fullName;
          const countyOverview = isSpanish && spCounty ? spCounty.overview : county.overview;

          return (
            <div 
              key={county.id} 
              id={county.slug}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl"
            >
              {/* County Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    {isSpanish ? 'Territorio del Sur de la Florida' : 'South Florida Territory'}
                  </div>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {countyTitle}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {isSpanish ? 'Sede del Condado:' : 'County Seat:'} <span className="text-slate-300 font-semibold">{county.seat}</span> · {isSpanish ? 'Vías Principales:' : 'Key Corridors:'} {county.highways.join(', ')}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate(`/service-areas/${county.slug}`)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded-xl border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSpanish ? `Ver ${county.name}` : `${county.name} Overview`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:+17542616528"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow transition-transform"
                  >
                    {isSpanish ? 'Llamar: (754) 261-6528' : 'Call (754) 261-6528'}
                  </a>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-4xl">
                {countyOverview}
              </p>

              {/* Cities Grid under this County */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isSpanish ? `Ciudades Atendidas en el ${county.name}:` : `Cities Served in ${county.name} (Click for local details):`}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {county.majorCities.map((city) => (
                    <div
                      key={city.id}
                      className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 transition-all hover:-translate-y-0.5 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                            {city.name}
                          </span>
                          <MapPin className="w-4 h-4 text-amber-400/80" />
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                          {isSpanish 
                            ? `Cerrajería móvil 24 horas y auxilio vial en ${city.name}, FL.` 
                            : city.customIntro}
                        </p>

                        <div className="text-[11px] text-slate-500 mb-4">
                          {isSpanish ? 'Zonas:' : 'Key Areas:'} {city.popularAreas.slice(0, 2).join(', ')}
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate(`/service-areas/${city.slug}`)}
                        className="w-full py-2 px-3 bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 rounded-lg text-xs font-bold border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{isSpanish ? `Ver ${city.name}` : `Explore ${city.name}`}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Dispatch Notice */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mt-12">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="font-bold text-amber-400 uppercase text-[11px] tracking-wider">
            {isSpanish ? 'Modelo de Servicio Móvil' : 'Mobile Service Model'}
          </div>
          <p>
            {isSpanish 
              ? 'Pro Locksmith Tech brinda asistencia de cerrajería móvil a domicilio. Los técnicos viajan con camionetas totalmente equipadas directamente a su hogar, lugar de trabajo o vehículo varado. No se requiere acudir a tiendas físicas.' 
              : 'Pro Locksmith Tech provides mobile on-site locksmith assistance. Technicians travel with fully equipped vans directly to your home, workplace, or stranded vehicle location. No physical retail visits are needed.'}
          </p>
        </div>
      </section>
    </div>
  );
}
