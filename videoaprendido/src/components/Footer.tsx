import React from 'react';
import { ArrowUp, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#0a0e1a]/90 backdrop-blur-md py-6 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
          <span className="font-semibold text-white">«Lo que aprendí del video»</span>
          <span className="text-slate-600">·</span>
          <span>Software / Desarrollo Web · 2.º BTI</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors inline-flex items-center gap-1 cursor-pointer"
          title="Volver arriba"
        >
          <span>Subir</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
