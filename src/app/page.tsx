import { Suspense } from "react";

import {
  PlanetsList,
  SearchBar,
  SortSelect,
} from "@/features/planets/components";
import { PlanetLoader } from "@/shared/components/feedback/PlanetLoader";
import { IntroWrapper } from "@/shared/components/feedback/IntroWrapper";

export const dynamic = "force-dynamic";

interface HomePageProps {
  searchParams?: {
    search?: string;
    sort?: string;
    page?: string;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  return (
    <IntroWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Planets Explorer</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <SearchBar />
          </div>
          <div>
            <SortSelect />
          </div>
        </div>

        <Suspense fallback={<PlanetLoader />}>
          <PlanetsList searchParams={searchParams} />
        </Suspense>
      </div>
    </IntroWrapper>
  );
}
