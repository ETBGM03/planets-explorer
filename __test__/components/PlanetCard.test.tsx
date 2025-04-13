import { PlanetCard } from "@/features/planets/components";
import { Planet } from "@/types/planet";
import { render, screen } from "@testing-library/react";

describe("PlanetCard", () => {
  const mockPlanet = {
    id: "1",
    name: "earth",
    meanRadius: 6371,
    gravity: 9.8,
    moons: [{ moon: "Moon", rel: "1" }],
  } as Partial<Planet>;

  it("renders planet information correctly", () => {
    render(<PlanetCard planet={mockPlanet} />);

    expect(screen.getByText("earth")).toBeInTheDocument();
    expect(screen.getByText("6371 km")).toBeInTheDocument();
    expect(screen.getByText("9.8 m/s²")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); // number of moons
  });

  it("renders image with correct props", () => {
    render(<PlanetCard planet={mockPlanet} />);

    const image = screen.getByAltText("earth");
    expect(image).toBeInTheDocument();
  });

  it("links to correct planet detail page", () => {
    render(<PlanetCard planet={mockPlanet} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/planets/1");
  });
});
