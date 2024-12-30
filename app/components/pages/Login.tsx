'use client'

import { useActionState } from 'react';
import { GoogleIcon } from '@components/common/Icons';
import { Link, useTransitionRouter } from 'next-view-transitions';
import { supabase } from '@/app/lib/supabaseClient';
import { toast } from 'sonner';

export const Login = () => {

  const router = useTransitionRouter()

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.get("email"),
        password: formData.get("password")
      });

      console.log(previousState, formData);
      if (error) {
        return { error: error.message }; // Captura el mensaje de error
      }
      toast.success('Inicio de sesión exitoso')
      router.push('/')
      return null; // No hay error
    },
    null,
  );

  return (
    <main className="h-screen flex items-center justify-center py-8 ">
      <div className="flex flex-col items-center bg-white p-9 rounded shadow-lg border border-primary">
        <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>

        <form action={submitAction} className="w-full max-w-sm space-y-4">
          <fieldset>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name='email'
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
              name='password'
              required
              className="mt-1 block w-full p-2 border border-neutral-400 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          {error?.error && <p className="text-red-500 text-sm">{error.error}</p>}
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
              <a href="#" className="font-medium cursor-pointer text-neutral-800 ml-2 hover:text-primary-dark">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={isPending} // Deshabilitar el botón mientras se procesa la acción
            className="w-full py-2 cursor-pointer bg-neutral-800 disabled:bg-neutral-300 text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="w-full mt-4 flex items-center relative justify-center">
          <button
            className="flex items-center gap-2 justify-center cursor-pointer w-full py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 transition-all"
          >
            <GoogleIcon />
            <span className="text-sm font-medium text-gray-700">Iniciar sesión con Google</span>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <Link href="/signup">¿No tienes una cuenta? <span className="text-neutral-800 cursor-pointer hover:underline"> Regístrate aquí </span></Link>
          </p>
        </div>
      </div>
    </main>
  );
};
