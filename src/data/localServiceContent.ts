type LocalText = { en: string; es: string };
type Service = 'automotive-locksmith' | 'commercial-locksmith' | 'residential-locksmith' | 'emergency-lockout-service' | 'key-replacement' | 'lock-rekeying' | 'lock-replacement';
type Guide = 'vehicle-key-compatibility' | 'locksmith-pricing-factors' | 'lockout-what-to-do' | 'business-key-handover' | 'rental-lock-changes';

interface LocalHelp {
  service: Service;
  guide: Guide;
  title: LocalText;
  detail: LocalText;
}

export const localServiceLabels: Record<Service, LocalText> = {
  'automotive-locksmith': { en: 'Automotive locksmith', es: 'Cerrajería de autos' },
  'commercial-locksmith': { en: 'Commercial locksmith', es: 'Cerrajería comercial' },
  'residential-locksmith': { en: 'Residential locksmith', es: 'Cerrajería residencial' },
  'emergency-lockout-service': { en: 'Emergency lockouts', es: 'Aperturas de emergencia' },
  'key-replacement': { en: 'Key replacement', es: 'Reemplazo de llaves' },
  'lock-rekeying': { en: 'Lock rekeying', es: 'Cambio de combinación de cerraduras' },
  'lock-replacement': { en: 'Lock replacement', es: 'Reemplazo de cerraduras' },
};

const guides: Record<Guide, LocalText> = {
  'vehicle-key-compatibility': { en: 'Check car key and fob compatibility', es: 'Compatibilidad de llaves y controles' },
  'locksmith-pricing-factors': { en: 'What affects locksmith pricing', es: 'Factores que influyen en el precio' },
  'lockout-what-to-do': { en: 'What to do during a lockout', es: 'Qué hacer si se queda fuera' },
  'business-key-handover': { en: 'Business key handover', es: 'Entrega de llaves comerciales (en inglés)' },
  'rental-lock-changes': { en: 'Lock changes for rentals', es: 'Cambiar cerraduras en un alquiler (en inglés)' },
};

export function getLocalGuide(guide: Guide, lang: keyof LocalText): [string, string] {
  return [guides[guide][lang], '/tips/' + guide];
}

export const countyServiceContent: Record<string, LocalText> = {
  'broward-county': {
    en: 'Find mobile locksmith coverage in the Broward communities listed below, from Coral Springs and Margate to Fort Lauderdale and Hollywood. Call us for mobile car key, home lock and commercial door service.',
    es: 'Consulte las localidades de Broward que atendemos, desde Coral Springs y Margate hasta Fort Lauderdale y Hollywood. Llámenos para pedir ayuda móvil con llaves de auto, cerraduras de casa o puertas comerciales.',
  },
  'miami-dade-county': {
    en: 'We provide mobile help at vehicles, homes and businesses in the listed Miami-Dade communities. The City of Miami and nearby communities such as Doral and unincorporated Kendall have separate listings. Call us for help at a vehicle, residence or business.',
    es: 'Ofrecemos atención móvil para autos, viviendas y negocios en las comunidades de Miami-Dade que aparecen abajo. La ciudad de Miami, Doral y Kendall, que es una zona no incorporada, tienen páginas propias. Llámenos para pedir ayuda en su vehículo, vivienda o negocio.',
  },
  'palm-beach-county': {
    en: 'Start with the listed Palm Beach County communities to find mobile service in places such as Boca Raton, West Palm Beach and Jupiter. Our technicians come to you for car keys, lock changes, rekeying and emergency openings.',
    es: 'Busque su localidad en la lista del condado de Palm Beach, que incluye Boca Raton, West Palm Beach y Jupiter. Nuestros técnicos van hasta usted para llaves de auto, cambios de cerradura, cambios de combinación y aperturas de emergencia.',
  },
};

type HelpRow = [Service, Guide, string, string, string, string];
const priorityHelp: Record<string, HelpRow> = {
  'coral-springs': ['key-replacement', 'vehicle-key-compatibility', 'Lost or spare car keys', 'Llaves de auto perdidas o de repuesto', 'In Coral Springs, we can cut a spare or make a compatible replacement when every key is lost. We bring key-cutting and programming equipment to your car.', 'En Coral Springs, podemos cortar una copia o fabricar una llave compatible si se perdieron todas. Llevamos el equipo de corte y programación hasta su auto.'],
  'fort-lauderdale': ['commercial-locksmith', 'business-key-handover', 'Office and retail door locks', 'Cerraduras para oficinas y comercios', 'We come to offices and retail spaces in Fort Lauderdale. A mobile technician can assess an entrance that will not latch, replace a worn cylinder or rekey compatible locks after a handover.', 'Vamos a oficinas y comercios en Fort Lauderdale. Un técnico puede revisar una puerta que no traba, cambiar un cilindro desgastado o cambiar la combinación tras la entrega de un local.'],
  'margate': ['lock-rekeying', 'locksmith-pricing-factors', 'Change access after a move', 'Cambie el acceso tras una mudanza', 'Lost a key or moved into a home in Margate? Rekeying can give you new keys while keeping working hardware. We can check whether compatible doors can share one key.', '¿Perdió una llave o se mudó a Margate? Podemos cambiar la combinación para darle llaves nuevas y conservar los herrajes que funcionan. También podemos evaluar si varias puertas compatibles pueden usar una sola llave.'],
  'tamarac': ['residential-locksmith', 'rental-lock-changes', 'Home and community access', 'Acceso a viviendas y comunidades', 'Our technicians come to houses and condos in Tamarac for lockouts, rekeying and lock repair. Our dispatch team can coordinate a visit to a gated community or multi-building property.', 'Nuestros técnicos van a casas y condominios en Tamarac para aperturas, cambios de combinación y reparaciones. Podemos coordinar la visita a una comunidad con acceso controlado o varios edificios.'],
  'hollywood': ['emergency-lockout-service', 'lockout-what-to-do', 'Vehicle or building lockout', 'Apertura de autos y viviendas', 'From beachside parking to residential streets in Hollywood, we come to your vehicle or property. We can help with keys locked inside, lost car keys or home doors that will not open.', 'Desde estacionamientos cerca de la playa hasta zonas residenciales de Hollywood, vamos a su vehículo o propiedad. Podemos ayudar si quedaron las llaves dentro, desapareció una llave o la puerta de casa no abre.'],
  'pompano-beach': ['commercial-locksmith', 'locksmith-pricing-factors', 'A storefront door that will not secure', 'Una puerta de comercio que no cierra bien', 'When a Pompano Beach storefront only latches if you pull it tight, our technician can check alignment, the latch and the cylinder at the door. Call us for mobile commercial service.', 'Si la puerta de un comercio en Pompano Beach solo traba al jalarla, nuestro técnico puede revisar la alineación, el pestillo y el cilindro en el lugar. Llámenos para pedir cerrajería comercial móvil.'],
  'boca-raton': ['automotive-locksmith', 'vehicle-key-compatibility', 'Car key help that comes to you', 'Ayuda con llaves de auto donde esté', 'A dead remote or missing key can leave you stuck at home or in a downtown Boca Raton garage. We can discuss on-site replacement, including compatible remote and push-to-start options.', 'Un control dañado o una llave perdida puede dejarlo varado en casa o en un garaje del centro de Boca Raton. Ofrecemos reemplazo en el lugar para controles y llaves de botón compatibles.'],
  'coconut-creek': ['residential-locksmith', 'locksmith-pricing-factors', 'Help at your door', 'Ayuda en la puerta de su vivienda', 'We come to homes and condos in Coconut Creek for entry door lockouts, repairs and rekeying. For common doors, we can also work with building management to restore access.', 'Vamos a casas y condominios en Coconut Creek para aperturas, reparaciones y cambios de combinación. También podemos trabajar con la administración para restablecer el acceso a puertas comunes.'],
  'deerfield-beach': ['key-replacement', 'vehicle-key-compatibility', 'Replacement car keys and remotes', 'Reemplazo de llaves y controles', 'Whether a remote stopped responding or you lost the key during an outing in Deerfield Beach, call us. We can assess the existing key and discuss a suitable replacement at the car.', 'Si el control dejó de responder o perdió la llave durante una salida en Deerfield Beach, llámenos. Podemos revisar la llave existente y ofrecer un reemplazo compatible en el lugar.'],
  'davie': ['emergency-lockout-service', 'lockout-what-to-do', 'Mobile lockout help', 'Aperturas con servicio móvil', 'Locked out of a car at a campus or large property in Davie? We can come to your parking lot or garage and help you get back into the vehicle.', '¿Se quedó fuera del auto en un campus o una propiedad grande de Davie? Podemos ir al estacionamiento o garaje y ayudarle a recuperar el acceso al vehículo.'],
  'plantation': ['commercial-locksmith', 'business-key-handover', 'Changing access after a handover', 'Cambios de acceso al entregar un local', 'We help Plantation businesses change access after a handover. A technician can evaluate which locks can be rekeyed and which worn or damaged hardware needs repair first.', 'Ayudamos a negocios en Plantation a cambiar el acceso tras la entrega de un local. Un técnico puede evaluar qué cerraduras se pueden recombinar y qué herrajes necesitan reparación.'],
  'sunrise': ['key-replacement', 'vehicle-key-compatibility', 'Replacement keys at your vehicle', 'Llaves de reemplazo donde esté su auto', 'Lost a key at an event or shopping center in Sunrise? We can meet you at the car and assess on-site replacement for a key or fob that operates the ignition.', '¿Perdió una llave en un evento o centro comercial de Sunrise? Podemos ir hasta su auto y evaluar un reemplazo compatible que también lo encienda.'],
  'pembroke-pines': ['lock-rekeying', 'locksmith-pricing-factors', 'Rekeying after a move', 'Cambio de combinación al mudarse', 'Moving into a Pembroke Pines home? We can rekey working front, side and garage-entry locks and explain whether compatible doors can use the same key.', '¿Se muda a una casa en Pembroke Pines? Podemos cambiar la combinación de las cerraduras en buen estado de las puertas principales, laterales y del garaje, y evaluar si pueden usar una sola llave.'],
  'miramar': ['residential-locksmith', 'rental-lock-changes', 'Lock service at your home', 'Servicio de cerraduras en su vivienda', 'We come to Miramar homes and gated communities for a lockout, a rekey or a sticking door lock. Our team can coordinate the visit with the resident or property manager.', 'Vamos a viviendas y comunidades privadas de Miramar para aperturas, cambios de combinación y cerraduras atascadas. Nuestro equipo puede coordinar la visita con el residente o la administración.'],
  'miami': ['emergency-lockout-service', 'lockout-what-to-do', 'Lockout help across Miami', 'Ayuda móvil para aperturas en Miami', 'Locked out at a condo, parking garage or business in Miami? Our dispatch team can coordinate a mobile visit to the affected door or vehicle.', '¿Se quedó fuera en un condominio, un garaje o un negocio de Miami? Nuestro equipo puede coordinar una visita móvil hasta la puerta o el vehículo.'],
  'hialeah': ['commercial-locksmith', 'business-key-handover', 'Commercial entry and cylinder repair', 'Reparación de entradas y cilindros comerciales', 'We come to shops and offices in Hialeah for sticking locks, doors that will not latch and access changes. A technician can check the hardware on site and discuss repair or replacement.', 'Vamos a comercios y oficinas de Hialeah para resolver cerraduras atascadas, puertas que no traban y cambios de acceso. Un técnico puede revisar los herrajes y explicar las opciones.'],
  'doral': ['automotive-locksmith', 'vehicle-key-compatibility', 'Garage and vehicle access', 'Acceso al garaje y al vehículo', 'We can meet you at your car in a Doral garage or business complex for a lockout or replacement key. Our technicians bring their key equipment to the vehicle.', 'Podemos ir hasta su auto en un garaje o centro de negocios de Doral para una apertura o una llave nueva. Nuestros técnicos llevan el equipo directamente al vehículo.'],
  'west-palm-beach': ['commercial-locksmith', 'locksmith-pricing-factors', 'Business door hardware', 'Herrajes de puertas comerciales', 'If a West Palm Beach shop or office door will not close securely, we can assess the latch, cylinder and alignment. We can also change access for rekeyable locks without replacing sound hardware.', 'Si una puerta de un comercio u oficina en West Palm Beach no cierra bien, podemos revisar el pestillo, el cilindro y la alineación. También podemos cambiar la combinación sin sustituir herrajes en buen estado.'],
  'delray-beach': ['commercial-locksmith', 'business-key-handover', 'Lock service while your business operates', 'Cerrajería durante el horario de su negocio', 'We work with Delray Beach businesses on repair and rekeying for customer and service entrances. We can discuss how to keep another entrance available during the work.', 'Trabajamos con negocios de Delray Beach para reparar y cambiar la combinación de las entradas de clientes y de servicio. Podemos planear el trabajo para mantener otra entrada disponible.'],
  'boynton-beach': ['lock-rekeying', 'locksmith-pricing-factors', 'Keep working hardware after a move', 'Conserve los herrajes en buen estado al mudarse', 'Rekeying changes which keys open a working lock. In Boynton Beach, we can assess whether several doors can share one key and check sticking locks for repair or replacement.', 'Cambiar la combinación permite usar llaves nuevas en una cerradura que funciona. En Boynton Beach, podemos evaluar si varias puertas pueden compartir una llave y revisar las cerraduras que se atascan.'],
  'jupiter': ['lock-replacement', 'locksmith-pricing-factors', 'Repair or replace an exterior lock', 'Repare o cambie una cerradura exterior', 'We come to Jupiter homes to assess sticking deadbolts, failing keypads and exterior locks that will not secure. A technician can explain the on-site repair and replacement options.', 'Vamos a viviendas en Jupiter para revisar cerrojos trabados, teclados que fallan y cerraduras exteriores que no cierran. Un técnico puede explicar las opciones de reparación y reemplazo en el lugar.'],
};

export function getLocalHelp(slug: string): LocalHelp | undefined {
  const row = priorityHelp[slug];
  if (!row) return undefined;
  const [service, guide, titleEn, titleEs, detailEn, detailEs] = row;
  return { service, guide, title: { en: titleEn, es: titleEs }, detail: { en: detailEn, es: detailEs } };
}

export const nearbyServiceAreas: Partial<Record<string, readonly string[]>> = {
  'coral-springs': ['margate', 'tamarac', 'coconut-creek'],
  'margate': ['coral-springs', 'coconut-creek', 'tamarac'],
  'tamarac': ['coral-springs', 'margate', 'sunrise'],
  'fort-lauderdale': ['plantation', 'pompano-beach', 'hollywood'],
  'hollywood': ['fort-lauderdale', 'davie', 'pembroke-pines'],
  'pompano-beach': ['deerfield-beach', 'coconut-creek', 'fort-lauderdale'],
  'boca-raton': ['deerfield-beach', 'delray-beach'],
};
