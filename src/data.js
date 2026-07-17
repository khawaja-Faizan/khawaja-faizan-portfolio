export const CONTACT = {
  name: "Khawaja Faizan",
  role: "Senior Frontend Developer",
  tagline: "React.js · Next.js · TypeScript",
  email: "khawajafaizan040@gmail.com",
  phoneDisplay: "+92 316 4550067",
  whatsapp: "923164550067",
  location: "Lahore, Pakistan",
  availability: "Open to Remote / International Roles",
  cvFile: "/Khawaja-Faizan-CV.pdf",
};

export const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "13+", label: "Production Apps Shipped" },
  { value: "10+", label: "SaaS Products in One Ecosystem" },
  { value: "3", label: "Countries Served (UK, EU, PK)" },
];

export const SKILL_GROUPS = [
  {
    title: "Core",
    skills: ["React.js (17+)", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Tailwind CSS"],
  },
  {
    title: "State & Data",
    skills: ["Redux / Redux Toolkit", "Redux-Saga", "Zustand", "TanStack Query", "TanStack Table", "REST APIs", "GraphQL"],
  },
  {
    title: "Real-time",
    skills: ["WebSockets", "Socket.IO", "Server-Sent Events", "Firebase", "LiveKit (video)"],
  },
  {
    title: "UI Systems",
    skills: ["Ant Design", "Material UI", "React Flow", "Dynamic Forms", "dnd-kit", "react-beautiful-dnd"],
  },
  {
    title: "Integrations",
    skills: ["Stripe Payments", "Google Maps / Leaflet", "next-auth", "reCAPTCHA", "i18n (next-i18next)", "PostHog Analytics"],
  },
  {
    title: "Practices",
    skills: ["Performance Optimization", "Reusable UI Systems", "Code Reviews", "Responsive Design", "Git / GitHub", "Jira", "Vite"],
  },
];

export const MARQUEE_SKILLS = [
  "React.js", "Next.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query",
  "GraphQL", "Socket.IO", "LiveKit", "Stripe", "Tailwind CSS", "Ant Design",
  "Material UI", "Firebase", "SSE", "Google Maps", "Vite", "SCSS",
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer → Senior Frontend Developer",
    company: "Selteq Solutions",
    period: "2024 – Present",
    points: [
      "Promoted to Senior Frontend Developer based on performance and ownership of multiple production products.",
      "Core frontend engineer across the Plexaar SaaS ecosystem — 10+ interconnected apps covering onboarding, scheduling, quotations, shift management, dynamic forms, and centralized authentication.",
      "Built configurable workflow engines, dynamic form systems, and multi-tenant admin panels used by live businesses.",
      "Implemented real-time features across products: WebSockets, Server-Sent Events, Firebase, and LiveKit-based video consultations.",
      "Worked with cross-domain single sign-on (SSO), device fingerprinting, and secure session handling across multiple subdomain apps.",
      "Led performance optimization, code reviews, and reusable component architecture across projects.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Hazelsoft",
    period: "2021 – 2023",
    points: [
      "Developed responsive web applications with React.js, Redux, JavaScript, HTML/CSS, and SASS.",
      "Built reusable UI components, integrated REST APIs, and implemented Redux-based state management.",
      "Delivered kiosk-management and restaurant-booking admin platforms for international clients.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Calendex",
    subtitle: "Booking & Scheduling Platform",
    org: "Selteq",
    featured: true,
    stack: ["React.js", "Redux Toolkit", "Redux-Saga", "Socket.IO", "LiveKit", "Firebase", "Google Maps", "Chart.js"],
    points: [
      "Full-featured appointment scheduling platform with day/week/month calendar views, drag-and-drop rescheduling, and staff/service management.",
      "LiveKit-powered in-app video consultations plus Socket.IO live booking updates and chat.",
      "Payment card capture with validation, analytics dashboards, and map-based provider discovery.",
    ],
  },
  {
    name: "Expert.net",
    subtitle: "Service Marketplace & Consultation Platform",
    org: "Selteq",
    featured: true,
    stack: ["Next.js", "TypeScript", "GraphQL", "Stripe", "next-auth", "Socket.IO", "LiveKit", "i18n", "PostHog"],
    points: [
      "Customer-facing marketplace in Next.js + TypeScript with SSR for SEO-critical pages.",
      "Stripe payments, next-auth authentication, and multi-language support via next-i18next.",
      "Real-time chat and video-consultation flows with product analytics via PostHog.",
    ],
  },
  {
    name: "Onboarding",
    subtitle: "Onboarding & Business Collaboration Platform",
    org: "Selteq",
    featured: true,
    stack: ["React.js", "Redux", "Ant Design", "REST APIs", "WebSockets"],
    points: [
      "Configurable SaaS onboarding engine: multi-step flows, dynamic forms, and conditional branching driven by user responses.",
      "Multi-tenant admin panel managing workflows, applicants, employee statuses, and B2B collaboration/verification flows.",
      "Nested dynamic forms with document uploads, validations, and configurable question types.",
    ],
  },
  {
    name: "GoQuote",
    subtitle: "Real-time Quotation & Negotiation Platform",
    org: "Selteq",
    featured: true,
    stack: ["React.js", "Redux", "SSE", "Socket.IO", "Firebase", "Ant Design"],
    points: [
      "Collaborative quotation creation and negotiation with instant sync via Server-Sent Events.",
      "Dynamic pricing, taxes, custom calculations, interactive quote tables, and on-the-fly service creation.",
    ],
  },
  {
    name: "Shift Management",
    subtitle: "Staff Rota & Scheduling System",
    org: "Selteq",
    stack: ["React.js", "Redux Toolkit", "Ant Design", "Material UI"],
    points: [
      "Shift planning, staff assignment, and schedule management interfaces with complex date/time handling.",
    ],
  },
  {
    name: "Expert Admin",
    subtitle: "Marketplace Operations Panel",
    org: "Selteq",
    stack: ["React.js", "Redux Toolkit", "dnd-kit", "Google Charts", "Google Maps", "Jodit"],
    points: [
      "Operations panel with rich-text content management, drag-and-drop ordering, KPI dashboards, and geo-visualization.",
    ],
  },
  {
    name: "Accounts & SSO",
    subtitle: "Centralized Authentication Portal",
    org: "Selteq",
    stack: ["React.js", "Redux-Saga", "Cross-domain Storage", "FingerprintJS"],
    points: [
      "Central login/accounts app providing cross-domain single sign-on across the product suite, with device fingerprinting and session security.",
    ],
  },
  {
    name: "FormBiz",
    subtitle: "Dynamic Form Builder",
    org: "Selteq",
    stack: ["React.js", "Vite", "Redux-Saga", "Signature Canvas"],
    points: [
      "Dynamic business-form rendering with e-signature capture and multi-environment deployment.",
    ],
  },
  {
    name: "Expert Medical & London Laser",
    subtitle: "Clinic Booking Websites (UK)",
    org: "Selteq",
    stack: ["Next.js", "React Hook Form", "Socket.IO", "Leaflet"],
    points: [
      "SEO-optimized Next.js websites for UK healthcare clients with appointment booking, live chat, and location services.",
    ],
  },
  {
    name: "Unixfor",
    subtitle: "Kiosk Management System",
    org: "Hazelsoft",
    stack: ["React.js", "Redux", "TanStack Table", "Google Maps API"],
    points: [
      "Kiosk monitoring platform with advanced data tables (filtering, sorting, real-time data) and map-based machine status visualization.",
    ],
  },
  {
    name: "FullRail",
    subtitle: "Restaurant Booking Admin Platform",
    org: "Hazelsoft",
    stack: ["React.js", "Redux", "Material UI"],
    points: [
      "UK restaurant booking admin with a drag-and-drop, flow-based engine letting restaurants customize booking workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Associate Degree in Computer Science (ADCS)",
    school: "Superior University",
    period: "2019 – 2021",
    detail: "CGPA 3.10",
  },
];

export const CERTIFICATES = [
  { name: "Full Stack Development — MERN Stack", issuer: "Nexus Berry", year: "2021" },
  { name: "Next.js & React — The Complete Guide", issuer: "Udemy" },
];

export const HIGHLIGHTS = [
  {
    title: "Workflow & Form Engines",
    text: "Configurable onboarding flows, conditional branching, nested dynamic forms, drag-and-drop workflow builders — the hard, data-driven UI work.",
  },
  {
    title: "Real-time Applications",
    text: "Live chat, video consultations, instant quote sync and booking updates using WebSockets, SSE, Firebase, and LiveKit.",
  },
  {
    title: "Multi-tenant SaaS",
    text: "Admin panels, role-based access, cross-domain SSO, and secure session handling across a 10+ app product ecosystem.",
  },
];
