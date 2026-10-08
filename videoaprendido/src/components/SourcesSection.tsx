import React from 'react';
import { ASSIGNMENT_METADATA } from '../data/assignmentData';
import { ExternalLink, Youtube, BookOpen, Globe, FileCode } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const sources = [
    {
      title: 'Video analizado: Supabase Curso / Tutorial Completo',
      author: 'Fazt Code (YouTube)',
      url: ASSIGNMENT_METADATA.videoUrl,
      description: 'Video oficial de 33 minutos donde se explica el registro, creación de la tabla products, RLS, Thunder Client, Supabase Auth y Storage.',
      icon: Youtube,
      tag: 'Fuente principal'
    },
    {
      title: 'Documentación Oficial de Supabase',
      author: 'supabase.com/docs',
      url: 'https://supabase.com/docs',
      description: 'Guías oficiales sobre la plataforma, API autogenerada y autenticación con PostgreSQL.',
      icon: Globe,
      tag: 'Documentación'
    },
    {
      title: 'Documentación de PostgreSQL sobre Row Level Security (RLS)',
      author: 'postgresql.org',
      url: 'https://www.postgresql.org/docs/current/ddl-rowsecurity.html',
      description: 'Manual de referencia de sintaxis CREATE POLICY y cláusulas de seguridad en SQL.',
      icon: BookOpen,
      tag: 'Referencia técnica'
    },
    {
      title: 'Herramienta de depuración jwt.io',
      author: 'jwt.io',
      url: 'https://jwt.io',
      description: 'Sitio web utilizado en el video para decodificar e inspeccionar los datos contenidos en el JSON Web Token.',
      icon: FileCode,
      tag: 'Herramienta web'
    }
  ];

  return (
    <section id="fuentes" className="py-10 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-3xs font-bold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            Fuentes y referencias
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 tracking-tight">
            Enlaces y documentación utilizada
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Referencias consultadas para la realización del trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {sources.map((src, idx) => {
            const Icon = src.icon;
            return (
              <a
                key={idx}
                href={src.url}
                target="_blank"
                rel="noreferrer"
                className="group p-4.5 rounded-2xl bg-[#0d1424]/85 border border-slate-800/90 hover:border-indigo-500/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] hover:bg-[#10182c] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-3xs text-indigo-400 font-mono mb-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">{src.tag}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <Icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]" />
                    <h4 className="font-bold text-white text-xs sm:text-sm group-hover:text-indigo-200 transition-colors">
                      {src.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {src.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-800/80 text-3xs font-mono text-slate-400 group-hover:text-indigo-300 transition-colors">
                  {src.author}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
