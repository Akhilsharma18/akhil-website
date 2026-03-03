import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

function Home() {
  const navigate = useNavigate();
  const [termInput, setTermInput] = useState('');
  const [termHistory, setTermHistory] = useState([
    'Type "virat kohli" and press enter to see something cool!',

  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!termInput.trim()) return;

    const cmd = termInput.trim().toLowerCase();
    const newHistory = [...termHistory, `> ${cmd}`];

    switch (cmd) {
      case 'virat kohli':
        newHistory.push('Available commands:');
        newHistory.push('  home     - Go to Home page');
        newHistory.push('  about    - Go to About page');
        newHistory.push('  skills   - Go to Skills page');
        newHistory.push('  projects - Go to Projects page');
        newHistory.push('  contact  - Go to Contact page');
        newHistory.push('  clear    - Clear terminal');
        break;
      case 'home':
        newHistory.push('Already on Home page.');
        break;
      case 'about':
        newHistory.push('Navigating to About...');
        setTimeout(() => navigate('/about'), 600);
        break;
      case 'skills':
        newHistory.push('Navigating to Skills...');
        setTimeout(() => navigate('/skills'), 600);
        break;
      case 'projects':
        newHistory.push('Navigating to Projects...');
        setTimeout(() => navigate('/projects'), 600);
        break;
      case 'contact':
        newHistory.push('Navigating to Contact...');
        setTimeout(() => navigate('/contact'), 600);
        break;
      case 'clear':
        setTermHistory([]);
        setTermInput('');
        return;
      default:
        newHistory.push(`Command not found: ${cmd}. Type "virat kohli"  to see something cool!`);
    }

    setTermHistory(newHistory);
    setTermInput('');
  };

  return (
    <motion.div
      className="page-wrapper home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="home-content">
        <div className="home-left">
          <motion.img
            src="/akhil.jpeg"
            alt="Akhil "
            className="home-photo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.h1
            className="home-headline floating-heading"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
             <span className="highlight"> LET'S CODE THROUGH THE NIGHT,</span><br />
            <span className="highlight">DEPLOYING BY DAWN  WITH AKHIL! </span>
          </motion.h1>
          <motion.p
            className="home-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Backend Developer &nbsp;|&nbsp; Problem Solver &nbsp;|&nbsp; Tech Enthusiast
          </motion.p>
          <motion.div
            className="home-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="pulse-dot" />
            EXECUTING VISION.exe
          </motion.div>
        </div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="terminal-window" onClick={() => document.getElementById('term-input')?.focus()}>
            <div className="terminal-header">
              <div className="term-btn red"></div>
              <div className="term-btn yellow"></div>
              <div className="term-btn green"></div>
              <div className="term-title">guest@akhil-portfolio:~</div>
            </div>
            <div className="terminal-body">
              <div className="term-history">
                {termHistory.map((line, idx) => (
                  <div key={idx} className={line.startsWith('>') ? 'term-cmd-line' : 'term-output-line'}>
                    {line}
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommandSubmit} className="term-input-line">
                <span className="term-prompt">guest@akhil:~$</span>
                <input
                  id="term-input"
                  type="text"
                  value={termInput}
                  onChange={(e) => setTermInput(e.target.value)}
                  className="term-input"
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="home-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="footer-handle">@akhil2026</span>
        <div className="footer-links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaFileAlt /> Resume
          </a>
          <a href="https://github.com/Akhilsharma18" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
