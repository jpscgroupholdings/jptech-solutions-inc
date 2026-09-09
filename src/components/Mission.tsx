import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import HalftoneField from "./HalftoneField";
import { COMPANY } from "@/data/siteContent";

const Mission: React.FC = () => {
  return (
    <section className="relative py-32 sm:pt-48 overflow-hidden">
      <HalftoneField fade="radial" className="opacity-15" />

      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-32 w-[480px] h-[480px] rounded-full animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle, hsla(var(--primary), 0.10) 0%, hsla(var(--primary), 0.04) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-24 w-[360px] h-[360px] rounded-full animate-blob-medium"
          style={{
            background:
              "radial-gradient(circle, hsla(var(--gold), 0.08) 0%, hsla(var(--gold), 0.02) 45%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full animate-blob-fast"
          style={{
            background:
              "radial-gradient(circle, hsla(var(--foreground), 0.05) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Wavy lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-[18%] left-0 w-full h-48 opacity-[0.06] animate-float-slow"
          viewBox="0 0 1200 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,100 C150,40 350,160 550,100 C750,40 950,160 1250,100"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.2"
            className="wave-path"
          />
          <path
            d="M-50,120 C200,60 400,180 600,120 C800,60 1000,180 1250,120"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.8"
            opacity="0.6"
            className="wave-path"
          />
          <path
            d="M-50,140 C100,90 300,190 500,140 C700,90 900,190 1250,140"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            opacity="0.4"
            className="wave-path"
          />
        </svg>

        {/* Flowing curve — top area */}
        <svg
          className="absolute top-[12%] right-0 w-[60%] h-32 opacity-[0.04] animate-float-medium"
          viewBox="0 0 600 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M600,60 C450,10 300,110 150,60 C75,35 0,60 -20,80"
            stroke="hsl(var(--foreground))"
            strokeWidth="1"
            className="wave-path"
          />
        </svg>
      </div>

      {/* Floating rings */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-[20%] right-[15%] w-20 h-20 animate-float-slow opacity-[0.06]"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.8" />
          <circle cx="40" cy="40" r="18" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.5" />
        </svg>
        <svg
          className="absolute bottom-[30%] left-[10%] w-14 h-14 animate-float-fast opacity-[0.05]"
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle cx="30" cy="30" r="22" stroke="hsl(var(--foreground))" strokeWidth="0.7" />
        </svg>
        <svg
          className="absolute top-[55%] right-[6%] w-10 h-10 animate-float-medium opacity-[0.07]"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="14" stroke="hsl(var(--foreground))" strokeWidth="0.6" />
          <circle cx="20" cy="20" r="2" fill="hsl(var(--foreground))" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-16">
        <Reveal>
          <div className="">
            <p className="micro-label text-primary-light mb-8">
              Powered by Technology. Built for Business.
            </p>

            <p className="display-xl text-foreground">
              from custom
              <br />
              <span className="text-primary">systems to cloud.</span>
            </p>

            <div className="mt-24 grid gap-8 sm:grid-cols-2 max-w-6xl">
              <div className="flex flex-col justify-between gap-8">
                <p className="text-lg text-gray-500 leading-relaxed">
                  Whether you need a new business system, website, HRIS, cloud
                  infrastructure, or AI-powered solution,{" "}
                  <span className="text-foreground font-medium">
                    {COMPANY.shortName}
                  </span>{" "}
                  can help turn your business requirements into technology that
                  works.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 chip-gold-gradient rounded-full px-7 py-3.5 micro-label text-primary-foreground w-fit hover:shadow-[0_0_24px_hsla(var(--gold),0.3)] transition-all duration-300"
                >
                  Talk to Our Technology Team
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[hsl(var(--gold-foreground)/0.15)] group-hover:bg-[hsl(var(--gold-foreground)/0.25)] transition-colors duration-300">
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <a
                  href="mailto:info@jptechsolutions.com"
                  className="font-mono text-[10px] uppercase tracking-[1.5px] text-primary underline decoration-primary/25 underline-offset-[3px] hover:decoration-primary transition-all duration-200"
                >
                  or email us directly ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
