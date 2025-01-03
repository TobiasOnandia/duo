import { useStore } from "@store/Store.products";

export const OrderSummary = () => {
  const price = useStore((state) => state.price);
  const stock = useStore((state) => state.stock);
  const products = useStore(state => state.products)
  const shippingCost = 100

  // Calcular el subtotal considerando cantidad y precio
  const subTotal = Object.keys(price).reduce((acc, productId) => {
    const productPrice = price[Number(productId)];
    const productQuantity = stock[Number(productId)] || 0; // Obtener la cantidad del stock
    return acc + productPrice * productQuantity; // Multiplicar precio por cantidad
  }, 0);


  const handleClick = async () => {
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
          order_id: "1111",
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
  };

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
      <button
        onClick={handleClick}
        className="w-full text-center py-3 text-lg cursor-pointer font-bold text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors">
        Comprar Ahora
      </button>
    </section>
  );
};
