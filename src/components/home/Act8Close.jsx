import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS, SPACING } from './constants';

export default function Act8Close() {
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
        background: COLORS.navy,
        padding: `${SPACING.xxl} ${SPACING.lg}`,
      }}
    >
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Headline */}
        <h2 className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: COLORS.white,
          marginBottom: SPACING.sm,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          See it for yourself.
        </h2>

        {/* Subline */}
        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1.15rem',
          color: '#94A3B8',
          marginBottom: SPACING.lg,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          No sales call. No card. No commitment.
        </p>

        {/* CTA Pair */}
        <div className="reveal" style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '12px',
          flexWrap: 'wrap',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <Link to="/demo" style={{
            padding: '14px 28px',
            background: COLORS.orange,
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: "'Inter', system-ui, sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s ease',
          }}>
            Try the demo
            <ArrowRight size={18} />
          </Link>
          <a href="/trial" style={{
            padding: '14px 28px',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.25)',
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: 'border-color 0.15s ease',
          }}>
            Start 14-day free trial
          </a>
        </div>

        {/* Trial info */}
        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.8rem',
          color: '#94A3B8',
          marginBottom: SPACING.md,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          No card required · 50 users · 14 days
        </p>

        {/* Additional context */}
        <div className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.85rem',
          color: '#475569',
          lineHeight: 1.8,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <p style={{ margin: 0 }}>The demo takes 4 minutes.</p>
          <p style={{ margin: 0 }}>The free trial gives you the full platform for 14 days.</p>
        </div>
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
