export default async function Home() {
  return (
    <section className="self-center py-8 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <a
        href="/teams"
        className="btn btn-outline btn-primary h-52 w-52 text-2xl"
      >
        Teams
      </a>
      <a
        href="/heroes"
        className="btn btn-outline btn-primary h-52 w-52 text-2xl"
      >
        Heroes
      </a>
    </section>
  );
}
