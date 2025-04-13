import { Planet } from "@types";

interface PlanetAdditionalInfoProps {
  planet: Partial<Planet>;
}

export const PlanetAdditionalInfo = ({ planet }: PlanetAdditionalInfoProps) => (
  <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-sm">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Additional information
    </h2>
    <ul className="space-y-3">
      <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
        <span className="font-semibold text-gray-700">Discovered by</span>
        <span className="text-gray-900">
          {planet?.discoveredBy || "Unknown discoverer"}
        </span>
      </li>
      <li className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
        <span className="font-semibold text-gray-700">Discovery date</span>
        <span className="text-gray-900">
          {planet?.discoveryDate || "Unverified discovery date"}
        </span>
      </li>
    </ul>
  </div>
);
