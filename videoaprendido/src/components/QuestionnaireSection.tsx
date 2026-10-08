import React, { useState } from 'react';
import { QUESTIONNAIRE_DATA } from '../data/assignmentData';
import { ChevronDown, ChevronUp, Copy, Check, Search } from 'lucide-react';

interface QuestionnaireSectionProps {
  onCopyAll: () => void;
}

export const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({ onCopyAll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIds, setExpandedIds] = useState<number[]>(QUESTIONNAIRE_DATA.map((q) => q.id));
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const toggleExpand = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const handleCopySingle = async (item: typeof QUESTIONNAIRE_DATA[0]) => {
    const textToCopy = `Pregunta ${item.id}: ${item.question}\n\nRespuesta:\n${item.answer}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyAllClick = () => {
    onCopyAll();
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2200);
  };

  const filteredQuestions = QUESTIONNAIRE_DATA.filter((item) => {
    const query = searchTerm.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.id.toString() === query
    );
  });

  return (
    <section id="cuestionario" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
              Cuestionario resuelto
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
              Las 12 preguntas contestadas con base en el video
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Respuestas desarrolladas de forma clara y fundamentada con lo explicado por Fazt Code.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyAllClick}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedAll ? 'Respuestas copiadas' : 'Copiar las 12'}</span>
            </button>
            <button
              onClick={() => setExpandedIds(expandedIds.length === QUESTIONNAIRE_DATA.length ? [] : QUESTIONNAIRE_DATA.map(q => q.id))}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 border border-slate-800 hover:border-slate-700 bg-slate-900/60 hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
            >
              {expandedIds.length === QUESTIONNAIRE_DATA.length ? 'Colapsar todas' : 'Expandir todas'}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar en las preguntas o respuestas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#0c111e]/90 border border-slate-800/90 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 text-slate-100 placeholder:text-slate-500 transition-all shadow-inner"
          />
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          {filteredQuestions.map((item) => {
            const isExpanded = expandedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'bg-[#0d1424]/95 border-indigo-500/40 shadow-[0_0_25px_rgba(99,102,241,0.08)]'
                    : 'bg-[#0d1424]/70 border-slate-800/80 hover:border-slate-700/80 hover:bg-[#10182e]'
                }`}
              >
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-4 sm:p-4.5 cursor-pointer flex items-start justify-between gap-3 select-none"
                >
                  <div className="space-y-1">
                    <span className="text-3xs font-mono font-bold text-indigo-400 block">
                      Pregunta {item.id} de 12
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopySingle(item);
                      }}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
                      title="Copiar respuesta"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <div className="p-1 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-indigo-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 sm:px-4.5 pb-4.5 pt-1 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
                    <p>{item.answer}</p>

                    {item.keyPoints && item.keyPoints.length > 0 && (
                      <div className="pt-3 border-t border-slate-800/70">
                        <span className="text-3xs uppercase tracking-wider font-bold text-slate-400 block mb-1.5 font-mono">
                          Puntos importantes:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                          {item.keyPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
