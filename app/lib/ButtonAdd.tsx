'use client';

import { toast } from "sonner";
import { useStore } from "@store/Store.products";
import { ProductType } from "@/app/types/typesProduct";

export function ButtonAdd({ data }: { data: ProductType }) {
    const addProducts = useStore((state) => state.addProduct);
    let stock = useStore((state) => state.stock[data.id]);
    const storeProducts = useStore((state) => state.products);

    if (stock === 0) stock = 1;


    const handleAdd = () => {
        const isProductInCart = storeProducts.some(product => product.id === data.id);
        if (isProductInCart) {
            toast.error("Este producto ya está en el carrito");
        } else {
            addProducts(data, stock);
            toast.success("Producto agregado al carrito");
        }
    };

    return (
        <button
            onClick={handleAdd}
            className="flex-1 w-full text-nowrap px-4 bg-neutral-500 text-neutral-100 py-2 rounded cursor-pointer hover:scale-105 transition-transform"
        >
            Agregar al carrito
        </button>
    );
}
