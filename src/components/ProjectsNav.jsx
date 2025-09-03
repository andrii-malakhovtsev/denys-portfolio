import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const projects = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'cnc-wood-milling-machine', label: 'Wood Milling Machine',
     to: '/projects/cnc-wood-milling-machine' },
  { id: 'metal-strips-machine', label: 'Metal Strips Bending',
     to: '/projects/metal-strips-machine' },
  { id: 'metal-rings-welding-machine', label: 'Welding Machine',
     to: '/projects/metal-rings-welding-machine' },
  { id: 'radiator-led-lamp', label: 'Radiator', to: '/projects/radiator-led-lamp' },
  { id: 'cnc-lathe', label: 'CNC Lathe', to: '/projects/cnc-lathe' },
];

export default function ProjectsNav() {
  const location = useLocation();

  return (
    <nav className="nav projects-nav">
      {projects.map((p) => (
        <Link
          key={p.id}
          to={p.to}
          className={`${location.pathname === p.to ? 'active' : ''} ${
            p.id === 'home' ? 'home-link' : ''
          }`}
        >
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
