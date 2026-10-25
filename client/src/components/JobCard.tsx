import type { Job } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

/* One chapter of the journey, with the detail folded away until asked for. */
export default function JobCard({ job, defaultOpen = false }: { job: Job; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const id = useId();

  return (
    <article className={`job is-${job.status}`}>
      <div className="job-head">
        <p className={`status ${job.status === "running" ? "status-running" : "status-done"}`}>
          <span className="dot" aria-hidden="true" />
          {job.status === "running" ? "Now" : "Completed"}
        </p>
        <p className="meta">{job.period}</p>
      </div>

      <h4 className="mt-3 text-[1.2rem] font-bold tracking-tight text-[var(--ink)]">{job.title}</h4>
      <p className="job-org mt-1 text-sm">
        {job.orgHref ? (
          <a className="link font-semibold" href={job.orgHref} target="_blank" rel="noreferrer">
            {job.org}
          </a>
        ) : (
          <b>{job.org}</b>
        )}
        <span>{job.type}</span>
        <span>{job.location}</span>
      </p>
      <p className="mt-3 max-w-[44rem] text-[var(--ink-soft)]">{job.summary}</p>

      <button
        type="button"
        className="job-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`chev ${open ? "open" : ""}`} aria-hidden="true" />
        {open ? "Less detail" : "More detail"}
        <span className="text-[var(--ink-mute)]">
          {" "}
          · {job.log.length} {job.log.length === 1 ? "point" : "points"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            key="log"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ol className="job-log">
              {job.log.map((line, i) => (
                <li key={line}>
                  <span className="log-n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
