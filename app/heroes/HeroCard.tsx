import type { Hero } from "@/services/types";
import Image from "next/image";

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <div key={hero.name} className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name?.slice(
            14,
            hero.name.length
          )}.png`}
          width={200}
          height={200}
          className="h-full w-full object-cover"
          alt={hero.name || "Hero Portrait"}
        />
      </figure>
      <section className="card-body">
        <h2 className="card-title">{hero.localized_name}</h2>
        <p>{hero.primary_attr}</p>
        <div className="flex flex-wrap gap-2">
          {hero.roles?.map((role) => (
            <p
              key={`${hero.name}-${role}`}
              className="badge badge-primary max-w-fit"
            >
              {role}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
