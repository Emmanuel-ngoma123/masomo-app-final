import React from 'react';

const StudentDashboard = ({ activeTab }) => (
  <div className="glass-card" style={{ padding: '2rem' }}>
    <h1>Espace Élève</h1>
    <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
      Vous êtes dans la section : <strong>{activeTab}</strong>. 
      L'accès à vos cours, devoirs et calendrier d'examens sera bientôt disponible.
    </p>
  </div>
);

export default StudentDashboard;
