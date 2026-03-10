import React, { useState, useEffect } from 'react';
import {
  Home, Calendar, Target, Award, User, MessageSquare, FileCheck,
  TrendingUp, Clock, MapPin, Check, ChevronRight, Star, Gift,
  Users, BarChart3, Brain, AlertTriangle, Bell, Search, Filter,
  CheckCircle2, Zap, Settings, ArrowRight, RefreshCw, UserCheck,
  Shield, Eye
} from 'lucide-react';

// ============================================================================
// PHONE MOCKUP FRAME
// ============================================================================
const PhoneMockup = ({ children }) => (
  <div style={{
    width: '280px',
    background: '#1E293B',
    borderRadius: '40px',
    padding: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  }}>
    <div style={{
      width: '100%',
      height: '560px',
      background: '#0F172A',
      borderRadius: '32px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '28px',
        background: '#0F172A',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        zIndex: 10
      }} />
      {children}
    </div>
  </div>
);

// ============================================================================
// BROWSER MOCKUP FRAME
// ============================================================================
const BrowserMockup = ({ children, url = "portal.uplifthq.co.uk" }) => (
  <div style={{
    width: '100%',
    maxWidth: '580px',
    background: '#1E293B',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
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
        color: '#64748B'
      }}>
        {url}
      </div>
    </div>
    {/* Content */}
    <div style={{ height: '340px', overflow: 'hidden' }}>
      {children}
    </div>
  </div>
);

// ============================================================================
// WORKER APP BOTTOM NAV
// ============================================================================
const WorkerBottomNav = ({ active = 'Home' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#FFFFFF',
    borderTop: '1px solid #E2E8F0',
    padding: '8px 4px 16px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: Home, label: 'Home' },
      { icon: Calendar, label: 'Schedule' },
      { icon: Target, label: 'Career' },
      { icon: Award, label: 'Rewards' },
      { icon: User, label: 'Profile' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={18} color={item.label === active ? '#FF6B35' : '#94A3B8'} />
        <span style={{
          color: item.label === active ? '#FF6B35' : '#94A3B8',
          fontSize: '9px',
          marginTop: '2px',
          fontWeight: item.label === active ? 600 : 400
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

// ============================================================================
// MANAGER APP BOTTOM NAV
// ============================================================================
const ManagerBottomNav = ({ active = 'Team' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#FFFFFF',
    borderTop: '1px solid #E2E8F0',
    padding: '8px 4px 16px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: Users, label: 'Team' },
      { icon: Calendar, label: 'Rota' },
      { icon: Bell, label: 'Requests' },
      { icon: BarChart3, label: 'Insights' },
      { icon: User, label: 'Profile' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={18} color={item.label === active ? '#FF6B35' : '#94A3B8'} />
        <span style={{
          color: item.label === active ? '#FF6B35' : '#94A3B8',
          fontSize: '9px',
          marginTop: '2px',
          fontWeight: item.label === active ? 600 : 400
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

// ============================================================================
// WORKER APP SCREENS (10 screens)
// ============================================================================

// Screen 1: Home Dashboard
const WorkerHomeScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Good morning</p>
      <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>Sarah Mitchell</p>
    </div>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>This week</p>
      <p style={{ color: 'white', fontSize: '28px', fontWeight: 700, margin: '2px 0 4px' }}>£342.50</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <TrendingUp size={12} color="white" />
        <span style={{ color: 'white', fontSize: '11px' }}>+12% from last week</span>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', border: '1px solid #E2E8F0' }}>
        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Hours</p>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>28.5</p>
      </div>
      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', border: '1px solid #E2E8F0' }}>
        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Shifts</p>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>6</p>
      </div>
    </div>

    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
      <p style={{ color: '#64748B', fontSize: '11px', margin: '0 0 8px', fontWeight: 500 }}>Upcoming shifts</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '13px', margin: 0 }}>Tuesday 9:00 - 17:00</p>
          <p style={{ color: '#64748B', fontSize: '11px', margin: '2px 0 0' }}>Oxford Street</p>
        </div>
        <ChevronRight size={16} color="#94A3B8" />
      </div>
    </div>

    <div style={{
      background: 'linear-gradient(90deg, #FFF7ED 0%, #FEF3C7 100%)',
      borderRadius: '12px',
      padding: '12px',
      border: '1px solid #FFEDD5'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Target size={16} color="#FF6B35" />
        <span style={{ color: '#0F172A', fontSize: '12px' }}>3 skills to Shift Supervisor</span>
      </div>
    </div>

    <WorkerBottomNav active="Home" />
  </div>
);

// Screen 2: Schedule View
const WorkerScheduleScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: 0 }}>My Schedule</p>
      <p style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>January 2026</p>
    </div>

    <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
        <div key={i} style={{
          flex: 1,
          padding: '8px 4px',
          borderRadius: '8px',
          background: [1, 3, 5].includes(i) ? '#FF6B35' : '#F8FAFC',
          textAlign: 'center'
        }}>
          <p style={{
            color: [1, 3, 5].includes(i) ? 'white' : '#64748B',
            fontSize: '10px',
            margin: 0
          }}>{day}</p>
          <p style={{
            color: [1, 3, 5].includes(i) ? 'white' : '#0F172A',
            fontSize: '14px',
            fontWeight: 600,
            margin: '2px 0 0'
          }}>{20 + i}</p>
        </div>
      ))}
    </div>

    {[
      { day: 'Tuesday', time: '09:00 - 17:00', location: 'Oxford Street', hours: '8h' },
      { day: 'Thursday', time: '12:00 - 20:00', location: 'Oxford Street', hours: '8h' },
      { day: 'Saturday', time: '10:00 - 18:00', location: 'Regent Street', hours: '8h' }
    ].map((shift, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '8px',
        border: '1px solid #E2E8F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ color: '#FF6B35', fontSize: '11px', fontWeight: 500, margin: 0 }}>{shift.day}</p>
          <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '13px', margin: '2px 0' }}>{shift.time}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={10} color="#64748B" />
            <span style={{ color: '#64748B', fontSize: '11px' }}>{shift.location}</span>
          </div>
        </div>
        <div style={{
          background: '#E0F2FE',
          color: '#0369A1',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: 500
        }}>{shift.hours}</div>
      </div>
    ))}

    <WorkerBottomNav active="Schedule" />
  </div>
);

// Screen 3: Shift Detail
const WorkerShiftDetailScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 4px' }}>Thursday, 23 January</p>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 16px' }}>Shift Details</p>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Shift Time</p>
      <p style={{ color: 'white', fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>12:00 - 20:00</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0 }}>8 hours</p>
    </div>

    <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <MapPin size={18} color="#FF6B35" />
        <div>
          <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Location</p>
          <p style={{ color: '#0F172A', fontSize: '13px', fontWeight: 500, margin: 0 }}>Oxford Street Store</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Users size={18} color="#FF6B35" />
        <div>
          <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Team</p>
          <p style={{ color: '#0F172A', fontSize: '13px', fontWeight: 500, margin: 0 }}>5 colleagues on shift</p>
        </div>
      </div>
    </div>

    <div style={{ background: '#FFF7ED', borderRadius: '12px', padding: '12px', border: '1px solid #FFEDD5' }}>
      <p style={{ color: '#92400E', fontSize: '11px', fontWeight: 500, margin: '0 0 8px' }}>Required Skills</p>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {['Latte Art', 'POS System', 'Food Handling'].map((skill, i) => (
          <span key={i} style={{
            background: 'white',
            color: '#0F172A',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Check size={10} color="#10B981" /> {skill}
          </span>
        ))}
      </div>
    </div>

    <WorkerBottomNav active="Schedule" />
  </div>
);

// Screen 4: Shift Marketplace
const WorkerMarketplaceScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>Shift Marketplace</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>Pick up extra shifts</p>

    <div style={{
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
        <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 600 }}>
          TIME AND A HALF
        </span>
        <span style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>+£95</span>
      </div>
      <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', margin: '0 0 4px' }}>Sunday, 26 January</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: 0 }}>10:00 - 18:00 • Oxford Street</p>
    </div>

    {[
      { day: 'Monday, 27 Jan', time: '14:00 - 22:00', location: 'Regent Street', pay: '+£64' },
      { day: 'Wednesday, 29 Jan', time: '09:00 - 17:00', location: 'Oxford Street', pay: '+£64' }
    ].map((shift, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '8px',
        border: '1px solid #E2E8F0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '13px', margin: 0 }}>{shift.day}</p>
          <p style={{ color: '#64748B', fontSize: '11px', margin: '2px 0 0' }}>{shift.time} • {shift.location}</p>
        </div>
        <span style={{ color: '#10B981', fontWeight: 600, fontSize: '14px' }}>{shift.pay}</span>
      </div>
    ))}

    <WorkerBottomNav active="Schedule" />
  </div>
);

// Screen 5: Shift Claimed
const WorkerShiftClaimedScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: '#DCFCE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    }}>
      <Check size={32} color="#16A34A" />
    </div>

    <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '0 0 8px' }}>Shift Claimed!</p>
    <p style={{ color: '#64748B', fontSize: '13px', margin: '0 0 24px', textAlign: 'center' }}>You got it before anyone else</p>

    <div style={{
      background: '#F8FAFC',
      borderRadius: '16px',
      padding: '20px',
      width: '100%',
      maxWidth: '240px',
      textAlign: 'center'
    }}>
      <p style={{ color: '#10B981', fontSize: '12px', fontWeight: 500, margin: '0 0 4px' }}>Sunday, 26 January</p>
      <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: '0 0 4px' }}>10:00 - 18:00</p>
      <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 12px' }}>Oxford Street Store</p>
      <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}>
        +£95 earned
      </div>
    </div>

    <WorkerBottomNav active="Schedule" />
  </div>
);

// Screen 6: Skills Overview
const WorkerSkillsScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>My Skills</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>Track your progress</p>

    <div style={{
      background: '#F8FAFC',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: `conic-gradient(#FF6B35 0deg ${0.75 * 360}deg, #E2E8F0 ${0.75 * 360}deg 360deg)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#0F172A', fontWeight: 700, fontSize: '14px' }}>75%</span>
        </div>
      </div>
      <div>
        <p style={{ color: '#0F172A', fontWeight: 600, fontSize: '14px', margin: 0 }}>12 of 16 skills</p>
        <p style={{ color: '#64748B', fontSize: '12px', margin: '2px 0 0' }}>4 more to Shift Supervisor</p>
      </div>
    </div>

    {[
      { name: 'Latte Art', status: 'completed', date: 'Dec 2025' },
      { name: 'POS System', status: 'completed', date: 'Nov 2025' },
      { name: 'Food Safety L2', status: 'completed', date: 'Oct 2025' },
      { name: 'Team Leadership', status: 'in-progress', progress: 60 },
      { name: 'Inventory Mgmt', status: 'locked' }
    ].map((skill, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {skill.status === 'completed' && <CheckCircle2 size={18} color="#10B981" />}
          {skill.status === 'in-progress' && <Clock size={18} color="#F59E0B" />}
          {skill.status === 'locked' && <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#E2E8F0' }} />}
          <span style={{ color: skill.status === 'locked' ? '#94A3B8' : '#0F172A', fontSize: '13px', fontWeight: 500 }}>{skill.name}</span>
        </div>
        {skill.status === 'completed' && <span style={{ color: '#64748B', fontSize: '11px' }}>{skill.date}</span>}
        {skill.status === 'in-progress' && <span style={{ color: '#F59E0B', fontSize: '11px', fontWeight: 500 }}>{skill.progress}%</span>}
      </div>
    ))}

    <WorkerBottomNav active="Career" />
  </div>
);

// Screen 7: Skill Detail
const WorkerSkillDetailScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 4px' }}>Skill Progress</p>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 16px' }}>Team Leadership</p>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Progress</p>
      <p style={{ color: 'white', fontSize: '36px', fontWeight: 700, margin: '4px 0' }}>60%</p>
      <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '4px', height: '6px', marginTop: '8px' }}>
        <div style={{ background: 'white', borderRadius: '4px', height: '100%', width: '60%' }} />
      </div>
    </div>

    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 8px', fontWeight: 500 }}>Modules</p>
    {[
      { name: 'Communication Basics', complete: true },
      { name: 'Conflict Resolution', complete: true },
      { name: 'Team Motivation', complete: false },
      { name: 'Delegation Skills', complete: false }
    ].map((module, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ color: '#0F172A', fontSize: '13px' }}>{module.name}</span>
        {module.complete ? (
          <Check size={16} color="#10B981" />
        ) : (
          <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: '2px solid #E2E8F0' }} />
        )}
      </div>
    ))}

    <WorkerBottomNav active="Career" />
  </div>
);

// Screen 8: Career Path
const WorkerCareerPathScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>Career Path</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>See where you can go</p>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '12px',
      padding: '14px',
      marginBottom: '16px'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: 0 }}>Current Role</p>
      <p style={{ color: 'white', fontSize: '16px', fontWeight: 600, margin: '2px 0' }}>Barista</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '11px', margin: 0 }}>Since March 2024</p>
    </div>

    <div style={{ position: 'relative', paddingLeft: '20px' }}>
      <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(180deg, #FF6B35, #8B5CF6)' }} />

      {[
        { role: 'Store Manager', time: '3-4 years', skills: 5, locked: true },
        { role: 'Assistant Manager', time: '2-3 years', skills: 3, locked: true },
        { role: 'Shift Supervisor', time: '1-2 years', skills: 4, locked: false, next: true },
        { role: 'Barista', time: 'Current', skills: 0, locked: false, current: true }
      ].map((level, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: level.current ? '#FF6B35' : level.next ? '#10B981' : '#E2E8F0',
            border: level.next ? '3px solid #DCFCE7' : 'none',
            marginTop: '2px',
            flexShrink: 0
          }} />
          <div style={{ flex: 1 }}>
            <p style={{
              color: level.locked ? '#94A3B8' : '#0F172A',
              fontSize: '13px',
              fontWeight: 600,
              margin: 0
            }}>{level.role}</p>
            <p style={{ color: '#64748B', fontSize: '11px', margin: '2px 0 0' }}>{level.time}</p>
            {level.skills > 0 && (
              <p style={{ color: level.next ? '#10B981' : '#94A3B8', fontSize: '10px', margin: '4px 0 0' }}>
                {level.skills} skills needed
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

    <WorkerBottomNav active="Career" />
  </div>
);

// Screen 9: Rewards
const WorkerRewardsScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 16px' }}>Rewards</p>

    <div style={{
      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Your Points</p>
      <p style={{ color: 'white', fontSize: '36px', fontWeight: 700, margin: '4px 0' }}>1,250</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: 0 }}>+50 points today</p>
    </div>

    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 8px', fontWeight: 500 }}>Recent Points</p>
    {[
      { action: 'Picked up Sunday shift', points: '+50', icon: Calendar },
      { action: 'Completed training', points: '+25', icon: Award },
      { action: 'Perfect attendance', points: '+30', icon: Star }
    ].map((item, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <item.icon size={16} color="#8B5CF6" />
          <span style={{ color: '#0F172A', fontSize: '12px' }}>{item.action}</span>
        </div>
        <span style={{ color: '#10B981', fontWeight: 600, fontSize: '12px' }}>{item.points}</span>
      </div>
    ))}

    <p style={{ color: '#64748B', fontSize: '12px', margin: '16px 0 8px', fontWeight: 500 }}>Redeem Rewards</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      {[
        { name: '£10 Gift Card', points: '500 pts' },
        { name: 'Extra PTO Day', points: '1000 pts' }
      ].map((reward, i) => (
        <div key={i} style={{
          background: '#F8FAFC',
          borderRadius: '10px',
          padding: '12px',
          textAlign: 'center'
        }}>
          <Gift size={20} color="#8B5CF6" style={{ marginBottom: '4px' }} />
          <p style={{ color: '#0F172A', fontSize: '12px', fontWeight: 500, margin: 0 }}>{reward.name}</p>
          <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{reward.points}</p>
        </div>
      ))}
    </div>

    <WorkerBottomNav active="Rewards" />
  </div>
);

// Screen 10: Home with Notification
const WorkerHomeNotificationScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <div style={{
      background: '#DCFCE7',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Bell size={16} color="white" />
      </div>
      <div>
        <p style={{ color: '#166534', fontSize: '12px', fontWeight: 600, margin: 0 }}>Shift Confirmed!</p>
        <p style={{ color: '#15803D', fontSize: '11px', margin: 0 }}>Sunday 10:00-18:00 added</p>
      </div>
    </div>

    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Good morning</p>
      <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>Sarah Mitchell</p>
    </div>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>This week (updated)</p>
      <p style={{ color: 'white', fontSize: '28px', fontWeight: 700, margin: '2px 0 4px' }}>£437.50</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <TrendingUp size={12} color="white" />
        <span style={{ color: 'white', fontSize: '11px' }}>+£95 from new shift</span>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', border: '1px solid #E2E8F0' }}>
        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Hours</p>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>36.5</p>
      </div>
      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', border: '1px solid #E2E8F0' }}>
        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Shifts</p>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>7</p>
      </div>
    </div>

    <div style={{
      background: 'linear-gradient(90deg, #FFF7ED 0%, #FEF3C7 100%)',
      borderRadius: '12px',
      padding: '12px',
      border: '1px solid #FFEDD5'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Target size={16} color="#FF6B35" />
        <span style={{ color: '#0F172A', fontSize: '12px' }}>3 skills to Shift Supervisor</span>
      </div>
    </div>

    <WorkerBottomNav active="Home" />
  </div>
);

// ============================================================================
// PORTAL SCREENS (Head Office - Browser, 4 screens)
// ============================================================================

// Portal Screen 1: Dashboard
const PortalDashboardScreen = () => (
  <div style={{ background: '#F8FAFC', height: '100%', padding: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <div>
        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>Good morning</p>
        <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: 0 }}>James Wilson</p>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <Bell size={16} color="#64748B" />
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
      {[
        { label: 'On Shift', value: '42', color: '#10B981' },
        { label: 'Scheduled', value: '156', color: '#3B82F6' },
        { label: 'Open Gaps', value: '3', color: '#F59E0B' },
        { label: 'Flight Risk', value: '2', color: '#EF4444' }
      ].map((stat, i) => (
        <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ color: stat.color, fontSize: '18px', fontWeight: 700, margin: 0 }}>{stat.value}</p>
          <p style={{ color: '#64748B', fontSize: '9px', margin: '2px 0 0' }}>{stat.label}</p>
        </div>
      ))}
    </div>

    <div style={{ background: 'white', borderRadius: '12px', padding: '12px', marginBottom: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <p style={{ color: '#0F172A', fontSize: '12px', fontWeight: 600, margin: '0 0 10px' }}>This Week Coverage</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <p style={{ color: '#64748B', fontSize: '9px', margin: 0 }}>{day}</p>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: i === 5 ? '#FEF3C7' : '#DCFCE7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '4px',
              fontSize: '10px',
              fontWeight: 600,
              color: i === 5 ? '#92400E' : '#166534'
            }}>
              {i === 5 ? '!' : <Check size={14} />}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ background: '#FEF3C7', borderRadius: '10px', padding: '10px', border: '1px solid #FDE68A' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AlertTriangle size={14} color="#D97706" />
        <span style={{ color: '#92400E', fontSize: '11px', fontWeight: 500 }}>Saturday needs 2 more staff</span>
      </div>
    </div>
  </div>
);

// Portal Screen 2: Schedule/Rota
const PortalScheduleScreen = () => (
  <div style={{ background: '#F8FAFC', height: '100%', padding: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <p style={{ color: '#0F172A', fontSize: '14px', fontWeight: 600, margin: 0 }}>AI-Generated Rota</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Zap size={14} color="#FF6B35" />
        <span style={{ color: '#FF6B35', fontSize: '10px', fontWeight: 500 }}>Auto-built overnight</span>
      </div>
    </div>

    <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', fontSize: '9px', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ padding: '8px', background: '#F8FAFC', fontWeight: 500, color: '#64748B' }}>Staff</div>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
          <div key={i} style={{
            padding: '8px',
            background: i === 5 ? '#FEF3C7' : '#F8FAFC',
            textAlign: 'center',
            fontWeight: 500,
            color: i === 5 ? '#92400E' : '#64748B'
          }}>{d}</div>
        ))}
      </div>
      {[
        { name: 'Sarah M.', shifts: [1, 0, 1, 0, 1, 1, 0] },
        { name: 'Tom K.', shifts: [1, 1, 0, 1, 1, 0, 0] },
        { name: 'Emma R.', shifts: [0, 1, 1, 1, 0, 0, 0] },
        { name: 'Alex P.', shifts: [1, 0, 1, 0, 1, 0, 1] }
      ].map((staff, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ padding: '8px', fontSize: '10px', color: '#0F172A', fontWeight: 500 }}>{staff.name}</div>
          {staff.shifts.map((s, j) => (
            <div key={j} style={{ padding: '6px', display: 'flex', justifyContent: 'center', background: j === 5 && s === 0 ? '#FEF3C7' : 'transparent' }}>
              {s === 1 && <div style={{ width: '100%', height: '16px', background: '#DBEAFE', borderRadius: '3px', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4ED8' }}>9-5</div>}
              {s === 0 && j === 5 && <div style={{ width: '16px', height: '16px', borderRadius: '3px', border: '2px dashed #F59E0B' }} />}
            </div>
          ))}
        </div>
      ))}
    </div>

    <div style={{ background: '#DCFCE7', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
      <Brain size={12} color="#16A34A" />
      <span style={{ color: '#166534', fontSize: '10px' }}>98% coverage • 2 gaps detected</span>
    </div>
  </div>
);

// Portal Screen 3: AI Suggestions
const PortalAISuggestionsScreen = () => (
  <div style={{ background: '#F8FAFC', height: '100%', padding: '16px' }}>
    <p style={{ color: '#0F172A', fontSize: '14px', fontWeight: 600, margin: '0 0 12px' }}>AI Recommendations</p>

    <div style={{
      background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      borderRadius: '12px',
      padding: '14px',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <AlertTriangle size={16} color="#D97706" />
        <span style={{ color: '#92400E', fontSize: '12px', fontWeight: 600 }}>Saturday Gap</span>
      </div>
      <p style={{ color: '#78350F', fontSize: '11px', margin: 0 }}>10:00-14:00 needs 2 more staff</p>
    </div>

    <p style={{ color: '#64748B', fontSize: '11px', margin: '0 0 8px', fontWeight: 500 }}>Best Matches</p>
    {[
      { name: 'Sarah Mitchell', reason: 'Requested extra hours', match: '95%' },
      { name: 'Alex Parker', reason: 'Available, all skills', match: '88%' }
    ].map((suggestion, i) => (
      <div key={i} style={{
        background: 'white',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ color: '#0F172A', fontSize: '12px', fontWeight: 500, margin: 0 }}>{suggestion.name}</p>
          <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{suggestion.reason}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#10B981', fontSize: '11px', fontWeight: 600 }}>{suggestion.match}</span>
          <button style={{
            background: '#FF6B35',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '10px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>Assign</button>
        </div>
      </div>
    ))}

    <button style={{
      width: '100%',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '12px',
      fontSize: '12px',
      fontWeight: 600,
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      cursor: 'pointer'
    }}>
      <Brain size={14} /> Fill All Gaps
    </button>
  </div>
);

// Portal Screen 4: Assignment Done
const PortalAssignmentScreen = () => (
  <div style={{ background: '#F8FAFC', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: '#DCFCE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    }}>
      <Check size={28} color="#16A34A" />
    </div>

    <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: '0 0 8px' }}>All Gaps Filled!</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 20px', textAlign: 'center' }}>Staff have been notified</p>

    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '16px',
      width: '100%',
      maxWidth: '280px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <p style={{ color: '#10B981', fontSize: '11px', fontWeight: 500, margin: '0 0 4px' }}>Saturday, 25 January</p>
      <p style={{ color: '#0F172A', fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>10:00 - 14:00</p>

      <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
        <p style={{ color: '#64748B', fontSize: '10px', margin: '0 0 6px' }}>Assigned</p>
        {['Sarah Mitchell', 'Alex Parker'].map((name, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: 600 }}>
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <span style={{ color: '#0F172A', fontSize: '12px' }}>{name}</span>
          </div>
        ))}
      </div>
    </div>

    <p style={{ color: '#64748B', fontSize: '11px', marginTop: '16px' }}>Time to hit the floor.</p>
  </div>
);

// ============================================================================
// MANAGER APP SCREENS (Mobile, 6 screens)
// ============================================================================

// Manager App Screen 1: Team View
const ManagerTeamScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>Today's Team</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>12 staff on shift</p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
      {[
        { label: 'On Floor', value: '10', color: '#10B981' },
        { label: 'On Break', value: '2', color: '#F59E0B' },
        { label: 'Late', value: '0', color: '#10B981' }
      ].map((stat, i) => (
        <div key={i} style={{ background: '#F8FAFC', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
          <p style={{ color: stat.color, fontSize: '20px', fontWeight: 700, margin: 0 }}>{stat.value}</p>
          <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{stat.label}</p>
        </div>
      ))}
    </div>

    {[
      { name: 'Sarah Mitchell', role: 'Barista', time: '09:00-17:00', status: 'on-floor' },
      { name: 'Tom King', role: 'Cashier', time: '09:00-17:00', status: 'on-floor' },
      { name: 'Emma Roberts', role: 'Barista', time: '10:00-18:00', status: 'break' },
      { name: 'Alex Parker', role: 'Supervisor', time: '08:00-16:00', status: 'on-floor' }
    ].map((person, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>
            {person.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p style={{ color: '#0F172A', fontSize: '13px', fontWeight: 500, margin: 0 }}>{person.name}</p>
            <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{person.role} • {person.time}</p>
          </div>
        </div>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: person.status === 'on-floor' ? '#10B981' : '#F59E0B'
        }} />
      </div>
    ))}

    <ManagerBottomNav active="Team" />
  </div>
);

// Manager App Screen 2: Notification (Approval)
const ManagerNotificationScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>Requests</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>3 pending approvals</p>

    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: 600 }}>SM</div>
          <div>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: 600, margin: 0 }}>Sarah Mitchell</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: 0 }}>Shift Swap Request</p>
          </div>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px' }}>2m ago</span>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: '0 0 12px' }}>
        Wants to swap Thursday 12-8pm with Tom's Friday 9-5pm
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ flex: 1, background: 'white', color: '#FF6B35', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Approve</button>
        <button style={{ flex: 1, background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Decline</button>
      </div>
    </div>

    {[
      { name: 'Tom King', type: 'Time Off', detail: 'Feb 14-16', time: '1h ago' },
      { name: 'Emma Roberts', type: 'Extra Shift', detail: 'Sunday 10-6pm', time: '3h ago' }
    ].map((req, i) => (
      <div key={i} style={{
        background: '#F8FAFC',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '12px', fontWeight: 600 }}>
            {req.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p style={{ color: '#0F172A', fontSize: '13px', fontWeight: 500, margin: 0 }}>{req.name}</p>
            <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{req.type} • {req.detail}</p>
          </div>
        </div>
        <ChevronRight size={16} color="#94A3B8" />
      </div>
    ))}

    <ManagerBottomNav active="Requests" />
  </div>
);

// Manager App Screen 3: Shift Gap Alert
const ManagerShiftGapScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <div style={{
      background: '#FEF3C7',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <AlertTriangle size={20} color="#D97706" />
      <div>
        <p style={{ color: '#92400E', fontSize: '13px', fontWeight: 600, margin: 0 }}>Lunch Cover Needed</p>
        <p style={{ color: '#78350F', fontSize: '11px', margin: 0 }}>12:00 - 14:00 • 1 staff short</p>
      </div>
    </div>

    <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: '0 0 12px' }}>Post Open Shift?</p>

    <div style={{
      background: '#F8FAFC',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: '#64748B', fontSize: '12px' }}>Date</span>
        <span style={{ color: '#0F172A', fontSize: '12px', fontWeight: 500 }}>Today</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: '#64748B', fontSize: '12px' }}>Time</span>
        <span style={{ color: '#0F172A', fontSize: '12px', fontWeight: 500 }}>12:00 - 14:00</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: '#64748B', fontSize: '12px' }}>Duration</span>
        <span style={{ color: '#0F172A', fontSize: '12px', fontWeight: 500 }}>2 hours</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#64748B', fontSize: '12px' }}>Pay Rate</span>
        <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 500 }}>Standard rate</span>
      </div>
    </div>

    <button style={{
      width: '100%',
      background: '#FF6B35',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '14px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      marginBottom: '8px'
    }}>Post to Marketplace</button>

    <button style={{
      width: '100%',
      background: 'white',
      color: '#64748B',
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: '14px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer'
    }}>Assign Directly</button>

    <ManagerBottomNav active="Team" />
  </div>
);

// Manager App Screen 4: Shift Claimed
const ManagerShiftClaimedScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: '#DCFCE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    }}>
      <UserCheck size={32} color="#16A34A" />
    </div>

    <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '0 0 8px' }}>Shift Claimed!</p>
    <p style={{ color: '#64748B', fontSize: '13px', margin: '0 0 24px', textAlign: 'center' }}>Claimed in 2 minutes</p>

    <div style={{
      background: '#F8FAFC',
      borderRadius: '16px',
      padding: '20px',
      width: '100%',
      maxWidth: '240px',
      textAlign: 'center'
    }}>
      <p style={{ color: '#10B981', fontSize: '12px', fontWeight: 500, margin: '0 0 4px' }}>Today</p>
      <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: '0 0 12px' }}>12:00 - 14:00</p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>ER</div>
        <span style={{ color: '#0F172A', fontSize: '14px', fontWeight: 500 }}>Emma Roberts</span>
      </div>
    </div>

    <p style={{ color: '#64748B', fontSize: '11px', marginTop: '16px' }}>Lunch cover sorted.</p>

    <ManagerBottomNav active="Team" />
  </div>
);

// Manager App Screen 5: Team Insights
const ManagerInsightsScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: '0 0 4px' }}>Team Insights</p>
    <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 16px' }}>New starter progress</p>

    <div style={{
      background: '#F8FAFC',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px', fontWeight: 600 }}>JD</div>
        <div>
          <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: 0 }}>Jake Davis</p>
          <p style={{ color: '#64748B', fontSize: '12px', margin: '2px 0 0' }}>Started 2 weeks ago</p>
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ color: '#64748B', fontSize: '11px' }}>Onboarding Progress</span>
          <span style={{ color: '#FF6B35', fontSize: '11px', fontWeight: 600 }}>65%</span>
        </div>
        <div style={{ background: '#E2E8F0', borderRadius: '4px', height: '6px' }}>
          <div style={{ background: '#FF6B35', borderRadius: '4px', height: '100%', width: '65%' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {[
          { label: 'Shifts', value: '8' },
          { label: 'Skills', value: '4/8' },
          { label: 'Rating', value: '4.5' },
          { label: 'Attendance', value: '100%' }
        ].map((stat, i) => (
          <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <p style={{ color: '#0F172A', fontSize: '16px', fontWeight: 600, margin: 0 }}>{stat.value}</p>
            <p style={{ color: '#64748B', fontSize: '10px', margin: '2px 0 0' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div style={{ background: '#FFF7ED', borderRadius: '12px', padding: '12px', border: '1px solid #FFEDD5' }}>
      <p style={{ color: '#92400E', fontSize: '12px', fontWeight: 500, margin: '0 0 4px' }}>Next Training</p>
      <p style={{ color: '#0F172A', fontSize: '13px', margin: 0 }}>POS Advanced — Due in 3 days</p>
    </div>

    <ManagerBottomNav active="Insights" />
  </div>
);

// Manager App Screen 6: Dashboard
const ManagerDashboardScreen = () => (
  <div style={{ height: '100%', background: '#FFFFFF', padding: '44px 16px 70px' }}>
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Good afternoon</p>
      <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>James Wilson</p>
    </div>

    <div style={{
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '16px',
      textAlign: 'center'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Today's Status</p>
      <p style={{ color: 'white', fontSize: '24px', fontWeight: 700, margin: '4px 0' }}>All Clear</p>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: 0 }}>No gaps • No pending requests</p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
      {[
        { label: 'On Shift', value: '12', icon: Users },
        { label: 'Requests', value: '0', icon: Bell },
        { label: 'Open Shifts', value: '0', icon: Calendar },
        { label: 'Team Health', value: '92%', icon: TrendingUp }
      ].map((stat, i) => (
        <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <stat.icon size={20} color="#FF6B35" />
          <div>
            <p style={{ color: '#0F172A', fontSize: '18px', fontWeight: 600, margin: 0 }}>{stat.value}</p>
            <p style={{ color: '#64748B', fontSize: '10px', margin: 0 }}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>

    <div style={{
      background: '#F0FDF4',
      borderRadius: '12px',
      padding: '14px',
      textAlign: 'center'
    }}>
      <CheckCircle2 size={20} color="#16A34A" style={{ marginBottom: '4px' }} />
      <p style={{ color: '#166534', fontSize: '13px', fontWeight: 500, margin: 0 }}>No spreadsheets. No guesswork.</p>
      <p style={{ color: '#15803D', fontSize: '11px', margin: '2px 0 0' }}>Just clarity.</p>
    </div>

    <ManagerBottomNav active="Team" />
  </div>
);

// ============================================================================
// SLIDE DATA
// ============================================================================
const workerSlides = [
  { time: "6:45am", caption: "Sarah checks her shifts for the week", Screen: WorkerHomeScreen, device: "phone" },
  { time: "6:46am", caption: "She sees she's working Tuesday, Thursday, Saturday", Screen: WorkerScheduleScreen, device: "phone" },
  { time: "6:47am", caption: "Thursday's shift needs latte art skills — she's got it", Screen: WorkerShiftDetailScreen, device: "phone" },
  { time: "7:00am", caption: "An extra shift drops for Sunday. Time and a half.", Screen: WorkerMarketplaceScreen, device: "phone" },
  { time: "7:01am", caption: "She grabs it before anyone else", Screen: WorkerShiftClaimedScreen, device: "phone" },
  { time: "12:30pm", caption: "At lunch, she checks her skills progress", Screen: WorkerSkillsScreen, device: "phone" },
  { time: "12:31pm", caption: "One more certification and she qualifies for Shift Supervisor", Screen: WorkerSkillDetailScreen, device: "phone" },
  { time: "12:32pm", caption: "She can actually see the path to Supervisor → Assistant Manager", Screen: WorkerCareerPathScreen, device: "phone" },
  { time: "5:00pm", caption: "End of shift. 50 points for picking up that Sunday shift.", Screen: WorkerRewardsScreen, device: "phone" },
  { time: "", caption: "For the first time, Sarah can see where she's going.", Screen: WorkerHomeNotificationScreen, device: "phone" }
];

const managerSlides = [
  { time: "7:00am", caption: "James checks the week ahead from his office", Screen: PortalDashboardScreen, device: "browser" },
  { time: "7:01am", caption: "The AI already built next week's rota overnight", Screen: PortalScheduleScreen, device: "browser" },
  { time: "7:02am", caption: "It flagged a gap on Saturday — suggests two staff", Screen: PortalAISuggestionsScreen, device: "browser" },
  { time: "7:03am", caption: "One click. Gap filled. Time to hit the floor.", Screen: PortalAssignmentScreen, device: "browser" },
  { time: "9:00am", caption: "On the floor. He checks who's in today.", Screen: ManagerTeamScreen, device: "phone" },
  { time: "9:30am", caption: "Sarah requested a shift swap. Approved in seconds.", Screen: ManagerNotificationScreen, device: "phone" },
  { time: "12:00pm", caption: "Lunch cover needed. He posts an open shift.", Screen: ManagerShiftGapScreen, device: "phone" },
  { time: "12:05pm", caption: "Claimed in 2 minutes. Sorted.", Screen: ManagerShiftClaimedScreen, device: "phone" },
  { time: "3:00pm", caption: "Quick check on the new starter's progress.", Screen: ManagerInsightsScreen, device: "phone" },
  { time: "", caption: "No spreadsheets. No back-office trips. Just clarity.", Screen: ManagerDashboardScreen, device: "phone" }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function DayInLifeWalkthrough() {
  const [activeTab, setActiveTab] = useState('worker');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = activeTab === 'worker' ? workerSlides : managerSlides;
  const CurrentScreen = slides[currentSlide].Screen;
  const currentDevice = slides[currentSlide].device;

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length, activeTab]);

  // Reset slide when switching tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Device Mockup - switches between phone and browser */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', minHeight: currentDevice === 'browser' ? '400px' : '580px' }}>
        {currentDevice === 'phone' ? (
          <PhoneMockup>
            <CurrentScreen />
          </PhoneMockup>
        ) : (
          <BrowserMockup>
            <CurrentScreen />
          </BrowserMockup>
        )}
      </div>

      {/* Caption */}
      <div style={{ textAlign: 'center', marginBottom: '20px', minHeight: '48px' }}>
        {slides[currentSlide].time && (
          <span style={{
            color: '#FF6B35',
            fontWeight: 700,
            fontSize: '14px',
            marginRight: '8px'
          }}>
            {slides[currentSlide].time}
          </span>
        )}
        <span style={{
          color: slides[currentSlide].time ? 'rgba(255,255,255,0.9)' : 'white',
          fontSize: '14px',
          fontWeight: slides[currentSlide].time ? 400 : 500,
          fontStyle: slides[currentSlide].time ? 'normal' : 'italic'
        }}>
          {slides[currentSlide].time ? '— ' : ''}{slides[currentSlide].caption}
        </span>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
        <button
          onClick={() => setActiveTab('worker')}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: 'none',
            background: activeTab === 'worker' ? '#FF6B35' : 'rgba(255,255,255,0.1)',
            color: activeTab === 'worker' ? 'white' : 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Sarah (Worker)
        </button>
        <button
          onClick={() => setActiveTab('manager')}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: 'none',
            background: activeTab === 'manager' ? '#FF6B35' : 'rgba(255,255,255,0.1)',
            color: activeTab === 'manager' ? 'white' : 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          James (Manager)
        </button>
      </div>

      {/* Progress Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setIsPlaying(false);
            }}
            style={{
              width: i === currentSlide ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: i === currentSlide ? '#FF6B35' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0
            }}
          />
        ))}
      </div>
    </div>
  );
}
