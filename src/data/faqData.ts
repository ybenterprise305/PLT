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
    question: 'Do you provide mobile locksmith service?',
    answer: 'Yes. Pro Locksmith Tech is a 100% mobile locksmith service. We bring our fully equipped mobile workshop vans directly to your vehicle, home, business, or job site anywhere in South Florida, saving you the hassle and cost of traveling or towing.'
  },
  {
    id: 'come-to-location',
    category: 'mobile',
    question: 'Do you come to my location?',
    answer: 'Yes, we come directly to you. We do not operate a customer-facing physical storefront. Instead, our technicians travel in service vehicles outfitted with computerized laser key cutters, OBD programming diagnostics, and lock hardware directly to your exact coordinates.'
  },
  {
    id: 'areas-served',
    category: 'general',
    question: 'What areas do you serve?',
    answer: 'We serve all of South Florida, with primary dispatch coverage across Broward County, Miami-Dade County, and Palm Beach County. Key service areas include Coral Springs, Fort Lauderdale, Miami, Hollywood, Pompano Beach, Boca Raton, West Palm Beach, Pembroke Pines, and all surrounding municipalities.'
  },
  {
    id: 'emergency-services',
    category: 'emergency',
    question: 'Do you provide emergency locksmith services?',
    answer: 'Yes. We provide 24/7 emergency response for car lockouts, house lockouts, business lockouts, broken key extractions, and urgent lock changes throughout South Florida.'
  },
  {
    id: 'automotive-services',
    category: 'automotive',
    question: 'Do you provide automotive locksmith services?',
    answer: 'Yes. Our automotive capabilities include non-destructive vehicle lockouts, new car key generation, transponder chip programming, key fob replacement, push-to-start smart keys, ignition cylinder repairs, and broken car key extractions on-site.'
  },
  {
    id: 'residential-services',
    category: 'residential',
    question: 'Do you provide residential locksmith services?',
    answer: 'Yes. We assist homeowners and renters with house lockouts, high-security deadbolt installation, lock replacement, lock rekeying, broken key removal, sliding patio door locks, and electronic smart lock setups for houses, townhomes, and condos.'
  },
  {
    id: 'commercial-services',
    category: 'commercial',
    question: 'Do you provide commercial locksmith services?',
    answer: 'Yes. We work with retail storefronts, offices, warehouses, and commercial properties providing emergency business lockouts, commercial deadbolt and mortise lock replacements, rekeying, master key systems, panic crash bars, and door hardware maintenance.'
  },
  {
    id: 'how-to-request',
    category: 'general',
    question: 'How can I request a locksmith?',
    answer: 'The fastest way to request service is to call our direct dispatch line at +1 754-261-6528. You can also text us at (754) 261-6528 with your current location and a brief description of what you need.'
  },
  {
    id: 'service-24-7',
    category: 'emergency',
    question: 'Do you provide service 24/7?',
    answer: 'Yes. Our mobile dispatch operates 24 hours a day, 7 days a week, 365 days a year—including late nights, early mornings, weekends, and holidays.'
  }
];
