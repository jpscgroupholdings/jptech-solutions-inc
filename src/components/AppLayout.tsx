import React from "react";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Services from "./Services";
import FeaturedWork from "./FeaturedWork";
import Partners from "./Partners";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Industries from "./Industries";
import TechStack from "./TechStack";
import Mission from "./Mission";
import Process from "./Process";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      {/* ── Mesh gradient blobs — page-spanning, brand-colored ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hero area */}
        <div
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full animate-blob-slow"
          style={{
            background: "hsla(218, 95%, 32%, 0.18)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-[40%] -left-40 w-[420px] h-[420px] rounded-full animate-blob-medium"
          style={{
            background: "hsla(40, 70%, 44%, 0.12)",
            filter: "blur(90px)",
          }}
        />

        {/* Services / Partners area */}
        <div
          className="absolute top-[85%] -right-48 w-[500px] h-[500px] rounded-full animate-blob-fast"
          style={{
            background: "hsla(218, 95%, 32%, 0.10)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-[110%] -left-32 w-[380px] h-[380px] rounded-full animate-blob-slow"
          style={{
            background: "hsla(40, 70%, 44%, 0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Why Us / Process area */}
        <div
          className="absolute top-[160%] right-[10%] w-[450px] h-[450px] rounded-full animate-blob-medium"
          style={{
            background: "hsla(219, 96%, 22%, 0.12)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-[180%] -left-48 w-[400px] h-[400px] rounded-full animate-blob-fast"
          style={{
            background: "hsla(218, 95%, 32%, 0.09)",
            filter: "blur(85px)",
          }}
        />

        {/* Mission / FAQ / CTA area */}
        <div
          className="absolute top-[240%] -right-36 w-[480px] h-[480px] rounded-full animate-blob-slow"
          style={{
            background: "hsla(40, 70%, 44%, 0.10)",
            filter: "blur(95px)",
          }}
        />
        <div
          className="absolute top-[260%] -left-24 w-[350px] h-[350px] rounded-full animate-blob-medium"
          style={{
            background: "hsla(218, 95%, 32%, 0.11)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Services />
        {/* <FeaturedWork /> */}
        <Partners />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        <Process />
        <Industries />
        {/* <TechStack /> */}
        <Mission />

        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
