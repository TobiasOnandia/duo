import { AddIcon, MinusIcon, TrashIcon } from "./Icons";
import Image from "next/image";
import Helmet from "@/public/gorra.jpeg";

export const CardCheckout = () => {
  return (
      <section className="relative flex   items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow my-4">
        <figure className="relative sm:w-24 sm:h-24 h-32 w-32 aspect-square">
          <Image
            src={Helmet}
            fill
            className="rounded-lg object-cover"
            alt="gorra"
          />
        </figure>

        <article className="flex flex-col sm:flex-row justify-between w-full gap-4">
          <header className="flex flex-col w-fit ">
            <h2 className="text-lg font-semibold text-gray-800">Gorra</h2>
            <p className="text-gray-500 text-sm">
              <span>Green</span> | <span>M</span>
            </p>
            <p className="text-lg font-semibold text-gray-800 sm:hidden block">
              $100
            </p>
          </header>
          <section className="flex flex-row items-center gap-4">
            <div className="flex items-center rounded border border-gray-300 bg-gray-100 shadow-sm py-1 ">
              <button className="px-2 cursor-pointer  text-gray-700 hover:text-gray-900 transition-colors">
                <MinusIcon />
              </button>
              <span className="mx-2 font-semibold text-gray-800">2</span>
              <button className="px-2  cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
                <AddIcon />
              </button>
            </div>
            <button className="sm:flex hidden  cursor-pointer  items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm">
              <TrashIcon />
              <span>Eliminar</span>
            </button>
          </section>

          <p className="text-lg font-semibold text-gray-800 sm:self-center sm:block hidden">
            $100
          </p>
        </article>
        <button className="flex sm:hidden  cursor-pointer  items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm">
          <TrashIcon />
          <span className="max-[463px]:hidden block">Eliminar</span>
        </button>
      </section>
  );
};
