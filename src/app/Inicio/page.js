"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function DescubrirPage() {
  const router = useRouter();

  // --- CONFIGURA TUS RUTAS DE NEXT.JS AQUÍ ---
  const handleNotificationClick = () => router.push('/notificaciones');
  const handleFiltroPublicas = () => router.push('/Publicas');
  const handleFiltroPrivadas = () => router.push('/privadas');
  const handleFiltroCarrera = () => router.push('/universidades/por-carrera');
  const handleFiltroCerca = () => router.push('/universidades/cerca-de-mi');
  const handleULatinaClick = () => router.push('/universidad/u-latina');
  const handleUdelasClick = () => router.push('/universidad/udelas');
  const handleUtpClick = () => router.push('/universidad/utp');

  const handleNavHome = () => router.push('/home');
  const handleNavAcademics = () => router.push('/academicos');
  const handleNavCommunity = () => router.push('/orientador');
  const handleNavProfile = () => router.push('/Perfil');
  const handleNavSettings = () => router.push('/configuracion');

  return (
    // Contenedor principal: En PC añade un fondo degradado elegante para que la interfaz resalte en el centro
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen flex flex-col font-sans items-center justify-center antialiased">
      
      {/* Contenedor tipo "Móvil/Tarjeta" enfocado que se ve idéntico en PC y Celular */}
      <div className="w-full max-w-md bg-gray-50 min-h-screen md:min-h-[850px] md:my-6 md:rounded-3xl md:shadow-2xl flex flex-col relative overflow-hidden border border-gray-200/50 pb-20">
        
        {/* 1. HEADER (Azul nítido y centrado) */}
        <header className="bg-[#1D5389] text-white px-5 py-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
          <div className="w-6"></div> {/* Espaciador para centrado perfecto */}
          <h1 className="text-lg font-bold tracking-wide">Descubrir</h1>
          <button 
            onClick={handleNotificationClick} 
            className="p-1.5 hover:bg-white/10 active:scale-95 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </button>
        </header>

        {/* CONTENIDO INTERNO */}
        <main className="p-4 flex-1 overflow-y-auto space-y-5 scrollbar-none">
          
          {/* 2. BARRA DE BÚSQUEDA */}
          <div className="relative shadow-sm rounded-2xl">
            <input 
              type="text" 
              placeholder="Buscar universidad..." 
              className="w-full bg-white text-gray-800 pl-11 pr-4 py-3 rounded-2xl text-sm font-medium border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
            <span className="absolute left-3.5 top-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
              </svg>
            </span>
          </div>

          {/* 3. BOTONES DE FILTROS (Desplazamiento horizontal impecable) */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
            <button onClick={handleFiltroPublicas} className="bg-[#1D5389] hover:bg-[#16416c] text-white px-4 py-2 rounded-xl font-semibold text-xs whitespace-nowrap shadow-sm transition-colors snap-start">
              Publicas
            </button>
            <button onClick={handleFiltroPrivadas} className="bg-[#EAA353] hover:bg-[#d69143] text-white px-4 py-2 rounded-xl font-semibold text-xs whitespace-nowrap shadow-sm transition-colors snap-start">
              Privadas
            </button>
            <button onClick={handleFiltroCarrera} className="bg-[#53B462] hover:bg-[#439c51] text-white px-4 py-2 rounded-xl font-semibold text-xs whitespace-nowrap shadow-sm transition-colors snap-start">
              Por Carrera
            </button>
            <button onClick={handleFiltroCerca} className="bg-[#59B2D1] hover:bg-[#469cb9] text-white px-4 py-2 rounded-xl font-semibold text-xs whitespace-nowrap shadow-sm transition-colors snap-start">
              Cerca de mi
            </button>
          </div>

          <hr className="border-gray-200" />

          {/* 4. SECCIÓN UNIVERSIDADES RECOMENDADAS */}
          <div>
            <h2 className="text-gray-800 font-bold text-center mb-4 text-sm tracking-wide uppercase">
              Universidades Recomendadas
            </h2>
            
            <div className="grid grid-cols-3 gap-3">
              
              {/* U LATINA */}
              <button onClick={handleULatinaClick} className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-3 rounded-2xl flex flex-col items-center justify-between shadow-sm transition-all active:scale-95 border border-gray-300/30">
                <span className="text-[10px] font-extrabold text-gray-700 tracking-wider mb-2">U LATINA</span>
                {/* Contenedor circular con texto provisional estilizado si no pones imagen */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 mb-2 shadow-inner border border-gray-100 font-bold text-blue-800 text-[11px]">
                  ULatina
                </div>
                <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                  4.6 <span className="text-yellow-500">★</span>
                </span>
              </button>

              {/* UDELAS */}
              <button onClick={handleUdelasClick} className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-3 rounded-2xl flex flex-col items-center justify-between shadow-sm transition-all active:scale-95 border border-gray-300/30">
                <span className="text-[10px] font-extrabold text-gray-700 tracking-wider mb-2">UDELAS</span>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 mb-2 shadow-inner border border-gray-100 font-bold text-blue-600 text-[10px]">
                  UDELAS
                </div>
                <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                  4.4 <span className="text-yellow-500">★</span>
                </span>
              </button>

              {/* UTP */}
              <button onClick={handleUtpClick} className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-3 rounded-2xl flex flex-col items-center justify-between shadow-sm transition-all active:scale-95 border border-gray-300/30">
                <span className="text-[10px] font-extrabold text-gray-700 tracking-wider mb-2">UTP</span>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 mb-2 shadow-inner border border-gray-100 font-bold text-purple-900 text-[12px]">
                  UTP
                </div>
                <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                  4.7 <span className="text-yellow-500">★</span>
                </span>
              </button>

            </div>
          </div>

          {/* 5. IMAGEN DEL CAMPUS (Carga asegurada y nítida) */}
          <div className="w-full rounded-2xl overflow-hidden shadow-md mt-2 border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" 
              alt="Campus Universitario" 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </main>

        {/* 6. BARRA DE NAVEGACIÓN INFERIOR (Estilo App Nativa) */}
        <nav className="bg-white/95 backdrop-blur-md border-t border-gray-200 absolute bottom-0 left-0 right-0 h-16 flex justify-around items-center z-20 px-2 shadow-lg">
          
          <button onClick={handleNavHome} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21.75h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21.75h2.25" />
            </svg>
          </button>

          <button onClick={handleNavAcademics} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174c-.053-.46.12-.934.482-1.223L11.238 4.2a1.5 1.5 0 0 1 1.524 0l6.496 4.75a1.5 1.5 0 0 1 .482 1.223L19.235 15a1.5 1.5 0 0 1-.482 1.223l-6.496 4.75a1.5 1.5 0 0 1-1.524 0l-6.496-4.75a1.5 1.5 0 0 1-.482-1.223l.504-4.826Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 9.687h15.364M12 4.25v15.5" />
            </svg>
          </button>

          <button onClick={handleNavCommunity} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </button>

          <button onClick={handleNavProfile} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          <button onClick={handleNavSettings} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>

        </nav>

      </div>
    </div>
  );
}