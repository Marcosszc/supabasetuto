import React, { useState } from 'react';
import { CORE_CONCEPTS } from '../data/assignmentData';
import { ChevronRight, Check } from 'lucide-react';

export const ConceptsSection: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string>(CORE_CONCEPTS[0].id);
  const active = CORE_CONCEPTS.find((c) => c.id === selectedConcept) || CORE_CONCEPTS[0];

  return (
    <section id="conceptos" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Conceptos fundamentales
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Los 5 conceptos clave explicados
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Resumen de los términos y tecnologías más importantes que se explican en el video.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Concept Buttons */}
          <div className="md:col-span-5 space-y-2">
            {CORE_CONCEPTS.map((concept, idx) => {
              const isSelected = concept.id === selectedConcept;
              return (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConcept(concept.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/80 shadow-[0_0_20px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/50 text-white font-semibold'
                      : 'bg-[#0d1424]/70 border-slate-800/80 hover:border-slate-700/80 hover:bg-[#11192e] text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-3xs text-indigo-400 font-mono block">Concepto {idx + 1}</span>
                    <span className="text-sm font-bold block">{concept.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-indigo-400 translate-x-0.5 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Concept Explanation */}
          <div className="md:col-span-7 bg-[#0d1424]/90 p-6 sm:p-7 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] space-y-4 relative overflow-hidden backdrop-blur-sm">
            {/* Ambient subtle light glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

            <div className="relative z-10">
              <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider block">
                {active.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {active.name}
              </h3>
            </div>

            <div className="relative z-10 p-3.5 bg-indigo-500/10 border border-indigo-500/25 rounded-xl text-xs text-indigo-200 font-medium leading-relaxed shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              {active.shortDefinition}
            </div>

            <div className="relative z-10 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wide">
                ¿Qué explicó el autor en el video?
              </h4>
              <p>{active.detailedExplanation}</p>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-800/80">
              <h4 className="font-semibold text-white text-xs mb-2.5">
                Puntos para recordar:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {active.technicalDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
