import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_LINES } from '../data';
import { ResearchLine } from '../types';
import { Beaker, CheckCircle2, Search, Sparkles, Bookmark, Lightbulb, X, ArrowRight, Layers, Sliders, ChevronRight } from 'lucide-react';

export default function ResearchLines() {
  const [selectedLine, setSelectedLine] = useState<ResearchLine | null>(null);
  const [activeTab, setActiveTab] = useState<'objectives' | 'techniques' | 'applications'>('objectives');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredLines = useMemo(() => {
    return RESEARCH_LINES.filter((line) => {
      const query = searchQuery.toLowerCase();
      return (
        line.title.toLowerCase().includes(query) ||
        line.description.toLowerCase().includes(query) ||
        line.keywords.some(k => k.toLowerCase().includes(query)) ||
        line.techniques.some(t => t.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header & Search */}
      <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-slate-50">
              Líneas de Investigación y Docencia
            </h3>
          </div>

          {bookmarkedIds.length > 0 && (
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
              <Bookmark className="h-3.5 w-3.5 fill-current" />
              <span>{bookmarkedIds.length} guardadas</span>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por técnica (p. ej. UMEs, Voltamperometría), palabra clave o tema..."
            className="w-full pl-10 pr-20 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Limpiar
            </button>
          )}
        </div>

        <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center space-x-1">
          <Lightbulb className="h-3.5 w-3.5 text-amber-500 shrink-0" />
          <span>Haga clic en cualquiera de los recuadros para desplegar sus objetivos, técnicas y aplicaciones.</span>
        </p>
      </div>

      {/* Grid of Uniform Compact Interactive Cards (3 or 4 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredLines.map((line: ResearchLine, index) => {
          const isBookmarked = bookmarkedIds.includes(line.id);

          return (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              onClick={() => {
                setSelectedLine(line);
                setActiveTab('objectives');
              }}
              className="group relative flex flex-col justify-between h-[340px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Compact Card Banner */}
              <div className="relative h-28 overflow-hidden bg-slate-950 shrink-0">
                <img
                  src={line.imageUrl}
                  alt={line.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-slate-950/80 backdrop-blur-md text-amber-400 font-mono text-[9px] uppercase font-black rounded border border-amber-500/30">
                    Línea #{index + 1}
                  </span>

                  <button
                    onClick={(e) => toggleBookmark(line.id, e)}
                    className={`p-1.5 rounded-lg transition-all ${
                      isBookmarked
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-950/60 backdrop-blur-md text-slate-300 hover:text-white'
                    }`}
                  >
                    <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Card Body - Fixed height structure */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {line.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans line-clamp-3 leading-relaxed">
                    {line.description}
                  </p>
                </div>

                {/* Keywords Chips */}
                <div className="flex flex-wrap gap-1 max-h-11 overflow-hidden pt-1">
                  {line.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded font-mono text-[9px] font-semibold"
                    >
                      {kw}
                    </span>
                  ))}
                  {line.keywords.length > 3 && (
                    <span className="px-1 py-0.5 text-slate-400 font-mono text-[9px]">
                      +{line.keywords.length - 3}
                    </span>
                  )}
                </div>

                {/* Click action indicator */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Ver detalles</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredLines.length === 0 && (
        <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
          <Beaker className="h-8 w-8 text-slate-400 mx-auto" />
          <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">
            No se encontraron líneas de investigación coincidentes
          </h4>
          <button
            onClick={() => setSearchQuery('')}
            className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors"
          >
            Ver todas las líneas
          </button>
        </div>
      )}

      {/* Interactive Modal for Selected Card Details */}
      <AnimatePresence>
        {selectedLine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 space-y-5"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedLine(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-full transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Banner Header */}
              <div className="relative h-40 -mx-6 -mt-6 overflow-hidden bg-slate-950 rounded-t-3xl">
                <img
                  src={selectedLine.imageUrl}
                  alt={selectedLine.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-16">
                  <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 font-mono text-[10px] font-extrabold uppercase rounded border border-amber-500/30 inline-block mb-1">
                    Línea de Investigación
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                    {selectedLine.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                {selectedLine.description}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5">
                {selectedLine.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-mono text-[10px] font-extrabold uppercase"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* Interactive Tabs */}
              <div className="space-y-3 pt-2">
                <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setActiveTab('objectives')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      activeTab === 'objectives'
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Objetivos
                  </button>
                  <button
                    onClick={() => setActiveTab('techniques')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      activeTab === 'techniques'
                        ? 'bg-sky-500 text-slate-950 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Técnicas
                  </button>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      activeTab === 'applications'
                        ? 'bg-indigo-500 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Docencia e Impacto
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'objectives' && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl space-y-2">
                    <h4 className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>Objetivos Científicos Principales:</span>
                    </h4>
                    <ul className="space-y-2 pl-2">
                      {selectedLine.objectives.map((obj, i) => (
                        <li key={i} className="text-xs text-slate-800 dark:text-slate-200 flex items-start space-x-2 leading-relaxed">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'techniques' && (
                  <div className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl space-y-3">
                    <h4 className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-700 dark:text-sky-400 uppercase">
                      <Beaker className="h-4 w-4 text-sky-500 shrink-0" />
                      <span>Técnicas e Instrumental Experimental:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLine.techniques.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white dark:bg-slate-950 border border-sky-500/30 text-sky-900 dark:text-sky-300 text-xs font-mono font-bold rounded-lg shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl space-y-2 text-xs text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                    <h4 className="flex items-center space-x-2 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase">
                      <Layers className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span>Integración Docente e Investigación:</span>
                    </h4>
                    <p>
                      Esta línea impulsa la publicación de artículos científicos, el desarrollo de tesis profesionales de licenciatura y posgrado, y la creación de material didáctico experimental para la Facultad de Química de la UNAM.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => toggleBookmark(selectedLine.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    bookmarkedIds.includes(selectedLine.id)
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Bookmark className="h-4 w-4" />
                  <span>
                    {bookmarkedIds.includes(selectedLine.id) ? 'Línea Guardada' : 'Guardar Línea'}
                  </span>
                </button>

                <button
                  onClick={() => setSelectedLine(null)}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
