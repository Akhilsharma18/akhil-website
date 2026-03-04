import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import API_BASE from '../api';
import './Contact.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const FALLBACK_CONTACT = {
  email: 'kesarakhil123@gmail.com',
  phone: '8082270967',
  linkedin: 'https://www.linkedin.com/in/akhil-sharma-98a848313/',
  github: 'https://github.com/Akhilsharma18',
};

const CONTACT_ITEMS = (c) => [
  { label: 'Email', value: c.email, href: `mailto:${c.email}`, icon: '✉️' },
  { label: 'Phone', value: c.phone, href: `tel:${c.phone}`, icon: '📞' },
  { label: 'LinkedIn', value: 'View Profile', href: c.linkedin, icon: '💼', external: true },
  { label: 'GitHub', value: '@Akhilsharma18', href: c.github, icon: '🐙', external: true },
  { label: 'Instagram', value: '@akhil.kesar_', href: 'https://www.instagram.com/akhil.kesar_/', icon: '📸', external: true },
];

function Contact() {
  const [contact, setContact] = useState(FALLBACK_CONTACT);

  useEffect(() => {
    axios.get(`${API_BASE}/api/contact`)
      .then(res => { if (res.data) setContact(res.data); })
      .catch(() => { });
  }, []);

  const items = CONTACT_ITEMS(contact);

  return (
    <motion.div
      className="page-wrapper page-content contact-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="section-heading">Contact</h2>

      <motion.p
        className="contact-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let's connect! Feel free to reach out.
      </motion.p>

      <motion.div
        className="contact-quote"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="highlight">
          Self-belief and hard work will always earn you success 💻 <br />
          <span className="quote-author">- VIRAT KOHLI</span>
        </h3>
      </motion.div>

      <div className="contact-grid">
        {items.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: '0 0 25px rgba(0,255,0,0.4)' }}
          >
            <span className="contact-icon">{item.icon}</span>
            <div className="contact-info">
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </div>
            <span className="contact-arrow">→</span>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="contact-divider" />
        <p>Built with <span className="heart">❤️</span> by Akhil Sharma</p>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
