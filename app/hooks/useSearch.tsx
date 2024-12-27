'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, ReactNode } from "react";
import { Suspense } from "react";

export const useSearch = () => {
const searchParams = useSearchParams();
const router = useRouter();

return useCallback((term: string, key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term !== "") {
    params.set(key, term);
    } else {
    params.delete(key);
    }
    router.replace(`?${params.toString()}`);
}, [searchParams, router]);
};

interface SearchWrapperProps {
children: ReactNode;
}

export function SearchWrapper({ children }: SearchWrapperProps) {
return (
    <Suspense fallback={<div>Loading search...</div>}>
    {children}
    </Suspense>
);
}
