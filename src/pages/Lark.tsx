import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HalftoneField from "@/components/HalftoneField";

const SOLUTIONS = [
  {
    id: "messenger",
    title: "Lark Messenger",
    description:
      "Centralize team communication through instant messaging, group chats, announcements, and integrated collaboration tools.",
  },
  {
    id: "docs-drive",
    title: "Lark Docs & Drive",
    description:
      "Create, share, manage, and collaborate on documents, spreadsheets, and files in one secure digital workspace.",
  },
  {
    id: "base",
    title: "Lark Base",
    description:
      "Build customized business applications, databases, project trackers, CRM systems, and automated workflows without complex coding.",
  },
  {
    id: "workflow-hr",
    title: "Workflow & HR Management",
    description:
      "Streamline employee attendance, leave applications, approvals, requests, and other business processes through digital workflows.",
  },
];

const WHY_ITEMS = [
  "All-in-One Workspace — Essential business tools in one integrated platform.",
  "Improved Productivity — Reduce time spent switching between applications.",
  "Seamless Collaboration — Connect employees, teams, and departments.",
  "Workflow Automation — Minimize repetitive manual tasks.",
  "Flexible & Scalable — Adapt the platform to your organization's needs.",
  "AI-Powered Productivity — Enhance everyday work with intelligent features.",
];

const Lark: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full animate-blob-slow"
          style={{
            background: "hsla(218, 95%, 32%, 0.16)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-[35%] -right-40 w-[420px] h-[420px] rounded-full animate-blob-medium"
          style={{
            background: "hsla(40, 70%, 44%, 0.10)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-[75%] -left-48 w-[400px] h-[400px] rounded-full animate-blob-fast"
          style={{
            background: "hsla(218, 95%, 32%, 0.08)",
            filter: "blur(95px)",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-28 overflow-hidden">
          <HalftoneField fade="bottom" className="opacity-20" />

          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full chip-gold animate-pulse-dot" />
                <p className="micro-label text-primary-light">
                  Digital One Solutions × Lark
                </p>
              </div>

              <h1 className="text-2xl sm:text-[clamp(2rem,5vw,3.5rem)] font-mono tracking-[-0.02em] leading-[1.1] text-foreground max-w-3xl">
                One Platform. Smarter
                <br />
                <span className="text-gradient-brand">
                  Collaboration. Greater Productivity.
                </span>
              </h1>

              <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                Bring your entire workplace together with Lark, an all-in-one
                digital workspace that connects people, processes, and
                information in one integrated platform. From team messaging and
                video conferencing to document management, project tracking, and
                workflow automation, Lark gives businesses the tools they need
                to work smarter, collaborate seamlessly, and get more done.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#contact-lark"
                  className="inline-flex items-center rounded-xs btn-gradient-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 micro-label transition-all duration-200"
                >
                  Request a Demo
                </a>
                <Link
                  to="/#partners"
                  className="micro-label text-primary-light hover:text-foreground transition-colors duration-200 underline decoration-gray-200 hover:decoration-foreground underline-offset-[3px]"
                >
                  ← Back to Partners
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-16 sm:py-28 gradient-section">
          <div className="section-narrow px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-4 sm:mb-6">
                01 — About Lark
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-[-0.02em] leading-[1.1] text-foreground">
                A modern workplace built for
                <br />
                <span className="text-primary">connected teams.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 leading-relaxed">
                Lark is a modern workplace collaboration platform designed to
                simplify business operations and improve organizational
                productivity. By combining essential workplace tools into a
                single ecosystem, Lark eliminates fragmented communication,
                reduces manual processes, and helps teams stay connected
                wherever they work.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
                Whether you're managing a growing team, coordinating projects,
                or streamlining companywide operations, Lark provides a
                centralized workspace to keep everyone aligned and productive.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="py-16 sm:py-28">
          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-4 sm:mb-6">
                02 — Our Lark Solutions
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-[-0.02em] leading-[1.1] text-foreground max-w-3xl">
                Everything your team needs,
                <br />
                <span className="text-primary">in one platform.</span>
              </h2>
            </Reveal>

            <div className="mt-12 sm:mt-20 grid gap-px bg-gray-200 sm:grid-cols-2">
              {SOLUTIONS.map((solution, i) => (
                <Reveal key={solution.id} delay={i * 70}>
                  <div className="group bg-background h-full p-6 sm:p-10 min-h-[200px] sm:min-h-[240px] flex flex-col transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-50 hover:gradient-card-hover">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-foreground tracking-[-0.02em]">
                      {solution.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Lark ── */}
        <section className="py-16 sm:py-28 gradient-section">
          <div className="section-narrow px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-4 sm:mb-6">
                03 — Why Choose Lark?
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-[-0.02em] leading-[1.1] text-foreground mb-8 sm:mb-12">
                Work smarter. Collaborate better.
                <br />
                <span className="text-primary">Grow together.</span>
              </h2>
            </Reveal>

            <div className="space-y-0">
              {WHY_ITEMS.map((item, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="flex items-start gap-3 sm:gap-4 py-4 sm:py-5 border-b border-gray-200 last:border-0">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner section ── */}
        <section className="py-16 sm:py-28">
          <div className="section-narrow px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-4 sm:mb-6">
                04 — Your Lark Solutions Partner
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-[-0.02em] leading-[1.1] text-foreground mb-4 sm:mb-6">
                Digital One Solutions Philippines —
                <br />
                <span className="text-primary">Your Lark Partner.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Through Digital One Solutions Philippines Inc., we help
                businesses modernize workplace collaboration and digital
                operations through Lark. Our services include solution
                consultation, platform implementation, workspace configuration,
                workflow customization, employee onboarding, and ongoing
                support. We help organizations move beyond disconnected tools
                and create a more connected, efficient, and productive digital
                workplace.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="contact-lark"
          className="py-16 sm:py-28 gradient-cta overflow-hidden"
        >
          <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full gradient-orb-navy pointer-events-none" />

          <div className="section-narrow px-6 sm:px-10 lg:px-16 relative z-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="h-2 w-2 rounded-full chip-gold animate-pulse-dot" />
                <p className="micro-label text-primary-light">Get Started</p>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono tracking-[-0.02em] leading-[1.1] text-foreground">
                Ready to Transform the Way
                <br />
                <span className="text-gradient-brand">Your Team Works?</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                Discover how Lark can simplify collaboration, automate
                workflows, and improve productivity across your organization.
                Work smarter. Collaborate better. Grow together. Contact us
                today for a personalized Lark consultation and demo.
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xs btn-gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 micro-label transition-all duration-200 group"
                >
                  Contact Us Today
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lark;
