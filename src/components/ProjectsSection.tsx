import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Layers, Bookmark, Users2, Link2, CheckCircle, Info } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      {/* Projects Cards list */}
      <div className="space-y-5">
        {PROJECTS.map((project: Project, index) => {
          const isActive = project.status === 'Activo';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-xs relative overflow-hidden"
            >
              {/* Dynamic Left status indicator border */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                isActive ? 'bg-emerald-500' : 'bg-slate-350 dark:bg-slate-600'
              }`} />

              <div className="pl-2 md:pl-3 space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <Bookmark className={`h-4.5 w-4.5 ${isActive ? 'text-emerald-500' : 'text-slate-500'}`} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Registro Proyecto
                    </span>
                  </div>

                  {/* Status Tag */}
                  <div className="flex items-center space-x-1.5">
                    {isActive ? (
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <CheckCircle className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                    )}
                    <span className={`inline-flex px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase tracking-wider ${
                      isActive
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-450 border border-emerald-500/10'
                        : 'bg-slate-50 dark:bg-slate-950/80 text-slate-600 dark:text-slate-405 border border-slate-150 dark:border-slate-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="font-display font-extrabold text-base md:text-lg text-slate-900 dark:text-slate-100 leading-snug">
                  {project.name}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-355 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Core Objective list detail */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 rounded-xl space-y-1 border border-slate-100 dark:border-slate-850">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block">
                    Objetivo Científico
                  </span>
                  <p className="text-xs text-slate-705 dark:text-slate-300 font-sans leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                {/* Participants & Collaborators Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="space-y-1">
                    <span className="flex items-center text-[10px] font-mono uppercase font-bold text-slate-405 dark:text-slate-500">
                      <Users2 className="h-3.5 w-3.5 mr-1" /> Grupo de Investigación
                    </span>
                    <p className="text-xs text-slate-605 dark:text-slate-350 font-sans">
                      {project.participants}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center text-[10px] font-mono uppercase font-bold text-slate-405 dark:text-slate-500">
                      <Link2 className="h-3.5 w-3.5 mr-1" /> Redes Académicas / Colaboradores
                    </span>
                    <p className="text-xs text-slate-605 dark:text-slate-350 font-sans">
                      {project.collaborators}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
