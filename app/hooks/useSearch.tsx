import { useRouter, useSearchParams } from "next/navigation";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();


  return (term: string, key: string) => {
    const params = new URLSearchParams(searchParams);

    if (term !== "") {
      params.set(key, term);
    } else {
      params.delete(key);
    }
    router.replace(`?${params.toString()}`);
  }
};
