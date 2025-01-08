"use client";
import { useStore } from "@/app/store/Store.products";
import { AddressUser } from "@components/checkout/AdressUser";
import { CardCheckoutMobile } from "@components/checkout/CardCheckoutMobile";
import { useActionState } from "react";
import { OrderSummary } from "./OrderSummary";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/app/lib/supabaseClient";

const addressUserSchema = z.object({
  fullName: z
    .string()
    .min(1, "El nombre completo es obligatorio")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "El nombre completo no puede contener números ni caracteres especiales",
    ),

  email: z.string().email("Debe ser un correo válido"),
  address: z
    .string()
    .min(1, "La dirección es obligatoria")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.-]+$/,
      "La dirección solo puede contener letras, números y algunos caracteres como ',' '.' '-'",
    ),
  city: z
    .string()
    .min(1, "La ciudad es obligatoria")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "La ciudad no puede contener números ni caracteres especiales",
    ),

  state: z
    .string()
    .min(1, "La provincia es obligatoria")
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "La provincia no puede contener números ni caracteres especiales",
    ),

  postalCode: z
    .string()
    .regex(/^\d{4,5}$/, "El código postal debe tener entre 4 y 5 dígitos")
    .trim(),
  phone: z
    .string()
    .regex(
      /^\+?[0-9]{10,15}$/,
      "El teléfono debe ser válido y tener entre 10 y 15 dígitos, con un '+' opcional al inicio",
    )
    .trim(),
  user: z.string().min(1, { message: "El ID del usuario es obligatorio" }),
  order_id: z.string().min(1, { message: "El ID del pedido es obligatorio" }),
});

export const Payment = () => {
  const products = useStore((state) => state.products);
  const stock = useStore((state) => state.stock);
  const price = useStore((state) => state.price);

  const [error, submitAction] = useActionState(
    async (_previousState: unknown, formData: FormData) => {
      const { data: user } = await supabase.auth.getUser();
      const { data: tokenJWT } = await supabase.auth.getSession();
      const token = tokenJWT?.session?.access_token;

      const data = {
        fullName: formData.get("fullName")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        address: formData.get("address")?.toString() || "",
        city: formData.get("city")?.toString() || "",
        state: formData.get("state")?.toString() || "",
        postalCode: formData.get("postalCode")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        user: user?.user?.id.toString() || "",
        order_id: "1234456",
      };

      try {
        addressUserSchema.parse(data); // Valida los datos con zod

        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Usa el token del usuario autenticado
          },
          body: JSON.stringify({
            items: products.map((product) => ({
              id: product.id,
              title: product.title,
              quantity: stock[product.id] || 1,
              unit_price: price[product.id],
            })),
            order_id: "1234456",
            metadata: data,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create preference");
        }

        if (error) {
          console.log(error);
        }

        const { init_point } = await response.json();
        window.location.href = init_point;
      } catch (err) {
        if (err instanceof z.ZodError) {
          err.errors.map((e) => toast.error(`${e.message}`));
        } else {
          toast.error(`Error during payment process: ${err}`);
          toast.info(
            "Error al iniciar el proceso de pago. Inténtalo de nuevo.",
          );
        }
      }
    },
    null,
  );

  return (
    <main className="w-[95%] h-full p-4 rounded-2xl border border-primary mb-10 mt-24 md:w-4/5 mx-auto bg-white shadow-lg">
      <h3 className="text-lg font-bold px-4">Tus Productos</h3>
      <CardCheckoutMobile />
      <form action={submitAction} className="flex flex-col lg:flex-row">
        <AddressUser />
        <section className="flex-[0.8]  py-4 pr-4">
          <OrderSummary />
        </section>
      </form>
    </main>
  );
};
