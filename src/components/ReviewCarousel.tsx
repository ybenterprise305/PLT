import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LocalizedA } from './LocalizedA';

// Text and dates verified against the connected Google Business Profile on Nov 14, 2026.
// Only one selected review currently includes a customer-provided image.
const reviews = [
  { name: 'Nick Manning', date: 'Nov 11, 2026', quote: 'Shawn did a Great job. Quick service and very friendly. Some locksmiths get bad reps for ripping people off. Shawn will try and fix the problem the cheapest and most efficient way possible. I highly recommend keeping the company’s phone number in your contacts for an emergency.', image: 'https://lh3.googleusercontent.com/grass-cs/AABkmLe-dYCB1WXlRs-QX9Znx5xl2FI-gUwHKSPa6Xij1oleRYQw6jlB6udrmu3RZ_crLIHvR0oQG4P72LB0ztjpgudEC2gbdZs4BMgcC4_VQYaR4bE8pndrFOieEIPz6php1CGJ9S17VDZpY2M=k-no' },
  { name: 'Roger Celler', date: 'Nov 13, 2026', quote: 'Really happy with the service. Shawn made a new key for my 2022 Honda Accord and was very knowledgeable. The whole process was smooth and communication was excellent.' },
  { name: 'Shai Mengelgrein', date: 'Nov 13, 2026', quote: 'Lost my only key to my 2019 Ford F-150 and thought I was going to have a huge problem. Shawn handled everything professionally and got me a working key. Definitely impressed.' },
  { name: 'Jairo Cortez', date: 'Nov 5, 2026', quote: 'They came out quick and made a key for my 2020 dodge ram thanks' },
  { name: 'isaac', date: 'Nov 12, 2026', quote: 'Shawn came quick and opened my house within minutes so grateful.' },
  { name: 'Leilani Winterdaal', date: 'Nov 4, 2026', quote: 'Technician came out in a timely matter, completed the job and was easy to work with.' }
];
const MAPS='https://maps.google.com/maps?cid=16992150185739281311';

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
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-amber-300 underline underline-offset-4">
          {isSpanish?'Ver opiniones en Google':'See Google reviews'} <ExternalLink className="h-4 w-4"/>
        </a>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:p-8"
        onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)}
        onTouchStart={e=>{startX.current=e.touches[0]?.clientX??null;setInteracting(true)}}
        onTouchEnd={e=>{if(startX.current!==null){const delta=(e.changedTouches[0]?.clientX??startX.current)-startX.current;if(Math.abs(delta)>45)move(delta<0?1:-1);}startX.current=null;setInteracting(false)}}
        onFocusCapture={()=>setInteracting(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setInteracting(false)}}>
        <div aria-live={paused?'polite':'off'} className="grid min-h-[240px] items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto]">
          <figure key={index} className="space-y-4 motion-safe:animate-[reviewFade_650ms_ease-in-out]">
            <div className="flex gap-1 text-amber-400" aria-label="5 stars">{Array.from({length:5},(_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div>
            <blockquote className="text-base leading-8 text-white sm:text-lg">“{review.quote}”</blockquote>
            <figcaption className="text-sm text-slate-300"><span className="font-bold text-white">{review.name}</span><span className="mx-2" aria-hidden="true">·</span>{review.date} · Google</figcaption>
          </figure>
          {review.image && <div className="md:w-40"><img src={review.image} alt={isSpanish?'Foto adjunta por el cliente a su opinión en Google':'Photo provided by customer in Google review'} loading="lazy" referrerPolicy="no-referrer" className="max-h-48 w-full rounded-xl border border-slate-700 object-cover" onError={e=>{e.currentTarget.style.display='none'}}/><p className="mt-2 text-xs text-slate-400">{isSpanish?'Foto aportada por el cliente':'Customer-provided photo'}</p></div>}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4">
          <div className="flex gap-1.5" aria-label={isSpanish?'Seleccionar opinión':'Select review'}>
            {reviews.map((r,i)=><button key={r.name} type="button" onClick={()=>setIndex(i)} aria-label={isSpanish?`Opinión ${i+1}`:`Review ${i+1}`} aria-current={i===index?'true':undefined} className={'h-3 rounded-full transition-all '+(i===index?'w-7 bg-amber-400':'w-3 bg-slate-600 hover:bg-slate-400')}/>)}
          </div>
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
