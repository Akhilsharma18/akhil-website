import React from 'react';
import { motion } from 'framer-motion';
import './Tools.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const TOOLS = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Akhil_sharma18/',
    emoji: '🧩',
    desc: 'Data Structures & Algorithms practice. Sharpening problem-solving skills daily.',
    color: '#ffa116',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/kesarakhil123',
    emoji: '⭐',
    desc: 'Competitive programming and skill certifications across multiple domains.',
    color: '#00ea64',
  },
  {
    name: 'Coding Ninjas',
    url: 'https://www.naukri.com/code360/profile/Akhilkesar',
    emoji: '🥷',
    desc: 'Structured learning paths and coding challenges for interview prep.',
    color: '#e85d04',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/akhil_sharma18',
    emoji: '⚡',
    desc: 'Competitive programming contests. Rated programmer building problem-solving stamina.',
    color: '#3b82f6',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Akhilsharma18',
    emoji: '🐙',
    desc: 'Open source repositories, personal projects and collaborative code.',
    color: '#ffffff',
  },
];

function Tools() {
  return (
    <motion.div
      className="page-wrapper page-content tools-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="section-heading">Coding Practice &amp; Tools</h2>

      <div className="tools-grid">
        {TOOLS.map((tool, i) => (
          <motion.a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="tool-icon-row">
              <span className="tool-emoji">{tool.emoji}</span>
              <span className="tool-name">{tool.name}</span>
              <span className="tool-visit">Visit →</span>
            </div>
            <p className="tool-desc">{tool.desc}</p>
            <div className="tool-bar" style={{ background: tool.color }} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Tools;
