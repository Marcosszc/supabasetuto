import React, { useState } from 'react';
import { Copy, Check, Printer, ExternalLink, Sparkles } from 'lucide-react';
import { ASSIGNMENT_METADATA } from '../data/assignmentData';

interface HeaderProps {
  onCopyAllAnswers: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCopyAllAnswers }) => {
  const [copiedAnswers, setCopiedAnswers] = useState(false);

  const handleCopyAnswersClick = () => {
    onCopyAllAnswers();
    setCopiedAnswers(true);
    setTimeout(() => setCopiedAnswers(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="relative border-b border-slate-800/80 bg-[#0d1322]/80 backdrop-blur-md py-7 overflow-hidden">
      {/* Ambient background light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Trabajo de Investigación y Desarrollo</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              «Lo que aprendí del video»
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span className="font-semibold text-slate-200">Software / Desarrollo Web</span>
              <span className="text-slate-600">·</span>
              <span className="text-indigo-300 font-medium">2.º BTI</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Tutorial de Supabase (Fazt Code)</span>
            </div>
          </div>

          {/* Action buttons with subtle glowing borders */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleCopyAnswersClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.18)] rounded-lg transition-all cursor-pointer shadow-xs"
              title="Copiar todas las respuestas"
            >
              {copiedAnswers ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedAnswers ? 'Copiado' : 'Copiar cuestionario'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.18)] rounded-lg transition-all cursor-pointer shadow-xs"
              title="Imprimir o guardar en PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Imprimir / PDF</span>
            </button>

            <a
              href={ASSIGNMENT_METADATA.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-[0_0_16px_rgba(99,102,241,0.35)] hover:shadow-[0_0_22px_rgba(99,102,241,0.55)] border border-indigo-400/30 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver en YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
