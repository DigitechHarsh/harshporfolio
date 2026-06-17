import React, { useRef } from 'react';
import { Video, Image, Sparkles, Zap, Activity } from 'lucide-react';

const toolsList = [
  {
    name: 'Veo 3.1',
    category: 'Cinematic Video Generation',
    mastery: 98,
    icon: Video,
    color: '#00f2fe',
    description: 'Specialized in Google DeepMind’s flagship model for cinematic prompt translation, motion physics, and ultra-high-resolution upscaling.',
  },
  {
    name: 'Flow Omni',
    category: 'Real-time Motion Synthesis',
    mastery: 95,
    icon: Activity,
    color: '#9f7aea',
    description: 'Expert in generating fluid motion vectors, temporal interpolation, and real-time physical animation paths.',
  },
  {
    name: 'GPT Image 2.0',
    category: 'Concept & Storyboarding',
    mastery: 96,
    icon: Image,
    color: '#ed64a6',
    description: 'Master of advanced semantic prompt engineering, multivariable character prompting, and consistent keyframe layout designs.',
  },
  {
    name: 'Seedance 2.0',
    category: 'Temporal Character Consistency',
    mastery: 92,
    icon: Sparkles,
    color: '#3b82f6',
    description: 'Skilled in mapping actor consistency, face preservation algorithms, and seamless sequencing across multiple scenes.',
  },
  {
    name: 'Nano Banana',
    category: 'Micro-Animation & Dynamic FX',
    mastery: 90,
    icon: Zap,
    color: '#f6e05e',
    description: 'Utilized for fast animation cues, physics-guided micro-transitions, and particle effect layers in high-conversion ads.',
  },
];

export default function ToolsExpertise() {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
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

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="tools" className="tools-section">
      <div className="section-title-container">
        <h2 className="section-title">Specialized AI Arsenal</h2>
        <p className="section-subtitle">
          Leveraging cutting-edge models to build high-conversion, photorealistic, and cinematic video campaigns.
        </p>
      </div>

      <div className="tools-grid">
        {toolsList.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <div key={tool.name} className="tilt-card-wrapper">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="tool-card tilt-card glass-panel"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  '--rx': '0deg',
                  '--ry': '0deg',
                  transform: 'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))',
                  '--glow-color': tool.color,
                }}
              >
                <div className="tool-card-glow" />
                <div className="tool-card-content tilt-card-inner">
                  <div className="tool-header">
                    <div className="tool-icon-wrapper" style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}33` }}>
                      <IconComponent className="tool-icon" style={{ color: tool.color }} size={24} />
                    </div>
                  </div>

                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-category">{tool.category}</p>
                  <p className="tool-description">{tool.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
