import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, ExternalLink } from 'lucide-react';

const contactDetails = [
  {
    id: 'phone',
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 81605 87315',
    rawValue: '+918160587315',
    link: 'tel:+918160587315',
    linkText: 'Call Now',
    color: 'var(--accent-cyan)',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email Inquiries',
    value: 'aicreationsbyharsh@gmail.com',
    rawValue: 'aicreationsbyharsh@gmail.com',
    link: 'mailto:aicreationsbyharsh@gmail.com',
    linkText: 'Send Email',
    color: 'var(--accent-purple)',
  },
  {
    id: 'address',
    icon: MapPin,
    label: 'Office Address',
    value: 'A/5, Shivam Appartment, Ichcchanath, Surat',
    rawValue: 'A/5, Shivam Appartment, Ichcchanath, Surat',
    link: 'https://maps.app.goo.gl/TUB7fiWW2itRHhhq5',
    linkText: 'Open Maps',
    color: 'var(--accent-pink)',
  },
];

export default function Contact() {
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setToastMessage(`Copied ${id === 'email' ? 'email address' : id === 'phone' ? 'phone number' : 'address'}!`);
    
    setTimeout(() => {
      setCopiedId(null);
      setToastMessage('');
    }, 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title-container">
        <h2 className="section-title">Let's Create Together</h2>
        <p className="section-subtitle">
          Have an ad campaign or a video teaser conceptualization? Get in touch to collaborate.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-grid">
          {contactDetails.map((detail) => {
            const IconComponent = detail.icon;
            return (
              <div key={detail.id} className="contact-card glass-panel" style={{ '--glow-color': detail.color }}>
                <div className="contact-card-glow" />
                <div className="contact-card-content">
                  <div className="contact-icon-wrapper" style={{ backgroundColor: `${detail.color}15`, border: `1px solid ${detail.color}33` }}>
                    <IconComponent className="contact-icon" style={{ color: detail.color }} size={22} />
                  </div>

                  <div className="contact-info">
                    <span className="contact-label">{detail.label}</span>
                    <h3 className="contact-value">{detail.value}</h3>
                  </div>

                  <div className="contact-actions">
                    <button
                      className="contact-action-btn"
                      onClick={() => handleCopy(detail.rawValue, detail.id)}
                      title="Copy to Clipboard"
                    >
                      {copiedId === detail.id ? (
                        <Check size={16} className="success-icon" />
                      ) : (
                        <Copy size={16} />
                      )}
                      <span>{copiedId === detail.id ? 'Copied' : 'Copy'}</span>
                    </button>

                    <a
                      href={detail.link}
                      target={detail.id === 'address' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="contact-action-btn link-action"
                    >
                      <ExternalLink size={16} />
                      <span>{detail.linkText}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="copy-toast">
          {toastMessage}
        </div>
      )}
    </section>
  );
}
