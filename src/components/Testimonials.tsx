import React from "react";
import { TESTIMONIALS } from "@/data/siteContent";
import Reveal from "./Reveal";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-40 border-t border-t-gray-200">
      <div className="px-6 sm:px-10 lg:px-16 max-w-[90rem] mx-auto ">
        <Reveal>
          <p className="micro-label mb-6">What clients say</p>
          <h2 className="display-md text-foreground max-w-2xl mb-16 sm:mb-20">
            Don't take our word for it.
          </h2>
        </Reveal>

        <div className="grid gap-px bg-gray-200 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <blockquote className="bg-background p-8 sm:p-10 flex flex-col justify-between min-h-[320px]">
                <div>
                  <p className="text-lg sm:text-xl leading-relaxed text-foreground tracking-[-0.01em]">
                    "{t.quote}"
                  </p>
                </div>

                <footer className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="micro-label mt-1">
                    {t.role}, {t.company}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
