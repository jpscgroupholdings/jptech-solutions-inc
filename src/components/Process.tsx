import React, { useRef, useState, useCallback } from "react";
import { PROCESS_STEPS } from "@/data/siteContent";
import Reveal from "./Reveal";

const FloatingSVGs: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Constellation cluster — top right */}
    <svg
      className="absolute top-[8%] right-[6%] w-52 h-52 animate-float-slow opacity-[0.07]"
      viewBox="0 0 200 200"
      fill="none"
    >
      <line x1="30" y1="40" x2="100" y2="70" stroke="white" strokeWidth="0.6" />
      <line
        x1="100"
        y1="70"
        x2="160"
        y2="30"
        stroke="white"
        strokeWidth="0.6"
      />
      <line
        x1="100"
        y1="70"
        x2="130"
        y2="150"
        stroke="white"
        strokeWidth="0.6"
      />
      <line
        x1="130"
        y1="150"
        x2="60"
        y2="170"
        stroke="white"
        strokeWidth="0.6"
      />
      <line
        x1="130"
        y1="150"
        x2="180"
        y2="130"
        stroke="white"
        strokeWidth="0.6"
      />
      <rect x="27" y="37" width="5" height="5" fill="white" opacity="0.8" />
      <rect x="97" y="67" width="5" height="5" fill="white" opacity="0.9" />
      <rect x="157" y="27" width="5" height="5" fill="white" opacity="0.7" />
      <rect x="127" y="147" width="5" height="5" fill="white" opacity="0.8" />
      <rect x="57" y="167" width="5" height="5" fill="white" opacity="0.6" />
      <rect x="177" y="127" width="5" height="5" fill="white" opacity="0.7" />
    </svg>

    {/* Hexagon — left middle */}
    <svg
      className="absolute top-[35%] left-[4%] w-32 h-32 animate-float-medium opacity-[0.05]"
      viewBox="0 0 120 120"
      fill="none"
    >
      <polygon
        points="60,10 105,35 105,85 60,110 15,85 15,35"
        stroke="white"
        strokeWidth="0.7"
      />
      <polygon
        points="60,25 90,42 90,78 60,95 30,78 30,42"
        stroke="white"
        strokeWidth="0.4"
        opacity="0.5"
      />
      <circle cx="60" cy="60" r="3" fill="white" opacity="0.4" />
    </svg>

    {/* Geometric diamond — bottom right */}
    <svg
      className="absolute bottom-[15%] right-[10%] w-40 h-40 animate-float-fast opacity-[0.06]"
      viewBox="0 0 150 150"
      fill="none"
    >
      <polygon
        points="75,10 140,75 75,140 10,75"
        stroke="white"
        strokeWidth="0.6"
      />
      <polygon
        points="75,35 115,75 75,115 35,75"
        stroke="white"
        strokeWidth="0.4"
        opacity="0.5"
      />
      <line
        x1="75"
        y1="10"
        x2="75"
        y2="140"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.3"
      />
      <line
        x1="10"
        y1="75"
        x2="140"
        y2="75"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.3"
      />
    </svg>

    {/* Scattered constellation dots — top left */}
    <svg
      className="absolute top-[18%] left-[12%] w-28 h-28 animate-float-medium opacity-[0.08]"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="15" cy="20" r="2" fill="white" />
      <circle cx="50" cy="10" r="1.5" fill="white" opacity="0.7" />
      <circle cx="80" cy="35" r="2.5" fill="white" opacity="0.5" />
      <circle cx="35" cy="55" r="1.5" fill="white" opacity="0.8" />
      <circle cx="70" cy="70" r="2" fill="white" opacity="0.6" />
      <circle cx="20" cy="85" r="1" fill="white" opacity="0.4" />
      <circle cx="90" cy="88" r="1.5" fill="white" opacity="0.5" />
      <line
        x1="15"
        y1="20"
        x2="50"
        y2="10"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="10"
        x2="80"
        y2="35"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.25"
      />
      <line
        x1="35"
        y1="55"
        x2="70"
        y2="70"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.2"
      />
    </svg>

    {/* Triangle wireframe — bottom left */}
    <svg
      className="absolute bottom-[25%] left-[8%] w-24 h-24 animate-float-slow opacity-[0.05]"
      viewBox="0 0 100 100"
      fill="none"
    >
      <polygon points="50,5 95,90 5,90" stroke="white" strokeWidth="0.6" />
      <polygon
        points="50,30 75,75 25,75"
        stroke="white"
        strokeWidth="0.3"
        opacity="0.5"
      />
      <circle cx="50" cy="5" r="2" fill="white" opacity="0.6" />
      <circle cx="95" cy="90" r="2" fill="white" opacity="0.6" />
      <circle cx="5" cy="90" r="2" fill="white" opacity="0.6" />
    </svg>

    {/* Orbit rings — center right */}
    <svg
      className="absolute top-[55%] right-[3%] w-44 h-44 animate-float-fast opacity-[0.04]"
      viewBox="0 0 160 160"
      fill="none"
    >
      <ellipse
        cx="80"
        cy="80"
        rx="70"
        ry="30"
        stroke="white"
        strokeWidth="0.5"
        transform="rotate(-20 80 80)"
      />
      <ellipse
        cx="80"
        cy="80"
        rx="55"
        ry="22"
        stroke="white"
        strokeWidth="0.4"
        opacity="0.6"
        transform="rotate(25 80 80)"
      />
      <circle cx="80" cy="80" r="3" fill="white" opacity="0.5" />
      <circle cx="145" cy="65" r="2" fill="white" opacity="0.4" />
      <circle cx="25" cy="95" r="1.5" fill="white" opacity="0.3" />
    </svg>
  </div>
);

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="inverted relative py-24 sm:py-40 overflow-hidden"
    >
      <FloatingSVGs />

      <div
        className="relative z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mouse.x * -4}px, ${mouse.y * -3}px)`,
        }}
      >
        <div className=" px-6 sm:px-10 lg:px-16">
          <Reveal>
            <p className="micro-label mb-6">03 — Our Approach</p>
            <h2 className="display-lg text-background">
              Understand → Design → Develop → Integrate → Deploy → Support
            </h2>
            <p className="mt-6 text-base leading-relaxed max-w-xl text-gray-500">
              We work closely with businesses to understand their operations,
              identify opportunities for improvement, develop the right
              technology, and continuously optimize it as the business grows.
            </p>
          </Reveal>

          <div className="mt-20 sm:mt-28 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step, i) => {
              const isHovered = hoveredStep === i;
              return (
                <Reveal key={step.step} delay={i * 70}>
                  <div
                    className="group relative py-8 sm:py-10 border-t flex items-start gap-6 sm:gap-10 cursor-default transition-all duration-300"
                    style={{ borderColor: "hsl(var(--gray-800))" }}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step number + glow indicator */}
                    <div className="relative shrink-0 pt-1">
                      <span
                        className="display-md tabular-nums transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? "hsl(var(--gold))"
                            : "hsl(var(--gray-700))",
                        }}
                      >
                        {step.step}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3
                          className="text-xl sm:text-2xl font-semibold text-background tracking-tight transition-transform duration-300"
                          style={{
                            transform: isHovered
                              ? "translateX(8px)"
                              : "translateX(0)",
                          }}
                        >
                          {step.title}
                        </h3>
                        <div
                          className="h-px transition-all duration-500 ease-out"
                          style={{
                            width: isHovered ? "40px" : "0px",
                            backgroundColor: "hsl(var(--gold))",
                          }}
                        />
                      </div>
                      <p
                        className="mt-2 text-base leading-relaxed max-w-md text-gray-500 transition-all duration-300"
                        style={{
                          transform: isHovered
                            ? "translateX(8px)"
                            : "translateX(0)",
                          opacity: isHovered ? 1 : 0.85,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow glyph on hover */}
                    <div
                      className="shrink-0 pt-2 transition-all duration-300"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered
                          ? "translateX(0) rotate(0deg)"
                          : "translateX(-8px) rotate(-10deg)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 16L16 4M16 4H7M16 4V13"
                          stroke="hsl(var(--gold))"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <div
              className="border-t"
              style={{ borderColor: "hsl(var(--gray-800))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
