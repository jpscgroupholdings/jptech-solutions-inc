import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Industries from './Industries';
import Mission from './Mission';
import Process from './Process';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Mission />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
