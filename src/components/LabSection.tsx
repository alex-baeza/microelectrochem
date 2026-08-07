import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Beaker, Users, GraduationCap, BookOpen, Building2, Phone, Mail, Globe, MapPin, ExternalLink, Microscope } from 'lucide-react';
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
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const labOwlLogoUrl = `${cleanBase}images/lab_owl_logo.png`;

  const [activeMapTab, setActiveMapTab] = useState<'mexico' | 'internacional'>('mexico');

  // Listen to Datawrapper postMessage auto-height adjustments
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data['datawrapper-height'] !== undefined) {
        const iframes = document.querySelectorAll('iframe');
        for (const chartId in e.data['datawrapper-height']) {
          for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i];
            if (iframe.contentWindow === e.source) {
              const rawHeight = e.data['datawrapper-height'][chartId];
              iframe.style.height = `${rawHeight}px`;
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* Intro presentation section without heavy card box */}
      <div className="space-y-6">
        {/* Quick section navigation buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              const el = document.getElementById('laboratorio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-400 font-sans text-xs font-bold rounded-xl border border-amber-500/20 transition-all flex items-center cursor-pointer active:scale-95"
          >
            <Beaker className="h-4 w-4 mr-1.5 text-amber-500" />
            Laboratorios 3E y 3F
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('investigacion');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-800 dark:text-sky-400 font-sans text-xs font-bold rounded-xl border border-sky-500/20 transition-all flex items-center cursor-pointer active:scale-95"
          >
            <Microscope className="h-4 w-4 mr-1.5 text-sky-500" />
            Líneas de Investigación
          </button>
        </div>

        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-20 w-20 md:h-24 md:w-24 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0 items-center justify-center overflow-hidden">
            <img 
              src={labOwlLogoUrl} 
              alt="Logo Búho Laboratorio" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = './images/lab_owl_logo.png';
              }}
            />
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Laboratorios Anexos 3E y 3F de Química Micro-Electroanalítica
          </h3>
        </div>

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

      {/* Mapas de Presencia Nacional e Internacional en Cursos y Colaboraciones */}
      <div className="space-y-6 pt-2">
        <div className="border-b pb-3 border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-black text-xl sm:text-2xl text-slate-950 dark:text-slate-50 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-sky-500 shrink-0" />
              Presencia e Impacto en Cursos y Colaboraciones
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Alcance de los cursos, talleres e intercambios académicos impartidos a nivel nacional e internacional.
            </p>
          </div>

          {/* Tab buttons with explicit background colors */}
          <div className="inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-2xl gap-2 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setActiveMapTab('mexico')}
              className={`px-4 py-2 text-xs font-mono font-black rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeMapTab === 'mexico'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-500/40 scale-102'
                  : 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900/80'
              }`}
            >
              <span>🇲🇽</span>
              <span>Mapa México</span>
            </button>
            <button
              onClick={() => setActiveMapTab('internacional')}
              className={`px-4 py-2 text-xs font-mono font-black rounded-xl transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeMapTab === 'internacional'
                  ? 'bg-sky-500 text-slate-950 shadow-md ring-2 ring-sky-500/40 scale-102'
                  : 'bg-sky-100 dark:bg-sky-950/70 text-sky-900 dark:text-sky-300 border border-sky-300 dark:border-sky-800 hover:bg-sky-200 dark:hover:bg-sky-900/80'
              }`}
            >
              <span>🌎</span>
              <span>Mapa Internacional</span>
            </button>
          </div>
        </div>

        {/* Map containers */}
        <div className="space-y-8">
          {activeMapTab === 'mexico' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <h5 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
                    Presencia en la República Mexicana
                  </h5>
                </div>
              </div>

              <div className="w-full rounded-2xl overflow-hidden">
                <iframe
                  title="Presencia en la República Mexicana:"
                  aria-label="Symbol map"
                  id="datawrapper-chart-lGI0N"
                  src="https://datawrapper.dwcdn.net/lGI0N/3/"
                  scrolling="no"
                  frameBorder="0"
                  style={{ width: '0', minWidth: '100%', border: 'none', minHeight: '520px' }}
                  height="520"
                  data-external="1"
                  className="w-full bg-white"
                />
              </div>
            </motion.div>
          )}

          {activeMapTab === 'internacional' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between border-b pb-3 border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-lg">
                    <Globe className="h-4 w-4" />
                  </span>
                  <h5 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
                    Presencia Internacional
                  </h5>
                </div>
              </div>

              <div className="w-full rounded-2xl overflow-hidden">
                <iframe
                  title="Presencia Internacional:"
                  aria-label="Mapa del símbolo"
                  id="datawrapper-chart-EYrtu"
                  src="https://datawrapper.dwcdn.net/EYrtu/3/"
                  scrolling="no"
                  frameBorder="0"
                  style={{ width: '0', minWidth: '100%', border: 'none', minHeight: '500px' }}
                  height="500"
                  data-external="1"
                  className="w-full bg-white"
                />
              </div>
            </motion.div>
          )}
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

