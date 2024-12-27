import { useCounter } from "@uidotdev/usehooks";
import { AddIcon, MinusIcon } from "@components/common/Icons";
import { useStore } from "@store/Store.products";

interface StockProps {
  productId: number;
  productPrice: number;
}

export const Stock: React.FC<StockProps> = ({ productId, productPrice }) => {
  // Obtiene el stock inicial desde el estado global
  const initialStock = useStore((state) => state.stock[productId] || 1);

  // Hook para manejar el contador localmente
  const [count, { increment, decrement }] = useCounter(initialStock, {
    min: 1,
    max: 10,
  });

  // Acceso a la función global para actualizar stock y precio
  const updateStockAndPrice = useStore((state) => state.updateStockAndPrice);

  // Incrementar el contador y actualizar el estado global
  const handleIncrement = () => {
    if (count < 10) {
      const newStock = count + 1;
      increment();
      updateStockAndPrice(productId, newStock, productPrice);
    }
  };

  // Decrementar el contador y actualizar el estado global
  const handleDecrement = () => {
    if (count > 1) {
      const newStock = count - 1;
      decrement();
      updateStockAndPrice(productId, newStock, productPrice);
    }
  };

  return (
    <section className="flex items-center w-fit rounded border border-gray-300 bg-gray-100 shadow-sm py-1">
      <button
        onClick={handleDecrement}
        className="px-2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
      >
        <MinusIcon />
      </button>
      <span className="mx-2 font-semibold text-gray-800">{count}</span>
      <button
        onClick={handleIncrement}
        className="px-2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
      >
        <AddIcon />
      </button>
    </section>
  );
};
