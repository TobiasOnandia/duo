import { useCounter } from "@uidotdev/usehooks";
import { AddIcon, MinusIcon } from "./Icons";

interface StockProps {
  productId: number; // Recibe el ID del producto como prop
}

export const Stock: React.FC<StockProps> = ({ productId }) => {
  const [count, { increment, decrement }] = useCounter(1, {
    min: 1,
    max: 10,
  });


  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
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
