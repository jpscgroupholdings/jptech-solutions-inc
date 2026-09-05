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
      <ScrollProgress />
      <Navbar />
      <main>
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
