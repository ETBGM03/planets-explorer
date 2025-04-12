interface Planet {
  id: string;
  name: string;
  description: string;
  image: string;
  diameter: number;
  mass: number;
  distanceFromSun: number;
  orbitalPeriod: number;
  rotationPeriod: number;
  surfaceTemperature: number;
  numberOfMoons: number;
}

// Datos de ejemplo - en una aplicación real, esto vendría de una API
const planetsData: Planet[] = [
  {
    id: "1",
    name: "Mercury",
    description: "The smallest and innermost planet in the Solar System.",
    image:
      "https://science.nasa.gov/wp-content/uploads/2023/09/mercury-messenger-globe-800x800.jpg",
    diameter: 4879,
    mass: 3.285e23,
    distanceFromSun: 57.9,
    orbitalPeriod: 88,
    rotationPeriod: 1407.6,
    surfaceTemperature: 167,
    numberOfMoons: 0,
  },
  // ... otros planetas
];

export const getPlanetById = async (id: string): Promise<Planet> => {
  // Simulamos un delay de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const planet = planetsData.find((p) => p.id === id);
  if (!planet) {
    throw new Error("Planet not found");
  }
  return planet;
};
