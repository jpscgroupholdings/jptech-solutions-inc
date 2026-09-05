import React from "react";
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { COMPANY, SOCIAL_LINKS, NAV_LINKS, CONTACT } from "@/data/siteContent";
import { Link } from "react-router-dom";

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Email: Mail,
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 py-16 sm:py-20">
      <div className="section-content px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/jptechlogo-nobg.png"
                alt={COMPANY.name}
                className="h-8 w-8 dark:invert"
              />
              <span className="micro-label text-primary-light">{COMPANY.shortName}</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Enterprise technology partner delivering cloud infrastructure,
              custom software, AI automation, and managed IT services across
              Southeast Asia.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label] ?? Mail;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-foreground transition-all duration-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="micro-label text-primary-light mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="micro-label text-primary-light mb-4">Contact</p>
            <div className="space-y-3 text-sm text-gray-500">
              <a
                href={`mailto:${CONTACT.email}`}
                className="block hover:text-foreground transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
              <p>{CONTACT.phone}</p>
              <p>{CONTACT.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="micro-label text-primary-light">© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="micro-label text-primary-light hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="micro-label text-primary-light hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
