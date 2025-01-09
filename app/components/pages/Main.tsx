'use client'
import { Categories } from "@components/product/Category";
import { Product } from "@components/product/Product";
import { motion } from "motion/react";

export const Main = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-[95%] md:w-4/5 mx-auto bg-[#fdfdfd] rounded-3xl shadow-lg border border-primary -mt-16 md:-mt-32 relative z-10 p-4 md:p-8 text-neutral-900"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl mb-4 text-center font-semibold text-accent"
      >
        Todos nuestros productos
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Categories />
      </motion.div>
      <motion.section
        id="productos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex h-full gap-4 py-4"
      >
        <Product />
      </motion.section>
    </motion.main>
  );
};
