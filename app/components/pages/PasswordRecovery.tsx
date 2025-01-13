'use client'

import { supabase } from "@lib/supabaseClient";
import { useTransitionRouter } from "next-view-transitions";
import { useActionState } from "react";
import { toast } from "sonner";

export const PasswordRecovery = () => {
  const router = useTransitionRouter();

  const [error, submitAction, isLoading] = useActionState(
    async (_previousState: unknown, formData: FormData) => {
      supabase.auth.onAuthStateChange(async () => {
        const { data, error } = await supabase.auth
          .updateUser({ password: formData.get("password") as string })
        if (data) toast.success("Password updated successfully!")
        if (error) toast.error(`There was an error updating your password: ${error.message}`)
      })
      router.push('/')
    },
    null,
  );


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Cambiar Contraseña</h2>
        <p className="text-gray-600 mb-6">Ingresa tu nueva contraseña</p>

        <form action={submitAction}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Nueva Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirmar Nueva Contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirm-password"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={isLoading}
          >
            {isLoading ? 'Cambiando...' : 'Cambiar Contraseña'}
          </button>
        </form>

        {/* {status === 'success' && (
              <div className="mt-4 text-green-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tu contraseña ha sido cambiada exitosamente.
              </div>
            )} */}

        {error !== null && (
          <div className="mt-4 text-red-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Ha ocurrido un error en cambiar la contraseña
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
