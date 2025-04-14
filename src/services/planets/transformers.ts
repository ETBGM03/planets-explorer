import { Planet } from "@types";

export const transformPlanetData = (data: Planet): Partial<Planet> => {
  return {
    id: data.id,
    name: data.englishName || data.name,
    isPlanet: data.isPlanet,
    englishName: data.englishName,
    inclination: data.inclination,
    perihelion: data.perihelion,
    aphelion: data.aphelion,
    sideralRotation: data.sideralRotation,
    avgTemp: data.avgTemp,
    discoveredBy: data.discoveredBy,
    discoveryDate: data.discoveryDate,
    moons:
      data.moons?.map((moon: { moon: string; rel: string }) => ({
        moon: moon.moon,
        rel: moon.rel,
      })) || [],
    gravity: parseFloat(data.gravity.toFixed(2)),
    density: parseFloat(data.density.toFixed(2)),
    meanRadius: parseFloat(data.meanRadius.toFixed(2)),
    vol: {
      volValue: data.vol.volValue,
      volExponent: data.vol.volExponent,
    },
    mass: {
      massValue: data.mass.massValue,
      massExponent: data.mass.massExponent,
    },
    semimajorAxis: data.semimajorAxis,
  };
};
