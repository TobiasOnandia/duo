'use client'
import { TrashIcon } from "./Icons";
import Image from "next/legacy/image";
import { Stock } from "./Stock";
import { ProductType } from "./types/types.product";
import { useStore } from "../store/Store.products";
import { toast } from "sonner";

export const CardCheckout = ({ item }: { item: ProductType }) => {
  const { title, thumbnail, id, price } = item
  const priceProduct = useStore(state => state.price[id]) || 0
  const deleteProduct = useStore(state => state.deleteProduct)
  const sizes = useStore(state => state.sizes[id]) || 'M'
  const colors = useStore(state => state.colors[id]) || 'Rojo'

  console.log(sizes)
  const handleDelete = () => {
    deleteProduct(id)
    toast.success('Se elimino correctamente el producto')
  }

  return (
    <section className="relative flex   items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow my-4">
      <figure className="relative sm:w-24 sm:h-24 h-32 w-32 aspect-square">
        <Image
          src={thumbnail}
          width={400}
          height={400}
          className="rounded-lg object-cover"
          alt="gorra"
        />
      </figure>

      <article className="flex flex-col sm:flex-row justify-between w-full gap-4">
        <header className="flex flex-col w-fit ">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm">
            <span>{colors}</span> | <span>{sizes}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800 sm:hidden block">
            ${priceProduct}
          </p>
        </header>
        <section className="flex flex-row justify-center items-center  gap-4">
          <Stock productId={id} productPrice={price} />
          <button
            onClick={handleDelete}
            className="sm:flex hidden  cursor-pointer  items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm">
            <TrashIcon />
            <span>Eliminar</span>
          </button>
        </section>

        <p className="text-lg font-semibold text-gray-800 sm:self-center sm:block hidden">
          ${priceProduct}
        </p>
      </article>
      <button
        onClick={handleDelete}
        className="flex sm:hidden  cursor-pointer  items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm">
        <TrashIcon />
        <span className="max-[463px]:hidden block">Eliminar</span>
      </button>
    </section>
  );
};
