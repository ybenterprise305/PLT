// Every organic service has its own dedicated, service-relevant marketing image.
// Sources: approved Pro Locksmith Tech Marketing Assets Google Drive folders.
// These are illustrative marketing photos, not evidence of actual completed customer jobs.

export interface ServiceImage {
  src: string;
  srcSet: string;
  enAlt: string;
  esAlt: string;
}

export const SERVICE_IMAGES: Record<string, Omit<ServiceImage, 'srcSet'>> = {
  'emergency-lockout-service': {
    src: '/service-images/emergency-lockout-service-960.webp',
    enAlt: 'Mobile locksmith assisting at a residential door during a lockout',
    esAlt: 'Cerrajero móvil ayudando junto a una puerta durante una apertura de emergencia',
  },
  'residential-locksmith': {
    src: '/service-images/residential-locksmith-960.webp',
    enAlt: 'Locksmith technician working on a residential door lock',
    esAlt: 'Técnica de cerrajería trabajando en una cerradura residencial',
  },
  'commercial-locksmith': {
    src: '/brand/glass-door-service-960.webp',
    enAlt: 'Illustration of a locksmith servicing a glass commercial door',
    esAlt: 'Ilustración de un cerrajero trabajando en una puerta comercial de vidrio',
  },
  'automotive-locksmith': {
    src: '/service-images/automotive-locksmith-960.webp',
    enAlt: 'Automotive locksmith preparing vehicle key programming equipment',
    esAlt: 'Cerrajero automotriz preparando equipo de programación de llaves',
  },
  'lock-repair': {
    src: '/service-images/lock-repair-960.webp',
    enAlt: 'Technician examining door locks and repair hardware',
    esAlt: 'Técnica revisando cerraduras y piezas para su reparación',
  },
  'lock-replacement': {
    src: '/service-images/lock-replacement-960.webp',
    enAlt: 'Technician working with a residential deadbolt lock',
    esAlt: 'Cerrajero trabajando con un cerrojo residencial',
  },
  'lock-rekeying': {
    src: '/service-images/lock-rekeying-960.webp',
    enAlt: 'Locksmith showing lock components and rekeying tools at a home',
    esAlt: 'Técnica mostrando componentes de cerradura y herramientas para cambiar su combinación',
  },
  'key-duplication': {
    src: '/service-images/key-duplication-960.webp',
    enAlt: 'Technician operating key cutting equipment inside a mobile locksmith workshop',
    esAlt: 'Técnica trabajando con una máquina de corte de llaves en una unidad móvil',
  },
  'key-replacement': {
    src: '/service-images/key-replacement-960.webp',
    enAlt: 'Mobile automotive locksmith presenting replacement car keys beside a vehicle',
    esAlt: 'Cerrajero móvil entregando llaves de reemplazo junto a un vehículo',
  },
  'lock-installation': {
    src: '/service-images/lock-installation-960.webp',
    enAlt: 'Technician presenting door lock installation hardware',
    esAlt: 'Técnica mostrando herrajes para instalar cerraduras',
  },
  'security-hardware': {
    src: '/service-images/security-hardware-960.webp',
    enAlt: 'Commercial locksmith preparing door cylinder and security hardware',
    esAlt: 'Cerrajero comercial preparando un cilindro y herrajes de seguridad',
  },
  'emergency-locksmith-service': {
    src: '/service-images/emergency-locksmith-service-960.webp',
    enAlt: 'Branded mobile locksmith service van in a South Florida neighborhood',
    esAlt: 'Camioneta de servicio móvil de cerrajería en el sur de Florida',
  },
};
export function getServiceImage(slug: string): ServiceImage {
  const image = SERVICE_IMAGES[slug] ?? SERVICE_IMAGES['emergency-locksmith-service'];
  const srcSet = [360, 480, 720, 960]
    .map(width => image.src.replace('-960.webp', '-' + width + '.webp') + ' ' + width + 'w')
    .join(', ');
  return { ...image, srcSet };
}
