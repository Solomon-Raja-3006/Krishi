import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Diagnose from './components/Diagnose';
import Screenshots from './components/Screenshots';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import { ShepherdTour } from './components/ShepherdTour';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Diagnose />
        <Screenshots />
        <TechStack />
        <HowItWorks />
        <GetStarted />
        <Contribute />
      </main>
      <Footer />
      <ShepherdTour />
    </div>
  );
}

export default App;