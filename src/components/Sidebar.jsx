import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Shield,
  Search,
  BookOpen
} from 'lucide-react';

import logo from '../assets/logo.png';

const Sidebar = ({ role, user, activeTab, setActiveTab, onLogout }) => {
  const menuItems = {
    admin: [
      { id: 'stats', label: 'Statistiques', icon: LayoutDashboard },
      { id: 'medical', label: 'Santé', icon: Shield },
      { id: 'staff', label: 'Personnel', icon: Users },
      { id: 'finance', label: 'Finances', icon: CreditCard },
      { id: 'settings', label: 'Paramètres', icon: Settings },
    ],
    teacher: [
      { id: 'classes', label: 'Mes Classes', icon: Users },
      { id: 'grades', label: 'Notes', icon: GraduationCap },
      { id: 'schedule', label: 'Emploi du temps', icon: Calendar },
    ],
    parent: [
      { id: 'stats', label: 'Suivi Enfant', icon: LayoutDashboard },
      { id: 'finance', label: 'Paiements', icon: CreditCard },
      { id: 'schedule', label: 'Calendrier', icon: Calendar },
    ],
    student: [
      { id: 'stats', label: 'Mon Progrès', icon: LayoutDashboard },
      { id: 'workspace', label: 'Mes Cours', icon: GraduationCap },
      { id: 'schedule', label: 'Examens', icon: Calendar },
    ],
  };

  const currentMenu = menuItems[role] || [];

  return (
    <div className="glass-effect" style={{ width: '280px', height: '95vh', margin: '2.5vh 0 2.5vh 1.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', padding: '1.5rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem' }}>
        <img src={logo} alt="MasomoApp Logo" style={{ maxWidth: '100%', height: 'auto', maxHeight: '50px', objectFit: 'contain' }} />
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {currentMenu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              width: '100%',
              padding: '1rem',
              background: activeTab === item.id ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none',
              color: activeTab === item.id ? 'white' : 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s',
              textAlign: 'left'
            }}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email?.split('@')[0] || 'Utilisateur'}</p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{role || 'Profil'}</p>
          </div>
        </div>

        <button style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left' }}>
          <Bell size={20} />
          <span>Notifications</span>
        </button>
        <button 
          onClick={onLogout}
          style={{ background: 'rgba(239, 68, 68, 0.05)', color: '#ef4444', border: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', borderRadius: 'var(--radius-sm)', width: '100%', textAlign: 'left', marginTop: '0.5rem' }}
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
