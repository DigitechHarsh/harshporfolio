import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const aiAds = [
  {
    id: 'ad-1',
    title: 'PUMA Fly Runner',
    category: 'Commercial Ad',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688242/portfolio/AI%20Ads/PUMA_FLY_RUNNER_AD_1.mp4',
    description: 'High-octane AI animation campaign for PUMA running gear with fast-paced transitions and physics-based styling.',
  },
  {
    id: 'ad-2',
    title: 'Tata Sierra Revival',
    category: 'Brand Re-imagining',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688249/portfolio/AI%20Ads/TataSierra_AD_Complete.mp4',
    description: 'Cinematic AI concept ad reviving the legendary Tata Sierra SUV, merging nostalgic design with futuristic landscapes.',
  },
  {
    id: 'ad-3',
    title: 'Monster Energy Drink',
    category: 'Concept Ad',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688226/portfolio/AI%20Ads/MonsterEnergyDrinkDone.mp4',
    description: 'Action-packed, high-energy particle and fluid simulation ad tailored for Gen-Z energy drink campaigns.',
  },
  {
    id: 'ad-4',
    title: 'Diamond Luxury',
    category: 'Luxury Fashion',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688208/portfolio/AI%20Ads/DiamondLuxuryAd.mp4',
    description: 'Elegant hyper-realistic jewelry commercial showcasing refraction, light caustics, and luxury branding physics.',
  },
  {
    id: 'ad-5',
    title: 'Flavour of India',
    category: 'Tourism & Food',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688218/portfolio/AI%20Ads/FlavourOfIndia.mp4',
    description: 'A rich visual journey across the spices and culinary heritage of India, generating colorful food aesthetics.',
  },
  {
    id: 'ad-6',
    title: 'Mango Pulp Ad',
    category: 'FMCG Commercial',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686857/portfolio/AI%20Ads/MANGO_PULP_AD_3.mp4',
    description: 'Splash simulations and hyper-realistic mango juice flow animations designed for television broadcasting.',
  },
  {
    id: 'ad-7',
    title: 'EON Solutions Brand',
    category: 'Corporate Promo',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686844/portfolio/AI%20Ads/EONSolution%281%29.mp4',
    description: 'Futuristic enterprise software promo, visualizing neural networks, cloud databases, and clean UI panels.',
  },
  {
    id: 'ad-8',
    title: 'Cyber Interface Promo',
    category: 'Product Teaser',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686814/portfolio/AI%20Ads/AQOcyBCziFQoYiRZakaEtw0Gh-TW9OUTmawq0Tg3Rc-7xrUtGJVQJHndtCwltMdFxX9ysfuyXxjYuTHuKvGSiHVPgZO_XZ3t71l4QhM.mp4',
    description: 'A holographic user interface product commercial featuring neon wireframes and complex motion design.',
  },
  {
    id: 'ad-9',
    title: 'OM Divine Residential',
    category: 'Real Estate Commercial',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688236/portfolio/AI%20Ads/OMDivine_YashSoc_1_916.mp4',
    description: '3D architectural visualization combined with AI environmental enhancements for a luxury residential property.',
  },
  {
    id: 'ad-10',
    title: 'The Good Vibe Brand',
    category: 'Lifestyle Promo',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686855/portfolio/AI%20Ads/TheGoodVibe.mp4',
    description: 'A visual moodboard combining music, retro cinematography, and modern fashion trends.',
  },
];

const aiTeasers = [
  {
    id: 'teaser-1',
    title: 'MountainDew Unleashed',
    category: 'Sports Action Teaser',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781688258/portfolio/AI%20Teasers/MountainDew.mp4',
    description: 'Adrenaline-fueled extreme sports cinematic teaser utilizing custom flow tracking and fluid simulators.',
  },
  {
    id: 'teaser-2',
    title: 'Samurai Honor',
    category: 'Cinematic Narrative Teaser',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686905/portfolio/AI%20Teasers/Samurai.mp4',
    description: 'Moody, stylistic historical drama concept teaser featuring volumetric fog, katana sparks, and cherry blossom simulation.',
  },
  {
    id: 'teaser-3',
    title: 'School Fight Action',
    category: 'Action Choreography',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686889/portfolio/AI%20Teasers/SchoolFight.mp4',
    description: 'High-speed martial arts sequencing and choreography using temporal consistency and motion synthesis.',
  },
  {
    id: 'teaser-4',
    title: 'The Encounter',
    category: 'Sci-Fi / Thriller',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686871/portfolio/AI%20Teasers/Encounter.mp4',
    description: 'An eerie cinematic encounter teaser focusing on alien tech, light beacons, and dark forest atmospheres.',
  },
  {
    id: 'teaser-5',
    title: 'Royal Entry',
    category: 'Royal Cinematic',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686814/portfolio/AI%20Teasers/13b92c9a-4329-42b1-8cee-ad0d4ba5ff5b-video.mp4',
    description: 'A grand royal entry visual concept, combining regal architecture with dramatic cinematic lighting.',
  },
  {
    id: 'teaser-6',
    title: 'Neon Genesis',
    category: 'Abstract Sci-Fi',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686811/portfolio/AI%20Teasers/5cb4caf4-71b3-43cb-b215-9a989510c6b2-video.mp4',
    description: 'Futuristic abstract visuals combining bio-holographic interfaces and particle accelerators.',
  },
  {
    id: 'teaser-7',
    title: 'Shadow Ninja',
    category: 'Action Teaser',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686812/portfolio/AI%20Teasers/cc6602a9-3865-4bcc-aa41-4823109cf6b3-video.mp4',
    description: 'Shadowy movement effects, smoke transitions, and swift acrobatics inside an ancient temple.',
  },
  {
    id: 'teaser-8',
    title: 'Mech Warrior',
    category: 'Sci-Fi Action',
    src: 'https://res.cloudinary.com/diuf2sexc/video/upload/v1781686810/portfolio/AI%20Teasers/e893b539-e4f9-4c92-8fbc-11564931616f-video.mp4',
    description: 'Gigantic robot suit movement, mechanical sound design layers, and heavy industrial settings.',
  },
];

export default function PortfolioGrid({ onSelectVideo }) {
  const [activeTab, setActiveTab] = useState('ads');
  const cardRefs = useRef({});
  const videoRefs = useRef({});

  const items = activeTab === 'ads' ? aiAds : aiTeasers;

  const handleMouseMove = (e, id) => {
    const card = cardRefs.current[id];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch((err) => console.log('Autoplay blocked: ', err));
    }
  };

  const handleMouseLeave = (id) => {
    const card = cardRefs.current[id];
    if (card) {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    }

    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-title-container">
        <h2 className="section-title">Selected Works</h2>
        <p className="section-subtitle">
          Explore a showcase of high-end AI Video Ads and cinematic teasers. Hover to preview, click to play.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="tab-switcher-container">
        <div className="tab-switcher glass-panel">
          <div className={`tab-active-indicator ${activeTab}`} />
          <button
            className={`tab-btn ${activeTab === 'ads' ? 'active' : ''}`}
            onClick={() => setActiveTab('ads')}
          >
            AI Video Ads
          </button>
          <button
            className={`tab-btn ${activeTab === 'teasers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teasers')}
          >
            AI Teasers
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="portfolio-grid">
        {items.map((item) => (
          <div key={item.id} className="tilt-card-wrapper">
            <div
              ref={(el) => (cardRefs.current[item.id] = el)}
              className="portfolio-card tilt-card glass-panel"
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              onClick={() => onSelectVideo(item)}
              style={{
                '--rx': '0deg',
                '--ry': '0deg',
                transform: 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))',
                '--border-glow-color': activeTab === 'ads' ? 'var(--accent-cyan)' : 'var(--accent-purple)',
              }}
            >
              <div className="portfolio-card-glow" />
              <div className="portfolio-card-content tilt-card-inner">
                {/* Video Container */}
                <div className="video-container">
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="portfolio-video"
                  />
                  {/* Overlay Play Icon */}
                  <div className="video-overlay">
                    <div className="play-icon-wrapper">
                      <Play className="play-icon" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <span className="card-badge">{item.category}</span>
                </div>

                {/* Text Metadata */}
                <div className="card-info">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
