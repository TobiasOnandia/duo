'use client'

import { useSearch, SearchWrapper } from "@hooks/useSearch";
import { SearchIcon } from "@components/common/Icons";

function HeroContent() {

  const search = useSearch();
  return (

    <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] lg:mb-8 bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center portada"></div>
      <header className="relative h-full flex flex-col items-center justify-center px-4 pt-16 text-center">
        <h1 className="text-[#ffffff] text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          Duo Indumentaria
        </h1>
        <section className="w-full max-w-md md:max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 flex items-center">
            <label htmlFor="search-input" className="sr-only">
              Buscar en Stuffsus
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Buscar en Stuffsus"
              className="flex-1 border-0 focus:ring-0 focus:outline-none text-sm md:text-base p-2 rounded-l-md"
              aria-label="Buscar en Stuffsus"
              onChange={(event) => {
                search(event.target.value, 'search');
              }}
            />
            <button
              className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors"
              aria-label="Buscar"
            >
              <SearchIcon />
            </button>
          </div>
        </section>
      </header>
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
