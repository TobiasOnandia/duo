'use client'
import { AddressUser } from "./AdressUser";
import { PaymentOptions } from "./PaymentOptions";


export const Payment = () => {
  return (
    <main className="w-[95%] h-screen p-4 rounded-2xl border-primary  mt-24 md:w-4/5 mx-auto bg-[#fdfdfd] shadow ">
      <section className="flex ">
        <div className="flex-[0.7]  h-[calc(100vh-400px)] px-4 ">
           <h2 className="text-lg mb-4 font-bold">
            Selecciona tu forma de pago
          </h2>

          <PaymentOptions />
          <AddressUser />
  
        </div>
        <section className="flex shadow flex-col  h-fit items-center justify-between rounded border p-4 py-4 flex-[0.3]">
          <p className="text-lg flex justify-between items-center w-full">
            Subtotal
            <span>$100</span>
          </p>
          <p className="text-lg flex justify-between items-center py-4 w-full">
            Envio
            <span>$ 1000</span>
          </p>
          <p className="text-lg flex justify-between border-dashed  items-center border-t-2 py-4 w-full">
            Total
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
