import { ADDITIONAL_FAQS } from './newFaqs';

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
    answer: 'Arrival depends on your exact location, traffic and technician availability. Call (754) 261-6528 with your address and the service you need so we can discuss availability and an estimated arrival.'
  },
  {
    id: 'car-lockout-help',
    category: 'automotive',
    question: 'What should I do if I am locked out of my car in South Florida?',
    answer: 'Call (754) 261-6528 with the vehicle location and its year, make and model. Say whether the key is inside the vehicle or missing. We can discuss service availability and what you need to have ready.'
  },
  {
    id: 'car-key-programming',
    category: 'automotive',
    question: 'Can you make replacement car keys and program key fobs on-site?',
    answer: 'We can cut and program compatible car keys and fobs at the vehicle. Tell us the year, make, model, and whether you have a working key so we can confirm the service for your vehicle.'
  },
  {
    id: 'rekeying-vs-replacement',
    category: 'residential',
    question: 'What is the difference between lock rekeying and lock replacement?',
    answer: 'Rekeying changes a compatible existing lock to work with a new key. Replacement changes the lock hardware itself and may be the right option if the lock is damaged, worn or unsuitable for the door.'
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
    answer: 'We provide mobile service in parts of Broward County (Fort Lauderdale, Pompano Beach, Hollywood, Pembroke Pines), Palm Beach County (Boca Raton, Delray Beach, West Palm Beach), and Miami-Dade County (Miami, Hialeah, Doral, Miami Beach). Our technicians travel directly to you.'
  },
  {
    id: 'service-24-7',
    category: 'emergency',
    question: 'Is emergency mobile locksmith service available 24/7?',
    answer: 'Yes. Pro Locksmith Tech accepts calls 24 hours a day. Call to confirm a technician is available for your location and the type of help you need.'
  },
  {
    id: 'how-to-request',
    category: 'general',
    question: 'How do I request an immediate mobile locksmith?',
    answer: 'To request immediate mobile service, call our direct 24/7 dispatch phone line at +1 (754) 261-6528 and tell our dispatcher your location and what service you need. Our team can discuss availability and service details during your call.'
  },
  ...ADDITIONAL_FAQS,
];
