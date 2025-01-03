'use client'
import { useUser } from "@hooks/useUser";
import { Link } from "next-view-transitions";
import { toast } from "sonner";
import { supabase } from "@lib/supabaseClient";


export const NavItemServer = () => {
    const { user } = useUser()

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) toast.error(`Error al cerrar sesion: ${error.message}`);
    }

    return (
        <li>
            {
                user ? (
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 md:p-2 pt-2 md:hover:bg-gray-200 rounded transition-colors cursor-pointer">
                        <span className="flex items-center transition-colors md:text-inherit hover:text-neutral-800 font-semibold text-gray-500">
                            Cerrar Sesion
                        </span>
                    </button>
                ) : (
                    <Link href={"/login"} aria-label="Perfil de usuario" className="flex items-center   text-nowrap md:p-2  md:text-inherit hover:text-neutral-800 font-semibold text-gray-600 md:hover:bg-gray-200 rounded transition-colors">
                        Iniciar Sesion
                    </Link>
                )
            }
        </li>
    )
}