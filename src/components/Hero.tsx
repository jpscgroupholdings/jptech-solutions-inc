import React from "react";
import HalftoneField from "./HalftoneField";
import { STATS } from "@/data/siteContent";
import { ConstellationArt } from "./SVGArt";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end pt-16 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <ConstellationArt />
      </div>

      <HalftoneField fade="bottom" className="opacity-30" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 rounded-full chip-gold animate-pulse-dot" />
          <p className="micro-label text-primary-light">Available for new projects — Q4 2026</p>
        </div>

        <h1 className="display-xl text-primary">
          technology
          <br />
          that
          <span className="text-gold-light"> works.</span>
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <p className="text-lg sm:text-xl text-primary/60 leading-relaxed max-w-lg">
            Cloud, custom platforms, AI, and security — built end-to-end by one
            team that actually cares about your operations.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 micro-label hover:opacity-90 transition-opacity duration-200"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="micro-label text-primary-light hover:text-gold transition-colors duration-200 underline decoration-gold-light hover:decoration-gold underline-offset-[3px]"
            >
              See what we do ↗
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px bg-primary-light/60">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-background py-5 sm:py-6 text-center"
            >
              <p
                className={`display-md text-primary`}
              >
                {stat.value}
              </p>
              <p className="micro-label text-primary-light mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-px w-16 bg-primary-light" />
          <span className="micro-label text-primary-light">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
