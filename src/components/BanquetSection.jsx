import React from 'react';
import { 
  PartyPopper, 
  UtensilsCrossed, 
  Users, 
  Sparkles, 
  CheckCircle,
  ShieldCheck,
  Music,
  AirVent,
  Award,
  ChevronRight
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import banquetConf from '../assets/restaurant/banquet_conference_event.png';
import banquetDining from '../assets/restaurant/banquet_dining_setup.png';
import banquetTables from '../assets/restaurant/banquet_round_tables.png';
import banquetBuffet from '../assets/restaurant/banquet_buffet_counter.png';

export default function BanquetSection({ onNavigate }) {
  const banquetFeatures = [
    {
      title: "Family Celebrations",
      tag: "Social Milestones",
      description: "Ideal for birthday bashes, anniversary dinners, engagement functions, and naming ceremonies with personalized festive decor and private dining setups.",
      icon: PartyPopper
    },
    {
      title: "Corporate Conferences",
      tag: "Business Meets",
      description: "Equipped for business seminars, dealer meets, presentation screenings, and executive banquets with full AV stage support and high-speed dining service.",
      icon: Users
    },
    {
      title: "Full Buffet Catering",
      tag: "Live Feasts",
      description: "Authentic multi-course live buffet spreads served piping hot with dedicated catering stewards, live counters, and signature biryanis.",
      icon: UtensilsCrossed
    }
  ];

  const highlights = [
    { label: "Spacious AC Banquet Hall", icon: AirVent },
    { label: "Stage & AV Presentation Setup", icon: Music },
    { label: "Authentic Multi-Course Buffets", icon: UtensilsCrossed },
    { label: "Professional Catering Stewards", icon: ShieldCheck }
  ];

  return (
    <section id="banquet" className="section-padding section-maroon-dark">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-badge on-dark">
            <Sparkles size={14} color="var(--color-gold-light)" />
            <span>Celebrations & Gatherings</span>
          </div>
          <h2 className="section-title on-dark">Grand Banquet Hall & Catering</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle on-dark">
            Celebrate life’s milestone moments at Sri Sampradaya’s dedicated banquet venue in Jagtial. 
            Enjoy traditional hospitality, tasteful decor, and signature feasts tailored to your guests.
          </p>
        </div>

        {/* Hero Showcase: 2 Balanced Columns with ZERO top gap */}
        <div className="banquet-hero-grid">
          {/* Main Banquet Image Card - Aligned flush with top */}
          <div className="banquet-main-card">
            <span className="banquet-main-badge-top">
              <Award size={14} />
              <span>Dedicated Banquet Venue</span>
            </span>
            <img
              src={banquetConf}
              alt="Sri Sampradaya Banquet Hall configured for an event with stage and audience seating"
              loading="lazy"
            />
            <div className="banquet-main-caption">
              <div style={{ color: 'var(--color-gold-light)', fontWeight: '700', fontSize: '1.05rem', marginBottom: '4px' }}>
                Event & Seminar Stage Setup
              </div>
              <div style={{ color: 'var(--color-cream-soft)', fontSize: '0.84rem' }}>
                Actual photograph of Sri Sampradaya Banquet Hall in Jagtial
              </div>
            </div>
          </div>

          {/* Details & Action Content */}
          <div className="banquet-info-content">
            <div>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Royal Hospitality in Jagtial
              </div>
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.85rem', lineHeight: '1.25', marginBottom: '16px' }}>
                Memorable Events With Authentic Cuisine
              </h3>
              <p style={{ color: 'var(--color-cream-soft)', lineHeight: '1.7', marginBottom: '22px', fontSize: '0.94rem' }}>
                Whether hosting an intimate family reunion, a lavish birthday celebration, or a corporate conference, 
                Sri Sampradaya combines an elegant dining environment with authentic flavours from our tandoor, royal biryani handis, and curries.
              </p>

              {/* Venue Highlights Grid */}
              <div className="banquet-highlights-grid">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} className="banquet-highlight-item">
                      <CheckCircle size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                      <span>{h.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Client Booking Notice */}
              <div 
                style={{
                  background: 'rgba(213, 173, 88, 0.1)',
                  border: '1px dashed var(--color-gold-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  fontSize: '0.84rem',
                  color: 'var(--color-gold-light)',
                  marginBottom: '26px'
                }}
              >
                <strong>Booking Note:</strong> Seating capacities, specialized event packages, and decor customizations 
                are tailored directly with owner <strong>Sheela Srinivas</strong> upon enquiry.
              </div>
            </div>


          </div>
        </div>

        {/* Feature Cards: Dedicated Spacious 3-Column Grid */}
        <div style={{ textAlign: 'center', marginBottom: '22px', marginTop: '16px' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
            Services & Packages
          </span>
          <h3 style={{ color: 'var(--color-white)', fontSize: '1.45rem', marginTop: '4px' }}>
            Event Types Catered At Sri Sampradaya
          </h3>
        </div>

        <div className="banquet-feature-cards">
          {banquetFeatures.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="banquet-feature-card">
                <div>
                  <div className="banquet-feature-card-header">
                    <div className="banquet-feature-card-icon">
                      <IconComponent size={24} />
                    </div>
                    <span className="banquet-feature-card-tag">{feat.tag}</span>
                  </div>
                  <h4 style={{ color: 'var(--color-gold-light)', fontWeight: '700', fontSize: '1.15rem', marginTop: '16px', marginBottom: '8px' }}>
                    {feat.title}
                  </h4>
                  <p style={{ color: 'var(--color-cream-soft)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {feat.description}
                  </p>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(213, 173, 88, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-gold)' }}>Custom Menu Planning</span>
                  <ChevronRight size={15} color="var(--color-gold)" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Photographs Grid of Banquet & Buffet */}
        <div style={{ marginTop: '54px' }}>
          <h4 style={{ color: 'var(--color-gold-light)', fontSize: '1.15rem', marginBottom: '20px', textAlign: 'center' }}>
            Actual Event & Buffet Arrangements in Jagtial
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1.5px solid var(--color-gold-border)', height: '220px', position: 'relative' }}>
              <img src={banquetDining} alt="Banquet hall round dining table arrangement" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.8rem' }}>
                Round Dining Table Setup
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1.5px solid var(--color-gold-border)', height: '220px', position: 'relative' }}>
              <img src={banquetTables} alt="Celebration seating round tables with floral chairs" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.8rem' }}>
                Celebration Seating & Floral Chairs
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1.5px solid var(--color-gold-border)', height: '220px', position: 'relative' }}>
              <img src={banquetBuffet} alt="Grand live buffet counter with hot chafing dishes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 12px', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '0.8rem' }}>
                Live Buffet Counter Setup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
