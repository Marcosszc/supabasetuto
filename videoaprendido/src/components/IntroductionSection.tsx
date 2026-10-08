import React from 'react';
import { ASSIGNMENT_METADATA } from '../data/assignmentData';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="introduccion" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Introducción
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Descripción breve del contenido del video
          </h2>
        </div>

        <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm space-y-3 text-sm text-slate-300 leading-relaxed relative overflow-hidden hover:border-slate-700/80 transition-colors">
          {/* Subtle light glow accent in corner */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

          <p className="relative z-10">
            En este tutorial, <strong className="text-white font-semibold">{ASSIGNMENT_METADATA.videoAuthor}</strong> explica qué es <strong className="text-indigo-300 font-semibold">Supabase</strong> como una alternativa de código abierto a Firebase, destacando que trabaja con una base de datos relacional <strong className="text-white font-semibold">PostgreSQL</strong> en la nube. Muestra cómo crear un proyecto, configurar la región del servidor y diseñar la tabla <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300 font-mono text-xs">products</code> en el Table Editor con campos estructurados y la seguridad de <strong className="text-white font-semibold">Row Level Security (RLS)</strong> activada.
          </p>

          <p className="relative z-10">
            Luego enseña a consultar la API REST generada usando <strong className="text-white font-semibold">Thunder Client</strong> en Visual Studio Code. Demuestra que con RLS activo la base de datos devuelve una lista vacía <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 font-mono text-xs">[]</code> por seguridad, y explica cómo solucionarlo creando políticas en SQL: una pública con <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs">SELECT true</code> para ver el catálogo y otra privada con <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs">auth.uid() = user_id</code> usando tokens JWT para que cada usuario solo gestione sus propios registros. Por último, repasa brevemente las herramientas de Storage y Edge Functions.
          </p>
        </div>
      </div>
    </section>
  );
};
