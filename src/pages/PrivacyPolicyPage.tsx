import React from 'react';
import { Shield, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

import { LocalizedA } from '../components/LocalizedA';
interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title="Privacy Policy | Pro Locksmith Tech | 24/7 Mobile Locksmith"
        description="Privacy Policy for Pro Locksmith Tech. Learn how we handle customer phone calls, text messages, location coordinates, and service inquiries."
        keywords="Pro Locksmith Tech privacy policy, mobile locksmith privacy"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        
        {/* Header */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Customer Data & Privacy</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">1. Overview</h2>
            <p>
              Pro Locksmith Tech (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides 24/7 mobile locksmith services across South Florida (Broward, Miami-Dade, and Palm Beach counties). This Privacy Policy explains how we collect, use, and safeguard your information when you contact us via telephone, SMS text message, email, or our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">2. Information We Collect</h2>
            <p>
              Because we operate strictly as a mobile service dispatched directly to your location, we collect only the necessary information required to coordinate and fulfill your locksmith request:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li><strong>Contact Information:</strong> Your telephone number, name, and email address when you call, text, or email us.</li>
              <li><strong>Service Location:</strong> The address, street intersection, business name, or vehicle coordinates where locksmith assistance is requested.</li>
              <li><strong>Service Details:</strong> Information about your lock, car make/model/year, or key requirements necessary to prepare our mobile equipment.</li>
              <li><strong>Ownership Verification:</strong> For emergency lockouts and key replacements, technicians may inspect identification and proof of vehicle or property authorization on-site before providing entry.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">3. How We Use Your Information</h2>
            <p>
              Your information is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>Dispatch an active mobile locksmith technician to your specified location.</li>
              <li>Communicate arrival estimates and updates via phone call or SMS text.</li>
              <li>Provide accurate service pricing and complete your requested locksmith work.</li>
              <li>Issue payment receipts upon completion of on-site service.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">4. No Sale of Customer Information</h2>
            <p>
              We do not sell, rent, trade, or distribute your personal contact information or location coordinates to third-party advertisers, lead generators, or marketers. Information is shared strictly between our dispatch staff and the assigned mobile technician servicing your call.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">5. Website Analytics, Advertising and Location Sharing</h2>
            <p>
              Our website may use Google Analytics and Google Ads tags to understand how visitors use the site and which ads lead to calls. These tools may collect your device and browser type, approximate location, pages viewed, the ad or campaign that brought you here, and whether you tapped a call or text button. We do not use these tools to collect your name or phone number from the site.
            </p>
            <p>
              Some pages offer a &quot;Text My Location&quot; button. It asks your browser for permission to share your location. If you allow it, your coordinates are placed in a text message that you can review and choose to send to us. If you decline, you can type your address instead. We do not store your location on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">6. Direct Contact</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to have your contact details updated, please reach out directly:
            </p>
            <div className="pt-2 space-y-1.5 text-xs sm:text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <LocalizedA href="tel:+17542616528" className="text-amber-400 hover:underline font-bold">+1 754-261-6528</LocalizedA>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <LocalizedA href="mailto:prolocksmithtech@gmail.com" className="text-amber-400 hover:underline">prolocksmithtech@gmail.com</LocalizedA>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Serving Broward, Miami-Dade & Palm Beach Counties, Florida</span>
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
export default PrivacyPolicyPage;
