import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, MessageCircle, Star, Award, Building2 } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import ThemeToggle from '../components/ThemeToggle';
import logo from '../assets/logo.png';

const LandingPage = ({ onLogin }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '0 0 var(--spacing-xl) 0', position: 'relative' }}>
      <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100 }}>
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section style={{ padding: 'var(--spacing-xl) var(--spacing-md)', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}
          >
            <img src={logo} alt="MasomoApp Logo" style={{ maxWidth: '350px', width: '90%', height: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
          </motion.div>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.6' }}>
            La solution de gestion scolaire qui traverse le temps. Automatisez, centralisez et révolutionnez l'expérience éducative de votre établissement.
          </p>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'center', width: '100%', padding: '0 var(--spacing-md)' }}>
          {/* Left Side: Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <FeatureItem 
              icon={<ShieldCheck color="var(--secondary)" />}
              title="Administration Optimisée"
              desc="Gestion RH, financière et administrative simplifiée avec reporting en temps réel."
            />
            <FeatureItem 
              icon={<MessageCircle color="var(--primary)" />}
              title="Lien Parent-Enseignant"
              desc="Communication instantanée via messagerie intégrée et intégration WhatsApp."
            />
            <FeatureItem 
              icon={<Zap color="var(--accent-amber)" />}
              title="Continuité Pédagogique"
              desc="Accès aux devoirs et ressources même en cas d'interruption scolaire."
            />
          </div>

          {/* Right Side: Login Form */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LoginForm onLogin={onLogin} />
          </div>
        </main>
      </section>

      {/* Trust / Logos Section */}
      <section className="glass-effect" style={{ padding: '3rem 0', margin: '4rem 0', borderLeft: 'none', borderRight: 'none', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 var(--spacing-md)' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Ils nous font confiance</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.5, filter: 'grayscale(1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building2 /> <span style={{ fontWeight: 700 }}>ECOLE DU FLEUVE</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building2 /> <span style={{ fontWeight: 700 }}>CONGO ACADEMY</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building2 /> <span style={{ fontWeight: 700 }}>Lycée de la Paix</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Building2 /> <span style={{ fontWeight: 700 }}>INSTITUT MASOMO</span></div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section style={{ maxWidth: '1200px', margin: '6rem auto', padding: '0 var(--spacing-md)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <StatBox count="+5000" label="Élèves Connectés" color="var(--primary)" />
          <StatBox count="+150" label="Établissements" color="var(--secondary)" />
          <StatBox count="99%" label="Satisfaction" color="var(--accent-amber)" />
          <StatBox count="24/7" label="Support Local" color="var(--accent-purple)" />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: '1200px', margin: '8rem auto', padding: '0 var(--spacing-md)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Ce que disent nos utilisateurs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <TestimonialCard 
            quote="Masomo App a radicalement changé la façon dont nous communiquons avec les parents. C'est un gain de temps énorme !"
            author="M. Robert Malela"
            role="Directeur du Lycée de la Paix"
          />
          <TestimonialCard 
            quote="Je peux suivre les notes de mes enfants en temps réel. Le paiement mobile est tellement plus pratique."
            author="Mme Sarah Bongongo"
            role="Parente d'élève"
          />
          <TestimonialCard 
            quote="L'interface enseignant est fluide. Saisir les notes et bulletins ne me prend plus des heures."
            author="Pr. Jean Mutombo"
            role="Enseignant de Mathématiques"
          />
        </div>
      </section>

      <footer style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem 0', borderTop: '1px solid var(--border-glass)' }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          &copy; 2026 Masomo App - Propulsé par la technologie, dédié à l'éducation.
        </p>
      </footer>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5, background: 'rgba(255,255,255,0.05)' }}
    style={{ display: 'flex', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)', transition: 'all 0.3s ease' }}
  >
    <div style={{ flexShrink: 0 }}>{icon}</div>
    <div>
      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.4', fontSize: '0.95rem' }}>{desc}</p>
    </div>
  </motion.div>
);

const StatBox = ({ count, label, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card"
    style={{ textAlign: 'center', padding: '2.5rem' }}
  >
    <h3 style={{ fontSize: '3rem', color, marginBottom: '0.5rem' }}>{count}</h3>
    <p style={{ color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{label}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
    <Star style={{ color: 'var(--accent-amber)', position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.2 }} size={40} />
    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6' }}>"{quote}"</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{author[0]}</div>
      <div>
        <p style={{ fontWeight: 600 }}>{author}</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{role}</p>
      </div>
    </div>
  </div>
);

export default LandingPage;
