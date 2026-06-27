// ─── FAQ de Agenticy ────────────────────────────────────────────────────
// Preguntas frecuentes sobre los servicios, la tecnología y el modelo
// de implementación de Agenticy.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'agentes' | 'rag' | 'implementacion' | 'seguridad' | 'pricing' | 'general';
}

const faqItems: FAQItem[] = [
  {
    id: 'que-es-agenticy',
    question: '¿Qué es Agenticy y cómo funciona?',
    answer:
      'Agenticy es una plataforma de agentes de inteligencia artificial empresariales que reemplazan roles completos dentro de tu organización. Cada agente opera sobre hardware de última tecnología con infraestructura 100% local en tus oficinas, sin dependencia de APIs externas. Los agentes se entrenan con los procesos, documentos y conocimiento específico de tu empresa, y ejecutan tareas de forma autónoma mientras tú mantienes visibilidad y control total a través de un dashboard centralizado.',
    category: 'general',
  },
  {
    id: 'que-es-infraestructura-local',
    question: '¿Qué significa "infraestructura 100% local" y por qué es importante?',
    answer:
      'Significa que todo el procesamiento de IA ocurre dentro de servidores físicos instalados en las oficinas de tu empresa, utilizando hardware de última tecnología. Tus datos nunca abandonan tus instalaciones ni transitan por Internet hacia proveedores cloud. Esto es crítico para empresas que manejan información confidencial, propiedad intelectual, datos de clientes o están sujetas a regulaciones estrictas de protección de datos (GDPR, HIPAA, leyes locales de soberanía de datos).',
    category: 'seguridad',
  },
  {
    id: 'que-roles-pueden-reemplazar',
    question: '¿Qué roles puede reemplazar un agente de Agenticy?',
    answer:
      'CUALQUIER rol que tu empresa necesite. Nuestra lista de más de 30 roles —desde CEO, CTO y CFO hasta Ingeniero de Software, Abogado, Contador, Especialista en Ciberseguridad, Technical Writer y más— es solo ilustrativa. Si tu organización tiene un rol que no aparece en la lista, lo desarrollamos. Cada agente se entrena a medida con los procesos y el conocimiento específico de ese rol en tu organización. No hay límites: si el rol se puede definir, Agenticy lo puede asumir.',
    category: 'agentes',
  },
  {
    id: 'cuanto-tiempo-implementacion',
    question: '¿Cuánto tiempo toma implementar los agentes?',
    answer:
      'Depende de la complejidad y el plan elegido. Un despliegue Starter con hasta 5 agentes puede estar operativo en 2-3 semanas. Un plan Enterprise con agentes ilimitados, RAG avanzado e integración con sistemas legacy típicamente toma entre 6 y 10 semanas. El proceso incluye: análisis de procesos (1-2 semanas), configuración del hardware de última tecnología (3-5 días), entrenamiento de agentes (2-4 semanas) y pruebas de aceptación (1-2 semanas). Para implementaciones globales, nuestro equipo viaja a tus oficinas en cualquier país.',
    category: 'implementacion',
  },
  {
    id: 'necesito-conexion-internet',
    question: '¿Los agentes necesitan conexión a Internet para funcionar?',
    answer:
      'No. Una vez instalados y entrenados, los agentes operan de forma completamente autónoma sobre tu infraestructura 100% local. No requieren conexión a Internet para ejecutar tareas, tomar decisiones o generar resultados. La conexión a Internet solo es necesaria para recibir actualizaciones del modelo base (que tú controlas cuándo aplicar) y para el soporte remoto de nuestro equipo. Si tu política de seguridad lo requiere, podemos operar en un entorno completamente air-gapped.',
    category: 'seguridad',
  },
  {
    id: 'que-es-rag-empresarial',
    question: '¿Qué es el RAG Empresarial y en qué se diferencia de un chatbot convencional?',
    answer:
      'El RAG (Retrieval-Augmented Generation) Empresarial indexa toda la documentación de tu empresa —contratos, manuales, correos, wikis, bases de datos— y permite que tanto tus agentes como tu equipo consulten ese conocimiento en lenguaje natural. A diferencia de un chatbot genérico, nuestro RAG: (1) opera sobre infraestructura 100% local sin exponer tus datos, (2) respeta la semántica y el contexto específico de tu industria, (3) se integra nativamente con los agentes de Agenticy para que tomen decisiones informadas, y (4) se actualiza incrementalmente sin reindexar todo el corpus.',
    category: 'rag',
  },
  {
    id: 'que-hace-diferente-agenticy',
    question: '¿Qué hace diferente a Agenticy frente a otras soluciones de IA empresarial?',
    answer:
      'Tres diferencias fundamentales: Primero, reemplazamos roles completos, no solo automatizamos tareas aisladas. Segundo, todo opera sobre hardware de última tecnología con infraestructura 100% local en tus oficinas —sin dependencia de APIs externas ni proveedores cloud— lo que garantiza soberanía total sobre tus datos. Tercero, nuestro equipo viaja a cualquier país para implementar físicamente la solución en tus instalaciones y capacitar a tu equipo in-situ. No vendemos software como servicio: entregamos una capacidad operativa completa que vive dentro de tu empresa.',
    category: 'general',
  },
  {
    id: 'como-funciona-pricing',
    question: '¿Cómo funciona el pricing? ¿Hay costos ocultos?',
    answer:
      'Nuestros precios son transparentes e incluyen el hardware de última tecnología, el software, la instalación y el soporte correspondiente a cada tier. El plan Starter comienza en $2,499/mes, Professional en $7,999/mes y Enterprise en $19,999/mes. El plan Custom se cotiza a medida según los requerimientos específicos. No hay costos ocultos: el hardware está incluido en la suscripción mensual y las actualizaciones del modelo base no tienen costo adicional. Ofrecemos descuentos por facturación anual (~17% de ahorro).',
    category: 'pricing',
  },
  {
    id: 'que-empresas-pueden-usarlo',
    question: '¿Qué tipo de empresas pueden beneficiarse de Agenticy?',
    answer:
      'Agenticy está diseñado para cualquier organización que opere con procesos definidos y maneje información confidencial. Nuestros clientes típicos incluyen: empresas de servicios profesionales (legales, contables, consultoría), instituciones financieras, empresas de tecnología, manufactureras, entidades gubernamentales, organizaciones de salud, y cualquier empresa con más de 20 empleados que busque escalar su operación sin escalar su nómina proporcionalmente. El plan Starter hace que la automatización de roles sea accesible incluso para startups.',
    category: 'general',
  },
  {
    id: 'como-se-entrenan-agentes',
    question: '¿Cómo se entrenan los agentes con el conocimiento de mi empresa?',
    answer:
      'El proceso de entrenamiento tiene dos fases. Primero, el RAG Empresarial indexa toda tu documentación existente: PDFs, correos, wikis, contratos, procedimientos, bases de datos. Segundo, nuestro equipo trabaja con los expertos de cada rol en tu empresa para documentar los procesos de decisión, flujos de trabajo y criterios que el agente debe seguir. Este conocimiento se incorpora al agente mediante fine-tuning supervisado y reinforcement learning con feedback de tus propios expertos. El resultado es un agente que no solo "sabe" la información de tu empresa, sino que razona y decide como lo haría tu mejor colaborador en ese rol.',
    category: 'agentes',
  },
  {
    id: 'que-soporte-recibo',
    question: '¿Qué tipo de soporte y capacitación reciben mi equipo y mis agentes?',
    answer:
      'El soporte varía por plan: Starter incluye soporte por email en horario laboral; Professional añade soporte prioritario con respuesta en menos de 4 horas y 2 días de capacitación inicial; Enterprise incluye soporte 24/7 con SLA garantizado y 5+ días de capacitación completa in-situ. Adicionalmente, todos los planes incluyen actualizaciones del modelo base. Nuestro servicio de Capacitación Presencial puede contratarse por separado para transformar a tu equipo en power users de los agentes, con módulos por rol y certificación Agenticy.',
    category: 'implementacion',
  },
  {
    id: 'que-pasa-si-cambio-procesos',
    question: '¿Qué sucede si mis procesos de negocio cambian? ¿Los agentes se adaptan?',
    answer:
      'Sí. Los agentes de Agenticy están diseñados para adaptarse a cambios en los procesos de negocio. Cuando modificas un flujo de trabajo, nuestro equipo actualiza la configuración del agente y re-entrena los componentes afectados. Para cambios menores, el RAG Empresarial puede actualizarse incrementalmente en minutos. Para cambios estructurales mayores, ofrecemos ventanas de re-entrenamiento programadas. Los clientes Enterprise y Custom reciben además un Account Manager dedicado que monitorea proactivamente la alineación entre los agentes y la evolución de tu operación.',
    category: 'agentes',
  },
  {
    id: 'puedo-empezar-pocos-agentes',
    question: '¿Puedo empezar con pocos agentes y escalar después?',
    answer:
      'Absolutamente. De hecho, es nuestra recomendación. La mayoría de nuestros clientes comienzan con el plan Starter (5 agentes) automatizando 1-2 departamentos. Una vez que ven los resultados —típicamente en el primer trimestre— escalan a Professional o Enterprise. La infraestructura de hardware de última tecnología está diseñada para crecer: añadir más agentes no requiere reemplazar el hardware, solo activar capacidad adicional. Y como todo corre sobre infraestructura 100% local, no hay costos incrementales por uso de cloud ni APIs.',
    category: 'pricing',
  },
];

export default faqItems;