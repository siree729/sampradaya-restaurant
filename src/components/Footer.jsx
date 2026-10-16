import React from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck, 
  Heart,
  Clock
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import chefLogo from '../assets/restaurant/restaurant_logo_chef.png';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div 
                className="brand-logo-wrapper"
                style={{ width: '56px', height: '56px' }}
                title="Sri Sampradaya Restaurant Official Logo"
              >
                <img 
                  src={chefLogo} 
                  alt="Sri Sampradaya Restaurant Official Logo" 
                  className="brand-logo-img"
                />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Family Restaurant
                </div>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-royal)', fontWeight: '800', color: 'white' }}>
                  SRI SAMPRADAYA
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--color-text-light)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
              "A Taste of Tradition, A Feast of Flavours" — Delivering authentic culinary heritage, 
              private family dining cabins, and grand celebrations in Jagtial, Telangana.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(213,173,88,0.2)', fontSize: '0.8rem', color: 'var(--color-gold-light)' }}>
              <div><strong>Owner:</strong> {restaurantData.owner}</div>
              <div><strong>GSTIN:</strong> {restaurantData.gstNumber}</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => { e.preventDefault(); onNavigate('menu'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>Grand Menu (200+ Items)</span>
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="#banquet" onClick={(e) => { e.preventDefault(); onNavigate('banquet'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>Banquet Hall & Catering</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="footer-link-item">
                  <ChevronRight size={14} color="var(--color-gold)" />
                  <span>Location & Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="footer-col-title">Visit & Connect</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '14px' }}>
              <strong style={{ color: 'white' }}>Sri Sampradaya Restaurant</strong><br />
              New Bus Stand Chowrasta, Karimnagar Rd, beside Water Tank, Vani Nagar, Jagtial, Telangana 505327
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <a href={restaurantData.contact.phoneTel} style={{ color: 'var(--color-gold-light)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                <Phone size={15} />
                <span>{restaurantData.contact.phoneDisplay}</span>
              </a>
              <a href={restaurantData.contact.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                <MessageCircle size={15} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Column 4: Hours & Policies */}
          <div>
            <h4 className="footer-col-title">Service Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--color-text-light)' }}>
              <div>
                <strong style={{ color: 'var(--color-gold-light)' }}>Timings (Tentative):</strong>
                <div>Open Daily 11:30 AM – 11:00 PM</div>
                <span style={{ fontSize: '0.74rem', color: '#888' }}>(Awaiting Owner Confirmation)</span>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                <strong style={{ color: 'var(--color-gold-light)' }}>Notice:</strong>
                <div>Fresh food takes 15–25 mins. Outside food, smoking & alcohol prohibited.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} Sri Sampradaya Family Restaurant and Banquet Hall. All rights reserved.
          </div>
          <div>
            Developed for Client <strong>Sheela Srinivas</strong> &bull; Jagtial, Telangana
          </div>
        </div>
      </div>
    </footer>
  );
}
