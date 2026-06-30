"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // 1. Crear la cuenta en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (authError) {
      alert("Error al crear cuenta: " + authError.message);
      return;
    }

    // 2. Insertar los datos en tu tabla 'USUARIO'
    // Esto es lo que faltaba para que tu Perfil pueda leer los datos después
    const { error: insertError } = await supabase
      .from('USUARIO')
      .insert([
        { 
          Nombre: name,
          Correo: email,
          Contraseña: password, 
          Rol: 'Estudiante' 
        }
      ]);

    if (insertError) {
      console.error("Error al guardar en tabla USUARIO:", insertError);
      alert("Cuenta creada, pero hubo un problema guardando tu información. Por favor, intenta iniciar sesión.");
    } else {
      alert("¡Cuenta creada correctamente!");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#A3B3D1] rounded-[40px] p-6 md:p-10">
        <h1 className="text-center text-white font-bold text-3xl md:text-4xl">
          Create Account
        </h1>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-white block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 rounded-2xl bg-white px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-2xl bg-white px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-2xl bg-white px-4 outline-none"
            />
          </div>

          <div>
            <label className="text-white block mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-12 rounded-2xl bg-white px-4 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-2 font-medium"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-white mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}