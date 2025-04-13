import Link from "next/link";
import Image from "next/image";
import { Planet } from "@/types/planet";

interface PlanetCardProps {
  planet: Partial<Planet>;
}

export function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <Link href={`/planets/${planet.id}`}>
      <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50">
        <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border border-gray-700/50">
              <Image
                src={`/images/${planet.name}.webp`}
                alt={planet.name || ""}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {planet.name}
            </h3>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 flex items-center">
              <span className="w-24 text-gray-400">Radio:</span>
              <span className="font-medium">{planet.meanRadius} km</span>
            </p>
            <p className="text-gray-300 flex items-center">
              <span className="w-24 text-gray-400">Gravedad:</span>
              <span className="font-medium">{planet.gravity} m/s²</span>
            </p>
            <p className="text-gray-300 flex items-center">
              <span className="w-24 text-gray-400">Lunas:</span>
              <span className="font-medium">{planet.moons?.length || 0}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
