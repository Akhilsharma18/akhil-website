import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/tools', label: 'Coding & Tools' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Main navbar bar */}
      <nav className="navbar">
        <span className="navbar-brand">{'<AS />'}</span>

        {/* Desktop links — hidden on mobile */}
        <ul className="navbar-links-desktop">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button — only visible on mobile */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu — outside <nav> so backdrop-filter doesn't clip it */}
      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`} aria-hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay backdrop */}
      {open && <div className="nav-overlay" onClick={closeMenu} />}
    </>
  );
}

export default Navbar;
