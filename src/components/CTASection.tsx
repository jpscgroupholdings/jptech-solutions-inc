import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, Building2, CheckCircle2, CalendarClock } from 'lucide-react';
import Reveal from './Reveal';
import { BOOKING_URL } from '@/data/siteContent';

const CTASection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    try {
      await fetch('https://famous.ai/api/crm/6a38af8d8af6d3bdeee26bae/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name || undefined,
          phone: phone || undefined,
          sms_opt_in: smsOptIn === true,
          source: 'contact-form',
          tags: ['contact', 'consultation-request', company ? `company:${company}` : 'lead'],
        }),
      });
      setDone(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let's Build the Future Together
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Whether you need a custom business system, cloud infrastructure, AI-powered
              automation, or complete digital transformation services, JP Technology Solutions
              Inc. is ready to help your organization achieve its technology goals.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Transforming Ideas into Intelligent Solutions.',
                'Building Technology That Drives Business Growth.',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <CalendarClock className="h-4 w-4" />
                Book a Time
              </a>
            </div>
            <div className="mt-10 space-y-4 border-t border-slate-200 dark:border-slate-800 pt-8 text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-blue-600" /> info@jptechsolutions.com</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-blue-600" /> +1 (000) 000-0000</p>
              <p className="flex items-center gap-3"><Building2 className="h-4 w-4 text-blue-600" /> Business District, Suite 100</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-7 shadow-sm sm:p-8">
              {done ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">Thank you</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    We've received your request and will be in touch shortly to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Schedule a Consultation</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" value={name} onChange={setName} placeholder="Jane Doe" />
                    <Field label="Company" value={company} onChange={setCompany} placeholder="Acme Inc." />
                  </div>
                  <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@company.com" required />
                  <Field label="Phone number (optional)" type="tel" value={phone} onChange={setPhone} placeholder="+1 (555) 000-0000" />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      How can we help?
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <label className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                    <input
                      type="checkbox"
                      checked={smsOptIn}
                      onChange={(e) => setSmsOptIn(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Text me updates. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
                  </label>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Contact Us'}
                    {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, value, onChange, type = 'text', placeholder, required }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
    />
  </div>
);

export default CTASection;
