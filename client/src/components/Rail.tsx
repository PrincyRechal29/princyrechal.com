import { stages } from "@/data/site";
import { useEffect, useState } from "react";

/*
 * The pipeline rail: a sticky list of the page's stages that fills as you
 * scroll. Done above you, running where you are, pending below. Click to jump.
 */
export default function Rail() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = stages.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => e !== null);
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.38;
      let idx = 0;
      els.forEach((el, i) => {
        if (el.offsetTop <= probe) idx = i;
      });
      setCurrent(idx);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* thin page progress on small screens */}
      <div className="progress lg:hidden" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav aria-label="Stages" className="rail">
        <ol>
          {stages.map((s, i) => {
            const shown = i < current ? "done" : i === current ? "running" : "pending";
            const word =
              shown === "running" ? "you are here" : shown === "done" ? "read" : "next";
            return (
              <li key={s.id} className={`rail-item is-${shown}`}>
                <a href={`#${s.id}`} aria-current={i === current ? "step" : undefined}>
                  <span className="rail-mark" aria-hidden="true">
                    {shown === "done" ? (
                      <svg viewBox="0 0 12 12" width="10" height="10">
                        <path d="M2 6.5l2.6 2.5L10 3.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : null}
                  </span>
                  <span className="rail-label">{s.label}</span>
                  <span className="rail-state">{word}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
