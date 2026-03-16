import React, { useState } from 'react';
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

  return (
    <nav className="navbar">
      <span className="navbar-brand">{'<AS />'}</span>

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

      {/* Nav links — slide in on mobile */}
      <ul className={`navbar-links ${open ? 'nav-open' : ''}`}>
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

      {/* Overlay to close menu when tapping outside */}
      {open && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  );
}

export default Navbar;
