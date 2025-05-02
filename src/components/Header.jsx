import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#Home" onClick={handleNavClick} className={activeSection === 'Home' ? 'active' : ''}>Home</a>
        <a href="#About" onClick={handleNavClick} className={activeSection === 'About' ? 'active' : ''}>About</a>
        <a href="#Projects" onClick={handleNavClick} className={activeSection === 'Projects' ? 'active' : ''}>Projects</a>
        <a href="#Services" onClick={handleNavClick} className={activeSection === 'Services' ? 'active' : ''}>Services</a>
        <a href="#Contact" onClick={handleNavClick} className={activeSection === 'Contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
