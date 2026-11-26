import type { FAQItem } from './faqData';

const questions: { en: FAQItem; es: Pick<FAQItem, 'question' | 'answer'> }[] = [
  {
    en: { id: 'car-key-no-spare', category: 'automotive', question: 'Can I request a replacement car key if I have no spare?', answer: 'Yes. Some vehicles can get a replacement key at their location even when every working copy is missing. Tell us the year, make, model and how the car starts so we can confirm compatibility. Have identification and proof of authorization to access the vehicle available.' },
    es: { question: '¿Puedo pedir una llave de auto si no tengo copia?', answer: 'Sí. En algunos vehículos se puede preparar una llave de reemplazo en el lugar aunque no quede ninguna copia. Indíquenos el año, la marca, el modelo y cómo arranca el auto para confirmar la compatibilidad. Tenga a mano su identificación y un comprobante de que tiene autorización para acceder al vehículo.' },
  },
  {
    en: { id: 'garage-vehicle-service', category: 'mobile', question: 'Can a mobile locksmith meet me in a condo or parking garage?', answer: 'Call to confirm access before dispatch. Give the building or garage name, entrance, parking level and location of the vehicle. Let us know about visitor check-in, valet-only access or a vehicle height limit.' },
    es: { question: '¿Puede venir un cerrajero móvil a un condominio o garaje?', answer: 'Llame para confirmar el acceso antes de coordinar la visita. Indíquenos el edificio o garaje, la entrada, el nivel y la ubicación del auto. Avísenos si hay registro de visitantes, acceso exclusivo mediante valet o límite de altura.' },
  },
  {
    en: { id: 'home-one-key', category: 'residential', question: 'Can several exterior doors use one key after rekeying?', answer: 'Some existing locks can be rekeyed to share one key when their cylinders accept the same key type. Tell us which doors you want included and whether the existing keys look different so we can discuss the options.' },
    es: { question: '¿Puedo usar una misma llave en varias puertas exteriores?', answer: 'Algunas cerraduras pueden ajustarse para usar una sola llave si sus cilindros aceptan el mismo tipo de llave. Indíquenos qué puertas quiere incluir y si las llaves actuales son distintas para revisar sus opciones.' },
  },
  {
    en: { id: 'door-lock-binds', category: 'residential', question: 'Why does my deadbolt turn when the door is open but stick when it closes?', answer: 'The bolt may be rubbing against the strike plate as the door closes. Tell us whether the lock works smoothly with the door open and where the door or bolt appears to rub. Those details help distinguish a door-alignment problem from a lock problem.' },
    es: { question: '¿Por qué gira el cerrojo con la puerta abierta pero se atasca al cerrarla?', answer: 'Es posible que el pestillo roce la placa del marco al cerrar. Cuéntenos si el cerrojo gira sin dificultad con la puerta abierta y dónde parece rozar. Esos detalles ayudan a distinguir un problema de alineación de una falla de la cerradura.' },
  },
  {
    en: { id: 'office-key-turnover', category: 'commercial', question: 'When should a business review its locks after staff changes?', answer: 'Review access when staff, tenants or vendors leave or when a key cannot be accounted for. Identify the affected entrances, which keys still work, and who can approve changes. If your property uses a managed key system, involve the property manager before scheduling.' },
    es: { question: '¿Cuándo debe un negocio revisar las cerraduras después de cambios de personal?', answer: 'Revise el acceso cuando se retire personal, inquilinos o proveedores, o si falta una llave. Identifique las entradas afectadas, qué llaves funcionan y quién puede aprobar cambios. Si el inmueble tiene un sistema administrado, consulte al administrador antes de agendar.' },
  },
  {
    en: { id: 'business-door-lock-call', category: 'commercial', question: 'What should I report if my storefront door will not lock?', answer: 'Tell us which entrance is affected, whether the door closes and latches, and what happens when you use the key. Provide the business name, suite number and an authorized contact. If an exit cannot be used, alert the building manager immediately.' },
    es: { question: '¿Qué debo indicar si la puerta de mi negocio no se puede cerrar con llave?', answer: 'Indíquenos qué entrada está afectada, si la puerta cierra y encaja, y qué ocurre al usar la llave. Facilite el nombre del negocio, número del local y un contacto autorizado. Si una salida queda inutilizable, avise de inmediato al administrador.' },
  },
  {
    en: { id: 'rental-lock-change-approval', category: 'residential', question: 'Who should approve a lock change at a rental or condo?', answer: 'Check with the person or organization that controls the door before scheduling. For a rental unit, start with the owner or property manager. For a shared or association-managed door, contact building management.' },
    es: { question: '¿Quién debe autorizar el cambio de una cerradura en un alquiler o condominio?', answer: 'Consulte con la persona u organización responsable de la puerta antes de agendar. Para un alquiler, empiece por el propietario o administrador. Para una puerta común o administrada por una asociación, contacte a la administración del edificio.' },
  },
  {
    en: { id: 'multiple-car-fobs', category: 'automotive', question: 'Do I need to bring my other fobs to a car key programming appointment?', answer: 'Have any working keys and fobs available. Some vehicles require all keys that should remain active to be present during programming. Tell us if a key is missing and whether you want to keep access with every fob you still have.' },
    es: { question: '¿Debo tener a mano mis otros controles al programar una llave de auto?', answer: 'Tenga a mano las llaves y controles que todavía funcionen. Algunos vehículos requieren que estén presentes todas las llaves que deben seguir activas. Avísenos si falta una llave y cuáles quiere conservar en funcionamiento.' },
  },
];

export const ADDITIONAL_FAQS = questions.map(({ en }) => en);
export const ADDITIONAL_SPANISH_FAQS = questions.map(({ en, es }) => ({ id: en.id, ...es }));
