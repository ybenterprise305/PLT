import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Wrench, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  MessageSquare,
  ShieldAlert,
  Car,
  Home,
  Building2,
  KeyRound
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCKSMITH_TIPS_DATA, LocksmithTip } from '../data/locksmithTipsData';

interface TipDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function TipDetailPage({ slug, onNavigate }: TipDetailPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const tip = LOCKSMITH_TIPS_DATA.find((t) => t.slug === slug);

  if (!tip) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center space-y-4">
          <KeyRound className="w-12 h-12 text-amber-400 mx-auto" />
          <h1 className="text-2xl font-bold font-heading">Tip or Guide Not Found</h1>
          <p className="text-slate-400 text-sm">
            The requested locksmith technical guide could not be located.
          </p>
          <a href="/tips"
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm inline-block text-center"
          >
            &larr; Return to All Locksmith Tips
          </a>
        </div>
      </div>
    );
  }

  // Related tips
  const relatedTips = LOCKSMITH_TIPS_DATA.filter((t) => 
    tip.relatedTipsSlugs.includes(t.slug)
  ).slice(0, 3);

  // Schema.org HowTo & FAQPage structured data
  const tipSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://prolocksmith-tech.com/tips/${tip.slug}#article`,
        "headline": tip.title,
        "description": tip.metaDescription,
        "author": {
          "@type": "Organization",
          "name": "Pro Locksmith Tech",
          "url": "https://prolocksmith-tech.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Pro Locksmith Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://prolocksmith-tech.com/icon-512.png"
          }
        },
        "mainEntityOfPage": `https://prolocksmith-tech.com/tips/${tip.slug}`,
        "keywords": tip.keywords.join(', ')
      },
      {
        "@type": "HowTo",
        "@id": `https://prolocksmith-tech.com/tips/${tip.slug}#howto`,
        "name": tip.title,
        "description": tip.summary,
        "step": tip.stepByStep.map((s) => ({
          "@type": "HowToStep",
          "position": s.step,
          "name": s.title,
          "text": s.instruction
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `https://prolocksmith-tech.com/tips/${tip.slug}#faq`,
        "mainEntity": tip.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Automotive':
        return <Car className="w-4 h-4 text-amber-400" />;
      case 'Residential':
        return <Home className="w-4 h-4 text-emerald-400" />;
      case 'Commercial':
        return <Building2 className="w-4 h-4 text-blue-400" />;
      case 'Emergency':
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      default:
        return <KeyRound className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <SEOHead
        title={tip.metaTitle}
        description={tip.metaDescription}
        keywords={tip.keywords.join(', ')}
        canonicalPath={`/tips/${tip.slug}`}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tipSchema) }}
      />

      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-slate-950/80 border-b border-slate-800 py-3 px-4 sm:px-6 lg:px-10 xl:px-12 text-xs text-slate-400">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <a href="/" 
              className="hover:text-amber-400 transition-colors inline-block text-center"
            >
              Home
            </a>
            <span>/</span>
            <a href="/tips" 
              className="hover:text-amber-400 transition-colors inline-block text-center"
            >
              Locksmith Tips
            </a>
            <span>/</span>
            <span className="text-slate-200 truncate max-w-[200px] sm:max-w-md">{tip.title}</span>
          </div>

          <a href="/tips"
            className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold text-center"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Tips &amp; Tricks</span>
          </a>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-slate-950 border border-slate-800 text-slate-200">
              {getCategoryIcon(tip.category)}
              <span>{tip.category} Locksmithing</span>
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{tip.readTime}</span>
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400">{tip.lastUpdated}</span>
          </div>

          <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {tip.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {tip.summary}
          </p>
        </header>

        {/* =========================================================================
            AEO / AIO DIRECT ANSWER CALLOUT BOX
            Crafted for Google AI Overviews, Perplexity, Siri, & Featured Snippets
            ========================================================================= */}
        <section className="bg-gradient-to-br from-amber-500/15 via-slate-950 to-slate-950 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl shadow-amber-500/5 relative overflow-hidden">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-amber-400" />
            <span>Direct Answer &amp; Quick AI Summary</span>
          </div>
          <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
            {tip.quickAnswer}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800/80">
            <span>Verified by Pro Locksmith Tech Field Technicians</span>
            <a
              href="tel:+17542616528"
              className="text-amber-400 hover:underline font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Mobile Dispatch Hotline: (754) 261-6528</span>
            </a>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
          <h2 className="font-heading font-bold text-lg text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
            <span>Key Takeaways at a Glance</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tip.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-850">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Technical Guide */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Step-by-Step Instructions</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Field Procedure Breakdown
            </h2>
          </div>

          <div className="space-y-6">
            {tip.stepByStep.map((s) => (
              <div 
                key={s.step}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 relative"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-heading font-black text-lg shrink-0">
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-0 sm:pl-14">
                  {s.instruction}
                </p>

                {/* Pro Tip Box */}
                <div className="ml-0 sm:ml-14 bg-amber-500/10 border border-amber-500/25 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-400 font-bold mr-1">Pro Technician Tip:</strong>
                    <span>{s.proTip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="bg-slate-950 border border-rose-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Critical Warnings</span>
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-white">
              Common DIY Mistakes That Damage Lock Hardware
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tip.commonMistakes.map((m, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                <div className="font-bold text-rose-400 flex items-center gap-1.5">
                  <span className="text-rose-500 font-black">✕</span>
                  <span>{m.mistake}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  <strong className="text-slate-300">Why it fails:</strong> {m.why}
                </p>
                <p className="text-emerald-300 text-[11px] leading-relaxed pt-1 border-t border-slate-800">
                  <strong className="text-emerald-400">Better way:</strong> {m.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* South Florida Climate Impact */}
        <section className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>South Florida Climate Considerations</span>
          </div>
          <h2 className="font-heading font-bold text-xl text-white">
            How Florida Heat, Humidity &amp; Salt Air Affect Locks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {tip.floridaClimateTips}
          </p>
        </section>

        {/* When to Call a Mobile Locksmith */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span>When to Stop DIY and Call a Mobile Locksmith</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Continuing to force a jammed lock or sheared key can double the repair cost. Contact mobile dispatch if:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tip.whenToCallPro.map((cond, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{cond}</span>
              </div>
            ))}
          </div>

          {/* Quick Call Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-900 rounded-xl border border-amber-500/30">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white">Need On-Site Mobile Assistance Right Now?</div>
              <div className="text-xs text-slate-400">We travel directly to your location across South Florida.</div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+17542616528"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call: (754) 261-6528</span>
              </a>
              <a
                href="sms:+17542616528"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs rounded-lg border border-slate-700 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs text-slate-400">Direct technical answers to common questions about this topic.</p>
          </div>

          <div className="space-y-2">
            {tip.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-200 hover:text-amber-400"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Tips */}
        {relatedTips.length > 0 && (
          <section className="pt-8 border-t border-slate-800 space-y-4">
            <h2 className="font-heading font-bold text-lg text-white">
              Related Locksmith Technical Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTips.map((rTip) => (
                <a href={`/tips/${rTip.slug}`}
                  key={rTip.id}
                  className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 p-4 rounded-xl text-left space-y-2 group transition-all inline-block"
                >
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{rTip.category}</div>
                  <h3 className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {rTip.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
