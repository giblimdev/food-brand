// app/admin/page.tsx

//type : page 
/*role : page d'entré admin vers
gestion des utilisateur (attribution du role admin)
dashboard : (a developper) 
chart restaurent point de vent (pos), 
gestion des catégorie et enum(visualisation),
communication BtB
*/              
/*fonctionnement : 
verifie le role de l'utilisateur (pas implémenter pour l'instant)
*/ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

import React from 'react';
import Link from 'next/link';
import { equipementData } from './equipementData';
import HeaderAdmin from '@/components/admin/HeaderAdmin';

function AdminPage() {
  return (
    <div>
      <HeaderAdmin/>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
        <Link href="/admin">🏠 Home Admin</Link>
        <Link href="/admin/equipement">⚙️ Équipement</Link>
        <Link href="/admin/general">📊 General</Link>
        <Link href="/admin/name">📝 Name</Link>
      </nav>

      <section style={{ padding: '2rem' }}>
        <h1>📋 Liste des équipements de la cuisine centrale</h1>
        <p style={{ color: '#555' }}>
          {equipementData.length} équipements référencés — classés par catégorie.
        </p>

        {/* Affichage par catégorie */}
        {['Cuisson', 'Préparation', 'Réfrigération', 'Conservation spécifique', 'Distribution', 'Nettoyage', 'Mobilier', 'Ustensiles', 'Sécurité et ventilation', 'Conditionnement'].map((cat) => {
          const items = equipementData.filter(e => e.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} style={{ marginTop: '2.5rem' }}>
              <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.3rem' }}>
                {cat}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                {items.map((item) => (
                  <div key={item.id} style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '1rem',
                    background: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}>
                    {/* En-tête avec ID */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h3>
                      <span style={{ fontSize: '0.7rem', background: '#eee', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        ID: {item.id}
                      </span>
                    </div>

                    {/* Slug */}
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>🔗  {item.slug}</div>

                    {/* Sous-catégorie + priorité */}
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      <span>🔹 {item.subCategory}</span>
                      {item.priority === 1 && <span style={{ marginLeft: '0.5rem', background: '#e74c3c', color: '#fff', padding: '0 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>INDISPENSABLE</span>}
                      {item.priority === 2 && <span style={{ marginLeft: '0.5rem', background: '#f39c12', color: '#fff', padding: '0 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>IMPORTANT</span>}
                      {item.priority === 3 && <span style={{ marginLeft: '0.5rem', background: '#95a5a6', color: '#fff', padding: '0 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>OPTIONNEL</span>}
                    </div>

                    {/* Énergie et Rôle */}
                    <div style={{ fontSize: '0.9rem' }}>
                      <strong>Énergie :</strong> {item.energie.join(', ')}
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>
                      <strong>Rôle :</strong> {item.role.join(', ')}
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#444' }}>
                      {item.description}
                    </p>

                    {/* Prix */}
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2e7d32' }}>
                      💰 {item.prix[0].toLocaleString()} - {item.prix[1].toLocaleString()} €
                    </div>

                    {/* Images avec placeholder */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {item.image.length > 0 ? (
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                      ) : (
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: '#eee',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          color: '#999',
                          fontSize: '1.5rem'
                        }}>
                          📷
                        </div>
                      )}
                      <span style={{ fontSize: '0.8rem', color: '#888' }}>
                        {item.image.length} image(s)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Section "Histoire de nom" que vous aviez déjà */}
      <section style={{ padding: '2rem', background: '#fafafa', marginTop: '3rem' }}>
        <h2>🎯 Concept — Cloud Kitchen BrandFusion</h2>
        <p>
          Créer une cuisine centralisée à Popayán, proposant plusieurs marques 
          (Sandwich, Crêperie, Fast Food, Pizza, Poulet, Cuisine familiale, Épicerie) 
          en fonction du marché. Vente en Take away ou livraison.
        </p>
        <p>
          <strong>Principales marques :</strong>
        </p>
        <ul>
          <li>🥪 Les Sandwichs (partenariat boulangerie)</li>
          <li>🥞 La Crêperie (desserts & brunch)</li>
          <li>🍔 Fast Food / Street Food (volume & soirée)</li>
          <li>🍕 Pizza internationale</li>
          <li>🍗 Pollo Mundo (spécialiste du poulet)</li>
          <li>🍲 Sazón de la Abuela (cuisine traditionnelle familiale)</li>
          <li>🛒 Corner Antojo (épicerie / dépanneur)</li>
        </ul>
        <p>
          <strong>Avantages du modèle multi‑marques :</strong><br />
          Couverture temporelle, diversification des risques, économies d'échelle, 
          préparation à la phase agricole avec Hacienda Esmeralda.
        </p>
      </section>
    </div>
  );
}

export default AdminPage;