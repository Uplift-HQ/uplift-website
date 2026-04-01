import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

// ============================================================================
// SCREENSHOT DATA - Real product screenshots
// ============================================================================

const portalScreens = [
  { src: '/screenshots/portal_dashboard.png', caption: 'Live workforce overview' },
  { src: '/screenshots/portal_schedule.png', caption: 'AI-powered scheduling' },
  { src: '/screenshots/portal_skills.png', caption: 'Skills and compliance tracking' },
  { src: '/screenshots/portal_employees.png', caption: 'Complete team management' },
];

const managerScreens = [
  { src: '/screenshots/manager_dashboard.jpeg', caption: 'Team stats at a glance' },
  { src: '/screenshots/manager_approvals.jpeg', caption: 'One-tap approvals' },
  { src: '/screenshots/manager_schedule_builder.jpeg', caption: 'Build and publish rotas' },
  { src: '/screenshots/manager_demand_forecast.jpeg', caption: 'AI demand forecasting' },
];

const workerScreens = [
  { src: '/screenshots/worker_home.jpeg', caption: 'Your shift and momentum score' },
  { src: '/screenshots/worker_schedule.jpeg', caption: 'See your schedule instantly' },
  { src: '/screenshots/worker_career_path.jpeg', caption: 'Track your progress' },
  { src: '/screenshots/worker_skills.jpeg', caption: 'Build verified skills' },
  { src: '/screenshots/worker_tasks.jpeg', caption: 'Complete tasks, earn points' },
];

// ============================================================================
// DEVICE FRAMES
// ============================================================================

const BrowserFrame = ({ children, isActive }) => (
  <div style={{
    background: '#1E293B',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: isActive
      ? '0 25px 50px -12px rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)'
      : '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    transition: 'box-shadow 0.3s ease',
    width: '100%',
    maxWidth: '800px',
  }}>
    {/* Browser Chrome */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      background: '#0F172A',
      borderBottom: '1px solid #334155'
    }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
      </div>
      <div style={{
        flex: 1,
        marginLeft: '12px',
        background: '#1E293B',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '12px',
        color: '#64748B',
        fontFamily: 'monospace'
      }}>
        app.uplifthq.co.uk
      </div>
    </div>
    {/* Content */}
    <div style={{
      aspectRatio: '16/10',
      overflow: 'hidden',
      position: 'relative',
      background: '#0F172A'
    }}>
      {children}
    </div>
  </div>
);

const PhoneFrame = ({ children, isActive }) => (
  <div style={{
    background: '#1E293B',
    borderRadius: '40px',
    padding: '10px',
    boxShadow: isActive
      ? '0 25px 50px -12px rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)'
      : '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    transition: 'box-shadow 0.3s ease',
    width: '100%',
    maxWidth: '260px',
  }}>
    <div style={{
      background: '#0F172A',
      borderRadius: '32px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90px',
        height: '28px',
        background: '#000',
        borderRadius: '14px',
        zIndex: 10
      }} />
      {/* Content */}
      <div style={{
        aspectRatio: '9/19.5',
        overflow: 'hidden',
        position: 'relative',
        background: '#F8FAFC'
      }}>
        {children}
      </div>
    </div>
  </div>
);

// ============================================================================
// IMAGE CAROUSEL (for each panel)
// ============================================================================

const ImageCarousel = ({ screens, isPaused, interval = 3500, deviceType = 'phone' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % screens.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, screens.length, interval]);

  // For browser screenshots, scale up and position to show content area better
  const isBrowser = deviceType === 'browser';

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <img
        src={screens[currentIndex].src}
        alt={screens[currentIndex].caption}
        style={{
          width: isBrowser ? '115%' : '100%',
          height: isBrowser ? '115%' : '100%',
          objectFit: 'cover',
          objectPosition: isBrowser ? 'top left' : 'top center',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      {/* Caption overlay at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        padding: isBrowser ? '30px 16px 14px' : '20px 12px 10px',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}>
        <p style={{
          color: 'white',
          fontSize: isBrowser ? '14px' : '11px',
          fontWeight: 500,
          margin: 0,
          textAlign: 'center',
          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
        }}>
          {screens[currentIndex].caption}
        </p>
      </div>
      {/* Progress dots */}
      <div style={{
        position: 'absolute',
        bottom: '4px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '4px',
      }}>
        {screens.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentIndex ? '12px' : '4px',
              height: '4px',
              borderRadius: '2px',
              background: i === currentIndex ? '#FF6B35' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// PRODUCT PANEL
// ============================================================================

const ProductPanel = ({
  title,
  subtitle,
  icon: Icon,
  iconColor,
  screens,
  deviceType,
  isPaused,
  isActive,
  onMouseEnter,
  onMouseLeave,
  interval
}) => {
  const Frame = deviceType === 'browser' ? BrowserFrame : PhoneFrame;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: deviceType === 'browser' ? 'none' : 1,
        width: deviceType === 'browser' ? '100%' : 'auto',
        minWidth: deviceType === 'browser' ? 'auto' : '200px',
        maxWidth: deviceType === 'browser' ? '800px' : '280px',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: `${iconColor}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={20} color={iconColor} />
        </div>
        <div>
          <h3 style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            margin: 0
          }}>
            {title}
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '12px',
            margin: 0
          }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Device Frame with Carousel */}
      <Frame isActive={isActive}>
        <ImageCarousel screens={screens} isPaused={isPaused} interval={interval} deviceType={deviceType} />
      </Frame>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ProductTourCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for auto-play on viewport entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (panel) => {
    setActivePanel(panel);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setActivePanel(null);
    setIsPaused(false);
  };

  // Stagger the intervals slightly so they don't all sync up
  const portalInterval = 3500;
  const managerInterval = 3700;
  const workerInterval = 3300;

  return (
    <div
      ref={containerRef}
      style={{
        padding: '60px 24px',
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
        <h2 style={{
          color: 'white',
          fontSize: 'clamp(28px, 5vw, 40px)',
          fontWeight: 700,
          margin: '0 0 16px',
          lineHeight: 1.2
        }}>
          One platform. Three experiences.
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '18px',
          margin: 0,
          lineHeight: 1.6
        }}>
          From head office analytics to deskless workers' pockets — everyone gets the tools they need.
        </p>
      </div>

      {/* Portal Panel - Full Width on Top */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '900px',
        margin: '0 auto 48px',
      }}>
        <ProductPanel
          title="Head Office Portal"
          subtitle="AI scheduling & analytics"
          icon={Monitor}
          iconColor="#8B5CF6"
          screens={portalScreens}
          deviceType="browser"
          isPaused={!isVisible || (isPaused && activePanel !== 'portal')}
          isActive={activePanel === 'portal'}
          onMouseEnter={() => handleMouseEnter('portal')}
          onMouseLeave={handleMouseLeave}
          interval={portalInterval}
        />
      </div>

      {/* Mobile Apps - Side by Side Below */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 'clamp(32px, 6vw, 80px)',
        flexWrap: 'wrap',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        {/* Manager Panel */}
        <ProductPanel
          title="Manager App"
          subtitle="Approvals & team management"
          icon={Smartphone}
          iconColor="#3B82F6"
          screens={managerScreens}
          deviceType="phone"
          isPaused={!isVisible || (isPaused && activePanel !== 'manager')}
          isActive={activePanel === 'manager'}
          onMouseEnter={() => handleMouseEnter('manager')}
          onMouseLeave={handleMouseLeave}
          interval={managerInterval}
        />

        {/* Worker Panel */}
        <ProductPanel
          title="Worker App"
          subtitle="Schedules & career paths"
          icon={Smartphone}
          iconColor="#FF6B35"
          screens={workerScreens}
          deviceType="phone"
          isPaused={!isVisible || (isPaused && activePanel !== 'worker')}
          isActive={activePanel === 'worker'}
          onMouseEnter={() => handleMouseEnter('worker')}
          onMouseLeave={handleMouseLeave}
          interval={workerInterval}
        />
      </div>

      {/* Hover hint */}
      <p style={{
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '13px',
        marginTop: '32px'
      }}>
        Hover to pause • Auto-cycles every 3-4 seconds
      </p>
    </div>
  );
}
