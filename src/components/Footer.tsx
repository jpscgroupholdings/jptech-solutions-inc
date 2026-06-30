import React from 'react';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '@/data/siteContent';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">JP</span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold text-white">JP Technology</span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide">SOLUTIONS INC.</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions that drive sustainable
              growth.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:border-blue-600 hover:text-blue-500 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
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
              <li>info@jptechsolutions.com</li>
              <li>+1 (000) 000-0000</li>
              <li>Business District, Suite 100</li>
              <li className="pt-2">
                <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} JP Technology Solutions Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
