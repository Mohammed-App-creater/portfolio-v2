import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/coachingCrm.png" alt="CoachHQ CRM" />
            </div>
            <div className="text-content">
              <h2>
                CoachHQ — A Full-Stack CRM Powering £10M+ in Coaching Payments
              </h2>
              <p className="text-white-50 md:text-xl">
                Django REST Framework, PostgreSQL, Redis, and Celery on the backend; Next.js 14 with
                TypeScript, TanStack Query, Tailwind, and Radix UI on the frontend — with Stripe billing
                and a dozen third-party integrations.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/analytticsProject%20.png"
                  alt="Analytics AI for SaaS"
                />
              </div>
              <h2>Analytics AI — RAG + LangGraph Insights for Salon & Spa SaaS</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-black">
                <img src="/images/3dPortfoliaow.png" alt="3D Portfolio" />
              </div>
              <h2>3D Portfolio — Interactive Developer Site with React & Three.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;