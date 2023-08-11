import HeroCard from "./HeroCard";
import { fetchHeroes } from "@/services/heroes/fetchHeroes";

export default async function page() {
  const heroes = await fetchHeroes();

  return (
    <section className="py-8 md:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {heroes.map((hero) => (
        <HeroCard key={hero.name} hero={hero} />
      ))}
    </section>
  );
}
