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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section with Stars Background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20"></div>
          <div className="container mx-auto px-4 py-16 relative">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Planets Explorer
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Explore the wonders of our solar system. Discover detailed
                information about each planet, from basic features to orbital
                data.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Search and Sort Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-12 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <SearchBar />
              </div>
              <div>
                <SortSelect />
              </div>
            </div>
          </div>

          {/* Planets Grid */}
          <Suspense fallback={<PlanetLoader />}>
            <PlanetsList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </IntroWrapper>
  );
}
