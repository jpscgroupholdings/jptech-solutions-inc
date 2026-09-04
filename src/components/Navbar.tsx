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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#top" aria-label="Home" className="flex items-center gap-3">
          <img
            src="/jptechlogo-nobg.png"
            alt="JP Technology Solutions Inc."
            className="h-8 w-8 dark:invert"
          />
          <span className="hidden sm:inline micro-label">JPTech</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="micro-label hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 micro-label hover:opacity-80 transition-opacity duration-200"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex h-8 w-8 items-center justify-center text-gray-400"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 flex h-8 w-8 items-center justify-center text-gray-400"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col justify-center h-full px-10 gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display-lg text-foreground hover:text-gray-400 transition-colors"
              >
                {link.label.toLowerCase()}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
