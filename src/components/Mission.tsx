import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import HalftoneField from "./HalftoneField";

const Mission: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      <HalftoneField fade="radial" className="opacity-15" />

      <div className="relative px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="">
            <p className="micro-label text-primary-light mb-8">Our Mission</p>

            <p className="display-xl text-foreground">
              Build it right.
              <br />
              <span className="text-primary">
                Make it last.
              </span>
            </p>

            <div className="mt-24 grid gap-8 sm:grid-cols-2 max-w-4xl place-self-end">
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe technology should solve real problems — not create new
                ones. Every system we build is designed to scale, secured from day
                one, and maintained by the same team that wrote it.
              </p>
              <div className="flex flex-col justify-between gap-8">
                <p className="text-lg text-gray-500 leading-relaxed">
                  Since 2018, we've helped over 50 organizations across Southeast
                  Asia move off fragile legacy systems and onto infrastructure they
                  can trust. No shortcuts. No black boxes. Just engineering that works.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 chip-gold rounded-full px-6 py-3 micro-label text-primary-foreground w-fit hover:opacity-90 transition-opacity duration-200"
                >
                  Work with us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
