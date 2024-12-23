import { SearchIcon } from "../components/Icons";
import { useSearch } from "../hooks/useSearch";

export const Search = () => {
  const search = useSearch()
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
          search(event.target.value, 'search');
        }}
      />
    </label>
  );
};
