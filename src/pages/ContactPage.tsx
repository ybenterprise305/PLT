import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Truck, 
  Zap
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { SouthFloridaMap } from '../components/SouthFloridaMap';
import { locksmithCrewImg } from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { isSpanish } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Contacto Pro Locksmith Tech | Despacho Móvil 24/7 Sur de la Florida"
          : "Contact Pro Locksmith Tech | 24/7 Mobile Dispatch South Florida"}
        description={isSpanish
          ? "Llame o envíe un texto al +1 754-261-6528 para despacho de cerrajería móvil 24/7 en Broward, Miami-Dade y Palm Beach. Vamos directamente a donde esté. Sin esperas ni formularios."
          : "Call or text +1 754-261-6528 for 24/7 mobile locksmith dispatch across Broward, Miami-Dade, and Palm Beach counties. We come directly to you. No waiting, no forms."}
        canonicalPath="/contact"
        keywords="contact locksmith South Florida, contacto cerrajero Sur de la Florida, emergency locksmith phone number, mobile locksmith dispatch, locksmith Fort Lauderdale phone, locksmith Miami contact"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        
        {/* Header Hero */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
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
                  ? 'Comuníquese directamente con nuestro equipo de despacho de cerrajería móvil del Sur de la Florida. Al operar 100% como servicio a domicilio, nuestros técnicos viajan directamente a su vehículo, hogar o comercio en Broward, Miami-Dade y Palm Beach.' 
                  : 'Connect directly with our South Florida mobile locksmith dispatch team. Because we operate 100% as an on-site mobile service, our technicians travel directly to your vehicle, home, or commercial facility across Broward, Miami-Dade, and Palm Beach counties.'}
              </p>

              {/* Direct Quick Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+17542616528"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>{isSpanish ? 'Llamar Ahora: +1 754-261-6528' : 'Call Now: +1 754-261-6528'}</span>
                </a>

                <a
                  href="sms:+17542616528"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-100 hover:text-amber-400 font-bold text-sm border border-slate-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>{isSpanish ? 'Enviar Texto: (754) 261-6528' : 'Text Us (754) 261-6528'}</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Zap className="w-4 h-4 fill-current" /> {isSpanish ? 'Atención Inmediata en Vivo' : 'Immediate Live Answer'}
                </span>
                <span>•</span>
                <span>{isSpanish ? 'Sin menús automáticos' : 'No automated menus'}</span>
                <span>•</span>
                <span>{isSpanish ? 'Servicio 100% Móvil — Vamos a Ti' : '100% Mobile Service — We Come to You'}</span>
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
              {isSpanish ? 'Aviso de Servicio Móvil — Vamos a Donde Estés:' : 'Mobile Service Notice — We Come to You:'}
            </strong>
            {isSpanish 
              ? 'Pro Locksmith Tech opera estrictamente como un servicio de cerrajería móvil a domicilio. No disponemos de una tienda física donde los clientes dejen llaves o cerraduras. Nuestros técnicos se trasladan directamente a su ubicación en camionetas taller equipadas con máquinas de corte láser computarizadas, escáneres OBD de programación y cerraduras de repuesto.' 
              : 'Pro Locksmith Tech operates strictly as an on-site mobile locksmith service. We do not have a customer-facing physical storefront where customers drop off locks or keys. Our technicians travel directly to your location in fully equipped mobile workshops stocked with computerized laser key cutting machines, OBD programming tablets, and commercial security hardware.'}
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-6 space-y-3 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <Phone className="w-6 h-6 fill-current" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {isSpanish ? 'Línea Directa de Despacho' : 'Direct Dispatch Line'}
              </div>
              <a
                href="tel:+17542616528"
                className="font-heading font-black text-xl text-white hover:text-amber-400 transition-colors block mt-1"
              >
                +1 754-261-6528
              </a>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish ? 'La forma más rápida de comunicarse con despacho.' : 'The fastest way to reach dispatch.'}
              </p>
            </div>
            <div className="pt-2">
              <a
                href="tel:+17542616528"
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{isSpanish ? 'Llamar Ahora' : 'Call Now'}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Text / SMS */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isSpanish ? 'Mensaje de Texto SMS' : 'SMS Text Message'}
              </div>
              <a
                href="sms:+17542616528"
                className="font-heading font-black text-xl text-white hover:text-amber-400 transition-colors block mt-1"
              >
                +1 754-261-6528
              </a>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish ? 'Envíe su dirección o fotos de su cerradura.' : 'Text your street address or photos of your lock/key.'}
              </p>
            </div>
            <div className="pt-2">
              <a
                href="sms:+17542616528"
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-amber-400 border border-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Enviar SMS' : 'Send SMS Text'}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isSpanish ? 'Correo Electrónico' : 'Email Inquiries'}
              </div>
              <a
                href="mailto:prolocksmithtech@gmail.com"
                className="font-bold text-sm text-white hover:text-amber-400 transition-colors block mt-1 break-all"
              >
                prolocksmithtech@gmail.com
              </a>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish ? 'Para cotizaciones comerciales y consultas programadas.' : 'For commercial security bids and scheduled quotes.'}
              </p>
            </div>
            <div className="pt-2">
              <a
                href="mailto:prolocksmithtech@gmail.com"
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-amber-400 border border-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Enviar Correo' : 'Send Email'}</span>
              </a>
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
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
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
                {isSpanish ? 'Sin Esperas. Sin Formularios que Llenar.' : 'No Waiting. No Forms to Fill Out.'}
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
                      {isSpanish ? 'Llame o Envíe un Texto a Nuestra Línea' : 'Call or Text Our Dispatch Line'}
                    </strong>
                    <span className="text-xs text-slate-400">
                      {isSpanish ? 'Marque ' : 'Dial '}
                      <a href="tel:+17542616528" className="text-amber-400 underline font-bold">+1 754-261-6528</a>. 
                      {isSpanish ? ' Llame o envíe un texto para comenzar.' : ' Call or text to get started.'}
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
                <Phone className="w-7 h-7 fill-current animate-bounce" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  {isSpanish ? 'Despacho de Emergencia Activo' : 'Active Emergency Dispatch'}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {isSpanish ? 'Llame o Envíe un Texto Ahora' : 'Call or Text Dispatch Now'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isSpanish 
                    ? 'Llame ahora para respuesta inmediata y despacho rápido.' 
                    : 'Call now for immediate response time and prompt mobile dispatch.'}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+17542616528"
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-lg uppercase tracking-wider rounded-xl shadow-xl flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>{isSpanish ? 'LLAMAR: +1 754-261-6528' : 'CALL: +1 754-261-6528'}</span>
                </a>

                <a
                  href="sms:+17542616528"
                  className="w-full py-3.5 px-6 bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-bold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>{isSpanish ? 'ENVIAR SU UBICACIÓN POR TEXTO' : 'TEXT US YOUR LOCATION'}</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                {isSpanish 
                  ? 'Operando 24/7 en el Sur de la Florida · Llegada promedio 15–25 mins' 
                  : 'Operating 24/7 across South Florida · Average mobile arrival 15–25 mins'}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE SOUTH FLORIDA MAP */}
        <div className="pt-4">
          <SouthFloridaMap
            onSelectCity={(slug) => onNavigate(`/service-areas/${slug}`)}
            title={isSpanish ? "Mapa de Despacho del Sur de la Florida" : "South Florida Dispatch Map"}
            subtitle={isSpanish ? "Vea nuestra cobertura móvil activa en los condados de Broward, Miami-Dade y Palm Beach. Seleccione cualquier ciudad para abrir su página dedicada." : "View our active mobile locksmith coverage across Broward, Miami-Dade, and Palm Beach counties. Select any city to open its dedicated local page."}
          />
        </div>

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
                <a href="/service-areas/broward-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Coral Springs', 'Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Pembroke Pines', 'Miramar', 'Davie', 'Plantation'].map(city => (
                  <a href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-sm">
                  {isSpanish ? 'Condado de Miami-Dade' : 'Miami-Dade County'}
                </strong>
                <a href="/service-areas/miami-dade-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Miami', 'Miami Beach', 'Hialeah', 'Coral Gables', 'Doral', 'Aventura', 'Kendall'].map(city => (
                  <a href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-sm">
                  {isSpanish ? 'Condado de Palm Beach' : 'Palm Beach County'}
                </strong>
                <a href="/service-areas/palm-beach-county" className="text-amber-400 hover:underline font-semibold text-[11px] cursor-pointer inline-block text-center">
                  {isSpanish ? 'Ver Condado →' : 'View County →'}
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['West Palm Beach', 'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Jupiter', 'Wellington', 'Palm Beach Gardens'].map(city => (
                  <a href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    key={city}
                    className="px-2 py-1 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded border border-slate-800 text-[11px] transition-colors cursor-pointer inline-block text-center"
                  >
                    {city}
                  </a>
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
