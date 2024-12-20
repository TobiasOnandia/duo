import { useState } from "react";

const paymentMethods = [
    {
      id: "credit-card",
      label: "Tarjeta de crédito",
      fields: [
        { id: "card-number", placeholder: "Número de tarjeta", type: "text" },
        { id: "card-name", placeholder: "Nombre de la tarjeta", type: "text" },
        { id: "cvv", placeholder: "CVV", type: "text" },
        {
          id: "expiry-date",
          placeholder: "Mes y año de expiración",
          type: "text",
        },
      ],
    },
    {
      id: "debit-card",
      label: "Tarjeta de débito",
      fields: [
        { id: "card-number", placeholder: "Número de tarjeta", type: "text" },
        { id: "card-name", placeholder: "Nombre de la tarjeta", type: "text" },
        { id: "cvv", placeholder: "CVV", type: "text" },
        {
          id: "expiry-date",
          placeholder: "Mes y año de expiración",
          type: "text",
        },
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
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    return(
      <article className="w-full flex flex-col gap-6   ">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border-primary shadow rounded border p-4">
            <label
              htmlFor={method.id}
              className="flex items-center gap-4 cursor-pointer py-2  rounded "
            >
              <input
                type="radio"
                name="payment"
                id={method.id}
                className="peer"
                onChange={() => setSelectedMethod(method.id)}
                checked={selectedMethod === method.id}
                required
              />
              <span
                className={`${
                  selectedMethod === method.id ? "text-blue-500" : ""
                } font-medium`}
              >
                {method.label}
              </span>
            </label>

            {/* Mostrar campos solo si el método está seleccionado */}
            {selectedMethod === method.id && (
              <div className="flex flex-col gap-4 mt-4">
                {method.fields.map((field) => (
                  <label key={field.id} htmlFor={field.id}>
                    <span className="block text-sm font-semibold mb-1">
                      {field.placeholder}
                    </span>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className="bg-white rounded w-full border border-primary shadow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </article>
    )
}