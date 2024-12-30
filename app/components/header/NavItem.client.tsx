'use client'

import { Link } from "next-view-transitions"
import { useStore } from "@store/Store.products";
import { ShopIcon, } from "@components/common/Icons";

export const NavItem = () => {
    const products = useStore((state) => state.products);

    return (
        <li>
            <Link href={"/checkout"} aria-label="Ir a la tienda" className="flex items-center p-2 hover:bg-gray-200 relative rounded transition-colors">
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-medium rounded-full flex items-center justify-center w-5 h-5 border-2 border-white shadow-lg">
                    {products.length}
                </span>
                <ShopIcon />
            </Link>
        </li>
    )
}