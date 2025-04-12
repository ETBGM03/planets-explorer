import { planetsService } from "@/services/planets/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PlanetBasicData } from "./PlanetBasicData";
import { PlanetOrbitData } from "./PlanetOrbitData";
import { PlanetHeader } from "./PlanetHeader";
import { PlanetAdditionalInfo } from "./PlanetAdditionalInfo";

interface PlanetDetailProps {
  planetId: string;
}

export default async function PlanetDetails({ planetId }: PlanetDetailProps) {
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
              <PlanetBasicData planet={planet} />
              <PlanetOrbitData planet={planet} />
            </div>

            <PlanetAdditionalInfo planet={planet} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
