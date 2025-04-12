"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useDebounce } from "@/shared/hooks/useDebounce";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams?.get("search") || "");
  const debouncedSearch = useDebounce(search, 500);

  const updateSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  }, [debouncedSearch, searchParams, router]);

  useEffect(() => {
    updateSearch();
  }, [debouncedSearch, updateSearch]);

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search for a planet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-grow p-2 rounded-l-md w-full border-2 border-r-0 border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md border-2 border-l-0 border-gray-300 hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}
