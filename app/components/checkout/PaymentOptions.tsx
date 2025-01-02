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

  return (
    <article className="w-full flex flex-col gap-6">
      {paymentMethods.map((method) => (
        <div key={method.id} className="border border-gray-300 shadow-sm rounded-lg p-4 transition hover:shadow-md">
          <label
            htmlFor={method.id}
            className="flex items-center gap-4 cursor-pointer py-2 rounded-lg hover:bg-gray-100"
          >
            <input
              type="radio"
              name="payment"
              id={method.id}
              className="peer hidden"
              onChange={() => setSelectedMethod(method.id)}
              checked={selectedMethod === method.id}
              required
            />
            <span
              className={`flex items-center justify-center w-5 h-5 border rounded-full transition-all duration-300 ${selectedMethod === method.id ? "bg-blue-500 border-blue-500" : "border-gray-300"
                }`}
            >
              {selectedMethod === method.id && (
                <span className="w-3 h-3 rounded-full bg-white"></span>
              )}
            </span>
            <span
              className={`${selectedMethod === method.id ? "text-blue-500 font-semibold" : "text-gray-800"
                } font-medium`}
            >
              {method.label}
            </span>
          </label>

          {/* Mostrar campos solo si el método está seleccionado */}
          {selectedMethod === method.id && (
            <div className="flex flex-col gap-4 mt-4">
              {method.fields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="flex flex-col">
                  <span className="block text-sm font-semibold mb-1 text-gray-700">
                    {field.placeholder}
                  </span>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="bg-white rounded border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                    required
                  />
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
  );
};
