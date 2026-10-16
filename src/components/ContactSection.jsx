import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  Navigation, 
  CheckCircle2, 
  AlertCircle,
  Building,
  UserCheck
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    enquiryType: 'Dining Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your enquiry or question.');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Sri Sampradaya Restaurant,\nMy Name: ${formData.name || 'Customer'}\nType: ${formData.enquiryType}\nMessage: ${formData.message || 'I would like to enquire about your services.'}`
    );
    window.open(`https://wa.me/917207076170?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding section-white">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-badge">
            <MapPin size={14} color="var(--color-burgundy-deep)" />
            <span>Visit Us in Jagtial</span>
          </div>
          <h2 className="section-title">Contact & Location</h2>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="section-subtitle">
            Conveniently located on Karimnagar Road near New Bus Stand Chowrasta. 
            Reach out directly for family dining reservations, banquet bookings, or outdoor catering.
          </p>
        </div>

        <div className="contact-grid" style={{ marginTop: '48px' }}>
          {/* Information & Map Column */}
          <div>
            <div className="contact-info-list">
              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-burgundy-deep)', marginBottom: '4px' }}>
                    Restaurant Address
                  </h4>
                  <p style={{ color: 'var(--color-chocolate)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {restaurantData.address.line1},<br />
                    {restaurantData.address.landmark},<br />
                    {restaurantData.address.city}, {restaurantData.address.state} — {restaurantData.address.pincode}
                  </p>
                  <a
                    href={restaurantData.address.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      marginTop: '6px', 
                      fontSize: '0.85rem', 
                      color: 'var(--color-burgundy-deep)', 
                      fontWeight: '700' 
                    }}
                  >
                    <Navigation size={14} />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-burgundy-deep)', marginBottom: '4px' }}>
                    Direct Telephone
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                    Call us for takeaway orders & table enquiries:
                  </p>
                  <a
                    href={restaurantData.contact.phoneTel}
                    style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-burgundy-deep)', display: 'block', marginTop: '2px' }}
                  >
                    {restaurantData.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ borderColor: '#25D366', color: '#25D366' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-burgundy-deep)', marginBottom: '4px' }}>
                    WhatsApp Live Chat
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                    Quick enquiries for banquet dates & menus:
                  </p>
                  <a
                    href={restaurantData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  >
                    <MessageCircle size={15} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Verified Owner & Reg */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <UserCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-burgundy-deep)', marginBottom: '4px' }}>
                    Management & Registration
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-chocolate)' }}>
                    <strong>Proprietor:</strong> Sheela Srinivas<br />
                    <strong>GST Reg. No:</strong> {restaurantData.gstNumber}
                  </p>
                </div>
              </div>

              {/* Opening Hours Note */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-burgundy-deep)', marginBottom: '4px' }}>
                    Operating Hours
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-chocolate)' }}>
                    {restaurantData.timings.display}
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#888' }}>
                    * Regular service timings subject to owner confirmation
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="map-container">
              <iframe
                title="Sri Sampradaya Restaurant Location Jagtial"
                src="https://maps.google.com/maps?q=New+Bus+Stand+Chowrasta+Karimnagar+Rd+Jagtial+Telangana+505327&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Enquiry Form Column */}
          <div className="contact-card">
            <h3 style={{ color: 'var(--color-burgundy-deep)', fontSize: '1.5rem', marginBottom: '8px' }}>
              Send an Online Enquiry
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill in your details below for dining questions, party bookings, or catering enquiries.
            </p>

            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px 0' }}>
                <div className="form-success-alert">
                  <CheckCircle2 size={24} />
                  <div>
                    <strong>Thank you, {formData.name}!</strong><br />
                    Your enquiry for <em>{formData.enquiryType}</em> has been recorded locally (Frontend Demo).
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Would you like to send this message directly to the restaurant owner on WhatsApp right away?
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp Now</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', enquiryType: 'Dining Enquiry', message: '' });
                  }}
                  className="btn btn-burgundy"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {errorMsg && (
                  <div style={{ padding: '10px 14px', background: '#FFEBEE', border: '1px solid #FFCDD2', borderRadius: 'var(--radius-sm)', color: '#C62828', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiryType" className="form-label">Type of Enquiry</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    className="form-select"
                    value={formData.enquiryType}
                    onChange={handleChange}
                  >
                    <option value="Dining Enquiry">Family Dining / Cabin Enquiry</option>
                    <option value="Banquet Hall Booking">Banquet Hall & Party Celebration</option>
                    <option value="Outdoor Catering">Outdoor Catering Service</option>
                    <option value="Takeaway / Delivery">Takeaway & Home Delivery</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Describe your event date, number of guests, or dish enquiries..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-burgundy"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>Submit Demo Enquiry</span>
                </button>

                <p style={{ fontSize: '0.78rem', color: '#888', textAlign: 'center', marginTop: '6px' }}>
                  * Demo mode: Form validates input without storing data to a backend. Use the WhatsApp button for instant communication with the owner.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
