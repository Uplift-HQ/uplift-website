/**
 * UPLIFT PRODUCT MOCKUPS
 *
 * Pixel-accurate React mockup components based on real product screenshots.
 * Use these for marketing materials, presentations, and documentation.
 *
 * Components included:
 *
 * FRAMES:
 * - MobileFrame: iPhone-style phone frame
 * - BrowserFrame: Desktop browser chrome frame
 *
 * NAVIGATION:
 * - WorkerBottomNav: 5-tab nav (Home, Schedule, Tasks, Career, More)
 * - ManagerBottomNav: 5-tab nav (Dashboard, Schedule, Tasks, Team, More)
 *
 * WORKER APP SCREENS:
 * - WorkerHomeScreen: Dashboard with Momentum Score, shifts, alerts
 * - WorkerScheduleScreen: Weekly schedule view with upcoming shifts
 * - WorkerCareerScreen: Career path progression view
 * - WorkerRewardsScreen: Points, perks, and rewards
 * - WorkerSkillsScreen: Skills and certifications tracker
 * - WorkerMarketplaceScreen: Open shifts marketplace
 *
 * MANAGER APP SCREENS:
 * - ManagerDashboardScreen: Team overview with stats
 * - ManagerApprovalsScreen: Time-off and shift swap requests
 *
 * PORTAL SCREENS:
 * - PortalDashboardScreen: HQ command center with live activity
 * - PortalSkillsScreen: Skills coverage matrix
 * - PortalScheduleScreen: AI-powered schedule builder
 *
 * Usage:
 * import { WorkerHomeScreen, PortalDashboardScreen } from './UpliftMockups';
 *
 * <WorkerHomeScreen />
 * <PortalDashboardScreen />
 */

import React from 'react';
import {
  Home, Calendar, Target, Award, User, MessageSquare, FileCheck,
  TrendingUp, Clock, MapPin, Check, ChevronRight, ChevronLeft, Star,
  Users, BarChart3, Brain, AlertCircle, Bell, Search, Filter,
  CheckCircle2, Zap, Settings, Plus, Eye, MoreHorizontal,
  Shield, Building2, Briefcase, Link2, Play, Activity, FileText,
  CheckSquare, Heart, Gift, Coffee, Film, Crown, Music, Dumbbell
} from 'lucide-react';

// ============================================================================
// DESIGN TOKENS (from real product)
// ============================================================================
export const COLORS = {
  primary: '#F97316',      // Uplift Orange
  primaryDark: '#EA580C',
  dark: '#1E293B',         // Dark sidebar/cards
  darkest: '#0F172A',
  background: '#F8FAFC',   // Light background
  white: '#FFFFFF',
  border: '#E2E8F0',
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  purple: '#8B5CF6',
};

// ============================================================================
// FRAME COMPONENTS
// ============================================================================

/**
 * Mobile phone frame (iPhone-style)
 */
export const MobileFrame = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div style={{
      width: '280px',
      background: COLORS.dark,
      borderRadius: '40px',
      padding: '8px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        width: '100%',
        height: '580px',
        background: COLORS.background,
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '24px',
          background: '#000',
          borderRadius: '12px',
          zIndex: 20
        }} />
        {children}
      </div>
    </div>
  </div>
);

/**
 * Desktop browser frame (Chrome-style)
 */
export const BrowserFrame = ({ children, className = "", url = "portal.uplifthq.co.uk" }) => (
  <div style={{
    background: COLORS.dark,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  }} className={className}>
    {/* Browser Chrome */}
    <div style={{
      background: '#0F172A',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      {/* Traffic lights */}
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
      </div>
      {/* URL Bar */}
      <div style={{
        flex: 1,
        background: '#1E293B',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '12px',
        color: '#94A3B8',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        border: '1px solid #334155'
      }}>
        <Shield size={12} color="#10B981" />
        {url}
      </div>
    </div>
    {children}
  </div>
);

// ============================================================================
// NAVIGATION COMPONENTS
// ============================================================================

/**
 * Worker App Bottom Navigation (5 tabs)
 */
export const WorkerBottomNav = ({ active = 'Home' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: COLORS.white,
    borderTop: `1px solid ${COLORS.border}`,
    padding: '8px 8px 20px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: Home, label: 'Home' },
      { icon: Calendar, label: 'Schedule' },
      { icon: FileCheck, label: 'Tasks' },
      { icon: Target, label: 'Career' },
      { icon: MoreHorizontal, label: 'More' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={22} color={item.label === active ? COLORS.primary : COLORS.textMuted} />
        <span style={{
          color: item.label === active ? COLORS.primary : COLORS.textMuted,
          fontSize: '10px',
          marginTop: '4px',
          fontWeight: 500
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

/**
 * Manager App Bottom Navigation (5 tabs)
 */
export const ManagerBottomNav = ({ active = 'Dashboard' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: COLORS.white,
    borderTop: `1px solid ${COLORS.border}`,
    padding: '8px 8px 20px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: BarChart3, label: 'Dashboard' },
      { icon: Calendar, label: 'Schedule' },
      { icon: FileCheck, label: 'Tasks' },
      { icon: Users, label: 'Team' },
      { icon: MoreHorizontal, label: 'More' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={22} color={item.label === active ? COLORS.primary : COLORS.textMuted} />
        <span style={{
          color: item.label === active ? COLORS.primary : COLORS.textMuted,
          fontSize: '10px',
          marginTop: '4px',
          fontWeight: 500
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

// ============================================================================
// WORKER APP SCREENS
// ============================================================================

/**
 * Worker Home Screen
 * Shows: Company branding, Momentum Score, LIVE status, alerts, quick actions, AI recommendations
 */
export const WorkerHomeScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Header with Company Branding */}
      <div style={{ background: 'white', padding: '44px 16px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}>G</span>
            </div>
            <div>
              <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: 0 }}>Good morning,</p>
              <p style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 700, margin: '2px 0 0' }}>Sarah</p>
              <p style={{ color: COLORS.primary, fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>Grand Metro Hotels</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <MessageSquare size={20} color={COLORS.textSecondary} />
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', minWidth: '20px', height: '20px', background: COLORS.primary, borderRadius: '10px', fontSize: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '2px solid white' }}>3</div>
            </div>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Bell size={20} color={COLORS.textSecondary} />
              <div style={{ position: 'absolute', top: '10px', right: '10px', width: '10px', height: '10px', background: COLORS.error, borderRadius: '5px', border: '2px solid #F1F5F9' }} />
            </div>
          </div>
        </div>

        {/* Momentum Score Card */}
        <div style={{ background: COLORS.dark, borderRadius: '16px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '32px', background: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid rgba(249, 115, 22, 0.4)', flexShrink: 0 }}>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}>87</span>
            </div>
            <div style={{ flexShrink: 0 }}>
              <p style={{ color: 'white', fontSize: '12px', fontWeight: 600, margin: 0 }}>Momentum Score</p>
              <p style={{ color: COLORS.textMuted, fontSize: '12px', margin: '2px 0 0' }}>Level 12 • 2,450 XP</p>
            </div>
            <div style={{ flex: 1, marginLeft: '16px' }}>
              <div style={{ height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden', marginBottom: '4px' }}>
                <div style={{ width: '82%', height: '100%', background: COLORS.primary, borderRadius: '3px' }} />
              </div>
              <p style={{ color: COLORS.textMuted, fontSize: '11px', margin: 0 }}>550 XP to next</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIVE Status Bar */}
      <div style={{ background: COLORS.dark, borderRadius: '12px', padding: '12px 16px', margin: '12px 16px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '50%' }} />
        <span style={{ color: COLORS.success, fontSize: '11px', fontWeight: 800, letterSpacing: '1px', marginLeft: '6px', marginRight: '16px' }}>LIVE</span>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Users size={14} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>12</span>
            <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>on shift</span>
          </div>
          <div style={{ width: '1px', height: '16px', background: '#475569' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>3</span>
            <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>break</span>
          </div>
          <div style={{ width: '1px', height: '16px', background: '#475569' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Briefcase size={14} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>5</span>
            <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>open</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 16px 80px' }}>
        {/* Certificate Alert */}
        <div style={{ background: '#FFF7ED', borderLeft: `4px solid ${COLORS.primary}`, borderRadius: '0 12px 12px 0', padding: '12px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={18} color={COLORS.primary} />
            </div>
            <div>
              <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 700, margin: 0 }}>Food Safety Certificate</p>
              <p style={{ color: COLORS.primary, fontSize: '12px', margin: '2px 0 0' }}>Expires in 5 days</p>
            </div>
          </div>
          <ChevronRight size={20} color={COLORS.textMuted} />
        </div>

        {/* Today's Shift */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700, margin: 0 }}>Today's Shift</p>
            <span style={{ color: COLORS.primary, fontSize: '12px', fontWeight: 600 }}>See All</span>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '4px' }} />
                  <span style={{ color: COLORS.textSecondary, fontSize: '12px', fontWeight: 600 }}>Confirmed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#F1F5F9', padding: '4px 12px', borderRadius: '20px' }}>
                  <Clock size={14} color={COLORS.textSecondary} />
                  <span style={{ color: COLORS.textSecondary, fontSize: '12px', fontWeight: 700 }}>8h</span>
                </div>
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 700, margin: '0 0 12px' }}>Senior Server</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} color={COLORS.textSecondary} />
                  <span style={{ color: COLORS.textSecondary, fontSize: '14px' }}>9:00am - 5:00pm</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} color={COLORS.textSecondary} />
                  <span style={{ color: COLORS.textSecondary, fontSize: '14px' }}>The Grand Hotel - Main Restaurant</span>
                </div>
              </div>
            </div>
            <button style={{ width: '100%', padding: '16px', background: COLORS.primary, color: 'white', border: 'none', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
              <Clock size={22} /> Clock In
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {[
            { icon: Calendar, label: 'Schedule', color: COLORS.info },
            { icon: CheckSquare, label: 'Tasks', color: COLORS.success },
            { icon: Briefcase, label: 'Shifts', color: COLORS.primary },
            { icon: Heart, label: 'Feed', color: COLORS.error }
          ].map((action, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '16px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: action.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <action.icon size={24} color={action.color} />
              </div>
              <span style={{ color: COLORS.textSecondary, fontSize: '11px', fontWeight: 600 }}>{action.label}</span>
            </div>
          ))}
        </div>

        {/* AI Recommended Shifts */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Zap size={18} color={COLORS.primary} />
            <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>Recommended for You</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
            {[
              { date: 'Tomorrow', time: '2pm-10pm', location: 'Edinburgh Centre', match: 95, bonus: '+£5/hr' },
              { date: 'Sat 25th', time: '8am-4pm', location: 'Glasgow West', match: 88, bonus: null }
            ].map((shift, i) => (
              <div key={i} style={{ minWidth: '160px', background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: COLORS.success + '15', padding: '4px 8px', borderRadius: '20px' }}>
                    <TrendingUp size={12} color={COLORS.success} />
                    <span style={{ color: COLORS.success, fontSize: '11px', fontWeight: 700 }}>{shift.match}%</span>
                  </div>
                  {shift.bonus && (
                    <div style={{ background: COLORS.primary, padding: '4px 8px', borderRadius: '20px' }}>
                      <span style={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>{shift.bonus}</span>
                    </div>
                  )}
                </div>
                <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: '0 0 2px' }}>{shift.date}</p>
                <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600, margin: '0 0 8px' }}>{shift.time}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                  <MapPin size={12} color={COLORS.textMuted} />
                  <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>{shift.location}</span>
                </div>
                <button style={{ width: '100%', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '8px', padding: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Claim</button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {[
            { icon: Zap, value: '7', label: 'Day Streak', color: COLORS.warning },
            { icon: Award, value: '6', label: 'Badges', color: COLORS.info },
            { icon: TrendingUp, value: '#3', label: 'Rank', color: COLORS.success },
            { icon: CheckSquare, value: '5', label: 'Tasks', color: COLORS.primary }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: stat.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <stat.icon size={20} color={stat.color} />
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '24px', fontWeight: 800, margin: '0 0 2px' }}>{stat.value}</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav active="Home" />
    </div>
  </MobileFrame>
);

/**
 * Worker Schedule Screen
 * Shows: Week/Month toggle, stats bar, week calendar, quick actions, shift cards with department colors
 */
export const WorkerScheduleScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '44px 16px 12px', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div>
          <p style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 700, margin: 0 }}>My Schedule</p>
          <p style={{ color: COLORS.textSecondary, fontSize: '13px', margin: '4px 0 0' }}>27 Jan - 2 Feb</p>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ padding: '8px 14px', background: COLORS.primary, color: 'white', fontSize: '14px', fontWeight: 700, borderRadius: '8px' }}>Week</span>
          <span style={{ padding: '8px 14px', background: '#F1F5F9', color: COLORS.textSecondary, fontSize: '14px', fontWeight: 700, borderRadius: '8px' }}>Month</span>
        </div>
      </div>

      <div style={{ padding: '12px 16px 80px' }}>
        {/* Stats Bar */}
        <div style={{ display: 'flex', background: 'white', borderRadius: '12px', padding: '12px', marginBottom: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: COLORS.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={18} color={COLORS.primary} />
            </div>
            <div>
              <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>33h</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>This week</p>
            </div>
          </div>
          <div style={{ width: '1px', background: COLORS.border, margin: '0 8px' }} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: COLORS.success + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={18} color={COLORS.success} />
            </div>
            <div>
              <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>5</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>Upcoming</p>
            </div>
          </div>
          <div style={{ width: '1px', background: COLORS.border, margin: '0 8px' }} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: COLORS.info + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={18} color={COLORS.info} />
            </div>
            <div>
              <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>5</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>Confirmed</p>
            </div>
          </div>
        </div>

        {/* Week Calendar */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={20} color={COLORS.textSecondary} />
            </div>
            <span style={{ color: COLORS.primary, fontSize: '12px', fontWeight: 600, background: COLORS.primary + '15', padding: '6px 12px', borderRadius: '8px' }}>Today</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={20} color={COLORS.textSecondary} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { day: 'Mon', date: 27, isToday: true, shifts: [COLORS.info] },
              { day: 'Tue', date: 28, isToday: false, shifts: [COLORS.success] },
              { day: 'Wed', date: 29, isToday: false, shifts: [COLORS.primary] },
              { day: 'Thu', date: 30, isToday: false, shifts: [COLORS.warning] },
              { day: 'Fri', date: 31, isToday: false, shifts: [] },
              { day: 'Sat', date: 1, isToday: false, shifts: [COLORS.purple] },
              { day: 'Sun', date: 2, isToday: false, shifts: [] }
            ].map((d, i) => (
              <div key={i} style={{
                flex: 1, textAlign: 'center', padding: '10px 4px', borderRadius: '12px',
                background: d.isToday ? COLORS.primary + '10' : '#F8FAFC',
                border: d.isToday ? `2px solid ${COLORS.primary}` : d.shifts.length > 0 ? `1px solid ${COLORS.border}` : '1px solid transparent',
                boxShadow: d.shifts.length > 0 ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
              }}>
                <p style={{ fontSize: '10px', color: d.isToday ? COLORS.primary : COLORS.textSecondary, fontWeight: 600, margin: 0 }}>{d.day}</p>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '14px', margin: '4px auto',
                  background: d.isToday ? COLORS.primary : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: d.isToday ? 'white' : COLORS.textPrimary, margin: 0 }}>{d.date}</p>
                </div>
                <p style={{ fontSize: '9px', color: d.isToday ? COLORS.primary : COLORS.textMuted, margin: '0 0 4px' }}>{d.date <= 27 ? 'Jan' : d.date <= 31 ? 'Jan' : 'Feb'}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', minHeight: '6px' }}>
                  {d.shifts.map((color, j) => (
                    <div key={j} style={{ width: '6px', height: '6px', borderRadius: '3px', background: color }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <button style={{ flex: 1, background: COLORS.primary, color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
            <Clock size={18} /> Clock In
          </button>
          <button style={{ flex: 1, background: 'white', color: COLORS.primary, border: `2px solid ${COLORS.primary}`, borderRadius: '10px', padding: '14px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
            <Calendar size={18} /> Time Off
          </button>
        </div>

        {/* Upcoming Shifts */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontWeight: 700, fontSize: '16px', color: COLORS.textPrimary }}>Upcoming Shifts</span>
          <span style={{ background: COLORS.warning + '20', color: COLORS.warning, fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>1 pending</span>
        </div>

        {/* Enhanced Shift Card */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px', borderLeft: `4px solid ${COLORS.info}`, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <Briefcase size={12} color={COLORS.info} />
                <span style={{ background: COLORS.info + '15', color: COLORS.info, fontSize: '10px', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>Front of House</span>
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>Senior Server</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: COLORS.success + '15', padding: '4px 8px', borderRadius: '6px' }}>
              <CheckCircle2 size={12} color={COLORS.success} />
              <span style={{ color: COLORS.success, fontSize: '11px', fontWeight: 600 }}>Confirmed</span>
            </div>
          </div>

          {/* Date & Time */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={12} color={COLORS.textSecondary} />
              <span style={{ color: COLORS.textSecondary, fontSize: '12px', fontWeight: 500 }}>27 Jan (Mon)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={12} color={COLORS.textSecondary} />
              <span style={{ color: COLORS.textSecondary, fontSize: '12px', fontWeight: 600 }}>09:00 - 17:00</span>
              <span style={{ background: '#F1F5F9', color: COLORS.textSecondary, fontSize: '11px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>8h</span>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '0%', height: '100%', background: COLORS.success, borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '10px', color: COLORS.textMuted }}>09:00</span>
              <span style={{ fontSize: '10px', color: COLORS.textMuted }}>17:00</span>
            </div>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color={COLORS.textSecondary} />
              <span style={{ color: COLORS.textSecondary, fontSize: '13px' }}>The Grand Hotel - Main Restaurant</span>
            </div>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: COLORS.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={16} color={COLORS.primary} />
            </div>
          </div>

          {/* Team & Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: `1px solid ${COLORS.border}`, marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={14} color={COLORS.textMuted} />
              <div style={{ display: 'flex' }}>
                {['SM', 'JD', 'EW'].map((initials, i) => (
                  <div key={i} style={{ width: '24px', height: '24px', borderRadius: '12px', background: COLORS.info, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: i > 0 ? '-8px' : 0, border: '2px solid white' }}>
                    <span style={{ color: 'white', fontSize: '8px', fontWeight: 700 }}>{initials}</span>
                  </div>
                ))}
              </div>
              <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>3 team</span>
            </div>
            <ChevronRight size={20} color={COLORS.textMuted} />
          </div>
        </div>

        {/* Available Shifts Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '16px', color: COLORS.textPrimary }}>Available Shifts</span>
            <span style={{ background: COLORS.success + '20', color: COLORS.success, fontSize: '10px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>3 open</span>
          </div>
          <span style={{ color: COLORS.primary, fontSize: '13px', fontWeight: 700 }}>See all</span>
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[
            { role: 'Bartender', dept: 'Bar', color: COLORS.purple, date: '25 Jan', day: 'Sat', time: '18:00 - 02:00', location: 'The Crown Pub', rate: '£14.50/hr', urgent: true },
            { role: 'Server', dept: 'Front of House', color: COLORS.info, date: '26 Jan', day: 'Sun', time: '11:00 - 16:00', location: 'City Bistro', rate: '£12.00/hr', urgent: false }
          ].map((shift, i) => (
            <div key={i} style={{ minWidth: '150px', background: 'white', borderRadius: '12px', padding: '12px', border: shift.urgent ? `2px solid ${COLORS.error}` : `1px solid ${COLORS.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', position: 'relative' }}>
              {shift.urgent && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: COLORS.error, padding: '2px 8px', borderTopRightRadius: '12px', borderBottomLeftRadius: '6px' }}>
                  <span style={{ color: 'white', fontSize: '9px', fontWeight: 700 }}>URGENT</span>
                </div>
              )}
              <div style={{ background: shift.color + '15', padding: '2px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '6px' }}>
                <span style={{ color: shift.color, fontSize: '9px', fontWeight: 600 }}>{shift.dept}</span>
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 700, margin: '0 0 8px' }}>{shift.role}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <Calendar size={11} color={COLORS.textMuted} />
                <span style={{ color: COLORS.textMuted, fontSize: '10px' }}>{shift.date} ({shift.day})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <Clock size={11} color={COLORS.textMuted} />
                <span style={{ color: COLORS.textMuted, fontSize: '10px' }}>{shift.time}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${COLORS.border}` }}>
                <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 700 }}>{shift.rate}</span>
              </div>
              <button style={{ width: '100%', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '8px', padding: '8px', fontSize: '11px', fontWeight: 700, marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer' }}>
                <Plus size={14} /> Claim
              </button>
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav active="Schedule" />
    </div>
  </MobileFrame>
);

/**
 * Worker Career Path Screen
 * Shows: Tabs (Career Path, Skills, Training), current role card with XP summary, career ladder, achievements
 */
export const WorkerCareerScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ padding: '44px 16px 12px', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <p style={{ color: COLORS.primary, fontSize: '14px', fontWeight: 700, margin: '0 0 8px' }}>← Back</p>
        <p style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 700, margin: 0 }}>Career Path</p>
        <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '4px' }}>Your Career Journey</p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', background: 'white', padding: '0 16px 12px', borderBottom: `1px solid ${COLORS.border}` }}>
        {[
          { label: 'Career Path', active: true },
          { label: 'Skills', active: false },
          { label: 'Training', active: false }
        ].map((tab, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', paddingBottom: '12px', borderBottom: tab.active ? `2px solid ${COLORS.primary}` : '2px solid transparent', marginBottom: '-1px' }}>
            <span style={{ color: tab.active ? COLORS.primary : COLORS.textSecondary, fontSize: '14px', fontWeight: tab.active ? 700 : 500 }}>{tab.label}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 16px 80px' }}>
        {/* Current Role Card */}
        <div style={{ background: COLORS.primary, borderRadius: '20px', padding: '20px', marginBottom: '20px', boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Briefcase size={32} color="white" />
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, margin: 0 }}>Floor Associate</p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: '4px 0 0' }}>Level 2 • Since March 2025</p>
            </div>
          </div>

          {/* Momentum Score Section */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <TrendingUp size={16} color="white" />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', flex: 1 }}>Momentum Score</span>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}>85</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'white', borderRadius: '3px' }} />
            </div>
          </div>

          {/* XP Summary */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { value: '5,300', label: 'Total XP' },
              { value: '9', label: 'Verified' },
              { value: '1', label: 'Courses' }
            ].map((stat, i) => (
              <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.2)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 800, margin: 0 }}>{stat.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: '2px 0 0' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress to Next Role */}
        <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Progress to Next Role</p>

        {/* Career Ladder Cards */}
        {[
          { title: 'Senior Floor Associate', salary: '£13-15/hr', match: 92, ready: 'Ready now', color: COLORS.success, requirements: ['Customer Service', 'Cash Handling'], isCurrent: true },
          { title: 'Team Lead', salary: '£16-18/hr', match: 67, ready: '~6 months', color: COLORS.warning, requirements: ['Leadership', 'Training'], isCurrent: false }
        ].map((role, i) => (
          <div key={i} style={{ display: 'flex', marginBottom: '16px' }}>
            {/* Path Connector */}
            <div style={{ width: '24px', alignItems: 'center', display: 'flex', flexDirection: 'column', marginRight: '16px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '8px', background: role.isCurrent ? COLORS.primary : 'white', border: role.isCurrent ? 'none' : `3px solid ${COLORS.border}` }} />
              {i < 1 && <div style={{ flex: 1, width: '3px', background: COLORS.border, marginTop: '4px' }} />}
            </div>

            {/* Role Card */}
            <div style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700, margin: 0 }}>{role.title}</p>
                  <p style={{ color: COLORS.success, fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>{role.salary}</p>
                </div>
                <div style={{ background: role.color + '20', padding: '6px 12px', borderRadius: '20px' }}>
                  <span style={{ color: role.color, fontSize: '14px', fontWeight: 700 }}>{role.match}%</span>
                </div>
              </div>
              <p style={{ color: COLORS.textSecondary, fontSize: '13px', fontWeight: 700, margin: '8px 0 12px' }}>{role.ready}</p>

              {/* Requirements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {role.requirements.map((req, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {role.match >= 85 ? (
                      <CheckCircle2 size={14} color={COLORS.success} />
                    ) : (
                      <div style={{ width: '14px', height: '14px', borderRadius: '7px', border: `2px solid ${COLORS.border}` }} />
                    )}
                    <span style={{ color: role.match >= 85 ? COLORS.success : COLORS.textSecondary, fontSize: '13px' }}>{req}</span>
                  </div>
                ))}
              </div>

              {role.isCurrent && (
                <button style={{ width: '100%', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '12px', padding: '14px', marginTop: '16px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
                  View Details <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Achievements */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>Achievements</span>
            <span style={{ color: COLORS.primary, fontSize: '13px', fontWeight: 700 }}>See All</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
            {[
              { icon: Star, title: 'Customer Service Expert', date: 'Jan 5, 2026', color: COLORS.warning, earned: true },
              { icon: TrendingUp, title: '100 Day Streak', date: 'Dec 28, 2025', color: COLORS.success, earned: true },
              { icon: Users, title: 'Team Player', progress: '8/10', color: COLORS.info, earned: false }
            ].map((achievement, i) => (
              <div key={i} style={{ minWidth: '130px', background: achievement.earned ? 'white' : '#F8FAFC', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: achievement.earned ? '0 1px 3px rgba(0,0,0,0.05)' : 'none' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: achievement.earned ? '#F1F5F9' : COLORS.border, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                  <achievement.icon size={20} color={achievement.color} />
                </div>
                <p style={{ color: COLORS.textPrimary, fontSize: '12px', fontWeight: 700, margin: '0 0 4px' }}>{achievement.title}</p>
                {achievement.earned ? (
                  <p style={{ color: COLORS.textMuted, fontSize: '10px', margin: 0 }}>{achievement.date}</p>
                ) : (
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ height: '4px', background: COLORS.border, borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: '80%', height: '100%', background: COLORS.primary, borderRadius: '2px' }} />
                    </div>
                    <p style={{ color: COLORS.textMuted, fontSize: '10px', margin: '4px 0 0', textAlign: 'center' }}>{achievement.progress}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Growth Tips */}
        <div style={{ background: COLORS.primary + '15', borderRadius: '16px', padding: '16px', marginTop: '20px', borderLeft: `4px solid ${COLORS.primary}`, display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Target size={24} color={COLORS.primary} />
          <div style={{ flex: 1 }}>
            <p style={{ color: COLORS.primary, fontSize: '14px', fontWeight: 700, margin: '0 0 4px' }}>Next Goal</p>
            <p style={{ color: COLORS.textSecondary, fontSize: '13px', margin: 0, lineHeight: '18px' }}>Complete Advanced Cash Handling training to reach Senior Floor Associate eligibility</p>
          </div>
          <ChevronRight size={20} color={COLORS.primary} />
        </div>
      </div>

      <WorkerBottomNav active="Career" />
    </div>
  </MobileFrame>
);

/**
 * Worker Rewards Screen
 * Shows: Dark header with tier card, stats row, category tabs, featured offers, perk list
 */
export const WorkerRewardsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Dark Header with Tier Card */}
      <div style={{ background: COLORS.dark, padding: '44px 16px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <p style={{ color: 'white', fontSize: '22px', fontWeight: 700, margin: 0 }}>Rewards</p>
            <p style={{ color: COLORS.textMuted, fontSize: '13px', margin: '4px 0 0' }}>Your perks & benefits</p>
          </div>
          <div style={{ width: '44px', height: '44px', borderRadius: '22px', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Gift size={22} color={COLORS.primary} />
          </div>
        </div>

        {/* Tier Card */}
        <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)', borderRadius: '20px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '28px', background: 'linear-gradient(135deg, #FCD34D, #F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(249, 115, 22, 0.4)' }}>
                <Crown size={28} color="white" />
              </div>
              <div>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 800, margin: 0 }}>Gold Member</p>
                <p style={{ color: COLORS.textMuted, fontSize: '12px', margin: '2px 0 0' }}>550 pts to Platinum</p>
              </div>
            </div>
            <span style={{ color: COLORS.primary, fontSize: '12px', fontWeight: 700 }}>View Tiers</span>
          </div>

          {/* Progress to Next Tier */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, #FCD34D, #F97316)', borderRadius: '4px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              <span style={{ color: COLORS.textMuted, fontSize: '10px' }}>Gold</span>
              <span style={{ color: COLORS.textMuted, fontSize: '10px' }}>Platinum</span>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
              <p style={{ color: 'white', fontSize: '24px', fontWeight: 800, margin: 0 }}>2,450</p>
              <p style={{ color: COLORS.textMuted, fontSize: '11px', margin: '2px 0 0' }}>Available Points</p>
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
              <p style={{ color: 'white', fontSize: '24px', fontWeight: 800, margin: 0 }}>£127</p>
              <p style={{ color: COLORS.textMuted, fontSize: '11px', margin: '2px 0 0' }}>Total Saved</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 16px 80px' }}>
        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <button style={{ flex: 1, padding: '14px', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
            Perks & Discounts
          </button>
          <button style={{ flex: 1, padding: '14px', background: 'white', color: COLORS.textSecondary, border: `2px solid ${COLORS.border}`, borderRadius: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
            Redeem Points
          </button>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[
            { label: 'All', active: true },
            { label: 'Food & Drink', active: false },
            { label: 'Entertainment', active: false },
            { label: 'Retail', active: false }
          ].map((cat, i) => (
            <span key={i} style={{ padding: '10px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, background: cat.active ? COLORS.primary : '#F1F5F9', color: cat.active ? 'white' : COLORS.textSecondary, whiteSpace: 'nowrap' }}>{cat.label}</span>
          ))}
        </div>

        {/* Featured Offers */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>Featured Offers</span>
            <span style={{ color: COLORS.primary, fontSize: '13px', fontWeight: 700 }}>See All</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
            {[
              { brand: 'Starbucks', discount: '20% OFF', desc: 'All hot drinks', color: '#00704A', free: true, featured: true, icon: Coffee },
              { brand: 'Vue Cinema', discount: '2-for-1', desc: 'Standard tickets', color: '#1E3A5F', points: 500, featured: true, icon: Film }
            ].map((offer, i) => (
              <div key={i} style={{ minWidth: '160px', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ height: '80px', background: `linear-gradient(135deg, ${offer.color} 0%, ${offer.color}DD 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <offer.icon size={36} color="white" />
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 700 }}>{offer.brand}</span>
                    {offer.featured && (
                      <span style={{ background: COLORS.warning, padding: '2px 6px', borderRadius: '4px' }}>
                        <span style={{ color: 'white', fontSize: '9px', fontWeight: 700 }}>HOT</span>
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: offer.color, fontSize: '16px', fontWeight: 800 }}>{offer.discount}</span>
                  </div>
                  <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: '4px 0 0' }}>{offer.desc}</p>
                  <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: `1px solid ${COLORS.border}` }}>
                    <span style={{ color: offer.free ? COLORS.success : COLORS.primary, fontSize: '12px', fontWeight: 700 }}>
                      {offer.free ? 'FREE' : `${offer.points} pts`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perk List */}
        <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700, display: 'block', marginBottom: '12px' }}>All Perks</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { brand: 'Nando\'s', discount: '15% OFF', desc: 'Main meals', color: '#FF3B3B', points: 200, icon: Coffee },
            { brand: 'Spotify', discount: '50% OFF', desc: 'Premium subscription', color: '#1DB954', points: 800, icon: Music },
            { brand: 'Pure Gym', discount: '30% OFF', desc: 'Monthly membership', color: '#FF6B35', points: 1000, icon: Dumbbell }
          ].map((perk, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: perk.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <perk.icon size={26} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700, margin: 0 }}>{perk.brand}</p>
                  <span style={{ background: perk.color + '20', color: perk.color, fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '6px' }}>{perk.discount}</span>
                </div>
                <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: '2px 0 0' }}>{perk.desc}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: COLORS.primary, fontSize: '14px', fontWeight: 700 }}>{perk.points}</span>
                <p style={{ color: COLORS.textMuted, fontSize: '10px', margin: '0' }}>pts</p>
              </div>
              <ChevronRight size={20} color={COLORS.textMuted} />
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav active="More" />
    </div>
  </MobileFrame>
);

// ============================================================================
// MANAGER APP SCREENS
// ============================================================================

/**
 * Manager Dashboard Screen
 * Shows: Company branding, quick clock in, metric cards, AI forecast, pending actions, top performers
 */
export const ManagerDashboardScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Header with Company Branding */}
      <div style={{ background: 'white', padding: '44px 16px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}>G</span>
            </div>
            <div>
              <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: 0 }}>Good morning,</p>
              <p style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 700, margin: '2px 0 0' }}>James</p>
              <p style={{ color: COLORS.primary, fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>Grand Metro Hotels</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Bell size={20} color={COLORS.textSecondary} />
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', minWidth: '20px', height: '20px', background: COLORS.error, borderRadius: '10px', fontSize: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, border: '2px solid white' }}>5</div>
            </div>
          </div>
        </div>

        {/* Quick Clock In */}
        <button style={{ width: '100%', padding: '14px', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <Clock size={20} /> Clock In
        </button>
      </div>

      <div style={{ padding: '16px 16px 80px' }}>
        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
          {[
            { value: '12', label: 'On Shift', color: COLORS.success, icon: Users },
            { value: '3', label: 'On Break', color: COLORS.warning, icon: Clock },
            { value: '5', label: 'Open', color: COLORS.primary, icon: Briefcase }
          ].map((metric, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '14px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: metric.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <metric.icon size={18} color={metric.color} />
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '24px', fontWeight: 800, margin: 0 }}>{metric.value}</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: '2px 0 0' }}>{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Second Row Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
          {[
            { value: '8', label: 'Approvals', color: COLORS.error, icon: CheckCircle2 },
            { value: '94%', label: 'Coverage', color: COLORS.info, icon: Target },
            { value: '£2.4k', label: 'Labour', color: COLORS.purple, icon: TrendingUp }
          ].map((metric, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '14px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: metric.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <metric.icon size={18} color={metric.color} />
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '24px', fontWeight: 800, margin: 0 }}>{metric.value}</p>
              <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: '2px 0 0' }}>{metric.label}</p>
            </div>
          ))}
        </div>

        {/* AI Demand Forecast */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Brain size={18} color={COLORS.primary} />
            <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>AI Demand Forecast</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
            {[40, 60, 85, 70, 90, 55, 45].map((height, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '100%', height: `${height}%`, background: i === 4 ? COLORS.primary : COLORS.info + '40', borderRadius: '4px' }} />
                <span style={{ color: COLORS.textMuted, fontSize: '9px' }}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', padding: '10px', background: COLORS.primary + '10', borderRadius: '8px' }}>
            <Zap size={14} color={COLORS.primary} />
            <span style={{ color: COLORS.textSecondary, fontSize: '12px' }}>Peak demand expected Friday. Consider +2 staff.</span>
          </div>
        </div>

        {/* Pending Actions */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>Pending Actions</span>
            <span style={{ background: COLORS.error + '20', color: COLORS.error, fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>8 items</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { title: 'Time Off Requests', count: 3, color: COLORS.warning },
              { title: 'Shift Swaps', count: 2, color: COLORS.info },
              { title: 'Availability Changes', count: 3, color: COLORS.primary }
            ].map((action, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: action.color }} />
                  <span style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600 }}>{action.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ background: action.color + '20', color: action.color, fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>{action.count}</span>
                  <ChevronRight size={18} color={COLORS.textMuted} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color={COLORS.warning} />
              <span style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 700 }}>Top Performers</span>
            </div>
            <span style={{ color: COLORS.primary, fontSize: '13px', fontWeight: 700 }}>See All</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'Sarah M.', score: 94, rank: 1 },
              { name: 'Tom K.', score: 89, rank: 2 },
              { name: 'Emma L.', score: 87, rank: 3 }
            ].map((performer, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '14px', background: i === 0 ? '#FEF3C7' : i === 1 ? '#F1F5F9' : '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: i === 0 ? COLORS.warning : i === 1 ? COLORS.textSecondary : COLORS.primary, fontSize: '12px', fontWeight: 800 }}>{performer.rank}</span>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: COLORS.info, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 700 }}>{performer.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <span style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600, flex: 1 }}>{performer.name}</span>
                <span style={{ color: COLORS.success, fontSize: '14px', fontWeight: 700 }}>{performer.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ManagerBottomNav active="Dashboard" />
    </div>
  </MobileFrame>
);

/**
 * Manager Approvals Screen
 * Shows: Pending time-off requests, shift swaps, with approve/deny buttons
 */
export const ManagerApprovalsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.white, padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 600, margin: 0 }}>Approvals</p>
        <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '4px' }}>8 pending requests</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['All 8', 'Time Off 2', 'Swaps 2'].map((tab, i) => (
          <div key={i} style={{
            background: i === 0 ? COLORS.primary : COLORS.background,
            color: i === 0 ? 'white' : COLORS.textSecondary,
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            border: i === 0 ? 'none' : `1px solid ${COLORS.border}`
          }}>{tab}</div>
        ))}
      </div>

      {/* Approval Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { name: 'Sarah Johnson', type: 'Holiday Request', details: '15-19 Feb (5 days)', urgent: false },
          { name: 'Mike Chen', type: 'Sick Leave', details: '24 Jan (1 day)', urgent: true }
        ].map((request, i) => (
          <div key={i} style={{
            background: COLORS.background,
            borderRadius: '16px',
            padding: '16px',
            border: request.urgent ? `1px solid ${COLORS.warning}` : `1px solid ${COLORS.border}`
          }}>
            {request.urgent && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <AlertCircle size={14} color={COLORS.warning} />
                <span style={{ color: '#D97706', fontSize: '12px', fontWeight: 500 }}>Urgent</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={18} color={COLORS.info} />
              </div>
              <div>
                <p style={{ color: COLORS.textPrimary, fontSize: '15px', fontWeight: 600, margin: 0 }}>{request.name}</p>
                <p style={{ color: COLORS.info, fontSize: '12px', margin: 0 }}>{request.type}</p>
              </div>
            </div>
            <p style={{ color: COLORS.textPrimary, fontSize: '14px', margin: '0 0 12px' }}>{request.details}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1, background: COLORS.success, color: 'white', border: 'none', borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Approve</button>
              <button style={{ flex: 1, background: '#F1F5F9', color: COLORS.textSecondary, border: `1px solid ${COLORS.border}`, borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Decline</button>
            </div>
          </div>
        ))}
      </div>

      <ManagerBottomNav active="Dashboard" />
    </div>
  </MobileFrame>
);

// ============================================================================
// PORTAL SCREENS (Desktop)
// ============================================================================

/**
 * Portal Dashboard Screen
 * Shows: Welcome message, LIVE status, alerts, stats, activity feed, team health
 */
export const PortalDashboardScreen = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/dashboard">
    <div style={{ display: 'flex', height: '480px' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', background: COLORS.dark, padding: '16px', display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ width: '32px', height: '32px', background: COLORS.primary, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>U</span>
          </div>
          <span style={{ color: 'white', fontSize: '18px', fontWeight: 600 }}>Uplift</span>
        </div>

        {/* Nav Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: BarChart3, label: 'Dashboard', active: true },
            { icon: Users, label: 'Employees' },
            { icon: Calendar, label: 'Schedule' },
            { icon: FileCheck, label: 'Templates' },
            { icon: Clock, label: 'Time Tracking' },
            { icon: Calendar, label: 'Time Off' },
            { icon: MapPin, label: 'Locations' },
            { icon: Award, label: 'Skills', badge: 'NEW' },
            { icon: Briefcase, label: 'Opportunities', badge: 'NEW' },
            { icon: FileText, label: 'Bulk Import' },
            { icon: Activity, label: 'Activity', badge: 'NEW' },
            { icon: BarChart3, label: 'Reports' },
            { icon: Link2, label: 'Integrations' },
            { icon: Settings, label: 'Settings' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 10px',
              borderRadius: '8px',
              background: item.active ? COLORS.primary : 'transparent',
              cursor: 'pointer'
            }}>
              <item.icon size={16} color={item.active ? 'white' : COLORS.textMuted} />
              <span style={{ color: item.active ? 'white' : COLORS.textMuted, fontSize: '13px', flex: 1 }}>{item.label}</span>
              {item.badge && <span style={{ background: COLORS.success, color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: COLORS.background, padding: '16px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 600, color: COLORS.textPrimary, margin: 0 }}>Welcome back,</h1>
            <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '2px' }}>Here's what's happening today</p>
          </div>
          <button style={{ background: COLORS.primary, color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 500, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} /> Create Schedule
          </button>
        </div>

        {/* LIVE Status Bar */}
        <div style={{ background: COLORS.dark, borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '50%' }} />
            <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 600 }}>LIVE</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: COLORS.textMuted }}>
            <span><strong style={{ color: 'white' }}>28</strong> On Shift</span>
            <span><strong style={{ color: 'white' }}>8</strong> On Break</span>
            <span><strong style={{ color: 'white' }}>2</strong> Just Clocked In</span>
            <span><strong style={{ color: 'white' }}>2</strong> Running Late</span>
            <span><strong style={{ color: 'white' }}>12</strong> Open Shifts</span>
          </div>
          <span style={{ marginLeft: 'auto', color: COLORS.primary, fontSize: '12px' }}>Activity Feed →</span>
        </div>

        {/* Alert Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[
            { title: 'Certifications expiring soon', sub: '3 employees', color: COLORS.primary, bg: '#FFF7ED', icon: Shield },
            { title: 'Training in progress', sub: '3 employees', color: COLORS.info, bg: '#DBEAFE', icon: Play },
            { title: 'Probation reviews due', sub: '1 employee', color: COLORS.warning, bg: '#FEF3C7', icon: AlertCircle }
          ].map((alert, i) => (
            <div key={i} style={{ background: alert.bg, borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${alert.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <alert.icon size={16} color={alert.color} />
                <div>
                  <p style={{ color: COLORS.textPrimary, fontSize: '13px', fontWeight: 500, margin: 0 }}>{alert.title}</p>
                  <p style={{ color: alert.color, fontSize: '11px', margin: 0 }}>{alert.sub} - Click to see who</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[
            { value: '24', label: "Today's Shifts", sub: '19 filled', color: COLORS.info, bg: '#EFF6FF', icon: Calendar },
            { value: '8', label: 'Active Employees', sub: '+3 this week', color: COLORS.success, bg: '#ECFDF5', icon: Users },
            { value: '5', label: 'Open Shifts', color: COLORS.primary, bg: '#FFF7ED', icon: AlertCircle },
            { value: '15', label: 'Pending Approvals', color: COLORS.error, bg: '#FEF2F2', icon: Clock }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${stat.color}20` }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <stat.icon size={18} color={stat.color} />
              </div>
              <p style={{ fontSize: '28px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '12px', color: COLORS.textSecondary, margin: '4px 0 0' }}>{stat.label}</p>
              {stat.sub && <p style={{ fontSize: '11px', color: COLORS.success, margin: '2px 0 0' }}>{stat.sub}</p>}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
          {/* Live Activity */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} color={COLORS.primary} />
                <span style={{ fontWeight: 600, color: COLORS.textPrimary, fontSize: '14px' }}>Live Activity</span>
              </div>
              <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>Auto-updating</span>
            </div>
            {[
              { name: 'Sarah M.', action: 'clocked in at Main Restaurant', time: '2 min ago' },
              { name: 'James K.', action: 'requested shift swap with Sophie B.', time: '5 min ago' }
            ].map((activity, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: i === 0 ? `1px solid ${COLORS.border}` : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: COLORS.success, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 600 }}>
                  {activity.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p style={{ fontSize: '13px', color: COLORS.textPrimary, margin: 0 }}><strong>{activity.name}</strong> {activity.action}</p>
                  <p style={{ fontSize: '11px', color: COLORS.textMuted, margin: '2px 0 0' }}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Health */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={16} color={COLORS.warning} />
                <span style={{ fontWeight: 600, color: COLORS.textPrimary, fontSize: '14px' }}>Team Health</span>
              </div>
              <span style={{ color: COLORS.primary, fontSize: '11px' }}>View More</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <TrendingUp size={20} color={COLORS.success} />
              <div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: COLORS.success, margin: 0 }}>94%</p>
                <p style={{ fontSize: '12px', color: COLORS.textSecondary, margin: 0 }}>Retention Rate</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>1</p>
                <p style={{ fontSize: '11px', color: COLORS.textSecondary, margin: 0 }}>New Hires</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>1</p>
                <p style={{ fontSize: '11px', color: COLORS.textSecondary, margin: 0 }}>Onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Design tokens
  COLORS,

  // Frames
  MobileFrame,
  BrowserFrame,

  // Navigation
  WorkerBottomNav,
  ManagerBottomNav,

  // Worker App Screens
  WorkerHomeScreen,
  WorkerScheduleScreen,
  WorkerCareerScreen,
  WorkerRewardsScreen,

  // Manager App Screens
  ManagerDashboardScreen,
  ManagerApprovalsScreen,

  // Portal Screens
  PortalDashboardScreen,
};
