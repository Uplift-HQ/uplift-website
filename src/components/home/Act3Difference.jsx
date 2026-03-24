import React, { useEffect, useRef } from 'react';
import { COLORS, SPACING } from './constants';

export default function Act3Difference() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: COLORS.warmGrey,
        padding: `${SPACING.xl} ${SPACING.lg}`,
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Line 1 - softer */}
        <p className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
          fontWeight: 400,
          lineHeight: 1.25,
          color: '#94A3B8',
          marginBottom: SPACING.md,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Most workforce platforms do all of this.
        </p>

        {/* Line 2 - bold */}
        <p className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: COLORS.nearBlack,
          marginBottom: SPACING.lg,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s',
        }}>
          None of them understand what the data means.
        </p>

        {/* Supporting line */}
        <p className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          color: COLORS.orange,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }}>
          Uplift does.
        </p>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
