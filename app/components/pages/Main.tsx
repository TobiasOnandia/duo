import { Categories } from "@components/product/Category";
import { Product } from "@components/product/Product";

export const Main = () => {
  return (
    <main className="w-[95%]  md:w-4/5 mx-auto  bg-[#fdfdfd] rounded-3xl shadow-lg border border-primary -mt-16 md:-mt-32 relative z-10 p-4 md:p-8 text-neutral-900 ">
      <h2 className="text-2xl mb-4 text-center font-semibold text-accent  ">
        Todos nuestros productos
      </h2>
      <Categories />
      <section id="productos" className="flex h-full gap-4 py-4  ">
        <Product />
      </section>
    </main>
  );
};
