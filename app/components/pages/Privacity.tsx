export const Privacity = () => {
  return (
    <main className="container mx-auto mt-24 rounded-3xl shadow-2xl w-[95%] md:w-4/5 px-6 py-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 text-center ">
        Política de privacidad
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <p className="text-gray-700 leading-relaxed">
            En Duo Indumentaria, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y compartimos tu información.
          </p>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Información que recopilamos</h2>
          <ul className="list-none space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2 text-xl">•</span>
              Datos personales como nombre, correo electrónico y número de teléfono.
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2 text-xl">•</span>
              Información de uso del sitio web como dirección IP, navegador y comportamiento.
            </li>
          </ul>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">Cómo usamos tu información</h2>
          <p className="text-gray-700 leading-relaxed">
            Utilizamos tus datos para proporcionar y mejorar nuestros servicios, comunicarnos contigo, y cumplir con obligaciones legales.
          </p>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Compartir tu información</h2>
          <p className="text-gray-700 leading-relaxed">
            No compartimos tu información personal con terceros, excepto cuando es necesario para cumplir con la ley o mejorar nuestros servicios.
          </p>
        </section>

        <section className="mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2">Cambios a esta política</h2>
          <p className="text-gray-700 leading-relaxed">
            Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos sobre cambios importantes publicándolos en este sitio.
          </p>
        </section>
      </div>
    </main>
      )
}
