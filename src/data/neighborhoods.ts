export interface Neighborhood {
  slug: string;
  name: string;
  localContext: string;
  callNotes: string;
  service: 'automotive-locksmith' | 'residential-locksmith' | 'commercial-locksmith';
}

type NeighborhoodEntry = [name: string, localContext: string, callNotes: string, service: Neighborhood['service']];

const auto = 'automotive-locksmith';
const home = 'residential-locksmith';
const business = 'commercial-locksmith';

const coverage: Record<string, NeighborhoodEntry[]> = {
  'fort-lauderdale': [
    ['Victoria Park', 'Victoria Park is a neighborhood northeast of downtown with its own civic association and a city park on Victoria Park Road.', 'For a home lockout, say whether you are at a house, an apartment or a separate guest unit and which entrance you normally use.', home],
    ['Flagler Village', 'Flagler Village lies north of downtown. The city lists a neighborhood civic association for the area.', 'For a vehicle in a garage, give the garage entrance, level and parking space so dispatch can confirm access.', auto],
    ['Sailboat Bend', 'Sailboat Bend is west of downtown along the New River and has a city-recognized civic association.', 'For a residential lock that sticks, mention whether it binds with the door open or only after the door closes.', home],
  ],
  'hollywood': [
    ['Hollywood Hills', 'Hollywood Hills is inland from the beach and is associated with the area west of I-95 along Hollywood Boulevard.', 'For a move-in rekey, list the front, side and garage-entry locks you want checked.', home],
    ['Emerald Hills', 'Emerald Hills is in inland Hollywood near the Sheridan Street corridor.', 'If you are calling from a community with controlled access, give the visitor entrance and tell us how to reach the unit.', home],
  ],
  'pembroke-pines': [
    ['Chapel Trail', 'Chapel Trail is a residential community in western Pembroke Pines near the US-27 corridor.', 'Provide the subdivision name and visitor entrance when the street address alone may point to a resident gate.', home],
    ['Grand Palms', 'Grand Palms is a golf community near Pines Boulevard and I-75.', 'For a vehicle call, distinguish a residential address from a common parking or clubhouse area.', auto],
  ],
  'coral-springs': [
    ['Ramblewood', 'Ramblewood Park is a neighborhood park on NW 82nd Avenue with open play space beside the water.', 'For residential rekeying, make a list of exterior doors and mention if the garage entry uses a different key.', home],
    ['Forest Hills', 'Forest Hills Park is on Forest Hills Boulevard in Coral Springs.', 'For a vehicle near the park, give a street address or cross street and say whether the key is lost or locked inside.', auto],
    ['The Hills', 'The Hills subdivision is home to the city’s historic covered bridge just south of Wiles Road on NW 95th Avenue.', 'If using the bridge as a landmark, also provide the actual vehicle or property address and the nearest safe meeting point.', auto],
    ['Eagle Trace', 'Eagle Trace is a golf-course residential community in southwest Coral Springs, south of Royal Palm Boulevard.', 'If the vehicle is at the clubhouse or an event rather than a residence, name the parking entrance and where a technician can meet you.', auto],
    ['Cypress Run', 'Cypress Run is a Coral Springs neighborhood south of Royal Palm Boulevard.', 'For a door that is hard to lock, describe whether the key, handle or bolt is the part that sticks.', home],
  ],
  'pompano-beach': [
    ['Cypress Harbor', 'Cypress Harbor is a canal-side neighborhood in southeast Pompano Beach.', 'For an exterior door near the water, tell us whether the lock is sticking, visibly corroded or loose.', home],
    ['Palm Aire', 'Palm Aire is an inland Pompano Beach community near Powerline Road.', 'For a condo job, include the building number and visitor parking instructions as well as the unit number.', home],
  ],
  'miramar': [
    ['Silver Shores', 'Silver Shores is a residential community in western Miramar near the I-75 corridor.', 'Share the name of the entrance you use from the main road, since mapping apps may suggest a resident entrance.', home],
    ['Sunset Lakes', 'Sunset Lakes is a residential community in western Miramar built around lakes and neighborhood streets.', 'If a key is missing after a move, note which exterior doors share a key and whether any need repair.', home],
  ],
  'davie': [
    ['Shenandoah', 'Shenandoah is a residential community in western Davie near the I-595 corridor.', 'If your vehicle is parked away from the house, give its actual location along with the vehicle details.', auto],
    ['Ivanhoe', 'Ivanhoe is a residential area in western Davie near Sheridan Street.', 'For a lock that will not latch after closing, describe any rubbing or misalignment you noticed first.', home],
  ],
  'plantation': [
    ['Plantation Acres', 'Plantation Acres is west of central Plantation and includes residential properties along the Old Hiatus Road area.', 'Give the driveway location and tell us if the service door is on a separate building or behind a gate.', home],
    ['Jacaranda', 'Jacaranda is an established Plantation area with residential communities near the Pine Island Road corridor.', 'For a townhome or condo, confirm whether the lock is on your unit or a shared entry managed by the association.', home],
  ],
  'sunrise': [
    ['Welleby', 'Welleby is a residential area in central Sunrise. The city operates Welleby Park on NW 44th Street.', 'If you are calling from a park or community lot, give the entrance or nearest cross street along with the vehicle description.', auto],
    ['Sunrise Golf Village', 'Sunrise Golf Village is the original municipal name of Sunrise and is still used for residential areas of the city.', 'For an older exterior lock, describe the hardware and whether the key still turns when the door is open.', home],
  ],
  'deerfield-beach': [
    ['The Cove', 'The Cove is on the mainland near Hillsboro Boulevard and the Intracoastal Waterway.', 'Give the actual street address and say whether the job is at a house or a business near the waterfront.', home],
    ['Deer Creek', 'Deer Creek is a residential and golf community in west Deerfield Beach near Hillsboro Boulevard.', 'Name the specific community or building, since the Deer Creek name covers several residential streets.', home],
  ],
  'tamarac': [
    ['Woodmont', 'Woodmont is a residential and golf community in Tamarac near University Drive.', 'For a rekey, count the exterior doors and check whether the same key also operates a garage or patio entry.', home],
    ['Kings Point', 'Kings Point is a collection of residential communities in west Tamarac.', 'Provide the association or building name and explain any visitor check-in before dispatch.', home],
  ],
  'coconut-creek': [
    ['Winston Park', 'Winston Park is a residential community in north Coconut Creek. The city has a park of the same name.', 'Say whether the address is inside the community or near the park and describe which door or vehicle needs service.', home],
    ['Regency Lakes', 'Regency Lakes is a residential community in northern Coconut Creek near the State Road 7 corridor.', 'If a vehicle key is lost, share the exact parking location, year, make and model before arranging a visit.', auto],
  ],
  'margate': [
    ['Paradise Gardens', 'Paradise Gardens is a residential community in Margate with multiple sections.', 'Give the section and house number. If several door locks are involved, describe each entrance separately.', home],
    ['Coral Gate', 'Coral Gate is a Margate residential area near the northern part of the city.', 'For a condo call, give the building number and clarify whether a property manager needs to provide access.', home],
  ],
  'weston': [
    ['Bonaventure', 'Bonaventure is an established community in eastern Weston near Indian Trace and Bonaventure Boulevard.', 'Share the building or subdivision name because the Bonaventure name applies to more than one development.', home],
    ['Savanna', 'Savanna is a residential community in western Weston.', 'Clarify which Savanna entrance visitors should use and specify whether you need access to the home or your vehicle.', home],
  ],
  'miami': [
    ['Brickell', 'Brickell lies south of the Miami River and combines office towers, residences and retail.', 'Give the tower name and say whether the service is in a parking garage, a condo unit or an office suite.', auto],
    ['Coconut Grove', 'Coconut Grove is a historic bayside neighborhood of Miami with residences and a commercial center around Grand Avenue.', 'For a storefront lock problem, provide the shop entrance and say whether the door can still close and secure.', business],
    ['Little Havana', 'Little Havana is west of downtown Miami, with Calle Ocho as a major commercial corridor.', 'Give the storefront or residence address and distinguish the public entrance from any alley or service entrance.', business],
  ],
  'miami-beach': [
    ['South Beach', 'South Beach occupies the southern part of Miami Beach. Its street grid includes Ocean Drive and the Art Deco district.', 'For a garage or hotel vehicle call, share the nearest entrance and any height restriction or valet check-in.', auto],
    ['North Beach', 'North Beach is at the north end of Miami Beach and includes the area around the North Beach Bandshell.', 'For a unit lockout, identify the building and establish whether the issue is at the common entry or your unit door.', home],
  ],
  'hialeah': [
    ['Seminola', 'Seminola is a historic neighborhood in Hialeah with roots in the city’s early Black community.', 'For a home lock that no longer works, describe the type of door and whether a working spare is available.', home],
    ['Palm Springs Mile', 'Palm Springs Mile is a shopping corridor along West 49th Street in Hialeah.', 'Give the plaza and unit number and tell us whether the affected lock is on a storefront or a back door.', business],
  ],
  'coral-gables': [
    ['Cocoplum', 'Cocoplum is a waterfront residential community in southern Coral Gables.', 'Provide visitor entry instructions and say whether the requested work is on the front door, garage entry or another exterior door.', home],
    ['Miracle Mile', 'Miracle Mile is the downtown shopping and dining corridor along Coral Way in Coral Gables.', 'For a commercial call, include the suite number, the door affected and who is authorized to meet the technician.', business],
  ],
  'doral': [
    ['Downtown Doral', 'Downtown Doral is a mixed-use district that includes city offices, homes, shops and restaurants.', 'For a vehicle call, include the garage name, level and whether the vehicle is near an attendant-controlled entrance.', auto],
    ['Islands at Doral', 'Islands at Doral is a residential community in the northern part of Doral.', 'Provide the subdivision and entrance details, and say if the house has separate front and garage entry keys.', home],
  ],
  'aventura': [
    ['Williams Island', 'Williams Island is a waterfront residential community in Aventura near Maule Lake.', 'Tell us the tower or building number and ask the desk about any procedures for visitor parking or unit access.', home],
    ['The Waterways', 'The Waterways area of Aventura is organized around a marina and surrounding residences.', 'Distinguish the marina, shops and residential building when sharing the address, especially for a parking-lot call.', auto],
  ],
  'kendall': [
    ['Dadeland', 'Dadeland is a mixed-use area around Dadeland Mall and two Metrorail stations along the US-1 corridor.', 'Give the exact address, parking garage or storefront name, because a Dadeland mailing address can cover several nearby areas.', auto],
    ['Baptist Hospital Area', 'The Baptist Hospital campus anchors a section of the Kendall Drive corridor in unincorporated Miami-Dade.', 'For a vehicle at a medical campus, tell us the lot or garage name and which entrance can be used.', auto],
  ],
  'north-miami': [
    ['Keystone Point', 'Keystone Point is a canal-side residential community east of Biscayne Boulevard in North Miami.', 'For exterior lock work, describe exposure to weather and whether the problem is with the key or the door alignment.', home],
    ['Sans Souci', 'Sans Souci is a residential area of North Miami near Biscayne Bay.', 'Tell dispatch whether the job is at a single-family house or a multifamily property and give the correct access point.', home],
  ],
  'sunny-isles-beach': [
    ['Newport Fishing Pier Area', 'Newport Fishing Pier is at the south end of Sunny Isles Beach near the Intracoastal crossing on Sunny Isles Boulevard.', 'For a key or lockout call, say whether the vehicle is in a public lot, hotel valet area or secured garage.', auto],
    ['Collins Avenue Oceanfront', 'Collins Avenue, also signed A1A, is the main north-south corridor serving the beachfront towers in Sunny Isles Beach.', 'Use the street number and building name, and tell us which entrance or valet desk can direct a visitor.', home],
  ],
  'south-miami': [
    ['Sunset Drive District', 'Sunset Drive runs through the downtown South Miami shopping district near the South Miami Metrorail station.', 'For a business lock problem, share the suite number and tell us if the door is on Sunset Drive or faces a courtyard.', business],
    ['South Miami Hospital Area', 'South Miami Hospital is near the intersection of US-1 and SW 62nd Avenue.', 'State the garage or lot and the vehicle’s level or row so the exact service location can be confirmed.', auto],
  ],
  'pinecrest': [
    ['Suniland', 'Suniland Park is in the southern part of Pinecrest on the South Dixie Highway corridor.', 'If using the park as a landmark, provide the actual address and specify whether the work involves a residence or a car.', auto],
    ['Pinecrest Gardens Area', 'Pinecrest Gardens is a village landmark on SW 57th Avenue at the former Parrot Jungle site.', 'For a residential visit near the gardens, give the house number and any access instructions for a long or gated driveway.', home],
  ],
  'miami-gardens': [
    ['Carol City', 'Carol City is a long-established community name in Miami Gardens.', 'For a home rekey, list which household members need copies and note any door that already has a separate key.', home],
    ['Stadium District', 'Hard Rock Stadium and its surrounding lots are near NW 199th Street in Miami Gardens.', 'Event traffic can affect access. Give your lot, row or gate and ask where a technician can meet you safely.', auto],
  ],
  'west-palm-beach': [
    ['Grandview Heights', 'Grandview Heights is a historic residential district just south of downtown West Palm Beach.', 'For a lock on an older door, describe existing hardware before deciding whether to keep it or consider a replacement.', home],
    ['Northwood Village', 'Northwood Village is a neighborhood shopping district north of downtown along Northwood Road.', 'For shop hardware, say whether the affected door is glass and aluminum, wood or another construction.', business],
  ],
  'boca-raton': [
    ['Old Floresta', 'Old Floresta is a historic district associated with Addison Mizner’s 1920s development in Boca Raton.', 'If the door has original hardware you want to preserve, mention that when asking whether a repair or rekey is suitable.', home],
    ['Pearl City', 'Pearl City is Boca Raton’s oldest surviving neighborhood. It was established in 1915 for Black residents south of today’s Glades Road.', 'Identify the actual street and door or vehicle involved, especially if a nearby main road is more familiar than the residential address.', home],
    ['Downtown Boca Raton', 'Mizner Park is a landmark in downtown Boca Raton with residences, shops and public spaces.', 'For a vehicle call downtown, state the garage name and level or the exact surface lot where you parked.', auto],
  ],
  'delray-beach': [
    ['Pineapple Grove Arts District', 'Pineapple Grove is a downtown arts district along NE 2nd Avenue north of Atlantic Avenue.', 'For a shop call, give the suite and specify whether the lock is on the public entry or a rear service door.', business],
    ['Lake Ida', 'Lake Ida is the lake and residential area north of downtown Delray Beach.', 'For a house lockout near the lake, give the street address because several streets and parks reference Lake Ida.', home],
  ],
  'boynton-beach': [
    ['Boynton Harbor Marina Area', 'Boynton Harbor Marina sits on the Intracoastal Waterway near East Ocean Avenue.', 'Describe which lot or curb your vehicle is in and whether there is a staffed entrance or restricted vehicle access.', auto],
    ['Quantum Park', 'Quantum Park is a business and employment area near I-95 in Boynton Beach.', 'Give the building, tenant suite and affected entrance, and arrange for an authorized contact to meet the technician.', business],
  ],
  'jupiter': [
    ['Abacoa', 'Abacoa is a 2,055-acre planned community with neighborhoods, businesses and a town center.', 'Give the Abacoa subdivision or parking lot name and tell us if the vehicle is in public parking or a controlled garage.', auto],
    ['The Bluffs', 'The Bluffs is a coastal residential community near the southern end of Jupiter.', 'Provide the specific Bluffs section and unit or house number, along with any building or association access instructions.', home],
  ],
  'wellington': [
    ['Olympia', 'Olympia is a residential community near the State Road 7 corridor in Wellington.', 'Share the section name and visitor gate before a residential lock service call.', home],
    ['Aero Club', 'Aero Club is a Wellington residential community developed around a private runway.', 'Provide the street-side vehicle entrance and the exact door or vehicle that needs help.', home],
  ],
  'palm-beach-gardens': [
    ['BallenIsles', 'BallenIsles is a golf and residential community near PGA Boulevard in Palm Beach Gardens.', 'Tell us the neighborhood within BallenIsles and identify the guest gate and address.', home],
    ['PGA National', 'PGA National is a resort and residential area west of Florida’s Turnpike in Palm Beach Gardens.', 'If calling from a vehicle, say whether it is at the resort, a residence or another property within the community.', auto],
  ],
  'lake-worth': [
    ['College Park', 'College Park is a residential historic district at the north end of Lake Worth Beach.', 'For an older exterior door, mention any original handle or hardware you would like to keep.', home],
    ['Sunset Ridge', 'Sunset Ridge is an inland Lake Worth Beach neighborhood with a city park of the same name.', 'Share the address and confirm whether the work is at a home or in a lot near the park.', home],
  ],
  'royal-palm-beach': [
    ['La Mancha', 'La Mancha is an established residential area in Royal Palm Beach near the Okeechobee Boulevard corridor.', 'For a home rekey, describe which locks still work and whether keys are shared across entrances.', home],
    ['Counterpoint Estates', 'Counterpoint Estates is a residential neighborhood in Royal Palm Beach near State Road 7.', 'For driveway vehicle service, share your year, make and model and tell us if a working key is available.', auto],
  ],
  'greenacres': [
    ['River Bridge', 'River Bridge is a residential community near Forest Hill Boulevard in Greenacres.', 'Give the neighborhood or building within River Bridge and a visitor approach if the community controls access.', home],
    ['Pine Ridge', 'Pine Ridge identifies several residential associations in Greenacres.', 'Include the complete Pine Ridge association name and building or unit number before confirming dispatch.', home],
  ],
  'riviera-beach': [
    ['Singer Island', 'Riviera Beach includes part of Singer Island. The Blue Heron Boulevard bridge connects the island to the mainland.', 'Specify whether the job is on the island side or mainland side of the bridge and include the building name or parking area.', auto],
    ['Marina District', 'The Riviera Beach Marina Village is on the mainland waterfront by the Intracoastal Waterway.', 'For a commercial call, share the business address, door location and where an authorized contact can meet the technician.', business],
  ],
};

export function neighborhoodPath(city: string, neighborhood: string): string {
  return `/service-areas/${city}/${neighborhood}`;
}

export function getNeighborhoods(city: string): Neighborhood[] {
  return (Object.hasOwn(coverage, city) ? coverage[city] : []).map(([name, localContext, callNotes, service]) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    name,
    localContext,
    callNotes,
    service,
  }));
}
