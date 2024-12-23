
import { Link } from "next-view-transitions";
import { ShopIcon, UserIcon } from "./Icons";

export const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 bg-[#fdfdfd] transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow flex items-center justify-between py-4 px-3.5">
      <h1 className="text-lg font-bold leading-tight text-gray-800">
        <Link href={"/"} aria-label="Duo Indumentaria">
         Duo Indumentaria
        </Link>
      </h1>

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"/checkout"} aria-label="Ir a la tienda" className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors">
              <ShopIcon />
            </Link>
          </li>
          <li>
            <Link href={"/login"} aria-label="Perfil de usuario" className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors">
              <UserIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
