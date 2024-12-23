'use client';

import { useState } from 'react';
import { GoogleIcon } from './Icons';
import Link from 'next/link';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Lógica para manejar el registro aquí
  };

  const handleGoogleSignup = async () => {
    // Lógica para manejar el registro con Google aquí
  };

  return (
    <main className="h-screen flex items-center justify-center py-8">
      <div className="flex flex-col items-center bg-white p-9 rounded shadow-lg border border-primary">
        <h1 className="text-3xl font-bold mb-4">Crear Cuenta</h1>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          <button
            type="submit"
            className="w-full py-2 bg-neutral-800 disabled:bg-neutral-300 text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Registrarse
          </button>
        </form>

        <div className="flex items-center my-4 w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">o</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
        >
        <GoogleIcon />
          Registrarse con Google
        </button>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <Link href="/login" >
            ¿Ya tienes una cuenta?{' '}
            <span className="text-neutral-800 hover:underline">
              Inicia sesión aquí
            </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
