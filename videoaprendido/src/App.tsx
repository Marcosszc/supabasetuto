/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { IntroductionSection } from './components/IntroductionSection';
import { ConceptsSection } from './components/ConceptsSection';
import { QuestionnaireSection } from './components/QuestionnaireSection';
import { PracticalApplicationSection } from './components/PracticalApplicationSection';
import { VisualDiagramsSection } from './components/VisualDiagramsSection';
import { ConclusionSection } from './components/ConclusionSection';
import { SourcesSection } from './components/SourcesSection';
import { Footer } from './components/Footer';
import { QUESTIONNAIRE_DATA } from './data/assignmentData';
import { Check, X, Copy } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduccion');
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [copiedModalText, setCopiedModalText] = useState(false);

  // Generate complete formatted text ready to turn in
  const generateFormattedSubmission = () => {
    let text = `«LO QUE APRENDÍ DEL VIDEO»\n`;
    text += `Software / Desarrollo Web · 2.º BTI\n\n`;
    text += `======================================================================\n`;
    text += `CUESTIONARIO RESUELTO (12 PREGUNTAS)\n`;
    text += `======================================================================\n\n`;

    QUESTIONNAIRE_DATA.forEach((q) => {
      text += `----------------------------------------------------------------------\n`;
      text += `PREGUNTA ${q.id}: ${q.question}\n`;
      text += `----------------------------------------------------------------------\n`;
      text += `RESPUESTA:\n${q.answer}\n\n`;
    });

    text += `======================================================================\n`;
    text += `APLICACIÓN PRÁCTICA\n`;
    text += `======================================================================\n`;
    text += `Creación de la tabla 'products' con columnas id (int8 PK), created_at (timestamptz), name (text), description (text) y price (int4).\n`;
    text += `Activación de Row Level Security (RLS) y creación de políticas permisivas (SELECT true) o de propiedad (auth.uid() = user_id).\n\n`;

    text += `======================================================================\n`;
    text += `CONCLUSIÓN PERSONAL\n`;
    text += `======================================================================\n`;
    text += `Supabase permite ahorrar mucho tiempo de backend usando PostgreSQL en la nube, y Row Level Security (RLS) asegura que la protección de los datos se aplique directamente en la base de datos sin depender solo de validaciones en el frontend.\n`;

    return text;
  };

  const handleCopyAll = async () => {
    const fullText = generateFormattedSubmission();
    try {
      await navigator.clipboard.writeText(fullText);
      setShowCopyModal(true);
      setCopiedModalText(true);
    } catch {
      setShowCopyModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans relative overflow-x-hidden bg-tech-grid selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic ambient lights / luminous glows */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Clean Student Header */}
      <Header onCopyAllAnswers={handleCopyAll} />

      {/* Sticky Navigation Bar */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* 1. Introducción */}
        <IntroductionSection />

        {/* 2. Conceptos Fundamentales */}
        <ConceptsSection />

        {/* 3. Cuestionario Resuelto (12 preguntas) */}
        <QuestionnaireSection onCopyAll={handleCopyAll} />

        {/* 4. Aplicación Práctica */}
        <PracticalApplicationSection />

        {/* 5. Recursos Visuales (Video YouTube + Capturas) */}
        <VisualDiagramsSection />

        {/* 6. Conclusión Personal */}
        <ConclusionSection />

        {/* 7. Fuentes */}
        <SourcesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Copy Modal */}
      {showCopyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-[#0e1424] rounded-2xl max-w-2xl w-full p-6 shadow-[0_0_50px_rgba(99,102,241,0.25)] border border-indigo-500/30 flex flex-col max-h-[85vh] relative overflow-hidden">
            {/* Modal ambient light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Cuestionario copiado
                  </h3>
                  <p className="text-xs text-slate-400">
                    Texto listo para pegar en Word o Classroom
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCopyModal(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 flex-1 overflow-y-auto font-mono text-3xs text-slate-300 bg-[#070b13] p-4 rounded-xl border border-slate-800/90 leading-relaxed whitespace-pre-wrap select-all relative z-10">
              {generateFormattedSubmission()}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3 relative z-10">
              <span className="text-xs text-indigo-400 font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-indigo-400" />
                <span>¡Copiado al portapapeles!</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generateFormattedSubmission());
                    setCopiedModalText(true);
                    setTimeout(() => setCopiedModalText(false), 2000);
                  }}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedModalText ? 'Copiado de nuevo' : 'Copiar otra vez'}</span>
                </button>
                <button
                  onClick={() => setShowCopyModal(false)}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
