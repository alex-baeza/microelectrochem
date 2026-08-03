import { Publication, ResearchLine, Project, Course, LabEquipment, YouTubeVideo } from './types';

/**
 * ============================================================================
 * ARCHIVO DE DATOS PRINCIPAL - DR. ALEJANDRO BAEZA
 * ============================================================================
 * Este archivo contiene toda la información, textos y datos del portal web.
 * Para actualizar cualquier información (publicaciones, proyectos, cursos, etc.),
 * únicamente debe modificar el texto entre comillas en las secciones siguientes.
 * No es necesario modificar código HTML o componentes de React.
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. LÍNEAS DE INVESTIGACIÓN
 * ---------------------------------------------------------------------------- */
export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'materiales-biomateriales',
    title: '1. Caracterización y Control Analítico de Materiales, Biomateriales y Sistemas Electroactivos',
    description: '',
    objectives: [],
    techniques: [],
    keywords: [],
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sensores-biosensores',
    title: '2. Sensores y Biosensores',
    description: '',
    objectives: [],
    techniques: [],
    keywords: [],
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'especiacion-metales',
    title: '3. Especiación de Metales en Medios Naturales y Ambientales',
    description: '',
    objectives: [],
    techniques: [],
    keywords: [],
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'microescala-total',
    title: '4. Desarrollo de Metodología Analítica en Química Analítica a Microescala Total',
    description: '',
    objectives: [],
    techniques: [],
    keywords: [],
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'material-apoyo-docente',
    title: '5. Elaboración de Material de Apoyo Docente: Artículos, Manuales, Libros, Videos, etc.',
    description: '',
    objectives: [],
    techniques: [],
    keywords: [],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600'
  }
];

export const LAB_EQUIPMENT: LabEquipment[] = [
  {
    id: 'potentiostat-1',
    name: 'Potenciostato/Galvanostato Multicanal de Alta Resolución',
    description: 'Equipo de alta precisión configurado para realizar técnicas voltamperométricas avanzadas simultáneamente, con detección de baja corriente a escala de picoamperios.',
    category: 'Instrumental'
  },
  {
    id: 'potentiostat-portable',
    name: 'Potenciostatos Portátiles Alimentados por USB',
    description: 'Mini-potenciostatos ultracompactos utilizados en trabajo de campo y optimización in-situ de sensores y biosensores, adaptados para uso académico y de laboratorio remoto.',
    category: 'Instrumental'
  },
  {
    id: 'micromanipulator-1',
    name: 'Micromanipulador de Precisión Sub-micrónica',
    description: 'Plataforma mecánica estabilizada antivibración para el posicionamiento físico tridimensional exacto de ultramicroelectrodos en celdas microvolumétricas.',
    category: 'Instrumental'
  },
  {
    id: 'ume-electrodes',
    name: 'Línea de Ultramicroelectrodos (UMEs)',
    description: 'Electrodos de fibra de carbono, platino y oro con radios de núcleo activo que oscilan en el rango de 1 a 25 micras, fabricados internamente.',
    category: 'Electrodos'
  },
  {
    id: 'screen-printed-cell',
    name: 'Celda para Electrodos Serigrafiados (SPEs)',
    description: 'Soportes de acoplamiento seguro y celdas de flujo cerrado optimizadas para chips desechables de tres electrodos con bajo volumen de muestra viva (< 50 microlitros).',
    category: 'Sistemas de Flujo'
  },
  {
    id: 'flow-injector',
    name: 'Sistema de Inyección por Flujo (FIA) Computarizado',
    description: 'Bomba peristáltica multicanal de precisión con válvula de inyección neumática sincronizada para suministrar perfiles dinámicos y reproducibles de muestra.',
    category: 'Sistemas de Flujo'
  }
];

/* ----------------------------------------------------------------------------
 * 2. PUBLICACIONES CIENTÍFICAS (Plantilla editable para datos reales)
 * ----------------------------------------------------------------------------
 * Puede agregar cuantas publicaciones necesite duplicando la estructura.
 */
export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-ejemplo-1',
    title: '[Publicación Científica - Título por actualizar con información real y verificada]',
    authors: 'Baeza, A., et al.',
    journal: 'Nombre de la Revista Científica / Journal Arbitrado (Ejemplo)',
    year: 2024,
    doi: '10.xxxx/ejemplo.2024',
    topic: 'Química Micro-Electroanalítica',
    type: 'Artículo de Revista',
    abstract: 'Espacio de plantilla reservado para ingresar el resumen (abstract) verificado de la publicación real del Dr. Alejandro Baeza. Ingrese los datos definitivos cuando estén disponibles.'
  },
  {
    id: 'pub-ejemplo-2',
    title: '[Publicación Científica - Título por actualizar con información real y verificada]',
    authors: 'Baeza, A., et al.',
    journal: 'Nombre de la Revista Científica / Journal Arbitrado (Ejemplo)',
    year: 2023,
    doi: '10.xxxx/ejemplo.2023',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista',
    abstract: 'Espacio de plantilla reservado para ingresar el resumen verificado. Ingrese el texto final correspondiente a la publicación.'
  },
  {
    id: 'pub-ejemplo-3',
    title: '[Capítulo de Libro / Memoria de Congreso - Título por actualizar]',
    authors: 'Baeza, A.',
    journal: 'Editorial / Memoria de Evento Académico (Ejemplo)',
    year: 2022,
    topic: 'Docencia / Microescala',
    type: 'Capítulo de Libro',
    abstract: 'Espacio reservado para detalles de capítulos de libro, libros docentes o memorias de congreso internacionales y nacionales.'
  }
];

/* ----------------------------------------------------------------------------
 * 3. PROYECTOS DE INVESTIGACIÓN (Plantilla editable para datos reales)
 * ----------------------------------------------------------------------------
 */
export const PROJECTS: Project[] = [
  {
    id: 'proj-ejemplo-1',
    name: '[Proyecto de Investigación - Clave y Título por actualizar con datos reales]',
    description: 'Espacio reservado para la descripción sintética del proyecto de investigación científica o aplicada financiado por UNAM (PAPIIT, PAPIME) o fuentes externas.',
    objective: 'Objetivo general y metas del proyecto de investigación.',
    participants: 'Dr. Alejandro Baeza (Responsable), [Integrantes por verificar]',
    collaborators: 'Facultad de Química, UNAM / Entidades colaboradoras',
    status: 'Activo'
  },
  {
    id: 'proj-ejemplo-2',
    name: '[Proyecto de Investigación / Innovación Docente - Título por actualizar]',
    description: 'Espacio reservado para ingresar la información verificada del proyecto de investigación o proyecto institucional.',
    objective: 'Objetivos específicos del proyecto.',
    participants: 'Dr. Alejandro Baeza (Responsable), [Colaboradores]',
    collaborators: 'Departamento de Química Analítica, FQ UNAM',
    status: 'Activo'
  }
];

/* ----------------------------------------------------------------------------
 * 4. CURSOS Y ASIGNATURAS DOCENTES (Plantilla editable para datos reales)
 * ----------------------------------------------------------------------------
 */
export const COURSES: Course[] = [
  {
    id: 'course-ejemplo-1',
    name: '[Asignatura / Curso Docente Impartido - Título por actualizar]',
    level: 'Licenciatura',
    frequency: 'Semestral',
    description: 'Espacio reservado para la descripción de los contenidos teóricos y prácticos de la asignatura impartida en la Facultad de Química de la UNAM.'
  },
  {
    id: 'course-ejemplo-2',
    name: '[Asignatura / Curso de Posgrado Impartido - Título por actualizar]',
    level: 'Posgrado',
    frequency: 'Semestral / Anual',
    description: 'Espacio reservado para la descripción del curso o seminario de posgrado impartido a nivel maestría y doctorado.'
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'vid-1',
    title: 'Química Analítica y Electroquímica - Material Didáctico 1',
    description: '',
    videoId: 'DY-PMsVnpyQ'
  },
  {
    id: 'vid-2',
    title: 'Taller de Prácticas de Laboratorio a Microescala - Material 2',
    description: '',
    videoId: '94E4xFyqYb8'
  },
  {
    id: 'vid-3',
    title: 'Seminario de Métodos Electroanalíticos Instrumentales - Material 3',
    description: '',
    videoId: '-7LYRx9WDAA'
  },
  {
    id: 'vid-4',
    title: 'Demostración de Microelectrodos y Celdas de Análisis - Material 4',
    description: '',
    videoId: '3VE_2wgcwwQ'
  },
  {
    id: 'vid-5',
    title: 'Cursos Teóricos y Experimentales de Química Analítica - Material 5',
    description: '',
    videoId: '9i4nJyyynLU'
  },
  {
    id: 'vid-6',
    title: 'Conferencia y Divulgación Científica en Electroquímica - Material 6',
    description: '',
    videoId: 'cQHwiFp7cyQ'
  }
];

/* ----------------------------------------------------------------------------
 * 5. INFORMACIÓN INSTITUCIONAL Y DE CONTACTO
 * ----------------------------------------------------------------------------
 */
export const CONTACT_INFO = {
  name: 'DR. ALEJANDRO BAEZA',
  academyPosition: 'Profesor Titular C TC',
  institution: 'UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO',
  faculty: 'FACULTAD DE QUÍMICA',
  department: 'DEPARTAMENTO DE QUÍMICA ANALÍTICA',
  laboratory: 'Laboratorios anexos 3E y 3F de Química micro-electroanalítica',
  office: 'Edificio "A" 3er piso, Laboratorios anexos 3E y 3F, Facultad de Química UNAM',
  phone: '56-22-37-50',
  email: 'baeza@unam.mx',
  website: 'https://amyd.quimica.unam.mx',
  orcid: '0000-0002-3942-9983',
  googleScholarId: 'zR7T8sAAAAAJ',
  googleScholarUrl: 'https://scholar.google.com/citations?user=zR7T8sAAAAAJ&hl=es',
  orcidUrl: 'https://orcid.org/0000-0002-3942-9983',
  researchGateUrl: 'https://www.researchgate.net/profile/Alejandro-Baeza-4',
  academicStatus: 'PRIDE Nivel D (1996 - 2015)'
};
