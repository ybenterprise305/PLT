import React from 'react';
import { MapPin, KeyRound, Globe, Phone, FileText, ChevronRight, BookOpen, Megaphone } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { BLOG_POSTS } from '../data/blogData';
import { SEOHead } from '../components/SEOHead';

import { AD_CAMPAIGNS } from '../data/adLandingPagesData';
import { LOCKSMITH_TIPS_DATA } from '../data/locksmithTipsData';
import { Wrench, Sparkles } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export function SitemapPage({ onNavigate }: SitemapPageProps) {
  const adPages = AD_CAMPAIGNS;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title="HTML Sitemap & SEO Directory | Pro Locksmith Tech"
        description="Comprehensive index of all pages, locksmith services, South Florida city coverage, blogs, and ad landing pages for Pro Locksmith Tech. Call +1 754-261-6528."
        keywords="Pro Locksmith Tech sitemap, website index, South Florida locksmith directory, blog index"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        {/* Header */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Site Navigation Directory</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Pro Locksmith Tech Sitemap
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Complete index of pages, services, blog articles, and dedicated advertising landing pages across South Florida.
          </p>
        </div>

        {/* Section 1: Main Pages */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>Primary Pages</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <a href="/"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Homepage (/)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/services"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Services Directory (/services)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/service-areas"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Service Areas (/service-areas)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/blog"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Blog & Articles (/blog)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/about"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Why Choose Us (/about)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/contact"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Contact & Dispatch (/contact)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/faq"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>FAQ Center (/faq)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/privacy"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Privacy Policy (/privacy)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="/tips"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-bold text-amber-400 hover:text-amber-300 border border-amber-500/30 flex items-center justify-between cursor-pointer"
            >
              <span>Locksmith Tips &amp; Tricks (/tips)</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
            <a href="/lp"
              className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left font-semibold text-amber-400 hover:text-amber-300 border border-amber-500/30 flex items-center justify-between cursor-pointer"
            >
              <span>Advertising Landing Pages Hub (/lp)</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Section 2: Technical Locksmith Tips & Tricks */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Locksmith Tips &amp; Tricks (AEO / AIO Field Guides)</span>
            </h2>
            <a href="/tips"
              className="text-xs text-amber-400 hover:underline font-semibold inline-block text-center"
            >
              View Hub &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {LOCKSMITH_TIPS_DATA.map((tip) => (
              <a href={`/tips/${tip.slug}`}
                key={tip.id}
                className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer group"
              >
                <div>
                  <div className="font-semibold line-clamp-1 group-hover:text-amber-400">{tip.title}</div>
                  <div className="text-[10px] text-amber-500/80 uppercase">{tip.category} · {tip.readTime}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 ml-2 group-hover:text-amber-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Section 3: Blog Guides */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Locksmith Articles & Technical Guides (6 Articles)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {BLOG_POSTS.map((post) => (
              <a href={`/blog/${post.slug}`}
                key={post.id}
                className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
              >
                <div>
                  <div className="font-semibold line-clamp-1">{post.title}</div>
                  <div className="text-[10px] text-amber-400 uppercase">{post.category} · {post.readTime}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Section 3: Advertising Landing Pages */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-amber-400" />
            <span>Advertising Landing Pages (PPC Optimized, High CTA Density)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {adPages.map((ad, idx) => (
              <a href={`/lp/${ad.slug}`}
                key={idx}
                className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
              >
                <div>
                  <div className="font-semibold">{ad.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">/lp/{ad.slug}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Section 4: Locksmith Services */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-amber-400" />
            <span>Locksmith Services (12 Dedicated Landing Guides)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {SERVICES_DATA.map((srv) => (
              <a href={`/services/${srv.slug}`}
                key={srv.id}
                className="p-3 bg-slate-900 hover:bg-slate-850 rounded-xl text-left text-slate-200 hover:text-amber-400 border border-slate-800 flex items-center justify-between cursor-pointer"
              >
                <div>
                  <div className="font-semibold">{srv.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase">{srv.category}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Section 5: South Florida Counties & Cities */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-heading font-bold text-xl text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>South Florida Service Areas (Counties & Cities)</span>
          </h2>

          <div className="space-y-6">
            {COUNTIES_DATA.map((county) => (
              <div key={county.id} className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <a href={`/service-areas/${county.slug}`}
                    className="font-heading font-bold text-base text-amber-400 hover:underline flex items-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>{county.name} Overview (/service-areas/{county.slug})</span>
                  </a>
                  <span className="text-xs text-slate-400">{county.majorCities.length} Local City Pages</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
                  {county.majorCities.map((city) => (
                    <a href={`/service-areas/${city.slug}`}
                      key={city.id}
                      className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-400 rounded-lg text-left border border-slate-800/80 flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate">{city.name}</span>
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Call Footer */}
        <div className="text-center p-6 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400">
          Need immediate service or have a question? Call Pro Locksmith Tech directly at{' '}
          <a href="tel:+17542616528" className="text-amber-400 font-bold hover:underline">
            +1 754-261-6528
          </a>
        </div>
      </div>
    </div>
  );
}
