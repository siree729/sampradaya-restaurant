import React, { useState, useEffect } from 'react';
import { 
  Sparkles,
  Info,
  Clock,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Eye,
  X
} from 'lucide-react';
import { menuVerificationNotes } from '../data/menuData';
import menuCardEdited from '../assets/menu/sri_sampradaya_menu_card_edited.png';
import menuCardOriginal from '../assets/menu/sri_sampradaya_menu_card_original.png';

export default function MenuSection() {
  // Card version: 'edited' (with Fish Fried Rice) or 'original' (raw photo)
  const [cardVersion, setCardVersion] = useState('edited');
  
  // Inline board zoom level
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Fullscreen Lightbox modal
  const [showFullscreenModal, setShowFullscreenModal] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Active card image
  const activeCardImg = cardVersion === 'edited' ? menuCardEdited : menuCardOriginal;

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowFullscreenModal(false);
        setShowNotesModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handleModalZoomIn = () => setModalZoom((prev) => Math.min(prev + 0.25, 3));
  const handleModalZoomOut = () => setModalZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetModalZoom = () => setModalZoom(1);

  return (
    <section id="menu" className="section-padding section-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-badge">
            <Sparkles size={14} color="var(--color-burgundy-deep)" />
            <span>Sri Sampradaya &bull; Official Restaurant Menu</span>
          </div>
          <h2 className="section-title">A Taste of Tradition, A Feast of Flavours</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle">
            Authentic culinary offerings prepared to order in Jagtial. View our official royal 
            menu card board below.
          </p>
        </div>

        {/* Royal Menu Board */}
        <div className="menu-board-wrapper">
            {/* Toolbar Header */}
            <div className="menu-board-toolbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-burgundy-deep)' }}>
                  Menu Version:
                </span>
                <div className="menu-version-pill-group">
                  <button
                    className={`menu-version-pill ${cardVersion === 'edited' ? 'active' : ''}`}
                    onClick={() => setCardVersion('edited')}
                    title="Corrected version with Fish Fried Rice (₹270)"
                  >
                    ✦ Edited & Corrected Card
                  </button>
                  <button
                    className={`menu-version-pill ${cardVersion === 'original' ? 'active' : ''}`}
                    onClick={() => setCardVersion('original')}
                    title="Original photo as uploaded"
                  >
                    Original Photo
                  </button>
                </div>
              </div>

              {/* Actions & Zoom Controls */}
              <div className="menu-board-controls-group">
                <button 
                  onClick={handleZoomIn} 
                  className="menu-ctrl-btn" 
                  title="Zoom In"
                  aria-label="Zoom in menu card"
                >
                  <ZoomIn size={16} />
                  <span>Zoom In</span>
                </button>
                <button 
                  onClick={handleZoomOut} 
                  className="menu-ctrl-btn" 
                  title="Zoom Out"
                  aria-label="Zoom out menu card"
                >
                  <ZoomOut size={16} />
                  <span>Zoom Out</span>
                </button>
                {zoomLevel !== 1 && (
                  <button 
                    onClick={handleResetZoom} 
                    className="menu-ctrl-btn" 
                    title="Reset Zoom"
                    aria-label="Reset zoom to 100%"
                  >
                    <RotateCcw size={14} />
                    <span>{Math.round(zoomLevel * 100)}%</span>
                  </button>
                )}

                <button 
                  onClick={() => setShowFullscreenModal(true)} 
                  className="menu-ctrl-btn"
                  style={{ background: 'var(--color-gold-pale)', borderColor: 'var(--color-gold)' }}
                  title="Open Fullscreen Reader"
                  aria-label="Fullscreen menu reader"
                >
                  <Maximize2 size={16} />
                  <span>Fullscreen</span>
                </button>

                <a
                  href={activeCardImg}
                  download={cardVersion === 'edited' ? 'Sri_Sampradaya_Menu_Card_Edited.png' : 'Sri_Sampradaya_Menu_Card_Original.png'}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                  title="Download High-Resolution PNG"
                >
                  <Download size={15} />
                  <span>Download Card</span>
                </a>
              </div>
            </div>

            {/* Display Frame */}
            <div 
              className="menu-board-display-frame" 
              onClick={() => setShowFullscreenModal(true)}
              title="Click to view full-screen high resolution menu card"
            >
              <div 
                className="menu-board-img-container"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={activeCardImg}
                  alt="Sri Sampradaya Restaurant official royal menu card Jagtial"
                  className="menu-board-img"
                  loading="eager"
                />
              </div>

              <div className="menu-board-hint-badge">
                <Eye size={15} color="var(--color-gold)" />
                <span>Click card to open full-screen zoomable reader</span>
              </div>
            </div>

            {/* Card Information Banner */}
            <div 
              className="glass-panel" 
              style={{ 
                marginTop: '20px', 
                padding: '16px 20px', 
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} color="var(--color-gold-dark)" />
                <span style={{ fontSize: '0.88rem', color: 'var(--color-chocolate)' }}>
                  <strong>Food Notice:</strong> Please allow 15–25 mins for preparation. Private dining cabins reserved for families.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => setShowNotesModal(true)}
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-burgundy-deep)',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  <Info size={14} />
                  <span>Menu Terms & Notes</span>
                </button>
              </div>
            </div>
          </div>
        {/* Bottom Ordering Note */}
        <div style={{ textAlign: 'center', marginTop: '48px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
          <p>
            * Prices in ₹ &bull; Taxes applicable &bull; Home delivery available &bull; Outdoor catering undertaken &bull; Cabins reserved for families
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FULLSCREEN LIGHTBOX READER MODAL                               */}
      {/* ============================================================== */}
      {showFullscreenModal && (
        <div 
          className="menu-card-fullscreen-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen Menu Card Viewer"
        >
          {/* Header Bar */}
          <div className="menu-fullscreen-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Sparkles size={18} color="var(--color-gold)" />
              <span style={{ fontWeight: '700', fontSize: '1rem' }}>
                Sri Sampradaya &bull; Official Menu Card (Jagtial)
              </span>
              <span 
                style={{ 
                  fontSize: '0.75rem', 
                  background: 'rgba(213, 173, 88, 0.2)', 
                  border: '1px solid var(--color-gold)', 
                  padding: '2px 8px', 
                  borderRadius: '12px' 
                }}
              >
                {cardVersion === 'edited' ? 'Fish Fried Rice Corrected (₹270)' : 'Original Picture'}
              </span>
            </div>

            {/* Modal Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div className="menu-version-pill-group" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <button
                  className={`menu-version-pill ${cardVersion === 'edited' ? 'active' : ''}`}
                  onClick={() => setCardVersion('edited')}
                  style={{ color: cardVersion === 'edited' ? '#fff' : 'var(--color-gold-light)' }}
                >
                  Edited Card
                </button>
                <button
                  className={`menu-version-pill ${cardVersion === 'original' ? 'active' : ''}`}
                  onClick={() => setCardVersion('original')}
                  style={{ color: cardVersion === 'original' ? '#fff' : 'var(--color-gold-light)' }}
                >
                  Original Photo
                </button>
              </div>

              <button 
                onClick={handleModalZoomIn} 
                className="menu-ctrl-btn"
                aria-label="Zoom in"
              >
                <ZoomIn size={15} />
                <span>+</span>
              </button>
              <button 
                onClick={handleModalZoomOut} 
                className="menu-ctrl-btn"
                aria-label="Zoom out"
              >
                <ZoomOut size={15} />
                <span>-</span>
              </button>
              {modalZoom !== 1 && (
                <button 
                  onClick={handleResetModalZoom} 
                  className="menu-ctrl-btn"
                  aria-label="Reset zoom"
                >
                  <RotateCcw size={13} />
                  <span>{Math.round(modalZoom * 100)}%</span>
                </button>
              )}

              <a
                href={activeCardImg}
                download={cardVersion === 'edited' ? 'Sri_Sampradaya_Menu_Card_Edited.png' : 'Sri_Sampradaya_Menu_Card_Original.png'}
                className="btn btn-primary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                <Download size={14} />
                <span>Download HD</span>
              </a>

              <button
                onClick={() => setShowFullscreenModal(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  marginLeft: '8px'
                }}
                aria-label="Close fullscreen modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body with Zoomable Image */}
          <div className="menu-fullscreen-body">
            <img
              src={activeCardImg}
              alt="Sri Sampradaya Fullscreen High-Resolution Menu Card"
              className="menu-fullscreen-img"
              style={{ transform: `scale(${modalZoom})` }}
            />
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MENU NOTES & VERIFICATION MODAL                                */}
      {/* ============================================================== */}
      {showNotesModal && (
        <div className="lightbox-backdrop" onClick={() => setShowNotesModal(false)}>
          <div 
            className="lightbox-content" 
            style={{ maxWidth: '650px', background: '#FFFFFF', color: 'var(--color-chocolate)', padding: '28px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid var(--color-gold-border)', paddingBottom: '12px' }}>
              <h3 style={{ color: 'var(--color-burgundy-deep)', fontSize: '1.35rem' }}>
                Restaurant Menu Guidelines & Notes
              </h3>
              <button 
                onClick={() => setShowNotesModal(false)}
                style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-burgundy-deep)', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div style={{ maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
              <div style={{ background: 'var(--color-cream)', padding: '14px', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-gold)' }}>
                <strong>Official Menu Terms (From Page 20):</strong>
                <ul style={{ paddingLeft: '20px', marginTop: '8px', lineHeight: '1.6' }}>
                  <li>Outside food is strictly not allowed.</li>
                  <li>Home delivery and outdoor catering undertaken.</li>
                  <li>Please allow 15–25 minutes for preparation.</li>
                  <li>Smoking and alcohol is strictly prohibited.</li>
                  <li>Once placed, orders cannot be cancelled.</li>
                  <li>Private dining cabins reserved only for families.</li>
                  <li>Taxes and extra toppings extra as applicable.</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: 'var(--color-burgundy-deep)' }}>Client Verification Checklist:</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                  Transcribed accurately from official records and updated per client requirements:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ padding: '10px 12px', background: '#FAF6F0', borderRadius: 'var(--radius-sm)', border: '1px solid #EADBCC' }}>
                    <div style={{ fontWeight: '700', color: 'var(--color-burgundy-deep)' }}>Fish Fried Rice (₹270) &bull; Fried Rice & Noodles</div>
                    <div style={{ fontSize: '0.82rem', color: '#666' }}>Corrected per user specification on the official Royal Menu Card.</div>
                  </div>
                  {menuVerificationNotes.map((note, index) => (
                    <div key={index} style={{ padding: '10px 12px', background: '#FAF6F0', borderRadius: 'var(--radius-sm)', border: '1px solid #EADBCC' }}>
                      <div style={{ fontWeight: '700', color: 'var(--color-burgundy-deep)' }}>{note.item} ({note.page})</div>
                      <div style={{ fontSize: '0.82rem', color: '#666' }}>Listed Price: {note.listedPrice} &bull; {note.query}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button onClick={() => setShowNotesModal(false)} className="btn btn-burgundy" style={{ padding: '8px 20px' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
