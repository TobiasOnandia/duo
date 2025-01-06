import { useRouter } from "next/router";
import { useStore } from "../store/Store.products";
import { Link } from "next-view-transitions";
import {  usePathname, useSearchParams } from "next/navigation";

export const ButtonPayment = () => {
    const products = useStore(state => state.products)
    const pathname = usePathname()

    // Condición para alternar entre botón y enlace
    const isPaymentPage = pathname.includes("/payment");

    return (
        <>
            {isPaymentPage ? (
                <Link
                    href="/payment"
                    className="w-full text-center py-3 text-lg cursor-pointer font-bold disabled:bg-gray-400 disabled:cursor-default text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors"
                >
                    Comprar Ahora
                </Link>
            ) : (
                <button
                    disabled={products.length } // Ajusta esta condición según lo que necesites
                    className="w-full text-center py-3 text-lg cursor-pointer font-bold disabled:bg-gray-400 disabled:cursor-default text-white bg-neutral-900 rounded-lg hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition-colors"
                >
                    Comprar Ahora
                </button>
            )}
        </>
    );
}