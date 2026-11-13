import React from 'react';
import { KeyRound, Phone, Home, MapPin, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[75vh] bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <SEOHead
        title="404 Page Not Found | Pro Locksmith Tech"
        description="The page you requested could not be found. Contact Pro Locksmith Tech for 24/7 mobile locksmith service across South Florida at +1 754-261-6528."
        noIndex={true}
      />

      <div className="max-w-lg w-full bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
          <KeyRound className="w-8 h-8" />
        </div>

        <div>
          <div className="text-4xl sm:text-5xl font-black font-heading text-amber-400 mb-2">
            404
          </div>
          <h1 className="font-heading font-black text-2xl text-white">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            The page you are looking for may have been moved or does not exist. If you need locksmith assistance in South Florida, our mobile technicians are on call 24/7.
          </p>
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
          <div className="text-xs text-slate-300 font-semibold">
            Need emergency lockout assistance?
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="tel:+17542616528"
              className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call (754) 261-6528</span>
            </a>
            <a
              href="sms:+17542616528"
              className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Text Us</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('/service-areas')}
            className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>View Service Areas</span>
          </button>
        </div>
      </div>
    </div>
  );
}
