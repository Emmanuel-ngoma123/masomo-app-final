import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Settings } from 'lucide-react';

const DashboardLayout = ({ role, user, children, onLogout }) => {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--body-gradient)', transition: 'background 0.3s ease' }}>
      <Sidebar 
        role={role} 
        user={user}
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={onLogout} 
      />
      
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', maxHeight: '100vh' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1 }}>
            <div>
              <h1 style={{ fontSize: '1.75rem' }}>Bonjour, {user?.email?.split('@')[0] || 'Utilisateur'} 👋</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Bonne journée à l'établissement Masomo.</p>
            </div>
            
            <div className="glass-effect" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', borderRadius: '100px', flex: 0.6, maxWidth: '400px' }}>
              <Search size={18} color="var(--text-muted)" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <ThemeToggle />
            
            <button className="glass-effect" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'var(--bg-card)' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: '10px', right: '10px', width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%', border: '2px solid var(--bg-main)' }}></span>
            </button>

            <div className="glass-effect" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', display: 'none', sm: 'block' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>2025-2026</span>
            </div>
          </div>
        </header>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* We pass the activeTab down to children if needed, or children just handle their own state */}
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { activeTab });
            }
            return child;
          })}
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardLayout;
