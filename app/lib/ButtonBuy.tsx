import { useTransitionRouter } from "next-view-transitions";
import { useStore } from "../store/Store.products";
import { ProductType } from "../types/typesProduct";

export const ButtonBuy = ({ data }: { data: ProductType }) => {
    const addProducts = useStore((state) => state.addProduct);
    const router = useTransitionRouter();

    const storeProducts = useStore((state) => state.products);
    const handleBuy = () => {
        router.push('/checkout');
        const isProductInCart = storeProducts.some(product => product.id === data.id);
        if (!isProductInCart) {
            addProducts(data);
        }
    }

    return (
        <button
            onClick={handleBuy}
            className="flex-1 bg-neutral-800 text-neutral-100 py-2 text-center rounded cursor-pointer hover:scale-105 transition-transform"
        >
            Comprar
        </button>
    )
}