const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "APIs", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "APIs", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Production Experience" },
  { value: 6, suffix: "", label: "Companies & Teams Shipped With" },
  { value: 10, suffix: "+", label: "Technologies in Daily Stack" },
  { value: 100, suffix: "%", label: "Remote-Ready & Ownership-Driven" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Ownership",
    desc: "Owning features from API design and database schemas through to the UI delivered in the browser.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI Engineering",
    desc: "Shipping production LLM systems with LangChain, LangGraph, RAG, and vector databases on top of OpenAI and Claude.",
  },
  {
    imgPath: "/images/time.png",
    title: "Remote-Ready Delivery",
    desc: "Async-first, clear communication, and reliable delivery across time zones  from Addis Ababa to your team.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Shipped a production analytics AI system end-to-end as the sole engineer — RAG over a vector DB, multi-step reasoning with LangGraph, and async streaming FastAPI services backed by OpenAI and Claude.",
    imgPath: "/images/logo-leoinnovate.png",
    logoPath: "/images/Leo-Logo.png",
    title: "AI Engineer — Leo Innovate",
    date: "March 2026",
    responsibilities: [
      "Built the platform's analytics AI system end-to-end, turning raw CRM and transaction data into natural-language business insights for salon and spa owners.",
      "Designed a RAG pipeline over a vector database to ground LLM responses in each business's historical clients, appointments, and revenue.",
      "Orchestrated multi-step reasoning with LangGraph for client retention analysis, peak-hour forecasting, and high-value client identification.",
      "Integrated OpenAI and Anthropic Claude via LangChain with structured outputs and tool/function calling, behind production FastAPI services with async + streaming endpoints.",
    ],
  },
  {
    review:
      "Contributing across the full stack of an all-in-one coaching SaaS that has processed £10M+ in client payments — Django REST + Next.js 14 with Stripe billing, Celery jobs, and dozens of third-party integrations.",
    imgPath: "/images/logo-coachhq.svg",
    logoPath: "/images/logo-coachhq.svg",
    logoBg: "bg-white",
    title: "Full Stack Developer — CoachHQ (hq.coach)",
    date: "March 2026 - Present",
    responsibilities: [
      "Contribute across the full stack of an all-in-one operating system for online coaches that has processed £10M+ in client payments.",
      "Build and maintain Django REST Framework APIs on PostgreSQL 15 with Redis caching and Celery + Celery Beat for billing, emails, integrations, and scheduled jobs.",
      "Develop Next.js 14 (App Router) features with TypeScript, React 18, TanStack Query, Tailwind, and Radix UI across the client-facing app and a separate admin frontend.",
      "Implemented Stripe subscription billing, signable PDF contracts via WeasyPrint, and secure file storage across AWS S3 and Cloudflare R2.",
      "Integrated third-party services including Slack, Calendly, Trainerize, Zapier, Google Maps, and Resend for transactional email.",
    ],
  },
  {
    review:
      "Owned cross-platform mobile apps and Express.js APIs end-to-end — from schema design and optimized PostgreSQL queries through CI/CD deployment.",
    imgPath: "/images/simba-tech.png",
    logoPath: "/images/simba-tech.png",
    logoBg: "bg-white",
    title: "Full Stack & Mobile Developer — Simba Tech",
    date: "January 2025 - Present",
    responsibilities: [
      "Built cross-platform mobile apps with React Native using a scalable component architecture and predictable state management.",
      "Designed and shipped RESTful APIs with Express.js on PostgreSQL, including schema design, optimized queries, auth, and validation.",
      "Collaborated through Git workflows and CI/CD pipelines, owning features from spec to deploy.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Mohammed took a vague analytics brief and turned it into a working AI system in weeks. He shipped the RAG pipeline, the LangGraph workflows, and the FastAPI endpoints himself — and the natural-language insights actually drove decisions for our salon owners.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Mohammed felt like having a senior engineer on the team. He owns features end-to-end — Django APIs, Next.js UI, Stripe billing, Celery jobs — without dropping handoffs. Rare combination of speed and care.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Mohammed is the engineer you want when the problem spans backend, frontend, and AI all at once. He picks up context fast, asks the right questions, and the code he ships is clean and well-documented. Highly recommend.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "We brought Mohammed in for a React Native build and he ended up shipping the Express + PostgreSQL backend too. Schema design, queries, auth — all solid. Remote collaboration was smooth from day one.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Mohammed's work on our coaching platform has been excellent. He's shipped Stripe subscriptions, signable PDF contracts, and a handful of integrations — and every PR has been thoughtful and well-tested.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Mohammed bridges product thinking and deep technical work better than most engineers I've hired. He understood our requirements, pushed back where it mattered, and delivered a platform that just works.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
