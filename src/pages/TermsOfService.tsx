import React from "react";
import { COMPANY, TERMS_OF_SERVICE, CONTACT } from "@/data/siteContent";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

const TermsOfService: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 micro-label hover:text-foreground transition-colors duration-200"
        >
          <ArrowUpLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <p className="micro-label mt-12 mb-4">Legal</p>
        <h1 className="display-lg text-foreground">
          Terms of
          <br />
          Service
        </h1>
        <p className="mt-4 micro-label">
          Last updated: September {new Date().getDate()}, {year}
        </p>
        <p className="mt-8 text-base leading-relaxed text-gray-500 max-w-xl">
          These Terms of Service govern your use of the {COMPANY.shortName}{" "}
          website and services. Please read them carefully.
        </p>

        <div className="mt-16">
          {TERMS_OF_SERVICE.map((section, i) => (
            <div
              key={section.heading}
              className="py-8 border-t border-gray-200"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-gray-400 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold text-foreground">
                  {section.heading}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 pl-10">
                {section.body}
              </p>
            </div>
          ))}
          <div className="border-t border-gray-200" />
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Questions?{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-foreground underline decoration-gray-200 underline-offset-4 hover:decoration-foreground transition-colors duration-200"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
