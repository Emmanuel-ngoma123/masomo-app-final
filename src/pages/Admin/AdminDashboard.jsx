import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, DollarSign, TrendingUp, Bell, Clock, ArrowUpRight, ClipboardList } from 'lucide-react';

const AdminDashboard = ({ activeTab }) => {
  if (activeTab === 'stats') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <StatCard 
            icon={<Users color="var(--primary)" />} 
            label="Élèves Inscrits" 
            value="1,248" 
            trend="+12%" 
          />
          <StatCard 
            icon={<GraduationCap color="var(--accent-purple)" />} 
            label="Enseignants" 
            value="48" 
            trend="Stable" 
          />
          <StatCard 
            icon={<DollarSign color="var(--secondary)" />} 
            label="Revenus Mensuels" 
            value="45,200 $" 
            trend="+5.4%" 
          />
          <StatCard 
            icon={<TrendingUp color="var(--accent-amber)" />} 
            label="Taux de Présence" 
            value="94.2%" 
            trend="+1.2%" 
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Main Action / Table Section */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Inscriptions Récentes</h3>
              <button style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Voir tout</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)', textAlign: 'left' }}>
                    <th style={{ padding: '1rem' }}>Élève</th>
                    <th style={{ padding: '1rem' }}>Classe</th>
                    <th style={{ padding: '1rem' }}>Statut</th>
                    <th style={{ padding: '1rem' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <StudentRow name="Alice Kabamba" grade="4ème Primaire" status="Payé" date="14/04/2026" />
                  <StudentRow name="Jean Mutombo" grade="6ème Secondaire" status="Partiel" date="13/04/2026" />
                  <StudentRow name="Marie Tshilombo" grade="1ère Primaire" status="En attente" date="12/04/2026" />
                  <StudentRow name="Kevin Malela" grade="3ème Primaire" status="Payé" date="11/04/2026" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Feed Section */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Clock size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.25rem' }}>Activités Système</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ActivityItem 
                icon={<ArrowUpRight size={14} />} 
                title="Nouveau Paiement" 
                desc="Airtel Money (250$)" 
                time="Il y a 2 min" 
                color="var(--secondary)"
              />
              <ActivityItem 
                icon={<Bell size={14} />} 
                title="Alerte Médicale" 
                desc="Liam T. (Infirmerie)" 
                time="Il y a 15 min" 
                color="#ef4444"
              />
              <ActivityItem 
                icon={<ClipboardList size={14} />} 
                title="Notes Saisies" 
                desc="Classe 4ème A (Maths)" 
                time="Il y a 1h" 
                color="var(--accent-purple)"
              />
              <ActivityItem 
                icon={<ArrowUpRight size={14} />} 
                title="Rapport Généré" 
                desc="Finance Mars 2026" 
                time="Il y a 3h" 
                color="var(--primary)"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'medical') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>Alertes Médicales Critiques</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>4 élèves nécessitant une attention particulière aujourd'hui.</p>
            </div>
            <span style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>Urgent</span>
          </div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>Dossiers de Santé des Élèves</h3>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Rechercher un élève..." 
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '0.5rem 1rem', paddingLeft: '2.5rem', borderRadius: 'var(--radius-sm)', color: 'white' }} 
              />
              <Clock size={16} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem' }}>Élève</th>
                  <th style={{ padding: '1rem' }}>Groupe</th>
                  <th style={{ padding: '1rem' }}>Allergies</th>
                  <th style={{ padding: '1rem' }}>Contact d'Urgence</th>
                </tr>
              </thead>
              <tbody>
                <MedicalRow name="Liam Traoré" blood="A+" allergy="Arachides" contact="+243 81 234 5678" />
                <MedicalRow name="Sarah Bongongo" blood="O-" allergy="Aucune" contact="+243 89 543 2100" />
                <MedicalRow name="Kevin Malela" blood="B+" allergy="Pénicilline" contact="+243 82 828 2828" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'finance') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <p style={{ color: 'var(--text-muted)' }}>Frais Recouvrés (Avril)</p>
            <h2 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>12,450.00 $</h2>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', margin: '1rem 0', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'var(--secondary)' }}></div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>85% de l'objectif atteint</p>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <p style={{ color: 'var(--text-muted)' }}>Arriérés Totaux</p>
            <h2 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>3,240.00 $</h2>
            <p style={{ fontSize: '0.8rem', color: '#ef4444' }}>12 familles à relancer cette semaine</p>
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem' }}>Flux de Trésorerie par Canal</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FinanceRow source="M-Pesa" total="4,200 $" count="24 paiements" />
            <FinanceRow source="Airtel Money" total="2,150 $" count="12 paiements" />
            <FinanceRow source="Orange Money" total="3,100 $" count="18 paiements" />
            <FinanceRow source="Banque (BCDC)" total="3,000 $" count="4 paiements" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>Section : {activeTab}</h2>
      <p style={{ color: 'var(--text-muted)' }}>Cette fonctionnalité est en cours de développement pour enrichir votre portail.</p>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card" 
    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}
  >
    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
      {icon}
    </div>
    <div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{label}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <h4 style={{ fontSize: '1.5rem', margin: 0 }}>{value}</h4>
        <span style={{ fontSize: '0.75rem', color: trend.startsWith('+') ? 'var(--secondary)' : 'var(--text-muted)', fontWeight: 600 }}>{trend}</span>
      </div>
    </div>
  </motion.div>
);

const ActivityItem = ({ icon, title, desc, time, color }) => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
    <div style={{ 
      width: '32px', 
      height: '32px', 
      borderRadius: '8px', 
      background: 'rgba(255,255,255,0.03)', 
      border: `1px solid ${color}33`, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: color,
      flexShrink: 0
    }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{title}</p>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0' }}>{desc}</p>
      <p style={{ fontSize: '0.65rem', opacity: 0.5 }}>{time}</p>
    </div>
  </div>
);

const StudentRow = ({ name, grade, status, date }) => (
  <tr style={{ borderBottom: '1px solid var(--border-glass)' }}>
    <td style={{ padding: '1rem', fontWeight: 500 }}>{name}</td>
    <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{grade}</td>
    <td style={{ padding: '1rem' }}>
      <span style={{ 
        padding: '0.25rem 0.6rem', 
        borderRadius: '100px', 
        fontSize: '0.7rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        background: status === 'Payé' ? 'rgba(16, 185, 129, 0.1)' : status === 'Partiel' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        color: status === 'Payé' ? 'var(--secondary)' : status === 'Partiel' ? 'var(--accent-amber)' : '#ef4444',
        border: `1px solid ${status === 'Payé' ? 'rgba(16, 185, 129, 0.2)' : status === 'Partiel' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
      }}>
        {status}
      </span>
    </td>
    <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>{date}</td>
  </tr>
);

const MedicalRow = ({ name, blood, allergy, contact }) => (
  <tr style={{ borderBottom: '1px solid var(--border-glass)' }}>
    <td style={{ padding: '1rem', fontWeight: 500 }}>{name}</td>
    <td style={{ padding: '1rem' }}>
      <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>{blood}</span>
    </td>
    <td style={{ padding: '1rem' }}>
      <span style={{ 
        color: allergy === 'Aucune' ? 'var(--secondary)' : allergy === 'Arachides' ? '#ef4444' : 'var(--accent-amber)',
        fontWeight: allergy === 'Aucune' ? 400 : 600,
        fontSize: '0.9rem'
      }}>
        {allergy}
      </span>
    </td>
    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{contact}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Contact d'urgence</span>
      </div>
    </td>
  </tr>
);

const FinanceRow = ({ source, total, count }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TrendingUp size={18} color="var(--primary)" />
      </div>
      <div>
        <h5 style={{ fontSize: '1rem', margin: 0 }}>{source}</h5>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{count}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <p style={{ fontWeight: 700, color: 'var(--secondary)', fontSize: '1.1rem', margin: 0 }}>{total}</p>
    </div>
  </div>
);

export default AdminDashboard;
