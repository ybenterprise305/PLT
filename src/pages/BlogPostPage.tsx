import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  MapPin 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  // Schema.org BlogPosting Structured Data
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "datePublished": "2025-01-15T08:00:00+08:00",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://prolocksmith-tech.com/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
      <SEOHead
        title={`${post.title} | Pro Locksmith Tech Blog`}
        description={post.metaDescription}
        keywords={post.keywords.join(', ')}
        ogType="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-400 border border-slate-800">
            {post.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Truck className="w-3.5 h-3.5" />
              <span>Mobile Service Across South Florida</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-slate-800 aspect-[16/9] shadow-2xl bg-slate-950">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Urgent In-Article Callout Box */}
        <div className="bg-gradient-to-r from-amber-500/20 to-slate-950 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-7 mb-10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
              <Truck className="w-4 h-4" />
              <span>Need Immediate Locksmith Service?</span>
            </div>
            <h3 className="font-heading font-black text-xl text-white">
              Locked Out Right Now? We Come to You 24/7.
            </h3>
            <p className="text-xs text-slate-300 max-w-md">
              Call our mobile dispatch hotline for prompt arrival in Broward, Miami-Dade, or Palm Beach County.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href="tel:+17542616528"
              className="py-3 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call: (754) 261-6528</span>
            </a>
            <a
              href="sms:+17542616528"
              className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Text</span>
            </a>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="space-y-8 text-slate-200 leading-relaxed text-base sm:text-lg">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white pt-2 border-b border-slate-800/80 pb-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.tips && section.tips.length > 0 && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 my-4 space-y-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 block">
                    Key Takeaways & Best Practices:
                  </span>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Related Services Links */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-800 space-y-4">
            <h3 className="font-heading font-black text-xl text-white">
              Related Mobile Locksmith Services:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {post.relatedServices.map((service, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="px-4 py-2.5 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-800 hover:border-amber-400 rounded-xl transition-all font-semibold text-xs flex items-center gap-2 cursor-pointer group"
                >
                  <span>{service.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Service Coverage Footer Callout */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Mobile Dispatch Hotline
            </span>
            <h4 className="font-heading font-black text-2xl text-white mt-1">
              Ready for a Mobile Locksmith Technician?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
              We come directly to your vehicle, home, or business location in South Florida. 24/7 availability.
            </p>
          </div>

          <a
            href="tel:+17542616528"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl transition-transform hover:scale-105 cursor-pointer shrink-0"
          >
            <Phone className="w-4 h-4 fill-current animate-pulse" />
            <span>Call +1 754-261-6528</span>
          </a>
        </div>

        {/* More Articles Section */}
        <div className="mt-14 pt-10 border-t border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-black text-xl text-white">
              More Locksmith Guides
            </h3>
            <button
              onClick={() => onNavigate('/blog')}
              className="text-xs font-bold text-amber-400 hover:underline cursor-pointer"
            >
              View All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/blog/${rel.slug}`)}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 p-4 rounded-xl transition-all cursor-pointer group"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mt-1 line-clamp-2">
                  {rel.title}
                </h4>
                <span className="text-[11px] text-slate-400 mt-2 block">
                  {rel.readTime}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
