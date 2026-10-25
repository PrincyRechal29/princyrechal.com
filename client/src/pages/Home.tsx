import CopyEmail from "@/components/CopyEmail";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import MiniPlanner from "@/components/MiniPlanner";
import Navbar from "@/components/Navbar";
import Rail from "@/components/Rail";
import { modes, patterns, person, product, runs, stack } from "@/data/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Mode = keyof typeof modes;

export default function Home() {
  const [mode, setMode] = useState<Mode>("founder");
  const reduce = useReducedMotion();
  const m = modes[mode];
  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.28 } };
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

  return (
    <div id="top">
      <Navbar />

      <div className="sheet">
        <div className="wrap page">
          <Rail />

          <main className="content">
            {/* ---------------- hello: who I am ---------------- */}
            <section id="hello" aria-labelledby="hero-title" className="hero">
              <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
                <div>
                  <h1 id="hero-title" className="h-hero rise" style={d(0)}>
                    {person.hello}
                    <br />
                    I'm the founder of{" "}
                    <a className="grad" href={person.company.href} target="_blank" rel="noreferrer">
                      deadlinemate.com
                    </a>
                  </h1>
                  <p className="rise mt-5 text-[clamp(1.05rem,1rem+0.4vw,1.25rem)] leading-snug text-[var(--ink-soft)]" style={d(140)}>
                    {person.secondLine}
                  </p>
                  <div className="rise mt-6 space-y-4 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]" style={d(180)}>
                    {person.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <div className="rise mt-7 flex flex-wrap gap-3" style={d(260)}>
                    <a className="btn btn-ink" href="#work">
                      About DeadlineMate
                    </a>
                    <a className="btn btn-quiet" href="#story">
                      My journey
                    </a>
                    <a className="btn btn-quiet" href={`mailto:${person.email}`}>
                      Say hello
                    </a>
                  </div>
                </div>

                {/* portrait, or a monogram until there is one */}
                <div className="rise avatar-wrap md:pt-2" style={d(140)}>
                  {person.photo ? (
                    <img
                      src={person.photo}
                      srcSet={`${person.photoSmall} 400w, ${person.photo} 800w`}
                      sizes="(min-width: 768px) 260px, 180px"
                      alt={person.fullName}
                      className="portrait"
                      width={260}
                      height={260}
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="monogram" aria-hidden="true">
                      <span>PR</span>
                    </div>
                  )}
                </div>
              </div>

              <dl className="facts rise mt-12" style={d(320)}>
                {person.quickFacts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt className="meta">{f.label}</dt>
                    <dd className="font-semibold text-[var(--ink)]">{f.value}</dd>
                  </div>
                ))}
              </dl>

            </section>

            {/* ---------------- about me, in two halves ---------------- */}
            <section id="about" aria-labelledby="about-title" className="section">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="kicker">About me</p>
                  <p className="meta mt-1">Two halves of the same person. Pick one.</p>
                </div>
                <div className="seg" role="tablist" aria-label="Which half of the work">
                  {(Object.keys(modes) as Mode[]).map((k) => (
                    <button
                      key={k}
                      type="button"
                      role="tab"
                      aria-selected={mode === k}
                      className={`seg-btn ${mode === k ? "is-on" : ""}`}
                      onClick={() => setMode(k)}
                    >
                      {modes[k].label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mode} {...fade}>
                  <h2 id="about-title" className="h-section mt-5 max-w-[22ch]">
                    {m.heading[0]}
                    <em>{m.heading[1]}</em>
                  </h2>
                  <div className="mt-8 grid gap-8 text-[1.05rem] leading-relaxed text-[var(--ink-soft)] lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <div className="space-y-5">
                      {m.paragraphs.map((p, i) => (
                        <p key={i} className={i === 0 ? "text-[var(--ink)]" : ""}>
                          {p}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--ink)]">{m.runbookTitle}</h3>
                      <p className="meta mt-1 mb-3">If the left happens, the right follows.</p>
                      {m.runbook.map((r) => (
                        <div className="runbook-row" key={r.when}>
                          <p className="font-semibold text-[var(--ink)]">{r.when}</p>
                          <p className="text-[var(--ink-soft)]">{r.then}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>

            {/* ---------------- my journey ---------------- */}
            <section id="story" aria-labelledby="story-title" className="section">
              <p className="kicker">My journey</p>
              <h2 id="story-title" className="h-section mt-5">
                How I got <em>here.</em>
              </h2>
              <p className="lede mt-4">
                A computing degree in Lancashire, three years freelancing for clients around the world, production
                platforms in the UK, and now a company of my own. Two chapters are still being written.
              </p>

              <div className="mt-12 grid gap-12">
                {runs.map((run) => (
                  <div key={run.name} className="run">
                    <div className="run-head">
                      <h3 className="text-[1.05rem] font-bold tracking-tight text-[var(--ink)]">{run.name}</h3>
                      <p className="meta">{run.blurb}</p>
                    </div>
                    <div className="grid gap-4">
                      {run.jobs.map((job) => (
                        <JobCard key={job.title + job.period} job={job} defaultOpen={job.status === "running"} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------- deadlinemate ---------------- */}
            <section id="work" aria-labelledby="work-title" className="section">
              <p className="kicker">DeadlineMate, my company</p>
              <h2 id="work-title" className="h-section mt-5 max-w-[20ch]">
                I built the calmest way to never miss a <em>deadline.</em>
              </h2>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div>
                  <p className="status status-live">
                    <span className="dot" aria-hidden="true" />
                    {product.kind}
                  </p>
                  <p className="mt-5 max-w-[32rem] text-[1.1rem] leading-relaxed text-[var(--ink)]">{product.summary}</p>
                  <ol className="mt-7 grid gap-3">
                    {product.pillars.map((p) => (
                      <li className="pillar" key={p.title}>
                        <h4>{p.title}</h4>
                        <p className="mt-1 text-[0.95rem] text-[var(--ink-soft)]">{p.text}</p>
                      </li>
                    ))}
                  </ol>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--ink-soft)]">
                    {product.proof.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--violet)]" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a className="btn btn-ink" href={product.href} target="_blank" rel="noreferrer">
                      {product.cta}
                    </a>
                  </div>
                </div>

                <div className="lg:pt-2">
                  <MiniPlanner />
                  <p className="meta mt-3">A working slice of the product. Tick something off and watch the plan re-sort.</p>
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-[1.35rem] font-bold tracking-tight text-[var(--ink)]">Platform work I keep being asked to do again</h3>
                <p className="meta mt-1">Patterns from the last four years, told without the employer names.</p>
                <div className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                  {patterns.map((p) => (
                    <article key={p.title} className="border-t border-[var(--line)] py-6">
                      <p className="meta">{p.kind}</p>
                      <h4 className="mt-1 text-[1.0625rem] font-bold tracking-tight text-[var(--ink)]">{p.title}</h4>
                      <p className="mt-2 text-[0.9375rem] text-[var(--ink-soft)]">{p.summary}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                        {p.tags.map((t) => (
                          <li className="tag" key={t}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* ---------------- what I use ---------------- */}
            <section id="stack" aria-labelledby="stack-title" className="section">
              <p className="kicker">What I use</p>
              <h2 id="stack-title" className="h-section mt-5">
                The tools I reach <em>for.</em>
              </h2>
              <p className="lede mt-4">Boring where it should be boring. Every tool here has been on call with me.</p>
              <div className="mt-8">
                {stack.map((s) => (
                  <div className="stack-row" key={s.group}>
                    <p className="font-semibold text-[var(--ink)]">{s.group}</p>
                    <p className="text-[var(--ink-soft)]">
                      {s.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------- say hello ---------------- */}
            <section id="contact" aria-labelledby="contact-title" className="section">
              <p className="kicker">Say hello</p>
              <h2 id="contact-title" className="h-section mt-5 max-w-[20ch]">
Get in <em>touch with me.</em>
              </h2>
              <p className="lede mt-4">
                Whether it's about reliability, platform engineering, DeadlineMate, or something I haven't thought of
                yet. A short email is the quickest way to reach me.
              </p>
              <div className="mt-8">
                <CopyEmail email={person.email} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-ink" href={person.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn btn-quiet" href={person.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-quiet" href={person.company.href} target="_blank" rel="noreferrer">
                  DeadlineMate
                </a>
              </div>
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
