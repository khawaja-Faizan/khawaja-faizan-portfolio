import { SectionHeading, Reveal } from "./Section";
import { HIGHLIGHTS, EDUCATION, CERTIFICATES } from "../data";
import { GraduationCap, Award, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Frontend engineering for products that can't afford to break"
        subtitle="For 5+ years I've been the frontend engineer teams rely on for the complex parts — the workflow builders, the dynamic forms, the real-time features — across 13+ production applications for UK and international clients."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1}>
            <div className="card-glow h-full rounded-2xl border border-line bg-card p-7">
              <Sparkles className="mb-4 text-accent" size={22} />
              <h3 className="font-display mb-2 text-lg font-semibold">{h.title}</h3>
              <p className="text-sm leading-relaxed text-soft">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-card p-7">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="text-accent" size={22} />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <ul className="space-y-5">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  <div className="font-medium text-bright">{e.degree}</div>
                  <div className="text-sm text-soft">
                    {e.school} · {e.period} · {e.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-line bg-card p-7">
            <div className="mb-5 flex items-center gap-3">
              <Award className="text-accent" size={22} />
              <h3 className="font-display text-lg font-semibold">Certificates</h3>
            </div>
            <ul className="space-y-5">
              {CERTIFICATES.map((c) => (
                <li key={c.name}>
                  <div className="font-medium text-bright">{c.name}</div>
                  <div className="text-sm text-soft">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
