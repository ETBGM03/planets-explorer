"use client";

import Link from "next/link";
import { Planet } from "@/types/planet";
import { usePlanetsStore } from "@/store/usePlanetsStore";

interface PlanetCardProps {
  planet: Partial<Planet>;
}

export function PlanetCard({ planet }: PlanetCardProps) {
  const isFavorite = usePlanetsStore((state) =>
    state.isFavorite(planet.id || "")
  );

  return (
    <Link href={`/planets/${planet.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-gray-200 h-48 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {planet.name?.charAt(0)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{planet.name}</h3>
            {isFavorite && <span className="text-yellow-500">★</span>}
          </div>
          <p className="text-gray-600 text-sm mt-1">
            Radio: {planet.meanRadius} km
          </p>
          <p className="text-gray-600 text-sm">
            Gravedad: {planet.gravity} m/s²
          </p>
        </div>
      </div>
    </Link>
  );
}
