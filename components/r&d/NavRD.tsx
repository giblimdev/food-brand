// R&D/NavRD.tsx



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


'use client';

import Link from 'next/link';
import { mainNav, secondaryNav } from './NavRDData';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function NavRD({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
        />
      )}

      {/* Navigation Desktop */}
      <div 
        className={`hidden md:block w-64 bg-white dark:bg-gray-900 border-r h-screen ${className}`}
        style={{ position: 'relative', zIndex: 9999 }}  // <-- AJOUTÉ
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">R&D</h2>
        </div>
        
        <div className="p-4 space-y-1">
          {mainNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
          
          <div className="border-t my-4"></div>
          
          {secondaryNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 z-40 shadow-xl transition-transform md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">R&D</h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 text-gray-700 dark:text-gray-300"
            style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 space-y-1">
          {mainNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
          
          <div className="border-t my-4"></div>
          
          {secondaryNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ pointerEvents: 'auto' }}  // <-- AJOUTÉ
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}