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

const ford: ResourceLink = ['Ford owner manual: replacing a lost key or remote', 'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G2134031&Uid=G2309772&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G1405311&userMarket=USA&vFilteringEnabled=False&variantid=9379'];
const toyota: ResourceLink = ['Toyota owner manuals and warranty information', 'https://www.toyota.com/owners/warranty-owners-manuals'];
const nhtsa: ResourceLink = ['NHTSA guidance on children in locked vehicles', 'https://www.nhtsa.gov/campaign/heatstroke'];
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
    summary: 'A replacement key can match the vehicle’s shape and still fail to start it. Confirm the exact vehicle, key type and functions before buying a replacement.',
    category: 'Automotive', service: keys, related: [auto, pricing, ['Spare key versus all keys lost', '/blog/spare-car-key-vs-all-keys-lost']], sources: [ford, toyota],
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
      ['Start with the vehicle, not the listing', 'Use your owner’s manual for the exact model year and market. Record whether the vehicle uses a metal key or a start button, which buttons the original had and whether an original still starts the car. Online photos and matching buttons alone cannot establish a fit.'],
      ['Diagnose a battery issue before buying a fob', 'If the fob works only at short range, check the owner’s manual for the battery type and approved replacement method. A fresh battery won’t fix a physically damaged remote or an incompatible replacement. If both working fobs fail in the same place, ask whether the issue may be with the vehicle.'],
      ['Ask about the whole job', 'Ask whether the estimate includes the replacement, cutting if needed, recognition by the vehicle and a check of the advertised functions. Say if every key has been lost or the new fob was supplied by you. Keep ownership or authorization documentation ready if requested and share it only through the provider’s appropriate channel.'],
      ['When a dealer or specialist may be appropriate', 'Some owner manuals direct owners to a dealer for a specific replacement or security-related procedure. Mobile service depends on the exact vehicle and part. The broad service coverage at Pro Locksmith Tech does not guarantee support for every module, imported key or replacement fob.'],
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
        ['Empiece por el manual del auto', 'Consulte el manual del año, modelo y mercado de su vehículo. Anote si se usa una llave metálica o un botón de arranque, qué botones tenía el control y si conserva una llave que funcione. Una foto parecida no confirma compatibilidad.'],
        ['Revise la pila antes de comprar otro control', 'Si el alcance disminuyó, consulte el tipo de pila y las indicaciones del fabricante. Cambiarla no resolverá daños físicos ni hará compatible un control que no corresponde al auto. Si fallan dos controles, conviene revisar también el vehículo.'],
        ['Pregunte qué incluye el presupuesto', 'Confirme si incluye el repuesto, el corte cuando corresponda, el reconocimiento por el auto y la prueba de las funciones que necesita. Avise si perdió todas las llaves o si compró el repuesto por su cuenta. Comparta pruebas de propiedad o autorización solo por el canal acordado si se las solicitan.'],
        ['Cuándo consultar al concesionario', 'Algunos manuales remiten al concesionario para ciertos repuestos o procedimientos de seguridad. El servicio móvil depende del auto y del repuesto exactos. Llame para confirmar si se puede atender su caso en el lugar.'],
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
      ['Describe the exact problem', 'Tell the provider where service is needed and what you can observe. A key that will not turn, a door that will not latch and a lost key can call for different work. On a vehicle, the market, model year and key technology affect which part and programming may be needed.'],
      ['Compare the same scope', 'Ask if the estimate includes any visit or diagnostic charge, parts, labor and any timing or location factor. Confirm whether it is a firm quote or an estimate pending inspection. If you get more than one estimate, check that each includes the same parts, functions and on-site work.'],
      ['Confirm added work before it begins', 'A damaged lock, an incompatible supplied fob or a door alignment problem can change the scope. Ask the provider to explain any difference and confirm the revised price before authorizing extra work. Keep the receipt and confirm the accepted payment method.'],
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
        ['Describa el problema', 'Indique su ubicación y lo que ocurre. Una llave que no gira, una puerta que no cierra y una llave perdida pueden requerir trabajos distintos. Para autos, identifique el modelo, el año y el tipo de llave si los conoce.'],
        ['Compare el mismo trabajo', 'Pregunte si el presupuesto contempla visita o diagnóstico, mano de obra, piezas y cargos que dependan del horario o la ubicación. Confirme qué queda sujeto a la inspección. Revise que dos presupuestos incluyan las mismas funciones y piezas.'],
        ['Confirme el trabajo adicional', 'Una cerradura dañada o un control incompatible puede cambiar el alcance. Pida que le expliquen el cambio y el nuevo total antes de autorizarlo. Confirme la forma de pago y guarde el recibo.'],
      ],
    },
  },
  {
    slug: 'lockout-what-to-do', title: 'Locked out? How to decide what help you need',
    summary: 'If a child, pet or person is in immediate danger, seek emergency help now. For a routine lockout, get to a safe place and describe the access problem.',
    category: 'Emergency', service: urgent,
    related: [['Vehicle lockout guidance', '/blog/what-to-do-when-locked-out-of-car'], ['Home lockout guidance', '/blog/what-to-do-when-locked-out-of-house'], pricing], sources: [nhtsa],
    sections: [
      ['Put safety first', 'Call 911 if a child is alone in a locked vehicle, or a person or pet is in immediate danger. Follow the dispatcher’s instructions and do not wait for routine locksmith arrival. If you’re near moving traffic, move yourself to a safe place when you can do so safely.'],
      ['Choose the right authorized contact', 'For a routine home or business lockout, consider a lawful spare-key holder, the property manager or whoever is authorized to give access. For a vehicle, roadside assistance or a mobile locksmith may be an option. If the key is lost or broken, say so because opening the door may not restore normal use.'],
      ['Tell dispatch what changes the job', 'Give a safe meeting location, say what is locked and whether a key still works, and mention access restrictions such as a gated community or parking garage. Ask what authorization is needed, what is included in the estimate and whether a technician is available for that location.'],
      ['Avoid turning access trouble into a repair', 'Do not force the key, pry the door or attempt to disable vehicle security. At a business, a door failing to latch or open from the inside is a different problem from keys left behind. Notify whoever is responsible for the building and follow its emergency procedures when exit access is affected.'],
    ],
    es: {
      title: 'Qué ayuda pedir si se queda sin acceso',
      summary: 'Si hay un niño, una mascota o una persona en peligro inmediato, pida ayuda de emergencia. Si es una apertura de rutina, ubíquese en un lugar seguro y describa el problema.',
      service: ['Aperturas de emergencia las 24 horas', '/services/emergency-lockout-service'],
      related: [['Factores que afectan el precio', '/tips/locksmith-pricing-factors'], ['Contacto de servicio móvil', '/contact']],
      sections: [
        ['Primero, la seguridad', 'Llame al 911 si un niño está solo dentro de un vehículo cerrado, o si una persona o mascota corre peligro inmediato. Siga las indicaciones del operador y no espere la llegada de un cerrajero. Si está cerca del tráfico, póngase a salvo cuando pueda hacerlo sin riesgo.'],
        ['Contacte a quien esté autorizado', 'Para un auto, puede consultar la asistencia en carretera o a un cerrajero móvil. Para una vivienda o un negocio, revise si alguien autorizado tiene una copia o si corresponde llamar a la administración. Avise si la llave se perdió o se rompió. Abrir la puerta no siempre devuelve el uso normal.'],
        ['Explique dónde y qué pasó', 'Proporcione un lugar seguro de encuentro, indique qué está cerrado y si le queda una llave que funcione. Mencione restricciones de acceso al estacionamiento o edificio. Pregunte qué autorización se necesita, qué incluye el presupuesto y si hay servicio para su ubicación.'],
        ['Evite forzar la puerta', 'No fuerce la llave ni haga palanca. Si una puerta de un negocio no permite salir normalmente, informe al responsable del edificio y siga el procedimiento de emergencia correspondiente.'],
      ],
    },
  },
  {
    slug: 'rental-lock-changes',
    title: 'Changing locks at a rental property',
    summary: 'Coordinate authorization and key handover before changing rental locks. The condition of the hardware and who may approve the work determine the next step.',
    category: 'Residential', service: home, related: [['Compare rekeying and replacement', '/blog/rekeying-vs-changing-locks-difference'], ['Residential lock rekeying', '/services/lock-rekeying']], sources: [rekey],
    sections: [
      ['Confirm who can authorize the work', 'If you rent, contact the owner or property manager and review the lease before changing locks. For a managed or shared building, ask which doors are your responsibility. Keep approval in writing and ask how keys or managed credentials should be handed over.'],
      ['Separate key control from hardware condition', 'If a compatible lock works correctly and the issue is who has a copy, rekeying may allow you to keep the hardware. If the lock will not operate reliably or the door does not latch, arrange an assessment before assuming that a new cylinder solves the problem. A shared or restricted system can require the building’s provider.'],
      ['Make the handover explicit', 'Confirm which doors and keys are included, who receives them, and who should recover older keys. For a smart lock, ask the authorized account holder how to remove previous access using the manufacturer’s documented controls. Do not change the building’s common-door credentials.'],
      ['When the problem is immediate', 'If entry is unsecured or a door cannot be used normally, notify management promptly. For immediate danger, seek emergency assistance. For a routine lock issue, ask about service availability and the work needed before approving changes.'],
    ],
  },
  {
    slug: 'business-key-handover',
    title: 'Business key handover and employee access changes',
    summary: 'Start with who needs access to each door. Coordinate key returns, credential removal and any rekeying before changing hardware.',
    category: 'Commercial', service: business, related: [['Master-key system planning', '/tips/master-key-system-architecture'], ['Commercial door latching problems', '/tips/commercial-door-latch-alignment']], sources: [exits],
    sections: [
      ['Make a private access inventory', 'List which doors each role needs, who approves access and who manages physical keys, fobs and codes. Record issued items securely and avoid publishing key codes, door schedules or master-key details. Include shared facilities and keys held by contractors.'],
      ['Plan the handover around business hours', 'Collect issued physical keys and ask the system administrator to remove electronic credentials from authorized controls. If a physical key cannot be accounted for, consult the property manager and provider about the affected doors. Returning one key does not establish whether copies exist.'],
      ['Decide between rekeying and maintenance', 'If working hardware is compatible, rekeying may make sense for a change in access. A worn lock, door alignment problem or specialized exit opening needs its own evaluation. Coordinate with the building owner if rights, keys or hardware are shared.'],
      ['Protect normal exit access', 'Never block an exit or use a temporary lock to get around a hardware problem. If an exit, fire-rated opening or electronic interlock is involved, arrange qualified inspection and follow the building’s procedures and applicable requirements. This checklist is about planning and does not certify a specific opening.'],
    ],
  },
  {
    slug: 'how-to-extract-broken-key',
    title: 'Broken key in a lock? What to do next',
    summary: 'Stop turning or pushing the broken key. Identify whether the door is secured and whether the fragment is in a house lock, vehicle door or ignition.',
    category: 'Emergency', service: urgent, related: [['Lock repair', '/services/lock-repair'], ['Key stuck or hard to turn in the ignition', '/tips/failing-car-ignition-symptoms']],
    sections: [
      ['Avoid pushing the fragment farther in', 'Do not insert another key, use glue or keep turning the piece. Keep any loose part somewhere safe. If the door is already open and it is safe to leave it that way temporarily, avoid locking it until the problem is assessed.'],
      ['Explain the condition before approving work', 'Say whether the lock was stiff before the key broke and whether you have a working spare. The fragment and the surrounding hardware may need separate attention. A replacement key alone will not resolve a lock that is damaged or binding.'],
      ['Choose an appropriate service', 'For a car ignition, stop attempts to start the vehicle with a fragment in the lock. For a home or business, confirm who may authorize work on the door. Ask whether the estimate covers inspection, removal and any separate key or hardware work.'],
    ],
  },
  {
    slug: 'transponder-car-key-programming-guide',
    title: 'What a car key transponder does',
    summary: 'A transponder allows a compatible vehicle to recognize a key for starting. Remote lock buttons and the ability to start the car can fail independently.',
    category: 'Automotive', service: auto, related: [compatibility, ['What affects car key programming cost?', '/blog/how-much-does-car-key-programming-cost']], sources: [ford, toyota],
    sections: [
      ['Separate cutting from recognition', 'In a vehicle with a transponder key, a correctly cut blade may turn in a lock without being recognized for starting. In other vehicles a smart fob is detected without inserting a blade. Check the manual for the exact vehicle rather than treating these systems as interchangeable.'],
      ['Notice which function failed', 'Tell the technician whether the remote unlocks the door, whether the vehicle shows a key warning, and whether an authorized spare behaves differently. These symptoms can narrow the issue. They do not establish which part is defective.'],
      ['Confirm service before buying a part', 'The required part and whether mobile programming is appropriate depend on the vehicle and existing keys. Some manufacturer procedures call for a dealer. Ask what the provider can confirm for your vehicle and which functions will be checked.'],
    ],
  },
  {
    slug: 'how-to-fix-sticking-door-lock',
    title: 'Why a door lock sticks and when to ask for repair',
    summary: 'A lock that operates with the door open but binds when it closes may indicate door or strike alignment rather than a bad key.',
    category: 'Residential', service: ['Lock repair', '/services/lock-repair'], related: [['When to rekey or replace a lock', '/blog/rekeying-vs-changing-locks-difference'], ['Deadbolt replacement considerations', '/tips/high-security-vs-standard-deadbolts']],
    sections: [
      ['Observe the conditions safely', 'If you can operate the door normally, note whether the problem changes when the door is open or closed and whether a known working spare behaves the same. Avoid overtightening, forcing a turn or making adjustments to a door that is already unsecured.'],
      ['Check maintenance instructions for that lock', 'Manufacturer guidance varies by model and finish. Avoid putting household oil, cleaners or other substances inside a lock without compatible maintenance guidance. Report visible wear, corrosion or damage, especially if the door will not latch.'],
      ['Ask what needs repair', 'A locksmith can assess whether the issue is in the key, lock or door fit. Choosing replacement without checking alignment may leave the underlying problem unresolved. If the opening is shared or rated, contact the responsible building manager before changes.'],
    ],
  },
  {
    slug: 'smart-lock-dead-battery-override',
    title: 'What to do when a smart lock battery dies',
    summary: 'Check the exact model’s owner instructions for its authorized backup access and battery requirements. Backup options vary widely between locks.',
    category: 'Residential', service: ['Lock and security hardware service', '/services/security-hardware'], related: [home, ['Emergency lockout guidance', '/tips/lockout-what-to-do']],
    sections: [
      ['Identify the model and authorized backup', 'Use the lock’s model information or your purchase record to find the manufacturer’s instructions. Some products use a backup key, while others offer a documented backup power option. Follow the manufacturer’s procedure for your model, and avoid applying an unapproved power source.'],
      ['Coordinate access in a shared property', 'If the lock belongs to a rental, condo or employer, contact the person responsible for access before changing anything. A dead battery and a mechanical jam can look similar. Stop if a known authorized backup does not work normally.'],
      ['Plan maintenance after access is restored', 'Use the recommended batteries and test the lock as the owner’s instructions describe. Ask other authorized users to confirm their normal access and store any manufacturer-provided backup in a secure, accessible place.'],
    ],
  },
  {
    slug: 'high-security-vs-standard-deadbolts',
    title: 'Choosing a replacement deadbolt',
    summary: 'Consider the door, frame, hardware fit and who needs access. A lock label alone cannot establish the security of the complete opening.',
    category: 'Residential', service: ['Lock installation', '/services/lock-installation'], related: [['Rekeying or changing the locks', '/blog/rekeying-vs-changing-locks-difference'], home], sources: [rekey],
    sections: [
      ['Evaluate the opening first', 'Ask about the condition of the door and frame, the existing hardware fit and whether the door can close and latch without pressure. Follow manufacturer specifications for dimensions and supported installation materials.'],
      ['Define what you need to change', 'If the issue is who has keys, a compatible and working lock may be eligible for rekeying. For damaged hardware, accessibility needs or a change to electronic access, ask whether replacement or additional door work is needed. Check with the property manager for shared doors.'],
      ['Budget for the actual work', 'Ask whether the estimate includes hardware, keys and any door or strike work. Consider how household users will enter and exit routinely and what authorized backup they will have. Avoid relying on a security guarantee from a product label.'],
    ],
  },
  {
    slug: 'commercial-door-latch-alignment',
    title: 'When a commercial door will not latch or close',
    summary: 'A commercial door that will not close normally may have a door, frame, closer or lock problem. Affected exit or fire-rated openings need qualified evaluation.',
    category: 'Commercial', service: business, related: [['Commercial door symptoms to report', '/blog/storefront-door-will-not-latch-or-lock'], ['Employee key handover checklist', '/tips/business-key-handover']], sources: [exits, fire],
    sections: [
      ['Report the symptoms and affected opening', 'Note whether the problem occurs every time or only in certain conditions. Say whether people can exit normally, whether the door contacts the frame or whether the latch fails to engage. Record observations without testing from an unsafe position or blocking the opening.'],
      ['Protect safe egress', 'Notify the building manager promptly when an exit does not work normally. Do not prop open or alter a fire door, add a temporary locking device, or adjust exit hardware to keep a door secured. The hardware and any applicable listing or local requirement need an appropriate evaluation.'],
      ['Clarify who can handle the work', 'A locksmith may be able to assess the mechanical lock. Issues involving the door, closer, electronic controls or fire-rated assembly can require the building’s hardware or access-control specialist. Ask who handles each part before authorizing changes.'],
    ],
  },
  {
    slug: 'master-key-system-architecture',
    title: 'Planning a master-key system for a business',
    summary: 'A master-key plan defines which authorized roles need which doors. Document access goals privately and ask a qualified provider about the existing system.',
    category: 'Commercial', service: business, related: [['Business key handover checklist', '/tips/business-key-handover'], ['Commercial door latching problems', '/tips/commercial-door-latch-alignment']],
    sections: [
      ['Begin with access roles', 'Separate day-to-day access, temporary access and emergency responsibilities. Limit broad access to people with a clear need and document who can approve changes. Keep any schedule that reveals the access hierarchy in a private record.'],
      ['Review existing constraints', 'Ask whether doors are under a shared property system, whether keys are controlled through a specific provider and how future staff changes should be handled. An electronic credential system may work differently from a mechanical one. Do not assume the systems can be combined.'],
      ['Plan for lost keys and turnover', 'Agree on who responds to loss, which holders must return keys and how you will review access periodically. Ask the provider about the consequences of losing a broadly authorized key before committing to the plan.'],
    ],
  },
  {
    slug: 'failing-car-ignition-symptoms',
    title: 'Car key will not turn or start the vehicle',
    summary: 'A key that will not turn and a vehicle that will not start are different symptoms. Stop forcing the key and use the vehicle’s manual for the exact warning.',
    category: 'Automotive', service: auto, related: [compatibility, ['Why a key may not turn', '/blog/why-wont-car-key-turn-in-ignition']], sources: [ford, toyota],
    sections: [
      ['Describe the specific symptom', 'Tell the provider if the blade will not insert, the key rotates but the vehicle does not start, or a push-button system reports a key problem. If you have an authorized spare that can be used normally, note whether it shows the same behavior.'],
      ['Consult the exact vehicle’s manual', 'Follow the manual for model-specific warnings, starting controls and basic checks. Avoid forcing the key, applying chemicals or trying to alter the ignition or security controls. Stop using the key if it is bent or beginning to crack.'],
      ['Choose the appropriate next step', 'A mobile automotive locksmith may be an option for a physical key or lock issue. A battery, starting system, electronics or model-specific security concern may require roadside assistance, a repair shop or the dealership. Explain the symptoms before arranging service.'],
    ],
  },
];
