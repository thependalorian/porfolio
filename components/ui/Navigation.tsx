'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/resume/japanese', label: 'Japanese Resume' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`act-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="act-nav-container">
        <Link href="/" className="flex items-center">
          <span className="font-title text-2xl font-medium text-act-white tracking-act-title">George</span>
        </Link>

        <div className={`act-nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="act-nav-link" onClick={handleLinkClick}>
              {link.label}
            </Link>
          ))}
        </div>

        <button 
          className="act-nav-toggle md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
