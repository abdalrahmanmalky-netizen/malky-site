import React from 'react';
import { NAV_LINKS, SITE_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-bgDark/50 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <span className="text-bgDark font-bold text-xs">MP</span>
        </div>
        <span className="text-xl font-heading font-bold text-white tracking-wide">{SITE_NAME}</span>
      </div>
      
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300 uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex gap-4">
        {/* Mobile Menu Placeholder - keeping it simple for single file logic */}
        <button className="md:hidden text-white hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;