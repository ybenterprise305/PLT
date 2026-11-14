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
    shortDescription: 'Servicios integrales para el hogar: cambio de combinación (cambio de combinación), cerrojos de alta seguridad y cerraduras inteligentes.',
    fullDescription: 'La seguridad de su familia es nuestra máxima prioridad. Pro Locksmith Tech brinda servicios dedicados de cerrajería residencial para casas, casas adosadas, condominios y apartamentos en el Sur de la Florida. Desde cambiar la combinación de sus cerraduras al mudarse hasta instalar cerrojos de uso pesado y teclados electrónicos, nuestras camionetas móviles cuentan con herrajes resistente al clima húmedo y al salitre de la costa de Florida.',
    features: [
      'Instalación de cerrojos y manijas de seguridad',
      'Cambio de combinación (cambio de combinación) de toda la casa',
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
    fullDescription: 'Asegure su local comercial, almacén u oficina corporativa con soluciones móviles profesionales. Pro Locksmith Tech repara e instala cerraduras comerciales de embutir (cerraduras de embutir Adams Rite), barras de empuje antipánico que cumplen con el código de incendios de Florida (NFPA 101) y diseña sistemas de llave maestra para que los administradores controlen el acceso sin cargar pesados manojos de llaves.',
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
    fullDescription: 'Ahorre cientos de dólares en costos de grúa y largas esperas en los concesionarios. Pro Locksmith Tech es un taller de cerrajería automotriz sobre ruedas que llega directamente a su automóvil en cualquier estacionamiento, carretera o domicilio del Sur de la Florida. Cortamos llaves con corte láser y programamos llaves inteligentes de botón de arranque por botón en el acto mediante escáneres diagnósticos OBD-II.',
    features: [
      'Apertura urgente de autos sin rasguños',
      'Corte de llaves automotrices con maquinaria CNC láser',
      'Programación de transpondedores y controles remotos ',
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
  'lock-cambio de combinación-service': {
    name: 'Cambio de Combinación ',
    badge: 'Ahorro Inteligente',
    categoryName: 'Residencial',
    shortDescription: 'Cambie las llaves de su casa o negocio manteniendo sus cerraduras actuales y ahorrando hasta un 70%.',
    fullDescription: 'El cambio de combinación consiste en reemplazar los pines internos del cilindro para que las llaves antiguas dejen de funcionar y solo una llave nueva pueda abrirlo. Es la opción ideal al mudarse a una nueva casa, terminar contratos de alquiler o tras la salida de empleados.',
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
    name: 'Programación de Controles ',
    badge: 'Tecnología OBD',
    categoryName: 'Automotriz',
    shortDescription: 'Programación de controles remotos y llaves de proximidad con botón de arranque de arranque por botón.',
    fullDescription: 'Programamos controles remotos, mandos de alarma y llaves de presencia  para una amplia variedad de modelos. Conectamos equipos diagnósticos certificados al puerto OBD-II de su vehículo para sincronizar el sistema inmovilizador de manera segura.',
    features: [
      'Sincronización de sistemas arranque por botón',
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
  },
  'emergency-locksmith-service': {
    name: 'Cerrajero de Emergencia 24 Horas', badge: 'Disponible 24/7', categoryName: 'Emergencia',
    shortDescription: 'Asistencia móvil de cerrajería para emergencias en autos, viviendas y negocios.',
    fullDescription: '¿Necesita ayuda urgente con una cerradura o una llave? Pro Locksmith Tech ofrece servicio móvil de cerrajería las 24 horas en el sur de Florida. Llámenos para solicitar asistencia en su ubicación.',
    features: ['Aperturas de emergencia', 'Asistencia con llaves', 'Servicio a domicilio', 'Atención las 24 horas']
  },
  'lock-repair': {
    name: 'Reparación de Cerraduras', badge: 'Reparación de Puertas', categoryName: 'Residencial',
    shortDescription: 'Reparación de cerraduras que se atascan, no giran o funcionan mal.',
    fullDescription: 'Revisamos y reparamos cerraduras compatibles para viviendas y comercios. Si su llave no gira, el pestillo no cierra o la cerradura se atasca, llámenos para solicitar servicio móvil.',
    features: ['Reparación de cerraduras', 'Ajuste de pestillos', 'Diagnóstico de fallas', 'Servicio a domicilio']
  },
  'lock-replacement': {
    name: 'Reemplazo de Cerraduras', badge: 'Cerraduras Nuevas', categoryName: 'Residencial',
    shortDescription: 'Cambio de cerraduras dañadas o antiguas en viviendas y negocios.',
    fullDescription: 'Instalamos cerraduras de reemplazo para renovar el acceso a su vivienda o negocio. Podemos ayudarle a elegir herrajes compatibles con su puerta.',
    features: ['Cambio de cerraduras', 'Instalación de cerraduras nuevas', 'Reemplazo de herrajes', 'Servicio móvil']
  },
  'lock-cambio de combinación': {
    name: 'Cambio de Combinación de Cerraduras', badge: 'Llaves Nuevas', categoryName: 'Residencial',
    shortDescription: 'Modificamos cerraduras compatibles para que funcionen con nuevas llaves.',
    fullDescription: 'El cambio de combinación permite conservar una cerradura compatible y cambiar las llaves que la abren. Es una opción útil después de mudarse o cuando necesita recuperar el control de acceso.',
    features: ['Cambio de combinación', 'Nuevas llaves para cerraduras compatibles', 'Servicio residencial', 'Servicio comercial']
  },
  'key-duplication': {
    name: 'Duplicado de Llaves', badge: 'Copias de Llaves', categoryName: 'Automotriz',
    shortDescription: 'Copias de llaves compatibles para autos, puertas y otras cerraduras.',
    fullDescription: 'Realizamos copias de llaves compatibles con diferentes tipos de cerraduras y vehículos. Llámenos para consultar la disponibilidad del tipo de llave que necesita.',
    features: ['Copias de llaves', 'Corte de llaves compatibles', 'Llaves para vehículos', 'Asistencia móvil']
  },
  'key-replacement': {
    name: 'Reemplazo de Llaves', badge: 'Llaves de Reemplazo', categoryName: 'Automotriz',
    shortDescription: 'Ayuda cuando pierde, rompe o necesita reemplazar una llave.',
    fullDescription: 'Si perdió una llave o necesita una nueva, ofrecemos soluciones de reemplazo para llaves compatibles de vehículos y cerraduras. Llámenos para confirmar las opciones disponibles.',
    features: ['Llaves de reemplazo', 'Corte de llaves', 'Llaves de autos compatibles', 'Servicio en su ubicación']
  },
  'lock-installation': {
    name: 'Instalación de Cerraduras', badge: 'Instalación Profesional', categoryName: 'Residencial',
    shortDescription: 'Instalación de cerraduras, cerrojos y herrajes en puertas.',
    fullDescription: 'Instalamos cerraduras y cerrojos compatibles para puertas residenciales y comerciales. Nuestro servicio es móvil y se realiza en la ubicación del cliente.',
    features: ['Instalación de cerraduras', 'Instalación de cerrojos', 'Herrajes para puertas', 'Servicio móvil']
  },
  'security-herrajes': {
    name: 'Herrajes de Seguridad', badge: 'Seguridad de Puertas', categoryName: 'Comercial',
    shortDescription: 'Instalación y mantenimiento de herrajes de seguridad para puertas.',
    fullDescription: 'Ayudamos a mejorar el funcionamiento de puertas y cerraduras mediante herrajes de seguridad compatibles. Llámenos para consultar qué tipo de instalación o reparación necesita.',
    features: ['Herrajes para puertas', 'Instalación de piezas compatibles', 'Reparación de mecanismos', 'Servicio a domicilio']
  },
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
    question: '¿Ofrecen servicio de cerrajería móvil en el Sur de la Florida?',
    answer: 'Sí. Pro Locksmith Tech es un servicio de cerrajería 100% móvil en el Sur de la Florida. Despachamos camionetas taller equipadas directo a su vehículo, casa o negocio en Coral Springs, Fort Lauderdale, Miami y Boca Raton. No requiere acudir a ninguna tienda física; resolvemos su problema en el lugar.'
  },
  {
    id: 'es-faq-2',
    question: '¿Qué tan rápido puede llegar un cerrajero móvil a mi ubicación?',
    answer: 'Nuestros técnicos móviles promedian un tiempo de llegada de 15 a 25 minutos en los condados de Broward, Miami-Dade y Palm Beach. Como nuestras camionetas patrullan activamente las carreteras y avenidas principales del Sur de la Florida, despachamos la unidad más cercana a sus coordenadas al llamar al (754) 261-6528.'
  },
  {
    id: 'es-faq-3',
    question: '¿Qué debo hacer si dejé las llaves adentro de mi auto?',
    answer: 'Si se quedó afuera de su vehículo, llame a Pro Locksmith Tech al (754) 261-6528 para despacho inmediato. Evite alambres u objetos caseros que doblan marcos y dañan sellos de goma. Llegamos con cuñas de aire profesionales y herramientas de alcance largo para abrir su auto o maletero sin rayones.'
  },
  {
    id: 'es-faq-4',
    question: '¿Pueden cortar llaves nuevas y programar controles  en el lugar?',
    answer: 'Sí. Nuestras unidades móviles cuentan con duplicadoras láser CNC computarizadas y escáneres diagnósticos OBD-II. Elaboramos llaves de auto nuevas, programamos chips transponder y configuramos llaves inteligentes de botón de arranque por botón en el acto para marcas americanas, asiáticas y europeas, incluso habiendo perdido todas las copias.'
  },
  {
    id: 'es-faq-5',
    question: '¿Cuál es la diferencia entre cambio de combinación (cambio de combinación) y cambio de cerraduras?',
    answer: 'El cambio de combinación cambia la configuración interna de pines de sus cerraduras actuales para que las llaves antiguas ya no funcionen, ahorrándole hasta un 70% frente a comprar cerraduras nuevas. El reemplazo instala cerraduras y cerrojos Grado 1 o 2 totalmente nuevos, ideal si sus cerraduras están desgastadas, dañadas o desactualizadas.'
  },
  {
    id: 'es-faq-6',
    question: '¿Ofrecen cerraduras comerciales y sistemas de llave maestra para negocios?',
    answer: 'Sí. Pro Locksmith Tech provee cerrajería comercial para locales, oficinas y almacenes en el Sur de la Florida. Instalamos cerraduras de embutir Adams Rite, cerrojos comerciales ANSI Grado 1, cambio de combinación, barras antipánico y sistemas de llave maestra para controlar múltiples accesos con una sola llave.'
  },
  {
    id: 'es-faq-7',
    question: '¿Qué áreas del Sur de la Florida atienden?',
    answer: 'Atendemos todo el corredor tri-condal del Sur de la Florida con centro de despacho en Coral Springs, cubriendo el Condado de Broward (Fort Lauderdale, Pompano Beach, Hollywood, Pembroke Pines), Palm Beach (Boca Raton, Delray Beach, West Palm Beach) y Miami-Dade (Miami, Hialeah, Doral). Vamos a donde usted esté.'
  },
  {
    id: 'es-faq-8',
    question: '¿El servicio de emergencia está disponible 24/7?',
    answer: 'Sí. Pro Locksmith Tech opera las 24 horas del día, los 7 días de la semana, los 365 días del año—incluyendo madrugadas, fines de semana y días festivos. Si enfrenta un auto cerrado, llaves extraviadas o una cerradura dañada, nuestros cerrajeros móviles están de guardia para auxilio inmediato.'
  },
  {
    id: 'es-faq-9',
    question: '¿Cómo solicito un cerrajero móvil de emergencia?',
    answer: 'Para solicitar auxilio móvil inmediato, llame directamente a nuestra línea 24/7 al +1 (754) 261-6528 o envíe un mensaje de texto con su dirección o ubicación GPS. Hablará directamente con un técnico en servicio sin grabaciones automáticas ni demoras.'
  }
];


