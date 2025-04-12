import { Planet } from "@/types/planet";
import { PlanetDataSection } from "./PlanetDataSection";

interface PlanetBasicDataProps {
  planet: Partial<Planet>;
}

export const PlanetBasicData = ({ planet }: PlanetBasicDataProps) => (
  <PlanetDataSection title="Basic data">
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">English name</span>
      <span className="text-gray-900">{planet.englishName}</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Average radius</span>
      <span className="text-gray-900">{planet.meanRadius} km</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Gravity</span>
      <span className="text-gray-900">{planet.gravity} m/s²</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Mass</span>
      <span className="text-gray-900">
        {planet.mass?.massValue} × 10^{planet.mass?.massExponent} kg
      </span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Average temperature</span>
      <span className="text-gray-900">{planet.avgTemp} K</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Moons</span>
      <span className="text-gray-900">{planet.moons?.length} moons</span>
    </li>
  </PlanetDataSection>
);
