import { PlanetDetails } from "@features";

interface PlanetPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlanetPage({ params }: PlanetPageProps) {
  const { id } = await params;

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <PlanetDetails planetId={id} />
    </div>
  );
}
