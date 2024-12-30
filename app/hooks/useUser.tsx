
import { supabase } from "@lib/supabaseClient"
import { useEffect, useState } from "react";
import { UserMetadata } from '@supabase/supabase-js';

export const useUser = () => {
    const [user, setUser] = useState<UserMetadata | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
                error,
            } = await supabase.auth.getUser();

            if (error) {
                setUser(null);
            } else {
                setUser(user?.user_metadata || null);
            }
        };

        fetchUser();
    }, []);

    return { metadata: user };
};