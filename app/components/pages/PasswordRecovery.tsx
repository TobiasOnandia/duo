'use client'

import { useState } from 'react'

export const PasswordRecovery = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Aquí iría la lógica para enviar la solicitud de recuperación de contraseña
    // Por ahora, simularemos un proceso asíncrono
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-2">Recuperar Contraseña</h2>
        <p className="text-gray-600 mb-6">Ingresa tu correo electrónico para recuperar tu contraseña</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 text-green-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Se ha enviado un enlace a tu correo electrónico.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 text-red-600 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ha ocurrido un error. Por favor, intenta de nuevo.
          </div>
        )}
      </div>
    </div>
  )
}
