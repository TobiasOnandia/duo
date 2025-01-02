'use client';
import { Search } from "@lib/Search";
import { useSearch, SearchWrapper } from "@hooks/useSearch";
import { useFetch } from "@hooks/useFecth";
import { ProductsType } from "@/app/types/typesProduct";
import { Suspense } from "react";
import { CategorySkeleton } from "../skeleton/CategorySkeleton";
import { CategoriesMobile } from "../mobile/Category.mobile";

function CategoryContent({ data }: { data: ProductsType | null | undefined }) {
  const search = useSearch()
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <section className="mt-2 flex sm:flex-row flex-col-reverse gap-2 sm:items-center  justify-between">
        <article className="hidden lg:flex items-center gap-4">
          {data?.products?.map((product) => product.category)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((category, index) => (

              <label
                key={index}
                htmlFor={category}
                className="flex items-center gap-2 cursor-pointer rounded-full py-2 px-4 text-gray-700 hover:bg-accent hover:text-background transition-colors font-medium"
              >
                {category}
                <input
                  type="radio"
                  name="category"
                  id={category}
                  className="hidden"
                  onChange={() => search(category, 'category')}
                  defaultChecked={index === 0}
                />
              </label>
            ))}
        </article>

        {/* Mobile Categories */}
        <CategoriesMobile />
        <Search />
      </section>
    </Suspense>
  );
}

export const Categories = () => {
  const { data, loading } = useFetch('https://dummyjson.com/products');

  if (loading) return <CategorySkeleton />

  return (
    <SearchWrapper>
      <CategoryContent data={data as ProductsType | null} />
    </SearchWrapper>
  );
};
