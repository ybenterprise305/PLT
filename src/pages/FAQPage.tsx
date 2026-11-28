import React, { useState } from 'react';
import { 
  HelpCircle, 
  Phone, 
  ChevronDown, 
  Truck, 
  
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FAQ_DATA } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';
import { SPANISH_FAQS } from '../data/spanishTranslations';

import { LocalizedA } from '../components/LocalizedA';
interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const { isSpanish } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const currentFaqs = isSpanish 
    ? SPANISH_FAQS 
    : FAQ_DATA.filter(item => activeCategory === 'all' || item.category === activeCategory);


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title={isSpanish 
          ? "Preguntas Frecuentes | Pro Locksmith Tech | Cerrajería Móvil 24/7 Sur de la Florida"
          : "Frequently Asked Questions | Pro Locksmith Tech | 24/7 Mobile Locksmith South Florida"}
        description={isSpanish
          ? "Preguntas frecuentes sobre nuestro servicio de cerrajería móvil 24/7 en Broward, Miami-Dade y Palm Beach. Conozca cómo funciona nuestro despacho móvil."
          : "Common questions about our 24/7 mobile locksmith service across Broward, Miami-Dade, and Palm Beach counties. Learn how our on-site mobile dispatch works."}
        canonicalPath="/faq"
        keywords="locksmith FAQ, preguntas cerrajero, mobile locksmith questions, emergency locksmith South Florida, do locksmiths come to you, locksmith service areas"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        
        {/* Header Hero */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Centro de Ayuda y Respuestas de Cerrajería Móvil' : 'Help Center & Mobile Service Answers'}</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              {isSpanish ? 'Preguntas ' : 'Frequently Asked '}
              <span className="text-amber-400">{isSpanish ? 'Frecuentes' : 'Questions'}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {isSpanish 
                ? 'Resolvemos problemas de llaves y cerraduras en su auto, casa o negocio. Llámenos a cualquier hora para pedir un cerrajero móvil en el sur de Florida.'
                : 'Get answers about on-site key and lock service at your car, home or business. Call our South Florida dispatch team any time for emergency or same-day help.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <LocalizedA
                href="tel:+17542616528"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{isSpanish ? 'Llamar: +1 754-261-6528' : 'Call +1 754-261-6528'}</span>
              </LocalizedA>

              
            </div>
          </div>
        </div>

        {/* Mobile Service Reassurance Banner */}
        <div className="plt-paper border rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg text-white">
                {isSpanish ? 'Cerrajería Móvil — Vamos a Donde Estés' : 'Mobile Locksmith Service — We Come to You'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {isSpanish 
                  ? 'Nuestro taller móvil va hasta su casa, auto o negocio. Llevamos equipo de corte y programación de llaves, además de cerraduras y herramientas para trabajar en el lugar.'
                  : 'Our mobile workshop comes to your home, vehicle or business. We bring key-cutting and programming equipment and carry hardware for on-site lock service.'}
              </p>
            </div>
          </div>
          <LocalizedA href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider shrink-0 cursor-pointer text-center"
          >
            <span>{isSpanish ? 'Ver Servicios' : 'Explore Services'}</span>
            <ArrowRight className="w-4 h-4" />
          </LocalizedA>
        </div>

        {/* Category Filter Controls for English */}
        {!isSpanish && (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Filter Questions by Topic:
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Questions' },
                  { id: 'mobile', label: 'Mobile Service' },
                  { id: 'emergency', label: 'Emergency' },
                  { id: 'automotive', label: 'Automotive' },
                  { id: 'residential', label: 'Residential' },
                  { id: 'commercial', label: 'Commercial' },
                  { id: 'general', label: 'General' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Accordion Questions List */}
        <div className="space-y-3">
          {currentFaqs.length > 0 ? (
            currentFaqs.map((faq, index) => (
              <details key={faq.id} open={index === 0} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 open:border-amber-500/50">
                <summary className="cursor-pointer list-none p-5 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-amber-400 sm:p-6">
                  <h2 className="flex items-center justify-between gap-4 font-heading text-base font-bold text-white sm:text-lg">
                    {faq.question}
                    <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-amber-400 group-open:rotate-180" />
                  </h2>
                </summary>
                <div className="border-t border-slate-900 px-5 pb-6 pt-4 text-sm leading-relaxed text-slate-300 sm:px-6 sm:text-base">
                  <p>{faq.answer}</p>
                  <LocalizedA href="tel:+17542616528" className="mt-3 inline-flex min-h-11 items-center font-semibold text-amber-300 underline">
                    {isSpanish ? 'Llamar para este servicio' : 'Call for this service'}
                  </LocalizedA>
                </div>
              </details>
            ))
          ) : (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 text-center space-y-4">
              <ShieldAlert className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="font-heading font-bold text-lg text-white">
                {isSpanish ? 'No se encontraron preguntas' : 'No matching questions found'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                {isSpanish 
                  ? '¿Tiene una pregunta específica sobre su cerradura o ubicación? Llame directamente a nuestra línea 24/7.' 
                  : 'Have a specific question about your lock, car key, or location? Give our direct dispatch line a call anytime 24/7.'}
              </p>
              <LocalizedA
                href="tel:+17542616528"
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{isSpanish ? 'Llamar: +1 754-261-6528' : 'Call +1 754-261-6528'}</span>
              </LocalizedA>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {isSpanish ? '¿Necesita Servicio de Cerrajería Ahora Mismo?' : 'Need Locksmith Service Right Now?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {isSpanish 
              ? 'Nuestros técnicos móviles están en ruta 24/7 en los condados de Broward, Miami-Dade y Palm Beach. Vamos directamente a donde esté.' 
              : 'Our mobile technicians are on the road 24/7 throughout Broward, Miami-Dade, and Palm Beach counties. We come directly to you.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocalizedA
              href="tel:+17542616528"
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <span>{isSpanish ? 'LLAMAR AHORA: +1 754-261-6528' : 'CALL NOW: +1 754-261-6528'}</span>
            </LocalizedA>
            <LocalizedA href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl border border-slate-700 transition-colors cursor-pointer inline-block text-center"
            >
              <span>{isSpanish ? 'Página de Contacto' : 'Contact Page'}</span>
            </LocalizedA>
          </div>
        </div>

      </div>
    </div>
  );
}
export default FAQPage;
