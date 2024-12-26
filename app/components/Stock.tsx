import { useCounter } from "@uidotdev/usehooks";
import { AddIcon, MinusIcon } from "./Icons";
import { useStore } from "../store/Store.products";

interface StockProps {
  productId: number;
  productPrice: number;
}

export const Stock: React.FC<StockProps> = ({ productId, productPrice }) => {
  const stock = useStore(state => state.stock[productId] || 1);
  const [count, { increment, decrement }] = useCounter(stock, {
    min: 1,
    max: 10,
  });
  const calculateStock = useStore(state => state.calculateStock);
  const calculatePrice = useStore(state => state.calculatePrice);

  const handleIncrement = () => {
    increment();
    calculateStock(productId, count);
    calculatePrice(productId, productPrice);
  };

  const handleDecrement = () => {
    decrement();
    calculateStock(productId, count);
    calculatePrice(productId, productPrice);

  };

  return (
    <section className="flex items-center w-fit rounded border border-gray-300 bg-gray-100 shadow-sm py-1">
      <button
        onClick={handleDecrement}
        className="px-2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
      >
        <MinusIcon />
      </button>
      <span className="mx-2 font-semibold text-gray-800">{stock}</span>
      <button
        onClick={handleIncrement}
        className="px-2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
      >
        <AddIcon />
      </button>
    </section>
  );
};
