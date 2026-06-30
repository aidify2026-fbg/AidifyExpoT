"use client";

import { useRouter } from "next/navigation";

export default function OrientadoresPage() {
  const router = useRouter();
  const lista = [1, 2, 3, 4];

  return (
    // Contenedor principal que centra todo en la pantalla
    <div className="min-h-screen bg-slate-100 flex flex-col items-center pb-24">
      
      {/* Contenedor tipo "App" con ancho máximo definido */}
      <div className="w-full max-w-md p-4 space-y-6">
        
        {/* Cabecera Azul */}
        <div className="bg-[#1e4a8a] text-white p-6 rounded-[30px] shadow-lg">
          <h1 className="text-lg font-bold text-center mb-4">CONECTA CON UN ORIENTADOR</h1>
          <div className="flex gap-3 overflow-x-auto">
            {[1, 2].map((i) => (
              <div key={i} className="min-w-[120px] bg-white text-slate-800 p-3 rounded-2xl flex flex-col items-center shrink-0">
                <div className="w-12 h-12 bg-slate-300 rounded-full mb-2"></div>
                <p className="text-[11px] font-bold text-center">Dra. Elena Ruiz</p>
                <button onClick={() => router.push('/perfil')} className="text-[9px] text-blue-700 font-bold mt-1 underline">VER PERFIL</button>
              </div>
            ))}
          </div>
        </div>

        {/* Lista */}
        <div>
          <h2 className="text-[11px] font-bold text-slate-500 mb-3 ml-1">LISTA DE ORIENTADORES DISPONIBLES</h2>
          <div className="space-y-3">
            {lista.map((i) => (
              <div key={i} className="bg-white p-3 rounded-2xl flex items-center justify-between shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Lic. Pedro Gomez</p>
                    <p className="text-[10px] text-slate-500">Evaluación de Aptitudes</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="bg-slate-100 text-slate-600 text-[9px] px-2 py-1 rounded-lg font-bold">MENSAJE</button>
                  <button className="bg-[#1e4a8a] text-white text-[9px] px-2 py-1 rounded-lg font-bold">CONTACTAR</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-[#1e4a8a] text-white py-3 rounded-2xl font-bold text-sm">
          VER MÁS ORIENTADORES
        </button>
      </div>

      {/* Barra de navegación (Fija abajo) */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 flex justify-around p-4 z-50 rounded-t-3xl shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button onClick={() => router.push('/home')} className="text-xl">🏠</button>
        <button onClick={() => router.push('/explorar')} className="text-xl">🌐</button>
        <button className="text-xl text-blue-800">👥</button>
        <button onClick={() => router.push('/perfil')} className="text-xl">👤</button>
        <button onClick={() => router.push('/config')} className="text-xl">⚙️</button>
      </nav>
      
    </div>
  );
}