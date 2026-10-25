import { person } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-[var(--ink-mute)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.fullName}. {person.role}, {person.location}.
        </p>
        <p className="flex items-center gap-5">
          <a className="link" href={person.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link" href={person.company.href} target="_blank" rel="noreferrer">
            DeadlineMate
          </a>
        </p>
      </div>
    </footer>
  );
}
