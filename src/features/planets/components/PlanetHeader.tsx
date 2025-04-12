import { FavoriteButton } from "@/shared/components/ui/FavoriteButton";

interface PlanetHeaderProps {
  name: string;
  planetId: string;
}

export const PlanetHeader = ({ name, planetId }: PlanetHeaderProps) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {name}
    </h1>
    <FavoriteButton planetId={planetId} />
  </div>
);
