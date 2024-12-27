'use client';

import { useFetch } from "@hooks/useFecth";
import { ProductDetailSkeleton } from "@components/skeleton/DetailsSkeleton";
import { RecommendSkeleton } from "../skeleton/RecommendSkeleton";
import { DetailsImageGallery } from "@components/details/DetailsImageGallery";
import { DetailsInfo } from "@components/details/DetailsInfo";
import { DetailsActions } from "@components/details/DetailsActions";
import { Recommend } from "@components/product/Recommend";
import { ProductType } from "@/app/types/typesProduct";

export function Details({ id }: { id: string }) {
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);

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
        <DetailsImageGallery data={data as ProductType} />
        <section className="flex flex-col justify-between">
          <DetailsInfo data={data as ProductType} />
          <DetailsActions data={data as ProductType} />
        </section>
      </div>
      <Recommend />
    </main>
  );
}
