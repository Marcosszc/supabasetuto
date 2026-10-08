import React from 'react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Conclusión personal
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Reflexión sobre lo aprendido y su utilidad
          </h2>
        </div>

        <div className="bg-[#0d1424]/85 p-5 sm:p-6 rounded-2xl border border-slate-800/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] space-y-3 text-sm text-slate-300 leading-relaxed relative overflow-hidden backdrop-blur-sm hover:border-slate-700/80 transition-colors">
          {/* Subtle purple-indigo glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 blur-2xl pointer-events-none rounded-full" />

          <p className="relative z-10">
            El video me ayudó a entender cómo un <strong className="text-white font-semibold">Backend as a Service (BaaS)</strong> como Supabase nos ahorra mucho tiempo en desarrollo web al no tener que programar todo el servidor y las rutas CRUD desde cero con Node.js y Express.
          </p>

          <p className="relative z-10">
            Lo que más me llamó la atención fue <strong className="text-white font-semibold">Row Level Security (RLS)</strong>. Aprendí que la seguridad se puede manejar directamente desde la base de datos PostgreSQL evaluando permisos fila por fila (con <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs">auth.uid() = user_id</code>) para que ningún usuario pueda leer ni alterar datos ajenos. Además, al ser de código abierto y usar PostgreSQL estándar, nos permite aprender con una herramienta real que podemos alojar en cualquier servidor sin depender exclusivamente de una sola empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
