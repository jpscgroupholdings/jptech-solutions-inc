import React from "react";
import { CERTIFICATIONS } from "@/data/siteContent";
import Reveal from "./Reveal";

const TrustBar: React.FC = () => {
  return (
    <section className="border-y border-gray-200 py-8 sm:py-10">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <span className="micro-label text-primary-light shrink-0">Trusted & Certified</span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[11px] uppercase tracking-[0.5px] text-gray-400 flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse-dot" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustBar;
