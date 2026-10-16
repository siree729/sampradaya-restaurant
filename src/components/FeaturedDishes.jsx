import React from 'react';
import { Sparkles, Utensils, ChevronRight } from 'lucide-react';
import biryaniImg from '../assets/restaurant/food_royal_biryani.png';
import noodlesImg from '../assets/restaurant/food_manchurian_noodles.png';
import sundaeImg from '../assets/restaurant/food_strawberry_sundae.png';

export default function FeaturedDishes({ onNavigate }) {
  const featured = [
    {
      id: 'f-1',
      name: 'Chicken Dum Biryani',
      category: 'Royal Biryani',
      price: 280,
      familyPackPrice: 660,
      isVeg: false,
      image: biryaniImg,
      tag: 'Chef Signature',
      description: 'Slow-cooked fragrant long-grain basmati rice layered with marinated tender chicken and hand-ground spices, served with rich gravy & curd raitha.'
    },
    {
      id: 'f-2',
      name: 'Veg / Chicken Manchurian Noodles',
      category: 'Indo-Chinese Wok',
      price: 190,
      nonVegPrice: 220,
      isVeg: true,
      image: noodlesImg,
      tag: 'Customer Favourite',
      description: 'Wok-tossed noodles stir-fried with farm-fresh vegetables, scallions, aromatic garlic-soy reduction and crispy savory Manchurian dumplings.'
    },
    {
      id: 'f-3',
      name: 'Artisanal Ice Cream Sundae',
      category: 'Desserts & Sweets',
      price: 150,
      isVeg: true,
      image: sundaeImg,
      tag: 'Sweet Delight',
      description: 'Chilled scoops of velvety strawberry ice cream accompanied by crunchy striped wafer rolls and colorful festive sugar sprinkles.'
    }
  ];

  return (
    <section className="section-padding section-white">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} color="var(--color-burgundy-deep)" />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="section-title">Signature Menu Highlights</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle">
            Crafted with traditional culinary techniques and authentic recipes, 
            celebrating the timeless flavours cherished across Telangana.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="featured-grid">
          {featured.map((item) => (
            <div key={item.id} className="featured-card">
              <div className="featured-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <span className="featured-tag-pill">{item.tag}</span>
              </div>

              <div className="featured-body">
                <div className="featured-header-row">
                  <h3 className="featured-dish-name">{item.name}</h3>
                  <span className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`} title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'} />
                </div>

                <div className="featured-dish-cat">{item.category}</div>
                <p className="featured-dish-desc">{item.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(213,173,88,0.2)' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>Starts at</span>
                    <span className="featured-price-tag">₹{item.price}</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('menu')} 
                    className="btn btn-burgundy"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    <span>Order In-Dine</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view full menu */}
        <div className="text-center" style={{ marginTop: '48px' }}>
          <button 
            onClick={() => onNavigate('menu')} 
            className="btn btn-primary"
            style={{ padding: '14px 34px', fontSize: '1rem' }}
          >
            <Utensils size={18} />
            <span>Explore Complete 200+ Item Menu</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
