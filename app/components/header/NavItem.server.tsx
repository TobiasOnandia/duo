'use client'
import { useUser } from "@hooks/useUser";
import { UserIcon } from "@components/common/Icons";
import { Link } from "next-view-transitions";
import { toast } from "sonner";
import { supabase } from "@lib/supabaseClient";


export const NavItemServer = () => {
    const { metadata } = useUser()

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) toast.error(`Error al cerrar sesion: ${error.message}`);
    }

    return (
        <li>
            {
                metadata ? (
                    <button
                        onClick={handleSignOut}
                        className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors cursor-pointer">
                        Cerrar Sesion
                    </button>
                ) : (
                    <Link href={"/login"} aria-label="Perfil de usuario" className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors">
                        <UserIcon />
                    </Link>
                )
            }
        </li>
    )
}