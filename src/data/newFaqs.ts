import { PAYMENT_METHODS } from '../config/business';
import type { FAQItem } from './faqData';

const questions: { en: FAQItem; es: Pick<FAQItem, 'question' | 'answer'> }[] = [
  {
    en: { id: 'car-key-no-spare', category: 'automotive', question: 'Can I request a replacement car key if I have no spare?', answer: 'Yes. Some vehicles can get a replacement key at their location even when every working copy is missing. Our technicians carry a wide range of replacement keys and fobs for on-site cutting and programming. Call to request same-day service.' },
    es: { question: '¿Puedo pedir una llave de auto si no tengo copia?', answer: 'Sí. En algunos vehículos se puede preparar una llave de reemplazo en el lugar aunque no quede ninguna copia. Llevamos una amplia variedad de llaves y controles para corte y programación en el lugar. Llame para solicitar servicio el mismo día.' },
  },
  {
    en: { id: 'garage-vehicle-service', category: 'mobile', question: 'Can a mobile locksmith meet me in a condo or parking garage?', answer: 'Yes. We can meet you at a condo, parking lot or garage for an opening or compatible replacement key. Call us and our dispatch team can help coordinate the visit.' },
    es: { question: '¿Puede venir un cerrajero móvil a un condominio o garaje?', answer: 'Sí. Podemos ir a un condominio, estacionamiento o garaje para una apertura o una llave compatible. Llámenos y nuestro equipo coordinará la visita.' },
  },
  {
    en: { id: 'home-one-key', category: 'residential', question: 'Can several exterior doors use one key after rekeying?', answer: 'Yes, for locks that accept the same key type. We can inspect the existing cylinders on site and explain which doors can share one key.' },
    es: { question: '¿Puedo usar una misma llave en varias puertas exteriores?', answer: 'Sí, cuando las cerraduras aceptan el mismo tipo de llave. Podemos revisar los cilindros en el lugar y explicar qué puertas pueden compartir una sola llave.' },
  },
  {
    en: { id: 'door-lock-binds', category: 'residential', question: 'Why does my deadbolt turn when the door is open but stick when it closes?', answer: 'The bolt may be rubbing against the strike plate as the door closes. Our technician can check the door alignment and lock on site and explain whether adjustment or hardware repair will help.' },
    es: { question: '¿Por qué gira el cerrojo con la puerta abierta pero se atasca al cerrarla?', answer: 'Es posible que el cerrojo roce la placa del marco al cerrar. Nuestro técnico puede revisar la alineación y la cerradura en el lugar para determinar si conviene ajustar o reparar los herrajes.' },
  },
  {
    en: { id: 'office-key-turnover', category: 'commercial', question: 'When should a business review its locks after staff changes?', answer: 'A staff change, tenant turnover or a missing key is a good time to update access. Call us to discuss rekeying compatible locks or repairing worn hardware at your business. We can work with the property manager when access is shared.' },
    es: { question: '¿Cuándo debe un negocio revisar las cerraduras después de cambios de personal?', answer: 'Un cambio de personal, de inquilino o la pérdida de una llave es una buena oportunidad para actualizar el acceso. Llámenos para cambiar combinaciones o reparar herrajes. Podemos trabajar con la administración si el acceso es compartido.' },
  },
  {
    en: { id: 'business-door-lock-call', category: 'commercial', question: 'Can you fix a storefront door that will not lock?', answer: 'Call us for mobile commercial service. A technician can check whether the issue is the cylinder, latch, closer or door alignment and discuss what can be repaired at the entrance.' },
    es: { question: '¿Pueden reparar la puerta de mi negocio si no se puede cerrar con llave?', answer: 'Llámenos para pedir cerrajería comercial móvil. Un técnico puede revisar el cilindro, el pestillo, el cierrapuertas y la alineación, y explicar qué se puede reparar en el lugar.' },
  },
  {
    en: { id: 'rental-lock-change-approval', category: 'residential', question: 'Who should approve a lock change at a rental or condo?', answer: 'The owner or property manager usually authorizes work on a rental door, and building management handles shared entrances. Call us to discuss the service. We can coordinate with the person responsible for the door.' },
    es: { question: '¿Quién debe autorizar el cambio de una cerradura en un alquiler o condominio?', answer: 'Por lo general, el dueño o administrador autoriza el trabajo en una vivienda alquilada y la administración del edificio se encarga de las puertas comunes. Llámenos para hablar del servicio y coordinar con la persona responsable.' },
  },
  {
    en: { id: 'multiple-car-fobs', category: 'automotive', question: 'Will my existing fobs still work after programming?', answer: 'It depends on the vehicle. Some systems may need the fobs present if they are to stay active. Call us and we can explain your options, including compatible replacement when every key is missing.' },
    es: { question: '¿Seguirán funcionando mis controles después de programar una llave nueva?', answer: 'Depende del vehículo. En algunos sistemas los controles deben estar presentes para seguir activos. Llámenos para conocer las opciones, incluso si se perdieron todas las llaves.' },
  },
  {
    en: { id: 'on-site-payment', category: 'general', question: 'What payment methods do you accept on site?', answer: `We accept ${PAYMENT_METHODS.en}.` },
    es: { question: '¿Qué métodos de pago aceptan en el lugar?', answer: `Aceptamos ${PAYMENT_METHODS.es}.` },
  },
];

export const ADDITIONAL_FAQS = questions.map(({ en }) => en);
export const ADDITIONAL_SPANISH_FAQS = questions.map(({ en, es }) => ({ id: en.id, ...es }));
