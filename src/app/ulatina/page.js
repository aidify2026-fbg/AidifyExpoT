"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from "@/utils/supabaseClient";

export default function DetalleUniversidad() {
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  // Identificador de esta universidad en tu base de datos
  const UNIVERSIDAD_ID = 'latina_santiago';

  // 1. Verificar si el usuario está autenticado y si ya guardó esta universidad
  useEffect(() => {
    const checkFavorito = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        
        // Consultar si ya existe en la tabla de favoritos
        const { data, error } = await supabase
          .from('favoritos')
          .select('*')
          .eq('user_id', user.id)
          .eq('universidad_id', UNIVERSIDAD_ID)
          .maybeSingle();

        if (data && !error) {
          setIsSaved(true);
        }
      }
    };

    checkFavorito();
  }, []);

  // 2. Función para guardar o eliminar de favoritos
  const handleGuardarClick = async () => {
    if (!userId) {
      alert("Debes iniciar sesión para guardar universidades.");
      return;
    }

    setLoading(true);

    if (isSaved) {
      // Si ya está guardada, la eliminamos
     const handleGuardarClick = async () => {
    if (!userId) {
      alert("Debes iniciar sesión para guardar universidades.");
      return;
    }

    setLoading(true);

    if (isSaved) {
      // Intentar eliminar
      const { error } = await supabase
        .from('favoritos')
        .delete()
        .eq('user_id', userId)
        .eq('universidad_id', UNIVERSIDAD_ID);

      if (!error) {
        setIsSaved(false);
      } else {
        alert("Error al eliminar: " + error.message);
        console.error(error);
      }
    } else {
      // Intentar insertar
      const { error } = await supabase
        .from('favoritos')
        .insert([{ user_id: userId, universidad_id: UNIVERSIDAD_ID }]);

      if (!error) {
        setIsSaved(true);
      } else {
        // ¡Esto nos dirá exactamente qué falta en Supabase!
        alert("Error de Supabase al guardar: " + error.message);
        console.error(error);
      }
    }
    
    setLoading(false);
  };
    } else {
      // Si no está guardada, la insertamos
      const { error } = await supabase
        .from('favoritos')
        .insert([{ user_id: userId, universidad_id: UNIVERSIDAD_ID }]);

      if (!error) {
        setIsSaved(true);
      } else {
        console.error("Error al guardar en favoritos:", error);
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 p-4">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-md h-[800px] bg-[#ebf2fa] rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-white/50 relative font-sans text-slate-800">
        
        {/* BARRA SUPERIOR (HEADER) */}
        <header className="bg-[#2b61a3] text-white px-6 py-4 flex justify-between items-center shadow-md z-10">
          <div className="w-6"></div>
          <h1 className="text-center font-bold text-base tracking-wide">
            Universidad Latina de Panamá
          </h1>
          <button className="relative p-1.5 hover:bg-blue-800/50 rounded-full transition-colors active:scale-95">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a3 3 0 11-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#2b61a3]"></span>
          </button>
        </header>

        {/* ÁREA DE CONTENIDO */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          
          {/* TARJETA DESTACADA */}
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-md bg-slate-900 group">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" 
              alt="Universidad Latina Sede Santiago" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute top-4 left-4 bg-[#3b82f6] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Sede Destacada
            </div>

            <div className="absolute bottom-4 left-4 text-white space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-200">
                <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Santiago, Veraguas</span>
              </div>
              <h2 className="text-base font-bold tracking-wide">26 carreras disponibles</h2>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm py-1 px-2.5 rounded-xl flex items-center gap-1 shadow-sm border border-white/20">
              <span className="text-xs font-black text-slate-900">4.6</span>
              <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* CARD: CARRERAS POPULARES */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="border-b border-slate-100 p-4 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[#2b61a3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 01.788 0l4 1.714a.999.999 0 01.356.257l2.644-1.132a1 1 0 000-1.84l-7-3zM7 10.9v2.221c0 .496.273.953.71 1.18l2 1.042a1 1 0 00.866 0l2-1.041c.437-.228.71-.685.71-1.182V10.9L10 12.225 7 10.9z" />
              </svg>
              <h3 className="text-xs font-bold text-[#2b61a3] uppercase tracking-wider">Carreras populares</h3>
            </div>
            <ul className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              <li className="px-5 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">Ingeniería Civil.</li>
              <li className="px-5 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">Administración de Empresas.</li>
              <li className="px-5 py-3.5 hover:bg-slate-50 transition-colors cursor-pointer">Comunicación Social.</li>
            </ul>
          </div>

          {/* CARD: UBICACIÓN */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="border-b border-slate-100 p-4 flex items-center gap-2.5">
              <svg className="w-5 h-5 text-[#2b61a3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xs font-bold text-[#2b61a3] uppercase tracking-wider">Ubicación</h3>
            </div>
            <div className="p-5 text-center text-sm font-semibold text-slate-600 leading-relaxed">
              Provincia de Veraguas, <br /> Sede Santiago.
            </div>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <Link href="/carreraslatina" className="block w-full"> 
              <button className="bg-[#2b61a3] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-95 text-xs uppercase tracking-wider w-full">
                Ver carreras
              </button>
            </Link>
            
            {/* BOTÓN DE GUARDAR MODIFICADO */}
            <button 
              onClick={handleGuardarClick}
              disabled={loading}
              className={`font-bold py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white ${
                isSaved ? 'bg-red-500 hover:bg-red-600' : 'bg-[#ef7d7d] hover:bg-red-400'
              }`}
            >
              <svg 
                className={`w-4 h-4 text-white ${isSaved ? 'fill-current' : ''}`} 
                fill={isSaved ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {loading ? 'Cargando...' : isSaved ? 'Guardada' : 'Guardar'}
            </button>
          </div>

        </main>

        {/* BARRA DE NAVEGACIÓN INFERIOR */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-3 grid grid-cols-5 gap-1 shadow-[0_-4px_14px_rgba(0,0,0,0.04)] z-20">
          <button className="flex items-center justify-center p-2 text-[#2b61a3] transition-transform active:scale-90">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-[#2b61a3] transition-all active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-[#2b61a3] transition-all active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-[#2b61a3] transition-all active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-[#2b61a3] transition-all active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </nav>

      </div>
    </div>
  );
}