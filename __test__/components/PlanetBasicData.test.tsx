import { PlanetBasicData } from "@/features/planets/components/PlanetBasicData";
import { Planet } from "@/types/planet";
import { render, screen } from "@testing-library/react";

describe("PlanetBasicData", () => {
  const mockPlanet = {
    id: "1",
    englishName: "Earth",
    meanRadius: 6371,
    gravity: 9.8,
    mass: {
      massValue: 5.97,
      massExponent: 24,
    },
    avgTemp: 288,
    moons: [{ moon: "Moon", rel: "1" }],
  } as Partial<Planet>;

  it("renders all basic planet data correctly", () => {
    render(<PlanetBasicData planet={mockPlanet} />);

    expect(screen.getByText("English name")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();

    expect(screen.getByText("Average radius")).toBeInTheDocument();
    expect(screen.getByText("6371 km")).toBeInTheDocument();

    expect(screen.getByText("Gravity")).toBeInTheDocument();
    expect(screen.getByText("9.8 m/s²")).toBeInTheDocument();

    expect(screen.getByText("Mass")).toBeInTheDocument();
    expect(screen.getByText("5.97 × 10^24 kg")).toBeInTheDocument();

    expect(screen.getByText("Average temperature")).toBeInTheDocument();
    expect(screen.getByText("288 K")).toBeInTheDocument();

    expect(screen.getByText("Moons")).toBeInTheDocument();
    expect(screen.getByText("1 moons")).toBeInTheDocument();
  });

  it("handles missing data gracefully", () => {
    const partialPlanet = {
      id: "1",
      englishName: "Earth",
      // Omitiendo otros datos
    };

    render(<PlanetBasicData planet={partialPlanet} />);

    expect(screen.getByText("English name")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
  });
});
