import React, { useState, useEffect, useRef } from 'react';
import { COLORS, SPACING } from './constants';

const modules = [
  { name: 'Shift Scheduling', description: 'AI-powered scheduling with demand forecasting and compliance checking.', href: '#platform' },
  { name: 'Time & Attendance', description: 'GPS clock-in, biometrics, and automated timesheet approvals.', href: '#platform' },
  { name: 'UK Payroll', description: 'HMRC-compliant payroll with RTI submissions and auto-enrolment.', href: '#platform' },
  { name: 'Global Payroll', description: 'Multi-country payroll with local compliance and currency support.', href: '#platform' },
  { name: 'HR & Employee Records', description: 'Complete employee lifecycle management and document storage.', href: '#platform' },
  { name: 'Onboarding', description: 'Automated onboarding workflows, tasks, and progress tracking.', href: '#platform' },
  { name: 'Performance & Goals', description: 'OKRs, 1:1s, reviews, and continuous feedback systems.', href: '#platform' },
  { name: 'Learning & Compliance', description: 'Training courses, certifications, and compliance tracking.', href: '#platform' },
  { name: 'Skills & Certifications', description: 'Skills matrix, gap analysis, and certification management.', href: '#platform' },
  { name: 'Documents & e-Signatures', description: 'Secure document storage, templates, and legally-binding e-signatures.', href: '#platform' },
  { name: 'Leave & Absence', description: 'Holiday requests, sick leave tracking, and absence policies.', href: '#platform' },
  { name: 'Recognition & Rewards', description: 'Peer recognition, reward points, and milestone celebrations.', href: '#platform' },
  { name: 'Communications', description: 'Team announcements, direct messaging, and broadcast tools.', href: '#platform' },
  { name: 'Reporting & Analytics', description: 'Custom dashboards, workforce insights, and export tools.', href: '#platform' },
  { name: 'Career Pathing', description: 'AI-generated career paths based on real promotion data.', href: '#platform' },
  { name: 'Integrations Hub', description: 'Connect with HRIS, finance, and productivity tools.', href: '#platform' },
];

const modulesLeft = modules.slice(0, 8);
const modulesRight = modules.slice(8, 16);

export default function Act2Breadth() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.05}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [hoveredModule, setHoveredModule] = useState(null);

  const ModuleItem = ({ module, index }) => (
    <a
      href={module.href}
      className="reveal module-item"
      onMouseEnter={() => setHoveredModule(module.name)}
      onMouseLeave={() => setHoveredModule(null)}
      style={{
        display: 'block',
        padding: '14px 0',
        borderBottom: `1px solid ${COLORS.border}`,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease, opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        opacity: 0,
        transform: 'translateX(-10px)',
      }}
    >
      <div style={{
        fontFamily: "'Syne', Georgia, serif",
        fontSize: '1.1rem',
        fontWeight: 600,
        color: hoveredModule === module.name ? COLORS.orange : COLORS.nearBlack,
        transition: 'color 0.15s ease',
      }}>
        {module.name}
      </div>
      <div style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '0.85rem',
        color: COLORS.muted,
        marginTop: '4px',
        maxHeight: hoveredModule === module.name ? '40px' : '0',
        overflow: 'hidden',
        opacity: hoveredModule === module.name ? 1 : 0,
        transition: 'all 0.2s ease',
      }}>
        {module.description}
      </div>
    </a>
  );

  return (
    <section
      ref={sectionRef}
      style={{
        background: COLORS.chalk,
        padding: `${SPACING.xl} ${SPACING.lg}`,
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Section label */}
        <div className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: COLORS.orange,
          marginBottom: SPACING.md,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          THE PLATFORM
        </div>

        {/* Headline */}
        <h2 className="reveal" style={{
          fontFamily: "'Syne', Georgia, serif",
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: COLORS.nearBlack,
          marginBottom: SPACING.sm,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Everything your workforce needs.
        </h2>

        {/* Subheadline */}
        <p className="reveal" style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1.05rem',
          color: COLORS.muted,
          maxWidth: '560px',
          lineHeight: 1.7,
          marginBottom: SPACING.lg,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          One subscription. 16 modules. No per-feature charges.
          No add-ons. No feature gating. Every plan gets everything.
        </p>

        {/* Module list - two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0 48px',
        }} className="module-grid">
          <div>
            {modulesLeft.map((module, i) => (
              <ModuleItem key={module.name} module={module} index={i} />
            ))}
          </div>
          <div>
            {modulesRight.map((module, i) => (
              <ModuleItem key={module.name} module={module} index={i + 8} />
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="reveal" style={{
          borderTop: `2px solid ${COLORS.orange}`,
          paddingTop: SPACING.md,
          marginTop: SPACING.md,
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '1rem',
          fontWeight: 600,
          color: COLORS.nearBlack,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}>
          Plus Nova AI and Uplift Intelligence — included at every tier.
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        .module-item:hover {
          color: ${COLORS.orange} !important;
        }
        @media (max-width: 640px) {
          .module-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
