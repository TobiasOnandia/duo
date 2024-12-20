export const AddressUser = () => {
 
 
    return(
        <article className="grid grid-cols-2   rounded-lg  gap-4 flex-col mt-4 ">
        <h3 className="mb-4 text-lg font-bold col-span-2">Direccion de entrega</h3>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Calle y número"
            className="bg-white rounded w-full px-4 py-2 border border-primary shadow  focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Ciudad"
            className="bg-white rounded w-full border border-primary shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Estado"
            className="bg-white rounded w-full border border-primary shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Código postal"
            className="bg-white rounded border border-primary shadow w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Telefono"
            className="bg-white rounded border border-primary shadow w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Correo electrónico"
            className="bg-white border border-primary shadow rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
      </article>
    )
}