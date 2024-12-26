import { Link } from "next-view-transitions";
import { useStore } from "../store/Store.products";

export const OrderSummary = () => {
  const products = useStore(state => state.products)

  const subTotal = products.reduce((previousState, currentValue) => previousState + currentValue.price, 0)
  const envio = 1000

  return (
    <section className="rounded-lg border h-fit border-gray-300 p-6 flex flex-[0.3] flex-col gap-6 bg-white shadow-md">
      <div className="flex justify-between items-center text-lg">
        <p className="font-medium text-gray-700">Subtotal:</p>
        <span className="font-semibold text-gray-900">
         $ {subTotal}
        </span>
      </div>
      <div className="flex justify-between items-center text-lg">
        <p className="font-medium text-gray-700">Envío:</p>
        <span className="font-semibold text-gray-900">$1000</span>
      </div>
      <div className="flex justify-between items-center border-t-2 border-dashed border-gray-300 pt-4 text-xl">
        <p className="font-semibold text-gray-800">Total:</p>
        <span className="font-bold text-gray-900">${subTotal + envio}</span>
      </div>
      <Link href={"/payment"} className="w-full text-center py-3 text-lg cursor-pointer font-bold text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors">
        Comprar Ahora
      </Link>
    </section>
  );
};
