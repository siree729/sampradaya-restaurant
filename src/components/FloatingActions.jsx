import React from 'react';
import { MessageCircle, Phone, Utensils } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function FloatingActions({ onNavigate }) {
  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Action Button */}
      <a
        href={restaurantData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Sri Sampradaya Restaurant on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Mobile Sticky Quick Action Bottom Bar */}
      <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile quick actions">
        <a 
          href={restaurantData.contact.phoneTel} 
          className="mobile-bottom-btn"
          style={{ background: 'var(--color-burgundy-deep)', color: 'var(--color-gold-light)', border: '1px solid var(--color-gold-border)' }}
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        <button 
          onClick={() => onNavigate('menu')} 
          className="mobile-bottom-btn"
          style={{ background: 'linear-gradient(135deg, #E6C26E 0%, #C89938 100%)', color: '#170503' }}
        >
          <Utensils size={16} />
          <span>Our Menu</span>
        </button>

        <a 
          href={restaurantData.contact.whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bottom-btn"
          style={{ background: '#25D366', color: '#FFFFFF' }}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
