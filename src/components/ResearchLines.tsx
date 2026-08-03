import { motion } from 'motion/react';
import { RESEARCH_LINES } from '../data';
import { ResearchLine } from '../types';
import { Beaker } from 'lucide-react';

export default function ResearchLines() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xs">
        <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-slate-50 flex items-center">
          <Beaker className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
          Líneas de Investigación
        </h3>
      </div>

      {/* Grid of Clean Research Line Cards - Image + Line Name ONLY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {RESEARCH_LINES.map((line: ResearchLine, index) => {
          return (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-500/50 hover:shadow-md transition-all duration-300"
            >
              {/* Card Banner Image */}
              <div className="relative h-44 overflow-hidden bg-slate-950 shrink-0">
                <img
                  src={line.imageUrl}
                  alt={line.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-mono text-[10px] uppercase font-extrabold rounded-md shadow-xs">
                    Línea {index + 1}
                  </span>
                </div>
              </div>

              {/* Card Body - Name/Title ONLY */}
              <div className="p-5 flex-1 flex flex-col justify-center bg-white dark:bg-slate-900">
                <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {line.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
