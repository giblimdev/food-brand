// components/pro/NavPro.tsx

///type : component
/*role : Barre de navigation horizontale avec sous-menus (desktop) et tiroir (mobile) */
/*fonctionnement : Gestion des dropdowns au clic, fermeture automatique, fond clair pour mobile */
//imports [mainNav, secondaryNav, Menu, X, ChevronDown, useState, useEffect, useRef]
//exports [NavRD]
//useby [HeaderPro]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

'use client';

import Link from 'next/link';
import { mainNav, secondaryNav, NavItemPro } from './NavProData';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function NavRD({ className = '' }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const navRef = useRef<HTMLDivElement>(null);

  // Fermer les dropdowns au clic extérieur (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdowns(new Set());
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns(new Set());
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.clear();
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderNavItem = (item: NavItemPro, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      const isOpen = openDropdowns.has(item.id);
      return (
        <li key={item.id} className={isMobile ? 'w-full' : 'relative'}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown(item.id);
            }}
            className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors w-full ${
              isMobile ? 'w-full' : ''
            }`}
          >
            <span className="flex items-center gap-2">
              <item.icon size={18} />
              <span>{item.label}</span>
            </span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isOpen && (
            <ul
              className={`${
                isMobile
                  ? 'pl-4 mt-1 border-l-2 border-gray-200'
                  : 'absolute left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] z-50 border border-gray-100'
              } space-y-1`}
              style={{ zIndex: 9999 }} // S'assurer que le dropdown est au-dessus de tout
            >
              {item.children!.map((child) => renderNavItem(child, isMobile))}
            </ul>
          )}
        </li>
      );
    } else {
      return (
        <li key={item.id}>
          <Link
            href={item.href || '#'}
            onClick={() => {
              if (isMobile) closeAll();
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors ${
              isMobile ? 'w-full' : ''
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </Link>
        </li>
      );
    }
  };

  return (
    <nav ref={navRef} className={`flex items-center ${className}`}>
      {/* Navigation desktop */}
      <ul className="hidden md:flex items-center gap-1">
        {mainNav.map((item) => renderNavItem(item, false))}
        <li className="w-px h-6 bg-gray-300 mx-2" />
        {secondaryNav.map((item) => renderNavItem(item, false))}
      </ul>

      {/* Bouton hamburger mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
        aria-label="Menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay pour mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Menu mobile tiroir */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 9999 }} // priorité haute pour le tiroir
      >
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <span className="text-lg font-bold text-gray-800">Menu Pro</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)] bg-white">
          {mainNav.map((item) => renderNavItem(item, true))}
          <li className="border-t my-2" />
          {secondaryNav.map((item) => renderNavItem(item, true))}
        </ul>
      </div>
    </nav>
  );
}