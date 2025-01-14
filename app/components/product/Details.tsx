'use client';

import { useFetch } from "@hooks/useFecth";
import { ProductDetailSkeleton } from "@components/skeleton/DetailsSkeleton";
import { RecommendSkeleton } from "../skeleton/RecommendSkeleton";
import { DetailsImageGallery } from "@components/details/DetailsImageGallery";
import { DetailsInfo } from "@components/details/DetailsInfo";
import { DetailsActions } from "@components/details/DetailsActions";
import { Recommend } from "@components/product/Recommend";
import { ProductType } from "@/app/types/typesProduct";
import { motion } from "motion/react";

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
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-8 mt-16"
    >
      <motion.article
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col xl:flex-row container gap-8"
      >
        <DetailsImageGallery data={data as ProductType} />
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col justify-between"
        >
          <DetailsInfo data={data as ProductType} />
          <DetailsActions data={data as ProductType} />
        </motion.section>
      </motion.article>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Recommend />
      </motion.footer>
    </motion.main>
  );
}
