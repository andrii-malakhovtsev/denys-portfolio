import React, { useEffect, useRef } from 'react';
import '../components/Header.css';
import backgroundImage from '/images/Header-Background.png';

export default function Header() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const offsetY = window.scrollY;
        imageRef.current.style.transform = `translateY(${offsetY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <img
        src={backgroundImage}
        alt="Header Background"
        className="header-bg"
        ref={imageRef}
      />
      <div className="header-content">
        <h1>Denys Malakhovtsev</h1>
        <p className="location">Dayton, OH | Mechanical Engineer</p>
      </div>
    </header>
  );
}