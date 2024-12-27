'use client'

import { Link } from "next-view-transitions";
import { ShopIcon, UserIcon } from "./Icons";
import { useStore } from "@store/Store.products";
import { CategoriesMobile } from "@components/mobile/Category.mobile";

export const Header = () => {
  const products = useStore((state) => state.products);

  return (
    <header className="fixed top-0 left-1/2 bg-[#fdfdfd] transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow flex items-center justify-between py-4 px-3.5">
      <h1 className="text-lg font-bold leading-tight text-gray-800">
        <Link href={"/"} aria-label="Duo Indumentaria">
          Duo Indumentaria
        </Link>
      </h1>

      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <Link href={"/checkout"} aria-label="Ir a la tienda" className="flex items-center p-2 hover:bg-gray-200 relative rounded transition-colors">
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-medium rounded-full flex items-center justify-center w-5 h-5 border-2 border-white shadow-lg">
                {products.length}
              </span>
              <ShopIcon />
            </Link>
          </li>
          <li>
            <Link href={"/login"} aria-label="Perfil de usuario" className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors">
              <UserIcon />
            </Link>
          </li>
          <li className="sm:hidden  ">
            <CategoriesMobile />
          </li>
        </ul>
      </nav>
    </header>
  );
};
