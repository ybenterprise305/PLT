import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Phone, MessageSquare, Tag, ShieldCheck, Truck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { trackPhoneClick } from '../utils/analytics';

interface BlogListPageProps {
  onNavigate: (path: string) => void;
}

export function BlogListPage({ onNavigate }: BlogListPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title="Locksmith Articles, Tips & Guides | Pro Locksmith Tech South Florida"
        description="Helpful guides and technical advice from Pro Locksmith Tech. Learn about car lockouts, key fob programming, rekeying vs replacement, and South Florida home security."
        keywords="locksmith blog, car lockout tips, rekeying guide, car key programming advice, South Florida locksmith tips, mobile locksmith blog"
      />

      {/* Header Banner */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-12">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Locksmith Resource Center</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              South Florida Locksmith Guides & Expert Advice
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore practical tips, technical guides, and security best practices from Pro Locksmith Tech. Whether you need insight on emergency car unlocks, key fob programming, or residential deadbolt rekeying, our articles explain how modern mobile locksmithing works.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="tel:+17542616528"
                onClick={() => trackPhoneClick({ ctaLocation: 'blog_list_header_call', pagePath: '/blog' })}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Dispatch: +1 754-261-6528</span>
              </a>

              <a
                href="sms:+17542616528"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Text For Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-10">
        <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-2 ml-1">
            Browse by Topic:
          </span>
          {[
            { id: 'all', label: 'All Articles' },
            { id: 'automotive', label: 'Automotive & Keys' },
            { id: 'residential', label: 'Residential Locks' },
            { id: 'commercial', label: 'Commercial Security' },
            { id: 'emergency', label: 'Emergency Guidance' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <a href={`/blog/${post.slug}`} className="block">
                {/* Article Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider bg-slate-950/90 text-amber-400 border border-slate-800 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/90 text-slate-300 border border-slate-800 flex items-center gap-1 backdrop-blur-sm">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <span className="text-xs text-slate-400 font-medium">
                    Published {post.date}
                  </span>

                  <h2 className="text-lg sm:text-xl font-heading font-black text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </a>

              {/* Bottom Card Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-900 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="text-[11px] text-slate-400 font-medium">
                  {post.author.replace(' Team', '')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Emergency Urgent Banner */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-950 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
              <Truck className="w-4 h-4" />
              <span>Need Immediate Locksmith Service?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Locked Out Right Now? We Come to You 24/7.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don't wait for business hours. Pro Locksmith Tech provides fast on-site dispatch across Broward, Miami-Dade, and Palm Beach counties.
            </p>
          </div>

          <a
            href="tel:+17542616528"
            className="py-4 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl flex items-center gap-2 shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>CALL (754) 261-6528</span>
          </a>
        </div>
      </section>
    </div>
  );
}
