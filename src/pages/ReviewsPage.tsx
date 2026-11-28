import React from 'react';
import { Phone, Star, ExternalLink, ShieldCheck, Truck, Clock } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';
import { useLanguage } from '../context/LanguageContext';
import { trackPhoneClick } from '../utils/analytics';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { techRekeyingImg, carKeyProgImg } from '../assets/images';

import { FEATURED_REVIEWS as REVIEWS, GOOGLE_MAPS_REVIEWS_URL as MAPS } from '../data/customerReviews';

export function ReviewsPage() {
  const { isSpanish } = useLanguage();
  return <div className="min-h-screen bg-slate-950 text-white">
    <SEOHead
      title={isSpanish ? 'Opiniones de clientes | Pro Locksmith Tech' : 'Customer Reviews | Pro Locksmith Tech'}
      description={isSpanish ? 'Lea opiniones reales de clientes de Pro Locksmith Tech. Cerrajería móvil las 24 horas en el sur de Florida.' : 'Read real customer reviews about Pro Locksmith Tech mobile locksmith services across South Florida. See our verified Google Maps listing.'}
      canonicalPath="/reviews"
    />
    <ReviewCarousel />
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-sm font-semibold text-amber-300"><Star className="h-4 w-4" />{isSpanish ? 'Calificación 5.0 ★★★★★ en Google' : 'Rated 5.0 ★★★★★ on Google'}</span>
        <h1 className="font-heading text-3xl font-extrabold sm:text-5xl">{isSpanish ? 'Opiniones de clientes' : 'What Our Customers Say'}</h1>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">{isSpanish ? 'Estos comentarios se publicaron en nuestro perfil de Google. Puede consultar el perfil original para obtener información actualizada.' : 'These are real reviews left on our Google Business Profile. Visit our Maps listing for current reviews and ratings.'}</p>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-amber-300 underline underline-offset-4">
          {isSpanish ? 'Ver perfil y opiniones en Google Maps' : 'View our Google Maps profile and reviews'} <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {REVIEWS.map(review=><figure key={review.author} className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <div className="mb-3 flex gap-1 text-amber-400" role="img" aria-label="5 out of 5 stars">{Array.from({length:5},(_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
          <blockquote className="flex-1 text-base leading-7 text-slate-100">“{review.quote}”</blockquote>
          <figcaption className="mt-4 border-t border-slate-700 pt-4">
            <span className="block font-bold">{review.author}</span>
            <span className="text-sm text-slate-400">{review.date && `${review.date} · `}{isSpanish ? 'Opinión en Google' : 'Google review'}{review.excerpt && (isSpanish ? ' · Extracto' : ' · Excerpt')}</span>
          </figcaption>
        </figure>)}
      </div>
      <div className="mt-12 grid gap-7 rounded-2xl border border-slate-700 bg-slate-900 p-6 md:grid-cols-2 md:p-9">
        <div className="space-y-3">
          <h2 className="font-heading text-2xl font-bold">{isSpanish ? 'Cerrajería móvil en el sur de Florida' : 'Mobile Locksmith Service Across South Florida'}</h2>
          <p className="text-base leading-7 text-slate-300">{isSpanish ? 'Estamos disponibles 24 horas al día y vamos directamente a su vehículo, casa o negocio.' : 'We provide 24/7 mobile locksmith service at your vehicle, home or business.'}</p>
          <div className="flex flex-wrap gap-3 text-sm text-amber-300">
            <span className="inline-flex gap-1"><Clock className="h-4 w-4"/>24/7</span>
            <span className="inline-flex gap-1"><Truck className="h-4 w-4"/>{isSpanish ? 'Servicio móvil' : 'Mobile service'}</span>
            <span className="inline-flex gap-1"><ShieldCheck className="h-4 w-4"/>{isSpanish ? 'Perfil verificable' : 'Public Google profile'}</span>
          </div>
          <LocalizedA href="tel:+17542616528" onClick={()=>trackPhoneClick({ctaLocation:'reviews_page_call',pagePath:'/reviews'})} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-extrabold text-slate-950 sm:w-auto"><Phone className="h-5 w-5"/>{isSpanish ? 'LLAMAR' : 'CALL NOW'} · (754) 261-6528</LocalizedA>
        </div>
        <div className="grid grid-cols-2 gap-3"><img src={carKeyProgImg} alt={isSpanish ? 'Herramientas para llaves de autos' : 'Automotive key service equipment'} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover"/><img src={techRekeyingImg} alt={isSpanish ? 'Trabajo con cerraduras residenciales' : 'Residential lock service tools'} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover"/></div>
      </div>
    </section>
  </div>;
}
