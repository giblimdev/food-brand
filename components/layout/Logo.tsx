// components/layout/Logo.tsx

'use client';

import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
    
      {/* Texte du logo */}
      <div className="flex items-baseline">
        <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          R&D
          <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%] ml-1">
            FoodBrand
          </span>
        </span>
      </div>

      {/* Effet de survol */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-fuchsia-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-fuchsia-500/10 group-hover:to-blue-500/10 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>
    </Link>
  );
}

export default Logo;
