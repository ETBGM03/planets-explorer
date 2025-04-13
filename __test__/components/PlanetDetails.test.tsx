import { render, screen } from "@testing-library/react";
import { planetsService } from "@/services/planets/api";
import { notFound } from "next/navigation";
import PlanetDetails from "@/features/planets/components/PlanetDetails";

// Mock the services and components
jest.mock("../../src/services/planets/api", () => ({
  planetsService: {
    getById: jest.fn(),
  },
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

// Mock child components
jest.mock("../../src/features/planets/components/PlanetBasicData", () => ({
  PlanetBasicData: ({ planet }: any) => (
    <div data-testid="basic-data">Basic Data: {planet.name}</div>
  ),
}));

jest.mock("../../src/features/planets/components/PlanetOrbitData", () => ({
  PlanetOrbitData: ({ planet }: any) => (
    <div data-testid="orbit-data">Orbit Data: {planet.name}</div>
  ),
}));

jest.mock("../../src/features/planets/components/PlanetHeader", () => ({
  PlanetHeader: ({ name, planetId }: any) => (
    <div data-testid="planet-header">
      Header: {name} (ID: {planetId})
    </div>
  ),
}));

jest.mock("../../src/features/planets/components/PlanetAdditionalInfo", () => ({
  PlanetAdditionalInfo: ({ planet }: any) => (
    <div data-testid="additional-info">Additional Info: {planet.name}</div>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("PlanetDetails", () => {
  const mockPlanet = {
    id: "1",
    name: "Earth",
    englishName: "Earth",
    meanRadius: 6371,
    gravity: 9.8,
    mass: {
      massValue: 5.97,
      massExponent: 24,
    },
    avgTemp: 288,
    moons: ["Moon"],
    semimajorAxis: 149598023,
    perihelion: 147095000,
    aphelion: 152100000,
    inclination: 0,
    sideralRotation: 23.9345,
    discoveredBy: "Known since antiquity",
    discoveryDate: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders planet details successfully", async () => {
    (planetsService.getById as jest.Mock).mockResolvedValue(mockPlanet);

    const Component = await PlanetDetails({ planetId: "1" });
    render(Component);

    // Verify all sections are rendered
    expect(screen.getByTestId("planet-header")).toHaveTextContent(
      "Header: Earth"
    );
    expect(screen.getByTestId("basic-data")).toHaveTextContent(
      "Basic Data: Earth"
    );
    expect(screen.getByTestId("orbit-data")).toHaveTextContent(
      "Orbit Data: Earth"
    );
    expect(screen.getByTestId("additional-info")).toHaveTextContent(
      "Additional Info: Earth"
    );

    // Verify back link
    const backLink = screen.getByText("Back to planets");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");

    // Verify planet image
    const planetImage = screen.getByAltText("Earth");
    expect(planetImage).toHaveAttribute("src", "/images/Earth.webp");
  });

  it("calls notFound when planet is not found", async () => {
    (planetsService.getById as jest.Mock).mockRejectedValue(
      new Error("Planet not found")
    );

    await PlanetDetails({ planetId: "invalid-id" });

    expect(notFound).toHaveBeenCalled();
  });

  it("renders planet details with missing data gracefully", async () => {
    const partialPlanet = {
      id: "2",
      name: "Mars",
    };

    (planetsService.getById as jest.Mock).mockResolvedValue(partialPlanet);

    const Component = await PlanetDetails({ planetId: "2" });
    render(Component);

    expect(screen.getByTestId("planet-header")).toHaveTextContent(
      "Header: Mars"
    );
    expect(screen.getByTestId("basic-data")).toBeInTheDocument();
    expect(screen.getByTestId("orbit-data")).toBeInTheDocument();
  });

  it("handles service error correctly", async () => {
    (planetsService.getById as jest.Mock).mockRejectedValue(
      new Error("Service error")
    );

    await PlanetDetails({ planetId: "1" });

    expect(notFound).toHaveBeenCalled();
  });

  it("renders correct image for planet", async () => {
    (planetsService.getById as jest.Mock).mockResolvedValue(mockPlanet);

    const Component = await PlanetDetails({ planetId: "1" });
    render(Component);

    const planetImage = screen.getByAltText(mockPlanet.name);
    expect(planetImage).toHaveAttribute(
      "src",
      `/images/${mockPlanet.name}.webp`
    );
    expect(planetImage).toHaveAttribute("width", "400");
    expect(planetImage).toHaveAttribute("height", "400");
  });

  it("renders back link with correct attributes", async () => {
    (planetsService.getById as jest.Mock).mockResolvedValue(mockPlanet);

    const Component = await PlanetDetails({ planetId: "1" });
    render(Component);

    const backLink = screen.getByText("Back to planets").closest("a");
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("handles empty discoveredBy and discoveryDate gracefully", async () => {
    const planetWithEmptyFields = {
      ...mockPlanet,
      discoveredBy: "",
      discoveryDate: "",
    };

    (planetsService.getById as jest.Mock).mockResolvedValue(
      planetWithEmptyFields
    );

    const Component = await PlanetDetails({ planetId: "1" });
    render(Component);

    expect(screen.getByTestId("additional-info")).toBeInTheDocument();
  });
});
