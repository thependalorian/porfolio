import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="act-footer">
      <div className="act-content">
        <div className="act-footer-content">
          {/* Section 1: Brand */}
          <div className="act-footer-section">
            <div className="mb-4">
              <h3 className="font-title text-2xl font-medium text-act-white leading-none tracking-act-title mb-2">
                George Nekwaya
              </h3>
            </div>
            <p className="text-sm text-act-sand-gray pr-4">
              AI/ML developer and data strategist. Building innovative solutions at the intersection of technology and social impact.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="act-footer-section">
            <h4>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="act-footer-link">Home</Link></li>
              <li><Link href="/resume/japanese" className="act-footer-link">Japanese Resumes</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div className="act-footer-section">
            <h4>Contact</h4>
            <ul className="space-y-2 text-act-sand-gray">
              <li><a href="mailto:george@buffr.ai" className="act-footer-link">george@buffr.ai</a></li>
              <li><p>Boston, MA | Windhoek, Namibia</p></li>
            </ul>
          </div>
        </div>

        <div className="act-footer-legal">
          <p>&copy; {currentYear} George Nekwaya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
