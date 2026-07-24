import React from 'react';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { SERVICES, INDUSTRIES, CONTACT, COMPANY, SOCIAL_LINKS } from '@/data/siteContent';
import { Link } from 'react-router-dom';

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Email: Mail,
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label={`${COMPANY.shortName} home`}>
              <img
                src="/jptechlogo-nobg.png"
                alt={COMPANY.name}
                className="h-32 w-32"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label] ?? Mail;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:border-blue-600 hover:text-blue-500 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm hover:text-blue-400 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Industries</h4>
            <ul className="mt-4 space-y-2.5">
              {INDUSTRIES.slice(0, 8).map((ind) => (
                <li key={ind}>
                  <a href="#industries" className="text-sm hover:text-blue-400 transition-colors">{ind}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.address}</li>
              <li className="pt-2">
                <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
