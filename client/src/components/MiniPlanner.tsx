import { samplePlan, type PlanItem } from "@/data/site";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/*
 * A working slice of DeadlineMate: a plan sorted by urgency, a live countdown
 * to the next thing due, and the satisfaction of ticking one off.
 */
const fmt = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

const urgency = (minutesLeft: number, weight: number) => {
  const score = weight * 2 + (minutesLeft < 6 * 60 ? 4 : minutesLeft < 36 * 60 ? 2 : 0);
  return score >= 8 ? "Critical" : score >= 5 ? "High" : "Medium";
};

const dueLabel = (minutes: number) => {
  if (minutes < 24 * 60) {
    const d = new Date(Date.now() + minutes * 60_000);
    return `Due today · ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  }
  if (minutes < 48 * 60) return "Due tomorrow";
  return `Due in ${Math.round(minutes / (24 * 60))} days`;
};

export default function MiniPlanner() {
  const reduce = useReducedMotion();
  const [loadedAt] = useState(() => Date.now());
  const [done, setDone] = useState<Set<string>>(new Set());
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const items = useMemo(() => {
    const open = samplePlan.filter((p) => !done.has(p.id)).sort((a, b) => a.dueInMinutes - b.dueInMinutes);
    const closed = samplePlan.filter((p) => done.has(p.id));
    return [...open, ...closed];
  }, [done]);

  const next = items.find((p) => !done.has(p.id));
  const nextDueAt = next ? loadedAt + next.dueInMinutes * 60_000 : null;

  const toggle = (p: PlanItem) =>
    setDone((prev) => {
      const n = new Set(prev);
      if (n.has(p.id)) n.delete(p.id);
      else n.add(p.id);
      return n;
    });

  return (
    <section aria-labelledby="planner-title" className="planner">
      <header className="planner-head">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-white/60 uppercase">Next deadline in</p>
          <p className="planner-clock" aria-live="off">
            {nextDueAt ? fmt(nextDueAt - now) : "—"}
          </p>
        </div>
        <div className="text-right">
          <h3 id="planner-title" className="font-serif text-[1.15rem] font-semibold text-white">
            Today's plan
          </h3>
          <p className="text-sm text-white/60">Sorted by urgency</p>
        </div>
      </header>

      <LayoutGroup>
        <ul className="planner-list">
          <AnimatePresence initial={false}>
            {items.map((p) => {
              const isDone = done.has(p.id);
              const level = urgency(p.dueInMinutes, p.weight);
              return (
                <motion.li
                  key={p.id}
                  layout={!reduce}
                  transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                  className={`plan-item ${isDone ? "is-done" : ""}`}
                >
                  <label className="flex min-w-0 flex-1 cursor-pointer items-start gap-3">
                    <input type="checkbox" className="tick" checked={isDone} onChange={() => toggle(p)} />
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-[var(--ink)]">{p.title}</span>
                      <span className="meta block">
                        {p.module} · {isDone ? "Submitted" : dueLabel(p.dueInMinutes)}
                      </span>
                    </span>
                  </label>
                  <span className={`level level-${level.toLowerCase()}`}>{isDone ? "Done" : level}</span>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </LayoutGroup>

      <footer className="planner-foot">
        <p className="meta">
          {done.size === samplePlan.length
            ? "All submitted. Go outside."
            : `${samplePlan.length - done.size} due this week · tick one off`}
        </p>
        {done.size > 0 ? (
          <button type="button" className="link text-sm" onClick={() => setDone(new Set())}>
            Reset
          </button>
        ) : null}
      </footer>
    </section>
  );
}
