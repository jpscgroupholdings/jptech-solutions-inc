import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HalftoneField from "@/components/HalftoneField";

const SOLUTIONS = [
  {
    id: "ai-marketing",
    title: "AI Marketing & Personalization",
    description:
      "Leverage AI-powered insights, audience understanding, personalization, and intelligent marketing technologies to create more relevant customer experiences and improve marketing performance.",
  },
  {
    id: "ai-content",
    title: "AI Content Creation",
    description:
      "Create engaging marketing content using AI-powered image, video, and audio generation technologies. Help businesses streamline creative production and scale their digital campaigns.",
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence & Analytics",
    description:
      "Turn business and customer data into actionable insights through intelligent analytics, data processing, and machine learning solutions.",
  },
  {
    id: "cloud-infrastructure",
    title: "AI & Cloud Infrastructure",
    description:
      "Build and scale digital applications with enterprise-grade cloud infrastructure, AI models, APIs, and computing solutions.",
  },
  {
    id: "business-solutions",
    title: "AI-Powered Business Solutions",
    description:
      "Integrate AI capabilities into business processes, applications, customer engagement, and digital services to drive innovation and efficiency.",
  },
];

const WHY_ITEMS = [
  "Powered by ByteDance Technology — Built on advanced technology and engineering expertise.",
  "AI-Driven Innovation — Access to modern AI models and intelligent solutions.",
  "Scalable Solutions — Technology designed to support businesses as they grow.",
  "Enhanced Customer Experiences — Enable smarter, more personalized digital interactions.",
  "Enterprise-Ready Technology — Solutions for business applications, infrastructure, and digital transformation.",
];

const BytePlus: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-blob-slow"
          style={{
            background: "hsla(218, 95%, 32%, 0.18)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-[40%] -left-40 w-[400px] h-[400px] rounded-full animate-blob-medium"
          style={{
            background: "hsla(40, 70%, 44%, 0.10)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-[80%] -right-48 w-[450px] h-[450px] rounded-full animate-blob-fast"
          style={{
            background: "hsla(218, 95%, 32%, 0.08)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
          <HalftoneField fade="bottom" className="opacity-20" />

          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full chip-gold animate-pulse-dot" />
                <p className="micro-label text-primary-light">
                  JP Technology × BytePlus
                </p>
              </div>

              <h1 className="display-lg text-foreground max-w-4xl">
                Powering Business Growth
                <br />
                <span className="text-gradient-brand">
                  Through AI and Innovation.
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-2xl">
                Advanced AI. Smarter Marketing. Intelligent Business Solutions.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#contact-byteplus"
                  className="inline-flex items-center rounded-xs btn-gradient-primary text-primary-foreground px-6 py-3 micro-label transition-all duration-200"
                >
                  Get Started
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
        <section className="py-20 sm:py-28 gradient-section">
          <div className="section-narrow px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-6" style={{ fontSize: "12px"}}>
                01 — About BytePlus
              </p>
              <h2 className="display-md text-foreground">
                Enterprise technology built on
                <br />
                <span className="text-primary">ByteDance's expertise.</span>
              </h2>
              <p className="mt-6 text-base text-gray-500 leading-relaxed">
                BytePlus is the enterprise technology arm built on ByteDance's
                advanced technology and engineering expertise. It provides
                businesses with innovative AI, cloud computing, data analytics,
                personalization, and digital solutions designed to enhance
                customer experiences, improve operational efficiency, and
                accelerate business growth.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                Through technologies developed from ByteDance's experience
                powering globally recognized digital platforms, BytePlus helps
                organizations transform the way they engage customers, manage
                data, and deliver digital experiences.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="py-20 sm:py-28">
          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-6" style={{ fontSize: "12px"}}>
                02 — Our BytePlus Solutions
              </p>
              <h2 className="display-md text-foreground max-w-3xl">
                AI-native cloud for
                <br />
                <span className="text-primary">enterprise growth.</span>
              </h2>
            </Reveal>

            <div className="mt-16 sm:mt-20 grid gap-px bg-white sm:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((solution, i) => (
                <Reveal key={solution.id} delay={i * 70}>
                  <div className="group bg-background h-full p-8 sm:p-10 min-h-[260px] flex flex-col transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-50 hover:gradient-card-hover">
                    <span className="font-mono text-[11px] uppercase tracking-[2px] text-gray-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground tracking-[-0.02em]">
                      {solution.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">
                      {solution.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why BytePlus ── */}
        <section className="py-20 sm:py-28 gradient-section">
          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-6" style={{ fontSize: "12px"}}>
                03 — Why BytePlus?
              </p>
              <h2 className="display-md text-foreground mb-12">
                Technology that scales
                <br />
                <span className="text-primary">with your ambition.</span>
              </h2>
            </Reveal>

            <div className="space-y-0">
              {WHY_ITEMS.map((item, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="flex items-start gap-4 py-5 border-b border-gray-200 last:border-0">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner section ── */}
        <section className="py-20 sm:py-28">
          <div className="section-content px-6 sm:px-10 lg:px-16">
            <Reveal>
              <p className="micro-label text-primary-light mb-6" style={{ fontSize: "12px"}}>
                04 — Your Technology Partner
              </p>
              <h2 className="display-md text-foreground mb-6">
                JP Technology Solutions —
                <br />
                <span className="text-primary">Your BytePlus Partner.</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                Through our partnership with BytePlus, JP Technology Solutions
                Inc. helps Philippine businesses explore, adopt, and implement
                advanced AI and digital technologies. From AI-powered marketing
                and content creation to cloud infrastructure, data intelligence,
                and business automation, we work with organizations to identify
                the right solutions for their business goals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="contact-byteplus"
          className="py-20 sm:py-28 gradient-cta overflow-hidden"
        >
          <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full gradient-orb-navy pointer-events-none" />

          <div className="section-content px-6 sm:px-10 lg:px-16 relative z-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full chip-gold animate-pulse-dot" />
                <p className="micro-label text-primary-light" style={{ fontSize: "12px"}}>Get Started</p>
              </div>
              <h2 className="display-md text-foreground">
                Ready to Transform Your
                <br />
                <span className="text-gradient-brand">Business with AI?</span>
              </h2>
              <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-xl">
                Discover how BytePlus technologies can help your business
                innovate, operate smarter, and grow faster. Let's build what's
                next. Contact JP Technology Solutions Inc. today.
              </p>

              <div className="mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xs btn-gradient-primary text-primary-foreground px-8 py-3.5 micro-label transition-all duration-200 group"
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

export default BytePlus;
