import { PAYMENT_METHODS } from '../config/business';
export type ResourceLink = readonly [label: string, href: string];

interface GuideText {
  title: string;
  summary: string;
  sections: readonly (readonly [heading: string, ...paragraphs: string[]])[];
  comparison?: { caption: string; columns: readonly string[]; rows: readonly (readonly string[])[] };
}

export interface LocksmithGuide extends GuideText {
  slug: string;
  category: 'Automotive' | 'Residential' | 'Commercial' | 'Emergency' | 'Pricing';
  service: ResourceLink;
  related: readonly ResourceLink[];
  sources?: readonly ResourceLink[];
  es?: GuideText & { service: ResourceLink; related?: readonly ResourceLink[] };
}

const priceComparison: ResourceLink = ['Consumer Reports: car key replacement comparison', 'https://www.consumerreports.org/car-maintenance/how-to-replace-your-car-key-fob/'];
const ford: ResourceLink = ['Ford owner manual: replacing a lost key or remote', 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2134031&Uid=G2309772&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G1405311&userMarket=USA&vFilteringEnabled=False&variantid=9379'];
const toyota: ResourceLink = ['Toyota owner manuals and warranty information', 'https://www.toyota.com/owners/warranty-owners-manuals'];
const rekey: ResourceLink = ['Schlage guidance on rekeying its locks', 'https://schlage-res.zendesk.com/hc/en-us/articles/39886333039636-Can-I-Rekey-My-Schlage-Lock'];
const exits: ResourceLink = ['OSHA guidance on workplace exit routes', 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36'];
const fire: ResourceLink = ['Allegion: panic hardware and fire exit hardware', 'https://kc.allegion.com/kb/article/what-is-the-difference-between-panic-hardware-and-fire-exit-hardware/'];
const auto: ResourceLink = ['Automotive locksmith and key programming', '/services/automotive-locksmith'];
const keys: ResourceLink = ['Mobile car key replacement', '/services/key-replacement'];
const home: ResourceLink = ['Residential locksmith services', '/services/residential-locksmith'];
const business: ResourceLink = ['Commercial locksmith services', '/services/commercial-locksmith'];
const urgent: ResourceLink = ['24/7 emergency lockout service', '/services/emergency-lockout-service'];
const compatibility: ResourceLink = ['Car key and fob compatibility guide', '/tips/vehicle-key-compatibility'];
const pricing: ResourceLink = ['Locksmith pricing factors', '/tips/locksmith-pricing-factors'];

export const LOCKSMITH_TIPS_DATA: LocksmithGuide[] = [
  {
    slug: 'vehicle-key-compatibility',
    title: 'How to identify a compatible car key or fob',
    summary: 'A look-alike key may unlock a door and still fail to start the car. Pro Locksmith Tech can help identify the right replacement, cut it and program it at your vehicle.',
    category: 'Automotive', service: keys, related: [auto, pricing, ['Spare key versus all keys lost', '/blog/spare-car-key-vs-all-keys-lost']], sources: [ford, toyota, priceComparison],
    comparison: {
      caption: 'What a replacement may need to do',
      columns: ['Key type', 'What to confirm'],
      rows: [
        ['Mechanical blade', 'The physical cut and whether the vehicle also checks an electronic chip.'],
        ['Transponder key', 'The blade, chip compatibility and whether the vehicle must recognize the chip.'],
        ['Remote or proximity fob', 'Remote buttons, passive access, starting and any emergency blade are separate functions to check.'],
      ],
    },
    sections: [
      ['What makes a key compatible?', 'Identical-looking fobs can use different electronics. Our mobile team can check the blade, chip, buttons and starting system and explain which replacement works for your vehicle.'],
      ['Does your fob need a battery or replacement?', 'A shorter range can indicate a weak battery. If the remote is damaged or the vehicle will not recognize it, we can assess the problem and explain the options before you buy another fob.'],
      ['Cutting, programming and testing in one visit', 'Pro Locksmith Tech can supply a compatible replacement, cut its blade where applicable, program it and test the functions you need. Call even if every key is missing. We will guide you through the next steps.'],
      ['A mobile alternative to a dealership trip', 'On-site cutting and programming can save an extra trip or tow. Consumer Reports documented a locksmith replacement that cost less than a local dealer quote. Savings vary by vehicle and key. Call us to discuss an on-site option.'],
    ],
    es: {
      title: 'Cómo saber qué llave o control es compatible con su auto',
      summary: 'Una llave puede tener la misma forma y aun así no arrancar el auto. Antes de comprar, confirme el vehículo exacto, el tipo de llave y las funciones que necesita.',
      service: ['Reemplazo de llaves de auto', '/services/key-replacement'],
      related: [['Cerrajería de autos', '/services/automotive-locksmith'], ['Factores que afectan el precio', '/tips/locksmith-pricing-factors']],
      comparison: {caption: 'Qué comprobar según el tipo de llave', columns: ['Tipo', 'Qué confirmar'], rows: [
        ['Llave metálica', 'El corte y si el auto también exige un chip.'],
        ['Llave con transpondedor', 'Compatibilidad de la llave y el chip, y si el auto debe reconocerlo.'],
        ['Control remoto o de proximidad', 'Botones, apertura por proximidad, arranque y llave de emergencia, si aplica.'],
      ]},
      sections: [
        ['Qué hace compatible una llave', 'Dos controles que parecen iguales pueden usar circuitos distintos. Nuestro equipo móvil puede revisar el tipo de llave, el chip, los botones y el sistema de arranque para explicarle cuál le conviene.'],
        ['Revise la pila antes de comprar otro control', 'Si el alcance disminuyó, consulte el tipo de pila y las indicaciones del fabricante. Cambiarla no resolverá daños físicos ni hará compatible un control que no corresponde al auto. Si fallan dos controles, conviene revisar también el vehículo.'],
        ['Corte, programación y prueba en una sola visita', 'Podemos suministrar un repuesto compatible, cortar la hoja si corresponde, programar el control y comprobar sus funciones. Llámenos aunque haya perdido todas las llaves. Le orientaremos desde el primer momento.'],
        ['Una alternativa a llevar el auto al concesionario', 'El corte y la programación en el lugar pueden ahorrarle un viaje o una grúa. Consumer Reports documentó un caso en que el servicio de cerrajería costó menos que el presupuesto del concesionario. El ahorro depende del vehículo y la llave. Llámenos para consultar sus opciones.'],
      ],
    },
  },
  {
    slug: 'locksmith-pricing-factors', title: 'What affects the price of locksmith service?',
    summary: 'The job, hardware and service location shape the estimate. Ask what it covers and what would change the total before approving work.',
    category: 'Pricing', service: ['Contact dispatch about an estimate', '/contact'], related: [keys, ['Car key programming cost factors', '/blog/how-much-does-car-key-programming-cost'], ['Lock rekeying', '/services/lock-rekeying']],
    comparison: { caption: 'Questions to ask for a comparable estimate', columns: ['Service', 'Ask about'], rows: [
      ['Lockout', 'What the visit and opening include, and when extra work would need approval.'],
      ['Rekey or replace', 'How many locks and keys are included, and whether new hardware or repair is needed.'],
      ['Car key replacement', 'The part, blade cutting, programming, verification and whether a working key is available.'],
      ['Commercial door', 'Whether the fault is in the lock, the door alignment or another component, and who can assess any rated opening.'],
    ]},
    sections: [
      ['What determines the estimate?', 'An opening, a key that will not turn and an all-keys-lost job involve different work. Hardware and the type of electronic key also affect the scope. Call and our team will help you understand what the job involves.'],
      ['Understand what the service includes', 'Our team explains the expected work, the parts involved and what may depend on an on-site assessment. For a replacement car key, cutting the blade and programming the electronics are distinct steps that can be handled in one visit.'],
      ['Confirm added work before it begins', `A damaged lock or incompatible fob can change the work involved. Our technician can explain those changes before starting any additional work. We accept ${PAYMENT_METHODS.en}.`],
    ],
    es: {
      title: 'Qué afecta el precio de un servicio de cerrajería',
      summary: 'El trabajo, las piezas y la ubicación influyen en el presupuesto. Pregunte qué incluye y qué podría cambiar el total antes de autorizar el servicio.',
      service: ['Contactar para consultar un presupuesto', '/contact'],
      related: [['Reemplazo de llaves de auto', '/services/key-replacement'], ['Cambio de combinación de cerraduras', '/services/lock-rekeying']],
      comparison: { caption: 'Preguntas para comparar presupuestos', columns: ['Servicio', 'Qué preguntar'], rows: [
        ['Apertura', 'Qué incluye la visita y cuándo se solicitaría su aprobación para trabajo adicional.'],
        ['Cambio de combinación o cerradura', 'Cuántas cerraduras y llaves incluye, y si hacen falta piezas nuevas.'],
        ['Llave de auto', 'Si incluye el repuesto, corte, programación y prueba de funciones.'],
      ]},
      sections: [
        ['Qué determina el presupuesto', 'Una apertura, una llave que no gira y un reemplazo cuando se han perdido todas las copias requieren trabajos distintos. Al llamar, nuestro equipo le ayudará a entender qué servicio y componentes podrían hacer falta.'],
        ['Qué incluye el servicio', 'Le explicamos el trabajo previsto y qué se confirma al revisar la cerradura o el vehículo. El corte de una llave y la programación del chip son pasos distintos que podemos realizar en la misma visita cuando corresponda.'],
        ['Confirme el trabajo adicional', `Una cerradura dañada o un control incompatible puede cambiar el trabajo. Nuestro técnico puede explicarle los cambios antes de comenzar el trabajo adicional. Aceptamos ${PAYMENT_METHODS.es}.`],
      ],
    },
  },
  {
    slug: 'lockout-what-to-do', title: 'Locked out? How to decide what help you need',
    summary: 'Locked out of your car, home or business? Call Pro Locksmith Tech. We offer mobile help around the clock and can come to your location.',
    category: 'Emergency', service: urgent,
    related: [['Vehicle lockout guidance', '/blog/what-to-do-when-locked-out-of-car'], ['Home lockout guidance', '/blog/what-to-do-when-locked-out-of-house'], pricing],
    sections: [
      ['Mobile help for a car, home or business lockout', 'Call Pro Locksmith Tech for a routine lockout. Our mobile team can assist at your vehicle, home or business. If the key was lost or broken, we can discuss restoring everyday access as well as opening the door.'],
      ['How the mobile visit works', 'Call and tell us what happened. Our team will discuss availability, help coordinate a technician to your location and explain the next steps. We work at homes, businesses, parking garages and gated communities.'],
      ['Opening the door and restoring access', 'A key left inside calls for a different solution from a broken key or a failed latch. Our technician can assess the lock and explain whether opening, repair or a replacement key will solve the problem.'],
    ],
    es: {
      title: 'Qué ayuda pedir si se queda sin acceso',
      summary: '¿Se quedó fuera de su auto, vivienda o negocio? Llame a Pro Locksmith Tech. Ofrecemos atención móvil las 24 horas y vamos a su ubicación.',
      service: ['Aperturas de emergencia las 24 horas', '/services/emergency-lockout-service'],
      related: [['Factores que afectan el precio', '/tips/locksmith-pricing-factors'], ['Contacto de servicio móvil', '/contact']],
      sections: [
        ['Ayuda móvil para autos, viviendas y negocios', 'Si se quedó fuera de su vehículo, vivienda o negocio, llame a Pro Locksmith Tech. Si perdió la llave o se rompió, podemos orientarle para recuperar el acceso habitual además de abrir la puerta.'],
        ['Cómo coordinamos la visita', 'Llámenos y cuéntenos qué pasó. Revisaremos la disponibilidad, coordinaremos un técnico y le explicaremos los siguientes pasos. Acudimos a viviendas, comercios, garajes y comunidades con acceso controlado.'],
        ['Recupere el acceso a su propiedad', 'Una llave que quedó dentro, una llave rota y un pestillo averiado requieren soluciones distintas. Podemos revisar la cerradura para determinar si conviene abrirla, repararla o reemplazar la llave.'],
      ],
    },
  },
  {
    slug: 'rental-lock-changes',
    title: 'Changing locks at a rental property',
    summary: 'Need to change access at a rental? Pro Locksmith Tech can come to the property and explain whether a rekey or a lock replacement suits the door.',
    category: 'Residential', service: home, related: [['Compare rekeying and replacement', '/blog/rekeying-vs-changing-locks-difference'], ['Residential lock rekeying', '/services/lock-rekeying']], sources: [rekey],
    sections: [
      ['Locksmith service at your rental', 'We come to rental homes, apartments and condos to help with rekeying, faulty locks and replacements. Call Pro Locksmith Tech to discuss the work. Our team can guide the necessary coordination during service.'],
      ['Rekey a working lock or replace worn hardware', 'Rekeying changes which key opens a compatible working lock. If the lock binds or the door does not latch, our technician can assess whether repair, alignment or replacement will solve the issue.'],
      ['Keys ready for the next handover', 'We can discuss compatible locks, the doors that need attention and the keys that will be needed after the work. A rekey can simplify a rental handover by keeping working hardware in place.'],
      ['Same-day and emergency service available', 'If a door will not secure or a key is lost, call our mobile team. We can discuss an on-site repair or replacement and coordinate the visit. Emergency locksmith help is available around the clock.'],
    ],
  },
  {
    slug: 'business-key-handover',
    title: 'Business key handover and employee access changes',
    summary: 'Pro Locksmith Tech helps businesses update access after staff or tenant changes with on-site rekeying, repair and lock replacement.',
    category: 'Commercial', service: business, related: [['Master-key system planning', '/tips/master-key-system-architecture'], ['Commercial door latching problems', '/tips/commercial-door-latch-alignment']], sources: [exits],
    sections: [
      ['Access for the people who need it', 'A staff change can affect employee entrances, offices and stockrooms differently. We help businesses plan which locks can share a key, which doors should stay separate and which users need new copies.'],
      ['Plan work around business hours', 'Our mobile team can discuss a rekey or lock update that suits how your business operates. When keys go missing or staff changes, rekeying compatible cylinders can help restore control without changing working hardware.'],
      ['Choose rekeying, repair or replacement', 'We can assess mechanical locks, existing keys and door hardware. Rekeying may suit a change in access, while a worn latch, sticking door or damaged cylinder may need a different repair.'],
      ['Keep entrances usable during the work', 'Commercial doors use different components for entry, latching and exiting. We can discuss an order of work that keeps customer and staff access available and respects requirements for rated doors and exit hardware.'],
    ],
  },
  {
    slug: 'how-to-extract-broken-key',
    title: 'Broken key in a lock? What to do next',
    summary: 'A key broke in a door or ignition? Pro Locksmith Tech can come to you to assess the lock, remove the fragment and discuss replacement.',
    category: 'Emergency', service: urgent, related: [['Lock repair', '/services/lock-repair'], ['Key stuck or hard to turn in the ignition', '/tips/failing-car-ignition-symptoms']],
    sections: [
      ['A broken key can jam the lock', 'Trying to turn or glue a broken key can make removal harder and damage the cylinder. Our mobile technician can examine the fragment and assess the hardware before recommending extraction or repair.'],
      ['Check whether the lock needs repair too', 'A broken key can leave a fragment in the lock. The underlying issue might be wear in the key, cylinder or door alignment. Our technician can assess the problem and explain when a new key is enough.'],
      ['Get mobile help for a broken key', 'We can assess broken keys in house locks, business doors and vehicle locks. Call us to discuss removal, lock condition and replacement options at your location.'],
    ],
  },
  {
    slug: 'transponder-car-key-programming-guide',
    title: 'What a car key transponder does',
    summary: 'A transponder allows a compatible vehicle to recognize a key for starting. Remote lock buttons and the ability to start the car can fail independently.',
    category: 'Automotive', service: auto, related: [compatibility, ['What affects car key programming cost?', '/blog/how-much-does-car-key-programming-cost']], sources: [ford, toyota],
    sections: [
      ['Separate cutting from recognition', 'In a vehicle with a transponder key, a correctly cut blade may turn in a lock without being recognized for starting. In other vehicles a smart fob is detected without inserting a blade. Our technician can determine the type of key the vehicle uses and identify suitable replacement options.'],
      ['Door buttons and starting can fail separately', 'A fob that opens the doors can still fail to start the vehicle. Our technicians can check key recognition and remote functions and explain whether a replacement or programming fits the symptom.'],
      ['Get the right transponder key on site', 'We can help identify a compatible chip and handle cutting and programming at your location where supported. Call before spending money on a look-alike key that may not work.'],
    ],
  },
  {
    slug: 'how-to-fix-sticking-door-lock',
    title: 'Why a door lock sticks and when to ask for repair',
    summary: 'A lock that operates with the door open but binds when it closes may indicate door or strike alignment rather than a bad key.',
    category: 'Residential', service: ['Lock repair', '/services/lock-repair'], related: [['When to rekey or replace a lock', '/blog/rekeying-vs-changing-locks-difference'], ['Deadbolt replacement considerations', '/tips/high-security-vs-standard-deadbolts']],
    sections: [
      ['Why a lock works with the door open', 'When the bolt turns easily with the door open but binds against the frame, the latch and strike may be out of alignment. A lock that binds in both positions may have a worn key or cylinder.'],
      ['When corrosion and wear affect a lock', 'Outdoor hardware can corrode and moving parts can wear. We can assess whether cleaning or adjustment can restore normal operation, or whether the cylinder or latch should be replaced.'],
      ['We can check the key, lock and door fit', 'Replacing a lock will do little if it binds against the frame. Our mobile technician can identify the source of the problem and explain whether alignment, repair or replacement is the better option.'],
    ],
  },
  {
    slug: 'smart-lock-dead-battery-override',
    title: 'What to do when a smart lock battery dies',
    summary: 'A dead smart lock battery can leave you outside. Pro Locksmith Tech comes to your door to help restore access and assess the lock.',
    category: 'Residential', service: ['Lock and security hardware service', '/services/security-hardware'], related: [home, ['Emergency lockout guidance', '/tips/lockout-what-to-do']],
    sections: [
      ['Battery failure and a jam can look alike', 'A keypad that stops responding may have a depleted battery. A keypad that still responds while the bolt sticks can point to a fit or hardware issue. Our technician can assess the lock at your door and explain the next step.'],
      ['Get help when the lock still will not open', 'A dead battery and a mechanical jam can look similar. If your normal access is unavailable, Pro Locksmith Tech can come out and assess the lock. Our team will explain the next steps for the property.'],
      ['Keep the lock working after the visit', 'Once access is restored, we can check whether battery service, bolt alignment or replacement is the right fix. If you want a new keypad lock, we can assess what will fit the existing door and explain how its normal access works.'],
    ],
  },
  {
    slug: 'high-security-vs-standard-deadbolts',
    title: 'Choosing a replacement deadbolt',
    summary: 'Consider the door, frame, hardware fit and who needs access. A lock label alone cannot establish the security of the complete opening.',
    category: 'Residential', service: ['Lock installation', '/services/lock-installation'], related: [['Rekeying or changing the locks', '/blog/rekeying-vs-changing-locks-difference'], home], sources: [rekey],
    sections: [
      ['The door and frame matter', 'A properly fitted deadbolt closes smoothly into the strike without pressure. A damaged or poorly aligned jamb can affect even high-quality hardware. Our technician can assess the entire opening before recommending a lock.'],
      ['Rekey or replace the deadbolt?', 'A compatible deadbolt in good condition can often be rekeyed. Our technician can inspect the door and hardware and discuss replacement for damaged locks or upgrades such as keypad entry.'],
      ['Understand the work at your door', 'We can explain the hardware, keys and any adjustment the installation requires. If you are deciding between a traditional key and a keypad, our technician can explain everyday use and compatible options.'],
    ],
  },
  {
    slug: 'commercial-door-latch-alignment',
    title: 'When a commercial door will not latch or close',
    summary: 'A commercial door that will not close may have a door, frame, closer or lock problem. We can assess the hardware at your business.',
    category: 'Commercial', service: business, related: [['Commercial door lock repair', '/blog/storefront-door-will-not-latch-or-lock'], ['Employee key handover', '/tips/business-key-handover']], sources: [exits, fire],
    sections: [
      ['What makes a commercial door fail to latch?', 'A poorly aligned door, a worn latch and a failing closer can produce similar symptoms. Our mobile technician can assess the door and identify the mechanical hardware that needs attention.'],
      ['Match the repair to the door hardware', 'A storefront latch, door closer and panic bar perform different jobs. We can assess compatibility and discuss repair or replacement options that preserve normal passage and the intended function of the door.'],
      ['Commercial locksmith service on site', 'Pro Locksmith Tech can help assess mechanical locks and business door hardware. If the door has an exit or fire rating, our team can explain the appropriate scope without altering its safety function.'],
    ],
  },
  {
    slug: 'master-key-system-architecture',
    title: 'Planning a master-key system for a business',
    summary: 'A master-key plan gives authorized staff access to the doors they need. We can assess existing business locks and explain compatible options.',
    category: 'Commercial', service: business, related: [['Business key handover', '/tips/business-key-handover'], ['Commercial door latching problems', '/tips/commercial-door-latch-alignment']],
    sections: [
      ['Begin with access roles', 'Separate day-to-day access, temporary access and emergency responsibilities. Limit broad access to people with a clear need and document who can approve changes. Keep any schedule that reveals the access hierarchy in a private record.'],
      ['Work with compatible locks', 'Our team can assess which doors are part of a shared mechanical system and which use separate electronic credentials. Compatible cylinders may support a coordinated key plan while other entrances retain their own access.'],
      ['Change access after a key goes missing', 'When a key opens several doors, replacing a single lock may leave other entrances affected. We can assess which cylinders need a rekey and explain which staff keys can remain in use after the change.'],
    ],
  },
  {
    slug: 'failing-car-ignition-symptoms',
    title: 'Car key will not turn or start the vehicle',
    summary: 'A key that will not turn and a vehicle that will not start are different symptoms. Our mobile technicians can assess key and ignition problems at the car.',
    category: 'Automotive', service: auto, related: [compatibility, ['Why a key may not turn', '/blog/why-wont-car-key-turn-in-ignition']], sources: [ford, toyota],
    sections: [
      ['When the key will not turn or the car will not start', 'A key that will not insert or turn can indicate a blade or cylinder problem. If the key turns normally and the car will not start, the symptoms can point to a different system. We can help you understand what locksmith service may address.'],
      ['Blade wear, cylinder wear and recognition faults', 'A worn blade may stop turning smoothly, while a cylinder can bind even with a good key. A key recognition fault can keep the engine from starting even when the blade turns. We can assess these differences at the vehicle.'],
      ['On-site key and ignition help', 'Call Pro Locksmith Tech for a stuck key, worn ignition lock or key recognition problem. We can assess the key and lock at your vehicle and explain whether cutting, programming or ignition lock work makes sense.'],
    ],
  },
];
