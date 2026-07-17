import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeading, Reveal } from "./Section";
import { CONTACT } from "../data";
import { EMAILJS_CONFIG } from "../emailjs.config";
import { Mail, MessageCircle, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle, Download } from "lucide-react";

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: `tel:+${CONTACT.whatsapp}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat directly",
    href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Faizan! I found your portfolio and would like to discuss a project.")}`,
  },
  { icon: MapPin, label: "Location", value: `${CONTACT.location} · Remote worldwide` },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(formRef.current);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: data.get("from_name"),
          email: data.get("from_email"),
          title: data.get("subject"),
          message: data.get("message"),
          time: new Date().toLocaleString(),
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a project, a role, or just a question? I usually reply within a few hours."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            {INFO.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition hover:border-accent/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-soft">{item.label}</div>
                    <div className="mt-0.5 text-sm font-semibold text-bright">{item.value}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}

            <a
              href={CONTACT.cvFile}
              download={CONTACT.cvDownloadName}
              type="application/pdf"
              className="flex items-center justify-center gap-2 rounded-2xl border border-accent/40 p-4 text-sm font-semibold text-accent transition hover:bg-accent/10"
            >
              <Download size={17} /> Download My CV (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl border border-line bg-card p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="from_name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft">
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  required
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-bright placeholder:text-soft/50 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft">
                  Your Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-bright placeholder:text-soft/50 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="Project inquiry / Job opportunity"
                className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-bright placeholder:text-soft/50 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or role..."
                className="w-full resize-y rounded-xl border border-line bg-panel px-4 py-3 text-sm text-bright placeholder:text-soft/50 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-400">
                <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-400">
                <AlertCircle size={16} /> Something went wrong — please email me directly or use WhatsApp.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
