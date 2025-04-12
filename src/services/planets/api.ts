import { apiClient } from "@/shared/utils/api-client";
import { Planet, PlanetsResponse } from "@/types/planet";

import { transformPlanetData } from "./transformers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const planetsService = {
  async getAll(): Promise<Partial<Planet>[]> {
    const response = await apiClient.get<PlanetsResponse>(`${API_URL}/bodies`, {
      filter: ["isPlanet,eq,true"],
    });
    const transformedData = response.bodies.map(transformPlanetData);
    return transformedData;
  },

  async getById(id: string): Promise<Partial<Planet>> {
    const response = await apiClient.get<Planet>(`${API_URL}/bodies/${id}`);
    return transformPlanetData(response);
  },
};
