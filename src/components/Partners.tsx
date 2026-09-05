import React from "react";
import { PARTNERS } from "@/data/siteContent";
import Reveal from "./Reveal";

const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label text-primary-light mb-6">
            Technology & Strategic Partners
          </p>
          <h2 className="display-md text-foreground max-w-3xl">
            We work with leading technology providers to deliver reliable and
            scalable solutions across cloud, AI, connectivity, and digital
            services.
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20 grid gap-px bg-gray-200 sm:grid-cols-2">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 70}>
              <div className="group bg-background p-8 sm:p-10 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-50">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 h-2 w-2 rounded-full chip-gold" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-[-0.01em]">
                      {partner.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-md">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
