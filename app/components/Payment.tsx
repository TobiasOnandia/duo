const paymentMethods = [
  {
    id: "credit-card",
    label: "Tarjeta de crédito",
    fields: [
      { id: "card-number", placeholder: "Número de tarjeta", type: "text" },
      { id: "card-name", placeholder: "Nombre de la tarjeta", type: "text" },
      { id: "cvv", placeholder: "CVV", type: "text" },
      { id: "expiry-date", placeholder: "Mes y año de expiración", type: "text" },
    ],
  },
  {
    id: "debit-card",
    label: "Tarjeta de débito",
    fields: [
      { id: "card-number", placeholder: "Número de tarjeta", type: "text" },
      { id: "card-name", placeholder: "Nombre de la tarjeta", type: "text" },
      { id: "cvv", placeholder: "CVV", type: "text" },
      { id: "expiry-date", placeholder: "Mes y año de expiración", type: "text" },
    ],
  },
  {
    id: "mercado-pago",
    label: "Mercado Pago",
    fields: [
      { id: "email", placeholder: "Correo electrónico", type: "email" },
      { id: "phone", placeholder: "Teléfono", type: "tel" },
    ],
  },
];

export const PaymentOptions = () => {
  return (
    <main className="w-[95%] h-full p-4 rounded-2xl border-primary  mt-24 md:w-4/5 mx-auto bg-[#fdfdfd] shadow ">
      <section className="flex ">

        <div className="flex-[0.7] h-[calc(100vh-400px)] px-4 ">
        <article className="space-y-4 ">
        <h2 className="mb-4 text-lg font-bold">Selecciona tu forma de pago</h2>
              {paymentMethods.map((method) => (
                <details key={method.id}  className="flex items-center gap-2 border rounded-lg bg-white font-semibold cursor-pointer">
                  <summary className="w-full border-b rounded-lg p-4">
                    <label htmlFor={method.id}>
                      <input type="radio" name="payment" id={method.id} className="hidden" required />
                    </label>
                    {method.label}
                  </summary>
                  <div className="grid grid-cols-2 gap-4 p-4 py-4 rounded-lg w-full">
                    
                    {method.fields.map((field) => (
                      <label key={field.id} htmlFor={field.id} className="col-span-2 shadow border-secondary">
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </label>
                    ))}
                  </div>
                </details>
              ))}
           

            </article> 


            <article className="flex  rounded-lg  gap-4 flex-col "> 
              <h3 className="mb-4 text-lg font-bold">Direccion de entrega</h3>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Calle y número"
                  className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Ciudad" className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Estado" className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Código postal" className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </label>
                <label htmlFor="">
                  <input type="text" placeholder="Telefono" className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </label>
                <label htmlFor="">
                  <input type="text" placeholder="Correo electrónico" className="bg-white rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </label>

            </article>
            </div>
            <section className="flex flex-col  h-fit items-center justify-between rounded border p-4 py-4 flex-[0.3]">
              <p className="text-lg flex justify-between items-center w-full">Subtotal
                  <span>
                      $100
                  </span>
              </p>
              <p className="text-lg flex justify-between items-center py-4 w-full">Envio
              <span>$ 1000</span>
              </p>
              <p className="text-lg flex justify-between border-dashed  items-center border-t-2 py-4 w-full">Total
              <span>$ 2500</span>
              </p>
              <button className="bg-secondary text-primary w-full cursor-pointer py-2 rounded">
                  Comprar Ahora
              </button>
          </section>

      </section>
    </main>
  );
};
