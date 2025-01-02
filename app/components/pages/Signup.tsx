'use client';

import { useActionState } from 'react';
import { GoogleIcon } from '@components/common/Icons';
import Link from 'next/link';
import { toast } from 'sonner';
import { supabase } from '@/app/lib/supabaseClient';
import { useTransitionRouter } from 'next-view-transitions';

export const Signup = () => {
  const router = useTransitionRouter();

  const [error, submitAction, isPending] = useActionState(
    async (previousState: { error: string } | null, formData: FormData) => {
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");

      if (password !== confirmPassword) {
        toast.error('Las contraseñas no coinciden.');
        return { error: 'Las contraseñas no coinciden.' };
      }

      const { error: signupError } = await supabase.auth.signUp({
        email: email as string,
        password: password as string,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          }
        }
      });

      if (signupError) {
        toast.error(signupError.message);
        return { error: signupError.message };
      }

      toast.success('Cuenta creada exitosamente.');
      toast.success('Por favor verifica tu correo electrónico para activar tu cuenta.');
      router.push('/');
      return null;
    },
    null
  );

  return (
    <main className="h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
      <div className="flex flex-col items-center bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Crear Cuenta</h1>
        {error && <p className="text-red-500 mb-4">{error.error}</p>}

        <form action={submitAction} className="w-full grid grid-cols-2 gap-2 space-y-5">
          {/* First Name */}
          <fieldset>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="Ingresa tu nombre"
            />
          </fieldset>

          {/* Last Name */}
          <fieldset>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="Ingresa tu apellido"
            />
          </fieldset>

          {/* Email */}
          <fieldset className='col-span-2'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="ejemplo@correo.com"
            />
          </fieldset>

          {/* Password */}
          <fieldset>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          {/* Confirm Password */}
          <fieldset>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="******"
            />
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full col-span-2 cursor-pointer  py-3 text-white bg-foreground rounded-lg shadow-md hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Registrarse
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6 w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">o</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <button
          className="flex items-center justify-center gap-2  w-full py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <GoogleIcon />

          {isPending ? 'Registrarse con Google...' : 'Registrarse con Google'}
        </button>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
