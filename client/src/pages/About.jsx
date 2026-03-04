import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import API_BASE from '../api';
import './About.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const FALLBACK_LINKS = [
  { platform: 'LeetCode', url: 'https://leetcode.com/u/Akhil_sharma18/', emoji: '🧩' },
  { platform: 'HackerRank', url: 'https://www.hackerrank.com/profile/kesarakhil123', emoji: '⭐' },
  { platform: 'Coding Ninjas', url: 'https://www.naukri.com/code360/profile/Akhilkesar', emoji: '🥷' },
  { platform: 'Codeforces', url: 'https://codeforces.com/profile/akhil_sharma18', emoji: '⚡' },
  { platform: 'GitHub', url: 'https://github.com/Akhilsharma18', emoji: '🐙' },
];

const PLATFORM_EMOJIS = {
  leetcode: '🧩', hackerrank: '⭐', 'coding ninjas': '🥷', codeforces: '⚡', github: '🐙',
};

function Globe({ onClick, expanded }) {
  return (
    <div className={`globe-wrapper ${expanded ? 'expanded' : ''}`} onClick={onClick}>
      <div className="globe">
        <div className="globe-core" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`globe-ring ring-${i}`} />
        ))}
        <div className="globe-line-h" />
        <div className="globe-line-v" />
        {!expanded && <div className="globe-hint">CLICK ME ✨</div>}
      </div>
      {expanded && (
        <motion.div
          className="globe-bio"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            i am a  first-year student passionate about backend development 💻 and problem-solving.
            I find genuine excitement in debugging challenging issues and designing scalable,
            efficient systems that perform reliably. I enjoy working on complex logical problems
            and turning ideas into structured, high-impact solutions. Constantly learning and
            experimenting, I strive to grow as a developer while building technology that truly works❤️.
          </p>
        </motion.div>
      )}
    </div>
  );
}

function About() {
  const [globeExpanded, setGlobeExpanded] = useState(false);
  const [links, setLinks] = useState(FALLBACK_LINKS);

  useEffect(() => {
    axios.get(`${API_BASE}/api/links`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setLinks(res.data.map(l => ({
            ...l,
            emoji: PLATFORM_EMOJIS[l.platform.toLowerCase()] || '🔗',
          })));
        }
      })
      .catch(() => { });
  }, []);

  return (
    <motion.div
      className="page-wrapper page-content about-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="section-heading">Hii , im AKHIL</h2>

      {/* Two-column: Photo | Globe */}
      <div className="about-top">
        {/* LEFT: photo */}
        <motion.div
          className="about-photo-wrap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="about-photo-ring">
            <img
              src="/akhil.jpeg"
              alt="Akhil Sharma"
              className="about-photo"
            />
          </div>
          <p className="about-name-label">Akhil Sharma</p>
          <p className="about-role-label">Backend Developer</p>
        </motion.div>

        {/* RIGHT: Globe */}
        <motion.div
          className="about-globe-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Globe expanded={globeExpanded} onClick={() => setGlobeExpanded(p => !p)} />
        </motion.div>
      </div>

      {/* Coding Profiles */}
      <motion.section
        className="about-profiles"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <h3 className="profiles-heading">Coding Profiles</h3>
        <div className="profiles-grid">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
            >
              <span className="profile-emoji">{link.emoji}</span>
              <span className="profile-name">{link.platform}</span>
              <span className="profile-arrow">→</span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Achievements Box */}
      <motion.section
        className="about-achievements"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <h3 className="profiles-heading">Highlights & Achievements</h3>
        <div className="achievements-container">
          <div className="about-photo-box achievements-box">
            <div className="about-photo-overlay">
              <span>Reveal</span>
            </div>
            <div className="achievements-gallery">
              <img src="/leetcode.png" alt="Highlight 1" />
              <img src="/virat.png" alt="Highlight 2" />
              <img src="/mait.png" alt="Highlight 3" />
              <img src="/streak.png" alt="Highlight 4" />
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
