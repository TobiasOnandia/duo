'use client'

import { useState } from 'react';
import { GoogleIcon } from './Icons';
import Link from 'next/link';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    // Lógica para iniciar sesión con correo y contraseña
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      // Lógica para iniciar sesión con Google (e.g., Supabase, Firebase)
      console.log('Iniciando sesión con Google...');
    } catch (err) {
      setError(`Error al iniciar sesión con Google. Por favor, inténtalo nuevamente. ${err}`);
    }
  };

  return (
    <main className="h-screen flex items-center justify-center py-8 ">
      <div className="flex flex-col items-center bg-white p-9 rounded shadow-lg border border-primary">
        <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <fieldset>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="ejemplo@correo.com"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-neutral-400 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          <fieldset className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Recordarme
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium cursor-pointer  text-neutral-800 ml-2 hover:text-primary-dark">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full py-2  cursor-pointer  bg-neutral-800 disabled:bg-neutral-300 text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="w-full mt-4 flex items-center  relative justify-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 justify-center cursor-pointer w-full py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 transition-all"
            >
             <GoogleIcon />
            <span className="text-sm font-medium text-gray-700 ">Iniciar sesión con Google</span>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
          <Link href="/signup" >¿No tienes una cuenta? <span className="text-neutral-800 cursor-pointer hover:underline"> Regístrate aquí </span></Link>
          </p>
        </div>
      </div>
    </main>
  );
};
