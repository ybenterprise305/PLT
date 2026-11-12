import React, { useState } from 'react';
import { Play, Clock, Phone, ShieldCheck, Film, X, ExternalLink, Sparkles } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';
import { keyMachineImg, carKeyProgImg, techRekeyingImg, locksmithVanImg } from '../assets/images';

export interface VideoGuideItem {
  id: string;
  name: string;
  description: string;
  category: string;
  durationLabel: string;
  isoDuration: string;
  uploadDate: string;
  thumbnailUrl: string;
  embedUrl: string;
  contentUrl: string;
  highlights: string[];
}

export const VIDEO_GUIDES: VideoGuideItem[] = [
  {
    id: 'video-1',
    name: 'How Mobile Key Cutting Works: Inside Our South Florida Mobile Unit',
    description: 'Go behind the scenes inside our mobile locksmith van to see how computer-guided laser cutters decode and cut factory-exact high-security automotive and residential keys on-site in South Florida.',
    category: 'Automotive & Key Cutting',
    durationLabel: '3:45',
    isoDuration: 'PT3M45S',
    uploadDate: '2025-01-15T09:00:00-05:00',
    thumbnailUrl: keyMachineImg,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    contentUrl: 'https://prolocksmith-tech.com/videos/how-mobile-key-cutting-works',
    highlights: [
      'Digital optical decoding of worn key bitting',
      'CNC high-security laser sidewinder milling',
      'Deburring and smooth keyway testing'
    ]
  },
  {
    id: 'video-2',
    name: 'What to Do When Locked Out of Your Car: Step-by-Step Safe Guide',
    description: 'Learn how professional mobile automotive locksmiths unlock vehicles non-destructively using pneumatic air wedges and reach tools without damaging door wiring or weatherstripping.',
    category: 'Emergency Lockouts',
    durationLabel: '4:12',
    isoDuration: 'PT4M12S',
    uploadDate: '2025-01-20T10:30:00-05:00',
    thumbnailUrl: carKeyProgImg,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    contentUrl: 'https://prolocksmith-tech.com/videos/car-lockout-step-by-step',
    highlights: [
      'Why DIY wire hangers ruin door seals and airbags',
      'Non-marring air wedge positioning',
      'Instant interior lock toggle actuation'
    ]
  },
  {
    id: 'video-3',
    name: 'How to Rekey a Deadbolt: What a Mobile Locksmith Does On-Site',
    description: 'A master locksmith explains how deadbolt cylinders are repinned to match new keys, rendering old keys obsolete while keeping existing door hardware intact.',
    category: 'Residential Security',
    durationLabel: '5:02',
    isoDuration: 'PT5M02S',
    uploadDate: '2025-02-01T11:00:00-05:00',
    thumbnailUrl: techRekeyingImg,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    contentUrl: 'https://prolocksmith-tech.com/videos/how-to-rekey-deadbolt',
    highlights: [
      'Disassembling the brass lock cylinder plug',
      'Measuring shear line bitting with pin gauges',
      'Master keying multiple doors to one key'
    ]
  },
  {
    id: 'video-4',
    name: 'Transponder Key Programming Explained: How Immobilizers Work',
    description: 'Understand how RFID transponder chips and proximity key fobs sync with vehicle engine computers (ECUs) via OBD-II diagnostic programming tools.',
    category: 'Key Programming',
    durationLabel: '4:30',
    isoDuration: 'PT4M30S',
    uploadDate: '2025-02-08T14:15:00-05:00',
    thumbnailUrl: locksmithVanImg,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    contentUrl: 'https://prolocksmith-tech.com/videos/transponder-programming-explained',
    highlights: [
      'RFID handshake between key and immobilizer',
      'Clearing lost keys from vehicle memory',
      'On-site push-to-start smart fob registration'
    ]
  }
];

interface VideoGuidesSectionProps {
  onNavigate?: (path: string) => void;
  title?: string;
  subtitle?: string;
}

export function VideoGuidesSection({
  onNavigate,
  title = "Locksmith Demonstration & Video Guides",
  subtitle = "Watch how modern mobile locksmithing works: computer-guided key cutting, non-destructive vehicle entry, and deadbolt cylinder rekeying across South Florida."
}: VideoGuidesSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoGuideItem | null>(null);

  // Schema.org VideoObject Structured Data for VSEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": VIDEO_GUIDES.map((v) => ({
      "@type": "VideoObject",
      "name": v.name,
      "description": v.description,
      "thumbnailUrl": [v.thumbnailUrl],
      "uploadDate": v.uploadDate,
      "duration": v.isoDuration,
      "contentUrl": v.contentUrl,
      "embedUrl": v.embedUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Pro Locksmith Tech",
        "url": "https://prolocksmith-tech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prolocksmith-tech.com/icon-512.png"
        }
      }
    }))
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-950 border-t border-b border-slate-800 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider rounded-md">
            <Film className="w-3.5 h-3.5" />
            <span>Video Resource Center · Technical Demonstrations</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_GUIDES.map((video) => (
            <div
              key={video.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Container */}
                <div 
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-video overflow-hidden cursor-pointer bg-slate-950"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500 group-hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-bold text-amber-400 border border-slate-700 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.durationLabel}</span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-slate-300 border border-slate-800">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 
                    onClick={() => setActiveVideo(video)}
                    className="font-heading font-black text-base text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-2 leading-snug"
                  >
                    {video.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                      Video Highlights:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-400">
                      {video.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveVideo(video)}
                  className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  <span>Watch Video</span>
                </button>
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: `video_card_call_${video.id}`, pagePath: window.location.pathname })}
                  className="py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  title="Call for mobile service"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Need Live On-Site Assistance?
            </span>
            <h4 className="font-heading font-black text-xl text-white">
              We Bring These Tools Directly to Your Vehicle or Doorway
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              100% Mobile Locksmith Service across Broward, Miami-Dade, and Palm Beach County. Fast dispatch, professional upfront pricing.
            </p>
          </div>

          <a
            href="tel:+17542616528"
            onClick={() => trackPhoneClick({ ctaLocation: 'video_section_banner_call', pagePath: window.location.pathname })}
            className="py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Phone className="w-4 h-4 fill-current animate-pulse" />
            <span>Call (754) 261-6528</span>
          </a>
        </div>
      </div>

      {/* Video Modal Player / Preview */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  {activeVideo.category} · Duration {activeVideo.durationLabel}
                </span>
                <h3 className="font-heading font-black text-base sm:text-lg text-white">
                  {activeVideo.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Preview Body */}
            <div className="p-6 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={activeVideo.thumbnailUrl}
                  alt={activeVideo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl mb-3">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <h4 className="font-heading font-black text-lg text-white max-w-md">
                    {activeVideo.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 max-w-md">
                    {activeVideo.description}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
                  What You Learn in This Guide:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeVideo.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call CTA in Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-xs text-slate-400 text-center sm:text-left">
                  Need rapid assistance right now? Our mobile technicians are ready.
                </p>
                <a
                  href="tel:+17542616528"
                  onClick={() => trackPhoneClick({ ctaLocation: `video_modal_call_${activeVideo.id}`, pagePath: window.location.pathname })}
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>Call (754) 261-6528</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
