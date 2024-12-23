import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "../components/Icons";

export const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term !== "") {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <label htmlFor="search" className="relative flex items-center ">
      <span className="absolute left-3 text-gray-500">
        <SearchIcon />
      </span>
      <input
        type="search"
        name=""
        id="search"
        placeholder="Buscar productos..."
        className="py-2 pl-10 pr-4 border rounded-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
    </label>
  );
};
