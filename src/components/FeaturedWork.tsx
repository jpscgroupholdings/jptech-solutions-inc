import React from "react";
import { FEATURED_WORK } from "@/data/siteContent";
import Reveal from "./Reveal";

const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="inverted py-24 sm:py-40">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label mb-6">
            Featured Work
          </p>
          <h2 className="display-lg text-background max-w-3xl">
            Real projects.
            <br />
            <span className="text-gray-500">Real results.</span>
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-24 space-y-0">
          {FEATURED_WORK.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article
                className="py-10 sm:py-14 border-t border-gray-200 grid gap-6 lg:grid-cols-[1fr_2fr] items-start"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-gray-400">
                    {project.industry}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-background tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-relaxed mb-3 text-gray-500">
                    <span className="font-semibold text-background">Challenge: </span>
                    {project.challenge}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    <span className="font-semibold text-background">Result: </span>
                    {project.result}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="display-md text-background">
                          {m.value}
                        </p>
                        <p className="micro-label mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
