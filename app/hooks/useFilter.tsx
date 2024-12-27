import { useMemo } from "react";
import { ProductsType, ProductType } from "@/app/types/typesProduct";

export const useFilter = (data: ProductsType | undefined, search: string, category: string) => {
    return useMemo(() => {
        if (!data) return [];

        const filteredByCategories = category
            ? data.products.filter((item) =>
                item.category.toLowerCase() === category.toLowerCase()
            )
            : data.products;

        return search
            ? filteredByCategories.filter((item: ProductType) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            : filteredByCategories;
    }, [data, search, category]);
};
