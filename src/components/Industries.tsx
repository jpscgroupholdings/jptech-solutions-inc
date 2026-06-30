import React from 'react';
import { INDUSTRIES } from '@/data/siteContent';
import { INDUSTRY_ICONS } from './icons';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="bg-slate-50 dark:bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Expertise Across Sectors"
          description="We bring tailored technology solutions to organizations of every kind, in every industry."
          center
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((industry, i) => {
            const Icon = INDUSTRY_ICONS[industry];
            return (
              <Reveal
                key={industry}
                delay={(i % 5) * 60}
                className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-blue-600">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <span className="text-sm font-medium leading-snug text-slate-700 dark:text-slate-300">
                  {industry}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
