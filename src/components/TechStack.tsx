import React from "react";
import { TECH_STACK } from "@/data/siteContent";
import Reveal from "./Reveal";

const TechStack: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label text-primary-light mb-6">Our Stack</p>
          <h2 className="display-md text-foreground max-w-2xl mb-14">
            Tools we trust.
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 70}>
              <div>
                <p className="micro-label text-primary-light mb-4">{cat.category}</p>
                <ul className="space-y-2.5">
                  {cat.tools.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2.5 text-sm text-gray-500"
                    >
                      <span className="h-px w-3 bg-gray-300 shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
