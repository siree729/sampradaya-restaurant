import React from 'react';
import { Utensils, MapPin, Sparkles, Users, PartyPopper, ChefHat } from 'lucide-react';
import heroExterior from '../assets/restaurant/hero_exterior_night.png';

export default function Hero({ onNavigate }) {
  return (
    <header id="home" className="hero-section">
      {/* Authentic Restaurant Exterior Background Image */}
      <img
        src={heroExterior}
        alt="Sri Sampradaya Family Restaurant and Banquet Hall illuminated exterior facade at night"
        className="hero-background-img"
        loading="eager"
      />
      <div className="hero-gradient-overlay" />

      <div className="container hero-content-box">
        {/* Welcome Badge */}
        <div className="section-badge on-dark">
          <Sparkles size={14} color="var(--color-gold)" />
          <span>Welcome to Sri Sampradaya &bull; Jagtial</span>
        </div>

        {/* Main Heading as requested in prompt */}
        <h1 className="hero-tagline-title">
          A Taste of Tradition, <span>A Feast of Flavours</span>
        </h1>

        {/* Subtitle / Intro */}
        <p className="hero-description">
          Experience authentic culinary heritage in Jagtial with royal Hyderabadi biryanis, 
          sizzling tandoori grills, savory Chinese delights, private family dining cabins, and 
          a grand banquet hall for life’s special celebrations.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button
            onClick={() => onNavigate('menu')}
            className="btn btn-primary"
            aria-label="Explore restaurant menu"
          >
            <Utensils size={18} />
            <span>Explore Our Menu</span>
          </button>
        </div>

        {/* Feature Highlights Bar */}
        <div className="hero-features-bar">
          <div className="hero-feature-item">
            <div className="hero-feature-icon">
              <Users size={22} />
            </div>
            <span className="hero-feature-label">Family Dining Cabins</span>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon">
              <ChefHat size={22} />
            </div>
            <span className="hero-feature-label">Royal Dum Biryani</span>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon">
              <PartyPopper size={22} />
            </div>
            <span className="hero-feature-label">Grand Banquet Hall</span>
          </div>

          <div className="hero-feature-item">
            <div className="hero-feature-icon">
              <Utensils size={22} />
            </div>
            <span className="hero-feature-label">Outdoor Catering</span>
          </div>
        </div>
      </div>
    </header>
  );
}
