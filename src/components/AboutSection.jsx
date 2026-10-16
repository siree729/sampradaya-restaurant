import React from 'react';
import { ShieldCheck, HeartHandshake, Users, Clock, Award } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import signboardImg from '../assets/restaurant/signboard_illuminated.png';
import cabinsImg from '../assets/restaurant/interior_family_cabins.png';
import boothsImg from '../assets/restaurant/interior_booth_dining.png';
import hallImg from '../assets/restaurant/interior_luxury_hall.png';

export default function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="section-padding section-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <HeartHandshake size={14} color="var(--color-burgundy-deep)" />
            <span>Tradition & Hospitality</span>
          </div>
          <h2 className="section-title">About Sri Sampradaya</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle">
            A welcoming destination in Jagtial designed for memorable family gatherings, 
            heartfelt conversations, and authentic regional feasts.
          </p>
        </div>

        {/* Content & Photo Mosaic */}
        <div className="about-grid" style={{ marginTop: '48px' }}>
          {/* Photo Mosaic */}
          <div className="about-photos-mosaic">
            <div className="about-photo-wrapper">
              <img
                src={signboardImg}
                alt="Illuminated श्री Sampradaya Family Restaurant signboard"
                loading="lazy"
              />
              <div className="about-photo-caption">Grand Entrance & Signboard</div>
            </div>

            <div className="about-photo-wrapper">
              <img
                src={cabinsImg}
                alt="Fluted glass private family dining cabins"
                loading="lazy"
              />
              <div className="about-photo-caption">Private Family Cabins</div>
            </div>

            <div className="about-photo-wrapper">
              <img
                src={boothsImg}
                alt="Comfortable tufted sofa booth dining at Sri Sampradaya"
                loading="lazy"
              />
              <div className="about-photo-caption">Plush Sofa Dining</div>
            </div>

            <div className="about-photo-wrapper">
              <img
                src={hallImg}
                alt="Main dining hall with royal carved wooden chairs"
                loading="lazy"
              />
              <div className="about-photo-caption">Royal Dining Hall</div>
            </div>
          </div>

          {/* Text & Features */}
          <div className="about-text-content">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--color-burgundy-deep)' }}>
              Dedicated to Genuine Family Comfort
            </h3>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>
              Located prominently near New Bus Stand Chowrasta on Karimnagar Road, beside the Water Tank in Jagtial, 
              <strong> Sri Sampradaya Family Restaurant and Banquet Hall</strong> was founded by <strong>Sheela Srinivas</strong> with a vision 
              to provide an authentic, comfortable culinary sanctuary for families and celebration gatherings.
            </p>
            <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
              Our restaurant offers specially designed, acoustic private cabins reserved exclusively for families, 
              ensuring peaceful privacy. Every dish is cooked fresh upon order by our seasoned master chefs using authentic spices and premium ingredients.
            </p>

            <div className="about-features-list">
              <div className="about-feature-row">
                <div className="about-feature-bullet">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Private Family Dining Cabins</h4>
                  <p className="about-feature-desc">
                    Exclusively reserved for families with privacy glass partitions and dedicated hospitality service.
                  </p>
                </div>
              </div>

              <div className="about-feature-row">
                <div className="about-feature-bullet">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Fresh, Cooked-to-Order Heritage</h4>
                  <p className="about-feature-desc">
                    Prepared fresh in 15–25 minutes. No pre-cooked shortcuts, ensuring authentic flavors and wholesome hygiene.
                  </p>
                </div>
              </div>

              <div className="about-feature-row">
                <div className="about-feature-bullet">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="about-feature-title">Registered & Trusted Establishment</h4>
                  <p className="about-feature-desc">
                    GST Registered (36FNFS9632N1Z1) and managed under the leadership of owner Sheela Srinivas.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
