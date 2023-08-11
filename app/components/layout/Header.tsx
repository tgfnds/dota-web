import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="navbar bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto flex-1 flex gap-8">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Dota Dojo
        </a>
        <nav>
          <ul className="flex gap-4">
            <li>
              <p>Teams</p>
            </li>
            <li>
              <p>Players</p>
            </li>
            <li>
              <p>Matches</p>
            </li>
          </ul>
        </nav>
        <section className="ml-auto">
          <ThemeSwitcher />
        </section>
      </div>
    </header>
  );
}
