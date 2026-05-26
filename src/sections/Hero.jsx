import { words } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/models/HeroModels/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="">
                From
                <span className="slide">
                  <span className="wrapper lg:pt-6 md:pt-7.5 md:gap-8 lg:gap-6">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-4xl font-bold">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>to real projects delivering</h1>
              <h1>results that matter.</h1>
            </div>
            <p className="text-white-50 md:text-xl relative  z-10 pointer-events-none">
              Hi, I'm Mohammed a Full-Stack Developer & AI Engineer <br/>shipping production SaaS and LLM systems from Addis Ababa.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                className="md:w-60 md:h-18 w-48 h-12"
                id="counter"
                text="See my work"
              />
              <a
                href="/Mohammed_Ismail_Resume.docx"
                download
                className="cta-wrapper md:w-60 md:h-18 w-48 h-12"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">Download CV</p>
                  <div className="arrow-wrapper">
                    <img
                      src="/images/download.svg"
                      alt="download"
                      className="arrow"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/Mohammed-App-creater"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="size-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.11v3.13c0 .31.21.67.79.56C20.71 21.39 24 17.08 24 12 24 5.73 18.77.5 12 .5z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahammed-ismail-28340a337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
              <a
                href="mailto:mahammedismail160@gmail.com"
                aria-label="Email"
                className="size-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 6L2 7"/>
                </svg>
              </a>
              <a
                href="https://t.me/Mohamed2364"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="size-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M22.05 2.69 2.4 10.27c-1.34.54-1.33 1.29-.24 1.62l5.04 1.57 11.66-7.36c.55-.34 1.05-.16.64.21l-9.44 8.53h-.01l.01.01-.35 5.18c.51 0 .74-.23 1.02-.51l2.46-2.39 5.1 3.77c.94.52 1.61.25 1.85-.87l3.34-15.74c.34-1.37-.51-2-1.43-1.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>
        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
