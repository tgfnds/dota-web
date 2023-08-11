import Image from "next/image";

import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto flex-1 flex gap-8">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          Dota Dojo
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/heroes" className="link link-hover">
                Heroes
              </Link>
            </li>
            <li>
              <Link href="/teams" className="link link-hover">
                Teams
              </Link>
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
