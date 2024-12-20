import { CardCheckout } from "./CardCheckout";
import { TrashIcon } from "./Icons";
import { OrderSummary } from "./OrderSummary";
import { Recommend } from "@/app/components/Recommend";

export const Checkout = () => {
  return (
    <main className="w-[95%] h-full p-4 rounded-2xl  border border-primary   mt-24 md:w-4/5 mx-auto bg-[#fdfdfd] shadow ">
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-[0.7] h-[calc(100vh-400px)] px-4 overflow-y-scroll">
          <header className="flex items-center pb-4 justify-between border-b ">
            <h1 className="text-2xl">Tus productos</h1>
            <button className="flex items-center gap-2 cursor-pointer">
              <TrashIcon />
              Vaciar
            </button>
          </header>
          <CardCheckout />

        </div>

        <OrderSummary />
      </div>

      <Recommend />
    </main>
  );
};
