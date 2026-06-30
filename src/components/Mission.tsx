import React from 'react';
import Reveal from './Reveal';

const Mission: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 dark:bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Our Mission</p>
          <p className="mt-8 text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.2rem] lg:leading-[1.3]">
            To empower organizations through innovative technology solutions that simplify
            operations, enhance productivity, and drive sustainable business growth.
          </p>
          <div className="mx-auto mt-10 h-px w-24 bg-blue-500/60" />
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
