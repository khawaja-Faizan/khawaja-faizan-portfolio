import { SectionHeading, Reveal } from "./Section";
import { SKILL_GROUPS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="The toolbox"
          subtitle="Battle-tested across large SaaS ecosystems — not just tutorial experience."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.08}>
              <div className="card-glow h-full rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-body"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
