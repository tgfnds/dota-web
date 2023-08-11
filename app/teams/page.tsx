import { PageProps } from "@next/types/app/teams/page";
import PaginationControls from "@/features/pagination/PaginationControls";
import type { TeamObjectResponse } from "@/types";

async function getTeams(): Promise<TeamObjectResponse[]> {
  const res = await fetch("https://api.opendota.com/api/teams");

  console.log(res.headers);

  if (!res.ok) {
    throw new Error(`Failed to fetch teams.`);
  }

  return res.json();
}

export default async function Teams({ searchParams }: PageProps) {
  let teams = await getTeams();

  const { page = 1, pageSize = 10 } = searchParams;

  const totalTeams = teams.length;
  teams = teams.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="py-8 md:px-4 flex flex-col items-center justify-center gap-8">
      <PaginationControls
        page={page}
        pageSize={pageSize}
        totalItems={totalTeams}
      />
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
