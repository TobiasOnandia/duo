import { AddIcon, MinusIcon } from "@components/common/Icons";
import { useStockCounter } from "@hooks/useStockCounter";

interface StockProps {
  productId: number;
  productPrice: number;
}

export const Stock: React.FC<StockProps> = ({ productId, productPrice }) => {
  const { count, handleIncrement, handleDecrement } = useStockCounter(productId, productPrice);

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
