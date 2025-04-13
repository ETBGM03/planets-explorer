import { create } from "zustand";
import { persist } from "zustand/middleware";

import { PlanetsState } from "@types";

export const usePlanetsStore = create<PlanetsState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((planetId) => planetId !== id),
        })),
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "planets-storage",
    }
  )
);
