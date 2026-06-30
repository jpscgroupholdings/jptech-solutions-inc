import React from 'react';
import { WHY_CHOOSE_US } from '@/data/siteContent';
import { FEATURE_ICONS } from './icons';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-white dark:bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A Partner Built for the Long Term"
          description="We combine technical depth with a partnership mindset to deliver solutions that endure."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((feature, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <Reveal
                key={feature.title}
                delay={(i % 3) * 80}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-7 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-blue-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
