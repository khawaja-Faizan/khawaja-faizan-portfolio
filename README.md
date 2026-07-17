# Khawaja Faizan — Portfolio

Personal portfolio website for Khawaja Faizan, Senior Frontend Developer (React.js · Next.js · TypeScript).

## Stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`)
- **Framer Motion** — scroll reveals and animations
- **EmailJS** (`@emailjs/browser`) — contact form delivery to Gmail, no backend needed
- **lucide-react** — icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

All content (projects, skills, experience, contact info) lives in one file: `src/data.js`.
Edit it and the whole site updates — no need to touch components.

## EmailJS

Contact form credentials are in `src/emailjs.config.js` (service, template, public key).
The template expects these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`.
Manage at [dashboard.emailjs.com](https://dashboard.emailjs.com/).

## WhatsApp

The floating button and contact links use `wa.me/923164550067` with a pre-filled message.
Number is configured in `src/data.js` (`CONTACT.whatsapp`).

## CV download

The download buttons serve `public/Khawaja-Faizan-CV.pdf`. Replace that file to update the CV.

## Deploy

Ready for Vercel/Netlify — just connect the repo, framework preset "Vite".
