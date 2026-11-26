import { carKeyProgImg, keyMachineImg, locksmithVanImg, techRekeyingImg } from '../assets/images';
import type { BlogPost } from './blogData';

export const NEW_BLOG_POSTS: BlogPost[] = [
  {
    id: 'garage-locksmith',
    slug: 'mobile-locksmith-parking-garage-condo-south-florida',
    title: 'Calling a Mobile Locksmith to a Parking Garage',
    excerpt: 'What to share when your vehicle is inside a condo, hotel or public parking garage in South Florida.',
    category: 'Emergency',
    date: 'November 26, 2026',
    readTime: '3 min read',
    author: 'Pro Locksmith Tech',
    image: locksmithVanImg,
    metaDescription: 'Need a mobile locksmith in a South Florida parking garage? Tell dispatch the entrance, level, vehicle location and access rules before arranging service.',
    keywords: ['mobile locksmith parking garage', 'condo car lockout', 'South Florida roadside locksmith'],
    quickAnswer: 'A mobile locksmith may be able to meet you in a parking garage. Call with the garage name, entrance, level and parking space. Mention height limits, valet procedures or controlled access so dispatch can confirm whether the technician can reach you.',
    content: [
      { heading: 'Identify the entrance and the vehicle location', paragraphs: [
        'A tower address can point to the lobby while its garage entrance is on a different street. Give the street or driveway used by vehicles and include the posted garage name. If the garage has several levels, report the level, aisle and space number.',
        'In places such as Brickell, downtown Fort Lauderdale and downtown Boca Raton, a nearby landmark can help orient dispatch. Use it alongside the precise parking location. If you are on the phone away from your vehicle, say where you can meet.'
      ] },
      { heading: 'Check visitor rules with building staff', paragraphs: [
        'Ask whether a service provider must sign in, use a separate entrance or park outside. If valet holds or moves the vehicle, ask staff where it is and who can authorize access. Check posted clearance and tell dispatch if ordinary vehicle access is limited.',
        'Keep your phone available. If the garage has poor reception, agree on a meeting point with dispatch before returning inside.'
      ] },
      { heading: 'Explain the key problem before dispatch', paragraphs: [
        'Tell us whether the key is locked inside, missing, damaged or unresponsive. Share the year, make and model. Keep identification and proof that you are authorized to access the vehicle available. For a rented vehicle, check the rental company’s instructions before arranging work.'
      ] },
    ],
    relatedServices: [{ name: 'Vehicle lockouts and keys', slug: 'automotive-locksmith' }],
    relatedAreas: [{ name: 'Brickell', path: '/service-areas/miami/brickell' }, { name: 'Downtown Boca Raton', path: '/service-areas/boca-raton/downtown-boca-raton' }],
  },
  {
    id: 'replace-spare-fob',
    slug: 'spare-car-key-vs-all-keys-lost',
    title: 'Making a Spare Car Key vs. Replacing All Lost Keys',
    excerpt: 'What changes when you still have a working key, and what to gather for mobile key cutting or programming.',
    category: 'Automotive',
    date: 'November 26, 2026',
    readTime: '3 min read',
    author: 'Pro Locksmith Tech',
    image: carKeyProgImg,
    metaDescription: 'Compare getting a spare car key with replacing your only lost key. Learn what vehicle details and working fobs to have ready for a mobile locksmith.',
    keywords: ['spare car key', 'all car keys lost', 'mobile car key programming Broward'],
    quickAnswer: 'If you have a working car key, keep it and any other fobs available for the appointment. If every key is missing, tell the locksmith when you call. The year, make, model and starting system determine what kind of key can be supplied and programmed.',
    content: [
      { heading: 'Describe the key and the way the car starts', paragraphs: [
        'Tell us whether the car starts with a metal key, a fob and push button, or another system. A remote may unlock the doors while a separate chip or proximity signal allows the engine to start. A cut blade and a programmed fob solve different parts of the job.',
        'For a spare, check which functions work on the key you still have. Bring any other keys you want to keep using and tell the technician about them before programming begins.'
      ] },
      { heading: 'Explain when every working key is missing', paragraphs: [
        'Some vehicles can get a replacement on site without an original key. Compatibility depends on the specific vehicle and system. Give the exact model year, current vehicle location and whether you have an aftermarket remote or ignition.',
        'Have identification and proof you are authorized to access the vehicle ready. If a key was stolen, ask whether the vehicle supports removing that key from its active electronic key list.'
      ] },
      { heading: 'Check the functions you need before the visit ends', paragraphs: [
        'Ask which functions the replacement supports. Depending on the vehicle and the key, this may include starting, remote lock and unlock, trunk release, or an emergency mechanical blade. Try the functions you requested and confirm that any original keys you kept still work as expected.'
      ] },
    ],
    relatedServices: [{ name: 'Car key replacement', slug: 'key-replacement' }, { name: 'Key duplication', slug: 'key-duplication' }],
    relatedAreas: [{ name: 'Coral Springs', path: '/service-areas/coral-springs' }, { name: 'Boca Raton', path: '/service-areas/boca-raton' }],
  },
  {
    id: 'storefront-door-trouble',
    slug: 'storefront-door-will-not-latch-or-lock',
    title: 'What to Check When a Storefront Door Will Not Lock',
    excerpt: 'Help a commercial locksmith identify whether a door, latch, closer or cylinder needs attention.',
    category: 'Commercial',
    date: 'November 26, 2026',
    readTime: '3 min read',
    author: 'Pro Locksmith Tech',
    image: techRekeyingImg,
    metaDescription: 'Storefront door will not latch or lock? Learn what to report about the door, key, closer and building access when calling a commercial locksmith.',
    keywords: ['storefront door will not lock', 'commercial door lock repair', 'mobile commercial locksmith South Florida'],
    quickAnswer: 'Report whether the storefront door closes fully, whether the latch engages and whether the key turns. A door that will not close may need different work from one that closes but will not lock. If an exit cannot be used safely, notify building management immediately.',
    content: [
      { heading: 'Observe the door in normal use', paragraphs: [
        'Tell the technician whether the door drags, closes slowly, bounces back open or reaches the frame without latching. Note whether the issue affects one leaf of a paired door or the main entrance. Do not force a key or bolt that binds.',
        'A closer controls how the door swings shut. A latch holds the door closed, and the cylinder is the part that accepts the key. Describing which behavior changed helps the technician understand what to inspect.'
      ] },
      { heading: 'Coordinate with the person responsible for the door', paragraphs: [
        'For a leased storefront, involve the property manager if the entry or hardware is shared or managed by the building. For an affected exit, follow your property’s emergency procedures and keep the exit hardware in its intended operating condition.',
        'Give dispatch the business and suite name, the affected entrance and a person authorized to meet the technician. If a loading or rear entrance is involved, identify it separately from the public door.'
      ] },
      { heading: 'Share the symptom and recent changes', paragraphs: [
        'Recent door adjustment, new hardware or a key that stopped working are useful details. If the door looks damaged after attempted entry, tell management and report the visible condition when you call. Ask whether the technician can assess the existing hardware before you choose replacement.'
      ] },
    ],
    relatedServices: [{ name: 'Commercial locksmith service', slug: 'commercial-locksmith' }, { name: 'Lock repair', slug: 'lock-repair' }],
    relatedAreas: [{ name: 'Miracle Mile', path: '/service-areas/coral-gables/miracle-mile' }, { name: 'Pineapple Grove Arts District', path: '/service-areas/delray-beach/pineapple-grove-arts-district' }],
  },
  {
    id: 'condo-lock-change',
    slug: 'condo-lock-change-south-florida-checklist',
    title: 'Changing a Condo Door Lock in South Florida',
    excerpt: 'A checklist for owners and renters before asking for a condo lock replacement or rekey.',
    category: 'Residential',
    date: 'November 26, 2026',
    readTime: '3 min read',
    author: 'Pro Locksmith Tech',
    image: keyMachineImg,
    metaDescription: 'Before changing a condo door lock, check who controls the door, building rules, hardware compatibility and visitor access for your locksmith.',
    keywords: ['condo lock change', 'rekey condo door', 'South Florida condo locksmith'],
    quickAnswer: 'Check with the owner or building manager before changing a condo lock. Confirm who controls the door, whether the building specifies approved hardware and how the technician can enter. If the existing lock works and is compatible, ask about rekeying it.',
    content: [
      { heading: 'Confirm which door you can authorize work on', paragraphs: [
        'A unit’s front door and a common entrance may have different people responsible for them. If you rent, check with the owner or property manager. If the issue is a lobby, service door or other common entrance, contact building management.',
        'For a unit door, ask if the association has requirements for the visible hardware or an existing building key system. Share those requirements when you call so the technician can discuss suitable options.'
      ] },
      { heading: 'Describe the lock and why you want to change it', paragraphs: [
        'A missing key, a key that sticks and a loose handle are different problems. If the hardware works and you want old keys to stop working, ask whether it can be rekeyed. Describe any visible wear, sticking or problems with the door meeting the frame.',
        'Tell the locksmith if the door uses a keypad, a separate deadbolt or a managed access system. A clear description of the inside and outside hardware can help before the visit.'
      ] },
      { heading: 'Arrange visitor access ahead of time', paragraphs: [
        'Share the building, tower and unit number. Ask the front desk whether vendors need to check in and where they should park. If a tenant or property manager will meet the technician, confirm who is authorized to approve the work.'
      ] },
    ],
    relatedServices: [{ name: 'Residential locksmith service', slug: 'residential-locksmith' }, { name: 'Lock rekeying', slug: 'lock-rekeying' }],
    relatedAreas: [{ name: 'Williams Island', path: '/service-areas/aventura/williams-island' }, { name: 'North Beach', path: '/service-areas/miami-beach/north-beach' }],
  },
];
