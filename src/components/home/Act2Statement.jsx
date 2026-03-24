import React, { useEffect, useRef } from 'react';
import { COLORS, TYPOGRAPHY } from './constants';

export default function Act2Statement() {
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
      el.style.transitionDelay = `${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: COLORS.slate100,
        padding: '100px 60px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="reveal" style={{
          fontFamily: TYPOGRAPHY.font,
          fontWeight: 400,
          fontSize: '20px',
          color: COLORS.slate500,
          marginBottom: '20px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          Most workforce platforms manage your people.
        </p>

        <p className="reveal statement-large" style={{
          fontFamily: TYPOGRAPHY.font,
          fontWeight: 700,
          fontSize: '40px',
          letterSpacing: '-0.03em',
          color: COLORS.slate900,
          marginBottom: '20px',
          lineHeight: 1.1,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          None of them understand what the data means.
        </p>

        <p className="reveal statement-hero" style={{
          fontFamily: TYPOGRAPHY.font,
          fontWeight: 700,
          fontSize: '56px',
          letterSpacing: '-0.04em',
          color: COLORS.orange,
          lineHeight: 1,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          Uplift does.
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
          .statement-large { font-size: 32px !important; }
          .statement-hero { font-size: 40px !important; }
        }
      `}</style>
    </section>
  );
}
