import React, { useState } from 'react';
import { 
  KeyRound, 
  Wrench, 
  Phone, 
  Car, 
  Home, 
  Building2, 
  ShieldAlert, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Search,
  CheckCircle2,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCKSMITH_TIPS_DATA } from '../data/locksmithTipsData';

interface LocksmithTipsPageProps {
  onNavigate: (path: string) => void;
}

export function LocksmithTipsPage({ onNavigate }: LocksmithTipsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Automotive', 'Residential', 'Commercial', 'Emergency'];

  const filteredTips = LOCKSMITH_TIPS_DATA.filter((tip) => {
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Schema.org CollectionPage / ItemList
  const tipsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Locksmith Tips, Tricks & Technical Guides | Pro Locksmith Tech",
    "description": "Expert technical guides and troubleshooting tips for broken key extraction, transponder car key programming, sticking locks, and commercial door hardware in South Florida.",
    "url": "https://prolocksmith-tech.com/tips",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": LOCKSMITH_TIPS_DATA.map((tip, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": tip.title,
        "url": `https://prolocksmith-tech.com/tips/${tip.slug}`
      }))
    }
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
        title="Locksmith Tips & Tricks | Technical Lock & Key Guides | Pro Locksmith Tech"
        description="Professional technical guides on broken key extraction, car transponder programming, sticky lock lubrication, smart lock battery jump starts, and master keying."
        keywords="locksmith tips and tricks, how to extract broken key, car key programming guide, sticky lock repair, smart lock dead battery, high security deadbolts, South Florida locksmith"
        canonicalPath="/tips"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tipsSchema) }}
      />

      {/* Header Banner */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Knowledge Base &amp; AEO Insights</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Locksmith Tips, Tricks &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Field Diagnostics</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              In-depth technical guides written by experienced mobile locksmith technicians. Explore real-world troubleshooting steps, clear direct answers, and critical warnings for locks, transponder keys, electronic deadbolts, and commercial hardware.
            </p>

            {/* Direct Mobile Assistance Callout */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+17542616528"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Mobile Dispatch: (754) 261-6528</span>
              </a>

              <a
                href="sms:+17542616528"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm rounded-xl uppercase tracking-wider border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Text Technician</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-slate-950/60 border-b border-slate-800 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tips, keys, locks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 sm:py-2 text-base sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors min-h-[44px]"
            />
          </div>

        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          {filteredTips.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <p className="text-slate-400 text-base">No guides matched your search criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-slate-800 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredTips.map((tip) => (
                <article
                  key={tip.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-amber-500/40 transition-all group shadow-sm hover:shadow-xl hover:shadow-amber-500/5"
                >
                  <div className="space-y-4">
                    
                    {/* Meta bar */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                        {getCategoryIcon(tip.category)}
                        <span className="text-slate-200">{tip.category}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{tip.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-black text-xl text-white group-hover:text-amber-400 transition-colors leading-snug">
                      <button
                        onClick={() => onNavigate(`/tips/${tip.slug}`)}
                        className="text-left cursor-pointer"
                      >
                        {tip.title}
                      </button>
                    </h2>

                    {/* Direct Answer Preview (AEO Optimized) */}
                    <div className="bg-slate-900/90 border-l-2 border-amber-500 rounded-r-lg p-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                      <strong className="text-amber-400 block mb-1">Direct Answer:</strong>
                      {tip.quickAnswer}
                    </div>

                    {/* Key Takeaways summary */}
                    <ul className="space-y-1.5 pt-1">
                      {tip.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/tips/${tip.slug}`)}
                      className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="tel:+17542616528"
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                      title="Direct Locksmith Call"
                    >
                      <Phone className="w-3 h-3 text-amber-400 fill-current" />
                      <span>Dispatch</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bottom Emergency Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>24/7 Mobile Workshop On Wheels</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            Need On-Site Locksmith Service in South Florida?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            If DIY troubleshooting is risking lock damage or you are locked out right now, call Pro Locksmith Tech. Our equipped mobile vans travel directly to your location across Broward, Miami-Dade, and Palm Beach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+17542616528"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl uppercase tracking-wider transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now: (754) 261-6528</span>
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm rounded-xl uppercase tracking-wider border border-slate-700 transition-colors"
            >
              <span>Contact Dispatch Info</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
