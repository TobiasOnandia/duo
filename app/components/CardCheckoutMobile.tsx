import { AddIcon, MinusIcon, TrashIcon } from "./Icons"
import Image from "next/image"
import Helmet from "@/public/gorra.jpeg"

export const CardCheckoutMobile = () => {
    return(
        <div className="flex-[0.4]  py-4">
        <div className="overflow-y-auto max-h-[500px]">
          <section className="relative flex items-center border-b border-primary pb-4 mb-4">
            <figure className="relative w-32 h-32 aspect-square">
              <Image src={Helmet} fill className="rounded-lg" alt="gorra" />
            </figure>
            <article className="flex flex-col justify-between p-4 w-full ml-4">
              <header>
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Gorra</h2>
                <button className="flex items-center ml-4 text-sm cursor-pointer text-red-600 hover:text-red-800">
                  <span className="hidden sm:block">
                    Eliminar 
                  </span>
                  <TrashIcon  />
                </button>
                </div>
                
                <p className="font-bold text-gray-400">
                  <span>Green</span> | <span>M</span>
                </p>
                <p className="text-lg mt-2 font-semibold">$100</p>
              </header>
              <section className="flex items-center mt-2">
                <div className="flex items-center rounded border border-gray-300 bg-gray-100 px-2 py-1">
                  <button className="px-2 cursor-pointer">
                    <MinusIcon />
                  </button>
                  <span className="mx-2">2</span>
                  <button className="px-2 cursor-pointer">
                    <AddIcon />
                  </button>
                </div>
              
              </section>
            </article>
          </section>
        </div>

        <section className="flex flex-col shadow-md border border-primary rounded p-4 mt-4">
            <p className="text-lg flex justify-between items-center w-full">
              Subtotal <span>$100</span>
            </p>
            <p className="text-lg flex justify-between items-center py-2 w-full">
              Envío <span>$1000</span>
            </p>
            <p className="text-lg flex justify-between border-t-2 border-dashed py-2 w-full">
              Total <span className="font-bold">$2500</span>
            </p>
            <button className="bg-black text-white w-full cursor-pointer py-2 rounded mt-4 hover:bg-gray-800 transition duration-200">
              Comprar Ahora
            </button>
          </section>
        
      </div>
    )
}