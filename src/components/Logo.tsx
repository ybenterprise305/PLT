import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'light' | 'dark';
  className?: string;
  badgeOnly?: boolean;
  compactHeader?: boolean;
}

export function Logo({
  size = 'md',
  showText = true,
  textColor = 'light',
  className = '',
  badgeOnly = false,
  compactHeader = false,
}: LogoProps) {
  // Dimensions for the emblem badge
  const badgeDimensions = compactHeader ? 'w-6 h-6 sm:w-10 sm:h-10 md:w-11 md:h-11' : {
    xs: 'w-6 h-6 sm:w-7 sm:h-7',
    sm: 'w-7 h-7 sm:w-9 sm:h-9',
    md: 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11',
    lg: 'w-12 h-12 sm:w-16 sm:h-16',
    xl: 'w-16 h-16 sm:w-24 sm:h-24',
  }[size];

  // Font sizes for the text lockup
  const textSize = compactHeader ? {
    title: 'text-[11px] sm:text-lg md:text-xl',
    sub: 'text-[7px] sm:text-[10px] md:text-xs',
  } : {
    xs: {
      title: 'text-xs sm:text-sm',
      sub: 'text-[8px] sm:text-[9px]',
    },
    sm: {
      title: 'text-xs sm:text-base',
      sub: 'text-[9px] sm:text-[10px]',
    },
    md: {
      title: 'text-sm sm:text-lg md:text-xl',
      sub: 'text-[9px] sm:text-[10px] md:text-xs',
    },
    lg: {
      title: 'text-xl sm:text-2xl md:text-3xl',
      sub: 'text-xs sm:text-sm',
    },
    xl: {
      title: 'text-2xl sm:text-3xl md:text-4xl',
      sub: 'text-xs sm:text-base',
    },
  }[size];

  return (
    <div className={`inline-flex min-w-0 items-center gap-1 sm:gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem (Adjusted for Pro Locksmith Tech branding) */}
      <div 
        className={`${badgeDimensions} relative shrink-0 rounded-full flex items-center justify-center transition-transform group-hover:scale-105`}
        title="Pro Locksmith Tech Logo"
      >
        <img src="/pro-locksmith-tech-logo.svg" width={120} height={120} alt=""
          className="h-full w-full drop-shadow-md" />
      </div>

      {/* Brand Name Typography */}
      {showText && !badgeOnly && (
        <div className="flex flex-col justify-center min-w-0">
          <div
            className={`font-heading font-black tracking-tight truncate leading-none ${
              textSize.title
            }`}
          >
            <span className={textColor === 'light' ? 'text-white' : 'text-slate-900'}>
              PRO LOCKSMITH{' '}
            </span>
            <span className="text-amber-400">
              TECH
            </span>
          </div>
          <div
            className={`tracking-wider uppercase font-semibold mt-1 truncate ${
              textSize.sub
            } ${textColor === 'light' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            <span className="text-amber-500 font-bold">24/7</span>
            <span className="mx-1">·</span>
            <span>South Florida Mobile</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default Logo;
