import { Categories } from "./Category";
import { SearchIcon } from "./Icons";
import { Product } from "./Product";

export const Main = () => {
  return (
    <main className="mx-8 mt-8  gap-4 h-screen text-gray-800 border border-neutral-200 shadow   py-4 rounded-t-lg ">
      <section className="flex flex-col md:flex-row items-center justify-between w-full px-4">
        <h2 className="text-xl font-semibold text-neutral-700  ">Todos nuestros productos</h2>
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

      <section className="flex items-center h-full gap-4 py-4  ">
        <Categories />
        <Product />
      </section>
    </main>
  );
};
