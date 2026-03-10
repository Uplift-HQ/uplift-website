import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronDown, Users, Calendar, TrendingUp,
  BarChart3, Smartphone, Star, Menu, X, Target, Award, Clock,
  Building2, GraduationCap, Globe, Sparkles, DollarSign, Heart,
  CheckCircle2, Play, Wallet, FileText, Bell, Shield, Lock,
  UserCheck, ClipboardList, PieChart, Layers, Phone,
  ShoppingBag, Hotel, HeartPulse, Factory, Zap
} from 'lucide-react';

// ============================================================================
// CONSTANTS
// ============================================================================
const COLORS = {
  momentum: '#FF6B35',
  momentumLight: '#FF8C5A',
  darkSlate: '#0F172A',
  slate800: '#1E293B',
  slate700: '#334155',
  slate600: '#475569',
  slate400: '#94A3B8',
  slate200: '#E2E8F0',
  white: '#FFFFFF',
};

const CALENDLY_URL = 'https://calendly.com/dazevedo-uplifthq/30min';

// ============================================================================
// LOGO COMPONENT
// ============================================================================
const UpliftLogo = ({ size = 40, color = "light" }) => {
  const textColor = color === "light" ? COLORS.white : COLORS.darkSlate;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill={COLORS.momentum}/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
      <span style={{
        fontSize: size * 0.6,
        fontWeight: 600,
        color: textColor,
        fontFamily: "'Outfit', sans-serif",
        letterSpacing: '-0.02em'
      }}>Uplift</span>
    </div>
  );
};

// ============================================================================
// IPHONE FRAME COMPONENT
// ============================================================================
const IPhoneFrame = ({ children, scale = 1, className = "" }) => (
  <div className={className} style={{
    width: 280 * scale,
    background: '#1a1a1a',
    borderRadius: 44 * scale,
    padding: 10 * scale,
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
  }}>
    <div style={{
      width: '100%',
      background: COLORS.white,
      borderRadius: 34 * scale,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: 10 * scale,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 100 * scale,
        height: 28 * scale,
        background: '#000',
        borderRadius: 14 * scale,
        zIndex: 20,
      }} />
      {children}
    </div>
  </div>
);

// Hero Phone Mockup - Worker App Home Screen
const HeroPhoneMockup = () => (
  <div style={{
    width: '280px',
    height: '580px',
    background: '#1a1a1a',
    borderRadius: '44px',
    padding: '10px',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
  }}>
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0f172a',
      borderRadius: '34px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '28px',
        background: '#000',
        borderRadius: '14px',
        zIndex: 20,
      }} />

      {/* Screen Content */}
      <div style={{ padding: '50px 16px 16px', height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '13px', color: '#94a3b8' }}>Good afternoon</div>
          <div style={{ fontSize: '22px', fontWeight: 700, color: 'white' }}>Maria</div>
        </div>

        {/* Momentum Score Card */}
        <div style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #ff8c5a 100%)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Score Ring */}
            <div style={{ position: 'relative', width: '70px', height: '70px', flexShrink: 0 }}>
              <svg viewBox="0 0 70 70" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="6" />
                <circle cx="35" cy="35" r="28" fill="none" stroke="white" strokeWidth="6"
                  strokeDasharray={`${82 * 1.76} 176`} strokeLinecap="round" />
              </svg>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'white' }}>82</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>Momentum Score</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)' }}>Level 4 • 2,450 XP</div>
              <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '4px', height: '4px', marginTop: '8px', width: '100px' }}>
                <div style={{ background: 'white', borderRadius: '4px', height: '4px', width: '65%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
          {[
            { label: 'Schedule', Icon: Calendar },
            { label: 'Time Off', Icon: Clock },
            { label: 'Training', Icon: GraduationCap },
            { label: 'Payslips', Icon: Wallet },
          ].map((action, i) => (
            <div key={i} style={{
              background: '#1e293b',
              borderRadius: '12px',
              padding: '12px 8px',
              textAlign: 'center',
            }}>
              <div style={{ marginBottom: '4px', display: 'flex', justifyContent: 'center' }}><action.Icon size={18} color="#94a3b8" /></div>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>{action.label}</div>
            </div>
          ))}
        </div>

        {/* Next Shift Card */}
        <div style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '14px',
          marginBottom: '16px',
          border: '1px solid #334155',
        }}>
          <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '6px' }}>NEXT SHIFT</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>Tomorrow</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>9:00 AM - 5:00 PM</div>
            </div>
            <div style={{ background: '#FF6B35', borderRadius: '8px', padding: '6px 10px' }}>
              <div style={{ fontSize: '10px', color: 'white', fontWeight: 500 }}>Floor</div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '8px' }}>RECENT ACHIEVEMENTS</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[Star, Award, Target, Heart].map((BadgeIcon, i) => (
              <div key={i} style={{
                width: '40px',
                height: '40px',
                background: '#1e293b',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #334155',
              }}><BadgeIcon size={18} color="#FF6B35" /></div>
            ))}
          </div>
        </div>

        {/* Announcement */}
        <div style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '12px',
          border: '1px solid #334155',
        }}>
          <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><Bell size={10} /> ANNOUNCEMENT</div>
          <div style={{ fontSize: '12px', color: 'white', lineHeight: 1.4 }}>Team meeting tomorrow at 2 PM in the break room.</div>
        </div>
      </div>

      {/* Home Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '4px',
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
      }} />
    </div>
  </div>
);

// ============================================================================
// NOVA ICON COMPONENT
// ============================================================================
const NovaIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FF6B35"/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

// ============================================================================
// NAVIGATION
// ============================================================================
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nova', href: '/nova', highlight: true },
    { label: 'Platform', href: '#platform' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${COLORS.slate700}` : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <UpliftLogo size={36} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{
              color: link.highlight ? COLORS.momentum : COLORS.slate200,
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: link.highlight ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              {link.highlight && <NovaIcon size={24} />}
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
          <Link to="/demo" style={{
            padding: '10px 20px',
            background: 'transparent',
            border: `1px solid ${COLORS.slate600}`,
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}>Try Live Demo</Link>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
            padding: '10px 20px',
            background: COLORS.momentum,
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Book a Call
            <ArrowRight size={16} />
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: COLORS.white,
          cursor: 'pointer',
        }} className="mobile-menu-btn">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: COLORS.darkSlate,
          borderBottom: `1px solid ${COLORS.slate700}`,
          padding: '24px',
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: link.highlight ? COLORS.momentum : COLORS.slate200,
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: link.highlight ? 600 : 500,
              padding: '12px 0',
              borderBottom: `1px solid ${COLORS.slate700}`,
            }}>
              {link.highlight && <NovaIcon size={24} />}
              {link.label}
            </a>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'block',
            marginTop: '16px',
            padding: '12px 20px',
            background: COLORS.momentum,
            color: COLORS.white,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
            textAlign: 'center',
          }}>Book a Call</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

// ============================================================================
// HERO SECTION - Mobile-first with phone + portal composite
// ============================================================================
const HeroSection = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${COLORS.darkSlate} 0%, ${COLORS.slate800} 50%, ${COLORS.darkSlate} 100%)`,
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: `radial-gradient(circle, ${COLORS.momentum}20 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">
        {/* Left Content */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: `${COLORS.momentum}20`,
            border: `1px solid ${COLORS.momentum}40`,
            borderRadius: '100px',
            padding: '8px 16px',
            marginBottom: '24px',
          }}>
            <Sparkles size={16} color={COLORS.momentum} />
            <span style={{ color: COLORS.momentum, fontSize: '14px', fontWeight: 500 }}>
              AI-Powered Workforce Management
            </span>
          </div>

          <h1 style={{
            fontSize: '52px',
            fontWeight: 700,
            color: COLORS.white,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }} className="hero-title">
            The app that makes frontline workers
            <span style={{ color: COLORS.momentum }}> stay.</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '520px',
          }}>
            The only platform that gives frontline workers career visibility, skills tracking,
            and a Momentum Score — while giving managers AI scheduling, demand forecasting,
            and real-time team intelligence.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }} className="hero-buttons">
            <Link to="/demo" style={{
              padding: '16px 28px',
              background: COLORS.momentum,
              color: COLORS.white,
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: `0 4px 20px ${COLORS.momentum}40`,
            }}>
              <Play size={18} fill="white" />
              Try Live Demo
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: '16px 28px',
              background: 'transparent',
              border: `1px solid ${COLORS.slate600}`,
              color: COLORS.white,
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Book a Call
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }} className="hero-stats">
            {[
              { value: '48', label: 'Languages' },
              { value: '3', label: 'Role-Based Experiences' },
              { value: '36+', label: 'App Screens' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: COLORS.white }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: COLORS.slate400 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Portal + Mobile Composite (SaaS style) */}
        <div style={{ position: 'relative', height: '520px' }}>
          {/* Portal Screenshot - Main focus */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '580px',
            background: COLORS.slate800,
            borderRadius: '12px',
            padding: '6px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: `1px solid ${COLORS.slate700}`,
          }} className="portal-preview">
            <div style={{
              background: COLORS.slate700,
              borderRadius: '8px 8px 0 0',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
              </div>
            </div>
            <img src="/screenshots/admin-dashboard.png" alt="Uplift Portal" style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0 0 6px 6px',
              display: 'block',
            }} />
          </div>

          {/* iPhone - Small, bottom-right corner overlay */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-30px',
            zIndex: 10,
          }} className="phone-preview">
            <div style={{
              width: '160px',
              background: '#1a1a1a',
              borderRadius: '28px',
              padding: '6px',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
            }}>
              <div style={{
                width: '100%',
                borderRadius: '22px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Dynamic Island */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50px',
                  height: '16px',
                  background: '#000',
                  borderRadius: '8px',
                  zIndex: 20,
                }} />
                <img src="/screenshots/worker-app-home.png" alt="Uplift Worker App" style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-title { font-size: 36px !important; }
          .portal-preview { width: 100% !important; position: relative !important; }
          .phone-preview { display: none !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// PROBLEM SECTION
// ============================================================================
const ProblemSection = () => {
  return (
    <section style={{
      background: COLORS.slate800,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: '24px',
          letterSpacing: '-0.02em',
        }}>
          <span style={{ color: COLORS.momentum }}>52%</span> of frontline workers leave because they can't see a future.
        </h2>
        <p style={{
          fontSize: '18px',
          color: COLORS.slate400,
          lineHeight: 1.7,
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}>
          Unlike scheduling tools, Uplift gives workers a career. Unlike HR platforms,
          Uplift is built for the floor, not the boardroom.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '£11,000', label: 'Average cost to replace one worker' },
            { value: '45%', label: 'Of turnover happens in first 90 days' },
            { value: '3.2x', label: 'Higher retention with career visibility' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: COLORS.momentum }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: COLORS.slate400, maxWidth: '180px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// NOVA AI ASSISTANT SECTION
// ============================================================================
const NovaSection = () => {
  const capabilities = [
    {
      title: 'Takes Action',
      description: 'Not a FAQ bot. Nova actually does things — request time off, check payslips, build schedules.',
      Icon: Zap,
    },
    {
      title: 'Knows Your Data',
      description: 'Integrated with your real company data. Respects role-based permissions.',
      Icon: Lock,
    },
    {
      title: 'Works Everywhere',
      description: 'Portal, Mobile App, Slack, Teams, WhatsApp. 48 languages.',
      Icon: Globe,
    },
  ];

  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: `radial-gradient(circle, ${COLORS.momentum}10 0%, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}>
            <NovaIcon size={64} />
          </div>

          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Meet Nova.
          </h2>

          <p style={{
            fontSize: '22px',
            color: COLORS.momentum,
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            The workforce assistant that actually does things.
          </p>

          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}>
            Nova is an AI assistant built into every part of Uplift. Workers, managers, and HR can ask questions
            and take action through natural language — across portal, mobile, Slack, Teams, and WhatsApp.
          </p>

          {/* Capability cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '48px',
          }} className="nova-grid">
            {capabilities.map((cap, i) => (
              <div key={i} style={{
                background: COLORS.slate800,
                border: `1px solid ${COLORS.slate700}`,
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: `${COLORS.momentum}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <cap.Icon size={28} color={COLORS.momentum} />
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: COLORS.white,
                  marginBottom: '8px',
                }}>
                  {cap.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: COLORS.slate400,
                  lineHeight: 1.6,
                }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/nova" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 28px',
            background: COLORS.momentum,
            color: COLORS.white,
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
            boxShadow: `0 4px 20px ${COLORS.momentum}40`,
          }}>
            Learn more about Nova
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nova-grid { grid-template-columns: 1fr !important; max-width: 400px !important; margin: 0 auto 48px !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// BUILT FOR WORKERS FIRST SECTION - NEW
// ============================================================================
// SVG Phone Mockup Component
const PhoneMockup = ({ children }) => (
  <div style={{
    width: '180px',
    height: '360px',
    background: '#1a1a1a',
    borderRadius: '32px',
    padding: '8px',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
    margin: '0 auto',
  }}>
    {/* Notch */}
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: '#0f172a',
      borderRadius: '24px',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '24px',
        background: '#1a1a1a',
        borderRadius: '0 0 16px 16px',
        zIndex: 10,
      }} />
      {/* Screen Content */}
      <div style={{ padding: '32px 12px 12px', height: '100%', boxSizing: 'border-box' }}>
        {children}
      </div>
    </div>
  </div>
);

// Momentum Score Screen
const MomentumScreen = () => (
  <div style={{ textAlign: 'center', color: 'white' }}>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '8px' }}>MOMENTUM SCORE</div>
    <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 12px' }}>
      <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r="42" fill="none" stroke="#334155" strokeWidth="8" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#FF6B35" strokeWidth="8"
          strokeDasharray={`${82 * 2.64} 264`} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ fontSize: '28px', fontWeight: 700 }}>82</div>
      </div>
    </div>
    <div style={{ background: '#FF6B35', borderRadius: '12px', padding: '4px 12px', display: 'inline-block', fontSize: '11px', fontWeight: 600, marginBottom: '8px' }}>Level 4</div>
    <div style={{ background: '#334155', borderRadius: '4px', height: '6px', margin: '8px 0' }}>
      <div style={{ background: '#10B981', borderRadius: '4px', height: '6px', width: '65%' }} />
    </div>
    <div style={{ fontSize: '9px', color: '#94a3b8' }}>2,450 / 3,000 XP to Level 5</div>
  </div>
);

// Career Paths Screen
const CareerScreen = () => (
  <div style={{ color: 'white', fontSize: '10px' }}>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '12px', textAlign: 'center' }}>CAREER PATH</div>
    <div style={{ background: '#334155', borderRadius: '8px', padding: '10px', marginBottom: '8px' }}>
      <div style={{ color: '#94a3b8', fontSize: '8px' }}>CURRENT ROLE</div>
      <div style={{ fontWeight: 600, fontSize: '11px' }}>Floor Associate</div>
      <div style={{ color: '#10B981', fontSize: '9px' }}>£11.50/hr</div>
    </div>
    <div style={{ textAlign: 'center', color: '#FF6B35', margin: '4px 0' }}>↓</div>
    <div style={{ background: '#1e293b', borderRadius: '8px', padding: '10px', border: '1px solid #FF6B35' }}>
      <div style={{ color: '#FF6B35', fontSize: '8px' }}>NEXT ROLE</div>
      <div style={{ fontWeight: 600, fontSize: '11px' }}>Senior Floor Associate</div>
      <div style={{ color: '#10B981', fontSize: '9px' }}>£13.80/hr (+20%)</div>
    </div>
    <div style={{ marginTop: '10px' }}>
      <div style={{ fontSize: '8px', color: '#94a3b8', marginBottom: '4px' }}>SKILLS NEEDED</div>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        <span style={{ background: '#10B981', borderRadius: '4px', padding: '2px 6px', fontSize: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}><Check size={8} /> POS</span>
        <span style={{ background: '#10B981', borderRadius: '4px', padding: '2px 6px', fontSize: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}><Check size={8} /> Stock</span>
        <span style={{ background: '#334155', borderRadius: '4px', padding: '2px 6px', fontSize: '8px' }}>Training</span>
      </div>
    </div>
  </div>
);

// Schedule Screen
const ScheduleScreen = () => (
  <div style={{ color: 'white', fontSize: '10px' }}>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '8px', textAlign: 'center' }}>THIS WEEK</div>
    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
      <div key={day} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '6px',
        padding: '6px 8px',
        background: i === 1 ? '#FF6B3520' : '#334155',
        borderRadius: '6px',
        border: i === 1 ? '1px solid #FF6B35' : 'none',
      }}>
        <div style={{ width: '28px', fontSize: '9px', color: '#94a3b8' }}>{day}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: '10px' }}>{i === 4 ? 'Day Off' : '9:00 - 17:00'}</div>
          {i !== 4 && <div style={{ fontSize: '8px', color: '#94a3b8' }}>{i === 0 ? 'Floor' : i === 1 ? 'Till 3' : i === 2 ? 'Stock Room' : 'Floor'}</div>}
        </div>
      </div>
    ))}
  </div>
);

// Skills Screen
const SkillsScreen = () => (
  <div style={{ color: 'white', fontSize: '10px' }}>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '10px', textAlign: 'center' }}>MY SKILLS</div>
    {[
      { name: 'Customer Service', verified: true, level: 85 },
      { name: 'POS Systems', verified: true, level: 100 },
      { name: 'Stock Management', verified: false, level: 60 },
      { name: 'Team Leadership', verified: false, level: 30 },
    ].map((skill) => (
      <div key={skill.name} style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
          <span style={{ fontSize: '10px' }}>{skill.name}</span>
          {skill.verified && <span style={{ background: '#10B981', borderRadius: '4px', padding: '1px 4px', fontSize: '7px', display: 'flex', alignItems: 'center' }}><Check size={8} /></span>}
        </div>
        <div style={{ background: '#334155', borderRadius: '3px', height: '5px' }}>
          <div style={{ background: skill.verified ? '#10B981' : '#FF6B35', borderRadius: '3px', height: '5px', width: `${skill.level}%` }} />
        </div>
      </div>
    ))}
  </div>
);

// Recognition Screen
const RecognitionScreen = () => (
  <div style={{ color: 'white', fontSize: '10px' }}>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '8px', textAlign: 'center' }}>RECOGNITION</div>
    <div style={{ background: '#FF6B3520', borderRadius: '8px', padding: '10px', textAlign: 'center', marginBottom: '10px' }}>
      <div style={{ fontSize: '20px', fontWeight: 700, color: '#FF6B35' }}>1,250</div>
      <div style={{ fontSize: '9px', color: '#94a3b8' }}>Points Balance</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '10px' }}>
      {[Star, Award, Heart, Target, Sparkles, Users].map((BadgeIcon, i) => (
        <div key={i} style={{ background: '#334155', borderRadius: '6px', padding: '8px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BadgeIcon size={14} color="#FF6B35" /></div>
      ))}
    </div>
    <div style={{ background: '#334155', borderRadius: '6px', padding: '8px' }}>
      <div style={{ fontSize: '9px', color: '#10B981', marginBottom: '2px' }}>Latest Kudos</div>
      <div style={{ fontSize: '9px' }}>"Great teamwork today!" - Sarah M.</div>
    </div>
  </div>
);

const WorkersFirstSection = () => {
  const features = [
    { title: 'Momentum Score', subtitle: 'See your progress, not just your schedule.', screenshot: '/screenshots/worker-app-home.png' },
    { title: 'Career Paths', subtitle: 'Know where you\'re going.', screenshot: '/screenshots/worker-app-career.png' },
    { title: 'Smart Scheduling', subtitle: 'Your time, your visibility.', screenshot: '/screenshots/worker-app-schedule.png' },
    { title: 'Skills & Learning', subtitle: 'Grow while you work.', screenshot: '/screenshots/worker_skills.jpeg' },
    { title: 'Recognition & Rewards', subtitle: 'Get seen for what you do.', screenshot: '/screenshots/worker-app-rewards.png' },
  ];

  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Built for the people who do the work.
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Most workforce tech is built for managers. Uplift is built for workers — and that's why they stay.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '24px',
        }} className="workers-grid">
          {features.map((feature, i) => (
            <div key={i} style={{
              background: COLORS.slate800,
              borderRadius: '20px',
              padding: '28px 20px',
              textAlign: 'center',
              border: `1px solid ${COLORS.slate700}`,
            }}>
              {feature.screenshot ? (
                <div style={{
                  width: '180px',
                  background: '#1a1a1a',
                  borderRadius: '32px',
                  padding: '8px',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                  margin: '0 auto',
                }}>
                  <div style={{
                    width: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '70px',
                      height: '22px',
                      background: '#1a1a1a',
                      borderRadius: '0 0 12px 12px',
                      zIndex: 10,
                    }} />
                    <img src={feature.screenshot} alt={feature.title} style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }} />
                  </div>
                </div>
              ) : (
                <PhoneMockup>
                  <feature.Screen />
                </PhoneMockup>
              )}
              <h3 style={{
                fontSize: '17px',
                fontWeight: 600,
                color: COLORS.white,
                marginTop: '24px',
                marginBottom: '8px',
              }}>{feature.title}</h3>
              <p style={{
                fontSize: '14px',
                color: COLORS.slate400,
                lineHeight: 1.5,
              }}>{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .workers-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .workers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .workers-grid { grid-template-columns: 1fr !important; max-width: 320px !important; margin: 0 auto !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// THREE EXPERIENCES SECTION (not "portals")
// ============================================================================
const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState('hr');

  const experiences = {
    hr: {
      title: 'HR & Operations',
      tabName: 'The Control Tower',
      description: 'Complete workforce management with scheduling, time tracking, payroll, performance reviews, learning management, and analytics. Everything you need to run HR operations at scale.',
      features: ['Employee database & onboarding', 'AI schedule builder & demand forecasting', 'Multi-country payroll & compliance', 'Performance reviews & 1-on-1s', 'Learning management system', 'Reports & workforce analytics'],
      screenshot: '/screenshots/admin-dashboard.png',
      isPortal: true,
      icon: Building2,
      color: COLORS.momentum,
    },
    manager: {
      title: 'Department Managers',
      tabName: 'The Operations Cockpit',
      description: 'Empower managers with the tools they need to run their teams effectively. Approve requests, build schedules, run performance reviews, and track team metrics — all from one dashboard.',
      features: ['Team schedule management', 'Time-off & swap approvals', 'Performance tracking & 1-on-1s', 'Team analytics dashboard', 'Direct messaging', 'Shift coverage alerts'],
      screenshot: '/screenshots/manager-dashboard.png',
      isPortal: true,
      icon: Users,
      color: '#3B82F6',
    },
    worker: {
      title: 'Employees',
      tabName: 'My Work Life',
      description: 'Give every employee a powerful portal experience. View schedules, request time off, track their Momentum Score, complete training, give recognition, and grow their career.',
      features: ['Personal dashboard & schedule', 'Time-off requests & swaps', 'Momentum Score tracking', 'Learning & certifications', 'Peer recognition wall', 'Career path visibility'],
      screenshot: '/screenshots/worker-dashboard.png',
      isPortal: true,
      icon: Smartphone,
      color: '#10B981',
    },
  };

  const active = experiences[activeTab];

  return (
    <section id="platform" style={{
      background: COLORS.slate800,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Three Experiences. One Platform.
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Tailored experiences for HR administrators, department managers, and frontline employees —
            each designed for how they actually work.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {Object.entries(experiences).map(([key, exp]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '14px 24px',
                background: activeTab === key ? exp.color : COLORS.darkSlate,
                border: `1px solid ${activeTab === key ? exp.color : COLORS.slate700}`,
                borderRadius: '12px',
                color: COLORS.white,
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s',
              }}
            >
              <exp.icon size={18} />
              {exp.tabName}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '64px',
          alignItems: 'center',
        }} className="experience-grid">
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: COLORS.white,
              marginBottom: '16px',
            }}>{active.title}</h3>

            <p style={{
              fontSize: '16px',
              color: COLORS.slate400,
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>{active.description}</p>

            <div style={{ display: 'grid', gap: '10px', marginBottom: '28px' }}>
              {active.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check size={16} color={active.color} />
                  <span style={{ color: COLORS.slate200, fontSize: '14px' }}>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/demo" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: active.color,
              color: COLORS.white,
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
            }}>
              Try {active.title} Experience
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Screenshot - Portal or Phone based on experience */}
          {active.isPortal ? (
            <div style={{
              background: COLORS.darkSlate,
              borderRadius: '16px',
              padding: '8px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
              border: `1px solid ${COLORS.slate700}`,
            }}>
              <div style={{
                background: COLORS.slate700,
                borderRadius: '10px 10px 0 0',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
                </div>
              </div>
              <img src={active.screenshot} alt={active.title} style={{
                width: '100%',
                height: 'auto',
                borderRadius: '0 0 8px 8px',
                display: 'block',
              }} />
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IPhoneFrame scale={1.1}>
                <img src={active.screenshot} alt={active.title} style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }} />
              </IPhoneFrame>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .experience-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// MODULES SECTION
// ============================================================================
const ModulesSection = () => {
  const modules = [
    { icon: Calendar, title: 'Scheduling', desc: 'AI-powered schedule builder with demand forecasting', color: '#3B82F6' },
    { icon: Clock, title: 'Time Tracking', desc: 'GPS clock-in/out, break tracking, timesheets', color: '#8B5CF6' },
    { icon: Wallet, title: 'Payroll', desc: 'Multi-country payroll with tax calculations', color: '#10B981' },
    { icon: TrendingUp, title: 'Performance', desc: 'Goals, reviews, and continuous feedback', color: '#F59E0B' },
    { icon: GraduationCap, title: 'Learning', desc: 'Courses, certifications, compliance', color: '#EC4899' },
    { icon: Award, title: 'Recognition', desc: 'Peer recognition and rewards', color: '#14B8A6' },
    { icon: Target, title: 'Momentum Score', desc: 'Unified engagement metric', color: COLORS.momentum },
    { icon: ClipboardList, title: 'Surveys', desc: 'Pulse surveys and eNPS', color: '#6366F1' },
    { icon: FileText, title: 'Documents', desc: 'Digital signing and storage', color: '#0EA5E9' },
    { icon: UserCheck, title: 'Onboarding', desc: 'Automated workflows and checklists', color: '#22C55E' },
    { icon: PieChart, title: 'Analytics', desc: 'Workforce insights and trends', color: '#F97316' },
    { icon: Layers, title: 'Integrations', desc: 'Connect your existing tools', color: '#A855F7' },
  ];

  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Everything Included. No Feature Gating.
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Every customer gets every module. The only difference between plans is team size and support level.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }} className="modules-grid">
          {modules.map((mod, i) => (
            <div key={i} style={{
              background: COLORS.slate800,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '14px',
              padding: '20px',
              transition: 'all 0.3s',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: `${mod.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <mod.icon size={22} color={mod.color} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: COLORS.white, marginBottom: '6px' }}>{mod.title}</h3>
              <p style={{ fontSize: '13px', color: COLORS.slate400, lineHeight: 1.5 }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .modules-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// MOMENTUM SCORE SECTION
// ============================================================================
const MomentumSection = () => {
  const factors = [
    { label: 'Attendance', value: 95, color: '#22C55E' },
    { label: 'Performance', value: 88, color: '#3B82F6' },
    { label: 'Learning', value: 72, color: '#8B5CF6' },
    { label: 'Recognition', value: 85, color: '#F59E0B' },
    { label: 'Engagement', value: 90, color: '#EC4899' },
  ];

  return (
    <section style={{
      background: COLORS.slate800,
      padding: '120px 24px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="momentum-grid">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: `${COLORS.momentum}20`,
              borderRadius: '100px',
              padding: '8px 16px',
              marginBottom: '24px',
            }}>
              <Sparkles size={16} color={COLORS.momentum} />
              <span style={{ color: COLORS.momentum, fontSize: '14px', fontWeight: 500 }}>Unique to Uplift</span>
            </div>

            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              color: COLORS.white,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}>The Momentum Score</h2>

            <p style={{
              fontSize: '17px',
              color: COLORS.slate400,
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              A single, powerful metric that combines attendance, performance, learning, recognition,
              and engagement into one actionable score. Employees see their progress; managers spot
              opportunities; HR tracks organizational health.
            </p>

            <div style={{ display: 'grid', gap: '14px', marginBottom: '28px' }}>
              {[
                'Gamified progression with XP and levels',
                'Visible career path acceleration',
                'Team and department leaderboards',
                'Predictive retention insights',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} color={COLORS.momentum} />
                  <span style={{ color: COLORS.slate200, fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/demo" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              background: COLORS.momentum,
              color: COLORS.white,
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
            }}>
              See Momentum in Action
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            background: COLORS.darkSlate,
            borderRadius: '24px',
            padding: '32px',
            border: `1px solid ${COLORS.slate700}`,
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: `conic-gradient(${COLORS.momentum} 0deg 306deg, ${COLORS.slate700} 306deg 360deg)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <div style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  background: COLORS.darkSlate,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <span style={{ fontSize: '36px', fontWeight: 700, color: COLORS.white }}>847</span>
                  <span style={{ fontSize: '11px', color: COLORS.slate400 }}>of 1000</span>
                </div>
              </div>
              <h4 style={{ color: COLORS.white, fontSize: '16px', fontWeight: 600, marginBottom: '2px' }}>Sarah Mitchell</h4>
              <p style={{ color: COLORS.slate400, fontSize: '13px' }}>Level 12 • Rising Star</p>
            </div>

            <div style={{ display: 'grid', gap: '14px' }}>
              {factors.map((factor, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ color: COLORS.slate200, fontSize: '13px' }}>{factor.label}</span>
                    <span style={{ color: factor.color, fontSize: '13px', fontWeight: 600 }}>{factor.value}%</span>
                  </div>
                  <div style={{ height: '6px', background: COLORS.slate700, borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${factor.value}%`, height: '100%', background: factor.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .momentum-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// INDUSTRIES SECTION - NEW
// ============================================================================
const IndustriesSection = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Retail',
      stat: '73%',
      statLabel: 'annual turnover',
      challenges: 'Seasonal peaks. Multi-location scheduling. High churn.',
      color: '#3B82F6',
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      stat: '55%',
      statLabel: 'leave within 90 days',
      challenges: 'Shift complexity. Multilingual teams. Guest satisfaction.',
      color: '#F59E0B',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare',
      stat: '2.5x',
      statLabel: 'compliance burden',
      challenges: 'Certification tracking. Burnout prevention. Coverage gaps.',
      color: '#EC4899',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      stat: '40%',
      statLabel: 'skills gap',
      challenges: 'Safety compliance. Multi-site operations. Upskilling.',
      color: '#10B981',
    },
  ];

  return (
    <section id="industries" style={{
      background: COLORS.darkSlate,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Built for Frontline Industries
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Purpose-built for the unique challenges of shift-based workforces.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }} className="industries-grid">
          {industries.map((ind, i) => (
            <div key={i} style={{
              background: COLORS.slate800,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '16px',
              padding: '28px 24px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: `${ind.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <ind.icon size={28} color={ind.color} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: COLORS.white, marginBottom: '12px' }}>{ind.title}</h3>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: ind.color }}>{ind.stat}</span>
                <span style={{ fontSize: '13px', color: COLORS.slate400, display: 'block' }}>{ind.statLabel}</span>
              </div>
              <p style={{ fontSize: '13px', color: COLORS.slate400, lineHeight: 1.5 }}>{ind.challenges}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// PRICING SECTION
// ============================================================================
const PricingSection = () => {
  const includedFeatures = [
    'All 16 modules included',
    'Nova AI assistant',
    'Mobile apps (Worker + Manager)',
    'AI scheduling & demand forecasting',
    'Multi-country payroll',
    'Analytics, reporting & integrations',
  ];

  const plans = [
    {
      name: 'Growth',
      employees: '0–500 users',
      price: '15',
      popular: false,
      enterprise: false,
    },
    {
      name: 'Scale',
      employees: '500–1,000 users',
      price: '12',
      popular: true,
      enterprise: false,
    },
    {
      name: 'Enterprise',
      employees: '1,000+ users',
      price: 'POA',
      popular: false,
      enterprise: true,
    },
  ];

  return (
    <section id="pricing" style={{
      background: COLORS.slate800,
      padding: '120px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '540px',
            margin: '0 auto',
          }}>
            One price. Everything included. No feature gating. No per-module charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '48px',
          alignItems: 'stretch',
        }} className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.enterprise
                ? `linear-gradient(135deg, ${COLORS.slate700} 0%, ${COLORS.darkSlate} 100%)`
                : plan.popular
                  ? `linear-gradient(135deg, ${COLORS.momentum}15, ${COLORS.darkSlate})`
                  : COLORS.darkSlate,
              border: `2px solid ${plan.popular ? COLORS.momentum : plan.enterprise ? COLORS.slate600 : COLORS.slate700}`,
              borderRadius: '20px',
              padding: '32px 28px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: COLORS.momentum,
                  color: COLORS.white,
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: '100px',
                }}>Most Popular</div>
              )}

              {/* Tier name & workers */}
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: COLORS.white, marginBottom: '4px' }}>{plan.name}</h3>
              <p style={{ fontSize: '14px', color: COLORS.slate400, marginBottom: '20px' }}>{plan.employees}</p>

              {/* Price */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, color: COLORS.white }}>
                  {plan.price === 'POA' ? 'POA' : `£${plan.price}`}
                </span>
                {plan.price !== 'POA' && <span style={{ color: COLORS.slate400, fontSize: '14px' }}>/user/month</span>}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: COLORS.slate700, marginBottom: '24px' }} />

              {/* Everything included */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: COLORS.white, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Everything included:
                </h4>
                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                  {includedFeatures.map((feature, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check size={16} color={COLORS.momentum} strokeWidth={3} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: COLORS.slate200 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacer to push button down */}
              <div style={{ flex: 1, minHeight: '24px' }} />

              {/* CTA */}
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                padding: '14px 48px',
                background: plan.popular ? COLORS.momentum : plan.enterprise ? COLORS.slate700 : 'transparent',
                border: plan.popular ? 'none' : plan.enterprise ? `1px solid ${COLORS.slate500}` : `1px solid ${COLORS.slate600}`,
                color: COLORS.white,
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
              }}>Book a Call</a>
            </div>
          ))}
        </div>

        {/* Summary box */}
        <div style={{
          background: COLORS.darkSlate,
          borderRadius: '16px',
          padding: '28px 40px',
          border: `1px solid ${COLORS.slate700}`,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '16px',
            color: COLORS.slate400,
            margin: 0,
          }}>
            <span style={{ color: COLORS.white, fontWeight: 600 }}>Every plan includes everything.</span> All 16 modules, Nova AI, mobile apps, 48 languages, offline mode, and all integrations. No feature gating. No per-module charges.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; margin: 0 auto 48px !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// GLOBAL SECTION - FIXED (removed SOC 2, fixed language count)
// ============================================================================
const GlobalSection = () => {
  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <Globe size={48} color={COLORS.momentum} style={{ marginBottom: '24px' }} />

        <h2 style={{
          fontSize: '36px',
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Built for Global Teams
        </h2>
        <p style={{
          fontSize: '18px',
          color: COLORS.slate400,
          marginBottom: '48px',
          maxWidth: '640px',
          margin: '0 auto 48px',
        }}>
          Support for 48 languages, multi-country payroll compliance, and localized experiences
          for teams across the world.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '48', label: 'Languages' },
            { value: 'Multi-Country', label: 'Payroll' },
            { value: 'GDPR', label: 'Compliant' },
            { value: 'Everything', label: 'Included' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: COLORS.momentum, marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: COLORS.slate400 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CTA SECTION
// ============================================================================
const CTASection = () => {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${COLORS.momentum} 0%, ${COLORS.momentumLight} 100%)`,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 700,
          color: COLORS.white,
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Ready to Uplift Your Team?
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '32px',
        }}>
          Try the full platform with our interactive demo, or book a call with the founder.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/demo" style={{
            padding: '16px 32px',
            background: COLORS.white,
            color: COLORS.momentum,
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Play size={18} fill={COLORS.momentum} />
            Try Live Demo
          </Link>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
            padding: '16px 32px',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.3)',
            color: COLORS.white,
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 600,
          }}>
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FOOTER
// ============================================================================
const Footer = () => {
  // Only include links that actually work
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Nova AI', href: '/nova' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '/demo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: `mailto:hello@uplifthq.co.uk` },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer style={{
      background: COLORS.darkSlate,
      borderTop: `1px solid ${COLORS.slate700}`,
      padding: '80px 24px 40px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">
          <div>
            <UpliftLogo size={32} />
            <p style={{
              color: COLORS.slate400,
              fontSize: '14px',
              lineHeight: 1.7,
              marginTop: '16px',
              maxWidth: '280px',
            }}>
              The complete workforce management platform for frontline teams.
              Built for workers first.
            </p>
            <a
              href="https://linkedin.com/company/uplifthq"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: COLORS.slate400,
                textDecoration: 'none',
                fontSize: '13px',
                marginTop: '16px',
              }}
            >
              LinkedIn
            </a>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{
                color: COLORS.white,
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>{section.title}</h4>
              <div style={{ display: 'grid', gap: '12px' }}>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      color: COLORS.slate400,
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: `1px solid ${COLORS.slate700}`,
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: COLORS.slate400, fontSize: '14px' }}>
            © {new Date().getFullYear()} Uplift Technologies Ltd. All rights reserved.
          </p>
          <p style={{ color: COLORS.slate600, fontSize: '13px' }}>Made with care in London</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <NovaSection />
      <WorkersFirstSection />
      <ExperiencesSection />
      <ModulesSection />
      <MomentumSection />
      <IndustriesSection />
      <PricingSection />
      <GlobalSection />
      <CTASection />
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap');
      `}</style>
    </div>
  );
}
