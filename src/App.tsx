import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutProfile from './components/AboutProfile';
import ResearchLines from './components/ResearchLines';
import LabSection from './components/LabSection';
import Publications from './components/Publications';
import ProjectsSection from './components/ProjectsSection';
import TeachingSection from './components/TeachingSection';
import CVViewer from './components/CVViewer';
import ContactSection from './components/ContactSection';
import { Microscope, Library, Bookmark, FileText, Mail, Beaker, UserCheck } from 'lucide-react';

const SECTION_TO_TAB: Record<string, string> = {
  'inicio': 'inicio',
  'perfil': 'inicio',

  'laboratorio': 'laboratorio',
  'investigacion': 'laboratorio',

  'publicaciones': 'publicaciones',
  'proyectos': 'publicaciones',

  'docencia': 'docencia',

  'cv': 'cv',
  'contacto': 'contacto'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  // URL Hash Router and deep link coordinator
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const targetTab = SECTION_TO_TAB[hash] || 'inicio';
        setActiveTab(targetTab);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll navigate execution
  const navigateToSection = (targetId: string) => {
    const targetTab = SECTION_TO_TAB[targetId] || 'inicio';
    setActiveTab(targetTab);
    window.history.pushState(null, '', `#${targetId}`);

    setTimeout(() => {
      if (targetId === targetTab || targetId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-amber-500/30 selection:text-slate-950 transition-colors duration-300 relative">
      
      {/* Global Scientific Dot Grid Background & Glow Circles (Light & Dark mode optimized) */}
      <div className="fixed inset-0 scientific-grid opacity-25 dark:opacity-20 text-slate-800 dark:text-sky-400 pointer-events-none z-0" />
      <div className="fixed top-12 left-4 sm:left-12 w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-3xl sm:blur-3.5xl pointer-events-none z-0 transition-opacity duration-500" />
      <div className="fixed bottom-12 right-4 sm:right-12 w-96 h-96 sm:w-[36rem] sm:h-[36rem] rounded-full bg-sky-500/10 dark:bg-sky-400/20 blur-3xl sm:blur-3.5xl pointer-events-none z-0 transition-opacity duration-500" />
      <div className="fixed top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-indigo-500/5 dark:bg-indigo-500/12 blur-3xl pointer-events-none z-0 transition-opacity duration-500" />

      {/* 1. Navbar Navigation */}
      <Navbar activeSection={activeTab} onNavigate={navigateToSection} />

      {/* Main Tab Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 min-h-[85vh] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-16"
          >
            {/* TAB 1: Inicio (Hero + Perfil) */}
            {activeTab === 'inicio' && (
              <div className="space-y-16">
                <div id="inicio">
                  <Hero onLearnMore={() => navigateToSection('perfil')} />
                </div>

                <div id="perfil" className="scroll-mt-28 border-t pt-12 border-slate-200/80 dark:border-slate-800">
                  <div className="mb-8">
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center">
                      <UserCheck className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                      Semblanza y Trayectoria
                    </h2>
                  </div>
                  <AboutProfile />
                </div>
              </div>
            )}

            {/* TAB 2: Laboratorio (Laboratorio FIRST, Investigación SECOND) */}
            {activeTab === 'laboratorio' && (
              <div className="space-y-16 pt-6">
                {/* Tab Sub-navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => navigateToSection('laboratorio')}
                      className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-400 font-sans text-xs font-bold rounded-xl border border-amber-500/20 transition-all flex items-center cursor-pointer"
                    >
                      <Beaker className="h-4 w-4 mr-1.5" />
                      Laboratorios 3E y 3F
                    </button>
                    <button
                      onClick={() => navigateToSection('investigacion')}
                      className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-800 dark:text-sky-400 font-sans text-xs font-bold rounded-xl border border-sky-500/20 transition-all flex items-center cursor-pointer"
                    >
                      <Microscope className="h-4 w-4 mr-1.5" />
                      Líneas de Investigación
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 hidden sm:block">
                    Laboratorio e Investigación
                  </span>
                </div>

                {/* Section 1: Laboratorio FIRST */}
                <div id="laboratorio" className="scroll-mt-28 space-y-6">
                  <LabSection />
                </div>

                {/* Section 2: Líneas de Investigación SECOND */}
                <div id="investigacion" className="scroll-mt-28 space-y-6 border-t pt-12 border-slate-200/80 dark:border-slate-800">
                  <div className="space-y-2 border-b pb-4 dark:border-slate-800">
                    <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center">
                      <Microscope className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                      Líneas de Investigación
                    </h2>
                  </div>
                  <ResearchLines />
                </div>
              </div>
            )}

            {/* TAB 3: Publicaciones (Publicaciones + Proyectos) */}
            {activeTab === 'publicaciones' && (
              <div className="space-y-16 pt-6">
                {/* Tab Sub-navigation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => navigateToSection('publicaciones')}
                      className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-400 font-sans text-xs font-bold rounded-xl border border-amber-500/20 transition-all flex items-center cursor-pointer"
                    >
                      <Library className="h-4 w-4 mr-1.5" />
                      Publicaciones Científicas
                    </button>
                    <button
                      onClick={() => navigateToSection('proyectos')}
                      className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-800 dark:text-sky-400 font-sans text-xs font-bold rounded-xl border border-sky-500/20 transition-all flex items-center cursor-pointer"
                    >
                      <Bookmark className="h-4 w-4 mr-1.5" />
                      Proyectos de Investigación
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 hidden sm:block">
                    Publicaciones y Proyectos
                  </span>
                </div>

                {/* Section 1: Publicaciones */}
                <div id="publicaciones" className="scroll-mt-28 space-y-6">
                  <div className="space-y-2 border-b pb-4 dark:border-slate-800">
                    <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center">
                      <Library className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                      Publicaciones Científicas
                    </h2>
                  </div>
                  <Publications />
                </div>

                {/* Section 2: Proyectos */}
                <div id="proyectos" className="scroll-mt-28 space-y-6 border-t pt-12 border-slate-200/80 dark:border-slate-800">
                  <div className="space-y-2 border-b pb-4 dark:border-slate-800">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                      Financiamiento y Desarrollo
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center">
                      <Bookmark className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                      Proyectos de Investigación
                    </h2>
                  </div>
                  <ProjectsSection />
                </div>
              </div>
            )}

            {/* TAB 4: Docencia */}
            {activeTab === 'docencia' && (
              <div id="docencia" className="scroll-mt-28 space-y-6 pt-6">
                <TeachingSection />
              </div>
            )}

            {/* TAB 5: CV */}
            {activeTab === 'cv' && (
              <div id="cv" className="scroll-mt-28 space-y-6 pt-6">
                <div className="space-y-2 border-b pb-4 dark:border-slate-800">
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center">
                    <FileText className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                    Curriculum Vitae
                  </h2>
                </div>
                <CVViewer />
              </div>
            )}

            {/* TAB 6: Contacto */}
            {activeTab === 'contacto' && (
              <div id="contacto" className="scroll-mt-28 space-y-6 pt-6">
                <div className="space-y-2 border-b pb-4 dark:border-slate-800">
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white flex items-center">
                    <Mail className="h-7 w-7 mr-2 text-amber-500 shrink-0" />
                    Contacto Académico
                  </h2>
                </div>
                <ContactSection />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern, minimalist footer with university metadata */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900/60 py-10 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs font-sans">
          <div className="space-y-1">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Dr. Alejandro Baeza • Portal Académico Oficial
            </p>
            <p className="text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} Universidad Nacional Autónoma de México (UNAM). Todos los derechos reservados.
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p className="font-mono text-[10px] uppercase text-sky-650 dark:text-sky-500 tracking-wider">
              Facultad de Química • Química Analítica
            </p>
            <p className="text-slate-500 dark:text-slate-500">
              Ciudad Universitaria, CDMX, México.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
