import Link from 'next/link'
import React from 'react'

function HeaderAdmin() {
  return (
    <div>      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
        <Link href="/admin">🏠 Home Admin</Link>
        <Link href="/admin/equipement">⚙️ Équipement</Link>
        <Link href="/admin/general">📊 General</Link>
        <Link href="/admin/name">📝 Name</Link>
        <Link href="/admin/siteManager">📝 SiteManager</Link>
        <Link href="/admin/strategie">📝 Strategie</Link>        
        <Link href="/admin/transformation">📝 Transformation</Link>
        
        
      </nav>
</div>
  )
}

export default HeaderAdmin