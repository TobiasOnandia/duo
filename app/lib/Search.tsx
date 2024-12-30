'use client'
import { SearchIcon } from "@components/common/Icons";
import { useSearch, SearchWrapper } from "@hooks/useSearch";

function SearchContent() {
    const search = useSearch();
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
                className="py-2 pl-10  border rounded-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                onChange={(event) => {
                    search(event.target.value, 'search');
                }}
            />
        </label>
    );
}

export const Search = () => {
    return (
        <SearchWrapper>
            <SearchContent />
        </SearchWrapper>
    );
};
