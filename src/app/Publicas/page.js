"use client";
 
 
 
import React from 'react';
 
import { useRouter } from 'next/navigation';
 
 
 
export default function UniversidadesPublicasPage() {
 
  const router = useRouter();
 
 
 
  // --- CONFIGURACIÓN DE REDIRECCIONES ---
 
  const handleBackClick = () => router.push('/Inicio');
 
 
 
  const handleUPClick = () => router.push('/universidad-panama');
 
  const handleUdelasClick = () => router.push('/universidad/udelas');
 
  const handleUTPClick = () => router.push('/utp');
 
 
 
  // Barra de navegación inferior
 
  const handleNavHome = () => router.push('/home');
 
  const handleNavAcademics = () => router.push('/academicos');
 
  const handleNavCommunity = () => router.push('/comunidad');
 
  const handleNavProfile = () => router.push('/perfil');
 
  const handleNavSettings = () => router.push('/configuracion');
 
 
 
  return (
 
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen flex flex-col font-sans items-center justify-center antialiased">
 
      {/* CONTENEDOR MÓVIL */}
 
      <div className="w-full max-w-md bg-gray-50 min-h-screen md:min-h-[850px] md:my-6 md:rounded-3xl md:shadow-2xl flex flex-col relative overflow-hidden border border-gray-200/50 pb-20">
 
 
 
        {/* HEADER */}
 
        <header className="bg-[#1D5389] text-white px-4 py-4 flex items-center sticky top-0 z-20 shadow-md">
 
          <button
 
            onClick={handleBackClick}
 
            className="p-1.5 hover:bg-white/10 active:scale-95 rounded-full transition-all"
 
            aria-label="Regresar"
 
          >
 
            <svg
 
              xmlns="http://www.w3.org/2000/svg"
 
              fill="none"
 
              viewBox="0 0 24 24"
 
              strokeWidth={2.5}
 
              stroke="currentColor"
 
              className="w-6 h-6"
 
            >
 
              <path
 
                strokeLinecap="round"
 
                strokeLinejoin="round"
 
                d="M15.75 19.5 8.25 12l7.5-7.5"
 
              />
 
            </svg>
 
          </button>
 
 
 
          <h1 className="text-lg font-bold tracking-wide ml-4 flex-1">
 
            Universidades Públicas
 
          </h1>
 
        </header>
 
 
 
        {/* CONTENIDO PRINCIPAL */}
 
        <main className="p-4 flex-1 overflow-y-auto space-y-5 scrollbar-none">
 
 
 
     {/* BANNER GENERAL Y TECNOLÓGICO */}
<div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative group">
  <img
    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    alt="Concepto de educación digital y conectividad"
    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
  />

  {/* Gradiente sutil para legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
  
  <div className="absolute bottom-3 left-3">
    <span className="bg-blue-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
      Publicas
    </span>
  </div>
</div>
 
 
 
          {/* RESULTADOS */}
 
          <div className="flex justify-between items-center px-1">
 
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
 
              3 opciones encontradas
 
            </p>
 
 
 
            <span className="text-xs bg-gray-200 text-gray-700 font-medium px-2 py-0.5 rounded-lg">
 
              Santiago
 
            </span>
 
          </div>
 
 
 
          {/* LISTA DE UNIVERSIDADES */}
 
          <div className="space-y-4">
 
 
 
            {/* UNIVERSIDAD DE PANAMÁ */}
 
            <div
 
              onClick={handleUPClick}
 
              className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-300/20 cursor-pointer transition-all active:scale-[0.99]"
 
            >
 
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm shrink-0">
 
                <img
 
                  src="https://www.up.ac.pa/sites/default/files/inline-images/Logo%20UP.png"
 
                  alt="Universidad de Panamá"
 
                  className="object-contain w-full h-full"
 
                />
 
              </div>
 
 
 
              <div className="flex-1 min-w-0">
 
                <h2 className="text-gray-900 font-bold text-sm truncate">
 
                  Universidad de Panamá
 
                </h2>
 
 
 
                <div className="flex items-center gap-1 text-gray-600 text-xs mt-1 font-medium">
 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-500 shrink-0">
 
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
 
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
 
                  </svg>
 
                  <span>Santiago, Veraguas</span>
 
                </div>
 
                <p className="text-gray-500 text-[11px] font-semibold mt-0.5">15 facultades disponibles</p>
 
                <p className="text-[10px] text-gray-600 mt-1 line-clamp-2">Administración, Contabilidad, Derecho, Educación, Psicología e Informática...</p>
 
              </div>
 
 
 
              <div className="flex items-center gap-0.5 bg-white/60 px-2 py-1 rounded-xl text-xs font-bold text-gray-800 self-center shadow-inner">
 
                4.3 <span className="text-yellow-500 text-sm leading-none">★</span>
 
              </div>
 
            </div>
 
 
 
            {/* UDELAS */}
 
            <div onClick={handleUdelasClick} className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-300/20 cursor-pointer transition-all active:scale-[0.99]">
 
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm shrink-0">
 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTET9HFiumGDHjR45xukhyMCIyzm16ykmJ_5w&s" alt="UDELAS" className="object-contain w-full h-full" />
 
              </div>
 
              <div className="flex-1 min-w-0">
 
                <h2 className="text-gray-900 font-bold text-sm truncate">UDELAS</h2>
 
                <div className="flex items-center gap-1 text-gray-600 text-xs mt-1 font-medium">
 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-500 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" /></svg>
 
                  <span>Santiago, Veraguas</span>
 
                </div>
 
                <p className="text-gray-500 text-[11px] font-semibold mt-0.5">6 facultades disponibles</p>
 
                <p className="text-[10px] text-gray-600 mt-1 line-clamp-2">Psicología, Fisioterapia, Educación Especial, Trabajo Social y más...</p>
 
              </div>
 
              <div className="flex items-center gap-0.5 bg-white/60 px-2 py-1 rounded-xl text-xs font-bold text-gray-800 self-center shadow-inner">
 
                4.4 <span className="text-yellow-500 text-sm leading-none">★</span>
 
              </div>
 
            </div>
 
 
 
            {/* UTP */}
 
            <div onClick={handleUTPClick} className="bg-[#D9E2EC] hover:bg-[#bcccdc] p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-300/20 cursor-pointer transition-all active:scale-[0.99]">
 
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-sm shrink-0">
 
                <img src="https://utp.ac.pa/sites/default/files/documentos/2024/imagen/3_logo_utp_-_cmyk_oficial.jpg" alt="UTP" className="object-contain w-full h-full" />
 
              </div>
 
              <div className="flex-1 min-w-0">
 
                <h2 className="text-gray-900 font-bold text-sm truncate">Universidad Tecnológica de Panamá</h2>
 
                <div className="flex items-center gap-1 text-gray-600 text-xs mt-1 font-medium">
 
                  {/* Corregido xmlns */}
 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-500 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" /></svg>
 
                  <span>Santiago, Veraguas</span>
 
                </div>
 
                <p className="text-gray-500 text-[11px] font-semibold mt-0.5">6 facultades disponibles</p>
 
                <p className="text-[10px] text-gray-600 mt-1 line-clamp-2">Sistemas, Redes, Software, Industrial, Civil, Eléctrica y más...</p>
 
              </div>
 
              <div className="flex items-center gap-0.5 bg-white/60 px-2 py-1 rounded-xl text-xs font-bold text-gray-800 self-center shadow-inner">
 
                4.6 <span className="text-yellow-500 text-sm leading-none">★</span>
 
              </div>
 
            </div>
 
 
 
          </div>
 
        </main>
 
 
 
        {/* BARRA DE NAVEGACIÓN INFERIOR */}
 
        <nav className="bg-white/95 backdrop-blur-md border-t border-gray-200 absolute bottom-0 left-0 right-0 h-16 flex justify-around items-center z-20 px-2 shadow-lg">
 
          <button onClick={handleNavHome} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21.75h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21.75h2.25" /></svg></button>
 
          <button onClick={handleNavAcademics} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174c-.053-.46.12-.934.482-1.223L11.238 4.2a1.5 1.5 0 0 1 1.524 0l6.496 4.75a1.5 1.5 0 0 1 .482 1.223L19.235 15a1.5 1.5 0 0 1-.482 1.223l-6.496 4.75a1.5 1.5 0 0 1-1.524 0l-6.496-4.75a1.5 1.5 0 0 1-.482-1.223l.504-4.826Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 9.687h15.364M12 4.25v15.5" /></svg></button>
 
          <button onClick={handleNavCommunity} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg></button>
 
          <button onClick={handleNavProfile} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg></button>
 
          <button onClick={handleNavSettings} className="p-2 text-[#1D5389] hover:bg-slate-100 rounded-xl transition-all active:scale-90"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg></button>
 
        </nav>
 
 
 
      </div>
 
    </div>
 
  );
 
}
 