"use client";
import { useStore } from "@/app/store/Store.products";
import { AddressUser } from "@components/checkout/AdressUser";
import { CardCheckoutMobile } from "@components/checkout/CardCheckoutMobile";
import { useActionState } from "react";

export const Payment = () => {
  const products = useStore(state => state.products)
  const stock = useStore((state) => state.stock);
  const price = useStore((state) => state.price);

  const [error, submitAction, isPending] = useActionState(
    async (_previousState: unknown, formData: FormData) => {
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const address = formData.get("address");
      const city = formData.get("city");
      const state = formData.get("state");
      const postalCode = formData.get("postalCode");
      const phone = formData.get("phone");

      if (error) {
        console.log(error)
      }

      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          body: JSON.stringify({
            items:
              products.map(product => ({
                id: product.id,
                title: product.title,
                quantity: stock[product.id] || 1,
                unit_price: price[product.id],
              }))
            ,
            order_id: "1234",
            metadata: {
              fullName: fullName,
              email: email,
              address: address,
              city: city,
              state: state,
              postalCode: postalCode,
              phone: phone
            },
            headers: {
              "Content-Type": "application/json",
            }
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create preference");
        }

        const { init_point } = await response.json();
        window.location.href = init_point; // Redirige a la página de pago de MercadoPago
      } catch (error) {
        console.error("Error during payment process:", error);
        alert("Error al iniciar el proceso de pago. Inténtalo de nuevo.");
      }
    },
    null,
  );

  return (
    <main className="w-[95%] h-full p-4 rounded-2xl border border-primary mb-10 mt-24 md:w-4/5 mx-auto bg-white shadow-lg">
      <form action={submitAction} className="flex flex-col lg:flex-row">
        <fieldset className="flex-1 lg:mx-4  ">
          <h2 className="text-lg mb-4 font-bold">Selecciona tu forma de pago</h2>
          <AddressUser />
        </fieldset>
        <CardCheckoutMobile />
      </form>
    </main>
  );
};
