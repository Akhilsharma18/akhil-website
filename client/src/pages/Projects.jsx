import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Projects.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const FALLBACK_PROJECTS = [
  {
    title: 'JKBOSE Portal',
    description: 'A comprehensive portal for JKBOSE students to access results, syllabus, datesheets and important notices in one place.',
    github: 'https://github.com/Akhilsharma18/jkbosepro',
    live: 'https://jkbosepro.vercel.app',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Yojna Mitra',
    description: 'A platform that helps citizens discover and apply for government schemes easily, bridging the gap between people and welfare programs.',
    github: 'https://github.com/Akhilsharma18/yojna-mitr',
    live: '',
    tags: ['React', 'Express', 'MongoDB'],
  },
];

function Projects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => { if (res.data?.length > 0) setProjects(res.data); })
      .catch(() => { });
  }, []);

  return (
    <motion.div
      className="page-wrapper page-content projects-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="section-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: '0 0 30px rgba(0,255,0,0.4)' }}
          >
            <div className="project-top">
              <div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
              </div>
            </div>

            <div className="project-tags">
              {(proj.tags || []).map((tag, ti) => (
                <span key={ti} className="project-tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="glow-btn">
                🐙 GitHub
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="glow-btn live-btn">
                  🚀 Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="projects-coming-soon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Stay tuned — more to come.
      </motion.p>
    </motion.div>
  );
}

export default Projects;
