'use client'

import { Card } from "./Card";
import { useFetch } from "../hooks/useFecth";
import { ProductType } from "./types/types.product";

export const Product =  () => {

  const { data } : { data:  ProductType[] | null } = useFetch('https://dummyjson.com/products');

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full h-full gap-8">
      {data?.products?.map((product: ProductType, index: number) => (
        <Card
          key={product.id}
          name={product.title}
          price={product.price}
          description={product.description}
          image={product.thumbnail}
          id={product.id}
        />
      ))}
    </section>
  );
};
