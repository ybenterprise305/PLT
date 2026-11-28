import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedA } from './LocalizedA';

import { FEATURED_REVIEWS, GOOGLE_MAPS_REVIEWS_URL } from '../data/customerReviews';

const reviews = FEATURED_REVIEWS.slice(0, 10);

export function ReviewCarousel({ compact=false }: { compact?: boolean }) {
  const {isSpanish}=useLanguage();
  const [index,setIndex]=useState(0);
  const [paused,setPaused]=useState(false);
  const [interacting,setInteracting]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(false);
  const startX=useRef<number|null>(null);
  const move=(offset:number)=>setIndex(i=>(i+offset+reviews.length)%reviews.length);
  useEffect(()=>{
    if (typeof window==='undefined') return;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReducedMotion(media.matches);
    update();
    media.addEventListener?.('change',update);
    return ()=>media.removeEventListener?.('change',update);
  },[]);
  useEffect(()=>{
    if (paused || interacting || reducedMotion) return;
    const timer=window.setInterval(()=>setIndex(i=>(i+1)%reviews.length),8500);
    return ()=>window.clearInterval(timer);
  },[paused,interacting,reducedMotion]);
  const review=reviews[index];
  return <section className={compact?'py-8':'py-12 sm:py-16'} aria-label={isSpanish?'Opiniones destacadas de Google':'Featured Google customer reviews'}>
    <div className="mx-auto max-w-6xl px-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-300"><Star className="h-4 w-4 fill-current"/>{isSpanish?'Calificación 5.0 ★★★★★ en Google':'Rated 5.0 ★★★★★ on Google'}</p>
          <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">{isSpanish?'Lo que dicen nuestros clientes':'What Customers Are Saying'}</h2>
        </div>
        <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-amber-300 underline underline-offset-4">
          {isSpanish?'Ver opiniones en Google':'See Google reviews'} <ExternalLink className="h-4 w-4"/>
        </a>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-8"
        onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)}
        onTouchStart={e=>{startX.current=e.touches[0]?.clientX??null;setInteracting(true)}}
        onTouchCancel={()=>{startX.current=null;setInteracting(false)}}
        onTouchEnd={e=>{if(startX.current!==null){const delta=(e.changedTouches[0]?.clientX??startX.current)-startX.current;if(Math.abs(delta)>45)move(delta<0?1:-1);}startX.current=null;setInteracting(false)}}
        onFocusCapture={()=>setInteracting(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setInteracting(false)}}>
        <div aria-live={paused?'polite':'off'} className="grid min-h-[328px] items-center min-[370px]:min-h-[280px] sm:min-h-[230px]">
          <figure key={index} className="space-y-4 motion-safe:animate-[reviewFade_650ms_ease-in-out]">
            <div className="flex gap-1 text-amber-400" role="img" aria-label={isSpanish ? '5 de 5 estrellas' : '5 out of 5 stars'}>{Array.from({length:5},(_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div>
            <blockquote className="text-base leading-8 text-white sm:text-lg">“{review.quote}”</blockquote>
            <figcaption className="text-sm text-slate-300"><span className="font-bold text-white">{review.author}</span><span className="mx-2" aria-hidden="true">·</span>{review.date && `${review.date} · `}Google{review.excerpt && (isSpanish ? ' · Extracto' : ' · Excerpt')}</figcaption>
          </figure>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4">
          <p className="tabular-nums text-sm text-slate-300">{isSpanish ? 'Opinión' : 'Review'} {index + 1} / {reviews.length}</p>
          <div className="flex items-center gap-2">
            <button type="button" onClick={()=>setPaused(v=>!v)} aria-label={paused?(isSpanish?'Reanudar opiniones':'Resume reviews'):(isSpanish?'Pausar opiniones':'Pause reviews')} className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600 text-white hover:bg-slate-800">{paused?<Play className="h-5 w-5"/>:<Pause className="h-5 w-5"/>}</button>
            <button type="button" onClick={()=>move(-1)} aria-label={isSpanish?'Opinión anterior':'Previous review'} className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600 text-white hover:bg-slate-800"><ChevronLeft className="h-5 w-5"/></button>
            <button type="button" onClick={()=>move(1)} aria-label={isSpanish?'Siguiente opinión':'Next review'} className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600 text-white hover:bg-slate-800"><ChevronRight className="h-5 w-5"/></button>
          </div>
        </div>
      </div>
      {!compact && <div className="mt-5 text-center"><LocalizedA href="/reviews" className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-amber-300 hover:bg-slate-900">{isSpanish?'Ver más opiniones':'Read more customer reviews'}</LocalizedA></div>}
    </div>
  </section>;
}
