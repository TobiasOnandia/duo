"use client";
import Image from "next/image";
import { Recommend } from "./Recommend";
import { Link, useTransitionRouter } from "next-view-transitions";
import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { Description } from "./Description";
import { Stock } from "./Stock";
import { useFetch } from "../hooks/useFecth";
import short from "@/public/short.jpeg"
import { toast } from "sonner";
import { ProductType } from "./types/types.product";
import { useStore } from "../store/Store.products";

export function Details(params: { id: string }) {
  const { data } : { data: ProductType | null } = useFetch(`https://dummyjson.com/products/${params.id}`);

  const addProducts = useStore((state ) => state.addProduct);
  const storeProducts: ProductType[] = useStore((state ) => state.products);
  const router = useTransitionRouter()


  const handleBuy = () => {
      router.push('/checkout')
      if(data !== null) {
        addProducts(data)
        return
      }
  }

  console.log(storeProducts)


  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col xl:flex-row container gap-8">
        {/* Imagenes laterales */}
        <section className="relative flex xl:flex-col flex-row container h-full  xl:w-[345px] gap-4 justify-between space-y-4 md:space-y-0">
          {[...Array(4)].map((_, i) => (
            <figure
              key={i}
              className="aspect-square w-full h-full max-w-3xs relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 flex-grow"
            >
              <Image
                src={data?.thumbnail || short}
                alt={`Boa Fleece Jacket view ${i + 1}`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          ))}
        </section>

        {/* Imagen principal */}
        <section className="relative h-full w-full ">
          <figure className="aspect-square relative   overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={data?.images[0] || short}
              alt="Boa Fleece Jacket main view"
              className="object-cover"
              fill
              priority
            />
          </figure>
        </section>

        {/* Información del producto */}
        <section className="flex flex-col justify-between ">
          <div className="flex flex-col gap-4">
            <Description />

            {/* Opciones */}
            <h3 className="font-medium">Colores disponibles</h3>
            <Colors />
            <h3 className="font-medium ">Tamaño</h3>
            <Sizes />

            <h4 className="font-medium ">Stock</h4>
            <Stock />
          </div>
          {/* Botones */}
          <div className="flex sm:flex-row flex-col gap-4">
            <button
            onClick={()=>{
              toast.success("Producto agregado al carrito")
              if (data) {
                addProducts(data);
              } else {
                toast.error("Error al agregar el producto");
              }
            }}
            className="flex-1 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform">
              Agregar al carrito
            </button>
            <button
              onClick={handleBuy}
              className="flex-1 bg-neutral-800 text-neutral-100 py-2 text-center rounded cursor-pointer hover:scale-105 transition-transform"
            >
              Comprar
            </button>
          </div>
        </section>
      </div>

      {/* Related Products */}
      <Recommend />
    </main>
  );
}
