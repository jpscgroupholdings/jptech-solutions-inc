import React from "react";
import { PROCESS_STEPS } from "@/data/siteContent";
import Reveal from "./Reveal";

const Process: React.FC = () => {
  return (
    <section id="process" className="inverted py-24 sm:py-40">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label mb-6">
            03 — Process
          </p>
          <h2 className="display-lg text-background max-w-3xl">
            How we
            <br />
            deliver.
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-xl text-gray-500">
            No surprises. Every project follows the same six-phase framework —
            transparent milestones, regular demos, and a team that communicates
            in plain language.
          </p>
        </Reveal>

        <div className="mt-20 sm:mt-28 max-w-4xl">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 70}>
              <div
                className="group py-8 sm:py-10 border-t flex items-start gap-6 sm:gap-10"
                style={{ borderColor: "hsl(var(--gray-800))" }}
              >
                <span className="display-md text-gray-200 tabular-nums shrink-0 pt-0.5">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-background tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed max-w-md text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t" style={{ borderColor: "hsl(var(--gray-800))" }} />
        </div>
      </div>
    </section>
  );
};

export default Process;
