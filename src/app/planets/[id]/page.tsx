import PlanetDetails from "@/features/planets/components/PlanetDetails";

interface PlanetPageProps {
  params: {
    id: string;
  };
}

export default async function PlanetPage({ params }: PlanetPageProps) {
  const { id } = await params;

  return <PlanetDetails planetId={id} />;
}
