import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Briefcase, Microscope, BookOpen, Sparkles, ChevronDown, ChevronUp, Users, CheckCircle2, ShieldCheck, Globe, Star } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <GraduationCap className="h-5 w-5 text-amber-500" />, title: 'Formación y Menciones', text: '1.er graduado en el Doctorado en Química Analítica de la UNAM (1997). Licenciatura con Mención Honorífica, Medallas Gabino Barreda y Alfonso Caso.' },
  { icon: <Award className="h-5 w-5 text-yellow-500" />, title: 'Premios Nacionales e Internacionales', text: 'Premio Nacional de Química "Andrés Manuel del Río" 2015 (Área Docencia) y Best Poster Award ISE Taiwan 2015.' },
  { icon: <Microscope className="h-5 w-5 text-sky-500" />, title: 'Microescala Total', text: 'Profesor a nivel nacional e internacional pionero de la Química Analítica a Microescala Total e investigación-docencia.' },
  { icon: <Briefcase className="h-5 w-5 text-indigo-500" />, title: 'Cátedras y Distinciones UNAM', text: 'Cátedras especiales de la UNAM, Premio RDUNJA, PRIDE Nivel D y SNI (1996-2002 por decisión propia).' }
];

const SEMBLANZA_PERIODS = [
  {
    id: 'formacion',
    period: 'Formación Académica',
    badge: 'Grados UNAM',
    title: 'Licenciatura, Maestría y Primer Doctorado en Química Analítica de la UNAM',
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
    details: [
      'Obtiene el título profesional de Licenciatura en Bioquímica (QFB) por la Facultad de Química de la UNAM con Mención Honorífica.',
      'Cursa la Maestría en Ciencias Químicas (Química Analítica) en la Facultad de Química UNAM, siendo acreedor a la Medalla "Gabino Barreda".',
      'En 1997 se convierte en el Primer estudiante de la UNAM graduado en el Doctorado de Química Analítica. En 1998 le es otorgada la Medalla "Alfonso Caso" por sus estudios de doctorado.'
    ]
  },
  {
    id: 'proyeccion-internacional',
    period: 'Internacional y Asesorías',
    badge: '12 Países (América y Europa)',
    title: 'Profesor e Instructor Internacional en 18 Universidades e Instituciones',
    icon: <Globe className="h-5 w-5 text-indigo-500" />,
    details: [
      'Profesor e instructor reconocido de Química Analítica a Microescala Total y Electroquímica en 18 instituciones académicas internacionales:',
      '• Cuba: Universidad de La Habana, Universidad Central de Las Villas y Universidad de Oriente (Santiago de Cuba)',
      '• Colombia: Universidad Católica (Pereira), Universidad de Córdoba (Montería), Universidad de Medellín, Universidad de Caldas (Manizales) y Universidad del Quindío (Armenia)',
      '• Perú: Universidad de Lima',
      '• Chile: Universidad de Ciencias de la Educación (Santiago)',
      '• Argentina: Universidad de Córdoba',
      '• Uruguay: Universidad Oriental del Uruguay (Montevideo)',
      '• Ecuador: Universidad Central del Ecuador (Quito)',
      '• Guatemala: Universidad San Carlos',
      '• Francia: Université de Rennes-I',
      '• España: Instituto de Investigación de Recursos Naturales (León)',
      '• Alemania: Bergische Universität (Wuppertal)',
      '• México: Centro Internacional de Mejoramiento de Maíz y Trigo (CIMMYT, Chapingo) y UNAM',
      '2002-2014: Miembro del Comité Editorial de la Revista Chilena de Educación Química.'
    ]
  },
  {
    id: 'premios-recientes',
    period: '2015 - Presente',
    badge: 'Premio Nacional y Galardón ISE',
    title: 'Premio Nacional de Química "Andrés Manuel del Río" y Best Poster Award ISE',
    icon: <Star className="h-5 w-5 text-emerald-500" />,
    details: [
      'En 2015 es galardonado con el Premio Nacional de Química "Andrés Manuel del Río" en el Área de Docencia, otorgado por la Sociedad Química de México.',
      'En 2015 recibe el Best Poster Award otorgado por la International Society of Electrochemistry en Taiwán.'
    ]
  }
];

const AWARDS_LIST = [
  { year: '2015', name: 'Premio Nacional de Química "Andrés Manuel del Río"', entity: 'Sociedad Química de México', desc: 'Galardón nacional en el Área de Docencia por contribuciones fundamentales a la enseñanza de la Química Analítica.' },
  { year: '2015', name: 'Best Poster Award', entity: 'International Society of Electrochemistry (Taiwan)', desc: 'Reconocimiento internacional otorgado en el congreso de la ISE en Taiwán por investigación en electroquímica.' },
  { year: '2014', name: 'Mención Especial por XV Años de Difusión de Química Analítica a Microescala', entity: 'Universidad de Oriente, Santiago de Cuba', desc: 'Otorgada en la 21.ª Conferencia de Química por la participación sostenida e impacto de alcance internacional.' },
  { year: '2010', name: 'Cátedra Especial "Alberto Urbina del Raso"', entity: 'Facultad de Química, UNAM & AAPAUNAM 024', desc: 'Otorgada por el Colegio de Profesores de la Facultad de Química y la Sección 024 de AAPAUNAM.' },
  { year: '2006', name: 'Profesor Invitado', entity: 'Universidad de León, España', desc: 'Laboratorio de Energías Renovables, Instituto de Ingeniería.' },
  { year: '2005', name: 'Profesor Invitado', entity: 'Université de Rennes-I, Francia', desc: 'Laboratorio de Matière Condensée et Systèmes Electroactifs.' },
  { year: '2003', name: 'Medalla de la Universidad Iberoamericana', entity: 'Universidad Iberoamericana', desc: 'Por participación por parte de México como profesor en el 3.er Simposium Internacional de Química a Microescala.' },
  { year: '2002', name: 'Comité Editorial Internacional', entity: 'Revista Chilena de Educación Química', desc: 'Miembro designado del Comité Editorial de la revista internacional.' },
  { year: '1998', name: 'Medalla "Alfonso Caso"', entity: 'UNAM', desc: 'Otorgada por el H. Consejo Universitario por los estudios y tesis de Doctorado en Química Analítica.' },
  { year: '1997', name: '1.er Graduado del Doctorado en Química Analítica UNAM', entity: 'Facultad de Química, UNAM', desc: 'Primer estudiante graduado en el programa de Doctorado de Química Analítica de la UNAM.' },
  { year: '1993', name: 'Programa de Estímulos DGAPA (4 s.m. Alta Productividad)', entity: 'DGAPA UNAM', desc: 'Reconocimiento a la alta productividad académica con puntaje de 4 salarios mínimos.' },
  { year: '1991 - 1992', name: 'Programa de Estímulos DGAPA (2.5 s.m. Alta Productividad)', entity: 'DGAPA UNAM', desc: 'Reconocimiento a la alta productividad académica con puntaje de 2.5 salarios mínimos.' },
  { year: '1990', name: 'Programa de Estímulos de Iniciación a la Investigación', entity: 'DGAPA UNAM', desc: 'Apoyo y reconocimiento de la DGAPA a proyectos de investigación científica.' },
  { year: '1987', name: 'Medalla "Gabino Barreda"', entity: 'UNAM', desc: 'Otorgada por estudios de Maestría en Ciencias Químicas (Química Analítica).' },
  { year: '1987', name: 'Diploma a la Excelencia Académica', entity: 'Universidad La Salle', desc: 'Reconocimiento al mérito y desempeño académico sobresaliente.' },
  { year: '1982', name: 'Graduado con Mención Honorífica en Licenciatura (QFB)', entity: 'Facultad de Química, UNAM', desc: 'Grado profesional en Bioquímica acreditado con Mención Honorífica.' }
];

export default function AboutProfile() {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>(null);

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* 1. Header & Executive Summary */}
      <div className="space-y-4">
        <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-50 leading-tight">
          Semblanza del Profesor Dr. Alejandro Baeza
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          Profesor Titular C de Tiempo Completo en la Facultad de Química de la UNAM. Licenciado en Bioquímica (QFB) con Mención Honorífica, Maestro y Doctor en Química Analítica por la UNAM (primer graduado de dicho doctorado en 1997). Es referente internacional en <strong>Química Analítica a Microescala Total</strong>, <strong>Electroquímica Analítica</strong> y vinculación investigación-docencia.
        </p>
      </div>

      {/* 2. Key Stats Summary Bar */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-2xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block text-2xl md:text-3xl font-display font-black text-amber-500">2015</span>
            <span className="block text-[11px] font-sans font-bold text-slate-700 dark:text-slate-300">Premio Nacional de Química</span>
            <span className="block text-[10px] font-mono text-slate-400">"Andrés Manuel del Río"</span>
          </div>
          <div className="space-y-1 border-l border-slate-200 dark:border-slate-800 pl-4">
            <span className="block text-2xl md:text-3xl font-display font-black text-sky-500">1997</span>
            <span className="block text-[11px] font-sans font-bold text-slate-700 dark:text-slate-300">1.er Doctor Q. Analítica UNAM</span>
            <span className="block text-[10px] font-mono text-slate-400">Medalla Alfonso Caso</span>
          </div>
          <div className="space-y-1 md:border-l border-slate-200 dark:border-slate-800 md:pl-4">
            <span className="block text-2xl md:text-3xl font-display font-black text-indigo-500">12 Países</span>
            <span className="block text-[11px] font-sans font-bold text-slate-700 dark:text-slate-300">Presencia Internacional</span>
            <span className="block text-[10px] font-mono text-slate-400">18 Instituciones Educativas</span>
          </div>
          <div className="space-y-1 border-l border-slate-200 dark:border-slate-800 pl-4">
            <span className="block text-2xl md:text-3xl font-display font-black text-emerald-500">Nivel D</span>
            <span className="block text-[11px] font-sans font-bold text-slate-700 dark:text-slate-300">PRIDE Sostenido</span>
            <span className="block text-[10px] font-mono text-slate-400">1996 - 2015</span>
          </div>
        </div>
      </div>

      {/* 3. Performance Highlights */}
      <div className="space-y-4">
        <h4 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center">
          <CheckCircle2 className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
          Pilares del Ejercicio Académico
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HIGHLIGHTS.map((hl, i) => (
            <div 
              key={i} 
              className="p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl flex items-start space-x-3.5"
            >
              <div className="p-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shrink-0 shadow-2xs">
                {hl.icon}
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100">{hl.title}</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{hl.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Interactive Chronological Semblanza Timeline */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 dark:border-slate-800">
          <h4 className="font-display font-black text-xl text-slate-900 dark:text-slate-50 flex items-center">
            <Briefcase className="h-6 w-6 mr-2.5 text-sky-500 shrink-0" />
            Trayectoria Académica y CV Resumido
          </h4>
        </div>

        <div className="space-y-4">
          {SEMBLANZA_PERIODS.map((period) => {
            const isExpanded = expandedPeriod === period.id;
            return (
              <div
                key={period.id}
                className={`bg-white dark:bg-slate-900 border transition-all duration-300 rounded-2xl overflow-hidden shadow-2xs hover:-translate-y-1 hover:shadow-md ${
                  isExpanded
                    ? 'border-amber-500/70 dark:border-amber-500/60 shadow-sm ring-1 ring-amber-500/30'
                    : 'border-slate-200/90 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50'
                }`}
              >
                <button
                  onClick={() => setExpandedPeriod(isExpanded ? null : period.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shrink-0 mt-0.5">
                      {period.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-extrabold uppercase rounded border border-amber-500/20">
                          {period.period}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                          {period.badge}
                        </span>
                      </div>
                      <h5 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
                        {period.title}
                      </h5>
                      <div className="flex items-center space-x-1.5 pt-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                        <span>{isExpanded ? 'Ocultar información' : 'Haz clic para más información'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 p-5 space-y-3"
                    >
                      {period.details.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Honors & Recognition Grid */}
      <div className="space-y-5 pt-4">
        <h4 className="font-display font-black text-xl text-slate-900 dark:text-slate-50 flex items-center border-b pb-3 dark:border-slate-800">
          <Award className="h-6 w-6 mr-2.5 text-amber-500 shrink-0" />
          Premios, Medallas y Distinciones Institucionales
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS_LIST.map((award, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-2 shadow-2xs hover:border-amber-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-extrabold rounded border border-amber-500/20">
                  {award.year}
                </span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                  {award.entity}
                </span>
              </div>
              <h5 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">
                {award.name}
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Reconocimientos y Cátedras Institucionales (Sección independiente al final) */}
      <div className="space-y-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
        <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-500/5 via-white to-sky-500/5 dark:from-amber-500/10 dark:via-slate-900 dark:to-sky-500/10 border border-amber-500/30 dark:border-amber-500/30 rounded-2xl shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-slate-50">
                  Reconocimientos y Cátedra "Juan Salvador Agraz"
                </h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 bg-white/80 dark:bg-slate-950/60 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1">
              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-amber-500 shrink-0" />
                Cátedra Especial "Juan Salvador Agraz"
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                Titular de la Cátedra Especial en 1994 y 1995 por excelencia en la labor docente en la Facultad de Química.
              </p>
            </div>

            <div className="p-3.5 bg-white/80 dark:bg-slate-950/60 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1">
              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-amber-500 shrink-0" />
                Premio RDUNJA (1997)
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                Premio RDUNJA (Reconocimiento Distinción Universidad Nacional para Jóvenes Académicos) en el área de Docencia en Ciencias Naturales.
              </p>
            </div>

            <div className="p-3.5 bg-white/80 dark:bg-slate-950/60 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1">
              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-amber-500 shrink-0" />
                PRIDE Nivel D (1996 - 2015)
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                Sostenido en el nivel máximo (D) del Programa de Reconocimiento al Desempeño del Personal Académico de Tiempo Completo.
              </p>
            </div>

            <div className="p-3.5 bg-white/80 dark:bg-slate-950/60 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1">
              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-amber-500 shrink-0" />
                SNI Nivel I (1996 - 2002)
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                Miembro del Sistema Nacional de Investigadores del CONAHCYT (Nivel I) de 1996 a 2002 por decisión propia.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
