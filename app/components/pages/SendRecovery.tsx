'use client'

import { supabase } from "@lib/supabaseClient"
import { useActionState } from "react"
import { toast } from "sonner";


export const SendRecovery = () => {

  /**
   * Step 1: Send the user an email to get a password reset token.
   * This email contains a link which sends the user back to your application.
   */
   const [error, submitAction, isLoading] = useActionState(
     async (_previousState: unknown, formData: FormData) => {
       const { error } = await supabase.auth.resetPasswordForEmail(formData.get("email") as string);
       if (error) return { error: error.message };
       toast.success("Se ha enviado un correo electrónico!");
     },
     null,
   );




  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Recuperar Contraseña</h2>
        <p className="text-gray-600 mb-6">Ingresa tu correo electrónico para recuperar tu contraseña</p>

        <form action={submitAction}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tu@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>

        { isLoading && (
          <div className="mt-4 text-green-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Se ha enviado un enlace a tu correo electrónico.
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ha ocurrido un error. Por favor, intenta de nuevo.
          </div>
        )}
      </div>
    </main>
  )
}
