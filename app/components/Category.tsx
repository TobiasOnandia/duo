'use client';
import { Search } from "../lib/Search";
import { useSearch } from "../hooks/useSearch";
import { CategoriesMobile } from "./mobile/Category.mobile";
const categories = [
  "Todos",
  "Remeras",
  "Pantalones",
  "Zapatos",
  "Camisetas",
  "Botas",
  "Mochilas",
];
export const Categories = () => {

  const search = useSearch()

  return (
    <section className="mt-2 flex flex-col-reverse sm:flex-row gap-2 sm:items-center  justify-between">
      {/* Desktop Categories */}
      <article className="hidden 2xl:flex items-center gap-4">
        {categories.map((category, index) => (
          <label
            key={index}
            htmlFor={category}
            className="flex items-center gap-2 cursor-pointer rounded-full py-2 px-4 text-gray-700 hover:bg-accent hover:text-background transition-colors font-medium"
          >
            {category}
            <input
              type="radio"
              name="category"
              id={category}
              className="hidden"
              onChange={() => search(category, 'category')}
              defaultChecked={index === 0}
            />
          </label>
        ))}
      </article>

      {/* Mobile Categories */}
        <CategoriesMobile />

     <Search />
    </section>
  );
};
