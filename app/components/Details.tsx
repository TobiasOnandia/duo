'use client'
import Image from "next/legacy/image";
import { Recommend } from "./Recommend";
import { useTransitionRouter } from "next-view-transitions";
import { Sizes } from "./Sizes";
import { Colors } from "./Colors";
import { Description } from "./Description";
import { Stock } from "./Stock";
import short from "@/public/short.jpeg";
import { toast } from "sonner";
import { useStore } from "../store/Store.products";
import { ProductType } from "./types/types.product";
import { useFetch } from "../hooks/useFecth";

export function Details({ id }: { id: string }) {
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const addProducts = useStore((state) => state.addProduct);

  const storeProducts = useStore((state) => state.products);
  const router = useTransitionRouter();


  const handleBuy = () => {
    if (data && !loading) {
      router.push('/checkout');

      const isProductInCart = storeProducts.some(product => product.id === (data as ProductType).id);
      if (!isProductInCart) {
        addProducts(data as ProductType);
      }
    }
  }

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

  if (loading) return <div>Cargando...</div>;
  if (!data) return <div>No se encontraron datos.</div>;

  // Verificar si data es un array o un objeto
  const productData = Array.isArray(data) ? data[0] : data;

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
                src={productData.thumbnail || short}
                alt={`Image ${i + 1}`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          ))}
        </section>

        {/* Imagen principal */}
        <section className="relative h-full w-full">
          <figure className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={productData.images[0] || short}
              alt="Main view"
              className="object-cover"
              fill
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
            <Stock productId={productData.id} productPrice={productData.price} />
          </div>

          {/* Botones */}
          <div className="flex sm:flex-row flex-col gap-4 pt-4">
            <button
              onClick={handleAdd}
              className="flex-1 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform"
            >
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
