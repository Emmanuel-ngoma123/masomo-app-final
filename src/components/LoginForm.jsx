import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Shield, Users, User, GraduationCap } from 'lucide-react';

const LoginForm = ({ onLogin }) => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const roles = [
    { id: 'admin', label: 'Admin', icon: Shield, color: 'var(--primary)' },
    { id: 'teacher', label: 'Enseignant', icon: GraduationCap, color: 'var(--accent-purple)' },
    { id: 'parent', label: 'Parent', icon: Users, color: 'var(--secondary)' },
    { id: 'student', label: 'Élève', icon: User, color: 'var(--accent-amber)' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ role, email });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card"
      style={{ maxWidth: '450px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 10 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Connexion</h2>
        <p style={{ color: 'var(--text-muted)' }}>Bienvenue sur Masomo App</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '2rem' }}>
        {roles.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRole(r.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0.75rem 0.25rem',
              background: role === r.id ? r.color : 'transparent',
              border: `1px solid ${role === r.id ? 'transparent' : 'var(--border-glass)'}`,
              color: role === r.id ? 'white' : 'var(--text-muted)',
              fontSize: '0.75rem',
              gap: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              zIndex: 20
            }}
          >
            <r.icon size={20} />
            <span>{r.label}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.8 }}>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@ecole.com"
            style={{
              width: '100%',
              padding: '0.8rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              color: 'white',
              outline: 'none'
            }}
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.8 }}>Mot de passe</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: '100%',
              padding: '0.8rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-sm)',
              color: 'white',
              outline: 'none'
            }}
            required
          />
        </div>

        <button 
          type="submit" 
          className="glass-effect"
          style={{ 
            marginTop: '1rem',
            padding: '1rem',
            background: roles.find(r => r.id === role)?.color || 'var(--primary)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <LogIn size={20} />
          Se connecter en tant que {roles.find(r => r.id === role)?.label || 'Utilisateur'}
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
