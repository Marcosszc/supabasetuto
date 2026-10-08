import React, { useState } from 'react';
import { Send, Shield, ShieldCheck, ShieldX, Key, Terminal, RefreshCw, Check, AlertTriangle } from 'lucide-react';

type SimulatorMode = 'no_rls' | 'rls_no_policy' | 'rls_public_policy' | 'rls_authenticated';

export const InteractiveSimulator: React.FC = () => {
  const [mode, setMode] = useState<SimulatorMode>('rls_no_policy');
  const [selectedUser, setSelectedUser] = useState<'user_a' | 'user_b' | 'anonymous'>('user_a');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'response' | 'jwt' | 'sql'>('response');

  // Sample database products
  const dbProducts = [
    { id: 1, name: 'Mouse Ergonómico Óptico', price: 150000, user_id: 'usr_89a712' },
    { id: 2, name: 'Teclado Mecánico RGB Switch Azul', price: 320000, user_id: 'usr_89a712' },
    { id: 3, name: 'Monitor 24" IPS 144Hz', price: 1250000, user_id: 'usr_31b994' }
  ];

  const handleRunRequest = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 300);
  };

  // Determine response based on simulated RLS state
  const getSimulatedResponse = () => {
    switch (mode) {
      case 'no_rls':
        return {
          status: 200,
          statusText: 'OK',
          time: '34 ms',
          data: dbProducts,
          note: 'RLS Deshabilitado: Acceso irrestricto sin filtros de seguridad en PostgreSQL.'
        };
      case 'rls_no_policy':
        return {
          status: 200,
          statusText: 'OK',
          time: '28 ms',
          data: [],
          note: '¡Comportamiento demostrado a los 08:31 en el video! RLS está activo pero no existen políticas permisivas, por lo que PostgreSQL bloquea la lectura por defecto y retorna un array vacío [].'
        };
      case 'rls_public_policy':
        return {
          status: 200,
          statusText: 'OK',
          time: '31 ms',
          data: dbProducts,
          note: 'Política "Enable read access for all users" activa con regla USING (true). Cualquier cliente con la anon key puede leer el catálogo público.'
        };
      case 'rls_authenticated':
        if (selectedUser === 'anonymous') {
          return {
            status: 200,
            statusText: 'OK',
            time: '29 ms',
            data: [],
            note: 'Petición anónima (sin Bearer Token válido): La política USING (auth.uid() = user_id) evalúa NULL = user_id (falso), por lo que no retorna filas.'
          };
        } else if (selectedUser === 'user_a') {
          return {
            status: 200,
            statusText: 'OK',
            time: '35 ms',
            data: dbProducts.filter((p) => p.user_id === 'usr_89a712'),
            note: 'Token JWT validado como Usuario A (usr_89a712). auth.uid() devuelve únicamente los productos propios (Mouse y Teclado).'
          };
        } else {
          return {
            status: 200,
            statusText: 'OK',
            time: '33 ms',
            data: dbProducts.filter((p) => p.user_id === 'usr_31b994'),
            note: 'Token JWT validado como Usuario B (usr_31b994). auth.uid() devuelve únicamente su Monitor de 24".'
          };
        }
    }
  };

  const response = getSimulatedResponse();

  return (
    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-8">
      {/* Sub Header */}
      <div className="mb-6 pb-4 border-b border-slate-100">
        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
          Captura Interactiva de Pruebas
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
          Captura Interactiva: Peticiones HTTP en Thunder Client y Comportamiento de RLS
        </h3>
        <p className="mt-1 text-slate-600 text-xs leading-relaxed">
          Recreación visual de las consultas HTTP ejecutadas en el video por Fazt Code (07:43 a 30:00). Permite verificar en tiempo real cómo responde la API de Supabase según las políticas de PostgreSQL y el token JWT enviado.
        </p>
      </div>

        {/* Mode Selector (4 States) */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Selecciona el Escenario de Seguridad en Supabase:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <button
              onClick={() => { setMode('rls_no_policy'); handleRunRequest(); }}
              className={`p-3 text-left rounded-xl border transition-all ${
                mode === 'rls_no_policy'
                  ? 'bg-amber-50/70 border-amber-500 ring-1 ring-amber-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>1. RLS Sin Políticas (08:31)</span>
              </div>
              <p className="text-3xs text-slate-600">
                El error común: retorna array vacío <code className="font-mono">[]</code>.
              </p>
            </button>

            <button
              onClick={() => { setMode('rls_public_policy'); handleRunRequest(); }}
              className={`p-3 text-left rounded-xl border transition-all ${
                mode === 'rls_public_policy'
                  ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>2. Política SELECT true (10:21)</span>
              </div>
              <p className="text-3xs text-slate-600">
                Lectura pública para todos los usuarios.
              </p>
            </button>

            <button
              onClick={() => { setMode('rls_authenticated'); handleRunRequest(); }}
              className={`p-3 text-left rounded-xl border transition-all ${
                mode === 'rls_authenticated'
                  ? 'bg-blue-50/70 border-blue-500 ring-1 ring-blue-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 text-blue-800 font-bold text-xs mb-1">
                <Key className="w-3.5 h-3.5 text-blue-600" />
                <span>3. Filtro auth.uid() (19:36)</span>
              </div>
              <p className="text-3xs text-slate-600">
                Cada usuario ve únicamente sus propios productos.
              </p>
            </button>

            <button
              onClick={() => { setMode('no_rls'); handleRunRequest(); }}
              className={`p-3 text-left rounded-xl border transition-all ${
                mode === 'no_rls'
                  ? 'bg-rose-50/70 border-rose-500 ring-1 ring-rose-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs mb-1">
                <ShieldX className="w-3.5 h-3.5 text-rose-600" />
                <span>4. Sin RLS (Inseguro)</span>
              </div>
              <p className="text-3xs text-slate-600">
                Tabla expuesta sin ninguna capa de filtrado.
              </p>
            </button>
          </div>
        </div>

        {/* If Mode is Authenticated, show user switcher */}
        {mode === 'rls_authenticated' && (
          <div className="mb-6 p-3.5 bg-blue-50/60 rounded-xl border border-blue-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-medium text-blue-900">
              <Key className="w-4 h-4 text-blue-700" />
              <span>Simular Sesión Activa de Supabase Auth (Bearer Token):</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => { setSelectedUser('user_a'); handleRunRequest(); }}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedUser === 'user_a'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-100/50'
                }`}
              >
                Usuario A (usr_89a)
              </button>
              <button
                onClick={() => { setSelectedUser('user_b'); handleRunRequest(); }}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedUser === 'user_b'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-100/50'
                }`}
              >
                Usuario B (usr_31b)
              </button>
              <button
                onClick={() => { setSelectedUser('anonymous'); handleRunRequest(); }}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  selectedUser === 'anonymous'
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Anónimo (Sin Token)
              </button>
            </div>
          </div>
        )}

        {/* Thunder Client Recreated Interface */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl overflow-hidden shadow-md border border-slate-800">
          {/* Thunder Client Header Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-400">Thunder Client</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Emulador de Petición HTTP a Supabase</span>
            </div>
            <div className="text-slate-500 font-mono">
              Proyecto: <span className="text-slate-300">xyz-bti-supabase</span>
            </div>
          </div>

          {/* URL & Method Input Bar */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shrink-0">
              <span className="px-3 py-2 text-xs font-bold font-mono text-emerald-400 bg-emerald-950/80 border-r border-slate-700">
                GET
              </span>
            </div>
            <div className="flex-1 bg-slate-800 px-3 py-2 rounded-lg border border-slate-700 font-mono text-xs text-slate-200 truncate">
              https://xyzcompany.supabase.co/rest/v1/products?select=*
            </div>
            <button
              onClick={handleRunRequest}
              disabled={isRunning}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors shrink-0"
            >
              <Send className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Consultando...' : 'Send (Enviar)'}</span>
            </button>
          </div>

          {/* Headers Inspection Box */}
          <div className="px-4 py-2 bg-slate-950/70 border-b border-slate-800 text-3xs font-mono text-slate-400 flex flex-wrap gap-4">
            <div>
              <span className="text-slate-500">apikey: </span>
              <span className="text-slate-300">eyJhbGciOiJIUzI1Ni... (anon_key)</span>
            </div>
            <div>
              <span className="text-slate-500">Authorization: </span>
              <span className="text-slate-300">
                {mode === 'rls_authenticated' && selectedUser !== 'anonymous'
                  ? `Bearer eyJ... (${selectedUser === 'user_a' ? 'UID: usr_89a712' : 'UID: usr_31b994'})`
                  : 'Bearer eyJ... (anon_role)'}
              </span>
            </div>
          </div>

          {/* Sub Navigation Tabs inside Client (Response / JWT / SQL) */}
          <div className="flex items-center gap-4 px-4 border-b border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('response')}
              className={`py-2.5 font-medium transition-colors border-b-2 ${
                activeTab === 'response'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Respuesta JSON ({response.status} {response.statusText})
            </button>
            <button
              onClick={() => setActiveTab('jwt')}
              className={`py-2.5 font-medium transition-colors border-b-2 ${
                activeTab === 'jwt'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Inspector JWT (jwt.io - 18:29)
            </button>
            <button
              onClick={() => setActiveTab('sql')}
              className={`py-2.5 font-medium transition-colors border-b-2 ${
                activeTab === 'sql'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Política SQL en PostgreSQL
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 bg-slate-950 min-h-60 font-mono text-xs">
            {activeTab === 'response' && (
              <div>
                <div className="flex items-center justify-between text-3xs text-slate-400 mb-2 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{response.status} {response.statusText}</span>
                    <span>·</span>
                    <span>Tiempo: {response.time}</span>
                    <span>·</span>
                    <span>Registros devueltos: {response.data.length}</span>
                  </div>
                </div>

                {/* Explanation Banner */}
                <div className="p-2.5 mb-3 rounded bg-slate-900 border border-slate-800 text-3xs text-slate-300 leading-relaxed font-sans">
                  <strong className="text-emerald-400">Diagnóstico del Evaluador: </strong>
                  {response.note}
                </div>

                {/* JSON Formatted Output */}
                <pre className="text-emerald-300 overflow-x-auto leading-relaxed">
                  <code>{JSON.stringify(response.data, null, 2)}</code>
                </pre>
              </div>
            )}

            {activeTab === 'jwt' && (
              <div className="space-y-4 font-sans text-xs">
                <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-300 text-3xs leading-relaxed">
                  Fazt Code explica en el minuto <strong>18:29</strong> cómo Supabase emite un JSON Web Token tras el login. En el sitio <strong>jwt.io</strong> se observa que el <em>Payload</em> contiene el campo clave <code className="text-emerald-400 font-mono font-bold">"sub"</code>, que coincide exactamente con el UUID del usuario. La función <code className="text-emerald-400 font-mono font-bold">auth.uid()</code> de PostgreSQL extrae este valor de forma segura.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-3xs">
                  {/* Header */}
                  <div className="p-3 bg-slate-900/80 rounded border border-rose-900/60">
                    <div className="text-rose-400 font-bold mb-1">// HEADER (Algoritmo & Tipo)</div>
                    <pre className="text-rose-300">{JSON.stringify({ alg: 'HS256', typ: 'JWT' }, null, 2)}</pre>
                  </div>

                  {/* Payload */}
                  <div className="p-3 bg-slate-900/80 rounded border border-purple-900/60">
                    <div className="text-purple-400 font-bold mb-1">// PAYLOAD (Claims & Identidad)</div>
                    <pre className="text-purple-300">
                      {JSON.stringify(
                        {
                          sub: selectedUser === 'user_a' ? 'usr_89a712' : selectedUser === 'user_b' ? 'usr_31b994' : 'anon_anon',
                          email: selectedUser === 'user_a' ? 'alumno.a@colegio.edu.py' : selectedUser === 'user_b' ? 'alumno.b@colegio.edu.py' : 'anon@guest.com',
                          role: selectedUser === 'anonymous' ? 'anon' : 'authenticated',
                          exp: 1791550800
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>

                  {/* Signature */}
                  <div className="p-3 bg-slate-900/80 rounded border border-cyan-900/60">
                    <div className="text-cyan-400 font-bold mb-1">// SIGNATURE (Firma Criptográfica)</div>
                    <p className="text-cyan-300 break-all">
                      HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), supabase_jwt_secret);
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sql' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="text-slate-400 text-3xs font-sans">
                  Sentencia SQL activa en PostgreSQL para el escenario seleccionado:
                </div>
                <pre className="p-3 bg-slate-900 rounded border border-slate-800 text-amber-300 overflow-x-auto leading-relaxed">
                  <code>
                    {mode === 'no_rls' && '-- No hay políticas activas: RLS está deshabilitado\nALTER TABLE public.products DISABLE ROW LEVEL SECURITY;'}
                    {mode === 'rls_no_policy' && '-- RLS está habilitado pero NO se ha creado ninguna política\nALTER TABLE public.products ENABLE ROW LEVEL SECURITY;\n-- Al no existir políticas, PostgreSQL deniega el acceso a consultas externas.'}
                    {mode === 'rls_public_policy' && '-- Política pública creada a los 10:21 del video\nCREATE POLICY "Enable read access for all users"\nON public.products\nFOR SELECT\nUSING (true);'}
                    {mode === 'rls_authenticated' && '-- Política granular de seguridad por usuario (19:36 - 25:00)\nCREATE POLICY "Users can access only their own records"\nON public.products\nFOR SELECT\nUSING (auth.uid() = user_id);'}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};
