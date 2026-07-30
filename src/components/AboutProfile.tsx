import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Briefcase, Microscope, BookOpen, Sparkles, ChevronDown, ChevronUp, Users, CheckCircle2, ShieldCheck, Globe, Star } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <GraduationCap className="h-5 w-5 text-amber-500" />, title: 'Formación y Menciones', text: '1.er graduado en el Doctorado en Química Analítica de la UNAM (1997). Licenciatura con Mención Honorífica, Medallas Gabino Barreda y Alfonso Caso.' },
  { icon: <Award className="h-5 w-5 text-yellow-500" />, title: 'Premios Nacionales', text: 'Premio Nacional de Química "Andrés Manuel del Río" 2015 (Área Docencia), Distinción Universidad Nacional RDUNJA 1997 y Best Poster Award ISE Taiwan 2015.' },
  { icon: <Microscope className="h-5 w-5 text-sky-500" />, title: 'Microescala Total', text: 'Profesor a nivel nacional e internacional pionero de la Química Analítica a Microescala Total e investigación-docencia.' },
  { icon: <Briefcase className="h-5 w-5 text-indigo-500" />, title: 'Máxima Productividad', text: 'PRIDE Nivel D sostenido de 1996 a 2015. Cátedra Especial "Juan Salvador Agraz" (1994 y 1995) y SNI de 1996 a 2002 por decisión propia.' }
];

const SEMBLANZA_PERIODS = [
  {
    id: 'formacion',
    period: 'Formación Académica',
    badge: 'Grados UNAM',
    title: 'Licenciatura, Maestría y Primer Doctorado en Química Analítica de la UNAM',
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
    summary: 'Licenciatura en Bioquímica (QFB) con mención honorífica. Maestría y Doctorado en Química Analítica por la Facultad de Química UNAM, siendo el 1.er graduado del programa de doctorado en 1997.',
    details: [
      'Obtiene el título profesional de Licenciatura en Bioquímica (QFB) por la Facultad de Química de la UNAM con Mención Honorífica.',
      'Cursa la Maestría en Ciencias Químicas (Química Analítica) en la Facultad de Química UNAM, siendo acreedor a la Medalla "Gabino Barreda".',
      'En 1997 se convierte en el Primer estudiante de la UNAM graduado en el Doctorado de Química Analítica. En 1998 le es otorgada la Medalla "Alfonso Caso" por sus estudios de doctorado.'
    ]
  },
  {
    id: 'catedra-premios',
    period: 'Reconocimientos y Cátedra',
    badge: 'Distinciones Institucionales',
    title: 'Cátedra Juan Salvador Agraz, RDUNJA y PRIDE Nivel D (1996 - 2015)',
    icon: <Award className="h-5 w-5 text-sky-500" />,
    summary: 'Titular de la Cátedra Especial "Juan Salvador Agraz" (1994 y 1995), Premio RDUNJA (1997) y PRIDE Nivel D ininterrumpido de 1996 a 2015.',
    details: [
      'Titular de la Cátedra Especial "Juan Salvador Agraz" en 1994 y 1995 por excelencia en docencia en la Facultad de Química.',
      'Premio "Distinción Universidad Nacional a Jóvenes Académicos" (RDUNJA) en el área de Docencia en Ciencias Naturales en noviembre de 1997.',
      'Sostenido en el programa de máxima productividad académica: PRIDE Nivel D desde 1996 hasta 2015.',
      'Miembro del Sistema Nacional de Investigadores (SNI Nivel I) de 1996 a 2002 por decisión propia.'
    ]
  },
  {
    id: 'proyeccion-internacional',
    period: 'Internacional y Asesorías',
    badge: 'Francia, España, Alemania, Colombia, Cuba',
    title: 'Profesor e Instructor Internacional y Asesor en Investigación y Docencia',
    icon: <Globe className="h-5 w-5 text-indigo-500" />,
    summary: 'Asesor e instructor en universidades de Rennes-I (Francia), León (España), Wuppertal (Alemania), Manizales (Colombia) y Santiago de Cuba (Cuba).',
    details: [
      'Profesor reconocido a nivel nacional e internacional de Química Analítica a Microescala Total.',
      'Ha fungido como Asesor en Investigación y Docencia en instituciones de gran prestigio internacional:',
      '• Université de Rennes-I (Francia)',
      '• Universidad de León (España)',
      '• Bergische Universität Wuppertal (Alemania)',
      '• Universidad de Manizales (Colombia)',
      '• Universidad de Oriente (Santiago de Cuba, Cuba)',
      '2014: Nombrado Miembro del Comité Editorial de la Revista Chilena de Educación Científica.'
    ]
  },
  {
    id: 'premios-recientes',
    period: '2015 - Presente',
    badge: 'Premio Nacional y Galardón ISE',
    title: 'Premio Nacional de Química "Andrés Manuel del Río" y Best Poster Award ISE',
    icon: <Star className="h-5 w-5 text-emerald-500" />,
    summary: 'Máximo galardón de la Sociedad Química de México en Docencia y reconocimiento de la International Society of Electrochemistry en Taiwán.',
    details: [
      'En 2015 es galardonado con el Premio Nacional de Química "Andrés Manuel del Río" en el Área de Docencia, otorgado por la Sociedad Química de México.',
      'En 2015 recibe el Best Poster Award otorgado por la International Society of Electrochemistry en Taiwán.'
    ]
  }
];

const AWARDS_LIST = [
  { year: '2015', name: 'Premio Nacional de Química "Andrés Manuel del Río"', entity: 'Sociedad Química de México', desc: 'Galardón nacional en el Área de Docencia por contribuciones fundamentales a la enseñanza de la Química Analítica.' },
  { year: '2015', name: 'Best Poster Award', entity: 'International Society of Electrochemistry (Taiwan)', desc: 'Reconocimiento internacional otorgado en el congreso de la ISE en Taiwán por investigación en electroquímica.' },
  { year: '2014', name: 'Comité Editorial Internacional', entity: 'Revista Chilena de Educación Científica', desc: 'Miembro designado del Comité Editorial de la revista internacional de educación científica.' },
  { year: '1996 - 2015', name: 'PRIDE Nivel D (Máxima Productividad)', entity: 'DGAPA UNAM', desc: 'Nivel máximo (D) del Programa de Reconocimiento al Desempeño del Personal Académico de Tiempo Completo.' },
  { year: '1998', name: 'Medalla "Alfonso Caso"', entity: 'UNAM', desc: 'Otorgada por el H. Consejo Universitario por los estudios y tesis de Doctorado en Química Analítica.' },
  { year: '1997', name: '1.er Graduado de Doctorado en Química Analítica UNAM', entity: 'Facultad de Química, UNAM', desc: 'Primer estudiante graduado en el programa de Doctorado de Química Analítica de la UNAM.' },
  { year: '1997', name: 'Premio "Distinción Universidad Nacional a Jóvenes Académicos"', entity: 'UNAM (Nov. 1997)', desc: 'RDUNJA en el Área de Docencia en Ciencias Naturales por la vinculación investigación-docencia.' },
  { year: '1996 - 2002', name: 'Sistema Nacional de Investigadores (SNI I)', entity: 'CONAHCYT', desc: 'Miembro del Sistema Nacional de Investigadores de 1996 a 2002 por decisión propia.' },
  { year: '1994 - 1995', name: 'Cátedra Especial "Juan Salvador Agraz"', entity: 'Facultad de Química, UNAM', desc: 'Otorgada en 1994 y 1995 por excelencia docente en la Facultad de Química.' },
  { year: '1986', name: 'Medalla "Gabino Barreda"', entity: 'UNAM', desc: 'Otorgada por estudios de Maestría en Ciencias Químicas (Química Analítica).' },
  { year: '1982', name: 'Licenciatura en Bioquímica (QFB) Mención Honorífica', entity: 'Facultad de Química, UNAM', desc: 'Grado profesional en Bioquímica acreditado con Mención Honorífica.' }
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
            <span className="block text-2xl md:text-3xl font-display font-black text-indigo-500">5 Países</span>
            <span className="block text-[11px] font-sans font-bold text-slate-700 dark:text-slate-300">Asesor Internacional</span>
            <span className="block text-[10px] font-mono text-slate-400">Francia, España, Alemania, Col, Cuba</span>
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
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed line-clamp-2">
                        {period.summary}
                      </p>
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

    </div>
  );
}
