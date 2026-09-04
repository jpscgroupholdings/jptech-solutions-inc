import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/siteContent";
import Reveal from "./Reveal";

const FAQ: React.FC = () => {
  return (
    <section className="py-24 sm:py-40">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="micro-label mb-6">FAQ</p>
          <h2 className="display-lg text-foreground mb-14">
            Common
            <br />
            <span className="text-gray-300 dark:text-gray-700">questions.</span>
          </h2>
        </Reveal>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 50}>
              <FAQItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ item: { question: string; answer: string } }> = ({
  item,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-foreground leading-snug">
          {item.question}
        </span>
        <span className="shrink-0 mt-1 text-gray-400 group-hover:text-foreground transition-colors duration-200">
          {open ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500 pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
