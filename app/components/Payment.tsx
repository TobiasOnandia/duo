"use client";
import { AddressUser } from "./AdressUser";
import { PaymentOptions } from "./PaymentOptions";
import { CardCheckoutMobile } from "./CardCheckoutMobile";

export const Payment = () => {
  return (
    <main className="w-[95%] h-full p-4 rounded-2xl border border-primary mb-10 mt-24 md:w-4/5 mx-auto bg-white shadow-lg">
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:mx-4  ">
          <h2 className="text-lg mb-4 font-bold">Selecciona tu forma de pago</h2>
          <PaymentOptions />
          <AddressUser />
        </div>

        <CardCheckoutMobile />

      </section>
    </main>
  );
};
