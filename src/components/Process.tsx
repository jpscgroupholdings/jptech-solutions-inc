import React from 'react';
import { PROCESS_STEPS } from '@/data/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white dark:bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="A Proven Delivery Process"
          description="A structured, transparent methodology that takes your project from concept to continuous success."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 dark:bg-slate-800 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 90} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white dark:bg-slate-950 text-sm font-bold text-blue-600">
                  {step.step}
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
