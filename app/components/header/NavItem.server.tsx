'use client'
import { useUser } from "@hooks/useUser";
import { LogoutIcon, UserIcon } from "@components/common/Icons";
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
                        className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded transition-colors cursor-pointer">
                        <span className="sm:block hidden">
                            Cerrar Sesion
                        </span>
                        <span className="sm:hidden block">
                            <LogoutIcon />

                        </span>
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