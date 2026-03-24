import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';
import { UpliftLogo } from './Navigation';

export default function Act7Close() {
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
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: COLORS.slate900,
        padding: '120px 60px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* White Logo */}
        <div className="reveal" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <UpliftLogo size={40} color="light" />
        </div>

        {/* Headline */}
        <h2 className="reveal close-headline" style={{
          fontFamily: TYPOGRAPHY.font,
          fontWeight: 700,
          fontSize: '40px',
          letterSpacing: '-0.03em',
          color: COLORS.white,
          marginBottom: '12px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          See it for yourself.
        </h2>

        {/* Subtext */}
        <p className="reveal" style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '18px',
          color: COLORS.slate700,
          marginBottom: '48px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          No sales call. No card. No commitment.
        </p>

        {/* Two buttons */}
        <div className="reveal" style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <Link
            to="/demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              background: COLORS.orange,
              color: COLORS.white,
              borderRadius: RADIUS.button,
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: TYPOGRAPHY.font,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.orangeHover;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,53,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.orange;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Try the demo
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/trial"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: COLORS.white,
              borderRadius: RADIUS.button,
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              fontFamily: TYPOGRAPHY.font,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            }}
          >
            Start 14-day free trial
          </Link>
        </div>

        {/* Note */}
        <p className="reveal" style={{
          fontFamily: TYPOGRAPHY.font,
          fontSize: '12px',
          color: COLORS.slate700,
          marginTop: '20px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          The demo takes 4 minutes · Free trial gives you 50 real users for 14 days
        </p>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 640px) {
          section { padding: 80px 24px !important; }
        }
        @media (max-width: 480px) {
          .close-headline { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}
