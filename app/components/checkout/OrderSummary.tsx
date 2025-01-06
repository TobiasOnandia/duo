import { ButtonPayment } from "@lib/ButtonPayment";
import { useStore } from "@store/Store.products";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const OrderSummary = () => {
  const price = useStore((state) => state.price);
  const stock = useStore((state) => state.stock);
  const shippingCost = 100
  const pathname = usePathname()

  const isPayment = pathname.includes('/checkout')


  // Calcular el subtotal considerando cantidad y precio
  const subTotal = Object.keys(price).reduce((acc, productId) => {
    const productPrice = price[Number(productId)];
    const productQuantity = stock[Number(productId)] || 0; // Obtener la cantidad del stock
    return acc + productPrice * productQuantity; // Multiplicar precio por cantidad
  }, 0);



  return (
    <section className="rounded-lg border h-fit border-gray-300 p-6 flex flex-[0.3] flex-col gap-6 bg-white shadow-md">
      <div className="flex justify-between items-center text-lg">
        <p className="font-medium text-gray-700">Subtotal:</p>
        <span className="font-semibold text-gray-900">$ {subTotal}</span>
      </div>
      <div className="flex justify-between items-center text-lg">
        <p className="font-medium text-gray-700">Envío:</p>
        <span className="font-semibold text-gray-900">${shippingCost}</span>
      </div>
      <div className="flex justify-between items-center border-t-2 border-dashed border-gray-300 pt-4 text-xl">
        <p className="font-semibold text-gray-800">Total:</p>
        <span className="font-bold text-gray-900">
          ${subTotal + shippingCost}
        </span>
      </div>

      {
        isPayment ? (
          <Link href={'/payment'}
            className={`w-full   text-center py-3 text-lg cursor-pointer font-bold disabled:bg-gray-400 disabled:cursor-default text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors`}>
            Comprar Ahora
          </Link>
        )
          : <ButtonPayment />
      }
    </section>
  );
};
