'use client';
import { ArrowBottom, SearchIcon } from "./Icons";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-2 flex items-center justify-between">
      {/* Desktop Categories */}
      <article className="hidden xl:flex items-center gap-4">
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
              defaultChecked={index === 0}
            />
          </label>
        ))}
      </article>

      {/* Mobile Categories */}
      <section className="xl:hidden block relative">
        <button
          className="flex items-center gap-2 text-lg px-4 py-2 border border-gray-300 rounded-full hover:bg-accent hover:text-background transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          Categorías
          <ArrowBottom />
        </button>
        {isOpen && (
          <div className="absolute bg-white w-[250px] flex flex-col z-10 p-4 rounded-lg top-12 left-0 shadow-lg">
            <ul className="flex flex-col gap-2">
              {categories.map((category, index) => (
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
                      defaultChecked={index === 0}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Search Input */}
      <label htmlFor="search" className="relative flex items-center ml-4">
        <span className="absolute left-3 text-gray-500">
          <SearchIcon />
        </span>
        <input
          type="search"
          name=""
          id="search"
          placeholder="Buscar productos..."
          className="py-2 pl-10 pr-4 border rounded-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        />
      </label>
    </section>
  );
};
