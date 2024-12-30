import { supabase } from "@lib/supabaseClient";
import { useEffect, useState } from "react";
import { User } from '@supabase/supabase-js';

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null); // Actualiza el estado del usuario según el evento de autenticación
        });

        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error(error);
            } else {
                setUser(user); // Establece el usuario inicial si existe
            }
        };

        fetchUser(); // Obtén el usuario inicial

        return () => {
            subscription?.unsubscribe(); // Limpia la suscripción al desmontar el componente
        };
    }, []);

    return { user };
};
