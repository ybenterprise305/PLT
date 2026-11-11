import { LocksmithService } from '../types';

export const SERVICES_DATA: LocksmithService[] = [
  {
    id: 'emergency-lockout-service',
    slug: 'emergency-lockout-service',
    name: 'Emergency Lockout Service',
    category: 'emergency',
    badge: '24/7 Priority',
    iconName: 'KeyRound',
    shortDescription: 'Immediate assistance for vehicle, residential, and commercial lockouts throughout South Florida.',
    fullDescription: 'Locked out of your home, car, or office? Pro Locksmith Tech deploys mobile technicians equipped with non-destructive entry tools to safely regain access to your property. We handle locked keys in cars, jammed house deadbolts, malfunctioning digital commercial locks, and broken keys in locks with precision and care to prevent damage to your door frames, weatherstripping, or lock cylinders.',
    features: [
      'Automotive door & trunk unlocks',
      'Residential deadbolt & knob entry',
      'Commercial storefront & office unlocks',
      'Non-destructive lock picking methods',
      'Broken key extraction on-site'
    ],
    commonSituations: [
      'Keys locked inside vehicle or trunk at shopping plazas, gas stations, or work sites',
      'Front door latch engaged with keys forgotten inside the home',
      'Office doors auto-locked after business hours without access cards',
      'Key snapped inside lock cylinder during turn attempt'
    ],
    techniquesAndTools: [
      'Specialized tension wrenches and custom pick sets',
      'Automotive air wedges and long-reach bypass tools',
      'Spiral broken key extractors and lubrication solvents'
    ]
  },
  {
    id: 'residential-locksmith',
    slug: 'residential-locksmith',
    name: 'Residential Locksmith',
    category: 'residential',
    badge: 'Home Security',
    iconName: 'Home',
    shortDescription: 'Complete residential lock services including rekeying, high-security deadbolts, and smart locks.',
    fullDescription: 'Your home security is our priority. Pro Locksmith Tech provides dedicated residential locksmith services for single-family houses, townhomes, condominiums, and rental apartments across South Florida. From rekeying existing locks after moving in to installing heavy-duty deadbolts and electronic keypad locks, our mobile vans carry top-brand hardware tailored for Florida’s coastal climate and high humidity.',
    features: [
      'Deadbolt and handle set installation',
      'Complete home rekeying services',
      'Smart lock & electronic keypad setups',
      'Sliding glass patio door locks & secondary security pins',
      'Mailbox lock replacement and key duplication'
    ],
    commonSituations: [
      'Moving into a new home or rental property and needing new keys',
      'Upgrading weathered exterior door hardware exposed to coastal salt air',
      'Converting traditional locks to keypad entry for family or cleaning staff',
      'Fixing loose handles or misaligned strike plates causing doors to stick'
    ],
    techniquesAndTools: [
      'High-grade brass replacement cylinders and pins',
      'Precision door prep bore hole jigs and mortising tools',
      'Reinforced strike plate anchor screws for kick-in defense'
    ]
  },
  {
    id: 'commercial-locksmith',
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    category: 'commercial',
    badge: 'Business Protection',
    iconName: 'Building2',
    shortDescription: 'Comprehensive lock and physical security services for South Florida businesses, retail, and offices.',
    fullDescription: 'Businesses require dependable, commercial-grade hardware designed for high-traffic access. Pro Locksmith Tech works with retail storefronts, corporate offices, warehouses, medical clinics, and management companies. We install, repair, and maintain commercial panic crash bars, Adams Rite storefront mortise locks, master key systems, and electronic access hardware that complies with local life safety codes.',
    features: [
      'Commercial panic exit hardware & push bars',
      'Storefront glass door mortise cylinders & latch locks',
      'Master key system design and implementation',
      'High-security restricted keyway cylinders',
      'File cabinet, desk, and server room lock servicing'
    ],
    commonSituations: [
      'Employee turnover requiring immediate cylinder rekeying or master key updates',
      'Storefront entry door latch failing to latch securely at close of business',
      'Emergency exit crash bar jammed or failing building inspection requirements',
      'Restricting unauthorized access to inventory or sensitive company records'
    ],
    techniquesAndTools: [
      'ANSI Grade 1 and Grade 2 heavy-duty commercial hardware',
      'Storefront mortise faceplates and cylinder cams',
      'Key code cutting machines for structured master key hierarchies'
    ]
  },
  {
    id: 'automotive-locksmith',
    slug: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    category: 'automotive',
    badge: 'Mobile Car Key Care',
    iconName: 'Car',
    shortDescription: 'Mobile car lockout, car key replacement, transponder chip programming, and ignition repair.',
    fullDescription: 'When vehicle key issues leave you stranded in a parking lot, driveway, or highway rest stop, Pro Locksmith Tech brings the shop directly to your car. We service domestic, foreign, and commercial vehicles. Our mobile units carry high-precision computerized key cutting machines and onboard diagnostic (OBD) key programming tablets for transponder chips, remote key fobs, and push-to-start smart proximity keys.',
    features: [
      'Emergency car door and trunk opening without scratch or damage',
      'Transponder key cutting and chip programming',
      'Key fob replacement and smart push-to-start remotes',
      'Laser-cut high security "sidewinder" car keys',
      'Ignition cylinder repair, unjamming, and replacement'
    ],
    commonSituations: [
      'Only car key misplaced or lost at the beach, shopping mall, or event',
      'Ignition key refusing to turn in the cylinder lock mechanism',
      'Key fob battery died or internal transponder chip stopped syncing',
      'Broken key blade lodged inside the door lock cylinder'
    ],
    techniquesAndTools: [
      'Lishi precision picking and optical decoding tools for automotive keyways',
      'Computerized CNC automated key cutting calibrators',
      'OBD-II diagnostic key programming tablets for modern immobilizer systems'
    ]
  },
  {
    id: 'lock-repair',
    slug: 'lock-repair',
    name: 'Lock Repair',
    category: 'residential',
    badge: 'Hardware Restoration',
    iconName: 'Wrench',
    shortDescription: 'Troubleshooting and restoring jammed, stiff, misaligned, or weathered lock mechanisms.',
    fullDescription: 'A sticking or hard-to-turn key is often an early sign that your lock cylinder or internal latch mechanism is failing. Rather than immediately replacing expensive door hardware, Pro Locksmith Tech inspects the lock internal components. We disassemble, clean, lubricate, re-align, and replace worn pins, springs, and latches to restore smooth, secure operation.',
    features: [
      'Diagnosing jammed cylinders and stiff tumblers',
      'Aligning latch bolts with shifted strike plates',
      'Replacing broken return springs, tailpieces, and cams',
      'Corrosion and salt-air oxidation remediation',
      'Lubrication with specialized dry graphite/silicone lock lubricants'
    ],
    commonSituations: [
      'Having to push, pull, or lift the door forcibly to turn the deadbolt',
      'Key getting stuck inside the cylinder when attempting to pull it out',
      'Loose cylinder spinning freely in the door without retracting the bolt',
      'Severe weather wear making the key difficult to insert'
    ],
    techniquesAndTools: [
      'Cylinder plug followers and pin tweezers for internal tumbler rebuilds',
      'Door gap shims and strike plate adjusters',
      'Locksmith-grade non-sticky lubricant sprays'
    ]
  },
  {
    id: 'lock-replacement',
    slug: 'lock-replacement',
    name: 'Lock Replacement',
    category: 'residential',
    badge: 'Security Upgrade',
    iconName: 'RotateCw',
    shortDescription: 'Replacing outdated, damaged, or compromised locks with high-durability modern locking hardware.',
    fullDescription: 'When locks are worn beyond reliable repair, or when you are upgrading the physical security posture of your property, Pro Locksmith Tech provides complete lock replacement. We carry an extensive selection of residential and commercial locks in multiple architectural finishes (satin nickel, oil-rubbed bronze, matte black, polished brass) to match your door hardware aesthetics while enhancing safety.',
    features: [
      'Replacing damaged, broken, or tampered locks',
      'Upgrading standard builders-grade locks to Grade 1 or Grade 2 security',
      'Matching existing home finishes and door preparations',
      'Replacing mortise locks, rim cylinders, and deadbolts',
      'Reinforced exterior security lock replacements'
    ],
    commonSituations: [
      'Previous break-in attempt damaged lock housing or door face',
      'Obsolete hardware parts no longer available for repair',
      'Renovating interior/exterior doors with updated style & finish',
      'Upgrading security after moving into an older property'
    ],
    techniquesAndTools: [
      'Backset gauges (2-3/8" vs 2-3/4") and hole saw drill guides',
      'Heavy-duty hardened steel latch bolts resistant to sawing',
      'Anti-pick and anti-bump spool pin cylinders'
    ]
  },
  {
    id: 'lock-rekeying',
    slug: 'lock-rekeying',
    name: 'Lock Rekeying',
    category: 'residential',
    badge: 'Cost-Effective Solution',
    iconName: 'ShieldCheck',
    shortDescription: 'Change internal lock pins so old keys no longer work, saving you the cost of replacing full hardware.',
    fullDescription: 'Lock rekeying is the smart, cost-effective way to secure your premises without the expense of purchasing brand-new locksets. Our mobile locksmiths remove the existing cylinder, replace the internal bottom pins to match a new cut key code, and ensure all previous keys are instantly rendered useless. We can also "key alike" multiple locks on your property so one single key opens your front, back, garage, and side doors.',
    features: [
      'Rendering all old, lost, or unaccounted-for keys obsolete',
      'Keying multiple doors alike to operate with a single master key',
      'Preserves original decorative handlesets and lock exteriors',
      'Immediate delivery of new freshly cut brass keys',
      'Affordable alternative to full hardware replacement'
    ],
    commonSituations: [
      'Purchasing a new residence where contractors or prior owners had keys',
      'Ending a tenant lease agreement on a rental or commercial unit',
      'Misplaced key ring with house address or identifying tags',
      'Frustration with carrying 5 different keys for separate entry doors'
    ],
    techniquesAndTools: [
      'Precision universal pin kits (Schlage, Kwikset, Yale, Corbin, Arrow)',
      'Plug followers, cylinder c-clip removers, and pin gauges',
      'On-board key duplicator for exact factory-spec biting'
    ]
  },
  {
    id: 'key-duplication',
    slug: 'key-duplication',
    name: 'Key Duplication',
    category: 'residential',
    badge: 'Precision Cutting',
    iconName: 'Copy',
    shortDescription: 'Accurate mobile key cutting for residential, commercial, automotive, and padlock keys.',
    fullDescription: 'Hardware store automated kiosks often produce imprecise duplicate keys that catch, stick, or refuse to turn inside lock cylinders. Pro Locksmith Tech uses calibrated commercial key duplication machinery operated by skilled technicians right outside your location. We duplicate standard brass house keys, high-security laser vehicle keys, mailbox keys, and commercial office keys with micrometer accuracy.',
    features: [
      'High-precision brass key copies cut right at your doorstep',
      'Car keys, chip keys, and high-security sidewinder keys',
      'Commercial office, padlocks, and storage unit keys',
      'Deburring and polishing for smooth, effortless cylinder entry',
      'Batch duplication for property managers and landlords'
    ],
    commonSituations: [
      'Creating spare keys for family members, neighbors, or house sitters',
      'Providing duplicate keys for new employees at commercial facilities',
      'Making backup vehicle keys before the original gets worn or lost',
      'Replacing bent or hairline-cracked keys before they snap'
    ],
    techniquesAndTools: [
      'High-speed rotary carbide cutter duplication machines',
      'Rotary wire deburring wheels to smooth fresh cut teeth',
      'Micro-calipers to verify cut depth against factory bitting charts'
    ]
  },
  {
    id: 'key-replacement',
    slug: 'key-replacement',
    name: 'Key Replacement',
    category: 'automotive',
    badge: 'Origination & Creation',
    iconName: 'FileKey',
    shortDescription: 'Cutting and generating brand-new keys from scratch when all original keys are completely lost.',
    fullDescription: 'If you have lost all original keys to your car, home, or commercial padlock, you do not need to tow your car to a dealership or demolish your front door. Pro Locksmith Tech performs key origination. We decode the internal wafers or pins of the lock cylinder to determine the exact factory cuts, cut a fresh key on-site, and program electronic chips or remotes directly on the spot.',
    features: [
      'Key generation from scratch with zero working original keys present',
      'Automotive key origination by code or lock cylinder decoding',
      'Transponder chip programming to match vehicle immobilizer',
      'Smart fob replacement and proximity remote sync',
      'Residential and commercial key generation from lock cylinder inspection'
    ],
    commonSituations: [
      'All vehicle keys lost while swimming, traveling, or moving',
      'Inherited storage unit, vehicle, or safe with missing keys',
      'Old file cabinet or desk key missing with sensitive items locked inside',
      'Stolen purse containing keys and identification'
    ],
    techniquesAndTools: [
      'Digital code cutting equipment and automotive key bitting decoders',
      'Advanced OBD-II transponder programming computers',
      'Impressioning files for hand-generating brass keys on legacy locksets'
    ]
  },
  {
    id: 'lock-installation',
    slug: 'lock-installation',
    name: 'Lock Installation',
    category: 'residential',
    badge: 'Fresh Door Prep',
    iconName: 'PlusCircle',
    shortDescription: 'Fresh lock installations on wooden, metal, fiberglass, and composite doors across South Florida.',
    fullDescription: 'Need a deadbolt added to a door that only has a handle latch? Installing security locks on a door without pre-drilled holes requires exact precision. If holes are misaligned by even 1/16th of an inch, the lock will bind, wear out rapidly, and compromise door strength. Pro Locksmith Tech uses professional door boring jigs and mortise chiseling tools to ensure immaculate alignment and factory-tight security.',
    features: [
      'Fresh hole boring and deadbolt installation on non-prepped doors',
      'Mortise lock installation for classic & custom wood doors',
      'Smart lock hardware retrofitting and setup',
      'Double cylinder deadbolt installation for glass-pane doors',
      'Reinforced strike plates anchored deep into structural wall studs'
    ],
    commonSituations: [
      'Adding a secondary deadbolt for enhanced home intruder defense',
      'Installing keypad locks on garage entry or side utility doors',
      'Hanging new custom solid-wood or fiberglass exterior doors',
      'Securing internal home offices or rental storage rooms'
    ],
    techniquesAndTools: [
      'Heavy-duty alloy clamp-on door boring fixtures and carbide hole cutters',
      'Corner chisels for recessed faceplates and strike recesses',
      '3-inch hardened steel structural framing anchor screws'
    ]
  },
  {
    id: 'security-hardware',
    slug: 'security-hardware',
    name: 'Security Hardware',
    category: 'commercial',
    badge: 'Physical Fortification',
    iconName: 'ShieldAlert',
    shortDescription: 'Heavy-duty strike plates, door reinforcers, panic exit devices, and access control accessories.',
    fullDescription: 'Physical security starts where the lock meets the door frame. Many door kick-in burglaries bypass the lock cylinder by splitting the soft wood jamb. Pro Locksmith Tech supplies and installs structural security hardware including wrap-around door reinforcers, extended 4-screw heavy gauge strike plates, continuous hinges, hydraulic door closers, and latch guards that prevent pry bar and credit card slipping attacks.',
    features: [
      'Heavy-gauge strike plates with 3-inch wall stud screws',
      'Door jamb reinforcement kits preventing split frames',
      'Wrap-around steel door channel reinforcers for cracked doors',
      'Commercial grade hydraulic door closers with adjustable sweep speed',
      'Latch shields and anti-pry guard plates for exterior outswing doors'
    ],
    commonSituations: [
      'Strengthening vulnerable exterior rear doors on homes and shops',
      'Repairing cracked wood around a lock after a forced entry attempt',
      'Upgrading commercial exit doors to self-close and latch reliably',
      'Preventing outswing door latch manipulation by unwanted intruders'
    ],
    techniquesAndTools: [
      'Heavy-duty 14-gauge cold rolled steel latch protectors',
      'Structural screw drivers and impact setting tools',
      'ANSI Grade 1 hydraulic door closer pressure calibration gauges'
    ]
  },
  {
    id: 'emergency-locksmith-service',
    slug: 'emergency-locksmith-service',
    name: 'Emergency Locksmith Service',
    category: 'emergency',
    badge: '24/7 Mobile Dispatch',
    iconName: 'Flame',
    shortDescription: 'Around-the-clock rapid response across South Florida for urgent lock and key emergencies.',
    fullDescription: 'Emergencies do not check the clock. Whether you are stranded outside your car at 2 AM in Miami Beach, locked out of your apartment in Fort Lauderdale on a holiday, or dealing with an unsecured storefront door in West Palm Beach on a weekend, Pro Locksmith Tech operates a dedicated 24/7 mobile fleet ready to mobilize across South Florida with fully stocked locksmith vans.',
    features: [
      'True 24/7 mobile coverage — nights, weekends, and holidays',
      'Rapid emergency dispatch routing across South Florida corridors',
      'Clear, honest upfront pricing communication before dispatch',
      'Fully equipped mobile workshops with power, cutting, and programming rigs',
      'Experienced emergency technicians with focus on non-destructive entry'
    ],
    commonSituations: [
      'Late-night lockouts after social events or flights landing at FLL / MIA / PBI',
      'Child or pet accidentally locked inside vehicle or bedroom',
      'Post-break-in emergency lock replacement to secure residence before morning',
      'Lost keys during severe Florida storms or late evening shifts'
    ],
    techniquesAndTools: [
      'GPS-coordinated mobile service units routed via major Florida highways',
      'Complete field inventory of replacement deadbolts, knobs, and cylinders',
      'Illuminated mobile key cutting and electronic programming stations'
    ]
  }
];
