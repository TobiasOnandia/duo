import { useStore } from "../store/Store.products";

export const ButtonPayment = () => {
    const products = useStore(state => state.products)
    return (
        <button
            disabled={products.length === 0}
            className="w-full text-center py-3 text-lg cursor-pointer font-bold disabled:bg-gray-400 disabled:cursor-default text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors">
            Comprar Ahora
        </button>
    )
}