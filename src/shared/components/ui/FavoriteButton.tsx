"use client";

import { usePlanetsStore } from "@/store/usePlanetsStore";

export function FavoriteButton({ planetId }: { planetId: string }) {
  const { isFavorite, addFavorite, removeFavorite } = usePlanetsStore();
  const favorite = isFavorite(planetId);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(planetId);
    } else {
      addFavorite(planetId);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`text-2xl ${favorite ? "text-yellow-500" : "text-gray-400"}`}
    >
      {favorite ? "★" : "☆"}
    </button>
  );
}
