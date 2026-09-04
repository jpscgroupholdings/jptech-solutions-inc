import React from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  description,
}) => (
  <Reveal className="max-w-reading">
    <p className="font-mono text-[10px] uppercase tracking-[2px] text-gray-400 mb-4">
      {number} — {label}
    </p>
    <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-foreground">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-gray-500">
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeader;
