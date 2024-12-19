import { Categories } from "./Category";
import { ArrowLeft, ArrowRight, SearchIcon } from "./Icons";
import { Product } from "./Product";

export const Main = () => {
  return (
    <main className="w-[95%] md:w-4/5 mx-auto bg-[#fdfdfd] rounded-t-3xl shadow-lg -mt-16 md:-mt-32 relative z-10 p-4 md:p-8 text-neutral-900 ">
        <h2 className="text-2xl mb-4 text-center w-full font-semibold text-neutral-700  ">
          Todos nuestros productos
        </h2>
      <Categories />

      <section className="flex h-full gap-4 py-4  ">
        <Product />
      </section>
      <section className="flex gap-4 items-center justify-between border-t py-4 ">
        <button className="flex items-center gap-2">
          <ArrowLeft />
          Anterior
        </button>

        <ul className="flex gap-4 *:bg-neutral-200 *:py-1  *:px-4 *:rounded">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <button className="flex items-center gap-2 ">
          Siguiente
          <ArrowRight />
        </button>
      </section>
    </main>
  );
};
