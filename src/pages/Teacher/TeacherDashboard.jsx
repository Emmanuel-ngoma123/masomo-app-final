import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckSquare, MessageCircle, Clock, Calendar as CalendarIcon, ChevronRight, TrendingUp } from 'lucide-react';

const TeacherDashboard = ({ activeTab }) => {
  if (activeTab === 'classes' || activeTab === 'stats') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Class Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <ClassCard name="Mathématiques - 4ème A" students="32" time="08:00 - 10:00" />
              <ClassCard name="Physique - 6ème B" students="28" time="10:30 - 12:30" />
            </div>

            {/* Tasks List */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>Prochains Devoirs à Corriger</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>3 tâches en attente</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TaskItem title="Quiz Algèbre" dpt="4ème A" remaining="24 copies" status="urgent" />
                <TaskItem title="Rapport Optique" dpt="6ème B" remaining="12 copies" status="normal" />
                <TaskItem title="Test Probabilités" dpt="3ème C" remaining="35 copies" status="normal" />
              </div>
            </div>
          </div>

          {/* Sidebar Widgets (Calendar & Performance) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Mini Calendar Widget */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <h4 style={{ fontSize: '1.1rem' }}>Calendrier</h4>
                <CalendarIcon size={18} color="var(--primary)" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                {['L','M','M','J','V','S','D'].map(day => <span key={day}>{day}</span>)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center' }}>
                {Array.from({length: 31}, (_, i) => i + 1).map(date => (
                  <div key={date} style={{ 
                    padding: '5px 0', 
                    fontSize: '0.8rem', 
                    borderRadius: '4px',
                    background: date === 14 ? 'var(--primary)' : 'transparent',
                    color: date === 14 ? 'white' : 'inherit',
                    opacity: date > 0 ? 1 : 0
                  }}>
                    {date}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Événements ce mois :</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.8rem' }}>
                  <div style={{ width: '4px', height: '12px', background: 'var(--accent-amber)', borderRadius: '2px' }}></div>
                  <span>Conseil de classe (20/04)</span>
                </div>
              </div>
            </div>

            {/* Class Success Widget */}
            <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(37, 99, 235, 0.05))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <TrendingUp size={20} color="var(--secondary)" />
                <h4 style={{ fontSize: '1.1rem' }}>Performance Global</h4>
              </div>
              <p style={{ fontSize: '2rem', fontWeight: 700 }}>82.4%</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>+2.5%</span> ce trimestre
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>Section : {activeTab}</h2>
      <p style={{ color: 'var(--text-muted)' }}>Accédez bientôt à vos outils pédagogiques enrichis ici.</p>
    </div>
  );
};

const ClassCard = ({ name, students, time }) => (
  <motion.div whileHover={{ y: -5 }} className="glass-card" style={{ padding: '1.5rem', borderTop: '4px solid var(--primary)' }}>
    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{name}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <BookOpen size={16} />
        <span>{students} élèves inscrits</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <Clock size={16} />
        <span>{time}</span>
      </div>
    </div>
    <button style={{ width: '100%', marginTop: '1.5rem', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', fontSize: '0.9rem' }}>
      <MessageCircle size={18} />
      <span>Contacter Parents</span>
    </button>
  </motion.div>
);

const TaskItem = ({ title, dpt, remaining, status }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: status === 'urgent' ? '#ef4444' : 'var(--secondary)' }}></div>
      <div>
        <h5 style={{ fontSize: '1rem' }}>{title}</h5>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{dpt}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{remaining}</span>
      <ChevronRight size={18} color="var(--text-muted)" />
    </div>
  </div>
);

export default TeacherDashboard;
