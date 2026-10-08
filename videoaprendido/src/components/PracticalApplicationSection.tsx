import React, { useState } from 'react';
import { PRACTICAL_STEPS } from '../data/assignmentData';
import { Copy, Check, Table, Code } from 'lucide-react';

export const PracticalApplicationSection: React.FC = () => {
  const [copiedSnippetIdx, setCopiedSnippetIdx] = useState<number | null>(null);

  const handleCopyCode = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSnippetIdx(idx);
      setTimeout(() => setCopiedSnippetIdx(null), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="practica" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Aplicación práctica
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Procedimiento aprendido: Creación de la tabla y políticas RLS
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Explicación paso a paso de lo que se realizó en el video para crear la estructura de la base de datos y protegerla.
          </p>
        </div>

        {/* Database Table Schema Card */}
        <div className="bg-[#0d1424]/90 p-5 sm:p-6 rounded-2xl border border-slate-800/90 mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.35)] relative overflow-hidden backdrop-blur-sm">
          {/* Subtle light glow accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

          <div className="flex items-center gap-2 mb-3.5 relative z-10">
            <Table className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <h3 className="text-sm font-bold text-white">
              Estructura de la tabla <span className="font-mono text-indigo-400">products</span> creada en PostgreSQL
            </h3>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-3xs">
                  <th className="py-2.5 px-3">Columna</th>
                  <th className="py-2.5 px-3">Tipo en Postgres</th>
                  <th className="py-2.5 px-3">Restricción</th>
                  <th className="py-2.5 px-3">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 font-mono text-slate-300">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white">id</td>
                  <td className="py-2.5 px-3 text-indigo-400">int8</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-3xs">PRIMARY KEY</span>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-slate-400">Identificador numérico autoincremental</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white">created_at</td>
                  <td className="py-2.5 px-3 text-indigo-400">timestamptz</td>
                  <td className="py-2.5 px-3 text-slate-500">DEFAULT now()</td>
                  <td className="py-2.5 px-3 font-sans text-slate-400">Fecha y hora automática de registro</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white">name</td>
                  <td className="py-2.5 px-3 text-indigo-400">text</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 text-3xs">NOT NULL</span>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-slate-400">Nombre del producto (ej: Mouse óptico)</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white">description</td>
                  <td className="py-2.5 px-3 text-indigo-400">text</td>
                  <td className="py-2.5 px-3 text-slate-500">NULLABLE</td>
                  <td className="py-2.5 px-3 font-sans text-slate-400">Detalles descriptivos del producto</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white">price</td>
                  <td className="py-2.5 px-3 text-indigo-400">int4</td>
                  <td className="py-2.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 text-3xs">NOT NULL</span>
                  </td>
                  <td className="py-2.5 px-3 font-sans text-slate-400">Precio entero del artículo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRACTICAL_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0d1424]/85 p-5 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.12)] flex flex-col justify-between transition-all"
            >
              <div>
                <span className="text-3xs font-mono font-bold text-indigo-400 block mb-1.5">
                  Paso {step.stepNumber}
                </span>
                <h4 className="font-bold text-white text-sm mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                  {step.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-3xs text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-t-xl border border-slate-800 border-b-0">
                  <span className="font-mono text-slate-300">Código / SQL</span>
                  <button
                    onClick={() => handleCopyCode(step.codeSnippet, idx)}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedSnippetIdx === idx ? <Check className="w-3 h-3 text-indigo-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSnippetIdx === idx ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-[#070b13] text-indigo-300 font-mono text-3xs rounded-b-xl overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{step.codeSnippet}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
