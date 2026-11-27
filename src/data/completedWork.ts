export const WORK_PATH = '/completed-work';

export const completedWorkLinks: Partial<Record<string, string>> = {
  'automotive-locksmith': 'nissan-key-fob',
  'key-replacement': 'volkswagen-new-keys',
  'commercial-locksmith': 'storefront-lock',
  'lock-installation': 'storefront-lock',
  'vehicle-key-compatibility': 'two-key-fobs',
};

interface Translation {
  caption: string;
  alt: string;
}

interface CompletedJob {
  id: string;
  service: 'automotive-locksmith' | 'key-replacement' | 'commercial-locksmith';
  height: number;
  en: Translation;
  es: Translation;
}

export const completedJobs: readonly CompletedJob[] = [
  {
    id: 'nissan-key-fob',
    service: 'automotive-locksmith',
    height: 632,
    en: { caption: 'Completed Nissan key fob job.', alt: 'Nissan key fob held in front of a Nissan steering wheel' },
    es: { caption: 'Trabajo terminado con un control de llave Nissan.', alt: 'Control de llave Nissan frente al volante de un Nissan' },
  },
  {
    id: 'dodge-key-fob',
    service: 'automotive-locksmith',
    height: 485,
    en: { caption: 'Completed Dodge key fob job.', alt: 'Key fob held in front of a black Dodge' },
    es: { caption: 'Trabajo terminado con un control de llave Dodge.', alt: 'Control de llave frente a un Dodge negro' },
  },
  {
    id: 'volkswagen-new-keys',
    service: 'key-replacement',
    height: 502,
    en: { caption: 'Completed a body control module (BCM) relearn and made new keys for this yellow Volkswagen.', alt: 'Two remotes and a body control module shown beside a yellow Volkswagen' },
    es: { caption: 'Se realizó el reaprendizaje del módulo de control de carrocería (BCM) y se hicieron llaves nuevas para este Volkswagen amarillo.', alt: 'Dos controles de llave y un módulo de carrocería junto a un Volkswagen amarillo' },
  },
  {
    id: 'storefront-lock',
    service: 'commercial-locksmith',
    height: 664,
    en: { caption: 'Installed a new lock on a commercial storefront door.', alt: 'Lock cylinder and hardware on the edge of an open storefront door' },
    es: { caption: 'Se instaló una cerradura nueva en la puerta de un local comercial.', alt: 'Cilindro y herrajes en el borde de la puerta abierta de un local' },
  },
  {
    id: 'vehicle-keys-on-site',
    service: 'key-replacement',
    height: 522,
    en: { caption: 'Completed an automotive key job. The keys are shown beside the vehicle.', alt: 'Keys held beside the open driver’s door of a white vehicle' },
    es: { caption: 'Trabajo terminado con llaves de auto, fotografiadas junto al vehículo.', alt: 'Llaves junto a la puerta abierta de un vehículo blanco' },
  },
  {
    id: 'two-key-fobs',
    service: 'automotive-locksmith',
    height: 853,
    en: { caption: 'Two key fobs photographed after a completed Pro Locksmith Tech job.', alt: 'Two car key fobs with different button layouts held side by side' },
    es: { caption: 'Dos controles fotografiados después de un trabajo de Pro Locksmith Tech.', alt: 'Dos controles de auto juntos con diferentes diseños de botones' },
  },
  {
    id: 'kia-flip-keys',
    service: 'key-replacement',
    height: 563,
    en: { caption: 'Completed a Kia key job. Two flip keys are shown after service.', alt: 'Two flip key handles in front of a Kia steering wheel' },
    es: { caption: 'Trabajo terminado con llaves Kia. Se muestran dos llaves plegables después del servicio.', alt: 'Dos mandos de llaves plegables delante de un volante Kia' },
  },
];

export function completedJobImage(job: CompletedJob) {
  const previous = job.id === 'two-key-fobs';
  const stem = previous ? '/resource-images/car-key-fob-comparison' : '/completed-work-images/' + job.id;
  const width = previous ? 640 : 560;
  return {
    src: stem + '-' + width + '.webp',
    srcSet: stem + '-320.webp 320w, ' + stem + '-' + width + '.webp ' + width + 'w',
    width,
    height: job.height,
  };
}
