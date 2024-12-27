import { useState } from "react";
import { MenuIcon } from "../Icons";
import { useSearch } from "@/app/hooks/useSearch";
import { useFetch } from "@/app/hooks/useFecth";
import { ProductsType } from "../types/types.product";

export const CategoriesMobile = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  const [isOpen, setIsOpen] = useState(false);

  const search = useSearch();

  return (
    <section className="2xl:hidden block relative">
      <button
        className=" cursor-pointer flex items-center p-2 hover:bg-gray-200 rounded transition-colors "
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <section className="absolute bg-white flex flex-col z-10 p-4 rounded-lg top-12 right-0 shadow-lg">
          <ul className="flex flex-col gap-2">
            {[
              ...new Set((data as ProductsType)?.products.map((product) => product.category)),
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
