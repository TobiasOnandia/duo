'use client'
import { Logo } from "@components/header/Logo";
import { NavItem } from "@components/header/NavItem.client";
import { NavItemServer } from "@components/header/NavItem.server";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { MenuIcon, X } from "./Icons";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] md:w-4/5 z-50 rounded-b-3xl shadow-md bg-white py-4 px-6 flex items-center justify-between">
      <Logo />

      {/* Menu button for mobile */}
      <div className="flex md:hidden items-center">
        <ul>
          <NavItem />
        </ul>
        <button onClick={() => setOpen(!open)} className="flex cursor-pointer items-center justify-center p-2 rounded hover:bg-gray-200 transition-colors">
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Navigation for mobile */}
      {open && (
        <nav className="absolute top-14 right-0 left-0 bg-white shadow-lg rounded-b-3xl md:hidden">
          <section className="flex flex-col p-4 gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800 font-semibold transition-colors">Inicio</Link>
            <Link href="#productos" className="text-gray-600 hover:text-gray-800 font-semibold transition-colors">Productos</Link>
            <Link href="/" className="text-gray-600 hover:text-gray-800 font-semibold transition-colors">Nosotros</Link>
          </section>
          <ul className="flex items-center pb-6 px-4">
            <NavItemServer />
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <section className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-600 hover:underline transition-colors">Inicio</Link>
        <Link href="#productos" className="text-gray-600 hover:underline transition-colors">Productos</Link>
        <Link href="/" className="text-gray-600 hover:underline transition-colors">Nosotros</Link>
      </section>

      {/* Desktop Nav Items */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-4">
          <NavItem />
          <NavItemServer />
        </ul>
      </nav>
    </header>
  );
};
