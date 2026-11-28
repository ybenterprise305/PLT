import type { ResourceLink } from './locksmithTipsData';

const keys = ['Check car key and fob compatibility', '/tips/vehicle-key-compatibility'] as const;
const pricing = ['Understand locksmith pricing factors', '/tips/locksmith-pricing-factors'] as const;
const lockout = ['Decide what help you need during a lockout', '/tips/lockout-what-to-do'] as const;
const residential = ['Plan a rental lock change', '/tips/rental-lock-changes'] as const;
const commercial = ['Plan a business key handover', '/tips/business-key-handover'] as const;

export const topicResources: Record<string, readonly ResourceLink[]> = {
  Automotive: [keys, pricing],
  Residential: [residential, ['Compare rekeying and lock replacement', '/blog/rekeying-vs-changing-locks-difference']],
  Commercial: [commercial, ['When a commercial door will not latch', '/tips/commercial-door-latch-alignment']],
  Emergency: [lockout, pricing],
};

export const serviceResources: Record<string, readonly ResourceLink[]> = {
  'automotive-locksmith': topicResources.Automotive,
  'key-replacement': [keys, ['Compare a spare key with replacing all lost keys', '/blog/spare-car-key-vs-all-keys-lost']],
  'key-duplication': [keys, ['Compare a spare key with replacing all lost keys', '/blog/spare-car-key-vs-all-keys-lost']],
  'residential-locksmith': topicResources.Residential,
  'lock-rekeying': topicResources.Residential,
  'lock-replacement': topicResources.Residential,
  'lock-repair': [['Why a door lock sticks', '/tips/how-to-fix-sticking-door-lock'], pricing],
  'lock-installation': [['Choosing a replacement deadbolt', '/tips/high-security-vs-standard-deadbolts'], residential],
  'security-hardware': [['What to do when a smart lock battery dies', '/tips/smart-lock-dead-battery-override'], residential],
  'commercial-locksmith': topicResources.Commercial,
  'emergency-lockout-service': topicResources.Emergency,
  'emergency-locksmith-service': [lockout, ['How a mobile locksmith visit works', '/blog/what-information-needed-before-calling-mobile-locksmith']],
};

export const spanishDecisionResources: readonly ResourceLink[] = [
  ['Compatibilidad de llaves y controles de auto', '/tips/vehicle-key-compatibility'],
  ['Factores que afectan el precio', '/tips/locksmith-pricing-factors'],
  ['Cómo actuar si se queda sin acceso', '/tips/lockout-what-to-do'],
];
