
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBanner from './components/InfoBanner';
import About from './components/About';
import Projects from './components/Projects';
import ServicesGrid from './components/ServicesGrid';
import Brands from './components/Brands';
import Process from './components/Process';
import Maintenance from './components/Maintenance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <InfoBanner />
        <About />
        <Projects />
        <ServicesGrid />
        <Brands />
        <Process />
        <Maintenance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;