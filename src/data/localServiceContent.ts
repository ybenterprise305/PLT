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
  'business-key-handover': { en: 'Business key handover checklist', es: 'Lista para la entrega de llaves comerciales (en inglés)' },
  'rental-lock-changes': { en: 'Lock changes for rentals', es: 'Cambiar cerraduras en un alquiler (en inglés)' },
};

export function getLocalGuide(guide: Guide, lang: keyof LocalText): [string, string] {
  return [guides[guide][lang], '/tips/' + guide];
}

export const countyServiceContent: Record<string, LocalText> = {
  'broward-county': {
    en: 'Find mobile locksmith coverage in the Broward communities listed below, from Coral Springs and Margate to Fort Lauderdale and Hollywood. The city pages link to nearby areas and explain which service fits the problem. For a vehicle in a garage or a property with a visitor gate, call with the entrance details.',
    es: 'Consulte las localidades de Broward que atendemos, desde Coral Springs y Margate hasta Fort Lauderdale y Hollywood. Las páginas locales enlazan a zonas cercanas y explican qué servicio puede ayudar. Si su vehículo está en un garaje o la propiedad tiene entrada controlada, indique por dónde se puede acceder.',
  },
  'miami-dade-county': {
    en: 'We provide mobile help at vehicles, homes and businesses in the listed Miami-Dade communities. The City of Miami and nearby communities such as Doral and unincorporated Kendall have separate listings. Use the actual service address if a mailing address or building name could point to a different area.',
    es: 'Ofrecemos atención móvil para autos, viviendas y negocios en las comunidades de Miami-Dade que aparecen abajo. La ciudad de Miami, Doral y Kendall, que es una zona no incorporada, tienen páginas propias. Indique la dirección exacta si el nombre postal o del edificio puede causar confusión.',
  },
  'palm-beach-county': {
    en: 'Start with the listed Palm Beach County communities to find mobile service in places such as Boca Raton, West Palm Beach and Jupiter. For a car key call, say whether you have a working key. For a lock change or rekey, describe how many doors need service so we can discuss pricing factors.',
    es: 'Busque su localidad en la lista del condado de Palm Beach, que incluye Boca Raton, West Palm Beach y Jupiter. Si necesita una llave de auto, comente si le queda alguna que funcione. Para cambiar una cerradura o su combinación, indique cuántas puertas requieren servicio.',
  },
};

type HelpRow = [Service, Guide, string, string, string, string];
const priorityHelp: Record<string, HelpRow> = {
  'coral-springs': ['key-replacement', 'vehicle-key-compatibility', 'Lost car key or spare?', '¿Perdió la llave o necesita una de repuesto?', 'In Coral Springs, start by telling us whether every key is missing or you still have one that starts the car. That distinction affects the on-site options. If the vehicle is near Ramblewood Park, give its actual parking location instead of only the park name.', 'En Coral Springs, indique si perdió todas las llaves o si todavía tiene una que enciende el auto. Eso influye en las opciones disponibles. Si el vehículo está cerca de Ramblewood Park, diga dónde está estacionado.'],
  'fort-lauderdale': ['commercial-locksmith', 'business-key-handover', 'Storefront or managed building access', 'Acceso a un local o edificio administrado', 'For an office or storefront near downtown, tell us which entrance is affected and who handles access for the property. In a building with multiple entrances or a parking structure, an exact entrance or loading address can prevent confusion.', 'Para una oficina o un comercio cerca del centro, indique qué entrada falla y quién administra el acceso. Si el edificio tiene varias entradas o un garaje, dé la dirección de la entrada que debemos usar.'],
  'margate': ['lock-rekeying', 'locksmith-pricing-factors', 'One door or several locks?', '¿Una puerta o varias cerraduras?', 'For a move or missing key in Margate, count the exterior locks and let us know which ones share a key. An undamaged lock may suit a rekey, while loose or broken hardware may need repair or replacement.', 'Si se mudó o perdió una llave en Margate, cuente las cerraduras exteriores e indique cuáles comparten llave. Si el herraje está en buen estado, puede bastar un cambio de combinación. Una pieza rota o floja puede requerir reparación o reemplazo.'],
  'tamarac': ['residential-locksmith', 'rental-lock-changes', 'Home and community access', 'Acceso a viviendas y comunidades', 'Tamarac is part of our South Florida mobile service area. We come to your address. If you live in a building or community with controlled access, tell us where visitors can enter and whether the lock belongs to your unit or a shared door.', 'Tamarac forma parte de nuestra zona de atención móvil en el sur de Florida. Vamos a su dirección. Si vive en un edificio o una comunidad con acceso controlado, indique la entrada de visitantes y si la cerradura es de su vivienda o de una puerta común.'],
  'hollywood': ['emergency-lockout-service', 'lockout-what-to-do', 'Vehicle or building lockout', '¿Se quedó fuera del auto o del edificio?', 'When calling from Hollywood, distinguish a beachside parking area from a downtown or residential address. Tell us whether the problem is a key locked inside a vehicle, a missing key or a door that will not open with the key you have.', 'Si llama desde Hollywood, aclare si está en un estacionamiento cerca de la playa, en el centro o en una vivienda. Indique si la llave quedó dentro del vehículo, si se perdió o si la puerta no abre con la llave que tiene.'],
  'pompano-beach': ['commercial-locksmith', 'locksmith-pricing-factors', 'A storefront door that will not secure', 'Una puerta de comercio que no cierra bien', 'If a Pompano Beach storefront door latches only when you pull it into place, describe that symptom when you call. It can help distinguish a hardware or alignment problem from a bad key. Name the affected entrance if the unit has a front and a service door.', 'Si la puerta de un local en Pompano Beach solo traba al jalarla, descríbalo al llamar. Eso ayuda a distinguir un problema de alineación o herraje de una llave dañada. Indique cuál entrada falla si hay una puerta principal y otra de servicio.'],
  'boca-raton': ['automotive-locksmith', 'vehicle-key-compatibility', 'Car key help in a lot or garage', 'Ayuda con llaves de auto en un estacionamiento', 'Downtown Boca has street and lot parking. Give the lot or garage name, level if applicable and vehicle location. If the remote stopped responding but you still have a key that starts the car, mention it when asking about replacement.', 'En el centro de Boca hay estacionamiento en la calle y en lotes. Indique el nombre del estacionamiento, el nivel si corresponde y la ubicación del vehículo. Si el control dejó de responder pero aún tiene una llave que enciende el auto, coméntelo al consultar por un reemplazo.'],
  'coconut-creek': ['residential-locksmith', 'locksmith-pricing-factors', 'Access to your unit', 'Acceso a su vivienda', 'For a Coconut Creek community with several buildings, share the building number and the visitor entrance. If the lock is on a common door, have the property manager arrange the service.', 'Si su comunidad en Coconut Creek tiene varios edificios, indique el número de edificio y la entrada de visitantes. Si la cerradura es de una puerta común, coordine el servicio con la administración.'],
  'deerfield-beach': ['key-replacement', 'vehicle-key-compatibility', 'Identify the vehicle access issue', 'Identifique el problema de acceso al vehículo', 'A remote that stopped responding has a different set of options from a key lost during an outing. Share which parts of the key or remote still work and where the car is accessible.', 'Un control que dejó de responder tiene opciones distintas a las de una llave perdida. Indique qué funciones de la llave o control todavía sirven y dónde se puede acceder al auto.'],
  'davie': ['emergency-lockout-service', 'lockout-what-to-do', 'Separate the address from the meeting point', 'Distinga la dirección del punto de encuentro', 'For a vehicle at a large property or campus in Davie, share the entrance that leads to your lot and tell us where the vehicle is parked. A building address alone may lead to a different lot.', 'Si el auto está en una propiedad grande o un campus de Davie, indique qué entrada lleva al estacionamiento y dónde quedó el vehículo. La dirección del edificio puede llevar a otro lote.'],
  'plantation': ['commercial-locksmith', 'business-key-handover', 'Changing access after a handover', 'Cambios de acceso al entregar un local', 'For a business handover, list the doors that should change access and any shared entrances the property manager controls. That helps decide which locks can be rekeyed and which need a different service.', 'Al entregar un local, haga una lista de las puertas cuyo acceso debe cambiar y de las entradas comunes que controla la administración. Así se puede determinar cuáles cerraduras se pueden recombinar y cuáles requieren otro servicio.'],
  'sunrise': ['key-replacement', 'vehicle-key-compatibility', 'Vehicle keys at a busy property', 'Llaves de auto en un lugar concurrido', 'If you are at a shopping or event property, give the parking section and the nearest safe meeting point. Tell us whether you need access to the vehicle or a key that also starts it.', 'Si está en un comercio o un evento, indique la sección del estacionamiento y un lugar seguro para encontrarnos. Diga si necesita abrir el vehículo o también una llave que lo encienda.'],
  'pembroke-pines': ['lock-rekeying', 'locksmith-pricing-factors', 'Plan a move-in rekey', 'Prepare el cambio de combinación al mudarse', 'Count the front, side and garage-entry locks separately. If the property has a visitor gate, let us know which entrance is open to visitors before the visit.', 'Cuente por separado las cerraduras de la puerta principal, lateral y de acceso desde el garaje. Si hay acceso controlado, indique qué entrada pueden usar los visitantes.'],
  'miramar': ['residential-locksmith', 'rental-lock-changes', 'Schedule access for the right entrance', 'Coordine el acceso por la entrada correcta', 'For a gated Miramar property, confirm the visitor entrance with the resident or manager. If a lock affects the tenancy or shared access, coordinate with the person authorized to request the change.', 'Para una propiedad con acceso controlado en Miramar, confirme la entrada de visitantes con el residente o la administración. Si la cerradura afecta un alquiler o un acceso compartido, coordine con la persona autorizada.'],
  'miami': ['emergency-lockout-service', 'lockout-what-to-do', 'Give the actual service address', 'Indique la dirección exacta', 'A Miami mailing address can be different from the city or neighborhood where service is needed. Give the building, garage or storefront entrance as well as the street address, especially if it has multiple entrances.', 'Una dirección postal de Miami puede corresponder a otra localidad. Además de la dirección, indique por qué entrada del edificio, garaje o comercio se puede acceder, sobre todo si hay varias.'],
  'hialeah': ['commercial-locksmith', 'business-key-handover', 'Confirm the storefront or suite', 'Identifique el local o la unidad', 'When several businesses share an address, give the suite number or door marking and identify who can authorize work. Tell us whether the lock sticks, the door will not latch or access needs to change.', 'Si varios comercios comparten dirección, indique el número del local o cómo identificar la puerta y quién puede autorizar el trabajo. Diga si la cerradura se atasca, la puerta no traba o necesita cambiar el acceso.'],
  'doral': ['automotive-locksmith', 'vehicle-key-compatibility', 'Garage and vehicle access', 'Acceso al garaje y al vehículo', 'For service in a managed garage or business complex, provide the entrance, level and the vehicle’s parking location. Mention if building staff need to grant access to the garage.', 'Para un servicio en un garaje administrado o un centro de negocios, indique la entrada, el nivel y el lugar donde está el auto. Comente si el personal del edificio debe autorizar el ingreso.'],
  'west-palm-beach': ['commercial-locksmith', 'locksmith-pricing-factors', 'Business door hardware', 'Herrajes de puertas comerciales', 'If you need service for a West Palm Beach shop or office, say which door is affected and what happens when it latches. Discuss whether you need the existing hardware repaired or the keys changed.', 'Para un comercio u oficina en West Palm Beach, indique qué puerta falla y qué pasa al cerrarla. Comente si necesita reparar los herrajes existentes o cambiar las llaves.'],
  'delray-beach': ['commercial-locksmith', 'business-key-handover', 'Coordinate work at an occupied business', 'Coordine el trabajo en un negocio abierto', 'Tell us which entrance can be worked on and who can meet us. If another entrance needs to remain in use, make that clear before we discuss the work.', 'Indique en qué entrada se puede trabajar y quién puede atendernos. Si hay otra entrada que debe seguir en uso, indíquelo al hablar del trabajo.'],
  'boynton-beach': ['lock-rekeying', 'locksmith-pricing-factors', 'Keep compatible hardware after a move', 'Conserve los herrajes compatibles al mudarse', 'A rekey can change which keys open a working lock. Share which entrances use the same key and which locks are sticking or need replacement.', 'El cambio de combinación puede cambiar las llaves que abren una cerradura en buen estado. Indique qué entradas comparten llave y cuáles cerraduras se atascan o deben reemplazarse.'],
  'jupiter': ['lock-replacement', 'locksmith-pricing-factors', 'Describe the lock as well as the door', 'Describa la cerradura y la puerta', 'If an exterior lock has a keypad or a separate deadbolt, explain which part has failed and whether the door closes normally. This helps identify an on-site repair or replacement option.', 'Si la cerradura exterior tiene teclado o un cerrojo separado, explique qué pieza falló y si la puerta cierra normalmente. Esto ayuda a evaluar una reparación o un reemplazo en el lugar.'],
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
