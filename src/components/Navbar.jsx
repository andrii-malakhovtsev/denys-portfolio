import React, { useEffect, useState } from 'react';
import './Navbar.css';

const sections = ['about', 'projects', 'experience', 'contact'];

export default function SectionsNav() {
  const [activeIds, setActiveIds] = useState([]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const visibleIds = [];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const offset = window.innerHeight * 0.1;

        if (rect.top <= window.innerHeight && rect.bottom >= offset) {
          visibleIds.push(id);
        }
      });

      setActiveIds((prev) => {
        if (
          prev.length === visibleIds.length &&
          prev.every((v, i) => v === visibleIds[i])
        ) {
          return prev;
        }
        return visibleIds;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(id);
          }}
          className={activeIds.includes(id) ? 'active' : ''}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}