import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PUBLICATIONS } from '../data';
import { Publication } from '../types';
import { Search, FileText, ExternalLink, Calendar, BookOpen, Layers, Info } from 'lucide-react';

export default function Publications() {
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('Todos');
  const [selectedTopic, setSelectedTopic] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

  // Helper to generate correct asset paths depending on production base path
  const getAssetPath = (path: string): string => {
    const base = ((import.meta as any).env?.BASE_URL) || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanBase = base.endsWith('/') ? base : base + '/';
    return cleanBase + cleanPath;
  };

  // Derive unique filter categories from data
  const years = useMemo(() => {
    const allYears = PUBLICATIONS.map(p => p.year.toString());
    return ['Todos', ...Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a))];
  }, []);

  const topics = useMemo(() => {
    const allTopics = PUBLICATIONS.map(p => p.topic);
    return ['Todos', ...Array.from(new Set(allTopics))];
  }, []);

  const types = useMemo(() => {
    const allTypes = PUBLICATIONS.map(p => p.type);
    return ['Todos', ...Array.from(new Set(allTypes))];
  }, []);

  // Filter Publications
  const filteredPubs = useMemo(() => {
    return PUBLICATIONS.filter(pub => {
      const matchSearch = 
        pub.title.toLowerCase().includes(search.toLowerCase()) || 
        pub.authors.toLowerCase().includes(search.toLowerCase()) || 
        pub.journal.toLowerCase().includes(search.toLowerCase()) || 
        (pub.doi && pub.doi.toLowerCase().includes(search.toLowerCase())) ||
        (pub.abstract && pub.abstract.toLowerCase().includes(search.toLowerCase()));

      const matchYear = selectedYear === 'Todos' || pub.year.toString() === selectedYear;
      const matchTopic = selectedTopic === 'Todos' || pub.topic === selectedTopic;
      const matchType = selectedType === 'Todos' || pub.type === selectedType;

      return matchSearch && matchYear && matchTopic && matchType;
    });
  }, [search, selectedYear, selectedTopic, selectedType]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstractId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Hub */}
      <div className="p-5 md:p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-150/60 dark:border-slate-800/80 rounded-2xl space-y-4">
        
        {/* Text Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Buscar publicaciones por título, autor, revista, DOI o palabras claves..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-xl font-sans text-sm outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-xs"
          />
        </div>

        {/* Filters Select Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Year Filter */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center space-x-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Filtrar por Año</span>
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs rounded-lg outline-hidden focus:border-amber-500"
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Topic Filter */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center space-x-1">
              <Layers className="h-3.5 w-3.5" />
              <span>Línea / Tema</span>
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs rounded-lg outline-hidden focus:border-amber-500"
            >
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center space-x-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Tipo de Publicación</span>
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs rounded-lg outline-hidden focus:border-amber-500"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

        </div>
      </div>

      {/* Publications Listing */}
      <div className="space-y-4">
        {filteredPubs.length > 0 ? (
          filteredPubs.map((pub: Publication, index) => {
            const isAbstractExpanded = expandedAbstractId === pub.id;
            const pdfPath = pub.pdfUrl ? getAssetPath(pub.pdfUrl) : '#';

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl p-5 hover:border-amber-500/50 dark:hover:border-amber-400/40 shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-amber-500 dark:group-hover:bg-yellow-400 rounded-l-xl transition-colors" />

                <div className="pl-3 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    {/* Header Tags */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[9px] font-mono uppercase font-bold tracking-wider">
                        {pub.type}
                      </span>
                      <span className="px-2 py-0.5 bg-sky-50 dark:bg-sky-950/20 text-sky-700 dark:text-sky-400 rounded text-[9px] font-mono uppercase font-bold tracking-wider">
                        {pub.topic}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-450 dark:text-slate-550 flex items-center">
                        <Calendar className="h-3 w-3 mr-1 inline" />
                        {pub.year}
                      </span>
                    </div>

                    {/* PDF Title */}
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 leading-snug">
                      <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-700 dark:hover:text-yellow-400 hover:underline transition-colors"
                      >
                        {pub.title}
                      </a>
                    </h3>

                    {/* Authors and Journal */}
                    <div className="space-y-1">
                      <p className="text-xs text-slate-600 dark:text-slate-350 font-sans">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">Autores:</span> {pub.authors}
                      </p>
                      <p className="text-xs italic text-slate-500 dark:text-slate-400 font-sans">
                        {pub.journal}
                      </p>
                    </div>

                    {/* Abstract toggle buttons & abstract panel */}
                    {pub.abstract && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleAbstract(pub.id)}
                          className="inline-flex items-center space-x-1 text-xs font-sans font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-850 dark:hover:text-sky-300 transition-colors cursor-pointer"
                        >
                          <Info className="h-3.5 w-3.5" />
                          <span>{isAbstractExpanded ? 'Ocultar Resumen' : 'Ver Resumen'}</span>
                        </button>

                        <AnimatePresence>
                          {isAbstractExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 text-xs text-slate-550 dark:text-slate-400 font-sans leading-relaxed p-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-lg relative overflow-hidden"
                            >
                              {pub.abstract}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Actions & Links Column */}
                  <div className="flex md:flex-col items-start md:items-end justify-between md:justify-start gap-2 pt-2 md:pt-0 self-stretch min-w-[120px]">
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-lg border border-amber-500/10 hover:bg-amber-500 hover:text-slate-950 dark:hover:text-slate-950 dark:hover:bg-yellow-450 transition-all font-sans"
                    >
                      <FileText className="h-4 w-4 mr-1 stroke-[1.8]" />
                      Abrir PDF
                    </a>

                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[10px] font-mono text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1"
                      >
                        <span className="mr-1">DOI:</span>
                        <span className="underline max-w-[100px] truncate">{pub.doi}</span>
                        <ExternalLink className="h-3 w-3 ml-0.5 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <BookOpen className="h-10 w-10 mx-auto text-slate-350 dark:text-slate-650 mb-2" />
            <p className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
              No se encontraron publicaciones que coincidan con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
