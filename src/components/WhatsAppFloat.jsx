import { motion } from "framer-motion";
import { CONTACT } from "../data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Faizan! I found your portfolio and would like to discuss a project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.59-1.67a12.74 12.74 0 0 0 6.21 1.6h.01c7.06 0 12.79-5.74 12.79-12.8s-5.74-12.73-12.8-12.73zm0 23.39h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.86-.25-.4a10.55 10.55 0 0 1-1.63-5.64c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.11a10.57 10.57 0 0 1 3.11 7.52c0 5.87-4.77 10.59-10.64 10.59zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.3c.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </motion.a>
  );
}
