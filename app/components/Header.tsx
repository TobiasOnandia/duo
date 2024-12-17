import { SearchIcon, ShopIcon, UserIcon } from "./Icons";

export const Header = () => {
  return (
    <header className="bg-amber-50 text-gray-800 mx-8 rounded-b-lg flex items-center justify-between  py-4">
        <h1 className="text-2xl font-bold leading-tight text-gray-800 px-4">
          Duo Indumentaria
        </h1>
        <nav className="px-4">
            <ul className="flex items-center gap-4">
                <li className="flex items-center border p-2 rounded-full">
                    <SearchIcon />
                </li>
                <li className="flex items-center border p-2 rounded-full">
                    <button>
                        <ShopIcon />
                    </button>
                </li>
                <li className="flex items-center border p-2 rounded-full">
                    <button>
                        <UserIcon />
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  );
};