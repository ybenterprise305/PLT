export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'mobile' | 'automotive' | 'residential' | 'commercial' | 'emergency';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'mobile-locksmith-service',
    category: 'mobile',
    question: 'Do you provide mobile locksmith service in South Florida?',
    answer: 'Yes. Pro Locksmith Tech is an exclusive 100% mobile locksmith service provider in South Florida. We dispatch fully equipped workshop vans directly to your vehicle curb, residence, or commercial property throughout Coral Springs, Fort Lauderdale, Miami, and Boca Raton. There is no storefront visit required; our technicians arrive on-site with all necessary tools.'
  },
  {
    id: 'how-fast-arrival',
    category: 'emergency',
    question: 'How fast can a mobile locksmith arrive at my location?',
    answer: 'Our mobile locksmith technicians maintain an average on-site arrival time of 15 to 25 minutes across Broward County, Miami-Dade County, and Palm Beach County. Because our fleet actively patrols South Florida highways and municipal corridors daily, we dispatch the nearest active mobile unit directly to your coordinates when you call +1 (754) 261-6528.'
  },
  {
    id: 'car-lockout-help',
    category: 'automotive',
    question: 'What should I do if I am locked out of my car in South Florida?',
    answer: 'If you are locked out of your vehicle, call Pro Locksmith Tech at (754) 261-6528 for immediate mobile dispatch. Avoid coat hangers or wedges that bend window frames. Our mobile technicians arrive on-site with professional automotive bypass tools and air wedges to unlock your doors or trunk rapidly without cosmetic damage.'
  },
  {
    id: 'car-key-programming',
    category: 'automotive',
    question: 'Can you make replacement car keys and program key fobs on-site?',
    answer: 'Yes. Our mobile workshop vans are outfitted with computerized CNC laser key cutting machinery and advanced OBD-II diagnostic tablets. We originate replacement car keys, program transponder chips, and sync proximity push-to-start smart key fobs on-site for domestic, Asian, and European vehicles—even when all original keys are completely lost.'
  },
  {
    id: 'rekeying-vs-replacement',
    category: 'residential',
    question: 'What is the difference between lock rekeying and lock replacement?',
    answer: 'Lock rekeying alters the internal brass pin configuration inside your existing deadbolt cylinder so old keys no longer work, saving homeowners up to 70% compared to purchasing new hardware. Lock replacement installs entirely new Grade 1 or Grade 2 deadbolts, recommended if your existing lock is physically worn, compromised, or outdated.'
  },
  {
    id: 'commercial-master-keys',
    category: 'commercial',
    question: 'Do you provide commercial lock hardware and master key systems?',
    answer: 'Yes. Pro Locksmith Tech provides commercial locksmith solutions for storefronts, offices, and facilities across South Florida. Our commercial services include high-security Adams Rite mortise lock replacement, ANSI Grade 1 deadbolts, commercial rekeying, panic exit crash bar repair, and customized master key system design to give managers tiered property access with a single key.'
  },
  {
    id: 'areas-served',
    category: 'general',
    question: 'What areas in South Florida do you serve?',
    answer: 'We serve the entire South Florida tri-county region, with rapid dispatch hubs centered in Coral Springs and covering Broward County (Fort Lauderdale, Pompano Beach, Hollywood, Pembroke Pines), Palm Beach County (Boca Raton, Delray Beach, West Palm Beach), and Miami-Dade County (Miami, Hialeah, Doral, Miami Beach). Our technicians travel directly to you.'
  },
  {
    id: 'service-24-7',
    category: 'emergency',
    question: 'Is emergency mobile locksmith service available 24/7?',
    answer: 'Yes. Pro Locksmith Tech operates 24 hours a day, 7 days a week, 365 days a year—including late nights, weekends, and federal holidays. If you experience an emergency car lockout, lost house keys, or broken storefront deadbolt, our mobile locksmiths are on call for immediate live dispatch.'
  },
  {
    id: 'how-to-request',
    category: 'general',
    question: 'How do I request an immediate mobile locksmith?',
    answer: 'To request immediate mobile service, call our direct 24/7 dispatch phone line at +1 (754) 261-6528 or send an SMS text message with your street address or GPS location. You speak directly with our active South Florida technicians with zero complicated automated phone menus or delay.'
  }
];
