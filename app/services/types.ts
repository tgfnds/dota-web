import type { components, operations } from "@/schema";

export type Team = components["schemas"]["TeamObjectResponse"];
export type Hero = components["schemas"]["HeroObjectResponse"];
export type HeroStats = components["schemas"]["HeroStatsResponse"];

// heroes
export type GetHeroesResponse =
  operations["get_heroes"]["responses"]["200"]["content"]["application/json; charset=utf-8"];
export type GetHeroStatsResponse =
  operations["get_hero_stats"]["responses"]["200"]["content"]["application/json; charset=utf-8"];

// constants by resource
export type GetConstantsByResourceParams =
  operations["get_constants_by_resource"]["parameters"];
export type GetConstantsByResourceResponse =
  operations["get_constants_by_resource"]["responses"]["200"]["content"]["application/json; charset=utf-8"];
