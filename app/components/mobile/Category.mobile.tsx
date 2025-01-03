'use client'
import { useState } from "react";
import { ArrowBottom } from "@components/common/Icons";
import { useSearch, SearchWrapper } from "@/app/hooks/useSearch";
import { useFetch } from "@/app/hooks/useFecth";
import { ProductsType } from "@/app/types/typesProduct";

function CategoryContent({ data, isOpen, setIsOpen }: { data: ProductsType, isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const search = useSearch();

  return (
    <nav className="relative">
      {/* Botón de Categorías */}
      <button
        className="flex items-center gap-2 py-2 text-gray-600 font-semibold hover:text-black transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categorías
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <ArrowBottom />
        </span>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div
          className="absolute bg-white w-64 mt-2 rounded-lg shadow-md border border-gray-200 z-30"
        >
          <ul className="divide-y divide-gray-100">
            {[
              ...new Set((data as ProductsType)?.products.map((product) => product.category)),
            ].map((category, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-all"
                  onClick={() => {
                    search(category, "category");
                    setIsOpen(false);
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
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
