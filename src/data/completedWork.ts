export const WORK_PATH = '/completed-work';

export const workExamples = [
  {
    id: 'automotive',
    service: 'automotive-locksmith',
    asset: 'auto-key-service',
    widths: [360, 720],
    en: ['Car keys and fobs', 'On-site key cutting and programming for compatible vehicles.', 'Illustration of a car key fob handoff beside a vehicle'],
    es: ['Llaves y controles de autos', 'Corte de llaves y programación de controles para vehículos compatibles en su ubicación.', 'Ilustración de la entrega de un control junto a un auto'],
  },
  {
    id: 'residential',
    service: 'residential-locksmith',
    asset: 'residential-lock-service',
    widths: [360, 720],
    en: ['Home locks', 'Help with home lockouts, rekeying and lock installation.', 'Illustration of a locksmith checking a residential door lock'],
    es: ['Cerraduras de viviendas', 'Ayuda con aperturas, cambios de combinación e instalación de cerraduras.', 'Ilustración de una cerrajera revisando la cerradura de una vivienda'],
  },
  {
    id: 'commercial',
    service: 'commercial-locksmith',
    asset: 'glass-door-service',
    widths: [360, 480, 720, 960],
    en: ['Business doors and locks', 'Lock and door hardware service for shops, offices and other businesses.', 'Illustration of a locksmith servicing a glass commercial door'],
    es: ['Puertas y cerraduras comerciales', 'Servicio de cerraduras y herrajes para locales, oficinas y otros negocios.', 'Ilustración de un cerrajero trabajando en una puerta comercial de vidrio'],
  },
  {
    id: 'mobile-service',
    service: 'emergency-locksmith-service',
    asset: 'mobile-locksmith-service',
    widths: [360, 720],
    en: ['Mobile locksmith service', 'We come to your vehicle, home or business. Emergency assistance is available 24 hours.', 'Illustration of a locksmith carrying a tool case beside a branded service van'],
    es: ['Cerrajería móvil', 'Acudimos a su auto, vivienda o negocio. Hay asistencia de emergencia las 24 horas.', 'Ilustración de un cerrajero con un maletín junto a una camioneta de servicio'],
  },
] as const;

export const completedWorkLinks: Partial<Record<string, string>> = {
  'automotive-locksmith': 'automotive',
  'key-replacement': 'automotive',
  'commercial-locksmith': 'commercial',
  'lock-installation': 'commercial',
  'vehicle-key-compatibility': 'automotive',
};

export function workExampleImage(example: typeof workExamples[number]) {
  const stem = '/brand/' + example.asset;
  return {
    src: stem + '-720.webp',
    srcSet: example.widths.map(width => stem + '-' + width + '.webp ' + width + 'w').join(', '),
    width: 720,
    height: 480,
  };
}
