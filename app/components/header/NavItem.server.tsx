'use client'
import { useUser } from "@hooks/useUser";
import { Link, useTransitionRouter } from "next-view-transitions";
import { toast } from "sonner";
import { supabase } from "@lib/supabaseClient";
import { useEffect, useRef, useState } from "react";
import { ArrowBottom, LogoutIcon, PackageIcon } from "@components/common/Icons";


export const NavItemServer = () => {
    const { user } = useUser()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) toast.error(`Error al cerrar sesion: ${error.message}`);
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const router = useTransitionRouter()

    return (
        <li>
            {
                user ? (
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 p-2 rounded transition-colors cursor-pointer hover:bg-gray-100"
                        >
                            <span className="font-semibold text-gray-700">{"tobiasonandia0@gmail.com"}</span>
                            <span className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} >
                                <ArrowBottom />
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-fit bg-white rounded-md shadow-lg py-1 z-10">
                                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">{"tobiasonandia0@gmail.com"}</div>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        router.push('/envios')
                                    }}
                                    className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    <PackageIcon />
                                    <span>Mis Envíos</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleSignOut()
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    <LogoutIcon />
                                    <span>Cerrar Sesión</span>
                                </button>
                            </div>
                        )}
                    </div>
                )
                    : (
                        <Link href={"/login"} aria-label="Perfil de usuario" className="flex items-center   text-nowrap md:p-2  md:text-inherit hover:text-neutral-800 font-semibold text-gray-600 md:hover:bg-gray-200 rounded transition-colors">
                            Iniciar Sesion
                        </Link>
                    )
            }
        </li>
    )
}