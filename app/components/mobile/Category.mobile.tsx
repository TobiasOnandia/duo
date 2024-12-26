import { useState } from "react";
import { ArrowBottom } from "../Icons";
import { useSearch } from "@/app/hooks/useSearch";
import { useFetch } from "@/app/hooks/useFecth";
const categories = [
  "Todos",
  "Remeras",
  "Pantalones",
  "Zapatos",
  "Camisetas",
  "Botas",
  "Mochilas",
];
export const CategoriesMobile = () => {
  const { data, error } = useFetch("https://dummyjson.com/products");
  const [isOpen, setIsOpen] = useState(false);

  const search = useSearch();

  return (
    <section className="2xl:hidden block relative">
      <button
        className="flex items-center cursor-pointer gap-2 text-lg px-4 py-2 border border-gray-300 rounded-full hover:bg-accent hover:text-background transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categorías
        <ArrowBottom />
      </button>
      {isOpen && (
        <section className="absolute bg-white w-[250px] flex flex-col z-10 p-4 rounded-lg top-12 left-0 shadow-lg">
          <ul className="flex flex-col gap-2">
            {[
              ...new Set(data?.products.map((product) => product.category)),
            ].map((category, index) => (
              <li key={index}>
                <label
                  htmlFor={category}
                  className="flex items-center gap-2 cursor-pointer rounded-md text-md px-2 py-1 hover:bg-accent hover:text-background transition-colors"
                >
                  {category}
                  <input
                    type="radio"
                    name="category"
                    id={category}
                    className="hidden"
                    onChange={() => search(category, "category")}
                    defaultChecked={index === 0}
                  />
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};
