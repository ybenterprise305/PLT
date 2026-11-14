import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

import { LocalizedA } from './LocalizedA';
interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'drawer';
  className?: string;
}

export function SocialLinks({ variant = 'header', className = '' }: SocialLinksProps) {
  const socialChannels = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/people/Pro-Locksmith-Tech/61596007395772/',
      icon: <Facebook className="w-4 h-4" />,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pro_locksmith_tech/',
      icon: <Instagram className="w-4 h-4" />,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Pro_Locksmith_T',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'hover:text-white'
    }
  ];

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socialChannels.map((item) => (
          <LocalizedA
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 ${item.color} hover:border-amber-500/40 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm`}
            aria-label={`Follow Pro Locksmith Tech on ${item.name}`}
            title={`Follow Pro Locksmith Tech on ${item.name}`}
          >
            {item.icon}
          </LocalizedA>
        ))}
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socialChannels.map((item) => (
          <LocalizedA
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 ${item.color} flex items-center gap-2 text-xs font-medium transition-colors`}
            aria-label={`Pro Locksmith Tech on ${item.name}`}
          >
            {item.icon}
            <span className="text-[11px]">{item.name}</span>
          </LocalizedA>
        ))}
      </div>
    );
  }

  // Header variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialChannels.map((item) => (
        <LocalizedA
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-7 h-7 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 ${item.color} flex items-center justify-center transition-colors`}
          aria-label={`Pro Locksmith Tech on ${item.name}`}
          title={item.name}
        >
          {item.icon}
        </LocalizedA>
      ))}
    </div>
  );
}
