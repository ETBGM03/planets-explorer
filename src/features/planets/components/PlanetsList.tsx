import { planetsService } from "@services";
import { Planet } from "@types";

import { PlanetCard } from "./PlanetCard";
import { Pagination } from "./Pagination";

interface PlanetsListProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
    page?: string;
  }>;
}

export async function PlanetsList({ searchParams }: PlanetsListProps) {
  const planets = await planetsService.getAll();

  const { search, sort, page } = await searchParams;

  // Filtering by search
  const filteredPlanets = planets.filter((planet: Partial<Planet>) =>
    planet.name?.toLowerCase().includes(search?.toLowerCase() || "")
  );

  // Sorting
  filteredPlanets.sort((a: Partial<Planet>, b: Partial<Planet>) => {
    switch (sort) {
      case "name-asc":
        return (a.name || "").localeCompare(b.name || "");
      case "name-desc":
        return (b.name || "").localeCompare(a.name || "");
      default:
        return 0;
    }
  });

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
  let currentPage = Number(page || "1");

  // Si la página actual es mayor que el total de páginas, volvemos a la primera página
  if (currentPage > totalPages) {
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPlanets = filteredPlanets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPlanets.length > 0 ? (
          paginatedPlanets.map((planet: Partial<Planet>) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <h3 className="text-xl font-medium">No se encontraron planetas</h3>
            <p className="text-gray-500 mt-2">Intenta con otra búsqueda</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-end">
        <Pagination
          totalItems={filteredPlanets.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
