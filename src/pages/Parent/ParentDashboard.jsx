import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, History, Smartphone, Landmark, CheckCircle2, TrendingUp, TrendingDown, Minus, Target } from 'lucide-react';

const ParentDashboard = ({ activeTab }) => {
  if (activeTab === 'finance') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {/* Balance Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', border: 'none' }}>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Solde Total à Payer</p>
            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>850,00 $</h2>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                Frais Scolaires: 600$
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                Uniforme & Accessoires: 250$
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ border: '1px dashed var(--border-glass)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-amber)', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>PAIEMENT À VENIR</div>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Date Limite de Prochaine Tranche</p>
            <h3 style={{ color: 'var(--accent-amber)', fontSize: '1.5rem' }}>30 Avril 2026</h3>
            <button style={{ background: 'var(--secondary)', width: '80%', marginTop: '0.5rem' }}>Démarrer le paiement</button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>Moyens de Paiement Disponibles</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paiement sécurisé et instantané</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            <PaymentMethod logo="/mpesa.png" name="M-Pesa" number="0810000000" color="#ff0000" />
            <PaymentMethod logo="/airtel_money.png" name="Airtel Money" number="0990000000" color="#ed1c24" />
            <PaymentMethod logo="/orange_money.png" name="Orange Money" number="0850000000" color="#f16e00" />
            <PaymentMethod logo="/afrimoney.png" name="AfriMoney" number="0911010101" color="#00a1e4" />
            <PaymentMethod logo="/illicocash.png" name="Illicocash" number="0973002734" color="#2563eb" />
          </div>
        </div>

        {/* Transaction History */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <History size={20} color="var(--primary)" />
            <h3>Historique de vos Transactions</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <TransactionItem date="10 Mars 2026" amount="150.00 $" method="M-Pesa Mobile" status="Validé" />
            <TransactionItem date="15 Fév 2026" amount="300.00 $" method="Virement Bancaire" status="Validé" />
            <TransactionItem date="05 Jan 2026" amount="100.00 $" method="Orange Money" status="Validé" />
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'stats') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <header style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '24px', 
              background: 'linear-gradient(45deg, var(--primary), var(--accent-purple))', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2rem', 
              fontWeight: 800,
              color: 'white',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }}>MK</div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Dossier Élève</p>
              <h2 style={{ fontSize: '2rem', margin: '0.2rem 0' }}>Musa Kabamba</h2>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <span className="glass-effect" style={{ padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem' }}>4ème Primaire - A</span>
                <span className="glass-effect" style={{ padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem' }}>Titulaire: Mr. Robert</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Moyenne Actuelle</p>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', lineHeight: 1 }}>82%</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: 'var(--secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              <TrendingUp size={14} /> <span>+3% vs Mars</span>
            </div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
          {/* Grades List */}
          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Détails par Sujet</h3>
              <Target size={20} color="var(--primary)" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <GradeItem subject="Mathématiques" score="18/20" date="12 Avril" trend="up" />
              <GradeItem subject="Français" score="15/20" date="10 Avril" trend="stable" />
              <GradeItem subject="Sciences de la Vie" score="14.5/20" date="08 Avril" trend="down" />
              <GradeItem subject="Histoire & Géo" score="19/20" date="05 Avril" trend="up" />
              <GradeItem subject="Anglais" score="17/20" date="02 Avril" trend="up" />
            </div>
          </div>

          {/* Attendance/Conduct */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card">
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Assiduité & Ponctualité</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.7rem', fontSize: '0.9rem' }}>
                    <span>Taux de Présence</span>
                    <span style={{ fontWeight: 700, color: 'var(--secondary)' }}>95%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      transition={{ duration: 1 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--secondary), #34d399)' }}
                    ></motion.div>
                  </div>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Remarque Titulaire :</p>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-main)', opacity: 0.9 }}>"Musa progresse de façon remarquable en mathématiques. Un élève très sérieux."</p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'rgba(37, 99, 235, 0.03)' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Prochain Événement</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass-effect" style={{ width: '50px', height: '50px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>AVR</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>25</span>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Réunion Parents-Profs</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bâtiment B - Salle 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>Section {activeTab}</h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Informations complémentaires bientôt disponibles dans cette section.</p>
    </div>
  );
};

const PaymentMethod = ({ logo, name, number, color }) => (
  <motion.button 
    whileHover={{ y: -5, boxShadow: `0 10px 20px -10px ${color}66` }}
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '1rem', 
      padding: '1.5rem',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid var(--border-glass)',
      borderRadius: 'var(--radius-md)',
      color: 'white',
      cursor: 'pointer',
      width: '100%'
    }}
  >
    <div style={{ 
      width: '60px', 
      height: '60px', 
      borderRadius: '16px', 
      overflow: 'hidden',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <img src={logo} alt={name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block' }}>{name}</span>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', opacity: 0.8 }}>{number}</span>
    </div>
  </motion.button>
);

const TransactionItem = ({ date, amount, method, status }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '10px', 
        background: 'rgba(16, 185, 129, 0.05)', 
        color: 'var(--secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <CheckCircle2 size={24} />
      </div>
      <div>
        <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Reglement {method}</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{date}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>{amount}</p>
      <p style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 600 }}>{status}</p>
    </div>
  </div>
);

const GradeItem = ({ subject, score, date, trend }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-glass)', transition: 'background 0.3s' }} className="hover-highlight">
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: trend === 'up' ? 'var(--secondary)' : trend === 'down' ? '#ef4444' : 'var(--text-muted)' }}></div>
      <div>
        <p style={{ fontWeight: 600, fontSize: '1rem' }}>{subject}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Dernier exam. {date}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{score}</span>
      <span style={{ 
        display: 'flex',
        alignItems: 'center',
        width: '24px',
        color: trend === 'up' ? 'var(--secondary)' : trend === 'down' ? '#ef4444' : 'var(--text-muted)' 
      }}>
        {trend === 'up' ? <TrendingUp size={18} /> : trend === 'down' ? <TrendingDown size={18} /> : <Minus size={18} />}
      </span>
    </div>
  </div>
);

export default ParentDashboard;
