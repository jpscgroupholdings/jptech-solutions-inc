import React, { useState } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT } from "@/data/siteContent";

const CTASection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch(
        "https://famous.ai/api/crm/6a38af8d8af6d3bdeee26bae/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: name || undefined,
            phone: phone || undefined,
            sms_opt_in: smsOptIn === true,
            source: "contact-form",
            tags: [
              "contact",
              "consultation-request",
              company ? `company:${company}` : "lead",
            ],
          }),
        },
      );
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-40 gradient-cta overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full gradient-orb-navy pointer-events-none" />
      <div className="section-content px-6 sm:px-10 lg:px-16 relative z-10">
        <Reveal>
          <p className="micro-label text-primary-light mb-6">04 — Contact</p>
          <h2 className="display-lg text-foreground max-w-3xl">
            Let's build
            <br />
            <span className="text-gradient-brand">what's next.</span>
          </h2>
          <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-xl">
            Whether you need a new business system, website, HRIS, cloud
            infrastructure, or AI-powered solution — talk to our technology
            team and let's turn your requirements into technology that works.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-24 grid gap-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <p className="micro-label text-primary-light">Response Time</p>
                </div>
                <p className="text-base text-foreground">
                  Within 24 hours, guaranteed.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <p className="micro-label text-primary-light">Office</p>
                </div>
                <p className="text-base text-foreground">{CONTACT.address}</p>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <p className="micro-label text-primary-light">Direct</p>
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-base text-foreground underline decoration-gray-200 underline-offset-4 hover:decoration-foreground transition-colors duration-200 block"
                >
                  {CONTACT.email}
                </a>
                <p className="text-base text-foreground mt-1">
                  {CONTACT.phone}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="micro-label text-primary-light mb-2">Hours</p>
                <p className="text-sm text-gray-500">
                  Mon–Fri, 9:00am–6:00pm PHT
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Sat, 10:00am–2:00pm (by appointment)
                </p>
              </div>

              <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full chip-gold" />
                  <p className="font-mono text-[11px] uppercase tracking-[1px] text-gray-400">
                    Free Consultation
                  </p>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  30-minute discovery call. No commitment, no sales pitch — just
                  an honest conversation about what your business needs.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            {done ? (
              <div className="py-16">
                <p className="display-md text-foreground">Thank you.</p>
                <p className="mt-4 text-base text-gray-500 max-w-sm">
                  We've received your message and will be in touch within 24
                  hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field
                    label="Name"
                    value={name}
                    onChange={setName}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Company"
                    value={company}
                    onChange={setCompany}
                    placeholder="Acme Inc."
                  />
                </div>
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@company.com"
                  required
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder="+63 912 345 6789"
                />
                <div>
                  <label className="micro-label text-primary-light mb-3 block">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell us about your project — what are you trying to build, what's the timeline, what's the budget range..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <label className="flex items-center gap-3 micro-label text-primary-light cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsOptIn}
                    onChange={(e) => setSmsOptIn(e.target.checked)}
                    className="mt-1 h-3.5 w-3.5 rounded-xs border-gray-300"
                  />
                  Text me project updates. Msg & data rates may apply.
                </label>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full justify-center inline-flex items-center gap-3 rounded-xs btn-gradient-primary text-primary-foreground px-8 py-3.5 micro-label transition-all duration-200 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && (
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}> = ({ label, value, onChange, type = "text", placeholder, required }) => (
  <div>
    <label className="micro-label text-primary-light mb-3 block">{label}</label>
    <input
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
    />
  </div>
);

export default CTASection;
