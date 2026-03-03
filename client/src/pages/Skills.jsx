import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Skills.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const FALLBACK_SKILLS = [
  { category: 'Programming Languages', items: ['C++', 'JavaScript', 'Python', 'C'], order: 1 },
  { category: 'Web Technologies', items: ['React', 'NodeJS', 'Express.js', 'HTML', 'CSS'], order: 2 },
  { category: 'Database', items: ['NoSQL', 'MongoDB'], order: 3 },
];

const CATEGORY_ICONS = {
  'Programming Languages': '💻',
  'Web Technologies': '🌐',
  Database: '🗄️',
};

const ITEM_ICONS = {
  'C++': 'C++', JavaScript: 'JS', Python: 'PY', C: 'C',
  React: 'Re', NodeJS: 'Node', 'Express.js': 'Ex', HTML: 'HTML', CSS: 'CSS',
  NoSQL: 'NoSQL', MongoDB: 'MDB',
};

function Skills() {
  const [skills, setSkills] = useState(FALLBACK_SKILLS);

  useEffect(() => {
    axios.get('/api/skills')
      .then(res => { if (res.data?.length > 0) setSkills(res.data); })
      .catch(() => { });
  }, []);

  return (
    <motion.div
      className="page-wrapper page-content skills-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="section-heading">Skills</h2>

      <div className="skills-sections">
        {[...skills].sort((a, b) => a.order - b.order).map((section, si) => (
          <motion.div
            key={si}
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.15, duration: 0.6 }}
          >
            <div className="skills-section-header">
              <span className="skills-section-icon">{CATEGORY_ICONS[section.category] || '🔧'}</span>
              <h3 className="skills-section-title">{section.category}</h3>
            </div>
            <div className="skills-items-grid">
              {section.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  className="skill-item-box"
                  whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,0,0.5)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="skill-badge">{ITEM_ICONS[item] || item.slice(0, 3)}</span>
                  <span className="skill-label">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
