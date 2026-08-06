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
/* ----------------------------------------------------------------------------
 * 2. PUBLICACIONES CIENTÍFICAS DEL DR. JOSÉ ALEJANDRO BAEZA REYES
 * ----------------------------------------------------------------------------
 */
export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2025-1',
    title: "Study of benzimidazoles' photophysical, electronic and electrochemical properties derived from a Schiff base with Ru(III) and La(III) Ions",
    authors: 'Contreras-Cadena, D.A., Landeros-Rivera, B., Solano-Peralta, A., Baeza-Reyes, A., et al.',
    journal: 'Photochemical & Photobiological Sciences, 24(8), 1309-1326',
    year: 2025,
    url: 'https://doi.org/10.1007/s43630-025-00771-2',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2019-1',
    title: 'Voltammetric method for the quantification of cadmium using noncommercial electrodes and minimal instrumentation',
    authors: 'Vilasó Cadre, J.E., Martínez, A.C., Arada Pérez, M.A., Baeza Reyes, J.A.',
    journal: 'Ecletica Quimica, 44(1), 53-61',
    year: 2019,
    url: 'https://doi.org/10.26850/1678-4618EQJ.V44.1.2019.P53-61',
    topic: 'Microescala / Instrumentación',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2018-1',
    title: 'Minimal instrumentation diaphragmless microphoto-coulometric Determination of SO2 in red wine',
    authors: 'Olvera-García, F., García Mendoza, A., Santiago-Zárate, A., Baeza, A.',
    journal: 'Revista Cubana de Química, 30(3), 495-504',
    year: 2018,
    topic: 'Microescala / Instrumentación',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2018-2',
    title: 'Minimal instrumentation anodic stripping potentiometric analysis (SPA) of trace metal',
    authors: 'Baeza, A., García Mendoza, A., Santiago-Zárate, A.',
    journal: 'Revista Cubana de Química, 30, 256-264',
    year: 2018,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2017-1',
    title: 'Implementation of electrochemical elements for an alternative detection of ochratoxin A',
    authors: 'Aristizábal, D., Giraldo, D., Sánchez, S., Taborda, G., Baeza, A.',
    journal: 'Journal of Physics: Conference Series, 786(1)',
    year: 2017,
    url: 'https://doi.org/10.1088/1742-6596/786/1/012040',
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2016-1',
    title: 'Construction and Metrological Characterization of a Minimal Instrumentation Micropolarograph',
    authors: 'Vilasó, J., Arada, M., Baeza, A., Céspedes, A., Vilasó Cadre, J.E.',
    journal: 'Portugaliae Electrochimica Acta, 34(5), 309-320',
    year: 2016,
    url: 'https://doi.org/10.4152/pea.201605309',
    topic: 'Microescala / Instrumentación',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2016-2',
    title: 'TTF derivative of 2,5-aromatic disubstituted pyrroles, experimental and theoretical study',
    authors: 'Fomina, L., León, C., Bizarro, M., Baeza, A., Gómez-Vidales, V., et al.',
    journal: 'MRS Proceedings, 1819',
    year: 2016,
    url: 'https://doi.org/10.1557/opl.2016.73',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2014-1',
    title: 'Determinación microelectroanalítica de potasio en muestras de interés farmacéutico y clínico',
    authors: 'Domínguez-Romero, A.N., García-Mendoza, A.J., Baeza-Reyes, J.A.',
    journal: 'Revista Cubana de Química, XXVI(2), 137-146',
    year: 2014,
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2014-2',
    title: 'Diseño, construcción y caracterización de titulaciones microcoulombimétricas ácido-base con monitoreo visual y micropotenciométrico: Aproximación metrológica',
    authors: 'Marín-Medina, A., García-Mendoza, A.J., de Santiago-Zárate, A., Baeza-Reyes, A.',
    journal: 'Revista Cubana de Química, XXVI(2), 126-136',
    year: 2014,
    topic: 'Microescala / Instrumentación',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2013-1',
    title: 'Optimization of the Electrodeposition Conditions for Mercury Removal from Vegetal Biomass with Response Surface Methodology',
    authors: 'Marrugo-Negrete, J., Pinedo-Hernández, J., Baeza-Reyes, J.A.',
    journal: 'Portugaliae Electrochimica Acta, 31(2), 107-117',
    year: 2013,
    url: 'https://www.researchgate.net/profile/Jose-Pinedo-2',
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2013-2',
    title: 'Microscale Analytical Potentiometry: Experimental Teaching with Locally Produced Low-Cost Instrumentation',
    authors: 'Vierna, L., García-Mendoza, A., Baeza-Reyes, A.',
    journal: 'Journal of Modern Education Review, 3(5), 407-415',
    year: 2013,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2011-1',
    title: 'Estudio Microelectroanalítico de Ferroceno en cuatro Líquidos Iónicos por técnicas potenciodinámicas y galvanostáticas',
    authors: 'García Mendoza, A., Baeza Reyes, J.A.',
    journal: 'Revista Cubana de Química, XXIII(3), 96-105',
    year: 2011,
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2011-2',
    title: 'Influencia del Nivel de Acidez en la electrorreducción de la p-benzoquinona en dos líquidos iónicos representativos',
    authors: 'García Mendoza, A., Baeza Reyes, J.A.',
    journal: 'Revista Cubana de Química, XXIII(2), 72-79',
    year: 2011,
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2011-3',
    title: 'Modelo Básico de una metodología para la determinación y extracción de mercurio en muestras simuladas de fitorremediación con Phaseolus vulgaris',
    authors: 'Sánchez González, E., Baeza Reyes, J.A., García Mendoza, A.',
    journal: 'Revista Cubana de Química, XXIII(2), 54-57',
    year: 2011,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2010-1',
    title: 'Microelectrodo selectivo de fácil construcción para la determinación de ácido sulfúrico en un sistema microbiano',
    authors: 'Vierna García, L., Baeza Reyes, A.',
    journal: 'Revista FABICIB, 14, 52-57',
    year: 2010,
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2008-1',
    title: 'Electrochemical Recovery of Cadmium from Simulated Waste Nickel-Cadmium Battery Solutions',
    authors: 'Mayén Mondragón, R., Ibáñez Cornejo, J., Vázquez, R., Baeza Reyes, J.A., Oropeza, T.',
    journal: 'Water, Air, & Soil Pollution, 195, 45-55',
    year: 2008,
    url: 'https://doi.org/10.1007/s11270-008-9697-9',
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2008-2',
    title: 'Estudio Microelectroanalítico de Ferroceno en un Líquido Iónico: Tetrafluoroborato de 1-butil-4-metilpiridinio',
    authors: 'García Mendoza, A., de Santiago, A., Baeza Reyes, J.A.',
    journal: 'Revista Cubana de Química, XX(2), 32-41',
    year: 2008,
    url: 'https://www.researchgate.net/publication/266583997',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2007-1',
    title: 'Structure and magnetic properties of the weak ferromagnet Sr2-xLaxIrO4',
    authors: 'Cosio-Castañeda, C., Tavizón, G., Baeza, A., de la Mora, P., Escudero, R.',
    journal: 'Journal of Physics: Condensed Matter, 19, 446210',
    year: 2007,
    url: 'https://doi.org/10.1088/0953-8984/19/44/446210',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2007-2',
    title: 'Contamination Time Effect on Plant Fractions of Cadmium and Zinc Clay Loam Soil',
    authors: 'Ehsan, M., Molumeli, P.A., Espinosa, V., Baeza, A., et al.',
    journal: 'Journal of Applied Sciences, 1-3',
    year: 2007,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2005-1',
    title: 'Alkali and halide-resistant catalysis by the multipotent oxidase from Marinomonas mediterranea',
    authors: 'Jiménez, N., Román, R., Baeza, J.A., Sánchez, A., Vázquez, R., Valderrama, B.',
    journal: 'Journal of Biotechnology, 117(1), 73-82',
    year: 2005,
    url: 'https://doi.org/10.1016/j.jbiotec.2005.01.002',
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2005-2',
    title: 'Effect of Incubation Period on Phosphate Sources in Morelos Soil',
    authors: 'Espinosa, V., Akhtar, M., Baeza, J.A., Mujeeb, A., Núñez, R.',
    journal: 'Pakistan Journal of Biological Sciences, 8(1), 61-64',
    year: 2005,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2005-3',
    title: 'Silvestris pH decreases and the use of W° microsensor to measure site-specific soil parameters',
    authors: 'Akhtar, M., Espinosa, V., Baeza, J.A., Mujeeb, A.',
    journal: 'Journal of Soil Science, 22(2), 41-46',
    year: 2005,
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2004-1',
    title: 'Química microanalítica de ácido acetilsalicílico con microfotocolorímetros de mínima instrumentación (MIMC) de bajo costo',
    authors: 'Baeza Reyes, J.A., Martínez, J.',
    journal: 'Revista Cubana de Química, 16(3), 29-40',
    year: 2004,
    topic: 'Microescala / Instrumentación',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2004-2',
    title: 'Polarographic determination of Km and Vmax of glutathione reductase',
    authors: 'Prado, H., Díaz, P., Ortiz, J., Baeza, J.A.',
    journal: 'Current Separations, 20(4), 117-120',
    year: 2004,
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2004-3',
    title: 'Titulación de halogenuros a microescala total con microsensores de Ag y de microreferencia de bajo costo sin puente salino',
    authors: 'Baeza Reyes, J.A., De Santiago, A., Galicia, E.',
    journal: 'Revista Chilena de Educación Científica, 3(1), 22-25',
    year: 2004,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2004-4',
    title: 'Titulaciones ácido-base a microescala total química usando microsensores de pH y microelectrodo de referencia',
    authors: 'Baeza Reyes, J.A., Vargas, J., Urzúa, T., Rodríguez, J., Cáceres, L.',
    journal: 'Revista Chilena de Educación Científica, 2(2), 25-28',
    year: 2004,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2004-5',
    title: 'Electroquímica analítica de sistemas',
    authors: 'Baeza Reyes, J.A.',
    journal: 'Gaceta de la Facultad de Química UNAM, VII(6), 8-11',
    year: 2004,
    topic: 'Electroquímica Analítica',
    type: 'Divulgación'
  },
  {
    id: 'pub-2003-1',
    title: 'Semicarbazide-Sensitive Amine Oxidase Substrates Potentiate Hydralazine Hypotension: Possible Role of Hydrogen Peroxide',
    authors: 'Vidrio, H., Medina, M., González-Romo, P., Lorenzana-Jiménez, M., Díaz-Arista, P., Baeza, A.',
    journal: 'The Journal of Pharmacology and Experimental Therapeutics, 307, 497-504',
    year: 2003,
    url: 'https://doi.org/10.1124/jpet.103.055350',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2003-2',
    title: 'Microbureta a Microescala Total para Titulometría',
    authors: 'Baeza, A.',
    journal: 'Revista Chilena de Educación Científica, 1(2), 4-7',
    year: 2003,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2003-3',
    title: 'Titulaciones ácido-base Potenciométricas a Microescala Total con Microsensores de pH y de Referencia de Bajo Costo',
    authors: 'Baeza, A.',
    journal: 'Revista Chilena de Educación Científica, 1(2), 16-19',
    year: 2003,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2002-1',
    title: 'Simultaneous determination of nickel and cadmium by differential pulse polarography',
    authors: 'Mayén-Mondragón, R., Baeza, A., Ibáñez, J.G.',
    journal: 'Analytical Sciences, 18, 191-193',
    year: 2002,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2002-2',
    title: 'Hydrogen Peroxide electroanalytical Determination in biological liquid samples',
    authors: 'Díaz, P., Lorenzana, M., Vidrio, H., Baeza, A.',
    journal: 'Proceedings of the Western Pharmacology Society, 45, 112-113',
    year: 2002,
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-2002-3',
    title: 'Chemical modification of heme group improves hemoglobin affinity for hydrophobic substrates in organic media',
    authors: 'Torres, E., Baeza, A., Vázquez-Duhalt, R.',
    journal: 'Journal of Molecular Catalysis B: Enzymatic, 19-20, 437-441',
    year: 2002,
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S1381117702001960',
    topic: 'Sensores y Biosensores',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1998-1',
    title: 'Electrochemistry in buffered organic solvents. Effect of the acidity level on the extension of total pathways of the organic molecules transformation',
    authors: 'Baeza, A., Ortiz, J.L., Macías, N., Aguilar, M., González, F., González, I.',
    journal: 'Recent Research Developments in Electrochemistry, 1, 85-100',
    year: 1998,
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1998-2',
    title: 'Valoraciones bifásicas: determinación de principios activos en medicamentos a p(Vo/Va) impuesto con monitoreo potenciométrico del punto final',
    authors: 'Baeza, A., Ramírez Balderas, J.',
    journal: 'Anuario Latinoamericano de Educación Química, 197-201',
    year: 1998,
    topic: 'Innovación Docente',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1997-1',
    title: 'Control of the electrochemical reduction of o-nitrophenol by pH imposition in acetonitrile',
    authors: 'Baeza, A., Ortiz, J.L., González, I.',
    journal: 'Journal of Electroanalytical Chemistry, 429, 121-127',
    year: 1997,
    url: 'https://doi.org/10.1016/S0022-0728(96)05012-7',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1997-2',
    title: 'Preparative Electrochemical Reductive Methylation of Ortho-hydroxy-para-benzoquinones',
    authors: 'Frontana, B.A., Cárdenas, J., Rodríguez-Han, L., Baeza, A.',
    journal: 'Tetrahedron, 53, 469-478',
    year: 1997,
    url: 'https://doi.org/10.1016/S0040-4020(96)01080-0',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1996-1',
    title: 'Control of the electrochemical reduction of horminone by pH imposition in acetonitrile',
    authors: 'Ortiz, J.L., Delgado, J., Baeza, A., González, I., Sanabria, R., Miranda, R.',
    journal: 'Journal of Electroanalytical Chemistry, 411, 103-107',
    year: 1996,
    url: 'https://doi.org/10.1016/0022-0728(96)04578-0',
    topic: 'Electroquímica Analítica',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1996-2',
    title: 'Trace metal species in aquatic samples of Tabasco Lagoons, Mexico',
    authors: 'Vázquez, G.F., Elias, D.M., Aguayo, J.E.C., Baeza, A., Sharma, V.K.',
    journal: 'Environmental International, 22, 1-6',
    year: 1996,
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1995-1',
    title: 'Speciation of Cr(VI) and Cr(III) in soil extracts with polarographic methods',
    authors: 'Flores-Velez, L., Gutiérrez-Ruiz, Reyes-Salas, Cram Heydrych, Baeza-Reyes, A.',
    journal: 'International Journal of Environmental Analytical Chemistry, 61, 177-187',
    year: 1995,
    url: 'https://www.tandfonline.com/doi/abs/10.1080/03067319508027232',
    topic: 'Especiación y Trazas',
    type: 'Artículo de Revista'
  },
  {
    id: 'pub-1986-1',
    title: 'Tomato Tissue Culture and Isolation of Active Metabolically Protoplasts',
    authors: 'Quintero, A., Baeza, A., Soriano, J.',
    journal: 'Phyton, 46, I',
    year: 1986,
    topic: 'Biomateriales y Biotecnología',
    type: 'Artículo de Revista'
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
