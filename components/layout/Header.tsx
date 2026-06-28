// components/layout/Header.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import IsConnected from './IsConnected';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/5 border-b border-blue-100 dark:border-blue-900/30' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center">
            <Nav />
          </div>

          {/* Authentification - Desktop */}
          <div className="hidden md:flex items-center">
            <IsConnected />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
            border-b border-gray-200 dark:border-gray-800
            shadow-2xl
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}
        >
          <div className="container mx-auto px-4 py-6">
            {/* Navigation mobile */}
            <Nav mobile />

            {/* Séparateur */}
            <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

            {/* Authentification mobile */}
            <IsConnected mobile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;