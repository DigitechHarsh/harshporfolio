import React, { useRef } from 'react';
import harshImg from '../assets/harsh.png';

export default function Hero() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max 15 degrees)
    const rotateX = ((centerY - y) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // Apply values to style variables
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset rotation smoothly
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left column: Bio & Text */}
        <div className="hero-text-container">
          <h2 className="hero-badge">AI Video Ads Specialist</h2>
          <h1 className="hero-title">
            Crafting the Future of <span className="gradient-text">Visual Stories</span>
          </h1>
          <p className="hero-description">
            Hi, I'm <strong className="highlight-text">Harsh Patel</strong>. I merge state-of-the-art Generative AI models with high-converting ad psychology to deliver cinematic, revenue-generating video campaigns that capture attention in milliseconds.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn-futuristic">
              View AI Campaigns
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Right column: 3D interactive Profile Image */}
        <div className="hero-image-wrapper tilt-card-wrapper">
          <div
            ref={cardRef}
            className="hero-image-card tilt-card glass-panel"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              '--rx': '0deg',
              '--ry': '0deg',
              transform: 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))',
            }}
          >
            <div className="card-glow" />
            <div className="hero-image-inner tilt-card-inner">
              <img
                src={harshImg}
                alt="Harsh Patel - AI Video Ads Specialist"
                className="profile-img"
              />
              <div className="profile-badge">
                <span className="pulse-dot"></span>
                Available for Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
