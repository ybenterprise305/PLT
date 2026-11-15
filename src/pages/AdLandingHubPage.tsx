import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';

/** Retired public campaign index. Real PPC landing pages under /lp/:slug remain available. */
export function AdLandingHubPage({ onNavigate: _onNavigate }: { onNavigate: (path: string) => void }) {
  return <main className="min-h-screen bg-slate-950 text-white px-5 py-20 text-center">
    <SEOHead title="Page Not Available | Pro Locksmith Tech" description="Visit Pro Locksmith Tech for mobile locksmith services in South Florida." canonicalPath="/lp" noIndex={true} />
    <h1 className="font-heading text-3xl font-bold">Page Not Available</h1>
    <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">Explore our mobile locksmith services or call for assistance.</p>
    <LocalizedA href="/services" className="mt-6 inline-flex rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950">View Locksmith Services</LocalizedA>
  </main>;
}
