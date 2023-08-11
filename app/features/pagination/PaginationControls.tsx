import { twMerge } from "tailwind-merge";

export default function PaginationControls({
  totalItems,
  page,
  pageSize,
}: {
  totalItems: number;
  page: number;
  pageSize: number;
}) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <a
          href={`?page=${page - 1}&pageSize=${pageSize}`}
          className={twMerge([
            "btn btn-sm btn-square btn-outline btn-primary",
            page === 1 && "btn-disabled",
          ])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <div className="p-2 w-8 flex items-center justify-center text-primary">
          <p>{page}</p>
        </div>
        <a
          href={`?page=${page + 1}&pageSize=${pageSize}`}
          className={twMerge([
            "btn btn-sm btn-square btn-outline btn-primary",
            page === totalItems * pageSize && "btn-disabled",
          ])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-center text-sm">
        <p>{`${page * pageSize} of ${totalItems}`}</p>
      </div>
    </section>
  );
}
