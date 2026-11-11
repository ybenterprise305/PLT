export interface SpanishServiceTranslation {
  name: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  categoryName: string;
}

export const SPANISH_SERVICES: Record<string, SpanishServiceTranslation> = {
  'emergency-lockout-service': {
    name: 'Aperturas de Emergencia 24/7',
    badge: 'Prioridad 24/7',
    categoryName: 'Emergencia',
    shortDescription: 'Asistencia inmediata para aperturas de autos, viviendas y comercios en todo el Sur de la Florida.',
    fullDescription: '¿Se quedó afuera de su casa, vehículo u oficina? Pro Locksmith Tech despacha cerrajeros móviles equipados con herramientas de apertura no destructivas para recuperar el acceso a su propiedad de manera segura. Atendemos llaves encerradas en autos, cerrojos trabados, cerraduras digitales desconfiguradas y llaves partidas con la máxima precisión, protegiendo marcos, burletes y cilindros.',
    features: [
      'Apertura de puertas y maleteros de autos sin daños',
      'Apertura de cerrojos y pomos residenciales',
      'Apertura de cerraduras comerciales y oficinas',
      'Técnicas avanzadas de ganzuado no invasivo',
      'Extracción de llaves rotas en el lugar'
    ]
  },
  'residential-locksmith': {
    name: 'Cerrajería Residencial',
    badge: 'Seguridad del Hogar',
    categoryName: 'Residencial',
    shortDescription: 'Servicios integrales para el hogar: cambio de combinación (rekey), cerrojos de alta seguridad y cerraduras inteligentes.',
    fullDescription: 'La seguridad de su familia es nuestra máxima prioridad. Pro Locksmith Tech brinda servicios dedicados de cerrajería residencial para casas, townhomes, condominios y apartamentos en el Sur de la Florida. Desde cambiar la combinación de sus cerraduras al mudarse hasta instalar cerrojos de uso pesado y teclados electrónicos, nuestras camionetas móviles cuentan con hardware resistente al clima húmedo y al salitre de la costa de Florida.',
    features: [
      'Instalación de cerrojos y manijas de seguridad',
      'Cambio de combinación (rekeying) de toda la casa',
      'Cerraduras inteligentes y teclados digitales',
      'Seguros para puertas corredizas de patio y ventanas',
      'Reemplazo de cerraduras de buzón y copias de llaves'
    ]
  },
  'commercial-locksmith': {
    name: 'Cerrajería Comercial',
    badge: 'Seguridad Empresarial',
    categoryName: 'Comercial',
    shortDescription: 'Cerraduras comerciales, barras antipánico para salidas de emergencia y sistemas de llave maestra para empresas.',
    fullDescription: 'Asegure su local comercial, almacén u oficina corporativa con soluciones móviles profesionales. Pro Locksmith Tech repara e instala cerraduras comerciales de embutir (mortise locks Adams Rite), barras de empuje antipánico que cumplen con el código de incendios de Florida (NFPA 101) y diseña sistemas de llave maestra para que los administradores controlen el acceso sin cargar pesados manojos de llaves.',
    features: [
      'Sistemas de llave maestra para edificios y oficinas',
      'Instalación y reparación de barras antipánico de salida',
      'Cerraduras comerciales para puertas de aluminio y vidrio',
      'Ajuste y cambio de cierrapuertas hidráulicos',
      'Instalación de cantoneras eléctricas para control de acceso'
    ]
  },
  'automotive-locksmith': {
    name: 'Cerrajería Automotriz',
    badge: 'Autos y Llaves',
    categoryName: 'Automotriz',
    shortDescription: 'Apertura de autos, corte de llaves láser en el lugar y programación de controles y chips transponder.',
    fullDescription: 'Ahorre cientos de dólares en costos de grúa y largas esperas en los concesionarios. Pro Locksmith Tech es un taller de cerrajería automotriz sobre ruedas que llega directamente a su automóvil en cualquier estacionamiento, carretera o domicilio del Sur de la Florida. Cortamos llaves con corte láser y programamos llaves inteligentes de botón (push-to-start) en el acto mediante escáneres diagnósticos OBD-II.',
    features: [
      'Apertura urgente de autos sin rasguños',
      'Corte de llaves automotrices con maquinaria CNC láser',
      'Programación de transponders y controles remotos (key fobs)',
      'Reparación y reconstrucción de cilindros de ignición trabados',
      'Duplicación de llaves con chip para todas las marcas'
    ]
  },
  'car-lockout-service': {
    name: 'Apertura de Autos Cerrados',
    badge: 'Despacho Rápido',
    categoryName: 'Automotriz',
    shortDescription: 'Apertura rápida y segura de vehículos sin rayar la pintura, los vidrios ni dañar las gomas.',
    fullDescription: 'Dejar las llaves adentro del carro puede ocurrirle a cualquiera. Pro Locksmith Tech utiliza cuñas de aire profesionales y herramientas de alcance largo especializadas que ingresan suavemente por el marco de la puerta para accionar el seguro sin doblar el metal ni romper empaques.',
    features: [
      'Llegada móvil promedio en 15-25 minutos',
      'Protocolo estricto de apertura sin daños',
      'Apertura de maleteros bloqueados',
      'Compatible con marcas americanas, asiáticas y europeas',
      'Servicio disponible 24 horas al día'
    ]
  },
  'house-lockout-service': {
    name: 'Apertura de Casas y Apartamentos',
    badge: 'Entrada Segura',
    categoryName: 'Residencial',
    shortDescription: 'Acceso seguro y rápido a su residencia si olvidó o perdió las llaves de su casa o apartamento.',
    fullDescription: 'Quedarse afuera de su propia casa genera estrés y preocupación. Nuestros cerrajeros móviles priorizan técnicas de ganzuado de precisión para abrir su puerta principal sin romper la cerradura ni dañar la madera, permitiéndole entrar rápidamente y utilizar sus mismas llaves.',
    features: [
      'Ganzuado profesional sin romper la chapa',
      'Apertura de cerrojos dobles y cerraduras electrónicas',
      'Opción de cambio de combinación en la misma visita',
      'Verificación previa de identidad para su seguridad',
      'Disponibilidad los 365 días del año'
    ]
  },
  'lock-rekeying-service': {
    name: 'Cambio de Combinación (Rekeying)',
    badge: 'Ahorro Inteligente',
    categoryName: 'Residencial',
    shortDescription: 'Cambie las llaves de su casa o negocio manteniendo sus cerraduras actuales y ahorrando hasta un 70%.',
    fullDescription: 'El rekeying consiste en reemplazar los pines internos del cilindro para que las llaves antiguas dejen de funcionar y solo una llave nueva pueda abrirlo. Es la opción ideal al mudarse a una nueva casa, terminar contratos de alquiler o tras la salida de empleados.',
    features: [
      'Las llaves anteriores quedan totalmente inútiles',
      'Ahorra hasta un 70% en comparación con comprar chapas nuevas',
      'Unifique todas las puertas para que abran con una sola llave',
      'Corte de copias de llaves en el acto en la unidad móvil',
      'Servicio rápido para viviendas y edificios comerciales'
    ]
  },
  'lock-replacement-installation': {
    name: 'Instalación y Reemplazo de Cerraduras',
    badge: 'Alta Seguridad',
    categoryName: 'Residencial',
    shortDescription: 'Reemplazo de cerraduras gastadas por cerrojos Grado 1 de alta resistencia contra robos e impactos.',
    fullDescription: 'Actualice la seguridad de sus puertas con cerrojos de acero templado y placas de impacto reforzadas con tornillos de 3 pulgadas que penetran en la estructura de la pared, ofreciendo máxima protección contra patadas y vientos huracanados en el Sur de la Florida.',
    features: [
      'Cerraduras Grado 1 y Grado 2 de máxima durabilidad',
      'Placas de impacto reforzadas contra robos',
      'Resistencia comprobada al salitre y la humedad costera',
      'Acabados en níquel satinado, bronce envejecido y negro mate',
      'Alineación perfecta para un cierre suave'
    ]
  },
  'car-key-replacement': {
    name: 'Reemplazo de Llaves de Auto',
    badge: 'Llaves en el Acto',
    categoryName: 'Automotriz',
    shortDescription: 'Elaboración de llaves nuevas de auto aunque haya perdido todas las copias originales.',
    fullDescription: 'No gaste en grúas ni espere días en el concesionario. Nos trasladamos a donde esté su vehículo, decodificamos la cerradura, cortamos la hoja metálica por código y programamos el chip transponder directamente en el lugar.',
    features: [
      'Servicio cuando ha perdido todas las llaves (All Keys Lost)',
      'Corte de alta precisión por código de fábrica',
      'Llaves tipo navaja, llaves tradicionales y controles remotos',
      'Precios competitivos frente al concesionario',
      'Prueba completa de encendido y seguros antes de finalizar'
    ]
  },
  'key-fob-programming': {
    name: 'Programación de Controles (Key Fobs)',
    badge: 'Tecnología OBD',
    categoryName: 'Automotriz',
    shortDescription: 'Programación de controles remotos y llaves de proximidad con botón de arranque (Push-to-Start).',
    fullDescription: 'Programamos controles remotos, mandos de alarma y llaves de presencia (smart keys) para una amplia variedad de modelos. Conectamos equipos diagnósticos certificados al puerto OBD-II de su vehículo para sincronizar el sistema inmovilizador de manera segura.',
    features: [
      'Sincronización de sistemas Push-to-Start',
      'Borrado de llaves extraviadas de la memoria del auto',
      'Controles OEM de alta durabilidad',
      'Baterías nuevas incluidas y verificadas',
      'Sincronización de apertura remota de puertas y maletero'
    ]
  },
  'broken-key-extraction': {
    name: 'Extracción de Llaves Rotas',
    badge: 'Extracción Limpia',
    categoryName: 'Emergencia',
    shortDescription: 'Extracción segura de trozos de llaves quebradas dentro de cerraduras o cilindros de ignición.',
    fullDescription: 'Si su llave se partió adentro de la cerradura o del encendido del auto, no intente sacarla con pegamento ni objetos filosos que puedan dañar los resortes internos. Nuestros técnicos usan extractores helicoidales de precisión para retirar el fragmento intacto y cortar una llave nueva al instante.',
    features: [
      'Extracción sin dañar los pines del cilindro',
      'Especialistas en cerraduras de puertas e igniciones de autos',
      'Corte de llave de reemplazo en la misma visita',
      'Lubricación profesional con PTFE seco',
      'Atención de emergencia las 24 horas'
    ]
  },
  'smart-lock-installation': {
    name: 'Cerraduras Inteligentes y Teclados',
    badge: 'Hogar Conectado',
    categoryName: 'Residencial',
    shortDescription: 'Instalación y configuración de cerraduras electrónicas con teclado numérico, huella y Bluetooth/Wi-Fi.',
    fullDescription: 'Elimine la necesidad de cargar llaves físicas. Instalamos y configuramos cerraduras digitales de las mejores marcas (Schlage, Yale, Ultraloq, Kwikset) ajustando el marco de la puerta para garantizar que el pestillo motorizado cierre con total suavidad sin atascarse.',
    features: [
      'Acceso por código PIN, huella dactilar o teléfono móvil',
      'Códigos temporales para familiares, visitas o personal de limpieza',
      'Alineación precisa del marco para no agotar las baterías',
      'Cerraduras con respaldo de llave física para emergencias',
      'Asesoramiento completo sobre uso y mantenimiento'
    ]
  }
};

export const SPANISH_COUNTIES: Record<string, { name: string; overview: string }> = {
  'broward-county': {
    name: 'Condado de Broward',
    overview: 'Pro Locksmith Tech ofrece servicio de cerrajería móvil 24/7 en todo el Condado de Broward. Nuestras camionetas taller se desplazan por las autopistas I-95, I-595, Sawgrass Expressway y Florida Turnpike para llegar rápidamente a Coral Springs, Fort Lauderdale, Hollywood, Pembroke Pines, Pompano Beach y ciudades vecinas.'
  },
  'miami-dade-county': {
    name: 'Condado de Miami-Dade',
    overview: 'Servicio de cerrajería móvil a domicilio las 24 horas en el Condado de Miami-Dade. Brindamos auxilio vial para apertura de autos, programación de llaves con chip y cambio de cerraduras en Miami, Miami Beach, Hialeah, Doral, Coral Gables, Kendall, Aventura y todo el área metropolitana.'
  },
  'palm-beach-county': {
    name: 'Condado de Palm Beach',
    overview: 'Cerrajería móvil profesional en el Condado de Palm Beach. Atención rápida las 24 horas para emergencias residenciales, comerciales y automotrices en Boca Raton, West Palm Beach, Delray Beach, Boynton Beach, Jupiter y Wellington.'
  }
};

export const SPANISH_FAQS = [
  {
    id: 'es-faq-1',
    question: '¿Ofrecen servicio de cerrajería móvil?',
    answer: 'Sí, Pro Locksmith Tech es un servicio de cerrajería 100% móvil. No operamos una tienda física abierta al público: nos desplazamos directamente a su ubicación en cualquier punto del Sur de la Florida con unidades móviles completamente equipadas.'
  },
  {
    id: 'es-faq-2',
    question: '¿Vienen directamente a mi ubicación?',
    answer: 'Exactamente. Vamos hasta donde esté su vehículo, su casa, su negocio o el lugar donde ocurrió la emergencia en los condados de Broward, Miami-Dade y Palm Beach.'
  },
  {
    id: 'es-faq-3',
    question: '¿Qué áreas atienden en el Sur de la Florida?',
    answer: 'Cubrimos todo el Sur de la Florida, incluyendo las principales ciudades como Fort Lauderdale, Miami, Coral Springs, Boca Raton, Hollywood, Pembroke Pines, West Palm Beach, Doral, Hialeah, Pompano Beach y más de 37 municipios del corredor tri-condal.'
  },
  {
    id: 'es-faq-4',
    question: '¿Tienen servicio de cerrajería de emergencia 24/7?',
    answer: 'Sí, nuestro despacho móvil opera las 24 horas del día, los 7 días de la semana, los 365 días del año. Atendemos emergencias nocturnas, fines de semana y días festivos.'
  },
  {
    id: 'es-faq-5',
    question: '¿Ofrecen servicios de cerrajería automotriz?',
    answer: 'Sí. Abrimos vehículos cerrados sin rayones, cortamos llaves con tecnología láser computarizada, programamos controles remotos (key fobs) y chips transponder, reparamos cilindros de ignición y extraemos llaves rotas en el lugar.'
  },
  {
    id: 'es-faq-6',
    question: '¿Ofrecen servicios de cerrajería residencial?',
    answer: 'Sí. Realizamos aperturas de emergencia de casas y apartamentos, cambio de combinación (rekeying), reemplazo e instalación de cerraduras de alta seguridad, cerraduras inteligentes con teclado y cerrojos para puertas principales y corredizas.'
  },
  {
    id: 'es-faq-7',
    question: '¿Ofrecen servicios de cerrajería comercial para negocios?',
    answer: 'Sí. Atendemos tiendas y oficinas instalando cerraduras comerciales de embutir, barras antipánico de salida de emergencia, sistemas de llave maestra y control de acceso.'
  },
  {
    id: 'es-faq-8',
    question: '¿Cómo puedo solicitar un cerrajero?',
    answer: 'Solo llame directamente a nuestra línea de despacho al +1 754-261-6528 o envíe un mensaje de texto con su dirección. Un técnico calificado se pondrá en camino de inmediato.'
  }
];

export const SPANISH_REVIEWS = [
  {
    id: 'rev-es-1',
    author: 'Michael R.',
    location: 'Fort Lauderdale, FL (Las Olas)',
    serviceBadge: 'Apertura de Auto Verificada',
    dispatchType: 'Despacho Automotriz',
    quote: 'Dejé las llaves y el celular adentro del carro un viernes tarde en la noche cerca de Las Olas. La camioneta de Pro Locksmith Tech llegó en 20 minutos. El técnico utilizó herramientas de apertura profesionales y abrió la puerta en menos de dos minutos sin rayar la pintura ni el vidrio. ¡Me salvaron la noche!'
  },
  {
    id: 'rev-es-2',
    author: 'Carlos y Elena M.',
    location: 'Coral Springs, FL',
    serviceBadge: 'Cambio de Combinación Verificado',
    dispatchType: 'Cerrajería Residencial',
    quote: 'Acabábamos de comprar nuestra casa en Coral Springs y queríamos cambiar la combinación de todas las cerraduras por seguridad. El cerrajero llegó puntual con un taller completo en su camioneta. Cambió la combinación de los 6 cerrojos Schlage para que abrieran con una sola llave maestra e hizo 4 copias en el acto. Muy profesionales y precios claros.'
  },
  {
    id: 'rev-es-3',
    author: 'David S.',
    location: 'Boca Raton, FL',
    serviceBadge: 'Reparación Comercial',
    dispatchType: 'Cerrajería Comercial',
    quote: 'La cerradura de la puerta principal de aluminio de nuestro restaurante se trabó un viernes por la tarde justo antes de la hora de la cena. Llamé directamente, hablé con el técnico y estuvo en el local en 25 minutos. Cambió el cilindro de embutir comercial y alineó la placa a la perfección.'
  },
  {
    id: 'rev-es-4',
    author: 'Jessica T.',
    location: 'Miami Beach, FL (South Beach)',
    serviceBadge: 'Programación de Control Fob',
    dispatchType: 'Llaves Automotrices',
    quote: 'Perdí el control inteligente de mi auto en la playa. En el concesionario me dijeron que tenía que pagar una grúa y esperar 3 días. Pro Locksmith Tech fue directo al garaje donde estaba estacionada, cortó la llave de emergencia y programó un control nuevo en el lugar. Me ahorraron cientos de dólares.'
  },
  {
    id: 'rev-es-5',
    author: 'Roberto K.',
    location: 'West Palm Beach, FL',
    serviceBadge: 'Apertura de Maletero',
    dispatchType: 'Apertura de Maletero',
    quote: 'Cerré accidentalmente el maletero con las llaves adentro mientras cargaba las compras en West Palm Beach. El servicio de asistencia en carretera normal no pudo abrirlo porque el inmovilizador estaba activado. Pro Locksmith Tech decodificó el cilindro de la puerta y liberó el maletero en pocos minutos sin ningún daño.'
  },
  {
    id: 'rev-es-6',
    author: 'Amanda L.',
    location: 'Pembroke Pines, FL',
    serviceBadge: 'Instalación de Cerradura Smart',
    dispatchType: 'Cerradura Inteligente',
    quote: 'Intenté instalar una cerradura digital con teclado yo misma, pero el pestillo se trababa porque la puerta pesada contra huracanes se había desalineado por la humedad. El cerrajero ajustó el marco, alineó el cerrojo y configuró el teclado. Funciona de maravilla y me dio excelentes consejos.'
  }
];
