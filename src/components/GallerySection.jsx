import React, { useState, useEffect, useCallback } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { galleryCategories, galleryImages } from '../data/galleryData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredImages.length);
  }, [activeImageIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="section-padding section-cream">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-badge">
            <Camera size={14} color="var(--color-burgundy-deep)" />
            <span>Visual Tour</span>
          </div>
          <h2 className="section-title">Authentic Restaurant Gallery</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle">
            Explore authentic photographs of Sri Sampradaya: from our illuminated night facade and 
            private family cabins to royal dum biryanis and banquet celebrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-category-bar" role="tablist" aria-label="Gallery filter tabs">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`gallery-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveImageIndex(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.title} enlarged`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
              <div className="gallery-zoom-badge" aria-hidden="true">
                <ZoomIn size={18} />
              </div>
              <div className="gallery-overlay">
                <h3 className="gallery-title">{img.title}</h3>
                <p className="gallery-subtitle">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div 
          className="lightbox-backdrop" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close image lightbox"
            >
              <X size={22} />
            </button>

            {/* Prev & Next Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button 
                  className="lightbox-nav-btn lightbox-nav-prev"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={26} />
                </button>
                <button 
                  className="lightbox-nav-btn lightbox-nav-next"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}

            {/* Image Preview */}
            <div className="lightbox-img-wrapper">
              <img
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].alt}
              />
            </div>

            {/* Caption Bar */}
            <div className="lightbox-caption-bar">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ color: 'var(--color-gold-light)', fontSize: '1.2rem', fontFamily: 'var(--font-royal)' }}>
                  {filteredImages[activeImageIndex].title}
                </h4>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  {activeImageIndex + 1} of {filteredImages.length}
                </span>
              </div>
              <p style={{ color: 'var(--color-cream-soft)', fontSize: '0.9rem' }}>
                {filteredImages[activeImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
