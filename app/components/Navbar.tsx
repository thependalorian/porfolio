'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, FolderGit2, Flag, Award, GraduationCap } from 'lucide-react';

/**
 * Navbar Component
 * 
 * A responsive navigation bar with glassmorphic effect that appears across all pages.
 * Features hover effects, active state indicators, and mobile responsiveness.
 * Located at: app/components/Navbar.tsx
 */

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Projects', href: '/projects', icon: FolderGit2 },
    { name: 'Certificates', href: '/certificates', icon: GraduationCap },
    { name: 'Namibia', href: '/namibia', icon: Flag },
    { name: 'Buffr', href: '/buffr', icon: Award },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-base-100/30 border-b border-base-300">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={pathname === item.href ? 'active' : ''}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            George Nekwaya
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`hover:text-primary transition-colors ${
                      pathname === item.href ? 'text-primary' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Link 
            href="https://www.linkedin.com/in/george-nekwaya" 
            target="_blank"
            className="btn btn-primary btn-outline"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 