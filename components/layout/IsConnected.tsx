// components/layout/IsConnected.tsx

'use client';

import React from 'react';
import Link from 'next/link';

interface IsConnectedProps {
  mobile?: boolean;
}

function IsConnected({ mobile = false }: IsConnectedProps) {
  if (mobile) {
    return (
      <Link
        href="/login"
        className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg"
      >
        Se connecter
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Se connecter
    </Link>
  );
}

export default IsConnected;