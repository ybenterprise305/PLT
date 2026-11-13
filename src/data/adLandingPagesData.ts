export interface AdCampaignConfig {
  slug: string;
  serviceId: string;
  name: string;
  headline: string;
  urgencyBadge: string;
  subheadline: string;
  targetKeywords: string[];
  recommendedAdCopy: {
    headline: string;
    description: string;
  };
  keyBenefits: string[];
  vehicleOrHardwareSupported?: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const AD_CAMPAIGNS: AdCampaignConfig[] = [
  {
    slug: 'car-lockout',
    serviceId: 'automotive-locksmith',
    name: 'Emergency Car Lockouts',
    urgencyBadge: '15-20 Min Emergency Arrival · Non-Destructive',
    headline: 'Locked Out of Your Car? 24/7 Mobile Car Unlock — We Come to You!',
    subheadline: 'Keys locked inside your vehicle or trunk? Don’t pay for an expensive tow truck or risk scratching your paint. Pro Locksmith Tech dispatches fully equipped mobile vans directly to your parking lot, driveway, or highway location in South Florida.',
    targetKeywords: [
      'car lockout South Florida',
      'locked keys in car Fort Lauderdale',
      'emergency car unlock Coral Springs',
      'trunk lockout Miami',
      'mobile auto locksmith Boca Raton',
      '24 hour car unlock near me'
    ],
    recommendedAdCopy: {
      headline: 'Locked Out of Your Car? | 24/7 Mobile Locksmith | Call (754) 261-6528',
      description: 'We come directly to your vehicle in 15-20 mins. Fast, non-destructive car unlocks across Broward, Miami-Dade & Palm Beach. Call now!'
    },
    keyBenefits: [
      '100% Mobile Service — We travel directly to your vehicle curb or parking stall',
      'Non-destructive opening methods protect paint, door frames & weather seals',
      'Trunk unlock specialists for vehicles with rear deadbolts or cabin lockouts',
      'Average arrival in 15–20 minutes with upfront, honest communication'
    ],
    vehicleOrHardwareSupported: [
      'Honda, Toyota, Nissan, Hyundai, Kia',
      'Ford, Chevrolet, GMC, Dodge, Jeep, Ram',
      'BMW, Mercedes-Benz, Audi, Volkswagen, Lexus',
      'Sedans, Coupes, SUVs, Pickup Trucks & Commercial Fleet Vans'
    ],
    faq: [
      {
        question: 'Will unlocking my vehicle scratch the paint or bend my door frame?',
        answer: 'No. We use professional automotive air wedges and coated non-marring long-reach tools and Lishi keyway decoders. We never use crude metal slim jims or wire hangers that rip weatherstripping or damage interior electronics.'
      },
      {
        question: 'Can you unlock cars with keys locked specifically in the trunk?',
        answer: 'Yes! Vehicles with electronic trunk deadlocks or fold-down seat locks require specialized automotive bypass techniques. Our mobile vans carry trunk release decoders for almost all domestic and foreign models.'
      },
      {
        question: 'How fast can a mobile locksmith reach my vehicle in South Florida?',
        answer: 'Our mobile dispatch vans are actively stationed across Broward, Miami-Dade, and Palm Beach corridors. Average response times are typically 15 to 20 minutes depending on traffic.'
      }
    ]
  },
  {
    slug: 'car-key-replacement',
    serviceId: 'key-replacement',
    name: 'Car Key Replacement & Programming',
    urgencyBadge: 'No Dealership Towing Required · Made On-Site',
    headline: 'Lost All Car Keys? Mobile Key Cutting & Programming at Your Location',
    subheadline: 'Skip the dealership lines, multi-day waits, and flatbed towing fees. Pro Locksmith Tech brings computerized key laser-cutting machines and diagnostic immobilizer programming tablets directly to your stranded car, truck, or SUV.',
    targetKeywords: [
      'car key replacement South Florida',
      'lost all car keys no spare',
      'transponder key programming Fort Lauderdale',
      'key fob replacement Coral Springs',
      'mobile car key maker Miami',
      'push to start key replacement'
    ],
    recommendedAdCopy: {
      headline: 'Lost Car Keys Made On-Site | No Towing Needed | Call (754) 261-6528',
      description: 'Computerized laser key cutting & fob programming right at your car. Skip the expensive dealership fees. Fast 24/7 mobile service!'
    },
    keyBenefits: [
      'Zero Towing Needed: We cut and pair keys directly at your vehicle location',
      'High-security laser-cut sidewinder keys made with micrometer precision',
      'Transponder chip & push-to-start smart proximity fobs programmed via OBD',
      'Same-day service with keys generated even when all original keys are lost'
    ],
    vehicleOrHardwareSupported: [
      'Smart proximity key fobs & push-button start remotes',
      'High-security laser cut & sidewinder groove keys',
      'Transponder chip ignition keys & remote head keys',
      'Commercial fleet master keys & work truck key duplication'
    ],
    faq: [
      {
        question: 'Do I need the original key to make a replacement?',
        answer: 'No! We perform key origination. Our technicians decode the internal mechanical lock tumblers and use vehicle diagnostic computers to cut and program brand-new keys from scratch.'
      },
      {
        question: 'What do I need to provide when the mobile locksmith arrives?',
        answer: 'For your security and legal compliance, you will need to present your vehicle registration or title and a matching government-issued photo ID to confirm ownership.'
      }
    ]
  },
  {
    slug: 'house-lockout',
    serviceId: 'emergency-lockout-service',
    name: 'Emergency House Lockouts',
    urgencyBadge: '24/7 Priority Dispatch · Non-Destructive Door Opening',
    headline: 'Locked Out of Your Home? Fast 24/7 Mobile Lockout Service',
    subheadline: 'Front door locked with keys inside? Lock cylinder jammed or key snapped in the deadbolt? Pro Locksmith Tech provides rapid, careful non-destructive home entry across Broward, Miami-Dade, and Palm Beach counties.',
    targetKeywords: [
      'house lockout South Florida',
      'locked out of home Fort Lauderdale',
      'emergency house locksmith Coral Springs',
      'apartment lockout Miami',
      '24 hour residential locksmith Boca Raton',
      'locked keys inside house'
    ],
    recommendedAdCopy: {
      headline: 'Locked Out of Your Home? | 24/7 Fast Mobile Unlock | (754) 261-6528',
      description: 'Fast residential lockout service across South Florida. Safe, non-destructive deadbolt opening. Arriving in 15-20 mins. Call now!'
    },
    keyBenefits: [
      'Non-destructive lock picking keeps your deadbolts and handlesets intact',
      'Fast arrival: usually at your doorstep within 15–20 minutes',
      'Service for single-family homes, townhouses, condos & rental apartments',
      'Capable of immediately rekeying or replacing the lock on-site if keys were lost'
    ],
    vehicleOrHardwareSupported: [
      'Schlage, Kwikset, Yale, Baldwin, Medeco, Mul-T-Lock',
      'Standard deadbolts, mortise locks & decorative entry handlesets',
      'Sliding glass patio door locks & high-impact security doors',
      'Smart electronic keypads & biometric deadbolts'
    ],
    faq: [
      {
        question: 'Can you open high-security residential deadbolts without drilling?',
        answer: 'Yes! Our technicians prioritize precision lock picking and bypass techniques. In over 95% of residential lockouts, we open doors non-destructively without any damage to your door or hardware.'
      },
      {
        question: 'Can you rekey my lock immediately after letting me in?',
        answer: 'Yes. Our mobile vans are fully stocked workshops carrying brass tumbler pins, fresh key blanks, and replacement deadbolts. If your keys are unaccounted for, we can rekey your locks immediately.'
      }
    ]
  },
  {
    slug: 'lock-rekeying',
    serviceId: 'lock-rekeying',
    name: 'Mobile Lock Rekeying',
    urgencyBadge: 'Keep Existing Hardware · Save Money · New Keys',
    headline: 'Need to Rekey Your Locks? Professional Mobile Service at Your Location',
    subheadline: 'Moving into a new home or had tenant turnover at your rental? Rekeying changes the internal pins of your existing locks so previous keys never work again—at a fraction of the cost of buying all-new hardware.',
    targetKeywords: [
      'lock rekeying South Florida',
      'rekey locks Fort Lauderdale',
      'change locks new house Broward',
      'rekey deadbolts Coral Springs',
      'commercial lock rekeying Miami',
      'key alike front back door'
    ],
    recommendedAdCopy: {
      headline: 'Rekey Your Locks On-Site | Save Money On Hardware | (754) 261-6528',
      description: 'Moving into a new home? Make old keys obsolete. We rekey your existing deadbolts right at your door across South Florida. Call now!'
    },
    keyBenefits: [
      'Render old keys obsolete while keeping your stylish handlesets and finishes',
      'Key Multiple Doors Alike: Open front, back, and garage doors with one single key',
      'Significantly more affordable than buying brand new replacement locks',
      'Fast on-site completion with multiple freshly cut brass keys provided'
    ],
    vehicleOrHardwareSupported: [
      'Residential deadbolts, knob locks & handlesets',
      'Commercial mortise cylinders & storefront locks',
      'Master key systems for multi-unit buildings & offices',
      'All major brands: Schlage, Kwikset, Yale, Corbin Russwin, Arrow'
    ],
    faq: [
      {
        question: 'What is the difference between rekeying and replacing locks?',
        answer: 'Rekeying keeps your original exterior lock hardware and simply changes the internal brass tumbler pins to match a new key pattern. Replacing means removing and discarding the entire lockset and buying a new one.'
      },
      {
        question: 'Can all the exterior doors of my home be keyed to work with one key?',
        answer: 'Yes! As long as the locks share a compatible keyway brand (e.g. all Schlage or all Kwikset), we can key them alike so you only need one master key on your keyring.'
      }
    ]
  },
  {
    slug: 'commercial-locksmith',
    serviceId: 'commercial-locksmith',
    name: 'Commercial Locksmith & Access',
    urgencyBadge: 'Grade 1 Commercial Hardware · Code Compliant',
    headline: 'Commercial Locksmith Services — Storefronts, Offices & Exit Devices',
    subheadline: 'Keep your business secure, code-compliant, and operational. Pro Locksmith Tech provides commercial locksmith solutions for storefront retail doors, corporate office suites, warehouses, and medical facilities across South Florida.',
    targetKeywords: [
      'commercial locksmith South Florida',
      'business lock repair Fort Lauderdale',
      'storefront door lock Coral Springs',
      'panic bar installation Miami',
      'commercial master key system',
      'office lockout service'
    ],
    recommendedAdCopy: {
      headline: 'Commercial Locksmith South Florida | Storefronts & Exit Devices | (754) 261-6528',
      description: 'Fast mobile commercial lock repairs, master keys, panic crash bars & rekeying for businesses across Broward, Dade & Palm Beach.'
    },
    keyBenefits: [
      'Storefront Adams Rite mortise lock & latch cylinder replacements',
      'Panic exit crash bars & ADA-compliant heavy-duty leversets',
      'Master key systems designed to streamline management access control',
      'Emergency commercial lockout response for retail and corporate suites'
    ],
    vehicleOrHardwareSupported: [
      'Adams Rite aluminum storefront glass door hardware',
      'Von Duprin, Falcon, Sargent & Yale commercial panic bars',
      'High-security restricted keyways & interchangeable core (IC) cylinders',
      'Grade 1 & Grade 2 heavy-duty commercial mortise and cylindrical locks'
    ],
    faq: [
      {
        question: 'Do you service commercial aluminum storefront glass doors?',
        answer: 'Yes! Adams Rite style mortise locks, hook bolts, and thumbturns on glass retail storefront doors are one of our primary specialties.'
      },
      {
        question: 'Can you install panic exit crash bars that comply with local fire codes?',
        answer: 'Yes. We install and service heavy-duty commercial panic bars and egress devices that comply with Florida life safety codes and ADA requirements.'
      }
    ]
  },
  {
    slug: 'emergency-locksmith',
    serviceId: 'emergency-locksmith-service',
    name: '24/7 Emergency Mobile Locksmith',
    urgencyBadge: 'Immediate 24/7 Dispatch · Arrives Fully Stocked',
    headline: '24/7 Emergency Locksmith Service — We Come Directly to You',
    subheadline: 'Day or night, weekend or holiday, lock emergencies can’t wait. Pro Locksmith Tech provides immediate mobile dispatch for vehicle, home, and commercial lockouts across Broward, Miami-Dade, and Palm Beach counties.',
    targetKeywords: [
      'emergency locksmith South Florida',
      '24/7 locksmith near me',
      'emergency car unlock Broward',
      'late night locksmith Miami',
      'emergency mobile locksmith Boca Raton',
      'fast locksmith dispatch'
    ],
    recommendedAdCopy: {
      headline: '24/7 Emergency Locksmith | We Come To You in 15-20 Mins | (754) 261-6528',
      description: 'Locked out? Immediate dispatch for cars, homes & businesses. Direct line to mobile technician. Honest upfront communication!'
    },
    keyBenefits: [
      'True 24/7 emergency dispatch: 365 days a year, late nights & holidays',
      '15–20 minute average arrival time via major South Florida expressways',
      'Fully equipped mobile workshop vans with precision tools and parts',
      'Arrival time and price confirmed on the phone before we dispatch'
    ],
    vehicleOrHardwareSupported: [
      'All automobile makes and models (domestic, foreign & luxury)',
      'Residential deadbolts, knob locks, mortise locks & smart locks',
      'Commercial storefronts, office doors & exit hardware',
      'Broken keys, snapped blades & jammed lock cylinders'
    ],
    faq: [
      {
        question: 'Are you really available 24 hours a day, 7 days a week?',
        answer: 'Yes! Our mobile dispatch operates around the clock. Whether you are locked out at 2:00 AM on a Saturday or during rush hour on a weekday, our mobile technicians are on call.'
      }
    ]
  },
  {
    slug: 'smart-lock-installation',
    serviceId: 'residential-locksmith',
    name: 'Smart Lock Installation',
    urgencyBadge: 'Keyless Entry Upgrades · For Florida Weather',
    headline: 'Smart Lock Installation & Setup — Keyless Security for Your Home',
    subheadline: 'Upgrade your home to modern keyless convenience. Pro Locksmith Tech supplies and installs electronic keypad deadbolts and smart locks with precision door alignment for smooth, jam-free operation.',
    targetKeywords: [
      'smart lock installation South Florida',
      'keyless entry deadbolt install',
      'electronic keypad lock installation Broward',
      'smart lock installer Miami',
      'retrofitting deadbolt smart lock'
    ],
    recommendedAdCopy: {
      headline: 'Smart Lock Installation South Florida | Keyless Home Entry | (754) 261-6528',
      description: 'Professional installation of smart deadbolts and keyless keypads. Perfect strike plate alignment for Florida weather. Call now!'
    },
    keyBenefits: [
      'Eliminate lock motor binding with precision door and strike plate alignment',
      'Choose from top keypad and smart lock models built for Florida humidity',
      'On-site user code programming and backup physical key fitting',
      'Ideal for families, vacation rentals (Airbnb/VRBO), and guest access'
    ],
    vehicleOrHardwareSupported: [
      'Schlage Encode, Schlage Camelot Keypad',
      'Yale Assure Lock series & touchscreens',
      'Kwikset Halo, Aura & SmartCode keypads',
      'Commercial electronic keypads & standalone access control'
    ],
    faq: [
      {
        question: 'Why should I hire a locksmith instead of installing a smart lock myself?',
        answer: 'Smart deadbolts rely on small electric motors. If a door frame has settled even 1/16th of an inch, the bolt binds against the strike plate, causing motor failure and rapid battery drain. We align and mortise the door frame to guarantee smooth, friction-free operation.'
      }
    ]
  },
  {
    slug: 'ignition-repair',
    serviceId: 'automotive-locksmith',
    name: 'Ignition Switch & Cylinder Repair',
    urgencyBadge: 'Key Won’t Turn or Stuck in Ignition · Mobile Repair',
    headline: 'Car Key Won’t Turn or Stuck in Ignition? Mobile Repair at Your Location',
    subheadline: 'Don’t tow your vehicle to a mechanic or dealer for an ignition issue. Pro Locksmith Tech repairs jammed ignition cylinders, replaces worn ignition tumblers, and extracts broken keys directly at your vehicle.',
    targetKeywords: [
      'ignition repair South Florida',
      'key stuck in ignition Fort Lauderdale',
      'car key wont turn in ignition',
      'mobile ignition replacement Coral Springs',
      'Honda ignition repair Miami'
    ],
    recommendedAdCopy: {
      headline: 'Car Key Won’t Turn in Ignition? | Mobile Ignition Repair | (754) 261-6528',
      description: 'We come to your car and repair stuck or jammed ignitions on-site. Save hundreds on dealership towing fees. Fast 24/7 service!'
    },
    keyBenefits: [
      'Save $200+ on tow truck fees: We repair the ignition right where your car is parked',
      'Common Honda, Ford, Toyota, and Chrysler ignition wafer rebuilds',
      'Keep your original car key: We re-pin the new ignition to match your doors',
      'Safe extraction of broken key fragments lodged inside ignition tumblers'
    ],
    vehicleOrHardwareSupported: [
      'Honda Civic, Accord, CR-V, Pilot (split-wafer ignition lockups)',
      'Ford Focus, Escape, F-150 ignition lock cylinder replacements',
      'Toyota, Chevrolet, Chrysler, Jeep, Dodge ignition assemblies',
      'Push-to-start ignition switch electronic diagnostics'
    ],
    faq: [
      {
        question: 'Will I have to carry two separate keys after you repair my ignition?',
        answer: 'No! Unlike dealerships that often sell you a generic ignition cylinder with a mismatched key, our mobile locksmiths re-key the replacement ignition cylinder to match your original door key.'
      }
    ]
  },
  {
    slug: 'broken-key-extraction',
    serviceId: 'emergency-lockout-service',
    name: 'Broken Key Extraction',
    urgencyBadge: 'Safe Cylinder Extraction · Fresh Key Cut On-Site',
    headline: 'Broken Key Snapped in Lock or Ignition? Mobile Extraction On-Site',
    subheadline: 'Key snapped off inside your deadbolt, car door, or ignition? Don’t try to dig it out with tweezers or glue, which pushes the fragment deeper. Pro Locksmith Tech extracts the broken blade cleanly and cuts you a fresh replacement on the spot.',
    targetKeywords: [
      'broken key extraction South Florida',
      'snapped key in lock Fort Lauderdale',
      'broken key in car ignition Coral Springs',
      'extract key from deadbolt Miami',
      'mobile broken key removal'
    ],
    recommendedAdCopy: {
      headline: 'Broken Key Snapped in Lock? | Fast Mobile Extraction | (754) 261-6528',
      description: 'We extract broken keys from car ignitions, doors, and deadbolts without damaging the lock. Fresh new key cut on-site. Call now!'
    },
    keyBenefits: [
      'Specialized spiral and barbed micro-extractors remove deep fragments safely',
      'Preserves your existing lock cylinder so you don’t have to replace hardware',
      'Computerized code cutting creates a fresh, brand-new key right outside your car or door',
      'Fast 15–20 minute arrival anywhere in South Florida'
    ],
    vehicleOrHardwareSupported: [
      'Automotive car door locks, trunk cylinders & ignition switches',
      'Residential deadbolts, brass handlesets & mortise lock cylinders',
      'Commercial storefront Adams Rite locks & padlocks',
      'Filing cabinets, desk locks & mailbox locks'
    ],
    faq: [
      {
        question: 'Can you cut a new key if my original key broke in half?',
        answer: 'Yes! Once we extract the broken tip, we can decode the tooth bitting from the two halves and cut a brand-new, factory-spec key right on-site in our mobile van.'
      }
    ]
  },
  {
    slug: 'deadbolt-installation',
    serviceId: 'lock-installation',
    name: 'High-Security Deadbolt Installation',
    urgencyBadge: 'Fresh Door Boring · Reinforced Strike Plates',
    headline: 'High-Security Deadbolt Installation & Fresh Door Prep in South Florida',
    subheadline: 'Upgrade your home or commercial entry defense. Pro Locksmith Tech provides precision hole boring, deadbolt mortising, and heavy-gauge reinforced strike plate installation anchored directly into structural wall studs.',
    targetKeywords: [
      'deadbolt installation South Florida',
      'fresh door lock installation Fort Lauderdale',
      'high security deadbolt Coral Springs',
      'install second lock front door Miami',
      'door reinforcement strike plate'
    ],
    recommendedAdCopy: {
      headline: 'Deadbolt Installation & Door Prep | High Security Locks | (754) 261-6528',
      description: 'Fresh hole boring, heavy-duty deadbolts, and kick-in defense strike plates for Florida homes and businesses. Mobile service!'
    },
    keyBenefits: [
      'Heavy-duty alloy clamp-on door boring fixtures ensure factory-exact hole alignment',
      '3-inch structural anchor screws anchor strike plates deep into solid wall framing',
      'Anti-kick and anti-saw hardened steel bolt pins resist physical intruder attacks',
      'Multiple designer architectural finishes to match your existing door trim'
    ],
    vehicleOrHardwareSupported: [
      'Solid wood, fiberglass, steel & composite exterior doors',
      'Grade 1 & Grade 2 deadbolts (Schlage, Kwikset, Yale, Medeco)',
      'Double cylinder deadbolts for doors with adjacent decorative glass panels',
      'Extended heavy-gauge security strike plates and door jamb reinforcers'
    ],
    faq: [
      {
        question: 'Can you install a deadbolt on a door that currently only has a handle latch?',
        answer: 'Yes! That is called "fresh door preparation." We use precision clamp-on boring jigs to cut the exact 2-1/8 inch cross bore and 1 inch edge bore holes without chipping your door finish.'
      }
    ]
  },
  {
    slug: 'lock-change',
    serviceId: 'lock-replacement',
    name: 'Lock Replacement & Installation',
    urgencyBadge: 'Upgrade Security · New Hardware Installed On-Site',
    headline: 'Need to Change Your Locks? Professional Mobile Lock Replacement',
    subheadline: 'Damaged locks, worn cylinders, or moving into a new property? Pro Locksmith Tech travels directly to your home or business with fresh deadbolts, keypads, and handlesets ready for immediate installation across South Florida.',
    targetKeywords: [
      'lock change South Florida',
      'change door locks Fort Lauderdale',
      'replace deadbolt locks Boca Raton',
      'lock replacement Miami',
      'install new front door locks'
    ],
    recommendedAdCopy: {
      headline: 'Change Your Locks Today | Mobile Lock Replacement | (754) 261-6528',
      description: 'Upgrade your home or business security. We install brand-new deadbolts and handlesets on-site across South Florida. Call now!'
    },
    keyBenefits: [
      'Top-tier Grade 1 & Grade 2 deadbolts and handlesets stocked inside our mobile vans',
      'Precision door prep and mortising to ensure smooth, jam-free latching',
      'Multiple keys provided with option to key all exterior doors to one single key',
      'Upfront pricing communication before work begins with no hidden dispatch charges'
    ],
    vehicleOrHardwareSupported: [
      'Schlage, Kwikset, Yale, Baldwin, Medeco, Mul-T-Lock',
      'Heavy-duty residential deadbolts & decorative handlesets',
      'Commercial storefront mortise cylinders & Adams Rite locks',
      'Electronic keypads, smart deadbolts & keyless entry systems'
    ],
    faq: [
      {
        question: 'Should I change my locks or just rekey them?',
        answer: 'If your existing lock hardware is physically damaged, tarnished by Florida coastal air, or mechanically loose, a full lock change provides fresh durability and enhanced security. If the hardware is in great shape, rekeying is a cost-effective alternative.'
      },
      {
        question: 'Do you carry replacement locks in your mobile vans?',
        answer: 'Yes. Our mobile workshop vans carry a wide inventory of residential and commercial deadbolts, entry knobs, and levers in satin nickel, matte black, and polished brass finishes.'
      }
    ]
  },
  {
    slug: 'safe-lockout',
    serviceId: 'commercial-locksmith',
    name: 'Safe Lockouts & Opening',
    urgencyBadge: 'Dial & Digital Keypad Access · Mobile Service',
    headline: 'Locked Out of Your Safe? Mobile Safe Lockout Assistance in South Florida',
    subheadline: 'Forgotten safe combination, dead electronic keypad, or malfunctioning boltwork? Pro Locksmith Tech provides professional safe opening assistance for home and commercial document and security safes.',
    targetKeywords: [
      'safe lockout South Florida',
      'safe opening Fort Lauderdale',
      'locked out of safe Miami',
      'gun safe opening Broward',
      'commercial safe locksmith'
    ],
    recommendedAdCopy: {
      headline: 'Locked Out of Your Safe? | Mobile Safe Locksmith | (754) 261-6528',
      description: 'Forgotten combination or malfunctioning digital keypad? We assist with residential & commercial safe lockouts across South Florida.'
    },
    keyBenefits: [
      'Assistance for electronic digital keypads, mechanical dial locks, and key locks',
      'Careful evaluation to determine the most effective, least-invasive opening technique',
      'Mobile service performed on-site at your residence or commercial facility',
      'Strict identity and ownership verification required for security compliance'
    ],
    vehicleOrHardwareSupported: [
      'SentrySafe, Honeywell, First Alert home document safes',
      'Liberty, Winchester, Cannon, Browning gun safes',
      'Commercial drop safes, cash registers & office security cabinets',
      'Electronic digital solenoid & mechanical combination dials'
    ],
    faq: [
      {
        question: 'What do I need to prepare before requesting a safe lockout service?',
        answer: 'You will need to provide proof of ownership and valid government-issued photo ID. Having the safe manufacturer brand, approximate model number, and lock type (key, dial, or digital keypad) helps our technicians prepare the correct equipment.'
      },
      {
        question: 'Can you open a safe with a dead electronic keypad battery?',
        answer: 'Yes. Often digital safes have external battery jumper terminals or a hidden mechanical bypass lock behind the faceplate. If those fail, we use specialized safe diagnostic techniques.'
      }
    ]
  },
  {
    slug: 'storage-unit-lockout',
    serviceId: 'commercial-locksmith',
    name: 'Storage Unit Lockouts',
    urgencyBadge: 'Lost Storage Keys · Safe Padlock Removal On-Site',
    headline: 'Locked Out of Your Storage Unit? Mobile Padlock Removal & Replacement',
    subheadline: 'Lost your storage unit padlock key or has your combination dial seized? Pro Locksmith Tech travels directly to your self-storage facility to open your unit latch cleanly and supply a brand-new high-security padlock.',
    targetKeywords: [
      'storage unit lockout South Florida',
      'storage lock removal Fort Lauderdale',
      'cut storage padlock Miami',
      'lost storage unit key Broward',
      'Public Storage lock removal'
    ],
    recommendedAdCopy: {
      headline: 'Locked Out of Your Storage Unit? | Mobile Locksmith | (754) 261-6528',
      description: 'Lost keys or jammed disc padlock? We meet you at your storage facility across South Florida. Fast dispatch & new lock provided.'
    },
    keyBenefits: [
      'Direct mobile dispatch to your self-storage facility anywhere in South Florida',
      'Specialized removal of hardened steel disc padlocks and cylinder latches',
      'Door latch and track protected from damage during lock removal',
      'Fresh replacement disc padlock or cylinder lock supplied immediately on-site'
    ],
    vehicleOrHardwareSupported: [
      'Stainless steel round disc padlocks (Master Lock, Abus, Chateau)',
      'Storage facility internal cylinder slide latch locks',
      'Heavy-duty brass padlocks, laminated padlocks & combination dials',
      'Public Storage, Extra Space, CubeSmart & Life Storage facility units'
    ],
    faq: [
      {
        question: 'Will self-storage management permit a locksmith to open my unit?',
        answer: 'Yes, provided you are the registered tenant on the lease agreement. Most storage facilities require you to check in at the front office with your government photo ID and storage contract before we access the unit.'
      },
      {
        question: 'Do you carry replacement padlocks so I can lock my unit immediately?',
        answer: 'Yes. Our technicians carry heavy-duty stainless steel disc padlocks and cylinder locks that meet all storage facility standards, complete with two fresh keys.'
      }
    ]
  },
  {
    slug: 'car-key-fob-programming',
    serviceId: 'automotive-locksmith',
    name: 'Car Key Fob Programming',
    urgencyBadge: 'OBD-II Diagnostic Pairing · Push-to-Start Smart Keys',
    headline: 'Car Key Fob Not Working? Mobile Programming at Your Location',
    subheadline: 'Unresponsive keyless remote, unprogrammed smart proximity fob, or replacement fob needing calibration? Pro Locksmith Tech brings dealer-level OBD diagnostic programmers directly to your vehicle across South Florida.',
    targetKeywords: [
      'car key fob programming South Florida',
      'program push to start key Fort Lauderdale',
      'mobile key fob programmer Miami',
      'smart key programming Boca Raton',
      'transponder chip pairing'
    ],
    recommendedAdCopy: {
      headline: 'Car Key Fob Programming | Mobile Service at Your Car | (754) 261-6528',
      description: 'Expert keyless remote & push-to-start smart fob programming right at your vehicle in South Florida. Skip the dealership wait!'
    },
    keyBenefits: [
      'Direct connection via vehicle OBD-II diagnostic port for factory-exact pairing',
      'Compatible with smart proximity remotes, remote head keys, and transponder chips',
      'On-site key blade cutting included for emergency door access inserts',
      'Clear upfront estimate based on your specific vehicle year, make, and model'
    ],
    vehicleOrHardwareSupported: [
      'Smart push-button proximity fobs (PEPS)',
      'Flip key remotes and integrated remote head keys',
      'Transponder immobilizer chip keys',
      'Domestic, Asian, and European passenger vehicles and light trucks'
    ],
    faq: [
      {
        question: 'What information should I have ready when calling about a key fob?',
        answer: 'Please provide the exact year, make, and model of your vehicle, whether it starts with a physical turn-key or a push-button start, and whether you have any existing working fobs.'
      },
      {
        question: 'Can you program a key fob I already purchased online?',
        answer: 'We stock pre-tested, high-quality compatible fobs. If you purchased your own fob, we can attempt programming, but functionality depends on whether the internal circuit frequency and transponder chip match your vehicle specifications.'
      }
    ]
  },
  {
    slug: 'lost-car-keys',
    serviceId: 'key-replacement',
    name: 'Lost Car Key Replacement',
    urgencyBadge: 'No Spare Key Needed · Key Origination On-Site',
    headline: 'Lost All Your Car Keys? We Generate Brand-New Keys from Scratch',
    subheadline: 'Lost your only car key with zero spares? Do not pay hundreds for flatbed dealership towing. Pro Locksmith Tech decodes your vehicle locks and cuts/programs brand-new keys right at your stranded location in South Florida.',
    targetKeywords: [
      'lost all car keys South Florida',
      'no spare car key Fort Lauderdale',
      'make car key without original Miami',
      'lost keys to car Boca Raton',
      'mobile replacement car key maker'
    ],
    recommendedAdCopy: {
      headline: 'Lost All Car Keys? | Brand-New Keys Made On-Site | (754) 261-6528',
      description: 'No spare? No towing needed! We decode your lock and program new keys directly at your vehicle. 24/7 mobile service across South Florida.'
    },
    keyBenefits: [
      'Key Origination: We create new functional keys even when all originals are missing',
      'Precision mechanical lock decoding using specialized automotive diagnostic tools',
      'Computerized laser key cutting and chip programming completed on-site',
      'Eliminates expensive tow truck costs and days of dealership scheduling delays'
    ],
    vehicleOrHardwareSupported: [
      'Laser-cut sidewinder high-security keys',
      'Smart push-button start proximity key fobs',
      'Transponder chip keys (domestic and foreign makes)',
      'Commercial fleet vehicles, vans, and pickup trucks'
    ],
    faq: [
      {
        question: 'How does a locksmith make a car key without the original?',
        answer: 'Our mobile technicians use specialized optical and mechanical decoders to read the depth of the lock tumblers inside your vehicle door or ignition. The key cuts are then calculated and cut to factory specifications on a computerized laser key cutter in our van.'
      },
      {
        question: 'What documents are required when you replace lost car keys?',
        answer: 'To protect vehicle owners, you must provide proof of vehicle ownership (title or registration) and a matching government-issued photo ID before work begins.'
      }
    ]
  }
];

export function getAdCampaignBySlug(slug: string): AdCampaignConfig | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/\/+$/, '').trim();
  
  // Exact match
  const exact = AD_CAMPAIGNS.find(c => c.slug === normalized);
  if (exact) return exact;

  // Plural/singular normalization
  const singular = normalized.endsWith('s') ? normalized.slice(0, -1) : normalized;
  const plural = normalized.endsWith('s') ? normalized : normalized + 's';

  const variant = AD_CAMPAIGNS.find(c => 
    c.slug === singular || 
    c.slug === plural ||
    c.serviceId === normalized ||
    c.serviceId === singular
  );
  if (variant) return variant;

  return undefined;
}
