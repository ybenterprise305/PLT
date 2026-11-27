import React from 'react';
import { PAYMENT_METHODS, PHONE, TEL } from '../config/business';
import { 
  Phone, 
  MapPin, 
  Clock, 
   
  Truck, 
  Zap
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { locksmithCrewImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

import { LocalizedA } from '../components/LocalizedA';
export function ContactPage() {
  const { isSpanish } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Contacto Pro Locksmith Tech | Despacho Móvil 24/7 Sur de la Florida"
          : "Contact Pro Locksmith Tech | 24/7 Mobile Dispatch South Florida"}
        description={isSpanish
          ? "Llame al +1 754-261-6528 para despacho de cerrajería móvil 24/7 en Broward, Miami-Dade y Palm Beach. Vamos directamente a donde esté."
          : "Call +1 754-261-6528 for 24/7 mobile locksmith dispatch across Broward, Miami-Dade, and Palm Beach counties. We come directly to you."}
        canonicalPath="/contact"
        keywords="contact locksmith South Florida, contacto cerrajero Sur de la Florida, emergency locksmith phone number, mobile locksmith dispatch, locksmith Fort Lauderdale phone, locksmith Miami contact"
      />

      <div className="plt-wrap space-y-10">
        
        {/* Header Hero */}
        <div className="plt-page-lead">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <Logo size="lg" showText={false} />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{isSpanish ? 'Despacho Móvil Directo 24/7' : 'Direct 24/7 Mobile Dispatch'}</span>
                  </div>
                  <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                    {isSpanish ? 'Contacte a ' : 'Contact '}
                    <span className="text-amber-400">Pro Locksmith Tech</span>
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish 
                  ? 'Llame a Pro Locksmith Tech para solicitar cerrajería automotriz, residencial o comercial en Miami-Dade, Broward y Palm Beach. Ofrecemos servicio el mismo día y atención de emergencias las 24 horas.' 
                  : 'Need a locksmith in South Florida? Call Pro Locksmith Tech for professional automotive, residential or commercial service. Our technicians come to you throughout Miami-Dade, Broward and Palm Beach counties, with same-day and 24/7 emergency service available.'}
              </p>

              {/* Direct Quick Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <LocalizedA
                  href={TEL}
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>{isSpanish ? 'Llamar Ahora: +1 754-261-6528' : 'Call Now: +1 754-261-6528'}</span>
                </LocalizedA>

                
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Zap className="w-4 h-4 fill-current" /> {isSpanish ? 'Servicio Móvil 24/7' : '24/7 Mobile Service'}
                </span>

                <span>•</span>
                <span>{isSpanish ? 'Servicio el mismo día y de emergencia' : 'Same-Day & Emergency Locksmith Service'}</span>
              </div>
            </div>

            {/* Crew Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={locksmithCrewImg}
                  alt="Pro Locksmith Tech mobile service technician crew"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-2 px-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 block">
                    {isSpanish ? 'Flota de Cerrajería Móvil 24/7' : '24/7 Mobile Locksmith Fleet'}
                  </span>
                  <span className="text-[11px] text-slate-300">
                    {isSpanish ? 'Lista en Broward, Miami-Dade y Palm Beach' : 'Ready to roll across Broward, Miami-Dade & Palm Beach'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reassuring Mobile Service Notice */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-start gap-4">
          <Truck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-bold block mb-1">
              {isSpanish ? 'Cerrajeros equipados — Servicio el mismo día' : 'Fully Equipped Locksmiths — Same-Day Service'}
            </strong>
            {isSpanish 
              ? 'Reciba servicio profesional de cerrajería donde lo necesite. Nuestros técnicos llevan llaves de auto, controles, llaves inteligentes y cerraduras para realizar cortes, programación y reparaciones en el lugar. Llame para solicitar servicio el mismo día.' 
              : 'Get professional locksmith service right where you need it. Our equipped technicians carry car keys, transponder keys, remotes, smart keys, key fobs and lock hardware for on-site key cutting, programming and repairs. Call to request same-day service.'}
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-6 space-y-3 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Phone className="w-6 h-6 fill-current" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {isSpanish ? 'Línea Directa de Despacho' : 'Direct Dispatch Line'}
              </div>
              <LocalizedA
                href={TEL}
                className="font-heading font-black text-xl text-white hover:text-amber-400 transition-colors block mt-1"
              >
                +1 754-261-6528
              </LocalizedA>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish ? 'La forma más rápida de comunicarse con despacho.' : 'The fastest way to reach dispatch.'}
              </p>
            </div>
            <div className="pt-2">
              <LocalizedA
                href={TEL}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar Ahora' : 'Call Now'}</span>
              </LocalizedA>
            </div>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isSpanish ? 'Horario de Atención' : 'Operating Hours'}
              </div>
              <div className="font-heading font-black text-xl text-white mt-1">
                {isSpanish ? '24/7 Sin Interrupción' : '24/7 Non-Stop'}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish ? 'Activo las 24 horas del día, los 365 días del año.' : 'Active 24 hours a day, 7 days a week, 365 days a year.'}
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-amber-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{isSpanish ? 'Unidades móviles en servicio ahora' : 'Mobile vans on duty right now'}</span>
            </div>
          </div>
        </div>

        {/* Immediate Dispatch Connection Center (No Forms) */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Cero Formularios · Contacto Directo en Vivo' : 'Zero Forms · 100% Direct Live Contact'}</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
                {isSpanish ? 'Llame a Nuestro Equipo de Cerrajería Móvil.' : 'Call Our Mobile Locksmith Team.'}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish 
                  ? 'Cuando se queda con las llaves encerradas en su carro, no puede entrar a su casa o tiene un cerrojo roto, nunca debería tener que esperar horas a que le respondan un formulario web. Por eso en Pro Locksmith Tech no hay formularios: usted se comunica directamente con nuestra línea de despacho en segundos.' 
                  : 'When you are stranded with keys locked in your car, unable to get inside your house, or facing a broken deadbolt, you should never have to wait hours for an email form response. That is why Pro Locksmith Tech has zero forms—you connect directly with our active dispatch line in seconds.'}
              </p>

              {/* 3 Step Dispatch Guide */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white text-sm block">
                      {isSpanish ? 'Llame a Nuestra Línea' : 'Call Our Dispatch Line'}
                    </strong>
                    <span className="text-xs text-slate-400">
                      {isSpanish ? 'Marque ' : 'Dial '}
                      <LocalizedA href={TEL} className="text-amber-400 underline font-bold">+1 754-261-6528</LocalizedA>.
                      {isSpanish ? ' Llame para solicitar servicio.' : ' Call to request service.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white text-sm block">
                      {isSpanish ? 'Indique Su Ubicación y Problema con la Llave' : 'Tell Us Your Location & Lock/Key Situation'}
                    </strong>
                    <span className="text-xs text-slate-400">
                      {isSpanish 
                        ? 'Indique su dirección en Broward, Miami-Dade o Palm Beach y el modelo de vehículo o tipo de puerta.' 
                        : 'Provide your address or cross-streets in Broward, Miami-Dade, or Palm Beach and vehicle/door details.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white text-sm block">
                      {isSpanish ? 'La Camioneta de Cerrajería se Despacha Directo a Usted' : 'Mobile Locksmith Van Dispatches Directly to You'}
                    </strong>
                    <span className="text-xs text-slate-400">
                      {isSpanish 
                        ? 'Nuestro técnico va hacia su ubicación con todas las herramientas, llaves vírgenes y repuestos a bordo.' 
                        : 'Our technician heads straight to your location with all tools, key cutting blanks, and hardware on board.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Urgent Call Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-5 text-center shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/25">
                <Phone className="w-7 h-7 fill-current" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  {isSpanish ? 'Despacho de Emergencia Activo' : 'Active Emergency Dispatch'}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {isSpanish ? 'Llame Ahora' : 'Call Dispatch Now'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish 
                    ? 'Llame para confirmar la disponibilidad de un técnico en su ubicación.'
                    : 'Call to confirm technician availability for your location.'}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <LocalizedA
                  href={TEL}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-lg uppercase tracking-wider rounded-xl shadow-xl flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>{isSpanish ? 'Llamar' : 'Call'} {PHONE}</span>
                </LocalizedA>

                
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                {isSpanish 
                  ? 'Servicio móvil las 24 horas en el sur de Florida'
                  : '24/7 mobile service in South Florida'}
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">{isSpanish ? 'Los tiempos de llegada son estimaciones, no garantías. Pueden variar según el tráfico, la ubicación y la disponibilidad.' : 'Arrival times are estimates, not guarantees. Traffic, location and availability may affect arrival.'} <LocalizedA href="/terms" className="underline">{isSpanish ? 'Condiciones' : 'Terms'}</LocalizedA></p>
            </div>
          </div>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6" aria-labelledby="contact-payment">
          <h2 id="contact-payment" className="font-heading text-xl font-bold text-white">Payment methods and pricing</h2>
          <p className="mt-2 text-slate-300">Pro Locksmith Tech accepts {PAYMENT_METHODS.en}. Ask dispatch about any other payment method.</p>
          <p className="mt-2 text-slate-300">Locksmith pricing depends on the service, the vehicle or lock, the parts needed, and the job location. Call {PHONE} to discuss pricing for your job.</p>
        </section>

        {/* INTERACTIVE SOUTH FLORIDA MAP */}
        {/* Territory Overview */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>{isSpanish ? 'Territorio Móvil del Sur de la Florida' : 'South Florida Mobile Service Territory'}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {isSpanish 
              ? 'Pro Locksmith Tech viaja directamente a la ubicación del cliente. Haga clic en cualquier municipio a continuación:' 
              : 'Pro Locksmith Tech travels directly to customer locations. Click any municipality below to view its dedicated landing page:'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-sm">
                  {isSpanish ? 'Condado de Broward' : 'Broward County'}
                </strong>
                <LocalizedA href="/service-areas/broward-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </LocalizedA>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Coral Springs', 'Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Pembroke Pines', 'Miramar', 'Davie', 'Plantation'].map(city => (
                  <LocalizedA href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </LocalizedA>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-sm">
                  {isSpanish ? 'Condado de Miami-Dade' : 'Miami-Dade County'}
                </strong>
                <LocalizedA href="/service-areas/miami-dade-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </LocalizedA>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Miami', 'Miami Beach', 'Hialeah', 'Coral Gables', 'Doral', 'Aventura', 'Kendall'].map(city => (
                  <LocalizedA href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </LocalizedA>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-sm">
                  {isSpanish ? 'Condado de Palm Beach' : 'Palm Beach County'}
                </strong>
                <LocalizedA href="/service-areas/palm-beach-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </LocalizedA>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['West Palm Beach', 'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Jupiter', 'Wellington', 'Palm Beach Gardens'].map(city => (
                  <LocalizedA href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </LocalizedA>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default ContactPage;
