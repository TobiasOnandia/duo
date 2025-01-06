import { ButtonPayment } from "@/app/lib/ButtonPayment";
import { useStore } from "@store/Store.products";
import { Link } from "next-view-transitions";

export const OrderSummary = () => {
  const price = useStore((state) => state.price);
  const stock = useStore((state) => state.stock);
  const shippingCost = 100

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
      <ButtonPayment />
    </section>
  );
};
