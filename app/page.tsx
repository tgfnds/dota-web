import Image from "next/image";
import type { TeamObjectResponse } from "./types";

async function getTeams(): Promise<TeamObjectResponse[]> {
  const res = await fetch("https://api.opendota.com/api/teams");

  if (!res.ok) {
    throw new Error(`Failed to fetch teams.`);
  }

  return res.json();
}

export default async function Home() {
  const teams = await getTeams();

  return (
    <section className="py-8 md:px-4 flex items-center justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {teams.map((team) => (
          <li
            key={team.team_id}
            className="card bg-neutral text-neutral-content"
          >
            <section className="card-body">
              <h2 className="card-title overflow-hidden">
                {team.name}
                <span className="badge badge-primary">{team.tag}</span>
              </h2>
              <p>Wins: {team.wins}</p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
