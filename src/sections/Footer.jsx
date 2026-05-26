const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Mohammed-App-creater",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.11v3.13c0 .31.21.67.79.56C20.71 21.39 24 17.08 24 12 24 5.73 18.77.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mahammed-ismail-28340a337",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mahammedismail160@gmail.com",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/Mohamed2364",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M22.05 2.69 2.4 10.27c-1.34.54-1.33 1.29-.24 1.62l5.04 1.57 11.66-7.36c.55-.34 1.05-.16.64.21l-9.44 8.53h-.01l.01.01-.35 5.18c.51 0 .74-.23 1.02-.51l2.46-2.39 5.1 3.77c.94.52 1.61.25 1.85-.87l3.34-15.74c.34-1.37-.51-2-1.43-1.6z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Built with React, Three.js & Tailwind</p>
        </div>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.name}
              className="icon"
            >
              {s.svg}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mohammed Ismail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;