import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, CalendarClock } from 'lucide-react';
import { HERO_IMAGE, BOOKING_URL } from '@/data/siteContent';

const trustStats = [
  { icon: ShieldCheck, label: 'Enterprise-Grade Security' },
  { icon: Zap, label: 'Scalable by Design' },
  { icon: BarChart3, label: 'Measurable Results' },
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-white dark:bg-slate-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Enterprise Technology Partner
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.4rem]">
            Empowering Businesses Through Technology
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            JP Technology Solutions Inc. delivers innovative digital solutions that help
            organizations streamline operations, improve productivity, and accelerate growth.
            From custom software and cloud technologies to AI-powered solutions and enterprise
            platforms, we provide the tools businesses need to succeed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <CalendarClock className="h-4 w-4" />
              Book a Time
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 dark:border-slate-800 pt-7">
            {trustStats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Icon className="h-4 w-4 text-blue-600" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-slate-100 dark:bg-slate-900 -z-10" />
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5">
            <img
              src={HERO_IMAGE}
              alt="Abstract enterprise technology network illustration"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
