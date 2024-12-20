import { AddIcon, MinusIcon, TrashIcon } from "./Icons";
import Image from "next/image";
import Helmet from "@/public/gorra.jpeg";

export const CardCheckout = () => {
  return (
    <section className="relative pb-2 h-fit  my-4 border-b border-primary flex ">
      <figure className="relative w-32 h-32 aspect-square ">
        <Image src={Helmet} fill className="rounded-lg" alt="gorra" />
      </figure>
      <article className="flex items-start h-full justify-between w-full gap-4 ">
        <header className="ml-4">
          <h2>Gorra</h2>
          <p className="text-primary font-bold">
            <span>Green</span> | <span>M</span>
          </p>
        </header>

        <section className="flex flex-col items-center gap-2">
          <div className="flex items-center rounded shadow mt-2  gap-2 py-1 border">
            <button className="px-2 cursor-pointer   border-secondary ">
              <MinusIcon />
            </button>
            <span>2</span>
            <button className=" cursor-pointer   px-2 border-secondary">
              <AddIcon />
            </button>
          </div>
          <button className="  flex items-center gap-2 text-red-500 cursor-pointer hover:text-red-700 transition-colors text-sm">
            Eliminar
            <span>
              <TrashIcon />
            </span>
          </button>
        </section>

        <p className="text-lg font-semibold">$100</p>
      </article>
    </section>
  );
};
