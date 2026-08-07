import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'laboratorio', label: 'Laboratorio' },
  { id: 'publicaciones', label: 'Publicaciones' },
  { id: 'docencia', label: 'Docencia' },
  { id: 'cv', label: 'Currículum' },
  { id: 'contacto', label: 'Contacto' }
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const unamLogoUrl = `${cleanBase}images/unam_logo.png`;

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#020617');
      }
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#f8fafc');
      }
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/95 dark:bg-slate-950/95 shadow-md backdrop-blur-md border-b border-slate-100/10 dark:border-slate-800/20' 
        : 'py-5 bg-slate-50/50 dark:bg-slate-950/30 backdrop-blur-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand/Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleItemClick('inicio')}>
            <div className="h-11 w-11 p-0.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0 overflow-hidden flex items-center justify-center">
              <img 
                src={unamLogoUrl} 
                alt="Logo UNAM" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './images/unam_logo.png';
                }}
              />
            </div>
            <div>
              <span className="font-display font-bold tracking-tight text-lg text-slate-900 dark:text-slate-100 block">
                Dr. Alejandro Baeza
              </span>
              <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-500 dark:text-sky-400 block uppercase">
                UNAM • Facultad de Química
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-sans font-medium transition-colors ${
                    isActive 
                      ? 'text-amber-800 dark:text-amber-400 font-bold' 
                      : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 dark:bg-yellow-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Utility buttons (Theme Switcher and Mobile Menu) */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 px-3 py-2 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all active:scale-95 cursor-pointer"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? (
                <>
                  <Sun className="h-4 w-4 text-amber-500 shrink-0" />
                  <span className="text-xs font-semibold font-sans select-none whitespace-nowrap">Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-sky-400 shrink-0" />
                  <span className="text-xs font-semibold font-sans select-none whitespace-nowrap">Modo Oscuro</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl lg:hidden transition-all active:scale-95"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900/50 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-w-7xl mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-sans font-medium transition-all ${
                      isActive 
                        ? 'bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-yellow-450 border-l-4 border-amber-500' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
