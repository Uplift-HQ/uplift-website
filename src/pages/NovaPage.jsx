import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Check, MessageCircle, Zap, Shield, Globe,
  Smartphone, Monitor, Slack, Calendar, Clock, FileText, Users,
  BarChart3, CheckCircle2, Sparkles, X
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
const UpliftLogo = ({ size = 40, color = "dark" }) => {
  const textColor = color === "light" ? COLORS.white : COLORS.darkSlate;
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
    </Link>
  );
};

// ============================================================================
// NOVA ICON COMPONENT
// ============================================================================
const NovaIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FF6B35"/>
    <circle cx="32" cy="38" r="14" fill="white" opacity="0.95"/>
    <path d="M26 30 L32 8 L38 30 Z" fill="white" opacity="0.95"/>
    <circle cx="32" cy="38" r="18" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="32" cy="38" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
  </svg>
);

// ============================================================================
// HERO SECTION
// ============================================================================
const HeroSection = () => (
  <section style={{
    background: `linear-gradient(135deg, ${COLORS.darkSlate} 0%, ${COLORS.slate800} 50%, ${COLORS.darkSlate} 100%)`,
    padding: '140px 24px 100px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Background glow */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
      background: `radial-gradient(circle, ${COLORS.momentum}15 0%, transparent 60%)`,
      borderRadius: '50%',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div style={{ marginBottom: '32px' }}>
        <NovaIcon size={120} />
      </div>

      <h1 style={{
        fontSize: '56px',
        fontWeight: 700,
        color: COLORS.white,
        marginBottom: '20px',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      }} className="nova-hero-title">
        Meet Nova.
      </h1>

      <p style={{
        fontSize: '26px',
        color: COLORS.momentum,
        fontWeight: 600,
        marginBottom: '24px',
      }}>
        The workforce assistant that actually does things.
      </p>

      <p style={{
        fontSize: '19px',
        color: COLORS.slate400,
        maxWidth: '640px',
        margin: '0 auto 40px',
        lineHeight: 1.7,
      }}>
        Ask Nova. Request time off. Check your payslip. Build a schedule. Generate a report.
        Nova isn't a FAQ bot — it takes real action through natural language, in 48 languages.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/demo" style={{
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
          See Nova in Action
          <ArrowRight size={18} />
        </Link>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 28px',
          background: 'transparent',
          border: `1px solid ${COLORS.slate600}`,
          color: COLORS.white,
          borderRadius: '12px',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 600,
        }}>
          Book a Demo
        </a>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .nova-hero-title { font-size: 40px !important; }
      }
    `}</style>
  </section>
);

// ============================================================================
// WHAT NOVA DOES - ROLE SECTIONS
// ============================================================================
const RolesSection = () => {
  const roles = [
    {
      title: 'For Workers',
      subtitle: 'Your work life, one message away.',
      color: '#10B981',
      icon: Users,
      prompts: [
        '"Hey Nova, when\'s my next shift?"',
        '"Request Friday off for a doctor\'s appointment"',
        '"Show me my payslip for last month"',
        '"I need to swap my Saturday shift"',
        '"What training do I need to complete?"',
      ],
    },
    {
      title: 'For Managers',
      subtitle: 'Run your team from a chat message.',
      color: '#3B82F6',
      icon: BarChart3,
      prompts: [
        '"Approve all pending time-off requests"',
        '"Build next week\'s schedule with usual patterns"',
        '"Who\'s qualified to cover the evening shift?"',
        '"Generate a performance summary for Q1"',
        '"Send a message to all staff working tomorrow"',
      ],
    },
    {
      title: 'For HR & Leadership',
      subtitle: 'Intelligence on demand.',
      color: COLORS.momentum,
      icon: Shield,
      prompts: [
        '"What\'s our headcount by department?"',
        '"Show me our gender pay gap data"',
        '"How many employees completed compliance training?"',
        '"Generate the monthly payroll report"',
        '"Which teams have the highest turnover risk?"',
      ],
    },
  ];

  return (
    <section style={{
      background: COLORS.slate800,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            What Nova Does
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Different capabilities for every role — all through natural conversation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }} className="roles-grid">
          {roles.map((role, i) => (
            <div key={i} style={{
              background: COLORS.darkSlate,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '20px',
              padding: '36px 28px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${role.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <role.icon size={26} color={role.color} />
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                color: COLORS.white,
                marginBottom: '6px',
              }}>
                {role.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: role.color,
                marginBottom: '24px',
                fontWeight: 500,
              }}>
                {role.subtitle}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {role.prompts.map((prompt, j) => (
                  <div key={j} style={{
                    background: COLORS.slate800,
                    borderRadius: '10px',
                    padding: '12px 14px',
                    fontSize: '13px',
                    color: COLORS.slate200,
                    fontStyle: 'italic',
                    borderLeft: `3px solid ${role.color}`,
                  }}>
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .roles-grid { grid-template-columns: 1fr !important; max-width: 500px !important; margin: 0 auto !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// WHERE NOVA LIVES - CHANNELS
// ============================================================================
const ChannelsSection = () => {
  const channels = [
    {
      name: 'Web Portal',
      description: 'Built-in chat in every Uplift portal experience.',
      icon: Monitor,
    },
    {
      name: 'Mobile App',
      description: 'Ask Nova from your phone, anytime, anywhere.',
      icon: Smartphone,
    },
    {
      name: 'Slack',
      description: 'Get work done without leaving your workspace.',
      icon: Slack,
    },
    {
      name: 'Microsoft Teams',
      description: 'Native Teams integration for enterprise.',
      // Using MessageCircle as Teams placeholder
      icon: MessageCircle,
    },
    {
      name: 'WhatsApp',
      description: 'For frontline teams who live on mobile.',
      // Using MessageCircle as WhatsApp placeholder
      icon: MessageCircle,
    },
  ];

  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Where Nova Lives
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Meet your team where they already work. Nova is available across 5 channels.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
        }} className="channels-grid">
          {channels.map((channel, i) => (
            <div key={i} style={{
              background: COLORS.slate800,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '16px',
              padding: '28px 20px',
              textAlign: 'center',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${COLORS.momentum}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <channel.icon size={24} color={COLORS.momentum} />
              </div>

              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: COLORS.white,
                marginBottom: '8px',
              }}>
                {channel.name}
              </h3>

              <p style={{
                fontSize: '13px',
                color: COLORS.slate400,
                lineHeight: 1.5,
              }}>
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .channels-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .channels-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .channels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// HOW IT'S DIFFERENT
// ============================================================================
const DifferentSection = () => {
  const comparisons = [
    {
      vs: 'vs HR Chatbots',
      competitors: 'Leena AI, MeBeBot, etc.',
      problem: 'They just answer questions.',
      nova: 'Nova takes action. Request time off, approve requests, generate documents.',
    },
    {
      vs: 'vs WFM Competitors',
      competitors: 'Deputy, Connecteam, 7shifts',
      problem: 'None have a conversational AI assistant.',
      nova: 'Nova is built into every part of Uplift from day one.',
    },
    {
      vs: 'vs Generic AI',
      competitors: 'ChatGPT, Copilot, etc.',
      problem: 'No access to your company data.',
      nova: 'Nova knows your schedules, payroll, team structure, and permissions.',
    },
  ];

  return (
    <section style={{
      background: COLORS.slate800,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            How Nova is Different
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Nova isn't another chatbot. It's deeply integrated with your workforce data.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {comparisons.map((comp, i) => (
            <div key={i} style={{
              background: COLORS.darkSlate,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '16px',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: '200px 1fr 1fr',
              gap: '32px',
              alignItems: 'center',
            }} className="comparison-row">
              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: COLORS.white,
                  marginBottom: '4px',
                }}>
                  {comp.vs}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: COLORS.slate400,
                }}>
                  {comp.competitors}
                </p>
              </div>

              <div style={{
                background: COLORS.slate800,
                borderRadius: '12px',
                padding: '20px',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: COLORS.slate400,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  <X size={16} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {comp.problem}
                </p>
              </div>

              <div style={{
                background: `${COLORS.momentum}10`,
                border: `1px solid ${COLORS.momentum}30`,
                borderRadius: '12px',
                padding: '20px',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: COLORS.white,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  <CheckCircle2 size={18} color={COLORS.momentum} style={{ flexShrink: 0, marginTop: '2px' }} />
                  {comp.nova}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comparison-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// TRUST & SAFETY
// ============================================================================
const TrustSection = () => {
  const trustPoints = [
    {
      icon: CheckCircle2,
      title: 'Confirmation Before Action',
      description: 'Nova always asks for confirmation before executing any action. No surprises.',
    },
    {
      icon: Shield,
      title: 'Role-Based Permissions',
      description: 'Workers see their own data. Managers see their team. Admins see the org.',
    },
    {
      icon: Globe,
      title: '48 Languages',
      description: 'Auto-detected language. Nova speaks to your team in their native language.',
    },
    {
      icon: Zap,
      title: 'Under 1 Second Response',
      description: 'Fast enough to feel like a conversation, not a form submission.',
    },
  ];

  return (
    <section style={{
      background: COLORS.darkSlate,
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: COLORS.white,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Built with Trust
          </h2>
          <p style={{
            fontSize: '18px',
            color: COLORS.slate400,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Nova is designed for enterprise security and compliance from day one.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }} className="trust-grid">
          {trustPoints.map((point, i) => (
            <div key={i} style={{
              background: COLORS.slate800,
              border: `1px solid ${COLORS.slate700}`,
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              gap: '20px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${COLORS.momentum}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <point.icon size={24} color={COLORS.momentum} />
              </div>

              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: COLORS.white,
                  marginBottom: '8px',
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: COLORS.slate400,
                  lineHeight: 1.6,
                }}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================================
// STATS BAR
// ============================================================================
const StatsSection = () => {
  const stats = [
    { value: '30+', label: 'Tools & Actions' },
    { value: '<1s', label: 'Response Time' },
    { value: '48', label: 'Languages' },
    { value: '5', label: 'Channels' },
  ];

  return (
    <section style={{
      background: COLORS.momentum,
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '40px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 700,
                color: COLORS.white,
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
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
const CTASection = () => (
  <section style={{
    background: COLORS.slate800,
    padding: '100px 24px',
  }}>
    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <NovaIcon size={64} />

      <h2 style={{
        fontSize: '36px',
        fontWeight: 700,
        color: COLORS.white,
        marginTop: '24px',
        marginBottom: '16px',
        letterSpacing: '-0.02em',
      }}>
        Ready to meet Nova?
      </h2>

      <p style={{
        fontSize: '18px',
        color: COLORS.slate400,
        marginBottom: '32px',
      }}>
        See how Nova can transform how your team works.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/demo" style={{
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
          Try the Demo
          <ArrowRight size={18} />
        </Link>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 28px',
          background: 'transparent',
          border: `1px solid ${COLORS.slate600}`,
          color: COLORS.white,
          borderRadius: '12px',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 600,
        }}>
          <Calendar size={18} />
          Book a Demo
        </a>
      </div>
    </div>
  </section>
);

// ============================================================================
// FOOTER
// ============================================================================
const Footer = () => (
  <footer style={{
    background: COLORS.darkSlate,
    borderTop: `1px solid ${COLORS.slate700}`,
    padding: '40px 24px',
    textAlign: 'center',
  }}>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
      <Link to="/" style={{ color: COLORS.slate400, textDecoration: 'none', fontSize: '14px' }}>Home</Link>
      <Link to="/demo" style={{ color: COLORS.slate400, textDecoration: 'none', fontSize: '14px' }}>Demo</Link>
      <Link to="/about" style={{ color: COLORS.slate400, textDecoration: 'none', fontSize: '14px' }}>About</Link>
      <Link to="/privacy" style={{ color: COLORS.slate400, textDecoration: 'none', fontSize: '14px' }}>Privacy</Link>
      <Link to="/terms" style={{ color: COLORS.slate400, textDecoration: 'none', fontSize: '14px' }}>Terms</Link>
    </div>
    <p style={{ color: COLORS.slate600, fontSize: '14px' }}>
      &copy; {new Date().getFullYear()} Uplift Technologies Ltd. All rights reserved.
    </p>
  </footer>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function NovaPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${COLORS.slate700}`,
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <UpliftLogo size={36} color="light" />
          <Link
            to="/"
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <HeroSection />
      <RolesSection />
      <ChannelsSection />
      <DifferentSection />
      <TrustSection />
      <StatsSection />
      <CTASection />
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap');
      `}</style>
    </div>
  );
}
