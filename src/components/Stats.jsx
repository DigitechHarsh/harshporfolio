import React, { useEffect, useState, useRef } from 'react';

const statsData = [
  { id: 'stat-1', label: 'AI Ads Service Contract', value: 5, suffix: '+', color: 'var(--accent-cyan)' },
  { id: 'stat-2', label: 'Social Media Handling Projects', value: 2, suffix: '+', color: 'var(--accent-purple)' },
  { id: 'stat-3', label: 'Web App Projects', value: 3, suffix: '+', color: 'var(--accent-pink)' },
];

function Counter({ endValue, suffix, decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easedProgress = progress * (2 - progress);
      const currentValue = easedProgress * endValue;
      
      countRef.current = currentValue;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-grid">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card glass-panel" style={{ '--glow-color': stat.color }}>
            <div className="stat-glow" />
            <h3 className="stat-number" style={{ color: stat.color }}>
              <Counter endValue={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            </h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
