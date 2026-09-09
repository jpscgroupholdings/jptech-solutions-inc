import React from "react";
import { SERVICES } from "@/data/siteContent";
import Reveal from "./Reveal";

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-40 gradient-section">
      <div className="px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label text-primary-light mb-6">01 — Services</p>
          <h2 className="display-lg text-foreground max-w-4xl">
            From custom systems
            <br />
            <span className="text-primary">
              to managed services.
            </span>
          </h2>
          <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-xl">
            We develop and integrate technology around the specific needs of
            each business — from custom-built systems and websites to HRIS,
            cloud infrastructure, AI solutions, and ongoing managed support.
          </p>
        </Reveal>

        <div className="mt-20 sm:mt-28 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 70}>
              <div className="group bg-background h-full p-8 sm:p-10 min-h-[300px] flex flex-col justify-between transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-50 hover:gradient-card-hover">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[2px] text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.5px] text-gray-400"
                    >
                      {item}
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

export default Services;
