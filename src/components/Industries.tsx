import React from "react";
import { INDUSTRIES } from "@/data/siteContent";
import Reveal from "./Reveal";

const Industries: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="chip-gold rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[2px]" style={{ color: "hsl(var(--gold-foreground))" }}>
              Industries
            </span>
          </div>
          <h2 className="display-md text-foreground max-w-2xl mb-6">
            From fintech to food service — we build for your sector.
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-12">
            Our engineering depth spans regulated industries, high-volume retail,
            and everything in between. We learn your domain fast and build
            accordingly.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center rounded-full border border-gray-200 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.5px] text-gray-500 hover:border-gray-400 hover:text-foreground transition-colors duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;
