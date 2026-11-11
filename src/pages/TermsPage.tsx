import React from 'react';
import { FileText, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <SEOHead
        title="Terms of Service | Pro Locksmith Tech | 24/7 Mobile Locksmith"
        description="Terms of Service for Pro Locksmith Tech. Clear, transparent terms regarding mobile locksmith dispatch, property authorization, and on-site service in South Florida."
        keywords="Pro Locksmith Tech terms of service, mobile locksmith terms"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        
        {/* Header */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Terms & Dispatch Agreement</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">1. Mobile Service Agreement</h2>
            <p>
              Pro Locksmith Tech operates exclusively as a mobile locksmith service in South Florida. We do not maintain a physical customer-facing storefront. By requesting a service dispatch via phone call, text, email, or online form, you agree that an active technician will travel directly to your designated service coordinates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">2. Proof of Authorization & Ownership</h2>
            <p>
              To protect property owners and prevent unlawful entry:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
              <li>Customers requesting vehicle unlocking, car key origination, or ignition service must provide a valid government-issued photo ID and verifiable proof of vehicle ownership or legal authorization (e.g., vehicle registration, title, or rental contract matching the customer ID).</li>
              <li>Customers requesting residential or commercial unlocking, lock rekeying, or replacement must confirm legal tenancy, property ownership, or authorized managerial status prior to work being executed.</li>
              <li>Technicians reserve the right to decline service if legal authorization cannot be verified.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">3. Clear Upfront Communication & Payment</h2>
            <p>
              Before performing any mechanical bypass, lock disassembly, key cutting, or hardware installation, the technician will evaluate the situation and explain the required procedure. Payment is due upon completion of the on-site service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">4. Cancellation & Mobile Dispatch Policy</h2>
            <p>
              Because mobile locksmith units are actively dispatched on the road to your specific geographic location, please notify our dispatch team immediately at +1 754-261-6528 if your situation resolves before technician arrival.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-white">5. Direct Contact</h2>
            <p>
              For questions regarding service terms or dispatch policies, contact us 24/7:
            </p>
            <div className="pt-2 space-y-1.5 text-xs sm:text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+17542616528" className="text-amber-400 hover:underline font-bold">+1 754-261-6528</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:prolocksmithtech@gmail.com" className="text-amber-400 hover:underline">prolocksmithtech@gmail.com</a>
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
export default TermsPage;
