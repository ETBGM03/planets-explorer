import { Planet } from "@types";

import { PlanetDataSection } from "./PlanetDataSection";

interface PlanetOrbitDataProps {
  planet: Partial<Planet>;
}

export const PlanetOrbitData = ({ planet }: PlanetOrbitDataProps) => (
  <PlanetDataSection title="Orbit and rotation">
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Semi-major axis</span>
      <span className="text-gray-900">{planet.semimajorAxis} km</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Perihelion</span>
      <span className="text-gray-900">{planet.perihelion} km</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Aphelion</span>
      <span className="text-gray-900">{planet.aphelion} km</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Inclination</span>
      <span className="text-gray-900">{planet.inclination}°</span>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
      <span className="font-semibold text-gray-700">Sideral rotation</span>
      <span className="text-gray-900">{planet.sideralRotation} hours</span>
    </li>
  </PlanetDataSection>
);
