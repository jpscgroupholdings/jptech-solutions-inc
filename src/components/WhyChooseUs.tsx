import React from "react";
import { WHY_CHOOSE_US } from "@/data/siteContent";
import Reveal from "./Reveal";
import ConstellationDecor from "./ConstellationDecor";

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-24 sm:py-40">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="chip-gold rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[2px]" style={{ color: "hsl(var(--gold-foreground))" }}>
              02 — Why Us
            </span>
          </div>
          <h2 className="display-lg text-foreground max-w-3xl">
            Not a vendor.
            <br />
            <span className="text-primary">
              A partner.
            </span>
          </h2>
          <ConstellationDecor position="top-right"/>
          <p className="mt-12 text-base text-gray-500 leading-relaxed max-w-2xl">
            Most IT shops hand you a proposal and disappear into a backlog.
            We embed with your team, learn your operations, and stay accountable
            long after launch day.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-28 max-w-4xl">
          {WHY_CHOOSE_US.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <div className="group py-10 sm:py-14 border-t border-gray-200">
                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
                  <div className="flex items-center gap-2 pt-2 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full chip-gold" />
                    <span className="display-md text-gray-200 dark:text-gray-800 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-[-0.01em] leading-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-500 max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
