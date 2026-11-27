import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Clock, 
  Phone, 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { 
  locksmithCrewImg, 
  locksmithVanImg, 
  techRekeyingImg 
} from '../assets/images';
import { useLanguage } from '../context/LanguageContext';

import { LocalizedA } from '../components/LocalizedA';
interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { isSpanish } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Sobre Pro Locksmith Tech | Cerrajería Móvil en el Sur de la Florida"
          : "About Pro Locksmith Tech | South Florida Mobile Locksmith"}
        description={isSpanish
          ? "Conozca nuestro enfoque centrado en el cliente, nuestra flota de cerrajería móvil 24/7 y nuestro territorio de servicio en el Sur de la Florida. Llame al +1 754-261-6528."
          : "Learn about Pro Locksmith Tech's customer-focused service approach, 24/7 mobile locksmith fleet, and dedicated service territory across South Florida. Call +1 754-261-6528."}
        canonicalPath="/about"
        keywords="about Pro Locksmith Tech, cerrajero movil Sur de la Florida, South Florida mobile locksmith, locksmith Broward County, locksmith Miami, locksmith Palm Beach"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        
        {/* About Hero */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Logo size="lg" showText={false} />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                    <Truck className="w-3.5 h-3.5" />
                    <span>{isSpanish ? 'Cerrajería Móvil 24/7 — Vamos a Donde Estés' : '24/7 Mobile Locksmith Service — We Come to You'}</span>
                  </div>
                  <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                    {isSpanish ? 'Sobre ' : 'About '}
                    <span className="text-amber-400">Pro Locksmith Tech</span>
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSpanish 
                  ? 'Desde el año 2000, Pro Locksmith Tech ofrece servicios profesionales de cerrajería automotriz, residencial y comercial en Miami-Dade, Broward y Palm Beach. Nuestros técnicos acuden a su ubicación con servicio el mismo día y atención de emergencias las 24 horas.' 
                  : 'Since 2000, Pro Locksmith Tech has provided professional automotive, residential and commercial locksmith services throughout South Florida, including Miami-Dade, Broward and Palm Beach counties. Our fully equipped technicians come to your location for same-day service and 24/7 locksmith emergencies.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <LocalizedA
                  href="tel:+17542616528"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{isSpanish ? 'Llamar: +1 754-261-6528' : 'Call +1 754-261-6528'}</span>
                </LocalizedA>

                
              </div>
            </div>

            {/* Crew Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={locksmithCrewImg}
                  alt="Pro Locksmith Tech technicians crew"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/90 py-1.5 px-3 rounded-lg border border-slate-800 text-xs text-amber-400 font-semibold">
                  {isSpanish ? 'Técnicos Móviles Dedicados en el Sur de la Florida' : 'Dedicated Mobile Technicians Serving South Florida'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic public review, not a fabricated testimonial or aggregate rating. */}
        <section className="grid gap-6 rounded-2xl border border-amber-400/25 bg-slate-950 p-6 sm:p-8 lg:grid-cols-2 lg:items-center" aria-label="Customer feedback">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-wide text-amber-300">{isSpanish ? 'Opinión de un cliente en Google' : 'From a real Google customer review'}</p>
            <blockquote className="text-base leading-8 text-slate-100">“Really happy with the service. Shawn made a new key for my 2022 Honda Accord and was very knowledgeable. The whole process was smooth and communication was excellent.”</blockquote>
            <p className="text-sm font-semibold text-slate-300">Roger Celler · Google review · November 13, 2026</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white">{isSpanish ? 'Conozca nuestras opiniones públicas' : 'See What Customers Have Shared'}</h2>
            <p className="text-base leading-7 text-slate-300">{isSpanish ? 'Comentarios originales de clientes publicados en Google. Consulte las opiniones y nuestro perfil público.' : 'Customer feedback from our actual Google Business Profile, with a direct link to the original listing.'}</p>
            <LocalizedA href="/reviews" className="inline-flex min-h-[48px] items-center rounded-xl border border-amber-400/50 px-5 py-3 font-bold text-amber-300 hover:bg-slate-900">{isSpanish ? 'Leer opiniones de clientes' : 'Read Customer Reviews'}</LocalizedA>
          </div>
        </section>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {isSpanish ? 'La Ventaja del Servicio Móvil' : 'The Mobile Service Advantage'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {isSpanish 
                ? 'Cuando se queda afuera de su carro en la I-95 o el pestillo de su negocio se daña en la noche, no puede llevar la puerta a un taller. Pro Locksmith Tech lleva el taller completo de cerrajería hasta su ubicación exacta en camionetas con duplicadoras, escáneres y repuestos.' 
                : 'When you are locked out of your car on I-95 or your storefront door latch breaks at night, you cannot bring your door to a shop. Pro Locksmith Tech brings the full locksmith workshop to your exact location in equipped vans carrying key machines, diagnostic tablets, and inventory.'}
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {isSpanish ? 'Disponibilidad Real 24/7' : 'True 24/7 Availability'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {isSpanish 
                ? 'Sabemos que las emergencias no tienen horario comercial. Nuestro despacho móvil funciona las 24 horas del día, los 7 días de la semana, los 365 días del año, brindando a residentes y viajeros asistencia confiable cuando más la necesitan.' 
                : 'We know that lock problems do not conform to standard 9-to-5 business hours. Our mobile dispatch operates 24 hours a day, 7 days a week, 365 days a year, providing South Florida residents and travelers with reliable emergency assistance whenever required.'}
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {isSpanish ? 'Técnicas No Destructivas' : 'Non-Destructive Craft'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {isSpanish 
                ? 'Taladrar una cerradura siempre debe ser el último recurso absoluto. Nuestros técnicos practican métodos avanzados de ganzuado, decodificación y bypass no destructivo para proteger sus cerraduras valiosas, marcos y pintura automotriz.' 
                : 'Drilling a lock cylinder should always be an absolute last resort, not a shortcut. Our technicians practice specialized non-destructive picking, decoding, and bypass methods that protect your high-value locks, door frames, and automotive finishes.'}
            </p>
          </div>
        </div>

        {/* Photos of Equipment & Tech at Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={locksmithVanImg}
              alt="Pro Locksmith Tech mobile van"
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-5">
              <h4 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Camionetas Móviles Equipadas' : 'Equipped Mobile Vans'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish 
                  ? 'Acondicionadas a medida con electricidad a bordo, calibradoras de corte láser por código y pines de cerradura de alta precisión.' 
                  : 'Custom-outfitted with on-board electricity, key code calibrators, and heavy-duty lock pin sets.'}
              </p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={techRekeyingImg}
              alt="Technician at work rekeying cylinder"
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-5">
              <h4 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'Técnicos Capacitados' : 'Skilled Technicians'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isSpanish 
                  ? 'Entrenados en métodos modernos de ganzuado, rekeying residencial y cerraduras resistentes al clima costero de Florida.' 
                  : 'Trained in modern bypass methods, residential rekeying, and Florida-specific coastal security hardware.'}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {isSpanish ? '¿Necesita Servicio de Cerrajería en el Sur de la Florida?' : 'Need Locksmith Service in South Florida?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {isSpanish 
              ? 'Contacte a Pro Locksmith Tech hoy. Nuestros técnicos móviles están de guardia 24/7 en Broward, Miami-Dade y Palm Beach.' 
              : 'Contact Pro Locksmith Tech today. Our mobile technicians are on call 24/7 across Broward, Miami-Dade, and Palm Beach.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocalizedA
              href="tel:+17542616528"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <span>{isSpanish ? 'Llamar: (754) 261-6528' : 'Call (754) 261-6528'}</span>
            </LocalizedA>
            <LocalizedA href="/contact"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition-colors cursor-pointer inline-block text-center"
            >
              <span>{isSpanish ? 'Detalles de Contacto' : 'Contact Details'}</span>
            </LocalizedA>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
