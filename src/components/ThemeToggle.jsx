import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="glass-effect"
      style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-glass)',
        background: 'var(--bg-card)',
        color: theme === 'dark' ? 'var(--accent-amber)' : 'var(--primary)',
        transition: 'all 0.3s ease',
        padding: 0
      }}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <motion.div
          key="moon"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
        >
          <Moon size={20} />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
        >
          <Sun size={20} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
