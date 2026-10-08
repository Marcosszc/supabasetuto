import React from 'react';
import { COMPARISON_TABLE } from '../data/assignmentData';
import { ArrowDown, Shield, Database, Smartphone, Server, Check, Lock, ShieldAlert } from 'lucide-react';

export const VisualDiagramsSection: React.FC = () => {
  return (
    <section id="recursos-visuales" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Recursos visuales
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Capturas y esquema de seguridad
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Capturas de las herramientas del video y diagrama del funcionamiento de Row Level Security (RLS).
          </p>
        </div>

        {/* Visual Screenshots and Diagram */}
        <div className="space-y-6 mb-8">
          {/* Screenshot 1: Supabase Table Editor */}
          <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] hover:border-slate-700/80 transition-all relative overflow-hidden">
            <h3 className="text-sm font-bold text-white mb-1">
              Editor de la tabla products en Supabase
            </h3>
            <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
              En este panel el autor define los campos de la tabla (id, created_at, name, description y price) y carga manualmente los productos de prueba (un mouse y un teclado) con Row Level Security activado.
            </p>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <img
                src="/src/assets/images/supabase_table_editor_products_1791471118584.jpg"
                alt="Tabla products en el Table Editor de Supabase"
                className="w-full h-auto object-cover max-h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Screenshot 2: Thunder Client in VS Code */}
          <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] hover:border-slate-700/80 transition-all relative overflow-hidden">
            <h3 className="text-sm font-bold text-white mb-1">
              Consulta a la API REST desde Thunder Client en Visual Studio Code
            </h3>
            <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
              El autor abre Thunder Client para hacer una petición GET a la URL de productos enviando las cabeceras apikey y Authorization. Una vez creada la política en SQL, la API devuelve los productos en formato JSON.
            </p>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <img
                src="/src/assets/images/thunder_client_api_request_1791471150356.jpg"
                alt="Consulta HTTP en Thunder Client con respuesta JSON"
                className="w-full h-auto object-cover max-h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Diagram: RLS Security Flow Diagram in clean UI blocks */}
          <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <h3 className="text-sm font-bold text-white mb-1">
              Diagrama: Cómo funciona Row Level Security (RLS) en PostgreSQL
            </h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Flujo paso a paso de cómo la base de datos intercepta una consulta y evalúa los permisos a nivel de fila antes de enviar los datos.
            </p>

            {/* Visual Flow Container */}
            <div className="space-y-3 font-sans">
              {/* Step 1: Client */}
              <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">1. Cliente Web / Thunder Client</strong>
                    <span className="text-3xs text-slate-400 font-mono">Petición HTTP: GET /rest/v1/products</span>
                  </div>
                </div>
                <div className="text-3xs text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 font-mono">
                  Headers: apikey + Authorization (JWT)
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Step 2: PostgREST API Gateway */}
              <div className="bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">2. Capa API (PostgREST en Supabase)</strong>
                    <span className="text-3xs text-slate-400">
                      Lee el token JWT, extrae el identificador del usuario (campo sub) y arma la consulta SQL.
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Step 3: PostgreSQL Database with RLS */}
              <div className="bg-gradient-to-b from-[#111936] to-[#0c1326] text-slate-100 p-5 rounded-2xl border border-indigo-500/40 shadow-[0_0_35px_rgba(99,102,241,0.15)] space-y-3.5 relative overflow-hidden">
                {/* Ambient glow inside PostgreSQL box */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 blur-3xl pointer-events-none rounded-full" />

                <div className="flex items-center justify-between gap-2 border-b border-indigo-500/30 pb-2.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                    <span className="text-xs font-bold text-white">3. Motor de Base de Datos (PostgreSQL con RLS)</span>
                  </div>
                  <span className="text-3xs font-mono text-indigo-300 bg-indigo-950/80 border border-indigo-500/30 px-2 py-0.5 rounded-md">
                    ALTER TABLE products ENABLE ROW LEVEL SECURITY
                  </span>
                </div>

                <div className="text-xs text-indigo-200 relative z-10">
                  PostgreSQL verifica las políticas creadas para la tabla antes de entregar las filas:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-3xs font-mono relative z-10">
                  {/* Case A: No policies */}
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)] space-y-1.5">
                    <div className="text-amber-400 font-bold flex items-center gap-1 font-sans">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Sin políticas</span>
                    </div>
                    <p className="text-slate-300 font-sans leading-tight">
                      Bloqueo por defecto por seguridad.
                    </p>
                    <div className="text-amber-300 font-bold pt-1">Resultado: [ ] vacío</div>
                  </div>

                  {/* Case B: Public Policy */}
                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.15)] space-y-1.5">
                    <div className="text-indigo-300 font-bold flex items-center gap-1 font-sans">
                      <Shield className="w-3.5 h-3.5" />
                      <span>SELECT true</span>
                    </div>
                    <p className="text-slate-300 font-sans leading-tight">
                      Permite leer a cualquier cliente con apikey.
                    </p>
                    <div className="text-emerald-400 font-bold pt-1">Resultado: Todos los productos</div>
                  </div>

                  {/* Case C: User Policy */}
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)] space-y-1.5">
                    <div className="text-cyan-300 font-bold flex items-center gap-1 font-sans">
                      <Lock className="w-3.5 h-3.5" />
                      <span>auth.uid() = user_id</span>
                    </div>
                    <p className="text-slate-300 font-sans leading-tight">
                      Evalúa fila por fila según el usuario.
                    </p>
                    <div className="text-cyan-300 font-bold pt-1">Resultado: Solo sus registros</div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Step 4: Final JSON Response */}
              <div className="bg-[#0c1f1d] p-3.5 rounded-xl border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.12)] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-semibold">4. Respuesta JSON entregada (200 OK)</strong>
                    <span className="text-3xs text-slate-300">
                      El cliente recibe únicamente las filas autorizadas por la política de PostgreSQL.
                    </span>
                  </div>
                </div>
                <div className="text-3xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 shrink-0 font-bold">
                  200 OK
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] relative overflow-hidden">
          <h4 className="text-sm font-bold text-white mb-2.5">
            Cuadro comparativo entre tecnologías
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold text-3xs">
                  <th className="py-2.5 px-3">Característica</th>
                  <th className="py-2.5 px-3 font-bold text-indigo-300 bg-indigo-950/50 border-x border-indigo-500/20">Supabase</th>
                  <th className="py-2.5 px-3">Firebase</th>
                  <th className="py-2.5 px-3">Backend Tradicional (Express/Node)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-white">{row.criterio}</td>
                    <td className="py-2.5 px-3 bg-indigo-950/30 text-indigo-200 border-x border-indigo-500/20 font-medium">{row.supabase}</td>
                    <td className="py-2.5 px-3 text-slate-400">{row.firebase}</td>
                    <td className="py-2.5 px-3 text-slate-400">{row.backendTradicional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
