import { useState } from 'react';
import { FileText, Download, ExternalLink, Award, FileSpreadsheet, Eye } from 'lucide-react';

export default function CVViewer() {
  const [loadError, setLoadError] = useState(false);

  // Dynamic base asset path resolution
  const getAssetPath = (path: string): string => {
    const base = ((import.meta as any).env?.BASE_URL) || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanBase = base.endsWith('/') ? base : base + '/';
    return cleanBase + cleanPath;
  };

  const cvAcademicoUrl = getAssetPath('cv/cv-academico-alejandro-baeza.pdf');
  const semblanzaUrl = getAssetPath('cv/semblanza-alejandro-baeza.pdf');
  const profPhotoUrl = getAssetPath('images/prof_alejandro_baeza.jpg');

  return (
    <div className="space-y-8">
      {/* Upper Panel: Overview & Action Triggers */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 dark:bg-slate-900/40 p-5 md:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800">
        
        {/* Profile Picture frame */}
        <div className="md:col-span-3 flex justify-center">
          <div className="relative p-1 bg-gradient-to-tr from-amber-500 to-sky-500 rounded-2xl overflow-hidden aspect-square max-w-[180px] w-full">
            <img
              src={profPhotoUrl}
              alt="Dr. Alejandro Baeza"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl bg-white dark:bg-slate-950"
            />
          </div>
        </div>

        {/* Short Executive Summary */}
        <div className="md:col-span-5 space-y-3 text-center md:text-left">
          <h4 className="font-display font-extrabold text-xl text-slate-900 dark:text-slate-100">
            Curriculum Vitae y Semblanza
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Consulte la Semblanza Académica del Dr. Alejandro Baeza desplegada en pantalla o descargue el archivo oficial con el Currículum Vitae Académico completo.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
            <span className="inline-flex items-center px-2 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400 text-[10px] font-mono rounded font-bold uppercase border border-amber-500/20">
              Profesor Titular C TC
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-sky-50 dark:bg-sky-950/20 text-sky-800 dark:text-sky-400 text-[10px] font-mono rounded font-bold uppercase border border-sky-500/20">
              PRIDE Nivel D (1996-2015)
            </span>
          </div>
        </div>

        {/* Fast Action Buttons Column */}
        <div className="md:col-span-4 flex flex-col gap-2.5 w-full">
          <a
            href={cvAcademicoUrl}
            download="CV-Academico-Alejandro-Baeza.pdf"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all font-sans text-xs font-bold rounded-xl shadow-2xs cursor-pointer active:scale-98"
          >
            <Download className="h-4 w-4 mr-1.5" />
            Descargar CV Académico (PDF)
          </a>

          <a
            href={semblanzaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-slate-900 dark:bg-sky-500/10 text-white dark:text-sky-400 border border-transparent dark:border-sky-500/25 hover:bg-slate-800 dark:hover:bg-sky-500/20 transition-all font-sans text-xs font-bold rounded-xl shadow-2xs cursor-pointer active:scale-98"
          >
            <Eye className="h-4 w-4 mr-1.5" />
            Ver Semblanza en pestaña nueva
          </a>

          <a
            href={semblanzaUrl}
            download="Semblanza-Alejandro-Baeza.pdf"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all font-sans text-[11px] font-semibold rounded-xl cursor-pointer"
          >
            <Download className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
            Descargar Semblanza (PDF)
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer Panel (Displays Semblanza) */}
      <div className="bg-slate-100 dark:bg-slate-950 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-2 md:p-4 shadow-inner">
        <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          
          {/* Viewer Toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                semblanza-alejandro-baeza.pdf (Semblanza Académica)
              </span>
            </div>
            <a
              href={semblanzaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-sky-600 dark:text-sky-400 hover:underline flex items-center"
            >
              Abrir <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Embedded Document Frame (Semblanza) */}
          <div className="relative min-h-[500px] md:min-h-[750px] bg-slate-100 dark:bg-slate-950 flex flex-col justify-center">
            
            <object
              data={semblanzaUrl}
              type="application/pdf"
              className="w-full h-[500px] md:h-[750px] hidden md:block"
              onError={() => setLoadError(true)}
            >
              {/* Fallback for browsers with disabled/unsupported embedded PDF plugins */}
              <div className="p-8 text-center space-y-4">
                <FileText className="h-12 w-12 mx-auto text-slate-400" />
                <p className="text-sm font-sans text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  El visor de documentos PDF de su explorador está deshabilitado o no soporta previsualización interactiva.
                </p>
                <a
                  href={semblanzaUrl}
                  download="Semblanza-Alejandro-Baeza.pdf"
                  className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg text-xs"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Descargar Semblanza Directa
                </a>
              </div>
            </object>

            {/* Mobile View */}
            <div className="md:hidden p-5 bg-white dark:bg-slate-900 space-y-6 w-full text-left">
              
              <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 border-b pb-2 dark:border-slate-800">
                <Award className="h-5 w-5" />
                <h5 className="font-display font-semibold text-sm uppercase tracking-wide">
                  Formación y Cátedra
                </h5>
              </div>

              <div className="space-y-4 pl-1 text-slate-700 dark:text-slate-300 text-xs">
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">1.er Graduado del Doctorado en Química Analítica (1997)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">Facultad de Química, UNAM | Medalla "Alfonso Caso" (1998)</p>
                </div>
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">Maestría en Ciencias Químicas (Química Analítica)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">Facultad de Química, UNAM | Medalla "Gabino Barreda" (1986)</p>
                </div>
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">Licenciatura en Bioquímica (QFB)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">Facultad de Química, UNAM | Mención Honorífica (1982)</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sky-500 dark:text-sky-400 border-b pb-2 dark:border-slate-800">
                <FileSpreadsheet className="h-5 w-5" />
                <h5 className="font-display font-semibold text-sm uppercase tracking-wide">
                  Premios y Reconocimientos Destacados
                </h5>
              </div>

              <div className="space-y-3 pl-1 text-slate-700 dark:text-slate-300 text-xs">
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">Premio Nacional de Química "Andrés Manuel del Río" (2015)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">Área Docencia - Sociedad Química de México</p>
                </div>
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">Best Poster Award ISE Taiwan (2015)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">International Society of Electrochemistry</p>
                </div>
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white">PRIDE Nivel D • Máxima Productividad (1996 - 2015)</h6>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">DGAPA, UNAM</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-3 text-center border border-slate-200 dark:border-slate-800">
                <p className="text-[11px] font-sans text-slate-500">
                  Acceda a las descargas directas de los documentos oficiales:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    href={cvAcademicoUrl}
                    download="CV-Academico-Alejandro-Baeza.pdf"
                    className="inline-flex items-center px-3.5 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-[11px]"
                  >
                    <Download className="h-3.5 w-3.5 mr-1" /> Descargar CV
                  </a>
                  <a
                    href={semblanzaUrl}
                    download="Semblanza-Alejandro-Baeza.pdf"
                    className="inline-flex items-center px-3.5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border rounded-lg text-[11px]"
                  >
                    <Download className="h-3.5 w-3.5 mr-1" /> Descargar Semblanza
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
