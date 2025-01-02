'use client'

import { Card } from "@components/product/Card";
import { useFetch } from "@hooks/useFecth";
import { ProductsType, ProductType } from "@/app/types/typesProduct";
import { useSearchParams } from "next/navigation";
import { CardSkeleton } from "@components/skeleton/CardSkeleton";
import { useFilter } from "@hooks/useFilter";

export const Product = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');
  const params = useSearchParams();

  const search = params.get('search') || '';
  const category = params.get('category') || '';

  const filteredProducts = useFilter(data as ProductsType, search, category);

  if (loading) {
    return (
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full h-full gap-8">
        {[...Array(6)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500">Error al cargar los productos. Inténtalo más tarde.</p>;
  }

  return (
    <section className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full h-full gap-8">
      {filteredProducts.map((product: ProductType) => (
        <Card
          key={product.id}
          data={product}
        />
      ))}
    </section>
  );
};
