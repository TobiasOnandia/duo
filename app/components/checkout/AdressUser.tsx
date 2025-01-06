
export const AddressUser = () => {



  return (
    <fieldset className=" flex-1 lg:mx-4 grid grid-cols-1 md:grid-cols-2 border p-4 border-primary rounded-lg gap-4 ">
      <legend className=" text-lg font-bold col-span-2">Dirección de entrega</legend>
      <label htmlFor="full-name" className="col-span-2">
        <span className="block text-sm font-semibold mb-1">Nombre completo</span>
        <input
          type="text"
          id="full-name"
          name="fullName"
          placeholder="Ingresa tu nombre completo"
          className="bg-white rounded w-full px-4 py-2 border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="email" className="col-span-2">
        <span className="block text-sm font-semibold mb-1">Correo electrónico</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          className="bg-white rounded w-full border border-gray-300 shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="address" className="col-span-2">
        <span className="block text-sm font-semibold mb-1">Calle y número</span>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Ingresa la calle y número"
          className="bg-white rounded w-full px-4 py-2 border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="city" className="col-span-2 sm:col-span-1">
        <span className="block text-sm font-semibold mb-1 ">Ciudad</span>
        <input
          type="text"
          id="city"
          placeholder="Ingresa la ciudad"
          name="city"
          className="bg-white rounded w-full border border-gray-300 shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="state" className="col-span-2 sm:col-span-1">
        <span className="block text-sm font-semibold mb-1">Provincia</span>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Ingresa su Provincia"
          className="bg-white rounded w-full border border-gray-300 shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="postal-code" className="col-span-2">
        <span className="block text-sm font-semibold mb-1">Código postal</span>
        <input
          type="number"
          id="postal-code"
          name="postalCode"
          placeholder="Ingresa el código postal"
          className="bg-white rounded border border-gray-300 shadow w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>

      <label htmlFor="phone" className="col-span-2">
        <span className="block text-sm font-semibold mb-1">Teléfono</span>
        <input
          type="text"
          id="phone"
          placeholder="Ingresa tu teléfono"
          name="phone"
          className="bg-white rounded border border-gray-300 shadow w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </label>
    </fieldset>
  );
};
