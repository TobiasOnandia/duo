import {  ShopIcon, UserIcon } from "./Icons";


// 

export const Header = () => {
  return (
    <header className="px-3.5 fixed top-0 left-1/2 bg-[#fdfdfd]  transform -translate-x-1/2  w-[95%] md:w-4/5  z-50 rounded-b-3xl shadow flex items-center justify-between py-4 ">
        <h1 className="text-2xl font-bold leading-tight text-gray-800 px-4">
          Duo Indumentaria
        </h1>

        <nav className="px-4">
            <ul className="flex items-center gap-4">
                <li className="flex items-center  p-2 ">
                    <button>
                        <ShopIcon />
                    </button>
                </li>
                <li className="flex items-center  p-2 ">
                    <button>
                        <UserIcon />
                    </button>
                </li>
            </ul>
        </nav>

       
    </header>
  );
};