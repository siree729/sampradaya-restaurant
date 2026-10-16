import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import BanquetSection from './components/BanquetSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './styles/index.css';
import './styles/components.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'gallery', 'banquet', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        {/* Hero Section with actual exterior photo */}
        <Hero onNavigate={handleNavigate} />

        {/* Featured Best-sellers Preview */}
        <FeaturedDishes onNavigate={handleNavigate} />

        {/* About Restaurant & Family Cabins */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Full 20-Page Filterable Menu */}
        <MenuSection />

        {/* Banquet Hall & Catering Showcase */}
        <BanquetSection onNavigate={handleNavigate} />

        {/* Authentic 12-Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Location, Directions Map & Contact Form */}
        <ContactSection />
      </main>

      {/* Footer with Business & Agreement Details */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp and Mobile Quick Bar */}
      <FloatingActions onNavigate={handleNavigate} />
    </div>
  );
}
