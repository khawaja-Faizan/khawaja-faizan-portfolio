import { SectionHeading, Reveal } from "./Section";
import { EXPERIENCE } from "../data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
      />
      <div className="relative ml-3 border-l border-line pl-8 sm:ml-6">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.12} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-panel">
              <Briefcase size={12} className="text-accent" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">{job.role}</h3>
              <span className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-soft">
                {job.period}
              </span>
            </div>
            <div className="mt-1 text-sm font-medium text-accent">{job.company}</div>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((p, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-soft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
