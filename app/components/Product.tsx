'use client'

import { Card } from "./Card";
import { useFetch } from "../hooks/useFecth";
import { ProductsType, ProductType } from "./types/types.product";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CardSkeleton } from "./skeleton/CardSkeleton";

export const Product = () => {
  const { data } = useFetch('https://dummyjson.com/products');
  const params = useSearchParams();

  const search = params.get('search') || '';
  const category = params.get('category') || '';


  const filteredByCategories = category
    ? (data as ProductsType)?.products.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    : (data as ProductsType)?.products;

  const filteredBySearch = search
    ? filteredByCategories?.filter((item: ProductType) => item.title.toLowerCase().includes(search.toLowerCase()))
    : filteredByCategories;

  return (
    <Suspense fallback={<CardSkeleton />}>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  w-full h-full gap-8">
        {filteredBySearch?.map((product: ProductType) => (
          <Card
            key={product.id}
            name={product.title}
            price={product.price}
            description={product.description}
            image={`${product.thumbnail}`}
            id={product.id}
          />
        ))}
      </section>
    </Suspense>
  );
};
