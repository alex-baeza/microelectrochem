import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { Mail, MapPin, Phone, GraduationCap, Send, CheckCircle, ExternalLink, Globe, ShieldCheck, Eye, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'Colaboración en Investigación',
    message: '',
    hp_website: '' // Honeypot field for anti-bot security
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showEmails, setShowEmails] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (emailText: string) => {
    navigator.clipboard.writeText(emailText);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check: if honeypot field is filled, silently ignore (bot protection)
    if (formData.hp_website) {
      console.warn('Bot detected by security honeypot');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Simulate static submission delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        institution: '',
        subject: 'Colaboración en Investigación',
        message: '',
        hp_website: ''
      });
      // Clear alert after some time
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Group: Direct info and Institutional coordinates */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl space-y-6 shadow-xs">
        <div className="border-b pb-3 border-slate-100 dark:border-slate-800">
          <h4 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-slate-50">
            Coordenadas Académicas
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Institution Badge */}
          <div className="flex items-start space-x-3.5">
            <div className="h-10 w-10 bg-slate-50 dark:bg-slate-950 p-2 text-amber-500 rounded-xl shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <GraduationCap className="h-5.5 w-5.5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 block">Afiliación</span>
              <p className="font-sans font-bold text-slate-800 dark:text-slate-200">
                {CONTACT_INFO.institution}
              </p>
              <p className="font-sans text-slate-500 dark:text-slate-400 text-xs">
                {CONTACT_INFO.faculty} • {CONTACT_INFO.department}
              </p>
            </div>
          </div>

          {/* Physical Location */}
          <div className="flex items-start space-x-3.5">
            <div className="h-10 w-10 bg-slate-50 dark:bg-slate-950 p-2 text-sky-500 rounded-xl shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <MapPin className="h-5.5 w-5.5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 block">Ubicación y Cubículo</span>
              <p className="font-sans text-slate-700 dark:text-slate-300">
                {CONTACT_INFO.office}
              </p>
            </div>
          </div>

          {/* Direct Email with Bot Obfuscation */}
          <div className="flex items-start space-x-3.5">
            <div className="h-10 w-10 bg-slate-50 dark:bg-slate-950 p-2 text-indigo-500 rounded-xl shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <Mail className="h-5.5 w-5.5" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 block">Correo Institucional</span>
              
              {showEmails ? (
                <div className="flex items-center space-x-2">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(CONTACT_INFO.email)}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded cursor-pointer"
                    title="Copiar correo"
                  >
                    {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowEmails(true)}
                  className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 rounded-lg transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5 text-amber-500" />
                  <span>Ver correo protegido</span>
                </button>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3.5">
            <div className="h-10 w-10 bg-slate-50 dark:bg-slate-950 p-2 text-emerald-500 rounded-xl shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <Phone className="h-5.5 w-5.5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 block">Teléfono Directo</span>
              <p className="font-sans text-slate-700 dark:text-slate-200">
                {CONTACT_INFO.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Profiles & Repositories */}
      <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-150/60 dark:border-slate-800 rounded-3xl space-y-4 shadow-2xs">
        <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-slate-100 flex items-center">
          <Globe className="h-5 w-5 mr-1.5 text-sky-500" />
          Repositorios de Investigación
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Google Scholar Link */}
          <a
            href={CONTACT_INFO.googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-850 transition-all cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center space-x-2.5">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="font-sans font-bold text-xs text-slate-700 dark:text-slate-350 select-none">Google Scholar</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono text-slate-400 group-hover:text-blue-500 transition-colors">
              Ver perfil <ExternalLink className="h-3 w-3 ml-0.5" />
            </span>
          </a>

          {/* ORCID Link */}
          <a
            href={CONTACT_INFO.orcidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-850 transition-all cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center space-x-2.5">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-sans font-bold text-xs text-slate-700 dark:text-slate-350 select-none">ORCID</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono text-slate-400 group-hover:text-emerald-500 transition-colors">
              Ver ID <ExternalLink className="h-3 w-3 ml-0.5" />
            </span>
          </a>

          {/* ResearchGate Link */}
          <a
            href={CONTACT_INFO.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-850 transition-all cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center space-x-2.5">
              <div className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="font-sans font-bold text-xs text-slate-700 dark:text-slate-350 select-none">ResearchGate</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono text-slate-400 group-hover:text-sky-500 transition-colors">
              Publicaciones <ExternalLink className="h-3 w-3 ml-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Interaction Form for Academic Collaborations */}
      <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xs space-y-6">
        <div className="space-y-1">
          <h4 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-slate-50">
            Solicitud de Colaboración o Consulta
          </h4>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-sans leading-relaxed">
            Envíe un mensaje formal al Dr. Alejandro Baeza para plantear estancias posdoctorales, dirección de tesis de posgrado en la UNAM, asesorías gubernamentales o colaboraciones científicas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Honeypot field for bot protection (hidden from humans) */}
          <input
            type="text"
            name="hp_website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.hp_website}
            onChange={(e) => setFormData({...formData, hp_website: e.target.value})}
            className="hidden"
            style={{ display: 'none' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Visitor Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Nombre Completo *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3.5 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl outline-hidden border border-slate-200 dark:border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
              />
            </div>

            {/* Visitor Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Correo Electrónico *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3.5 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl outline-hidden border border-slate-200 dark:border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Institution */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Institución / Universidad
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({...formData, institution: e.target.value})}
                className="w-full px-3.5 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl outline-hidden border border-slate-200 dark:border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
              />
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Asunto del Mensaje *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 rounded-xl outline-hidden border border-slate-200 dark:border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              >
                <option value="Colaboración en Investigación">Colaboración de investigación</option>
                <option value="Dirección de Tesis / Posgrado">Dirección de Tesis / Posgrado</option>
                <option value="Asesoría Técnica y Consultoría">Asesoría Técnica y Consultoría</option>
                <option value="Visita de Laboratorio u otros">Visita de Laboratorio u otros</option>
              </select>
            </div>
          </div>

          {/* Message payload */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Cuerpo del Mensaje Académico *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3.5 py-2.5 text-xs md:text-sm bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-xl outline-hidden border border-slate-200 dark:border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans resize-none"
            />
          </div>

          {/* Success alerting */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 text-xs font-semibold rounded-xl border border-emerald-500/15"
            >
              <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
              <span>¡Mensaje enviado con éxito! Su propuesta de colaboración ha sido registrada.</span>
            </motion.div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer inline-flex items-center justify-center py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-150 disabled:cursor-not-allowed text-slate-950 font-sans text-xs font-bold rounded-xl transition-all shadow-xs active:scale-98"
          >
            {loading ? (
              <span>Enviando mensaje académico...</span>
            ) : (
              <span className="flex items-center">
                <Send className="h-3.5 w-3.5 mr-1.5 stroke-[2]" /> Enviar propuesta académica
              </span>
            )}
          </button>

        </form>
      </div>

    </div>
  );
}
