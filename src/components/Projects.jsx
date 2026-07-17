import { useState } from "react";
import { SectionHeading, Reveal } from "./Section";
import { PROJECTS } from "../data";
import { Layers, ChevronDown } from "lucide-react";

function ProjectCard({ p, big = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className={`card-glow flex h-full flex-col rounded-2xl border border-line bg-card ${big ? "p-8" : "p-6"}`}>
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className={`font-display font-semibold ${big ? "text-2xl" : "text-lg"}`}>{p.name}</h3>
            <p className="mt-0.5 text-sm text-accent">{p.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-line bg-panel px-3 py-1 text-[11px] font-medium text-soft">
            {p.org}
          </span>
        </div>
        <ul className="mb-5 flex-1 space-y-2">
          {p.points.map((pt, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
              {pt}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
              {s}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-y border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Production work, not side projects"
          subtitle="Every one of these is a real application used by real businesses — booking platforms, marketplaces, admin systems, and workflow engines."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} p={p} big delay={(i % 2) * 0.1} />
          ))}
        </div>

        {showAll && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <ProjectCard key={p.name} p={p} delay={(i % 3) * 0.08} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-soft transition hover:border-accent/40 hover:text-bright"
          >
            <Layers size={16} />
            {showAll ? "Show Featured Only" : `View All ${PROJECTS.length} Projects`}
            <ChevronDown size={16} className={`transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
