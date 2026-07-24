import React from 'react';
import { COMPANY, PRIVACY_POLICY, CONTACT } from '@/data/siteContent';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: July {new Date().getDate()}, {year}
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {COMPANY.shortName} ("we", "us", or "our") is committed to protecting your privacy.
          This policy explains how we collect, use, and safeguard your information when you
          visit our website or engage our services.
        </p>

        <div className="mt-10 space-y-8">
          {PRIVACY_POLICY.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            For questions about this policy, contact us at{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-blue-600 hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
