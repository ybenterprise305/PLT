export interface Neighborhood {
  slug: string;
  name: string;
  localContext: string;
  serviceDetail: string;
  service: 'automotive-locksmith' | 'residential-locksmith' | 'commercial-locksmith';
}

type NeighborhoodEntry = [name: string, localContext: string, serviceDetail: string, service: Neighborhood['service']];

const auto = 'automotive-locksmith';
const home = 'residential-locksmith';
const business = 'commercial-locksmith';

const coverage: Record<string, NeighborhoodEntry[]> = {
  'fort-lauderdale': [
    ['Victoria Park', 'Victoria Park is a neighborhood northeast of downtown with its own civic association and a city park on Victoria Park Road.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
    ['Flagler Village', 'Flagler Village lies north of downtown. The city lists a neighborhood civic association for the area.', 'Locked out or missing a key? We come to the vehicle with mobile locksmith equipment and can discuss entry or on-site key replacement.', auto],
    ['Sailboat Bend', 'Sailboat Bend is west of downtown along the New River and has a city-recognized civic association.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
  ],
  'hollywood': [
    ['Hollywood Hills', 'Hollywood Hills is inland from the beach and is associated with the area west of I-95 along Hollywood Boulevard.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
    ['Emerald Hills', 'Emerald Hills is in inland Hollywood near the Sheridan Street corridor.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
  ],
  'pembroke-pines': [
    ['Chapel Trail', 'Chapel Trail is a residential community in western Pembroke Pines near the US-27 corridor.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['Grand Palms', 'Grand Palms is a golf community near Pines Boulevard and I-75.', 'Our technicians can meet you at the vehicle in a lot or garage. We bring equipment for cutting and programming compatible replacement keys.', auto],
  ],
  'coral-springs': [
    ['Ramblewood', 'Ramblewood Park is a neighborhood park on NW 82nd Avenue with open play space beside the water.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
    ['Forest Hills', 'Forest Hills Park is on Forest Hills Boulevard in Coral Springs.', 'Whether the keys are inside the car or a remote stopped responding, call us for mobile help. We can discuss the service that fits the problem.', auto],
    ['The Hills', 'The Hills subdivision is home to the city’s historic covered bridge just south of Wiles Road on NW 95th Avenue.', 'We come to vehicles at homes, garages and parking lots. If the key is gone, we can discuss a replacement that can be cut or programmed on site.', auto],
    ['Eagle Trace', 'Eagle Trace is a golf-course residential community in southwest Coral Springs, south of Royal Palm Boulevard.', 'We help with ordinary vehicle lockouts and replacement keys, including compatible fobs. Call us to arrange service at the car.', auto],
    ['Cypress Run', 'Cypress Run is a Coral Springs neighborhood south of Royal Palm Boulevard.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
  ],
  'pompano-beach': [
    ['Cypress Harbor', 'Cypress Harbor is a canal-side neighborhood in southeast Pompano Beach.', 'If your exterior lock is loose, sticking or worn, we can come to your door and evaluate repair, rekeying or replacement.', home],
    ['Palm Aire', 'Palm Aire is an inland Pompano Beach community near Powerline Road.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
  ],
  'miramar': [
    ['Silver Shores', 'Silver Shores is a residential community in western Miramar near the I-75 corridor.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
    ['Sunset Lakes', 'Sunset Lakes is a residential community in western Miramar built around lakes and neighborhood streets.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
  ],
  'davie': [
    ['Shenandoah', 'Shenandoah is a residential community in western Davie near the I-595 corridor.', 'Locked out or missing a key? We come to the vehicle with mobile locksmith equipment and can discuss entry or on-site key replacement.', auto],
    ['Ivanhoe', 'Ivanhoe is a residential area in western Davie near Sheridan Street.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
  ],
  'plantation': [
    ['Plantation Acres', 'Plantation Acres is west of central Plantation and includes residential properties along the Old Hiatus Road area.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['Jacaranda', 'Jacaranda is an established Plantation area with residential communities near the Pine Island Road corridor.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
  ],
  'sunrise': [
    ['Welleby', 'Welleby is a residential area in central Sunrise. The city operates Welleby Park on NW 44th Street.', 'Our technicians can meet you at the vehicle in a lot or garage. We bring equipment for cutting and programming compatible replacement keys.', auto],
    ['Sunrise Golf Village', 'Sunrise Golf Village is the original municipal name of Sunrise and is still used for residential areas of the city.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
  ],
  'deerfield-beach': [
    ['The Cove', 'The Cove is on the mainland near Hillsboro Boulevard and the Intracoastal Waterway.', 'If your exterior lock is loose, sticking or worn, we can come to your door and evaluate repair, rekeying or replacement.', home],
    ['Deer Creek', 'Deer Creek is a residential and golf community in west Deerfield Beach near Hillsboro Boulevard.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
  ],
  'tamarac': [
    ['Woodmont', 'Woodmont is a residential and golf community in Tamarac near University Drive.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
    ['Kings Point', 'Kings Point is a collection of residential communities in west Tamarac.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
  ],
  'coconut-creek': [
    ['Winston Park', 'Winston Park is a residential community in north Coconut Creek. The city has a park of the same name.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
    ['Regency Lakes', 'Regency Lakes is a residential community in northern Coconut Creek near the State Road 7 corridor.', 'Whether the keys are inside the car or a remote stopped responding, call us for mobile help. We can discuss the service that fits the problem.', auto],
  ],
  'margate': [
    ['Paradise Gardens', 'Paradise Gardens is a residential community in Margate with multiple sections.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['Coral Gate', 'Coral Gate is a Margate residential area near the northern part of the city.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
  ],
  'weston': [
    ['Bonaventure', 'Bonaventure is an established community in eastern Weston near Indian Trace and Bonaventure Boulevard.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
    ['Savanna', 'Savanna is a residential community in western Weston.', 'If your exterior lock is loose, sticking or worn, we can come to your door and evaluate repair, rekeying or replacement.', home],
  ],
  'miami': [
    ['Brickell', 'Brickell lies south of the Miami River and combines office towers, residences and retail.', 'We come to vehicles at homes, garages and parking lots. If the key is gone, we can discuss a replacement that can be cut or programmed on site.', auto],
    ['Coconut Grove', 'Coconut Grove is a historic bayside neighborhood of Miami with residences and a commercial center around Grand Avenue.', 'We service business entry locks on site, including sticking cylinders and doors that will not latch. A technician can assess repair or replacement.', business],
    ['Little Havana', 'Little Havana is west of downtown Miami, with Calle Ocho as a major commercial corridor.', 'After a tenant or staff change, we can rekey compatible business locks and assess worn entrance hardware.', business],
  ],
  'miami-beach': [
    ['South Beach', 'South Beach occupies the southern part of Miami Beach. Its street grid includes Ocean Drive and the Art Deco district.', 'We help with ordinary vehicle lockouts and replacement keys, including compatible fobs. Call us to arrange service at the car.', auto],
    ['North Beach', 'North Beach is at the north end of Miami Beach and includes the area around the North Beach Bandshell.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
  ],
  'hialeah': [
    ['Seminola', 'Seminola is a historic neighborhood in Hialeah with roots in the city’s early Black community.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
    ['Palm Springs Mile', 'Palm Springs Mile is a shopping corridor along West 49th Street in Hialeah.', 'If a shop door will not secure at closing time, call us for mobile commercial service. We can check the lock, latch and alignment at the door.', business],
  ],
  'coral-gables': [
    ['Cocoplum', 'Cocoplum is a waterfront residential community in southern Coral Gables.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
    ['Miracle Mile', 'Miracle Mile is the downtown shopping and dining corridor along Coral Way in Coral Gables.', 'We come to storefronts and offices for lock changes, rekeying and damaged entry hardware. We can work with the business or property manager.', business],
  ],
  'doral': [
    ['Downtown Doral', 'Downtown Doral is a mixed-use district that includes city offices, homes, shops and restaurants.', 'Locked out or missing a key? We come to the vehicle with mobile locksmith equipment and can discuss entry or on-site key replacement.', auto],
    ['Islands at Doral', 'Islands at Doral is a residential community in the northern part of Doral.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
  ],
  'aventura': [
    ['Williams Island', 'Williams Island is a waterfront residential community in Aventura near Maule Lake.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['The Waterways', 'The Waterways area of Aventura is organized around a marina and surrounding residences.', 'Our technicians can meet you at the vehicle in a lot or garage. We bring equipment for cutting and programming compatible replacement keys.', auto],
  ],
  'kendall': [
    ['Dadeland', 'Dadeland is a mixed-use area around Dadeland Mall and two Metrorail stations along the US-1 corridor.', 'Whether the keys are inside the car or a remote stopped responding, call us for mobile help. We can discuss the service that fits the problem.', auto],
    ['Baptist Hospital Area', 'The Baptist Hospital campus anchors a section of the Kendall Drive corridor in unincorporated Miami-Dade.', 'We come to vehicles at homes, garages and parking lots. If the key is gone, we can discuss a replacement that can be cut or programmed on site.', auto],
  ],
  'north-miami': [
    ['Keystone Point', 'Keystone Point is a canal-side residential community east of Biscayne Boulevard in North Miami.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
    ['Sans Souci', 'Sans Souci is a residential area of North Miami near Biscayne Bay.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
  ],
  'sunny-isles-beach': [
    ['Newport Fishing Pier Area', 'Newport Fishing Pier is at the south end of Sunny Isles Beach near the Intracoastal crossing on Sunny Isles Boulevard.', 'We help with ordinary vehicle lockouts and replacement keys, including compatible fobs. Call us to arrange service at the car.', auto],
    ['Collins Avenue Oceanfront', 'Collins Avenue, also signed A1A, is the main north-south corridor serving the beachfront towers in Sunny Isles Beach.', 'If your exterior lock is loose, sticking or worn, we can come to your door and evaluate repair, rekeying or replacement.', home],
  ],
  'south-miami': [
    ['Sunset Drive District', 'Sunset Drive runs through the downtown South Miami shopping district near the South Miami Metrorail station.', 'We service business entry locks on site, including sticking cylinders and doors that will not latch. A technician can assess repair or replacement.', business],
    ['South Miami Hospital Area', 'South Miami Hospital is near the intersection of US-1 and SW 62nd Avenue.', 'Locked out or missing a key? We come to the vehicle with mobile locksmith equipment and can discuss entry or on-site key replacement.', auto],
  ],
  'pinecrest': [
    ['Suniland', 'Suniland Park is in the southern part of Pinecrest on the South Dixie Highway corridor.', 'Our technicians can meet you at the vehicle in a lot or garage. We bring equipment for cutting and programming compatible replacement keys.', auto],
    ['Pinecrest Gardens Area', 'Pinecrest Gardens is a village landmark on SW 57th Avenue at the former Parrot Jungle site.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
  ],
  'miami-gardens': [
    ['Carol City', 'Carol City is a long-established community name in Miami Gardens.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
    ['Stadium District', 'Hard Rock Stadium and its surrounding lots are near NW 199th Street in Miami Gardens.', 'Whether the keys are inside the car or a remote stopped responding, call us for mobile help. We can discuss the service that fits the problem.', auto],
  ],
  'west-palm-beach': [
    ['Grandview Heights', 'Grandview Heights is a historic residential district just south of downtown West Palm Beach.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
    ['Northwood Village', 'Northwood Village is a neighborhood shopping district north of downtown along Northwood Road.', 'After a tenant or staff change, we can rekey compatible business locks and assess worn entrance hardware.', business],
  ],
  'boca-raton': [
    ['Old Floresta', 'Old Floresta is a historic district associated with Addison Mizner’s 1920s development in Boca Raton.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
    ['Pearl City', 'Pearl City is Boca Raton’s oldest surviving neighborhood. It was established in 1915 for Black residents south of today’s Glades Road.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['Downtown Boca Raton', 'Mizner Park is a landmark in downtown Boca Raton with residences, shops and public spaces.', 'We come to vehicles at homes, garages and parking lots. If the key is gone, we can discuss a replacement that can be cut or programmed on site.', auto],
  ],
  'delray-beach': [
    ['Pineapple Grove Arts District', 'Pineapple Grove is a downtown arts district along NE 2nd Avenue north of Atlantic Avenue.', 'If a shop door will not secure at closing time, call us for mobile commercial service. We can check the lock, latch and alignment at the door.', business],
    ['Lake Ida', 'Lake Ida is the lake and residential area north of downtown Delray Beach.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
  ],
  'boynton-beach': [
    ['Boynton Harbor Marina Area', 'Boynton Harbor Marina sits on the Intracoastal Waterway near East Ocean Avenue.', 'We help with ordinary vehicle lockouts and replacement keys, including compatible fobs. Call us to arrange service at the car.', auto],
    ['Quantum Park', 'Quantum Park is a business and employment area near I-95 in Boynton Beach.', 'We come to storefronts and offices for lock changes, rekeying and damaged entry hardware. We can work with the business or property manager.', business],
  ],
  'jupiter': [
    ['Abacoa', 'Abacoa is a 2,055-acre planned community with neighborhoods, businesses and a town center.', 'Locked out or missing a key? We come to the vehicle with mobile locksmith equipment and can discuss entry or on-site key replacement.', auto],
    ['The Bluffs', 'The Bluffs is a coastal residential community near the southern end of Jupiter.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
  ],
  'wellington': [
    ['Olympia', 'Olympia is a residential community near the State Road 7 corridor in Wellington.', 'If your exterior lock is loose, sticking or worn, we can come to your door and evaluate repair, rekeying or replacement.', home],
    ['Aero Club', 'Aero Club is a Wellington residential community developed around a private runway.', 'We come to your home for a lockout or a lock that will not turn. A technician can assess the door on site and explain the options.', home],
  ],
  'palm-beach-gardens': [
    ['BallenIsles', 'BallenIsles is a golf and residential community near PGA Boulevard in Palm Beach Gardens.', 'A rekey can give you new keys while keeping sound door hardware. We can check whether several compatible doors can share one key.', home],
    ['PGA National', 'PGA National is a resort and residential area west of Florida’s Turnpike in Palm Beach Gardens.', 'Our technicians can meet you at the vehicle in a lot or garage. We bring equipment for cutting and programming compatible replacement keys.', auto],
  ],
  'lake-worth': [
    ['College Park', 'College Park is a residential historic district at the north end of Lake Worth Beach.', 'A key that binds or a deadbolt that sticks can come from worn hardware or a door that has shifted. We can check both at your door.', home],
    ['Sunset Ridge', 'Sunset Ridge is an inland Lake Worth Beach neighborhood with a city park of the same name.', 'Our mobile service covers entry-door lockouts, damaged locks and move-in rekeys. Call us to discuss a visit at your residence.', home],
  ],
  'royal-palm-beach': [
    ['La Mancha', 'La Mancha is an established residential area in Royal Palm Beach near the Okeechobee Boulevard corridor.', 'When a key goes missing, we can rekey compatible exterior locks so old keys no longer work. We also assess worn cylinders that need replacement.', home],
    ['Counterpoint Estates', 'Counterpoint Estates is a residential neighborhood in Royal Palm Beach near State Road 7.', 'Whether the keys are inside the car or a remote stopped responding, call us for mobile help. We can discuss the service that fits the problem.', auto],
  ],
  'greenacres': [
    ['River Bridge', 'River Bridge is a residential community near Forest Hill Boulevard in Greenacres.', 'If you want to keep an existing handle or historic hardware, our technician can assess the lock for repair or rekeying at your property.', home],
    ['Pine Ridge', 'Pine Ridge identifies several residential associations in Greenacres.', 'We can help with lockouts and lock repairs at houses and individual condo units. Our dispatch team can coordinate arrival on a managed property.', home],
  ],
  'riviera-beach': [
    ['Singer Island', 'Riviera Beach includes part of Singer Island. The Blue Heron Boulevard bridge connects the island to the mainland.', 'We come to vehicles at homes, garages and parking lots. If the key is gone, we can discuss a replacement that can be cut or programmed on site.', auto],
    ['Marina District', 'The Riviera Beach Marina Village is on the mainland waterfront by the Intracoastal Waterway.', 'We service business entry locks on site, including sticking cylinders and doors that will not latch. A technician can assess repair or replacement.', business],
  ],
};

export function neighborhoodPath(city: string, neighborhood: string): string {
  return `/service-areas/${city}/${neighborhood}`;
}

export function getNeighborhoods(city: string): Neighborhood[] {
  return (Object.hasOwn(coverage, city) ? coverage[city] : []).map(([name, localContext, serviceDetail, service]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    name,
    localContext,
    serviceDetail,
    service,
  }));
}
