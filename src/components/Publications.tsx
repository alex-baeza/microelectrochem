import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PUBLICATIONS } from '../data';
import { Publication } from '../types';
import { Search, ExternalLink, Calendar, BookOpen, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function Publications() {
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('Todos');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

  // Derive unique years from data
  const years = useMemo(() => {
    const allYears = PUBLICATIONS.map(p => p.year.toString());
    return ['Todos', ...Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Reset to page 1 whenever search or year changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedYear]);

  // Filter Publications (by search query and year only)
  const filteredPubs = useMemo(() => {
    return PUBLICATIONS.filter(pub => {
      const matchSearch = 
        pub.title.toLowerCase().includes(search.toLowerCase()) || 
        pub.authors.toLowerCase().includes(search.toLowerCase()) || 
        pub.journal.toLowerCase().includes(search.toLowerCase()) || 
        (pub.topic && pub.topic.toLowerCase().includes(search.toLowerCase())) ||
        (pub.abstract && pub.abstract.toLowerCase().includes(search.toLowerCase()));

      const matchYear = selectedYear === 'Todos' || pub.year.toString() === selectedYear;

      return matchSearch && matchYear;
    });
  }, [search, selectedYear]);

  // Total pages calculation
  const totalPages = Math.max(1, Math.ceil(filteredPubs.length / ITEMS_PER_PAGE));

  // Current page items
  const paginatedPubs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPubs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPubs, currentPage]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstractId(prev => (prev === id ? null : id));
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const publicacionesEl = document.getElementById('publicaciones');
      if (publicacionesEl) {
        publicacionesEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Search and Year Filter Hub */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xs">
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          {/* Text Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Buscar publicaciones por título, autores o revista..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-xl font-sans text-sm outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-2xs"
            />
          </div>

          {/* Year Filter Select */}
          <div className="flex items-center space-x-2 w-full md:w-auto shrink-0">
            <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center space-x-1 shrink-0">
              <Calendar className="h-4 w-4 text-amber-500" />
              <span className="hidden sm:inline">Año:</span>
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-xl outline-hidden focus:border-amber-500 w-full md:w-auto cursor-pointer"
            >
              {years.map(y => (
                <option key={y} value={y}>
                  {y === 'Todos' ? 'Todos los Años' : y}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Publications Count Badge & Pagination info */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
        <span>
          Mostrando <strong className="text-slate-900 dark:text-white">{paginatedPubs.length}</strong> de <strong className="text-slate-900 dark:text-white">{filteredPubs.length}</strong> publicaciones (Total: {PUBLICATIONS.length})
        </span>
        {totalPages > 1 && (
          <span>
            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
          </span>
        )}
      </div>

      {/* Publications Listing (6 per page) */}
      <div className="space-y-4">
        {paginatedPubs.length > 0 ? (
          paginatedPubs.map((pub: Publication, index) => {
            const isAbstractExpanded = expandedAbstractId === pub.id;

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.2) }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 dark:hover:border-amber-400/40 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Left Visual Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-amber-500 dark:group-hover:bg-amber-400 rounded-l-2xl transition-colors" />

                <div className="pl-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    
                    {/* Publication Title with Year inline after */}
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 leading-snug">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline group-hover:underline"
                        >
                          <span>{pub.title}</span>
                          <ExternalLink className="h-3.5 w-3.5 ml-1.5 text-sky-500 shrink-0 inline-block align-baseline opacity-70 group-hover:opacity-100" />
                        </a>
                      ) : (
                        <span>{pub.title}</span>
                      )}
                      <span className="ml-2 px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold rounded-md border border-amber-500/20 inline-flex items-center align-middle whitespace-nowrap">
                        <Calendar className="h-3 w-3 mr-1 inline" />
                        {pub.year}
                      </span>
                    </h3>

                    {/* Authors and Journal */}
                    <div className="space-y-0.5 font-sans">
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Autores:</span> {pub.authors}
                      </p>
                      <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        {pub.journal}
                      </p>
                    </div>

                    {/* Abstract toggle buttons & abstract panel (if present) */}
                    {pub.abstract && (
                      <div className="pt-1">
                        <button
                          onClick={() => toggleAbstract(pub.id)}
                          className="inline-flex items-center space-x-1 text-xs font-sans font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 transition-colors cursor-pointer"
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
                              className="mt-2 text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed p-3 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl relative overflow-hidden"
                            >
                              {pub.abstract}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Actions Column: External Link Button ONLY when url is present */}
                  {pub.url && (
                    <div className="flex items-center justify-start md:justify-end shrink-0 pt-2 md:pt-0">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3.5 py-2 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-slate-950 text-xs font-bold font-sans rounded-xl border border-sky-200 dark:border-sky-800/60 transition-all shadow-2xs cursor-pointer active:scale-98"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        Ver en Revista
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <BookOpen className="h-10 w-10 mx-auto text-slate-400 dark:text-slate-600 mb-2" />
            <p className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
              No se encontraron publicaciones que coincidan con la búsqueda.
            </p>
          </div>
        )}
      </div>

      {/* Numeric Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-6 pb-2">
          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer"
            title="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-xs border border-amber-400'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer"
            title="Página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
