import React, { useState } from 'react';
import { 
  Megaphone, 
  ExternalLink, 
  Phone, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Truck,
  Sparkles,
  Tag
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AD_CAMPAIGNS, AdCampaignConfig } from '../data/adLandingPagesData';

interface AdLandingHubPageProps {
  onNavigate: (path: string) => void;
}

export function AdLandingHubPage({ onNavigate }: AdLandingHubPageProps) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const copyUrl = (slug: string) => {
    const fullUrl = `https://prolocksmith-tech.com/lp/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title="Advertising Landing Pages Hub | Pro Locksmith Tech"
        description="Directory of high-converting advertising landing pages for Google Ads and PPC campaigns. Optimized for mobile locksmith conversion in South Florida."
        keywords="Pro Locksmith Tech advertising, locksmith PPC landing pages, South Florida locksmith ads"
        noIndex={true}
      />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        {/* Header */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              <span>Advertising & PPC Campaign Hub</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready-to-Use Advertising Landing Pages
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Use these specialized landing pages for Google Ads, Facebook Ads, Local Service Ads, and PPC campaigns. Each page is laser-focused on 1 specific locksmith service with zero customer forms, high CTA density, transparent 3-step dispatch, and a sticky mobile call button for maximum phone calls.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>10 Specialized Landing Pages</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Distraction-Free / High Phone Call Conversion</span>
              </span>
              <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Mobile Sticky Call Bar</span>
              </span>
            </div>
          </div>
        </div>

        {/* Grid of 10 Ad Campaigns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {AD_CAMPAIGNS.map((campaign) => (
            <div
              key={campaign.slug}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-md">
                      PPC Campaign
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-black text-white mt-1.5">
                      {campaign.name}
                    </h2>
                  </div>
                  
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    /lp/{campaign.slug}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {campaign.headline}
                </p>

                {/* Recommended Ad Copy Box */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                    Recommended Google / Meta Ad Copy:
                  </div>
                  <div className="font-bold text-white">
                    {campaign.recommendedAdCopy.headline}
                  </div>
                  <div className="text-slate-400 text-[11px] leading-relaxed">
                    {campaign.recommendedAdCopy.description}
                  </div>
                </div>

                {/* Target Keywords Tags */}
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-amber-400" />
                    <span>Target Ad Keywords:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {campaign.targetKeywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Preview & Copy URL */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  onClick={() => onNavigate(`/lp/${campaign.slug}`)}
                  className="w-full sm:flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Preview Landing Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => copyUrl(campaign.slug)}
                  className="w-full sm:w-auto py-2.5 px-4 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedSlug === campaign.slug ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call Banner */}
        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl text-center space-y-4">
          <h3 className="text-2xl font-heading font-black text-white">
            Need Locksmith Service Right Now?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Pro Locksmith Tech is active 24/7 across Broward, Miami-Dade, and Palm Beach counties.
          </p>
          <div className="pt-1">
            <a
              href="tel:+17542616528"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl transition-transform hover:scale-105 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL DIRECT: +1 754-261-6528</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
