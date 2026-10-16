import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, Utensils, ChevronRight, Award } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import chefLogo from '../assets/restaurant/restaurant_logo_chef.png';

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'banquet', label: 'Banquet Hall' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo with Official Chef Mascot */}
        <a 
          href="#home" 
          className="brand-logo-link"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <div className="brand-logo-wrapper" title="Sri Sampradaya Restaurant Official Logo">
            <img 
              src={chefLogo} 
              alt="Sri Sampradaya Family Restaurant Chef Logo" 
              className="brand-logo-img"
            />
          </div>
          <div className="brand-text-block">
            <span className="brand-name-sub">Family Restaurant</span>
            <span className="brand-name-main">SRI SAMPRADAYA</span>
            <span className="brand-name-place">Jagtial &bull; Banquet Hall</span>
          </div>
        </a>


        {/* Desktop Nav Links */}
        <ul className="nav-links-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop">
          <a href={restaurantData.contact.phoneTel} className="nav-phone-btn" title="Call Restaurant">
            <Phone size={15} />
            <span>{restaurantData.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="brand-logo-wrapper" style={{ width: '42px', height: '42px' }}>
                  <img 
                    src={chefLogo} 
                    alt="Sri Sampradaya Restaurant Logo" 
                    className="brand-logo-img"
                  />
                </div>
                <div className="brand-text-block">
                  <span className="brand-name-sub">Family Restaurant</span>
                  <span className="brand-name-main" style={{ fontSize: '1.15rem' }}>SRI SAMPRADAYA</span>
                </div>
              </div>
              <button 
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} color="var(--color-gold)" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <a href={restaurantData.contact.phoneTel} className="btn btn-burgundy" style={{ width: '100%' }}>
                <Phone size={16} />
                <span>Call Us</span>
              </a>
              <a 
                href={restaurantData.contact.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp" 
                style={{ width: '100%' }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
