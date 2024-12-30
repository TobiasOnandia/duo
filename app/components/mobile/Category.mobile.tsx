'use client'
import { useState } from "react";
import { ArrowBottom } from "@components/common/Icons";
import { useSearch, SearchWrapper } from "@/app/hooks/useSearch";
import { useFetch } from "@/app/hooks/useFecth";
import { ProductsType } from "@/app/types/typesProduct";

function CategoryContent({ data, isOpen, setIsOpen }: { data: ProductsType, isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const search = useSearch();

  return (
    <section className="relative lg:hidden block">
      {/* Botón de Categorías */}
      <button
        className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full  transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">Categorías</span>
        <span className="sm:hiden">
          <ArrowBottom />
        </span>
      </button>

      {/* Menú flotante */}
      {isOpen && (
        <div
          className="absolute bg-white w-64 top-10 left-0 p-4 rounded-lg shadow-lg border border-gray-200 z-30 animate-slide-down"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Selecciona categoría</h3>
          <ul className="space-y-3">
            {[
              ...new Set((data as ProductsType)?.products.map((product) => product.category)),
            ].map((category, index) => (
              <li key={index}>
                <button
                  className="flex cursor-pointer items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-accent hover:text-white transition-all"
                  onClick={() => {
                    search(category, "category");
                    setIsOpen(false);
                  }}
                >
                  <span>{category}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export const CategoriesMobile = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SearchWrapper>
      <CategoryContent data={data as ProductsType} isOpen={isOpen} setIsOpen={setIsOpen} />
    </SearchWrapper>
  );
};
