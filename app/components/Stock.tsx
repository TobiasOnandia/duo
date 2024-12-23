import { useCounter } from "@uidotdev/usehooks";
import { AddIcon, MinusIcon } from "./Icons";

export const Stock = () => {
  const [count, { increment, decrement }] = useCounter(1, {
    min: 1,
    max: 10,
  });

  return (
    <section className="flex items-center mb-4 w-fit rounded border border-gray-300 bg-gray-100 shadow-sm py-1 ">
      <button
        onClick={decrement}
        className="px-2 cursor-pointer  text-gray-700 hover:text-gray-900 transition-colors"
      >
        <MinusIcon />
      </button>
      <span className="mx-2 font-semibold text-gray-800">{count}</span>
      <button
        onClick={increment}
        className="px-2  cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
      >
        <AddIcon />
      </button>
    </section>
  );
};
