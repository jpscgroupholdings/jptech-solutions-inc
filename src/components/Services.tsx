import React from 'react';
import { Check } from 'lucide-react';
import { SERVICES } from '@/data/siteContent';
import { SERVICE_ICONS } from './icons';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-slate-50 dark:bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Technology Services"
          description="A full spectrum of capabilities designed to support your organization across its entire digital journey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id];
            return (
              <Reveal
                key={service.id}
                delay={(i % 3) * 80}
                className={`group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-md ${
                  service.extra ? '' : ''
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 ring-1 ring-blue-100 dark:ring-blue-900">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.extra && (
                  <div className="mt-5 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {service.extra.label}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {service.extra.values.map((v) => (
                        <span
                          key={v}
                          className="rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
