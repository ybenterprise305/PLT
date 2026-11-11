import { CountyLocation } from '../types';

export const COUNTIES_DATA: CountyLocation[] = [
  {
    id: 'broward-county',
    slug: 'broward-county',
    name: 'Broward County',
    fullName: 'Broward County, FL',
    seat: 'Fort Lauderdale',
    overview: 'Broward County is the central hub of South Florida, home to nearly two million residents spanning coastal beach communities, vibrant urban centers, and sprawling residential suburbs bordering the Everglades. Pro Locksmith Tech provides fast mobile locksmith dispatch throughout Broward along the I-95, I-595, Florida’s Turnpike, and Sawgrass Expressway corridors.',
    highways: ['I-95', 'Florida’s Turnpike', 'I-595', 'Sawgrass Expressway (FL-869)', 'US-1 (Federal Highway)', 'University Drive'],
    metaTitle: 'Locksmith Broward County | 24/7 Mobile Service | Pro Locksmith Tech',
    metaDescription: 'Trusted mobile locksmith services throughout Broward County, FL. 24/7 emergency lockouts, residential rekeying, commercial hardware & car key cutting. Call +1 754-261-6528.',
    majorCities: [
      {
        id: 'fort-lauderdale',
        slug: 'fort-lauderdale',
        name: 'Fort Lauderdale',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33301', '33304', '33308', '33311', '33312', '33315', '33316'],
        keyHighways: ['I-95', 'I-595', 'US-1', 'Broward Blvd', 'A1A'],
        popularAreas: ['Downtown Fort Lauderdale', 'Las Olas Boulevard', 'Victoria Park', 'Harbor Beach', 'Fort Lauderdale Beach', 'Sailboat Bend', 'Flagler Village'],
        metaTitle: 'Emergency Locksmith Fort Lauderdale | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Need a locksmith in Fort Lauderdale? Fast 24/7 mobile assistance for car lockouts, Las Olas condos, downtown businesses & residential rekeying. Call +1 754-261-6528.',
        customIntro: 'From high-rise condominium lockouts along Las Olas and Downtown Fort Lauderdale to boat dockside vehicle lockouts near Port Everglades, Pro Locksmith Tech dispatches fully equipped mobile vans directly to your Fort Lauderdale location. Whether you are locked out after an evening on Himmarshee Street or need your waterfront residence rekeyed, our technicians provide careful, non-destructive entry and hardware installation.',
        serviceHighlights: [
          'Downtown & Las Olas high-rise residential smart lock upgrades and lockout access',
          'Emergency vehicle lockout assistance near Fort Lauderdale-Hollywood International Airport (FLL)',
          'Retail storefront Adams Rite mortise lock servicing on commercial corridors',
          'Saltwater-resistant stainless steel & heavy brass deadbolt installations'
        ]
      },
      {
        id: 'hollywood',
        slug: 'hollywood',
        name: 'Hollywood',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33019', '33020', '33021', '33024'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Hollywood Blvd', 'Sheridan St', 'A1A'],
        popularAreas: ['Hollywood Beach Broadwalk', 'Downtown Hollywood', 'Emerald Hills', 'Hollywood Hills', 'Hillcrest'],
        metaTitle: 'Locksmith Hollywood FL | 24/7 Mobile Technicians | Pro Locksmith Tech',
        metaDescription: 'Reliable mobile locksmith serving Hollywood, FL. Fast dispatch along Hollywood Blvd, A1A beachside, and Emerald Hills. 24/7 lockouts, keys & locks. Call +1 754-261-6528.',
        customIntro: 'Hollywood is known for its historic downtown arts district, lively beach broadwalk, and quiet family neighborhoods. When beachgoers misplace vehicle fobs or homeowners along Sheridan Street experience jammed cylinders, Pro Locksmith Tech delivers immediate mobile relief. We serve coastal condos, residential single-family properties, and local storefronts with rapid mobile response.',
        serviceHighlights: [
          'Beachside car key replacement and trunk lockouts along Hollywood Beach Broadwalk',
          'Residential home lock rekeying in Emerald Hills, Hollywood Hills, and Oakridge',
          'Commercial exit hardware and storefront locks along Hollywood Boulevard',
          'Mailbox lock replacements for condo communities and residential associations'
        ]
      },
      {
        id: 'pembroke-pines',
        slug: 'pembroke-pines',
        name: 'Pembroke Pines',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33026', '33027', '33028', '33029'],
        keyHighways: ['I-75', 'Florida’s Turnpike', 'Pines Blvd', 'Sheridan St', 'Flamingo Rd'],
        popularAreas: ['Silver Lakes', 'Pembroke Lakes Mall', 'Chapel Trail', 'Grand Palms', 'Spring Valley'],
        metaTitle: 'Locksmith Pembroke Pines FL | 24/7 Residential & Auto | Pro Locksmith Tech',
        metaDescription: 'Expert mobile locksmith serving Pembroke Pines, FL. Residential rekeying, car key programming along Pines Blvd & Silver Lakes. Call +1 754-261-6528.',
        customIntro: 'Pembroke Pines is one of Broward County’s premier suburban family hubs, stretching from the Florida Turnpike out west to the Everglades via Pines Boulevard. Pro Locksmith Tech provides mobile residential rekeying for gated subdivisions, shopping center commercial lock repair near Pembroke Lakes Mall, and prompt roadside vehicle key cutting along the I-75 and Flamingo Road corridors.',
        serviceHighlights: [
          'Whole-home rekeying and deadbolt installs for gated neighborhoods like Silver Lakes & Chapel Trail',
          'Fast car lockout response in Pembroke Lakes Mall and regional shopping center parking lots',
          'Electronic keypad and smart lock installation for busy family households',
          'Garage side door lock repairs and high-durability strike plate installations'
        ]
      },
      {
        id: 'coral-springs',
        slug: 'coral-springs',
        name: 'Coral Springs',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33065', '33067', '33071', '33076'],
        keyHighways: ['Sawgrass Expressway (FL-869)', 'University Drive', 'Sample Rd', 'Coral Ridge Dr'],
        popularAreas: ['Coral Springs City Center', 'Kensington', 'Ramblewood', 'Maplewood', 'Whispering Woods'],
        metaTitle: 'Locksmith Coral Springs FL | 24/7 Mobile Lock Service | Pro Locksmith Tech',
        metaDescription: '24/7 mobile locksmith in Coral Springs, FL. Fast response for house lockouts, business panic bars & car key replacements along University Dr & Sample Rd. Call +1 754-261-6528.',
        customIntro: 'Nestled in northwest Broward County, Coral Springs is known for its strict architectural codes and manicured communities. Pro Locksmith Tech respects your property aesthetic while delivering robust physical security. Whether you are dealing with a faulty garage entry lock in Ramblewood or need emergency car key origination near Coral Square, our mobile units are minutes away via the Sawgrass Expressway.',
        serviceHighlights: [
          'Architectural finish matching for decorative front handlesets in Kensington and Whispering Woods',
          'Commercial lock repairs and panic bar maintenance for businesses along University Drive',
          'Automotive transponder key replacement near Sample Road and Coral Ridge Drive',
          'Sliding glass patio door auxiliary security lock installation'
        ]
      },
      {
        id: 'pompano-beach',
        slug: 'pompano-beach',
        name: 'Pompano Beach',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33060', '33062', '33064', '33069'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Atlantic Blvd', 'US-1', 'A1A'],
        popularAreas: ['Pompano Beach Fisher Family Pier', 'Cypress Harbor', 'Garden Isles', 'Palm Aire', 'Old Pompano'],
        metaTitle: 'Locksmith Pompano Beach FL | 24/7 Emergency Dispatch | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Pompano Beach, FL. Fast assistance for beachfront lockouts, Atlantic Blvd businesses & Palm Aire condos. Call +1 754-261-6528.',
        customIntro: 'Pompano Beach combines thriving marine industries, oceanfront living, and expansive residential neighborhoods around Palm Aire and Cypress Harbor. Salt air exposure is a common culprit for sticky cylinders and seized tumblers in Pompano Beach. Pro Locksmith Tech provides precision lock repair, coastal-grade brass hardware replacement, and rapid 24/7 emergency dispatch along Atlantic Boulevard and Federal Highway.',
        serviceHighlights: [
          'Marine-tolerant lock cylinder repairs and lubrication resistant to salt air corrosion',
          'Oceanfront condo rekeying and electronic keypad retrofits near the Pier',
          'Automotive key cutting and mobile lockout service along the I-95 corridor',
          'Commercial warehouse and industrial park lock servicing along Andrews Avenue'
        ]
      },
      {
        id: 'miramar',
        slug: 'miramar',
        name: 'Miramar',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33023', '33025', '33027', '33029'],
        keyHighways: ['Florida’s Turnpike', 'I-75', 'Miramar Pkwy', 'Red Rd', 'County Line Rd'],
        popularAreas: ['Miramar Town Center', 'Silver Shores', 'Sunset Lakes', 'River Run', 'Country Club Ranches'],
        metaTitle: 'Locksmith Miramar FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Miramar, FL. Serving Sunset Lakes, Silver Shores, and Miramar Pkwy commercial corridors. Call +1 754-261-6528 for 24/7 service.',
        customIntro: 'Stretching from East Miramar near Miami Gardens to the newer western subdivisions of Sunset Lakes and Silver Shores, Miramar demands dependable mobile locksmith dispatch. Pro Locksmith Tech provides complete residential rekeying, commercial access hardware for Miramar Park of Commerce facilities, and urgent roadside car door unlocking.',
        serviceHighlights: [
          'Gated subdivision home rekeying throughout Western Miramar developments',
          'Commercial master key systems and exit hardware for business parks on Red Road',
          'Rapid mobile automotive lockout service along Miramar Parkway',
          'High-security lock upgrades with pick-resistant cylinders'
        ]
      },
      {
        id: 'davie',
        slug: 'davie',
        name: 'Davie',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33314', '33324', '33328', '33330'],
        keyHighways: ['I-595', 'Florida’s Turnpike', 'I-75', 'University Dr', 'Griffin Rd'],
        popularAreas: ['Nova Southeastern University Campus', 'Davie Golf Club', 'Pine Island Ridge', 'Shenandoah', 'Ivanhoe'],
        metaTitle: 'Locksmith Davie FL | 24/7 Mobile Technicians | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith services in Davie, FL. Serving college campuses, equestrian ranches, and residential communities along Griffin Rd & I-595. Call +1 754-261-6528.',
        customIntro: 'Davie presents a unique South Florida blend of expansive equestrian properties, college campuses including Nova Southeastern, and established suburban neighborhoods. Pro Locksmith Tech handles everything from student apartment lockouts and car key replacements to heavy-duty gate lock repairs and deadbolt installations on sprawling rural acreage.',
        serviceHighlights: [
          'Fast student vehicle and apartment lockout service near college campuses along University Drive',
          'Padlock and perimeter gate lock servicing for equestrian properties along Griffin Road',
          'Residential deadbolt installation and rekeying across Shenandoah and Pine Island Ridge',
          'Commercial office lock maintenance for business complexes bordering I-595'
        ]
      },
      {
        id: 'plantation',
        slug: 'plantation',
        name: 'Plantation',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33317', '33322', '33324'],
        keyHighways: ['I-595', 'Florida’s Turnpike', 'Pine Island Rd', 'Broward Blvd', 'University Dr'],
        popularAreas: ['Plantation Acres', 'Jacaranda', 'Central Park', 'Hawks Landing', 'Plantation Midtown'],
        metaTitle: 'Locksmith Plantation FL | 24/7 Mobile Lock Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Plantation, FL. Serving Jacaranda, Plantation Acres, and Midtown business hubs. Deadbolts, lockouts & rekeys. Call +1 754-261-6528.',
        customIntro: 'Plantation is a lush, centrally situated Broward municipality home to corporate regional headquarters, bustling shopping hubs, and peaceful residential communities like Jacaranda and Plantation Acres. Pro Locksmith Tech brings high-precision key cutting, commercial lock maintenance, and 24/7 emergency door entry straight to your front door or office parking lot.',
        serviceHighlights: [
          'High-security lock rekeying for luxury residences in Hawks Landing and Plantation Acres',
          'Corporate office commercial hardware and keycard/push-bar adjustments in Plantation Midtown',
          'Mobile automotive key fob programming at shopping centers along University Drive',
          'Fresh deadbolt installation on solid wood entry doors'
        ]
      },
      {
        id: 'sunrise',
        slug: 'sunrise',
        name: 'Sunrise',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33323', '33351'],
        keyHighways: ['Sawgrass Expressway', 'I-595', 'Sunrise Blvd', 'University Dr'],
        popularAreas: ['Sawgrass Mills', 'FLA Live Arena', 'Welleby', 'Sunrise Golf Village'],
        metaTitle: 'Locksmith Sunrise FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Sunrise, FL. Fast dispatch near Sawgrass Mills, FLA Live Arena, and Welleby. 24/7 car lockouts, home rekeys & commercial locks. Call +1 754-261-6528.',
        customIntro: 'Sunrise is home to the world-renowned Sawgrass Mills mall, the Amerant Bank Arena, and thriving residential neighborhoods. Pro Locksmith Tech provides rapid mobile locksmith dispatch for shoppers locked out in vast parking plazas, business owners requiring exit device repairs, and homeowners upgrading their door security.',
        serviceHighlights: [
          'High-priority parking lot car lockout dispatch at Sawgrass Mills and regional retail centers',
          'Commercial panic exit device and storefront door repairs for corporate and entertainment venues',
          'Residential deadbolt rekeying and smart lock installation across Welleby and Sunrise Golf Village',
          'Broken key extraction from car doors, ignitions, and residential deadbolts'
        ]
      },
      {
        id: 'deerfield-beach',
        slug: 'deerfield-beach',
        name: 'Deerfield Beach',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33441', '33442'],
        keyHighways: ['I-95', 'Sawgrass Expressway', 'Hillsboro Blvd', 'US-1', 'A1A'],
        popularAreas: ['Deerfield Beach International Fishing Pier', 'The Cove', 'Century Village', 'Deer Creek'],
        metaTitle: 'Locksmith Deerfield Beach FL | 24/7 Mobile Dispatch | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Deerfield Beach, FL. Fast response in The Cove, Hillsboro Blvd & beachside. 24/7 lockouts, keys & locks. Call +1 754-261-6528.',
        customIntro: 'Bordering Palm Beach County, Deerfield Beach combines coastal living around its famous fishing pier with busy commercial corridors along Hillsboro Boulevard. Pro Locksmith Tech brings emergency mobile lock opening, residential rekeying, and precision car key cutting directly to your driveway or beachside parking stall.',
        serviceHighlights: [
          'Coastal salt-resistant deadbolt and handle installation for waterfront and canal homes in The Cove',
          'Emergency vehicle lockout assistance near the beach and Hillsboro Boulevard retail plazas',
          'Residential lock rekeying and mailbox cylinder replacements in Century Village and Deer Creek',
          'Commercial storefront mortise cylinder service for local business plazas'
        ]
      },
      {
        id: 'tamarac',
        slug: 'tamarac',
        name: 'Tamarac',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33319', '33321'],
        keyHighways: ['Sawgrass Expressway', 'Commercial Blvd', 'University Dr', 'McNab Rd'],
        popularAreas: ['Woodmont', 'Kings Point', 'Mainlands of Tamarac Lakes', 'Tamarac Town Center'],
        metaTitle: 'Locksmith Tamarac FL | 24/7 Mobile Lock Service | Pro Locksmith Tech',
        metaDescription: '24/7 Mobile locksmith serving Tamarac, FL. Fast response for house lockouts, deadbolt installs & car key replacements along Commercial Blvd. Call +1 754-261-6528.',
        customIntro: 'Tamarac is an active central Broward municipality featuring master-planned communities like Woodmont and Kings Point alongside bustling retail plazas along Commercial Boulevard. Pro Locksmith Tech dispatches fully equipped mobile vans directly to your home or vehicle with quick 15-25 minute response times.',
        serviceHighlights: [
          'Residential home lock rekeying and deadbolt upgrades in Woodmont and Kings Point',
          'Fast emergency vehicle lockout dispatch along Commercial Boulevard and University Drive',
          'Smart lock and electronic keypad setups for convenient keyless entry',
          'Sliding glass door security locks and reinforced strike plates'
        ]
      },
      {
        id: 'coconut-creek',
        slug: 'coconut-creek',
        name: 'Coconut Creek',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33066', '33073'],
        keyHighways: ['Sawgrass Expressway', 'Florida’s Turnpike', 'Sample Rd', 'Lyons Rd'],
        popularAreas: ['Promenade at Coconut Creek', 'Seminole Casino Coconut Creek', 'Winston Park', 'Regency Lakes'],
        metaTitle: 'Locksmith Coconut Creek FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Expert mobile locksmith in Coconut Creek, FL. Serving Promenade, Winston Park, and Regency Lakes. 24/7 car keys, lockouts & rekeys. Call +1 754-261-6528.',
        customIntro: 'Known as the Butterfly Capital of the World, Coconut Creek features upscale master-planned developments, the lively Promenade shopping center, and the Seminole Casino. Pro Locksmith Tech delivers on-site automotive key origination, smart deadbolt installations, and 24/7 emergency lockout assistance with precision.',
        serviceHighlights: [
          'On-site key fob programming and car lockouts at Seminole Casino Coconut Creek and Promenade',
          'Residential lock rekeying and hardware upgrades in Winston Park and Regency Lakes',
          'Commercial store lock maintenance and exit push-bar alignment along Sample Road',
          'Patio sliding door auxiliary locking mechanisms for private residences'
        ]
      },
      {
        id: 'margate',
        slug: 'margate',
        name: 'Margate',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33063', '33068'],
        keyHighways: ['State Road 7 (US-441)', 'Atlantic Blvd', 'Sample Rd', 'Margate Blvd'],
        popularAreas: ['Oriole Golf Club', 'Coral Gate', 'Paradise Gardens', 'Margate City Center'],
        metaTitle: 'Locksmith Margate FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Margate, FL. Serving Coral Gate, Oriole, and US-441. 24/7 emergency house lockouts, car keys & deadbolts. Call +1 754-261-6528.',
        customIntro: 'Centrally positioned in northern Broward County, Margate is a vibrant residential community with extensive retail along State Road 7. Pro Locksmith Tech offers prompt, honest mobile locksmith assistance for homeowners, drivers, and commercial store managers throughout Margate.',
        serviceHighlights: [
          'Prompt residential lockout and rekeying services in Coral Gate and Paradise Gardens',
          'Automotive laser key cutting and chip programming along State Road 7 and Atlantic Blvd',
          'Commercial storefront security hardware and glass door mortise lock repairs',
          'Mailbox lock replacement and deadbolt alignment'
        ]
      },
      {
        id: 'weston',
        slug: 'weston',
        name: 'Weston',
        countyId: 'broward-county',
        countyName: 'Broward County',
        zipCodes: ['33326', '33327', '33331', '33332'],
        keyHighways: ['I-75', 'Sawgrass Expressway', 'Royal Palm Blvd', 'Weston Rd'],
        popularAreas: ['Weston Town Center', 'Bonaventure', 'Savanna', 'The Ridges', 'Windmill Ranch Estates'],
        metaTitle: 'Locksmith Weston FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Premier mobile locksmith in Weston, FL. Serving Weston Town Center, Savanna, and Windmill Ranch. High-security deadbolts & 24/7 lockouts. Call +1 754-261-6528.',
        customIntro: 'Weston is one of South Florida’s most prestigious master-planned communities, renowned for its gated enclaves, golf courses, and manicured landscapes bordering the Everglades. Pro Locksmith Tech delivers high-security residential lock rekeying, designer handleset installations, and emergency mobile unlocks right to your gated community residence or Town Center office.',
        serviceHighlights: [
          'High-security decorative lock installation and whole-home rekeying for gated enclaves in Savanna and Windmill Ranch',
          'Corporate office master key systems and commercial door repairs in Weston Town Center',
          'Rapid vehicle unlock and transponder key programming along Royal Palm Boulevard and I-75',
          'Smart lock retrofitting on custom solid-wood exterior doors'
        ]
      }
    ]
  },
  {
    id: 'miami-dade-county',
    slug: 'miami-dade-county',
    name: 'Miami-Dade County',
    fullName: 'Miami-Dade County, FL',
    seat: 'Miami',
    overview: 'Miami-Dade County is Florida’s most populous metropolitan area, encompassing cosmopolitan financial districts, international art capitals, historic neighborhoods, and active coastal islands. Pro Locksmith Tech covers Miami-Dade County with mobile units traversing I-95, the Palmetto Expressway (FL-826), the Dolphin Expressway (FL-836), and Biscayne Boulevard.',
    highways: ['I-95', 'Palmetto Expressway (FL-826)', 'Dolphin Expressway (FL-836)', 'Biscayne Blvd (US-1)', 'Florida’s Turnpike Extension', 'I-195 / Julia Tuttle Causeway'],
    metaTitle: 'Locksmith Miami-Dade County | 24/7 Mobile Locksmith | Pro Locksmith Tech',
    metaDescription: 'Comprehensive mobile locksmith services throughout Miami-Dade County, FL. Emergency car lockouts, condo rekeying, commercial exit hardware. Call +1 754-261-6528.',
    majorCities: [
      {
        id: 'miami',
        slug: 'miami',
        name: 'Miami',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33101', '33125', '33129', '33130', '33131', '33137', '33138'],
        keyHighways: ['I-95', 'FL-836 (Dolphin)', 'US-1 (Biscayne Blvd)', 'Brickell Ave'],
        popularAreas: ['Brickell', 'Downtown Miami', 'Wynwood', 'Design District', 'Coconut Grove', 'Little Havana', 'Edgewater'],
        metaTitle: 'Locksmith Miami | 24/7 Emergency Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Need a mobile locksmith in Miami? Fast 24/7 emergency lockouts in Brickell, Downtown, Wynwood & Coconut Grove. Keys, locks & security. Call +1 754-261-6528.',
        customIntro: 'Miami moves at high speed, day and night. From financial executives locked out of luxury Brickell high-rises to retail galleries in Wynwood needing storefront lock repair and nighttime visitors with lost car keys near Bayside, Pro Locksmith Tech provides agile mobile locksmith dispatch across the urban core of Miami. Our vans are fitted with top-tier electronic key decoders and hardware.',
        serviceHighlights: [
          'High-rise condominium smart lock programming & lockout assistance in Brickell and Edgewater',
          'Retail storefront Adams Rite glass door lock repairs in Wynwood and the Design District',
          'Emergency vehicle lockout dispatch across Downtown Miami and PortMiami areas',
          'Commercial office master key system servicing along Brickell Avenue financial corridor'
        ]
      },
      {
        id: 'miami-beach',
        slug: 'miami-beach',
        name: 'Miami Beach',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33139', '33140', '33141'],
        keyHighways: ['A1A (Collins Ave / Ocean Dr)', 'MacArthur Causeway', 'Julia Tuttle Causeway', 'Venetian Causeway'],
        popularAreas: ['South Beach (SoBe)', 'Mid-Beach', 'North Beach', 'Lincoln Road', 'Sunset Islands', 'Star Island'],
        metaTitle: 'Locksmith Miami Beach FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: '24/7 Mobile locksmith serving Miami Beach, FL. Fast response in South Beach, Collins Ave, and Lincoln Road. Emergency lockouts & rekeys. Call +1 754-261-6528.',
        customIntro: 'With world-famous nightlife, historic Art Deco hotels, and pristine barrier island beaches, Miami Beach requires round-the-clock locksmith readiness. Pro Locksmith Tech provides 24/7 mobile assistance along Ocean Drive, Collins Avenue, and Alton Road. Whether you dropped your car keys in the sand or manage boutique hospitality properties needing mortise lock repairs, we are ready to respond.',
        serviceHighlights: [
          'Late-night automotive and residential lockout relief throughout South Beach (SoBe)',
          'Coastal salt-air lock servicing, cylinder cleaning, and anti-corrosion hardware retrofits',
          'Boutique hotel, Airbnb, and vacation rental electronic keypad installation',
          'Historic mortise lock repair that preserves architectural character without sacrificing security'
        ]
      },
      {
        id: 'hialeah',
        slug: 'hialeah',
        name: 'Hialeah',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33010', '33012', '33013', '33014', '33016'],
        keyHighways: ['Palmetto Expressway (FL-826)', 'Gratigny Parkway (FL-924)', 'W 49th St', 'Okeechobee Rd', 'Le Jeune Rd'],
        popularAreas: ['Hialeah Cultural Center', 'Westland Mall', 'Seminola', 'Hialeah Gardens border', 'Palm Springs Mile'],
        metaTitle: 'Locksmith Hialeah FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Hialeah, FL. Fast lockouts, car key programming & residential rekeying along W 49th St and Palmetto. Call +1 754-261-6528.',
        customIntro: 'As one of the largest industrial, commercial, and residential engines in South Florida, Hialeah features heavy retail commerce along West 49th Street, extensive manufacturing districts, and tightly knit residential neighborhoods. Pro Locksmith Tech brings mobile key duplication, commercial warehouse lock installation, and emergency auto unlock services straight to your location.',
        serviceHighlights: [
          'Commercial warehouse roll-up door lock hardware and heavy security padlocks',
          'Automotive transponder key cutting and programming near Westland Mall and Palm Springs Mile',
          'Affordable residential rekeying for single-family homes and duplex properties',
          'Broken key extraction and cylinder restoration for older door hardware'
        ]
      },
      {
        id: 'coral-gables',
        slug: 'coral-gables',
        name: 'Coral Gables',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33134', '33146', '33156'],
        keyHighways: ['US-1 (South Dixie Hwy)', 'Ponce de Leon Blvd', 'Coral Way', 'Bird Rd'],
        popularAreas: ['Miracle Mile', 'University of Miami campus', 'Biltmore area', 'Gables Estates', 'Cocoplum'],
        metaTitle: 'Locksmith Coral Gables FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Professional mobile locksmith in Coral Gables, FL. Serving Miracle Mile, UM campus, and estate neighborhoods. High-security locks. Call +1 754-261-6528.',
        customIntro: 'Renowned for its Mediterranean Revival architecture, the City Beautiful requires locksmith craftsmanship that respects fine woodwork, historic doors, and strict building guidelines. Pro Locksmith Tech services residential estates, upscale corporate offices along Ponce de Leon Boulevard, and student residences near the University of Miami with utmost care and precision.',
        serviceHighlights: [
          'Custom mortise lock repairs and brass handleset preservation for historic residences',
          'High-security restricted keyway cylinders for corporate offices along Miracle Mile',
          'Fast vehicle and dorm/apartment lockout assistance near University of Miami (UM)',
          'Smart lock installations cleanly integrated into solid hardwood exterior doors'
        ]
      },
      {
        id: 'doral',
        slug: 'doral',
        name: 'Doral',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33122', '33126', '33166', '33178'],
        keyHighways: ['Palmetto Expressway (FL-826)', 'Florida’s Turnpike', 'Dolphin Expressway (FL-836)', 'NW 87th Ave'],
        popularAreas: ['Downtown Doral', 'CityPlace Doral', 'Doral Meadow', 'Islands at Doral', 'Doral Business District'],
        metaTitle: 'Locksmith Doral FL | 24/7 Commercial & Auto | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Doral, FL. Fast response in Downtown Doral, CityPlace, and international logistics warehouses. Call +1 754-261-6528.',
        customIntro: 'Doral is an international trade capital and premier business corridor in western Miami-Dade, featuring corporate headquarters, expansive logistics distribution centers, and upscale master-planned communities. Pro Locksmith Tech caters to the heavy commercial security demands of Doral enterprises while providing rapid car key replacement and residential rekeying.',
        serviceHighlights: [
          'Commercial logistics warehouse exit devices, panic crash bars, and access controls',
          'Residential smart lock installation and rekeying in Downtown Doral and CityPlace condos',
          'Fleet vehicle key duplication and emergency commercial truck lockouts',
          'Master key system implementation for multi-tenant office complexes'
        ]
      },
      {
        id: 'aventura',
        slug: 'aventura',
        name: 'Aventura',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33160', '33180'],
        keyHighways: ['Biscayne Blvd (US-1)', 'William Lehman Causeway', 'A1A', 'NE 203rd St'],
        popularAreas: ['Aventura Mall', 'Turnberry Isle', 'Williams Island', 'Porto Vita', 'Waterways Marina'],
        metaTitle: 'Locksmith Aventura FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Aventura, FL. Serving Aventura Mall, Turnberry, and luxury high-rise condominium towers. Call +1 754-261-6528 for 24/7 service.',
        customIntro: 'Perched on the northern border of Miami-Dade County, Aventura is synonymous with luxury high-rise towers, waterfront marinas, and the world-class Aventura Mall. Pro Locksmith Tech specializes in high-security condo electronic locks, non-destructive luxury vehicle door unlocking, and prompt emergency lock rekeying for property owners and seasonal residents.',
        serviceHighlights: [
          'Luxury high-rise smart lock retrofits complying with condominium HOA regulations',
          'Rapid vehicle lockout and smart key programming at Aventura Mall parking garages',
          'Waterfront marina and yacht club security hardware and lock repairs',
          'Key duplication and master key setup for luxury residential properties'
        ]
      },
      {
        id: 'kendall',
        slug: 'kendall',
        name: 'Kendall',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33156', '33173', '33176', '33183', '33186'],
        keyHighways: ['Don Shula Expressway (FL-874)', 'Snapper Creek Expressway (FL-878)', 'Kendall Dr (SW 88th St)', 'US-1'],
        popularAreas: ['Dadeland Mall', 'The Falls', 'The Hammocks', 'Kendall Breeze', 'Baptist Hospital Area'],
        metaTitle: 'Locksmith Kendall FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Reliable mobile locksmith in Kendall, FL. Serving The Hammocks, Dadeland, and The Falls. 24/7 home rekeys, car keys & lockouts. Call +1 754-261-6528.',
        customIntro: 'Kendall is one of South Florida’s largest suburban communities, spanning from US-1 and Dadeland westward to The Hammocks. Whether you have locked your keys in the car while shopping at Dadeland Mall or need to upgrade the deadbolts on your suburban home after moving in, Pro Locksmith Tech dispatches directly to your driveway or parking space.',
        serviceHighlights: [
          'Suburban single-family home deadbolt installation and whole-house rekeying',
          'Prompt vehicle unlock services at Dadeland Mall and The Falls retail plazas',
          'Medical office commercial hardware and secure record room lock installations',
          'Patio sliding door secondary security bolts and child safety latches'
        ]
      },
      {
        id: 'north-miami',
        slug: 'north-miami',
        name: 'North Miami',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33161', '33181'],
        keyHighways: ['Biscayne Blvd (US-1)', 'I-95', 'NE 125th St', 'West Dixie Hwy'],
        popularAreas: ['MOCA Plaza', 'Sans Souci', 'Keystone Point', 'FIU Biscayne Bay Campus'],
        metaTitle: 'Locksmith North Miami FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in North Miami, FL. Serving Sans Souci, Keystone Point & Biscayne Blvd. 24/7 car lockouts, rekeys & commercial locks. Call +1 754-261-6528.',
        customIntro: 'North Miami is an energetic cultural and residential hub connecting Biscayne Boulevard and I-95. From private canal residences in Sans Souci and Keystone Point to retail along 125th Street, Pro Locksmith Tech delivers on-site deadbolt rekeying, high-security lock installation, and rapid car lockout assistance.',
        serviceHighlights: [
          'Waterfront residential hardware replacement and anti-corrosion deadbolts in Sans Souci',
          'Rapid student and commuter automotive lockouts near FIU Biscayne Bay Campus',
          'Commercial exit hardware and storefront locks along NE 125th Street',
          'Mailbox lock replacement and whole-house rekeying'
        ]
      },
      {
        id: 'sunny-isles-beach',
        slug: 'sunny-isles-beach',
        name: 'Sunny Isles Beach',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33160'],
        keyHighways: ['A1A (Collins Ave)', 'Sunny Isles Blvd', 'Biscayne Blvd', 'William Lehman Causeway'],
        popularAreas: ['Acqualina', 'Porsche Design Tower', 'Millennium', 'Newport Fishing Pier'],
        metaTitle: 'Locksmith Sunny Isles Beach FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: '24/7 Mobile locksmith serving Sunny Isles Beach, FL. Luxury condo smart locks, emergency lockouts along Collins Ave. Call +1 754-261-6528.',
        customIntro: 'Known as Florida’s Riviera, Sunny Isles Beach features ultra-luxury oceanfront skyscrapers along Collins Avenue. Pro Locksmith Tech specializes in high-rise condominium digital smart lock programming, luxury handle fitting, and immediate emergency lockout service for residents and guests.',
        serviceHighlights: [
          'High-rise condominium electronic keypad and biometric smart lock installation on Collins Ave',
          'Late-night non-destructive condo and vehicle lockout response',
          'Heavy saltwater-resistant architectural door hardware and deadbolts',
          'Precision laser key cutting for luxury European and domestic vehicles'
        ]
      },
      {
        id: 'south-miami',
        slug: 'south-miami',
        name: 'South Miami',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33143'],
        keyHighways: ['US-1 (South Dixie Hwy)', 'Sunset Dr (SW 72nd St)', 'Red Rd (SW 57th Ave)'],
        popularAreas: ['The Shops at Sunset Place', 'South Miami Hospital Area', 'High Pines', 'Twin Lakes'],
        metaTitle: 'Locksmith South Miami FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in South Miami, FL. Fast dispatch near Sunset Place, High Pines & US-1. 24/7 lockouts, car keys & residential rekeying. Call +1 754-261-6528.',
        customIntro: 'South Miami offers charming pedestrian streetscapes around Sunset Drive, major medical centers, and tranquil leafy neighborhoods. Pro Locksmith Tech brings emergency lockout help, commercial office lock maintenance, and residential rekeying directly to South Miami homes and businesses.',
        serviceHighlights: [
          'Emergency vehicle and office unlock assistance around The Shops at Sunset Place',
          'Medical clinic commercial mortise lock and access control hardware servicing',
          'Residential deadbolt installation and rekeying across High Pines and Twin Lakes',
          'Automotive transponder key duplication and programming along US-1'
        ]
      },
      {
        id: 'pinecrest',
        slug: 'pinecrest',
        name: 'Pinecrest',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33156'],
        keyHighways: ['US-1 (Pinecrest Pkwy)', 'Killian Dr (SW 104th St)', 'SW 57th Ave', 'SW 77th Ave'],
        popularAreas: ['Pinecrest Gardens', 'Palmetto High Area', 'Suniland', 'Estate Section'],
        metaTitle: 'Locksmith Pinecrest FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Premier mobile locksmith serving Pinecrest, FL. Luxury estate security, residential rekeying, high-security deadbolts & 24/7 lockouts. Call +1 754-261-6528.',
        customIntro: 'Pinecrest is one of Miami-Dade’s most affluent suburban residential villages, celebrated for its expansive acreage estates, tree-lined avenues, and top schools. Pro Locksmith Tech provides white-glove locksmith service including high-security cylinder installation, estate gate lock repair, and discreet 24/7 emergency dispatch.',
        serviceHighlights: [
          'High-security Grade 1 deadbolt installations and multi-point door hardware for luxury estates',
          'Whole-property master keying and perimeter gate lock rekeying',
          'Prompt vehicle lockout and key fob programming along Pinecrest Parkway (US-1)',
          'Smart deadbolt integration on custom double entry doors'
        ]
      },
      {
        id: 'miami-gardens',
        slug: 'miami-gardens',
        name: 'Miami Gardens',
        countyId: 'miami-dade-county',
        countyName: 'Miami-Dade County',
        zipCodes: ['33054', '33055', '33056'],
        keyHighways: ['Florida’s Turnpike', 'Palmetto Expressway', 'I-95', 'NW 27th Ave', 'NW 183rd St'],
        popularAreas: ['Hard Rock Stadium', 'Calder', 'St. Thomas University', 'Carol City'],
        metaTitle: 'Locksmith Miami Gardens FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Miami Gardens, FL. Fast dispatch near Hard Rock Stadium, NW 27th Ave. 24/7 emergency car lockouts & home rekeys. Call +1 754-261-6528.',
        customIntro: 'Home to the world-famous Hard Rock Stadium, major sporting events, and sprawling residential neighborhoods, Miami Gardens demands fast, dependable mobile locksmith readiness. Pro Locksmith Tech dispatches directly to event parking lots, retail corridors on 27th Avenue, and residential homes 24 hours a day.',
        serviceHighlights: [
          'High-priority car lockout service and lost key replacement near Hard Rock Stadium',
          'Affordable residential rekeying and deadbolt replacement for single-family homes',
          'Commercial store lock repairs and exit crash bar maintenance on NW 27th Avenue',
          'Broken key extraction from vehicle ignitions and house locks'
        ]
      }
    ]
  },
  {
    id: 'palm-beach-county',
    slug: 'palm-beach-county',
    name: 'Palm Beach County',
    fullName: 'Palm Beach County, FL',
    seat: 'West Palm Beach',
    overview: 'Palm Beach County represents South Florida’s northern corridor, encompassing prestigious coastal enclaves, equestrian communities, and rapidly expanding tech and commercial hubs. Pro Locksmith Tech serves Palm Beach County via I-95, Florida’s Turnpike, US-1, and Southern Boulevard with prompt, equipped mobile locksmith vans.',
    highways: ['I-95', 'Florida’s Turnpike', 'US-1 (Federal Hwy)', 'Southern Blvd (FL-80)', 'Okeechobee Blvd (FL-704)', 'Glades Rd'],
    metaTitle: 'Locksmith Palm Beach County | 24/7 Mobile Service | Pro Locksmith Tech',
    metaDescription: '24/7 Mobile locksmith services across Palm Beach County, FL. Fast dispatch in West Palm Beach, Boca Raton, Delray Beach & Boynton Beach. Call +1 754-261-6528.',
    majorCities: [
      {
        id: 'west-palm-beach',
        slug: 'west-palm-beach',
        name: 'West Palm Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33401', '33405', '33407', '33409', '33411'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Okeechobee Blvd', 'Southern Blvd', 'US-1'],
        popularAreas: ['Downtown West Palm Beach', 'The Square (CityPlace)', 'Clematis Street', 'Grandview Heights', 'Northwood Village', 'Flamingo Park'],
        metaTitle: 'Locksmith West Palm Beach | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Emergency mobile locksmith in West Palm Beach, FL. Serving Clematis St, The Square, and downtown condos. 24/7 lockouts, keys & locks. Call +1 754-261-6528.',
        customIntro: 'West Palm Beach is the vibrant cultural and financial heartbeat of Palm Beach County, featuring buzzing entertainment along Clematis Street, upscale dining at The Square, and historic residential enclaves like Flamingo Park. Pro Locksmith Tech provides fast 24/7 mobile locksmith dispatch for condo lockouts, automotive key programming near PBI Airport, and commercial access installations.',
        serviceHighlights: [
          'Downtown high-rise condo lockout service and electronic smart lock retrofits',
          'Nighttime emergency car door unlocking near Clematis Street and waterfront venues',
          'Historic district mortise cylinder rekeying and delicate hardware repairs',
          'Commercial retail storefront lock maintenance along Okeechobee Boulevard'
        ]
      },
      {
        id: 'boca-raton',
        slug: 'boca-raton',
        name: 'Boca Raton',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33431', '33432', '33433', '33486', '33487', '33496'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Glades Rd', 'Palmetto Park Rd', 'US-1'],
        popularAreas: ['Mizner Park', 'Town Center at Boca Raton', 'FAU Campus', 'Royal Palm Yacht & Country Club', 'Boca West', 'Woodfield Country Club'],
        metaTitle: 'Locksmith Boca Raton FL | 24/7 Mobile Technicians | Pro Locksmith Tech',
        metaDescription: 'Top-rated mobile locksmith in Boca Raton, FL. Serving Mizner Park, Town Center, and gated country clubs. High-security locks & car keys. Call +1 754-261-6528.',
        customIntro: 'Boca Raton is characterized by Mediterranean-inspired architecture, prestigious country club estates, thriving corporate parks along the Glades Road corridor, and Florida Atlantic University. Pro Locksmith Tech caters to the demanding security standards of Boca Raton homeowners and business executives with immaculate service, heavy-duty Grade 1 hardware, and 24/7 mobile dispatch.',
        serviceHighlights: [
          'High-security lock installation and rekeying for gated country club communities',
          'Rapid vehicle unlock service and transponder key cutting at Town Center at Boca Raton',
          'Commercial office suite master key system setup along the Glades Road tech corridor',
          'FAU campus area student apartment and vehicle lockout assistance'
        ]
      },
      {
        id: 'delray-beach',
        slug: 'delray-beach',
        name: 'Delray Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33444', '33445', '33483', '33484'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Atlantic Ave', 'US-1', 'A1A'],
        popularAreas: ['Downtown Atlantic Avenue', 'Pineapple Grove Arts District', 'Delray Beach Oceanfront', 'Lake Ida', 'Seagate'],
        metaTitle: 'Locksmith Delray Beach FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Delray Beach, FL. Fast service along Atlantic Ave, Pineapple Grove & coastal homes. 24/7 lockouts & rekeys. Call +1 754-261-6528.',
        customIntro: 'Delray Beach combines the charm of Atlantic Avenue’s boutique shopping and dining with coastal estates along A1A and family neighborhoods surrounding Lake Ida. Pro Locksmith Tech handles emergency lockouts for night-out patrons on Atlantic Ave, rekeys historic homes in Pineapple Grove, and replaces weathered locks exposed to beach air.',
        serviceHighlights: [
          'Atlantic Avenue restaurant and boutique commercial lock repair and panic bar checks',
          'Beachside automotive lockout and laser-cut car key cutting on-site',
          'Lake Ida and coastal residential deadbolt rekeying and smart lock integration',
          'Saltwater-resistant heavy deadbolt replacement for waterfront residences'
        ]
      },
      {
        id: 'boynton-beach',
        slug: 'boynton-beach',
        name: 'Boynton Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33426', '33435', '33436', '33437'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Boynton Beach Blvd', 'Congress Ave', 'US-1'],
        popularAreas: ['Boynton Harbor Marina', 'Canyon Communities', 'Valencia Reserve', 'Hunter’s Run', 'Quantum Park'],
        metaTitle: 'Locksmith Boynton Beach FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Reliable mobile locksmith in Boynton Beach, FL. Fast residential rekeying, car key programming & marina lock services. Call +1 754-261-6528.',
        customIntro: 'Boynton Beach is a thriving community with active marina activities, expansive 55+ active adult neighborhoods in western Boynton, and convenient transit links along Boynton Beach Boulevard. Pro Locksmith Tech provides mobile locksmith vans stocked with high-grade locksets, electronic key programmers, and precision tools to solve your lock or key dilemma quickly.',
        serviceHighlights: [
          'Whole-home lock rekeying and key-alike setups for new Boynton Beach homebuyers',
          'Emergency vehicle unlock and transponder key cutting along Congress Avenue retail hubs',
          'Marina and waterfront gate padlock and cylinder servicing',
          'Commercial store mortise and rim cylinder replacement on Boynton Beach Boulevard'
        ]
      },
      {
        id: 'jupiter',
        slug: 'jupiter',
        name: 'Jupiter',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33458', '33469', '33477', '33478'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'Indiantown Rd (FL-706)', 'US-1', 'A1A'],
        popularAreas: ['Jupiter Inlet Lighthouse', 'Abacoa', 'The Bluffs', 'Admirals Cove', 'Jupiter Farms'],
        metaTitle: 'Locksmith Jupiter FL | 24/7 Mobile Lock Service | Pro Locksmith Tech',
        metaDescription: 'Expert mobile locksmith in Jupiter, FL. Serving Abacoa, Admirals Cove, and Jupiter Farms. 24/7 home rekeys, car keys & lockouts. Call +1 754-261-6528.',
        customIntro: 'Jupiter is famous for its iconic red lighthouse, pristine coastal waterways, the walkable downtown village of Abacoa, and the equestrian ranches of Jupiter Farms. Pro Locksmith Tech dispatches mobile service trucks across Jupiter, delivering prompt lockout assistance, heavy-duty deadbolts, and precision vehicle key cutting right to your location.',
        serviceHighlights: [
          'Residential smart lock installation and decorative door hardware in Abacoa and The Bluffs',
          'Marine and dock lock repair near the Jupiter Inlet and waterways',
          'Automotive lockout and transponder key programming along Indiantown Road',
          'Heavy-duty gate lock hardware and perimeter security for Jupiter Farms properties'
        ]
      },
      {
        id: 'wellington',
        slug: 'wellington',
        name: 'Wellington',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33414', '33449'],
        keyHighways: ['Southern Blvd (FL-80)', 'Florida’s Turnpike', 'US-441 / FL-7', 'Forest Hill Blvd'],
        popularAreas: ['Palm Beach International Equestrian Center', 'Wellington Green Mall', 'Olympia', 'Versailles', 'Aero Club'],
        metaTitle: 'Locksmith Wellington FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Wellington, FL. Serving equestrian estates, Olympia, and The Mall at Wellington Green. Call +1 754-261-6528 for 24/7 service.',
        customIntro: 'Recognized internationally as the premier equestrian capital of North America, Wellington boasts prestigious gated enclaves, world-class polo grounds, and top-tier residential developments like Olympia and Versailles. Pro Locksmith Tech provides tailored locksmith solutions including estate gate lock maintenance, stable security hardware, and prompt residential lock rekeying.',
        serviceHighlights: [
          'High-security locksets and master key setups for equestrian facilities and private estates',
          'Emergency vehicle lockout service at The Mall at Wellington Green',
          'Residential deadbolt installation and keypad programming in Olympia and Versailles',
          'Heavy-duty strike plate reinforcement for exterior estate doors'
        ]
      },
      {
        id: 'palm-beach-gardens',
        slug: 'palm-beach-gardens',
        name: 'Palm Beach Gardens',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33410', '33418'],
        keyHighways: ['I-95', 'Florida’s Turnpike', 'PGA Blvd', 'Military Trail', 'Alternate A1A'],
        popularAreas: ['PGA National Resort', 'The Gardens Mall', 'BallenIsles', 'Mirsol', 'Old Palm Golf Club'],
        metaTitle: 'Locksmith Palm Beach Gardens | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Palm Beach Gardens, FL. Serving PGA National, The Gardens Mall, and luxury golf communities. 24/7 lockouts. Call +1 754-261-6528.',
        customIntro: 'Home to the PGA National Resort, championship golf courses, and upscale shopping at The Gardens Mall, Palm Beach Gardens demands exceptional service reliability. Pro Locksmith Tech provides white-glove mobile locksmith service for country club communities, corporate offices along PGA Boulevard, and automotive emergencies.',
        serviceHighlights: [
          'Luxury home lock rekeying and smart deadbolt upgrades in PGA National and BallenIsles',
          'Rapid vehicle unlock service and transponder key programming at The Gardens Mall',
          'Commercial office door closer and panic crash bar maintenance along PGA Boulevard',
          'Precision key duplication for specialty high-security key profiles'
        ]
      },
      {
        id: 'lake-worth',
        slug: 'lake-worth',
        name: 'Lake Worth Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33460', '33461'],
        keyHighways: ['I-95', 'Lake Ave', 'Dixie Hwy', 'Federal Hwy', 'A1A'],
        popularAreas: ['Downtown Lake Worth', 'Lake Worth Beach Casino & Pier', 'College Park', 'Sunset Ridge'],
        metaTitle: 'Locksmith Lake Worth FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Trusted mobile locksmith in Lake Worth, FL. Serving Downtown Lake Worth, College Park & beachside. 24/7 emergency car lockouts, rekeys & locks. Call +1 754-261-6528.',
        customIntro: 'Known for its historic cottages, vibrant downtown arts district along Lake and Lucerne Avenues, and public beach complex, Lake Worth Beach combines Old Florida charm with active daily commerce. Pro Locksmith Tech brings on-site emergency vehicle unlocks, residential lock rekeying, and deadbolt installations directly to your location.',
        serviceHighlights: [
          'Historic cottage mortise lock restoration and modern brass deadbolt fitting in College Park',
          'Emergency beachside car lockout assistance near Lake Worth Beach Casino & Pier',
          'Commercial storefront security hardware along Lake Avenue and Dixie Highway',
          'Fast residential rekeying for newly purchased coastal homes'
        ]
      },
      {
        id: 'royal-palm-beach',
        slug: 'royal-palm-beach',
        name: 'Royal Palm Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33411', '33421'],
        keyHighways: ['Southern Blvd (FL-80)', 'Okeechobee Blvd', 'Royal Palm Beach Blvd', 'State Road 7'],
        popularAreas: ['Commons Park', 'Victoria Groves', 'Counterpoint Estates', 'La Mancha'],
        metaTitle: 'Locksmith Royal Palm Beach FL | 24/7 Mobile Service | Pro Locksmith Tech',
        metaDescription: 'Mobile locksmith in Royal Palm Beach, FL. Fast dispatch in Victoria Groves, Okeechobee Blvd & Commons Park. 24/7 home rekeys & car keys. Call +1 754-261-6528.',
        customIntro: 'Royal Palm Beach is a family-oriented municipality known for its parks, green spaces, and master-planned neighborhoods. Pro Locksmith Tech provides quick mobile locksmith dispatch for residents locked out of their homes, families needing smart locks installed, and drivers requiring car key programming along Southern and Okeechobee Boulevards.',
        serviceHighlights: [
          'Suburban single-family home deadbolt installation and rekeying across Victoria Groves and La Mancha',
          'Prompt automotive lockout dispatch at shopping centers along State Road 7 and Southern Blvd',
          'Keyless electronic keypad deadbolt installation for convenient family entry',
          'Patio sliding door auxiliary security lock installation'
        ]
      },
      {
        id: 'greenacres',
        slug: 'greenacres',
        name: 'Greenacres',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33413', '33415', '33463'],
        keyHighways: ['Lake Worth Rd', 'Forest Hill Blvd', 'Jog Rd', 'Military Trail'],
        popularAreas: ['River Bridge', 'Pine Ridge', 'Greenacres Community Park', 'Ramblewood'],
        metaTitle: 'Locksmith Greenacres FL | 24/7 Mobile Locksmith | Pro Locksmith Tech',
        metaDescription: '24/7 Mobile locksmith serving Greenacres, FL. Fast response in River Bridge, Jog Rd & Forest Hill Blvd. Emergency lockouts, keys & locks. Call +1 754-261-6528.',
        customIntro: 'Centrally located in Palm Beach County, Greenacres is a bustling suburban hub with established residential developments like River Bridge. Pro Locksmith Tech provides dependable, affordable mobile locksmith solutions with rapid arrival times.',
        serviceHighlights: [
          'Prompt residential house lockout and deadbolt rekeying in River Bridge and Pine Ridge',
          'Automotive transponder key programming along Lake Worth Road and Forest Hill Blvd',
          'Commercial store lock repairs and exit crash bar maintenance',
          'Broken key extraction from car doors, ignitions, and residential deadbolts'
        ]
      },
      {
        id: 'riviera-beach',
        slug: 'riviera-beach',
        name: 'Riviera Beach',
        countyId: 'palm-beach-county',
        countyName: 'Palm Beach County',
        zipCodes: ['33404'],
        keyHighways: ['I-95', 'Blue Heron Blvd', 'Broadway (US-1)', 'Ocean Ave (A1A)'],
        popularAreas: ['Riviera Beach Marina', 'Singer Island (part)', 'Inlet Village', 'Port of Palm Beach area'],
        metaTitle: 'Locksmith Riviera Beach FL | 24/7 Mobile Dispatch | Pro Locksmith Tech',
        metaDescription: 'Expert mobile locksmith in Riviera Beach, FL. Serving Riviera Beach Marina, Singer Island & Blue Heron Blvd. 24/7 car lockouts & rekeys. Call +1 754-261-6528.',
        customIntro: 'Riviera Beach bridges coastal maritime commerce at the Port of Palm Beach and the scenic barrier island of Singer Island. Pro Locksmith Tech delivers rapid mobile locksmith service for boaters, resort guests, and local homeowners needing immediate lock and key assistance.',
        serviceHighlights: [
          'Marine dock and marina vehicle lockout service near Riviera Beach Marina and Port of Palm Beach',
          'Saltwater-resistant heavy deadbolt installation for coastal and oceanfront properties',
          'Emergency automotive key cutting along Blue Heron Boulevard and Broadway',
          'Commercial warehouse and industrial perimeter gate lock hardware servicing'
        ]
      }
    ]
  }
];

// Helper functions for easy lookups
export function getAllCities(): { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation }[] {
  const result: { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation }[] = [];
  COUNTIES_DATA.forEach(county => {
    county.majorCities.forEach(city => {
      result.push({ city, county });
    });
  });
  return result;
}

export function getCountyBySlug(slug: string): CountyLocation | undefined {
  return COUNTIES_DATA.find(c => c.slug === slug);
}

export function getCityBySlug(slug: string): { city: typeof COUNTIES_DATA[0]['majorCities'][0]; county: CountyLocation } | undefined {
  for (const county of COUNTIES_DATA) {
    const city = county.majorCities.find(ct => ct.slug === slug);
    if (city) {
      return { city, county };
    }
  }
  return undefined;
}
