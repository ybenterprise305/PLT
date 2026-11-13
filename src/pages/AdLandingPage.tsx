import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Car, 
  Home, 
  Building2, 
  KeyRound, 
  HelpCircle,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { NotFoundPage } from './NotFoundPage';
import { TextLocationButton } from '../components/TextLocationButton';
import { SERVICES_DATA } from '../data/servicesData';
import { COUNTIES_DATA } from '../data/locationsData';
import { AD_CAMPAIGNS, getAdCampaignBySlug } from '../data/adLandingPagesData';
import { trackPhoneClick } from '../utils/analytics';

interface AdLandingPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function AdLandingPage({ slug, onNavigate }: AdLandingPageProps) {
  // Resolve campaign configuration or fallback
  const campaign = getAdCampaignBySlug(slug);
  if (!campaign) {
    return <NotFoundPage onNavigate={onNavigate} />;
  }
  const service = SERVICES_DATA.find(s => s.slug === campaign.serviceId || s.id === campaign.serviceId) || SERVICES_DATA[0];

  const phoneNumber = '+1 754-261-6528';
  const phoneTel = 'tel:+17542616528';
  const smsTel = 'sms:+17542616528';

  // Structured Data Schema for LocalBusiness / Locksmith Ad Page
  const adSchema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "AutomotiveBusiness"],
    "name": `Pro Locksmith Tech - ${campaign.name}`,
    "image": "https://prolocksmith-tech.com/icon-512.png",
    "@id": `https://prolocksmith-tech.com/lp/${campaign.slug}#ad`,
    "url": `https://prolocksmith-tech.com/lp/${campaign.slug}`,
    "telephone": "+1-754-261-6528",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coral Springs",
      "addressRegion": "FL",
      "postalCode": "33076",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Broward County, FL" },
      { "@type": "AdministrativeArea", "name": "Miami-Dade County, FL" },
      { "@type": "AdministrativeArea", "name": "Palm Beach County, FL" }
    ],
    "description": campaign.subheadline
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 pb-20 lg:pb-0">
      <SEOHead
        title={`${campaign.name} South Florida | 24/7 Mobile Dispatch | Pro Locksmith Tech`}
        description={campaign.subheadline}
        keywords={campaign.targetKeywords.join(', ')}
        canonicalPath={`/lp/${campaign.slug}`}
        noIndex={true}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adSchema) }}
      />

      {/* Minimal Distraction-Free PPC Ad Header */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-black text-base sm:text-lg tracking-tight text-white leading-none">
                PRO LOCKSMITH <span className="text-amber-400">TECH</span>
              </div>
              <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">
                24/7 Mobile Locksmith · We Come To You
              </div>
            </div>
          </div>

          {/* Quick Call Button in Header */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Mobile Dispatch</span>
              </span>
              <a href={phoneTel} className="font-heading font-black text-white hover:text-amber-400 text-base">
                {phoneNumber}
              </a>
            </div>

            <a
              href={phoneTel}
              onClick={() => trackPhoneClick({ ctaLocation: 'ppc_header_call_btn', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
              className="py-2.5 px-4 sm:px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer ring-2 ring-amber-400/40"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>CALL NOW</span>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section: High Urgency & Immediate Customer Conversion */}
      <section className="relative overflow-hidden pt-8 pb-14 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Urgency Hook & Benefits */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>{campaign.urgencyBadge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                {campaign.headline}
              </h1>

              {/* Supporting Ad Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {campaign.subheadline}
              </p>

              {/* Primary Call to Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href={phoneTel}
                  className="w-full sm:w-auto py-4 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 cursor-pointer ring-4 ring-amber-500/25"
                >
                  <Phone className="w-6 h-6 fill-current animate-pulse" />
                  <span>CALL NOW: (754) 261-6528</span>
                </a>

                <TextLocationButton ctaLocation="ppc_hero_text_location" campaignSlug={campaign.slug} />
              </div>

              <div className="text-sm text-slate-300 flex items-center justify-center lg:justify-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Typical on-site arrival: <strong>15–20 minutes</strong> across South Florida</span>
              </div>

              {/* 4 Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
                {campaign.keyBenefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 p-3 bg-slate-900/95 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Dispatch Process & Direct Call Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="border-b border-slate-800 pb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 mb-1">
                    <Truck className="w-4 h-4" />
                    <span>Emergency Mobile Dispatch Unit</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Need Help Right Now?
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Direct dispatcher line for South Florida drivers, homeowners, and facility managers.
                  </p>
                </div>

                {/* 4 Step Procedure */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <div>
                      <strong className="text-white block font-bold text-sm">Call Our Direct Dispatch Line</strong>
                      <span className="text-slate-400">Speak directly with our local South Florida technician. No call centers.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <div>
                      <strong className="text-white block font-bold text-sm">Provide Location & Service Details</strong>
                      <span className="text-slate-400">Tell us where you are and details about your vehicle, door lock, or key situation.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs">
                      3
                    </span>
                    <div>
                      <strong className="text-white block font-bold text-sm">Availability & Pricing Discussed</strong>
                      <span className="text-slate-400">We clearly review estimated arrival and pricing factors before dispatching.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs">
                      4
                    </span>
                    <div>
                      <strong className="text-white block font-bold text-sm">Technician Travels to Your Location</strong>
                      <span className="text-slate-400">A mobile workshop van arrives directly at your coordinates to complete the work.</span>
                    </div>
                  </div>
                </div>

                {/* 1-Tap Tap To Call Button */}
                <a
                  href={phoneTel}
                  onClick={() => trackPhoneClick({ ctaLocation: 'ppc_procedure_box_call', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  <span>CALL NOW — (754) 261-6528</span>
                </a>

                <div className="text-center">
                  <a href={smsTel} className="text-xs text-amber-400 font-semibold hover:underline">
                    Prefer SMS? Tap to text your address or coordinates
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Capabilities & What We Service */}
      <section className="py-14 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md">
            <span>Precision On-Site Equipment</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            What We Service On-Site
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Vehicle or Hardware Supported Grid */}
        {campaign.vehicleOrHardwareSupported && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12">
            <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Compatible Vehicles & Lock Hardware We Handle:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              {campaign.vehicleOrHardwareSupported.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {service.features.map((feat, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-black text-lg text-white">
                {feat}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Handled directly at your location using mobile computer decoders and professional locksmith tooling.
              </p>
            </div>
          ))}
        </div>

        {/* Mid-Page Callout Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Available Right Now · 24 Hours / 7 Days
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Ready to Dispatch a Mobile Locksmith?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don’t stay locked out or risk costly door damage. Call our direct line for fast mobile dispatch.
            </p>
          </div>

          <a
            href={phoneTel}
            onClick={() => trackPhoneClick({ ctaLocation: 'ppc_mid_banner_call', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
            className="py-4 px-8 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl flex items-center gap-2 shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-current animate-pulse" />
            <span>CALL (754) 261-6528</span>
          </a>
        </div>
      </section>

      {/* 3-County Coverage Areas */}
      <section className="py-12 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Service Coverage
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Serving 37 South Florida Cities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Our mobile technicians travel directly to your location across all three major counties:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COUNTIES_DATA.map((county) => (
              <div key={county.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="font-heading font-black text-lg text-white">
                    {county.name}
                  </h4>
                  <span className="text-[10px] font-bold text-amber-400 uppercase">
                    15–20 Min Dispatch
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {county.majorCities.map((city) => (
                    <span 
                      key={city.id}
                      className="px-2.5 py-1 bg-slate-900 rounded-lg text-xs font-semibold text-slate-300 border border-slate-800"
                    >
                      {city.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Need immediate confirmation in your area? Call{' '}
              <a 
                href={phoneTel} 
                onClick={() => trackPhoneClick({ ctaLocation: 'ppc_coverage_text_call', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
                className="text-amber-400 font-bold hover:underline"
              >
                (754) 261-6528
              </a>{' '}
              to speak directly with our dispatcher.
            </p>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQ Section */}
      <section className="py-14 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear, honest answers about our {campaign.name.toLowerCase()} service.
          </p>
        </div>

        <div className="space-y-4">
          {campaign.faq.map((q, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-2">
              <h4 className="font-heading font-bold text-base text-white">
                {q.question}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {q.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Final Conversion CTA in Landing Page */}
        <div className="mt-12 text-center p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            Ready For A Mobile Locksmith?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Our dispatch line is open 24 hours a day, 7 days a week. Speak directly with a friendly technician now.
          </p>
          <div className="pt-2">
            <a
              href={phoneTel}
              onClick={() => trackPhoneClick({ ctaLocation: 'ppc_bottom_final_call', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
              className="inline-flex items-center gap-3 py-4 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-xl transition-transform hover:scale-105 cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse" />
              <span>CALL NOW — (754) 261-6528</span>
            </a>
          </div>
        </div>
      </section>

      {/* Ad Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-xs text-slate-400">
        <div className="max-w-[1400px] mx-auto px-4 space-y-3">
          <p className="font-heading font-bold text-white text-sm">
            Pro Locksmith Tech · 24/7 Mobile Locksmith Service
          </p>
          <p>
            Serving Broward County, Miami-Dade County, and Palm Beach County, FL. Direct Dispatch: +1 754-261-6528.
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-400 underline cursor-pointer">Main Website</button>
            <button onClick={() => onNavigate('/services')} className="hover:text-amber-400 underline cursor-pointer">All Services</button>
            <button onClick={() => onNavigate('/service-areas')} className="hover:text-amber-400 underline cursor-pointer">Service Areas</button>
            <button onClick={() => onNavigate('/faq')} className="hover:text-amber-400 underline cursor-pointer">FAQ</button>
          </div>
          <p className="text-[10px] text-slate-400 pt-2">
            © {new Date().getFullYear()} Pro Locksmith Tech. All rights reserved. 100% Mobile Service — We Come to You.
          </p>
        </div>
      </footer>

      {/* Persistent Sticky Mobile Call Bar for Ads */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t-2 border-amber-500 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl flex items-center gap-2">
        <a
          href={phoneTel}
          onClick={() => trackPhoneClick({ ctaLocation: 'ppc_mobile_sticky_call', pagePath: `/lp/${campaign.slug}`, campaignSlug: campaign.slug })}
          className="flex-1 py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <Phone className="w-5 h-5 fill-current animate-pulse" />
          <span>CALL NOW — (754) 261-6528</span>
        </a>
        <a
          href={smsTel}
          className="py-3.5 px-4 bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-amber-400" />
          <span>Text</span>
        </a>
      </div>
    </div>
  );
}
