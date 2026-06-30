import React from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description, center }) => (
  <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
    )}
  </Reveal>
);

export default SectionHeader;
