"use client";
import React from "react";
import { usePlanetsStore } from "@store";

export default function PlanetFavorite({ planetId }: { planetId: string }) {
  const { isFavorite, addFavorite, removeFavorite } = usePlanetsStore();

  const isFavoritePlanet = isFavorite(planetId);

  return (
    <div>
      {isFavoritePlanet ? (
        <button onClick={() => removeFavorite(planetId)}>
          <span className="text-yellow-400 text-xl">★</span>
        </button>
      ) : (
        <button onClick={() => addFavorite(planetId)}>
          <span className="text-gray-500 text-xl">★</span>
        </button>
      )}
    </div>
  );
}
