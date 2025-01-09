"use client";
import { useUser } from "@hooks/useUser";
import { Link } from "next-view-transitions";
import { DropDown } from "./dropdown";

export const NavItemServer = () => {
    const { user } = useUser();

    return (
        <li >
            {user ? (
                <DropDown />
            ) : (
                <Link
                    href={"/login"}
                    aria-label="Perfil de usuario"
                    className="flex items-center   text-nowrap md:p-2  md:text-inherit hover:text-neutral-800 font-semibold text-gray-600 md:hover:bg-gray-200 rounded transition-colors"
                >
                    Iniciar Sesion
                </Link>
            )}
        </li>
    );
};
