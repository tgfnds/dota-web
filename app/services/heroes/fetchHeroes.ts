import type { GetHeroesResponse } from "../types";

export async function fetchHeroes(): Promise<GetHeroesResponse> {
  const res = await fetch("https://api.opendota.com/api/heroes");

  if (!res.ok) {
    throw new Error(`Failed to fetch heroes.`);
  }

  return res.json();
}
