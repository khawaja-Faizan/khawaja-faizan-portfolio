import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Mail } from "lucide-react";
import { CONTACT, STATS, MARQUEE_SKILLS } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
      {/* animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-32 left-1/4 h-105 w-105 rounded-full bg-accent/14 blur-3xl" />
        <div className="animate-blob absolute right-1/5 top-1/3 h-90 w-90 rounded-full bg-accent-2/14 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-ink)_75%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-5"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-xs font-medium text-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {CONTACT.availability}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Building <span className="text-gradient">SaaS platforms</span> and real-time apps that businesses run on.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
          I'm <span className="font-semibold text-bright">{CONTACT.name}</span>, a {CONTACT.role} from {CONTACT.location} with 5+ years of experience shipping
          booking systems, workflow engines, and multi-tenant admin platforms with{" "}
          <span className="text-accent">React.js, Next.js and TypeScript</span>.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:shadow-accent/40 hover:brightness-110"
          >
            View My Work
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Faizan! I found your portfolio and would like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
          >
            <MessageCircle size={16} /> WhatsApp Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-soft transition hover:border-accent/40 hover:text-bright"
          >
            <Mail size={16} /> Get in Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-card/50 p-5 text-center">
              <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-soft">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* skill marquee */}
      <div className="mt-16 border-y border-line bg-panel/60 py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((s, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-medium text-soft/80">
                {s} <span className="ml-8 text-accent/50">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="mx-auto mt-8 mb-6 text-soft/60 transition hover:text-accent" aria-label="Scroll down">
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
