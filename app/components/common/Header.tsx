
import { Logo } from "@/app/components/header/Logo";
import { NavItem } from "../header/NavItem.client";
import { NavItemServer } from "../header/NavItem.server";

export const Header = () => {

  return (
    <header className="fixed top-0 left-1/2 bg-[#fdfdfd] transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow flex items-center justify-between py-4 px-3.5">
      <Logo />

      <nav>
        <ul className="flex items-center gap-2">
          <NavItem />
          <NavItemServer />
        </ul>
      </nav>
    </header>
  );
};
