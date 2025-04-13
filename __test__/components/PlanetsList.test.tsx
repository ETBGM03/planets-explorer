import { render, screen } from "@testing-library/react";
import { planetsService } from "@/services/planets/api";
import { PlanetsList } from "@/features/planets/components";

// Mock the planets service
jest.mock("../../src/services/planets/api", () => ({
  planetsService: {
    getAll: jest.fn(),
  },
}));

// Mock the child components
jest.mock("../../src/features/planets/components/PlanetCard", () => ({
  PlanetCard: ({ planet }: any) => (
    <div data-testid="planet-card">
      {planet.name} - {planet.meanRadius}km
    </div>
  ),
}));

jest.mock("../../src/features/planets/components/Pagination", () => ({
  Pagination: ({ totalItems, currentPage }: any) => (
    <div data-testid="pagination">
      Page {currentPage} of {Math.ceil(totalItems / 5)}
    </div>
  ),
}));

describe("PlanetsList", () => {
  const mockPlanets = [
    {
      id: "1",
      name: "Earth",
      meanRadius: 6371,
      gravity: 9.8,
      moons: ["Moon"],
    },
    {
      id: "2",
      name: "Mars",
      meanRadius: 3389,
      gravity: 3.7,
      moons: ["Phobos", "Deimos"],
    },
    {
      id: "3",
      name: "Venus",
      meanRadius: 6051,
      gravity: 8.87,
      moons: [],
    },
  ];

  beforeEach(() => {
    (planetsService.getAll as jest.Mock).mockResolvedValue(mockPlanets);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all planets when no search params are provided", async () => {
    const Component = await PlanetsList({ searchParams: {} });
    render(Component);

    expect(await screen.findAllByTestId("planet-card")).toHaveLength(3);
    expect(screen.getByText("Earth - 6371km")).toBeInTheDocument();
    expect(screen.getByText("Mars - 3389km")).toBeInTheDocument();
    expect(screen.getByText("Venus - 6051km")).toBeInTheDocument();
  });

  it("filters planets by search term", async () => {
    const Component = await PlanetsList({ searchParams: { search: "mar" } });
    render(Component);

    expect(await screen.findAllByTestId("planet-card")).toHaveLength(1);
    expect(screen.getByText("Mars - 3389km")).toBeInTheDocument();
    expect(screen.queryByText("Earth - 6371km")).not.toBeInTheDocument();
  });

  it("sorts planets by name in ascending order", async () => {
    const Component = await PlanetsList({ searchParams: { sort: "name-asc" } });
    render(Component);

    const planetCards = await screen.findAllByTestId("planet-card");
    expect(planetCards[0]).toHaveTextContent("Earth");
    expect(planetCards[1]).toHaveTextContent("Mars");
    expect(planetCards[2]).toHaveTextContent("Venus");
  });

  it("sorts planets by name in descending order", async () => {
    const Component = await PlanetsList({
      searchParams: { sort: "name-desc" },
    });
    render(Component);

    const planetCards = await screen.findAllByTestId("planet-card");
    expect(planetCards[0]).toHaveTextContent("Venus");
    expect(planetCards[1]).toHaveTextContent("Mars");
    expect(planetCards[2]).toHaveTextContent("Earth");
  });

  it("paginates planets correctly", async () => {
    // Create more mock planets for pagination testing
    const manyPlanets = Array.from({ length: 7 }, (_, i) => ({
      id: String(i + 1),
      name: `Planet ${i + 1}`,
      meanRadius: 1000 + i,
      gravity: 1 + i,
      moons: [],
    }));

    (planetsService.getAll as jest.Mock).mockResolvedValue(manyPlanets);

    const Component = await PlanetsList({ searchParams: { page: "2" } });
    render(Component);

    const planetCards = await screen.findAllByTestId("planet-card");
    expect(planetCards).toHaveLength(2); // Should show only 2 planets on page 2
  });

  it('shows "no planets found" message when search has no results', async () => {
    const Component = await PlanetsList({
      searchParams: { search: "nonexistent" },
    });
    render(Component);

    expect(
      await screen.findByText("No se encontraron planetas")
    ).toBeInTheDocument();
    expect(screen.queryByTestId("planet-card")).not.toBeInTheDocument();
  });

  it("handles service errors gracefully", async () => {
    (planetsService.getAll as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch")
    );

    const Component = await PlanetsList({ searchParams: {} }).catch((error) => {
      // Handle the error according to your error boundary implementation
      return <div>Error: {error.message}</div>;
    });

    render(Component);
    // Test your error handling UI here
  });
});
