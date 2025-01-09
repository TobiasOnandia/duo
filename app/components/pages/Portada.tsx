'use client'

import { useSearch, SearchWrapper } from "@hooks/useSearch";
import { SearchIcon } from "@components/common/Icons";
import { motion } from "motion/react";

function HeroContent() {
  const search = useSearch();

  return (
    <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] lg:mb-8 bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center portada"></div>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative h-full flex flex-col items-center justify-center px-4 pt-16 text-center"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#ffffff] text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
        >
          Duo Indumentaria
        </motion.h1>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-md md:max-w-2xl"
        >
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 flex items-center">
            <label htmlFor="search-input" className="sr-only">
              Buscar en Duo
            </label>
            <motion.input
              id="search-input"
              type="text"
              placeholder="Buscar en Duo"
              className="flex-1 border-0 focus:ring-0 focus:outline-none text-sm md:text-base p-2 rounded-l-md"
              aria-label="Buscar en Duo"
              onChange={(event) => {
                search(event.target.value, 'search');
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.button
              className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors"
              aria-label="Buscar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <SearchIcon />
            </motion.button>
          </div>
        </motion.section>
      </motion.header>
    </section>
  );
}

export function HeroSection() {
  return (
    <SearchWrapper>
      <HeroContent />
    </SearchWrapper>
  );
}
