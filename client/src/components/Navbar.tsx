import { person, stages } from "@/data/site";

/* Floating pill navigation, centred and blurred, in the Mindfries manner. */
export default function Navbar() {
  const links = stages.filter((s) => s.id !== "hello" && s.id !== "contact");
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <div className="pill-nav pointer-events-auto">
        <a href="#top" className="mr-1 flex items-center gap-2 pr-2 pl-1 text-[0.95rem] font-semibold tracking-tight text-[var(--ink)]">
          <span className="avatar-dot" aria-hidden="true">
            P
          </span>
          {person.name}
        </a>
        <nav aria-label="Sections" className="hidden items-center sm:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-pill ml-1" href={`mailto:${person.email}`}>
          Email me
        </a>
      </div>
    </header>
  );
}
