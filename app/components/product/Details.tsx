'use client'
import Image from "next/legacy/image";
import { Recommend } from "@components/product/Recommend";
import { Sizes } from "@components/product/Sizes";
import { Colors } from "@components/product/Colors";
import { Description } from "@components/product/Description";
import { Stock } from "@components/product/Stock";
import short from "@/public/short.jpeg";
import { toast } from "sonner";
import { useStore } from "@store/Store.products";
import { ProductType } from "@/app/types/typesProduct";
import { useFetch } from "@hooks/useFecth";
import { ProductDetailSkeleton } from "@components/skeleton/DetailsSkeleton";
import { ButtonBuy } from "@lib/ButtonBuy";
import { RecommendSkeleton } from "../skeleton/RecommendSkeleton";

export function Details({ id }: { id: string }) {
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const addProducts = useStore((state) => state.addProduct);

  const storeProducts = useStore((state) => state.products);

  const handleAdd = () => {
    if (data && !loading) {
      const isProductInCart = storeProducts.some(product => product.id === (data as ProductType).id);
      if (isProductInCart) {
        toast.error("Este producto ya está en el carrito");
      } else {
        addProducts(data as ProductType);
        toast.success("Producto agregado al carrito");
      }
    }
  }

  if (loading) return (
    <div>
      <ProductDetailSkeleton />
      <RecommendSkeleton />
    </div>
  );
  if (!data) return <div>No se encontraron datos.</div>;

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col xl:flex-row container gap-8">
        {/* Imagenes laterales */}
        <section className="relative flex xl:flex-col flex-row container h-full xl:w-[345px] gap-4 justify-between space-y-4 md:space-y-0">
          {[...Array(4)].map((_, i) => (
            <figure
              key={i}
              className="aspect-square w-full h-full max-w-3xs relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 flex-grow"
            >
              <Image
                src={(data as ProductType).thumbnail || short}
                alt={`Image ${i + 1}`}
                className="object-cover"
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          ))}
        </section>

        {/* Imagen principal */}
        <section className="relative h-full w-full">
          <figure className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={(data as ProductType).images[0] || short}
              alt="Main view"
              className="object-cover"
              layout="fill"
              priority
            />
          </figure>
        </section>

        {/* Información del producto */}
        <section className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <Description />
            <h3 className="font-medium">Colores disponibles</h3>
            <Colors productId={Number(id)} />
            <h3 className="font-medium">Tamaño</h3>
            <Sizes productId={Number(id)} />
            <h4 className="font-medium">Stock</h4>
            <Stock productId={(data as ProductType).id} productPrice={(data as ProductType).price} />
          </div>

          {/* Botones */}
          <div className="flex sm:flex-row flex-col gap-4 pt-4">
            <button
              onClick={handleAdd}
              className="flex-1 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform"
            >
              Agregar al carrito
            </button>
            <ButtonBuy data={data as ProductType} />
          </div>
        </section>
      </div>

      {/* Related Products */}
      <Recommend />
    </main>
  );
}
