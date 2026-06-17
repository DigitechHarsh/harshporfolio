import React, { useEffect } from 'react';
import { X, Video, Film } from 'lucide-react';

export default function Lightbox({ video, onClose }) {
  // Prevent body scrolling when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Player">
          <X size={24} />
        </button>

        {/* Video Player */}
        <div className="lightbox-video-wrapper">
          <video
            src={video.src}
            controls
            autoPlay
            playsInline
            className="lightbox-video"
          />
        </div>

        {/* Metadata Details */}
        <div className="lightbox-details">
          <div className="lightbox-meta">
            <span className="lightbox-badge">
              {video.category.includes('Teaser') ? <Film size={14} /> : <Video size={14} />}
              {video.category}
            </span>
          </div>
          <h2 className="lightbox-title">{video.title}</h2>
          <p className="lightbox-description">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
