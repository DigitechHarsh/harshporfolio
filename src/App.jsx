import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ToolsExpertise from './components/ToolsExpertise';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';
import logoImg from './assets/logo.png';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseLightbox = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app-container">
      {/* 3D WebGL Background Scene */}
      <ThreeBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Selected Projects Grid Showcase */}
        <PortfolioGrid onSelectVideo={handleSelectVideo} />

        {/* Specialized Tools Mastery */}
        <ToolsExpertise />

        {/* Performance Metrics & Stat Counters */}
        <Stats />

        {/* Get In Touch Coordinates */}
        <Contact />
      </main>

      {/* Full-Screen Video Lightbox Overlay */}
      {selectedVideo && (
        <Lightbox video={selectedVideo} onClose={handleCloseLightbox} />
      )}

      {/* Footer Branding Coordinates */}
      <footer className="footer-container glass-panel">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logoImg} alt="Harsh Patel Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Harsh AI Creations</span>
            </div>
            <p className="footer-tagline">AI Video Ads & Cinematic Teasers Specialist</p>
          </div>
          <div className="footer-right">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Harsh Patel. All rights reserved.
            </p>
            <p className="footer-location">Surat, Gujarat, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
