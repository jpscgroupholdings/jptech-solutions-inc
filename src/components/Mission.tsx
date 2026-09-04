import React from "react";
import Reveal from "./Reveal";
import HalftoneField from "./HalftoneField";

const Mission: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      <HalftoneField fade="radial" className="opacity-15" />

      <div className="relative px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="">
            <p className="micro-label mb-8">Our Mission</p>

            <p className="display-xl text-foreground">
              Build it right.
              <br />
              <span className="text-gray-300 dark:text-gray-700">
                Make it last.
              </span>
            </p>

            <div className="mt-24 grid gap-8 sm:grid-cols-2 max-w-4xl place-self-end">
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe technology should solve real problems — not create new
                ones. Every system we build is designed to scale, secured from day
                one, and maintained by the same team that wrote it.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Since 2018, we've helped over 50 organizations across Southeast
                Asia move off fragile legacy systems and onto infrastructure they
                can trust. No shortcuts. No black boxes. Just engineering that works.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
