import { toast } from "sonner";
import { supabase } from "@lib/supabaseClient";
import { useEffect, useRef, useState } from "react";
import { ArrowBottom, LogoutIcon, PackageIcon  } from "@components/common/Icons";
import { useTransitionRouter } from "next-view-transitions";
import { useUser } from "@/app/hooks/useUser";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(`Error al cerrar sesión: ${error.message}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const router = useTransitionRouter();


  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded transition-colors cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="font-semibold text-gray-700 text-sm sm:text-base truncate">
          {user?.user_metadata?.full_name}
        </span>
        <span
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        >
          <ArrowBottom />
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-82 max-w-full bg-white rounded-md shadow-lg py-1 z-10">
          <p className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200 truncate">
            {user?.user_metadata?.email}
          </p>
          <button
            onClick={() => {
              setIsOpen(false);
              router.push("/envios");
            }}
            className="flex items-center cursor-pointer gap-1  w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <PackageIcon />
            <span className="truncate">Mis Envíos</span>
          </button>
          <button
            onClick={() => {
              handleSignOut();
              setIsOpen(false);
            }}
            className="flex items-center cursor-pointer gap-1 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogoutIcon />
            <span className="truncate">Cerrar Sesión</span>
          </button>
        </div>
      )}
    </div>
  );
};
