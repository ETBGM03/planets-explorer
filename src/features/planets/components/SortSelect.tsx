"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { sortOptions } from "@shared";

export const SortSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="sort"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Order by:
      </label>
      <select
        id="sort"
        value={searchParams.get("sort") || "name-asc"}
        onChange={handleSortChange}
        className="w-full p-2 border rounded-md focus:outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
