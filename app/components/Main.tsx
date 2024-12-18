import { Categories } from "./Category";
import { SearchIcon } from "./Icons";
import { Product } from "./Product";

export const Main = () => {
  return (
    <main className="w-[95%] md:w-4/5 mx-auto bg-white rounded-t-3xl shadow-lg -mt-16 md:-mt-32 relative z-10 p-4 md:p-8 text-neutral-900 ">
    
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

      <section className="flex h-full gap-4 py-4  ">
        <Categories />
        <Product />
        
      </section>
    </main>
  );
};
