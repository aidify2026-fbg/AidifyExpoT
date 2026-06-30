"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from "@/utils/supabaseClient";

export default function PerfilUsuario() {
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    rol: 'Estudiante',
  });
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerPerfilYFavoritos = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          // 1. Cargar datos del perfil
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('nombre, email, rol')
            .eq('id', user.id)
            .maybeSingle();

          if (profileData && !profileError) {
            setUserData({
              nombre: profileData.nombre || 'Usuario sin nombre',
              email: profileData.email || user.email,
              rol: profileData.rol || 'Estudiante',
            });
          } else {
            setUserData({
              nombre: 'Usuario Nuevo',
              email: user.email,
              rol: 'Estudiante',
            });
          }

          // 2. Cargar las universidades guardadas por este usuario
          const { data: favData, error: favError } = await supabase
            .from('favoritos')
            .select('universidad_id')
            .eq('user_id', user.id);

          if (favData && !favError) {
            setFavoritos(favData);
          }
        }
      } catch (error) {
        console.error("Error cargando datos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerPerfilYFavoritos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <p className="text-slate-600 font-semibold animate-pulse">Cargando perfil...</p>
      </div>
    );
  }

  // Diccionario temporal para mostrar nombres bonitos según el ID guardado
  const nombresUniversidades = {
    'latina_santiago': 'Universidad Latina de Panamá - Sede Santiago'
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 p-4">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-md h-[800px] bg-[#ebf2fa] rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-white/50 relative font-sans text-slate-800">
        
        {/* HEADER DEL PERFIL */}
        <header className="bg-[#2b61a3] text-white px-6 pt-8 pb-16 flex flex-col items-center relative shadow-md z-10 rounded-b-[40px]">
          <h1 className="font-bold text-lg tracking-wide mb-4">Mi Perfil</h1>
          
          <div className="w-24 h-24 bg-white rounded-full border-4 border-[#ebf2fa] shadow-inner flex items-center justify-center overflow-hidden mb-2">
            <svg className="w-14 h-14 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="font-bold text-base tracking-wide">{userData.nombre}</h2>
          <p className="text-xs text-blue-200 font-medium">{userData.rol}</p>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 overflow-y-auto p-6 space-y-5 pb-24 -mt-8 relative z-20">
          
          {/* TARJETA DE INFORMACIÓN PERSONAL */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60 space-y-4">
            <h3 className="text-xs font-bold text-[#2b61a3] uppercase tracking-wider">Datos personales</h3>
            
            <div className="flex flex-col border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Correo Electrónico</span>
              <span className="text-sm font-semibold text-slate-700">{userData.email}</span>
            </div>

            <div className="flex flex-col border-b border-slate-100 pb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Nombre Completo</span>
              <span className="text-sm font-semibold text-slate-700">{userData.nombre}</span>
            </div>
          </div>

          {/* SECCIÓN DE UNIVERSIDADES GUARDADAS */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/60">
            <h3 className="text-xs font-bold text-[#2b61a3] uppercase tracking-wider mb-3">Mis Favoritos ({favoritos.length})</h3>
            
            {favoritos.length === 0 ? (
              <p className="text-xs text-slate-400 font-medium py-2">Aún no has guardado ninguna universidad.</p>
            ) : (
              <ul className="space-y-2">
                {favoritos.map((fav, index) => (
                  <li key={index} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {nombresUniversidades[fav.universidad_id] || fav.universidad_id}
                    </span>
                    <svg className="w-4 h-4 text-red-400 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* BOTÓN CERRAR SESIÓN */}
          <button 
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = '/login';
            }}
            className="w-full bg-[#ef7d7d] hover:bg-red-500 text-white font-bold py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-xs uppercase tracking-wider text-center"
          >
            Cerrar Sesión
          </button>

        </main>

        {/* BARRA DE NAVEGACIÓN INFERIOR */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-3 grid grid-cols-5 gap-1 shadow-[0_-4px_14px_rgba(0,0,0,0.04)] z-20">
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-[#2b61a3] transition-transform active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
          <button className="flex items-center justify-center p-2 text-[#2b61a3] transition-all active:scale-90">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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