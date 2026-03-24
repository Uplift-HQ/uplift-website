import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COLORS, RADIUS, TYPOGRAPHY } from './constants';

// Uplift Logo Component
export const UpliftLogo = ({ size = 40, color = 'dark' }) => {
  const textColor = color === 'light' ? COLORS.white : COLORS.slate900;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill={COLORS.orange}/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
      <span style={{
        fontSize: size * 0.55,
        fontWeight: 600,
        color: textColor,
        fontFamily: TYPOGRAPHY.font,
        letterSpacing: '-0.02em'
      }}>Uplift</span>
    </div>
  );
};

// Nova Icon Component
export const NovaIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill={COLORS.orange}/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Nova', href: '/nova' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(248,250,252,0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${COLORS.slate200}`,
      height: '64px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 60px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Left - Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <UpliftLogo size={32} color="dark" />
        </Link>

        {/* Center - Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: COLORS.slate500,
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: TYPOGRAPHY.font,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = COLORS.slate900}
              onMouseLeave={(e) => e.target.style.color = COLORS.slate500}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right - Single CTA */}
        <div className="desktop-nav">
          <Link to="/trial" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 20px',
            background: COLORS.orange,
            color: COLORS.white,
            borderRadius: RADIUS.button,
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: TYPOGRAPHY.font,
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.orangeHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.orange;
          }}
          >
            Start free trial
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: COLORS.slate900,
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: COLORS.slate50,
          borderBottom: `1px solid ${COLORS.slate200}`,
          padding: '24px',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                color: COLORS.slate900,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 0',
                borderBottom: `1px solid ${COLORS.slate200}`,
                fontFamily: TYPOGRAPHY.font,
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/trial"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '16px',
              padding: '14px 20px',
              background: COLORS.orange,
              color: COLORS.white,
              borderRadius: RADIUS.button,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: TYPOGRAPHY.font,
            }}
          >
            Start free trial
            <ArrowRight size={14} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav > div { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  );
}
