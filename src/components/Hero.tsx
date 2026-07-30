import { motion } from 'motion/react';
import { ArrowRight, Sparkles, GraduationCap, Compass, ShieldAlert, Atom, Landmark } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
}





export default function Hero({ onLearnMore }: HeroProps) {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const unamLogoUrl = `${cleanBase}images/unam_logo.png`;
  const labOwlLogoUrl = `${cleanBase}images/lab_owl_logo.png`;
  const profPhotoUrl = `${cleanBase}images/prof_alejandro_baeza.jpg`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 pb-12 lg:py-28">
      {/* Elegant Radial Dot grid background for high-tech scientific visual atmosphere */}
      <div className="absolute inset-0 scientific-grid opacity-25 dark:opacity-[0.14] text-slate-850 dark:text-sky-500 pointer-events-none" />

      {/* Decorative gradient blur rings */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3.5xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-3.5xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN: Text and branding (7 columns) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Logos & Badges Row */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-5">
              <div className="w-20 h-20 md:w-24 md:h-24 p-1.5 sm:p-2 bg-white dark:bg-slate-900/90 rounded-2xl shadow-xs border border-amber-500/20 dark:border-amber-500/30 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src={unamLogoUrl} 
                  alt="Escudo UNAM" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/unam_logo.png';
                  }}
                />
              </div>
              <div className="h-14 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="w-20 h-20 md:w-24 md:h-24 p-1.5 sm:p-2 bg-white dark:bg-slate-900/90 rounded-2xl shadow-xs border border-sky-500/20 dark:border-sky-500/30 flex items-center justify-center shrink-0 overflow-hidden">
                <img 
                  src={labOwlLogoUrl} 
                  alt="Logo Búho Micro-electroanalítica" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './images/lab_owl_logo.png';
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <span className="block text-xs sm:text-sm font-mono font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  Laboratorios 3E y 3F
                </span>
                <span className="block text-sm sm:text-base font-display font-bold text-slate-900 dark:text-slate-100">
                  Micro-electroanalítica
                </span>
              </div>
            </motion.div>

            {/* Title / Description Block */}
            <div className="space-y-4">
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider rounded-full"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>PROFESOR TITULAR C TC</span>
              </motion.span>

              <motion.h1 
                variants={itemVariants}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white tracking-tight leading-none"
              >
                Dr. Alejandro <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-700 to-amber-900 dark:from-white dark:via-sky-400 dark:to-sky-200">
                  Baeza
                </span>
              </motion.h1>

              <motion.div 
                variants={itemVariants}
                className="font-sans font-medium text-sm md:text-base text-slate-600 dark:text-sky-300 space-y-1"
              >
                <span className="block">Departamento de Química Analítica • Facultad de Química</span>
                <span className="block font-semibold text-slate-700 dark:text-slate-300">Universidad Nacional Autónoma de México (UNAM)</span>
              </motion.div>
            </div>

            {/* Core Scientific Pitch */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-3 border-amber-500/50 pl-4 text-left"
            >
              "Investigación enfocada en el desarrollo y aplicación de metodologías electroquímicas y técnicas micro-electroanalíticas para el estudio y resolución de problemas químicos."
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center px-6 py-3.5 bg-primary-light hover:bg-slate-850 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 font-sans font-bold text-xs md:text-sm rounded-xl tracking-wide shadow-md shadow-sky-500/10 cursor-pointer transition-all active:scale-95"
              >
                <span>Conocer Trayectoria</span>
                <ArrowRight className="h-4.5 w-4.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-sans font-bold text-xs md:text-sm rounded-xl tracking-wide transition-all active:scale-95 shadow-2xs"
              >
                <span>Proponer Colaboración</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Researcher Photo with high-end academic frame (5 columns) */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-[340px] md:max-w-[380px] w-full aspect-square p-2 border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl shadow-lg transition-transform duration-500 hover:rotate-1">
              
              {/* Outer decorative glowing elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-sky-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl aspect-square bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                <img 
                  src={profPhotoUrl} 
                  alt="Dr. Alejandro Baeza, Investigador UNAM" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Status Float Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[9px] font-mono text-amber-400 font-bold uppercase tracking-wider">PROFESOR - INVESTIGADOR</span>
                    <span className="block text-xs font-display font-semibold text-white">Dr. Alejandro Baeza</span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Grid corner decoration borders mimicking target grids of scientific scopes */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-slate-300 dark:border-slate-700 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-300 dark:border-slate-700 rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-slate-300 dark:border-slate-700 rounded-br-2xl pointer-events-none" />

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
