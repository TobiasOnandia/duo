'use client'
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
    <section className="mt-2 flex items-center justify-between    ">
      <article className="xl:flex items-center *:border-gray-400 *:py-1 *:px-3 gap-2 hidden ">
        {categories.map((category, index) => (
          <label
            key={index}
            htmlFor={category}
            className="flex items-center gap-2 has-[:checked]:bg-accent has-[:checked]:text-background hover:text-background cursor-pointer hover:bg-accent rounded-full font-medium  active:bg-accent"
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
        {/* Mobile */}
      <section className="xl:hidden block">
      <ul className="text-lg px-4 rounded-full">
        <li
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          Categorías
          <ArrowBottom />
          {isOpen && (
            <div className="absolute bg-white w-[250px] flex gap-2 flex-col p-4 rounded-lg top-8 left-0 shadow-lg">
              {categories.map((category, index) => (
                <label
                key={index}
                htmlFor={category}
                className="flex items-center gap-2 has-[:checked]:bg-accent has-[:checked]:text-background hover:text-background cursor-pointer hover:bg-accent rounded-md  text-md px-2 py-1 active:bg-accent"
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
            </div>
          )}
        </li>
      </ul>
    </section>


      <label htmlFor="search" className="relative flex items-center ">
        <span className="absolute left-2">
          <SearchIcon />
        </span>
        <input
          type="search"
          name=""
          id="search"
          className="py-1 border px-8 rounded border-gray-400 "
        />
      </label>
    </section>
  );
};
