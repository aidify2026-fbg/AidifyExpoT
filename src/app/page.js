"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error al iniciar sesión: " + error.message);
      return;
    }

    // CORREGIDO: Ahora redirige directamente a tu ventana de Inicio
    router.push("/Inicio");
  };

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">

      {/* CARD PRINCIPAL */}
      <div className="w-full max-w-md bg-[#A3B3D1] rounded-[40px] p-6 md:p-10 shadow-xl">

        {/* TÍTULO */}
        <h1 className="text-center text-white font-bold text-3xl md:text-4xl leading-tight">
          Welcome to
          <br />
          Aidify
        </h1>

        {/* LOGO */}
        <div className="flex justify-center my-6">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4jjuR9kqAf-0P0wdaL27w2Q72FEqyKpgBBMTkkxmJ5mwRcOp8pIHy-boKoxQaA9ziLuIceEjGkDMWwMa6cBQKroBuStrBSKag0NkoQ9aNyO9kDEq4SflQIc6YrMetYX0QsJT1jgKvXUbozgUoQ30x8jrqe7kL7AG6cfO38UzpVgG4Gfn0W3mHZd4P8gLD/w1684-h1069-p-k-no-nu/image%20(8).png"
            alt="Aidify"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-white block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 md:h-12 rounded-2xl bg-white px-4 text-black outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-white block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 md:h-12 rounded-2xl bg-white px-4 text-black outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* FORGOT PASSWORD */}
        <p className="text-blue-700 text-sm mt-2 cursor-pointer hover:underline">
          Forgot your password?
        </p>

        {/* BOTONES */}
        <div className="mt-8 space-y-3">

          {/* LOGIN */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-2xl py-2.5 font-medium transition-all shadow-md"
          >
            Login
          </button>

          {/* LINK REGISTER */}
          <a 
            href="/register" 
            className="w-full block text-center bg-transparent border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white rounded-2xl py-2 font-medium transition-all"
          >
            Crear cuenta
          </a>

        </div>

      </div>
    </div>
  );
}