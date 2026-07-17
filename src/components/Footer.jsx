import { CONTACT } from "../data";
import { Mail, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <div className="font-display font-bold">
            <span className="text-gradient">Khawaja Faizan</span>
          </div>
          <p className="mt-1 text-xs text-soft">
            {CONTACT.role} · {CONTACT.location} · Available for remote work worldwide
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-soft transition hover:border-accent/50 hover:text-accent"
          >
            <Mail size={17} />
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-soft transition hover:border-emerald-400/50 hover:text-emerald-400"
          >
            <MessageCircle size={17} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-soft transition hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-soft/60">
        © {new Date().getFullYear()} Khawaja Faizan. Built with React, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
