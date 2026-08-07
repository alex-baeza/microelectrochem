import { useState } from 'react';
import { motion } from 'motion/react';
import { COURSES, YOUTUBE_VIDEOS } from '../data';
import { Course } from '../types';
import { BookOpen, GraduationCap, Library, Youtube, Play, ExternalLink, X, Users, Globe } from 'lucide-react';

const THESIS_STATS = [
  { 
    level: 'Licenciatura (QFB, Química, Q)', 
    count: '53 tesis', 
    color: 'bg-amber-500', 
    barWidth: 'w-[88%]', 
    description: 'Supervisión de tesis profesionales e incorporación de estudiantes a proyectos de investigación tecnológica y analítica en la Facultad de Química de la UNAM.' 
  },
  { 
    level: 'Maestría en Ciencias', 
    count: '7 tesis', 
    color: 'bg-sky-500', 
    barWidth: 'w-[12%]', 
    description: 'Dirección de tesis de maestría enfocadas en desarrollo de metodologías electroanalíticas, especiación e instrumentación a microescala total.' 
  }
];

export default function TeachingSection() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* Portal Didáctico Oficial AMYD Banner */}
      <div className="p-6 md:p-8 bg-gradient-to-br from-amber-500/10 via-white to-sky-500/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white rounded-3xl border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-xs">
        <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400">
          <Users className="h-5 w-5 shrink-0" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest">
            Portal Didáctico Oficial
          </span>
        </div>

        <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white">
          AMYD • Química Analítica a Microescala Total (FQ UNAM)
        </h4>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
          Acceda al material didáctico oficial para la enseñanza teórica y práctica de la Química Analítica, manuales de apoyo docentes, guías de práctica a microescala total y publicaciones de acceso abierto en el portal institucional.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://amyd.quimica.unam.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-2xs"
          >
            <Globe className="h-4 w-4 mr-2" />
            https://amyd.quimica.unam.mx
          </a>
          <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
            Facultad de Química • UNAM
          </span>
        </div>
      </div>

      {/* 1. Courses List & Consolidated Teaching Summary */}
      <div className="space-y-6">
        <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-slate-50 border-b pb-2 border-slate-200 dark:border-slate-800 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-amber-500 shrink-0" />
          Cursos Docentes Impartidos
        </h4>

        {/* Consolidated SIIA & Historical Statistics Summary Banner */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-3xl space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Resumen de Trayectoria Académica
              </span>
              <h5 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100">
                46 Años de Docencia Ininterrumpida en la UNAM
              </h5>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-800 dark:text-amber-400 font-mono text-xs font-bold rounded-xl border border-amber-500/20 shrink-0">
              1979 – Presente
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-2xs space-y-1">
              <span className="text-2xl font-display font-black text-amber-600 dark:text-amber-400 block">140</span>
              <span className="text-xs font-sans font-bold text-slate-800 dark:text-slate-200 block">Grupos Registrados en SIIA</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">Registro oficial en el sistema de la UNAM.</p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-2xs space-y-1">
              <span className="text-2xl font-display font-black text-sky-600 dark:text-sky-400 block">127</span>
              <span className="text-xs font-sans font-bold text-slate-800 dark:text-slate-200 block">Grupos Licenciatura</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">90.7% de la carga docente oficial.</p>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-2xs space-y-1">
              <span className="text-2xl font-display font-black text-indigo-600 dark:text-indigo-400 block">13</span>
              <span className="text-xs font-sans font-bold text-slate-800 dark:text-slate-200 block">Grupos Posgrado</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">5 Maestría y 8 Especialidad en Q. Analítica.</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
            Las asignaturas troncales más impartidas incluyen <strong className="text-slate-900 dark:text-white">Química Analítica III</strong> (37 grupos), <strong className="text-slate-900 dark:text-white">Química Analítica II</strong> (29 grupos), <strong className="text-slate-900 dark:text-white">Química Analítica Instrumental I</strong> (26 grupos) y <strong className="text-slate-900 dark:text-white">Química Analítica I</strong> (22 grupos).
          </p>
        </div>

        {/* Top Courses List */}
        <div className="space-y-3 pt-2">
          <h5 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 flex items-center">
            <Library className="h-4 w-4 mr-2 text-amber-500" />
            Asignaturas Troncales e Instrumentales de Mayor Frecuencia
          </h5>

          <div className="grid grid-cols-1 gap-4">
            {COURSES.map((course: Course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl relative overflow-hidden shadow-2xs"
              >
                <div className="absolute top-5 right-5">
                  <span className={`px-3 py-0.5 text-[9px] font-mono uppercase font-bold rounded-full ${
                    course.level === 'Posgrado'
                      ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 border border-indigo-500/10'
                      : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-500/10'
                  }`}>
                    {course.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                    {course.frequency}
                  </span>
                  <h5 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 pr-20">
                    {course.name}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Historical Block: Period 1979 - 2007 */}
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-2.5 shadow-2xs">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-bold uppercase rounded-md">
              Trayectoria Histórica 1979 – 2007
            </span>
          </div>
          <h5 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
            Etapa Fundacional Docente en la Facultad de Química
          </h5>
          <p className="text-xs text-slate-600 dark:text-slate-350 font-sans leading-relaxed">
            Inició su carrera como Ayudante de Profesor 'A' en 1979 y alcanzó la definitividad como Profesor de Carrera Titular C de Tiempo Completo en 2002. Durante este periodo inicial de 28 años impartió de forma ininterrumpida asignaturas fundamentales de Licenciatura como <em>Química Analítica I, II y III</em>, <em>Equilibrios Químicos Simultáneos</em>, <em>Métodos Electrométricos y de Separación</em>, <em>Métodos Ópticos de Análisis</em>, <em>Desarrollo Analítico</em> y <em>Trabajo de Investigación</em>.
          </p>
        </div>
      </div>

      {/* 2. Thesis Mentorship (Columna única) */}
      <div className="space-y-5">
        <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-slate-50 border-b pb-2 border-slate-200 dark:border-slate-800 flex items-center">
          <GraduationCap className="h-6 w-6 mr-2 text-sky-500 shrink-0" />
          Formación de Investigadores y Tesis Dirigidas
        </h4>

        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-6 shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Dirección y tutoría de trabajos de titulación e investigación académica en la Facultad de Química de la UNAM, con un registro verificado de <strong className="text-slate-900 dark:text-white">60 tesis dirigidas en total</strong> (53 de Licenciatura y 7 de Maestría en Ciencias).
          </p>

          <div className="space-y-6">
            {THESIS_STATS.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-sans font-bold text-slate-800 dark:text-slate-200">
                    {stat.level}
                  </span>
                  <span className="w-fit px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-mono text-xs font-semibold rounded-md shadow-2xs">
                    {stat.count}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color} ${stat.barWidth} rounded-full`} />
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. YouTube Video Gallery (Columna única, recuadros interactivos y estáticos viables para GH Pages) */}
      <div className="space-y-5">
        <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-slate-50 border-b pb-2 border-slate-200 dark:border-slate-800 flex items-center">
          <Youtube className="h-6.5 w-6.5 mr-2 text-red-500 shrink-0" />
          Divulgación de Video y Clases de Laboratorio
        </h4>
        
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
          Acceda a recursos experimentales registrados en video, donde se documenta de forma visual la química analítica y electroquímica a microescala total en el laboratorio del Dr. Baeza.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {YOUTUBE_VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-950 overflow-hidden group">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideoId(video.videoId)}
                    className="p-3 bg-white dark:bg-slate-900 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 text-slate-900 rounded-full shadow-lg transition-all scale-90 group-hover:scale-100 cursor-pointer active:scale-95"
                    aria-label="Reproducir video"
                  >
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                </div>
                {video.duration && (
                  <span className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 bg-slate-950/80 backdrop-blur-3xs text-[10px] font-mono text-white rounded font-bold">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Text Meta Container */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
                <div className="space-y-1.5">
                  <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-snug line-clamp-2">
                    {video.title}
                  </h5>
                  {video.description && (
                    <p className="text-xs text-slate-550 dark:text-slate-400 font-sans leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-850/80">
                  <button
                    onClick={() => setSelectedVideoId(video.videoId)}
                    className="flex items-center text-[10px] font-mono font-bold uppercase tracking-wider text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Play className="h-3 w-3 mr-1 fill-current shrink-0" /> Reproducir
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[10px] font-mono font-medium text-slate-400 hover:text-slate-650 dark:hover:text-slate-200 transition-all cursor-pointer"
                  >
                    Ver en YouTube <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Canal de YouTube Oficial Callout Banner */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-red-500/10 via-slate-900/5 to-amber-500/10 dark:from-red-950/40 dark:via-slate-900 dark:to-slate-950 border border-red-500/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-red-600 text-white rounded-2xl shrink-0 shadow-md">
              <Youtube className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h5 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                Canal Oficial de YouTube: <span className="text-red-600 dark:text-red-400 font-extrabold">El Microlaboratorio</span>
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Para ver más videos demostrativos, clases de laboratorio y experimentos de Química Analítica a Microescala Total, visite el canal oficial.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@elmicrolaboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-bold rounded-xl shadow-xs transition-all shrink-0 cursor-pointer active:scale-98"
          >
            <Youtube className="h-4 w-4 mr-1.5 fill-current" />
            Visitar @elmicrolaboratorio
            <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Inline YouTube Player Modal overlay (Static Client-side lightbox) */}
      {selectedVideoId && (
        <div 
          onClick={() => setSelectedVideoId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs antialiased cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl cursor-default"
          >
            <button
              onClick={() => setSelectedVideoId(null)}
              className="absolute top-4 right-4 p-2.5 bg-slate-950/60 hover:bg-red-500 text-slate-350 hover:text-white rounded-full transition-all cursor-pointer z-10"
              aria-label="Cerrar reproductor"
            >
              <X className="h-4.5 w-4.5" />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                title="YouTube Video Player"
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
