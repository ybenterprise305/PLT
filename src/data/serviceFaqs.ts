/** Direct service-specific answers, shared by the visible page and FAQ JSON-LD.
 * Avoid claiming specific prices, customer jobs, arrival guarantees or vehicle compatibility.
 */
export interface ServiceFaq { question: string; answer: string }
const serviceFaqs: Record<string, ServiceFaq[]> = {
  'emergency-lockout-service': [
    {question:'What should I do when I am locked out of my car or home?',answer:'Call Pro Locksmith Tech for mobile lockout service. Our technicians can come to your vehicle, home or business and assess the lock at the door.'},
    {question:'Can you come to my location for a lockout?',answer:'Pro Locksmith Tech is a mobile locksmith business serving areas of South Florida. Call (754) 261-6528 to discuss your location and the lockout service you need.'},
    {question:'Can a locksmith open a lock without damaging it?',answer:'Depending on the lock, its condition and the circumstances, a locksmith may be able to use non-destructive entry methods. The technician assesses the lock before choosing an appropriate approach.'}
  ],
  'residential-locksmith': [
    {question:'What types of home locks can a mobile locksmith service?',answer:'Residential locksmith services include house lockouts, lock installation, repairs, replacement and rekeying. The right approach depends on the door, hardware and existing lock condition.'},
    {question:'Should I rekey my locks after moving into a home?',answer:'Rekeying can be a practical option when existing locks are in good condition and compatible. It changes which keys operate the locks without necessarily replacing all the hardware.'},
    {question:'Can a locksmith come to my location?',answer:'Yes. Our equipped locksmiths come directly to your location throughout South Florida, with same-day and emergency service available.'}
  ],
  'commercial-locksmith': [
    {question:'Can you service locks at a storefront or office?',answer:'Pro Locksmith Tech offers mobile commercial locksmith services, including supported door locks, hardware and lock changes. Call to discuss the type of door and service required.'},
    {question:'What is a master key system?',answer:'A master key system allows different authorized keys to open selected locks while a master key operates a defined group. The design depends on compatible hardware and your access needs.'},
    {question:'Can a business arrange locksmith service outside normal hours?',answer:'Pro Locksmith Tech accepts calls 24 hours a day. Contact the team for availability and the locksmith service your business needs.'}
  ],
  'automotive-locksmith': [
    {question:'Can a locksmith make a car key without the original?',answer:'For many vehicles, a locksmith can produce a compatible replacement key without an existing working key. The options depend on the vehicle year, make, model and key system.'},
    {question:'What if my car key fob stops working?',answer:'A nonworking key fob may have a battery, programming or hardware issue. A locksmith can review the symptoms and explain available key replacement or programming options.'},
    {question:'Can mobile car key service be performed where the vehicle is parked?',answer:'Many car lockout, replacement key and programming services can be performed at the vehicle. Call Pro Locksmith Tech with the vehicle information and location to confirm service availability.'}
  ],
  'lock-repair': [
    {question:'What causes a door lock to stick?',answer:'A sticking lock can result from door misalignment, wear, debris or a damaged cylinder. Forcing the key can worsen the problem, so it is best to have the lock examined.'},
    {question:'Can a damaged lock be repaired instead of replaced?',answer:'Sometimes. Whether repair is practical depends on the lock type, damage and availability of compatible parts. A technician can assess the hardware before recommending a solution.'},
    {question:'Do you come to the property to repair locks?',answer:'Yes. Pro Locksmith Tech provides mobile locksmith services in South Florida. Call to discuss the lock type and your location.'}
  ],
  'lock-replacement': [
    {question:'When should I replace a door lock?',answer:'Replacement may be appropriate when a lock is damaged, unreliable, incompatible with your security needs or not suitable for rekeying. A functioning compatible lock may need only a rekey.'},
    {question:'Is replacing a lock the same as rekeying it?',answer:'No. Replacement changes the lock hardware. Rekeying changes which keys operate an existing compatible lock. The best option depends on its condition and your goals.'},
    {question:'Can new locks be installed at my home or business?',answer:'Pro Locksmith Tech offers mobile installation and replacement of supported residential and commercial locks. Call to discuss the door and hardware.'}
  ],
  'lock-rekeying': [
    {question:'What does it mean to rekey a lock?',answer:'Rekeying changes a compatible lock cylinder so it works with a different key. It can be useful when you have moved, lost keys or want to change who has access.'},
    {question:'Is rekeying different from changing the whole lock?',answer:'Yes. Rekeying generally retains the existing compatible hardware, while replacement installs new hardware. A worn or damaged lock may need replacement instead.'},
    {question:'Can multiple locks use one key?',answer:'Some compatible locks can be configured to use the same key. Compatibility depends on the lock brands and keyways, so ask the locksmith to assess your hardware.'}
  ],
  'key-duplication': [
    {question:'Can a locksmith copy a vehicle key?',answer:'Many conventional and compatible electronic vehicle keys can be duplicated, but some require special programming. Availability depends on the key and vehicle system.'},
    {question:'Can all types of keys be duplicated?',answer:'Not every key can be duplicated with the same equipment. Restricted or specialized designs and electronic systems may have additional requirements. Call with the type of key you need.'},
    {question:'Can a locksmith come to my location?',answer:'Yes. Our equipped locksmiths come directly to your location throughout South Florida, with same-day and emergency service available.'}
  ],
  'key-replacement': [
    {question:'What if I lost my only car key?',answer:'A mobile automotive locksmith may be able to create and program a compatible replacement without the original. The options vary by vehicle model, year and security system.'},
    {question:'Is a replacement key always the same as a duplicate?',answer:'A duplicate copies an existing key. Replacement may involve identifying the correct key type, cutting it and, for some vehicles, programming an electronic chip or remote.'},
    {question:'Can a new key be made at my location?',answer:'Many replacement key services can be performed on-site by mobile locksmiths. Call Pro Locksmith Tech to confirm your key type and service availability.'}
  ],
  'lock-installation': [
    {question:'Can you install a new deadbolt?',answer:'Pro Locksmith Tech provides mobile lock and deadbolt installation for supported door hardware. The best fit depends on the door material, existing openings and lock type.'},
    {question:'Should I install a smart lock or a traditional deadbolt?',answer:'Both can be useful. Smart locks add electronic access options, while traditional deadbolts use mechanical keys. Choose based on your door compatibility, budget and access needs.'},
    {question:'Will a new lock fit my current door?',answer:'Compatibility depends on the existing door preparation and lock dimensions. A locksmith can review the existing hardware before recommending an installation.'}
  ],
  'security-hardware': [
    {question:'What counts as door security hardware?',answer:'Door security hardware can include deadbolts, strike plates, latch assemblies, reinforced parts and commercial door components. The right equipment depends on the property and door.'},
    {question:'Can security hardware be installed on an existing door?',answer:'Some compatible upgrades can be installed without replacing the door. A locksmith can assess the existing hardware and explain suitable options.'},
    {question:'Do you provide mobile service for business doors?',answer:'Yes. Pro Locksmith Tech offers mobile commercial locksmith and door-hardware services in South Florida. Call to discuss the door and required work.'}
  ],
  'emergency-locksmith-service': [
    {question:'What locksmith emergencies can you help with?',answer:'Common locksmith emergencies include car and home lockouts, lost keys, broken keys and malfunctioning locks. Pro Locksmith Tech offers mobile locksmith services across its South Florida coverage area.'},
    {question:'Is your locksmith service available at night?',answer:'Yes. Pro Locksmith Tech accepts locksmith service calls 24 hours a day, seven days a week. Call to confirm current availability at your location.'},
    {question:'Can a locksmith come to my location?',answer:'Yes. Our equipped locksmiths come directly to your location throughout South Florida, with same-day and emergency service available.'}
  ]
};
export function getServiceFaqs(slug: string): ServiceFaq[] { return serviceFaqs[slug] || serviceFaqs['emergency-locksmith-service']; }
