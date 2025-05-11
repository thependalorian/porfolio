import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Footer Component
 * 
 * A responsive footer with social links and copyright information.
 * Features glassmorphic effect and hover animations.
 * Located at: app/components/Footer.tsx
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/george-nekwaya',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/georgenekwaya',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:contact@georgenekwaya.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full backdrop-blur-md bg-base-100/30 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">George Nekwaya</h3>
            <p className="text-sm text-base-content/70">
              AI Product Manager & Business Strategist
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="btn btn-ghost btn-circle hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="divider my-4"></div>
        
        <div className="text-center text-sm text-base-content/70">
          <p>© {currentYear} George Nekwaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 