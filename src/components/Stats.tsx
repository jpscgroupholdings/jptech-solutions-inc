import React from "react";
import { STATS } from "@/data/siteContent";
import Reveal from "./Reveal";

const Stats: React.FC = () => {
  return (
    <section className="inverted py-20 sm:py-28">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="text-center py-10 sm:py-14">
                <p className="display-lg text-background">
                  {stat.value}
                </p>
                <p className="micro-label mt-3" style={{ color: "hsl(var(--gray-500))" }}>
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
