import PlanetDetails from "@/features/planets/components/PlanetDetails";

interface PlanetPageProps {
  params: {
    id: string;
  };
}

export default async function PlanetPage({ params }: PlanetPageProps) {
  const { id } = await params;

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <PlanetDetails planetId={id} />
    </div>
  );
}
