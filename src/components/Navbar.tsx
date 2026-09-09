import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/siteContent";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "bg-background" : "bg-transparent"}`}>
      <nav className="mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#top" aria-label="Home" className="flex items-center">
          <img
            src="/jptechlogo-nobg.png"
            alt="JP Technology Solutions Inc."
            className={`dark:invert transition-all duration-500 ease-out h-24 w-24
            `}
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="micro-label text-primary hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 ">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-xs btn-gradient-primary text-primary-foreground px-5 py-2.5 micro-label transition-all duration-200"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex h-10 w-10 items-center justify-center text-gray-400 hover:text-foreground transition-colors duration-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center text-gray-400 hover:text-foreground transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col justify-center h-full px-10 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display-lg text-foreground hover:text-primary-light transition-colors duration-200"
              >
                {link.label.toLowerCase()}
              </a>
            ))}
            <div className="mt-4 pt-8 border-t border-gray-200 flex flex-col gap-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xs btn-gradient-primary text-primary-foreground px-8 py-3 micro-label transition-all duration-200"
              >
                Let's Talk
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
