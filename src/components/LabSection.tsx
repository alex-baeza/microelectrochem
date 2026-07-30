import { motion } from 'motion/react';
import { Beaker, Users, MapPin, GraduationCap, BookOpen, Sparkles, Building2, Phone, Mail, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const PARTICIPANTS = [
  {
    title: 'Bachillerato y Licenciatura',
    badge: 'Iniciación Temprana',
    description: 'Estudiantes de bachillerato y licenciatura en los programas de "Jóvenes hacia la investigación" y "Veranos en la ciencia".',
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />
  },
  {
    title: 'Prácticas y Servicio Social',
    badge: 'Entrenamiento Técnico',
    description: 'Estancias para cubrir prácticas profesionales, servicio social o entrenamiento técnico.',
    icon: <Users className="h-5 w-5 text-sky-500" />
  },
  {
    title: 'Tesistas de Grado',
    badge: 'Investigación Original',
    description: 'Tesistas de licenciatura y co-tesistas de posgrado.',
    icon: <Beaker className="h-5 w-5 text-indigo-500" />
  },
  {
    title: 'Profesores e Investigadores',
    badge: 'Colaboración Académica',
    description: 'Profesores en estancias de actualización o en proyectos de colaboración nacionales y extranjeros.',
    icon: <BookOpen className="h-5 w-5 text-emerald-500" />
  }
];

export default function LabSection() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      
      {/* Intro presentation section without heavy card box */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 bg-amber-500/10 text-amber-800 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
            {CONTACT_INFO.institution}
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-sky-500/10 text-sky-800 dark:text-sky-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-sky-500/20">
            {CONTACT_INFO.faculty}
          </span>
        </div>

        <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
          Laboratorios Anexos 3E y 3F de Química Micro-Electroanalítica
        </h3>

        <div className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
          <p>
            Este laboratorio está dedicado a la investigación, la docencia y la difusión de la <strong className="text-amber-700 dark:text-amber-400 font-bold">Química Analítica</strong> en general y a la <strong className="text-sky-700 dark:text-sky-400 font-bold">electroquímica analítica</strong> en particular. Desde 1986 ha generado un número importante de tesis de licenciatura y posgrado, proyectos de investigación básica y aplicada, trabajos en congresos, publicaciones nacionales e internacionales, así como material didáctico para la enseñanza teórica y práctica de la Química Analítica en todos sus cursos de licenciatura y en electroquímica analítica avanzada así como cursos nacionales e internacionales.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-600 dark:text-slate-300">
          <div className="flex items-center space-x-2 p-2.5 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <Building2 className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{CONTACT_INFO.department} • Edificio "A" 3er piso</span>
          </div>
          <div className="flex items-center space-x-2 p-2.5 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <Phone className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span>Tel. {CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center space-x-2 p-2.5 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline text-slate-700 dark:text-slate-200 font-semibold">
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-2 p-2.5 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <Globe className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-700 dark:text-amber-300 font-bold">
              {CONTACT_INFO.website}
            </a>
          </div>
        </div>
      </div>

      {/* Participantes en Proyectos de Investigación y Docencia */}
      <div className="space-y-5">
        <div className="border-b pb-2 border-slate-200 dark:border-slate-800">
          <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-slate-50 flex items-center">
            <Users className="h-6 w-6 mr-2 text-amber-500 shrink-0" />
            En los Proyectos de Investigación y Docencia Participan:
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PARTICIPANTS.map((part, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-2 shadow-2xs hover:border-amber-500/40 hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                  {part.icon}
                </div>
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-extrabold rounded border border-amber-500/20 uppercase">
                  {part.badge}
                </span>
              </div>
              <h5 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 pt-1">
                {part.title}
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {part.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
