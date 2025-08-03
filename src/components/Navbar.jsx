import './Navbar.css';

import React, { useEffect, useState } from 'react';

const sections = ['about', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [activeSections, setActiveSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIds = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);

        setActiveSections(visibleIds);
      },
      {
        threshold: 0.3, // adjust if needed
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      {sections.map((id) => (
        <a
          key={id}
          onClick={() => scrollToSection(id)}
          className={activeSections.includes(id) ? 'active' : ''}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}
