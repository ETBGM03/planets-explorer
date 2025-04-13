import { planetsService } from "@/services/planets/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PlanetHeader } from "./PlanetHeader";
import { PlanetCardDetails } from "./PlanetCardDetails";

interface PlanetDetailProps {
  planetId: string;
}

export async function PlanetDetails({ planetId }: PlanetDetailProps) {
  try {
    const planet = await planetsService.getById(planetId);

    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
        >
          <Image
            aria-hidden
            src="/arrow_left.svg"
            alt="Back"
            width={20}
            height={20}
          />
          Back to planets
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-72 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <Image
                src={`/images/${planet.name}.webp`}
                alt={planet.name || ""}
                className="w-full h-full object-contain bg-black rounded-full"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="p-8">
            <PlanetHeader
              name={planet?.name || ""}
              planetId={planet?.id || ""}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PlanetCardDetails
                title="Basic data"
                data={[
                  { label: "English name", value: planet.englishName },
                  { label: "Average radius", value: `${planet.meanRadius} km` },
                  { label: "Gravity", value: `${planet.gravity} m/s²` },
                  {
                    label: "Mass",
                    value: `${planet.mass?.massValue} × 10^${planet.mass?.massExponent} kg`,
                  },
                  {
                    label: "Average temperature",
                    value: `${planet.avgTemp} K`,
                  },
                  { label: "Moons", value: `${planet.moons?.length} moons` },
                ]}
              />

              <PlanetCardDetails
                title="Orbit and rotation"
                data={[
                  {
                    label: "Semi-major axis",
                    value: `${planet.semimajorAxis} km`,
                  },
                  { label: "Perihelion", value: `${planet.perihelion} km` },
                  { label: "Aphelion", value: `${planet.aphelion} km` },
                  { label: "Inclination", value: `${planet.inclination}°` },
                  {
                    label: "Sideral rotation",
                    value: `${planet.sideralRotation} hours`,
                  },
                ]}
              />
            </div>

            <div className="mt-8">
              <PlanetCardDetails
                title="Additional information"
                data={[
                  { label: "Discovered by", value: planet.discoveredBy },
                  { label: "Discovery date", value: planet.discoveryDate },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
