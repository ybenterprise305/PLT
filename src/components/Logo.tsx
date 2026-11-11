import React from 'react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'light' | 'dark';
  className?: string;
  badgeOnly?: boolean;
}

export function Logo({
  size = 'md',
  showText = true,
  textColor = 'light',
  className = '',
  badgeOnly = false,
}: LogoProps) {
  // Dimensions for the emblem badge
  const badgeDimensions = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  // Font sizes for the text lockup
  const textSize = {
    xs: {
      title: 'text-sm sm:text-base',
      sub: 'text-[9px]',
    },
    sm: {
      title: 'text-base sm:text-lg',
      sub: 'text-[10px]',
    },
    md: {
      title: 'text-lg sm:text-xl md:text-2xl',
      sub: 'text-[10px] sm:text-xs',
    },
    lg: {
      title: 'text-2xl sm:text-3xl',
      sub: 'text-xs sm:text-sm',
    },
    xl: {
      title: 'text-3xl sm:text-4xl',
      sub: 'text-sm sm:text-base',
    },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem (Adjusted for Pro Locksmith Tech branding) */}
      <div 
        className={`${badgeDimensions} relative shrink-0 rounded-full flex items-center justify-center transition-transform group-hover:scale-105`}
        title="Pro Locksmith Tech Logo"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Outer Ring Gold Gradient */}
            <linearGradient id="pltGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBE58B" />
              <stop offset="35%" stopColor="#F3CD58" />
              <stop offset="70%" stopColor="#D4A32A" />
              <stop offset="100%" stopColor="#8C6212" />
            </linearGradient>

            {/* Inner Shield / Dark Base Gradient */}
            <linearGradient id="pltNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#123258" />
              <stop offset="50%" stopColor="#0A1E38" />
              <stop offset="100%" stopColor="#051323" />
            </linearGradient>

            {/* Cyan/Tech Accent Gradient */}
            <linearGradient id="pltTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Metallic Silver Key Gradient */}
            <linearGradient id="pltKeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Subtle Drop Shadow */}
            <filter id="pltShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Outer Gold Border Ring */}
          <circle cx="60" cy="60" r="58" fill="url(#pltNavyGrad)" stroke="url(#pltGoldGrad)" strokeWidth="3.5" />
          <circle cx="60" cy="60" r="53" fill="none" stroke="url(#pltGoldGrad)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

          {/* Hexagonal / Shield Tech Core */}
          <path
            d="M60 16 L94 30 V64 C94 84 79 100 60 106 C41 100 26 84 26 64 V30 Z"
            fill="url(#pltNavyGrad)"
            stroke="url(#pltGoldGrad)"
            strokeWidth="2.2"
            filter="url(#pltShadow)"
          />

          {/* Tech Circuit / Keyway Lines */}
          <path
            d="M38 52 H48 L54 58 V68"
            stroke="url(#pltTechGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <circle cx="38" cy="52" r="2" fill="#38BDF8" />

          <path
            d="M82 52 H72 L66 58 V68"
            stroke="url(#pltTechGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <circle cx="82" cy="52" r="2" fill="#38BDF8" />

          {/* Central Padlock Shackle */}
          <path
            d="M48 46 C48 38 52 32 60 32 C68 32 72 38 72 46 V52 H48 Z"
            fill="none"
            stroke="url(#pltGoldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Padlock Body */}
          <rect
            x="44"
            y="50"
            width="32"
            height="30"
            rx="5"
            fill="url(#pltGoldGrad)"
            stroke="#8C6212"
            strokeWidth="1.5"
            filter="url(#pltShadow)"
          />

          {/* Central Keyway in Padlock */}
          <circle cx="60" cy="61" r="3.5" fill="#051323" />
          <path d="M58 62 L57 73 H63 L62 62 Z" fill="#051323" />

          {/* Precision Key Silhouette crossing through */}
          <g transform="rotate(-30 60 62)">
            {/* Key Bow */}
            <circle cx="38" cy="62" r="8" fill="none" stroke="url(#pltKeyGrad)" strokeWidth="2.5" />
            <circle cx="38" cy="62" r="3.5" fill="none" stroke="url(#pltKeyGrad)" strokeWidth="1.5" />
            {/* Key Shaft & Bits */}
            <path
              d="M46 60.5 H84 V63.5 H46 Z M72 63.5 V68 H76 V63.5 Z M78 63.5 V67 H82 V63.5 Z"
              fill="url(#pltKeyGrad)"
            />
          </g>

          {/* Top Banner Text Curve / Indicator Stars */}
          <g fill="url(#pltGoldGrad)">
            <polygon points="60,94 62,99 67,99 63,102 65,107 60,104 55,107 57,102 53,99 58,99" />
            <polygon points="50,92 51.5,95.5 55,95.5 52,98 53.5,101.5 50,99.5 46.5,101.5 48,98 45,95.5 48.5,95.5" transform="scale(0.8) translate(12, 10)" />
            <polygon points="70,92 71.5,95.5 75,95.5 72,98 73.5,101.5 70,99.5 66.5,101.5 68,98 65,95.5 68.5,95.5" transform="scale(0.8) translate(18, 10)" />
          </g>

          {/* Clean Tech Accent Light Reflex */}
          <circle cx="56" cy="56" r="1.5" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && !badgeOnly && (
        <div className="flex flex-col justify-center min-w-0">
          <div
            className={`font-heading font-black tracking-tight whitespace-nowrap leading-none ${
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
            className={`tracking-wider uppercase font-semibold mt-1 whitespace-nowrap ${
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
