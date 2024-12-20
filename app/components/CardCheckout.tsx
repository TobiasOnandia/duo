import { AddIcon, MinusIcon, TrashIcon } from "./Icons";
import Image from "next/image";
import Helmet from "@/public/gorra.jpeg";

export const CardCheckout = () => {
  return (
    <section className="relative flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow my-4">
      <figure className="relative w-24 h-24 aspect-square">
        <Image src={Helmet} fill className="rounded-lg object-cover" alt="gorra" />
      </figure>

      <article className="flex flex-col sm:flex-row justify-between w-full gap-4">
        <header className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800">Gorra</h2>
          <p className="text-gray-500 text-sm">
            <span>Green</span> | <span>M</span>
          </p>
        </header>

        <section className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center rounded border border-gray-300 bg-gray-100 shadow-sm py-1 px-3">
            <button className="px-3 text-gray-700 hover:text-gray-900 transition-colors">
              <MinusIcon />
            </button>
            <span className="px-4 font-semibold text-gray-800">2</span>
            <button className="px-3 text-gray-700 hover:text-gray-900 transition-colors">
              <AddIcon />
            </button>
          </div>
          <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm">
            <TrashIcon />
            <span>Eliminar</span>
          </button>
        </section>

        <p className="text-lg font-semibold text-gray-800 sm:self-center">$100</p>
      </article>
    </section>
  );
};
