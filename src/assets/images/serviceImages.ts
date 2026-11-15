// Every organic service has its own dedicated, service-relevant marketing image.
// Sources: approved Pro Locksmith Tech Marketing Assets Google Drive folders.
// These are illustrative marketing photos, not evidence of actual completed customer jobs.
import emergencyLockout from './services/emergency-lockout-service.png';
import residentialLocksmith from './services/residential-locksmith.png';
import commercialLocksmith from './services/commercial-locksmith.png';
import automotiveLocksmith from './services/automotive-locksmith.png';
import lockRepair from './services/lock-repair.png';
import lockReplacement from './services/lock-replacement.png';
import lockRekeying from './services/lock-rekeying.png';
import keyDuplication from './services/key-duplication.png';
import keyReplacement from './services/key-replacement.png';
import lockInstallation from './services/lock-installation.png';
import securityHardware from './services/security-hardware.png';
import emergencyLocksmith from './services/emergency-locksmith-service.png';

export interface ServiceImage {
  src: string;
  enAlt: string;
  esAlt: string;
}

export const SERVICE_IMAGES: Record<string, ServiceImage> = {
  'emergency-lockout-service': {
    src: emergencyLockout,
    enAlt: 'Mobile locksmith assisting at a residential door during a lockout',
    esAlt: 'Cerrajero móvil ayudando junto a una puerta durante una apertura de emergencia',
  },
  'residential-locksmith': {
    src: residentialLocksmith,
    enAlt: 'Locksmith technician working on a residential door lock',
    esAlt: 'Técnica de cerrajería trabajando en una cerradura residencial',
  },
  'commercial-locksmith': {
    src: commercialLocksmith,
    enAlt: 'Technician beside commercial door panic-bar hardware',
    esAlt: 'Técnica junto a una barra antipánico en una puerta comercial',
  },
  'automotive-locksmith': {
    src: automotiveLocksmith,
    enAlt: 'Automotive locksmith preparing vehicle key programming equipment',
    esAlt: 'Cerrajero automotriz preparando equipo de programación de llaves',
  },
  'lock-repair': {
    src: lockRepair,
    enAlt: 'Technician examining door locks and repair hardware',
    esAlt: 'Técnica revisando cerraduras y piezas para su reparación',
  },
  'lock-replacement': {
    src: lockReplacement,
    enAlt: 'Technician working with a residential deadbolt lock',
    esAlt: 'Cerrajero trabajando con un cerrojo residencial',
  },
  'lock-rekeying': {
    src: lockRekeying,
    enAlt: 'Locksmith showing lock components and rekeying tools at a home',
    esAlt: 'Técnica mostrando componentes de cerradura y herramientas para cambiar su combinación',
  },
  'key-duplication': {
    src: keyDuplication,
    enAlt: 'Technician operating key cutting equipment inside a mobile locksmith workshop',
    esAlt: 'Técnica trabajando con una máquina de corte de llaves en una unidad móvil',
  },
  'key-replacement': {
    src: keyReplacement,
    enAlt: 'Mobile automotive locksmith presenting replacement car keys beside a vehicle',
    esAlt: 'Cerrajero móvil entregando llaves de reemplazo junto a un vehículo',
  },
  'lock-installation': {
    src: lockInstallation,
    enAlt: 'Technician presenting door lock installation hardware',
    esAlt: 'Técnica mostrando herrajes para instalar cerraduras',
  },
  'security-hardware': {
    src: securityHardware,
    enAlt: 'Commercial locksmith preparing door cylinder and security hardware',
    esAlt: 'Cerrajero comercial preparando un cilindro y herrajes de seguridad',
  },
  'emergency-locksmith-service': {
    src: emergencyLocksmith,
    enAlt: 'Branded mobile locksmith service van in a South Florida neighborhood',
    esAlt: 'Camioneta de servicio móvil de cerrajería en el sur de Florida',
  },
};
export function getServiceImage(slug: string): ServiceImage {
  return SERVICE_IMAGES[slug] ?? SERVICE_IMAGES['emergency-locksmith-service'];
}
