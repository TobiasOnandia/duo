import { Logo } from "@components/header/Logo";
import { NavItem } from "@components/header/NavItem.client";
import { NavItemServer } from "@components/header/NavItem.server";
import { Link } from "next-view-transitions";

export const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 bg-[#fdfdfd] transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow flex items-center justify-between py-4 px-3.5">
      <Logo />

      <section className="flex items-center gap-4">
        <Link href={"/"} className="hover:underline">Inicio</Link>
        <Link href={"#productos"} className="hover:underline">Productos</Link>
        <Link href={"/"} className="hover:underline">Nosotros</Link>
      </section>
      <nav>
        <ul className="flex items-center gap-2">
          <NavItem />
          <NavItemServer />
        </ul>
      </nav>
    </header>
  );
};
