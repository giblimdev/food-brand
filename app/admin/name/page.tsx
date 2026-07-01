// app/admin/name/page.tsx
// Page dédiée à l'histoire du nom et au concept BrandFusion

import React from 'react';
import Link from 'next/link';
import HeaderAdmin from '@/components/admin/HeaderAdmin';

function NameHistoryPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* En-tête avec navigation */}
      <HeaderAdmin />

      {/* === EN-TÊTE === */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0', color: '#1a1a1a' }}>🏷️ BrandFusion</h1>
        <p style={{ fontSize: '1.3rem', color: '#555', marginTop: '0.5rem' }}>Cloud Kitchen multi‑marques · Popayán</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <span style={{ background: '#e8f4fd', padding: '0.3rem 1rem', borderRadius: '20px' }}>🥪 Sandwichs</span>
          <span style={{ background: '#fce4ec', padding: '0.3rem 1rem', borderRadius: '20px' }}>🥞 Crêperie</span>
          <span style={{ background: '#fff3e0', padding: '0.3rem 1rem', borderRadius: '20px' }}>🍔 Fast Food</span>
          <span style={{ background: '#e8f5e9', padding: '0.3rem 1rem', borderRadius: '20px' }}>🍕 Pizza</span>
          <span style={{ background: '#fce4ec', padding: '0.3rem 1rem', borderRadius: '20px' }}>🍗 Pollo</span>
          <span style={{ background: '#f3e5f5', padding: '0.3rem 1rem', borderRadius: '20px' }}>🍲 Tradition</span>
          <span style={{ background: '#e0f2f1', padding: '0.3rem 1rem', borderRadius: '20px' }}>🛒 Épicerie</span>
        </div>
      </header>

      {/* === 1. CONCEPT === */}
      <section style={{ marginBottom: '3rem', background: '#f9f9f9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>
          <span>🎯</span> Concept — Cloud Kitchen BrandFusion
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Créer une cuisine centralisée à <strong>Popayán</strong>, proposant plusieurs marques (Sandwich, Crêperie, Fast Food, Pizza, Poulet, Cuisine familiale, Épicerie) en fonction du marché. Vente exclusivement en <strong>Take away</strong> ou <strong>livraison</strong>.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          <strong>Principe :</strong> un seul espace de production centralisé, desservant plusieurs marques et canaux de vente. La production est <strong>mutualisée</strong> : un même ingrédient (poulet, farine, légumes) alimente plusieurs gammes, optimisant l'utilisation des matières premières et réduisant les pertes.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem', background: '#fff', padding: '1.5rem', borderRadius: '8px' }}>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>🔑 Partenariats</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>La Cloud Kitchen propose à des points de vente existants (boulangeries, épiceries, cafétérias) d'intégrer ses produits.</p>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>🤝 Gagnant‑gagnant</h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li><strong>Boulangerie :</strong> son pain, son emplacement → élargit son offre sans investissement.</li>
              <li><strong>Cloud Kitchen :</strong> ses recettes, sa production → accède à une clientèle physique sans ouvrir de point de vente.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === 1.1 LE PROBLÈME DE L'APPELATION DARK KITCHEN === */}
      <section style={{ marginBottom: '3rem', background: '#fff3e0', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #ff9800' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>⚠️</span> 1.1 Le problème de l’appellation « Dark Kitchen »
        </h2>
        <p>Le terme <strong>Dark Kitchen</strong> (cuisine fantôme) présente des inconvénients :</p>
        <ul>
          <li><strong>Connotation négative</strong> — "Dark" évoque l'opacité, le temporaire, le non‑conforme.</li>
          <li><strong>Image de marque</strong> — peu adapté à une communication institutionnelle ou à des partenariats locaux.</li>
          <li><strong>Perception client</strong> — associé à une production standardisée de moindre qualité.</li>
        </ul>
        <p style={{ marginTop: '1rem' }}><strong>Pourquoi « Cloud Kitchen » est préférable :</strong></p>
        <ol>
          <li>Référence au <strong>cloud computing</strong> : flexibilité, scalabilité, modernité.</li>
          <li><strong>Neutralité géographique</strong> : production centralisée, distribution distribuée (comme un nuage).</li>
          <li><strong>Adaptée au partenariat</strong> — une boulangerie accepte plus facilement de collaborer avec une "Cloud Kitchen" qu'avec une "Dark Kitchen".</li>
        </ol>
      </section>

      {/* === 1.2 NOM ALTERNATIF & RECOMMANDATION === */}
      <section style={{ marginBottom: '3rem', background: '#e8f5e9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>💡</span> 1.2 Nom alternatif – Recommandation
        </h2>
        <p><strong>Recommandation objective :</strong> <span style={{ background: '#2e7d32', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>BrandFusion</span> est le nom le plus cohérent avec le modèle économique (une cuisine, plusieurs marques). Court, international, sous‑titrable en espagnol (« <em>Fusión de Marcas Gastronómicas</em> »).</p>
        <p><strong>Alternatives :</strong> HubGourmet, NexusFood, MiamMianXXX, Taste Together, Shared Flavors, Shared Tastes, Flash Saveurs, SnapKitchen.</p>
        <p><em>SnapKitchen</em> est une alternative valable si l'orientation est résolument orientée "rapidité / street food".</p>
      </section>

      {/* === 2. NOM DU PROJET === */}
      <section style={{ marginBottom: '3rem', background: '#e3f2fd', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📌</span> 2. Nom du projet
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>BrandFusion</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>HubGourmet</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>NexusFood</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>MiamMianXXX</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Taste Together</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Shared Flavors</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Flash Saveurs</span>
          <span style={{ background: '#fff', padding: '0.5rem 1.2rem', borderRadius: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>SnapKitchen</span>
        </div>
        <p style={{ marginTop: '1rem' }}><span style={{ fontWeight: 'bold' }}>✅ Retenu :</span> <span style={{ background: '#1976d2', color: '#fff', padding: '0.2rem 1rem', borderRadius: '20px' }}>BrandFusion</span></p>
      </section>

      {/* === 3. NOM DES MARQUES === */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>
          <span>🏷️</span> 3. Nom des marques
        </h2>

        {/* Liste des types de cuisine (raccourci) */}
        <details style={{ marginBottom: '1.5rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>🌍 Voir toutes les possibilités (31 types)</summary>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '0.5rem', marginTop: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
            <span>🍔 Burgers gourmets</span>
            <span>🍕 Pizza</span>
            <span>🍣 Sushis & Poké bowls</span>
            <span>🥢 Cuisine asiatique</span>
            <span>🌮 Cuisine mexicaine</span>
            <span>🍝 Cuisine italienne</span>
            <span>🥙 Cuisine libanaise</span>
            <span>🍛 Cuisine indienne</span>
            <span>🍜 Cuisine japonaise</span>
            <span>🇰🇷 Cuisine coréenne</span>
            <span>🥩 Cuisine turque</span>
            <span>🇬🇷 Cuisine grecque</span>
            <span>🥗 Healthy & Fit</span>
            <span>🌱 Vegan & Végétarien</span>
            <span>🚫 Sans gluten</span>
            <span>🌿 Bio & locale</span>
            <span>🌭 Street Food</span>
            <span>🥞 Brunch</span>
            <span>🍱 Cuisine fusion</span>
            <span>🥘 Méditerranéenne</span>
            <span>🍰 Pâtisseries</span>
            <span>🍦 Glaces & sorbets</span>
            <span>🍫 Chocolaterie</span>
            <span>🥖 Boulangerie</span>
            <span>☕ Café & boissons chaudes</span>
            <span>🍹 Cocktails & mocktails</span>
            <span>🧃 Jus & smoothies</span>
            <span>👩‍🍳 Ateliers culinaires</span>
            <span>🧺 Traiteurs & plateaux</span>
            <span>📦 Meal Prep</span>
            <span>🎁 Coffrets cadeaux</span>
          </div>
        </details>

        {/* Présentation des 7 marques retenues */}
        <h3 style={{ marginTop: '2rem' }}>Les 7 marques retenues</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem' }}>
          {/* Marque 1 : Sandwichs */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🥪</div>
            <h4 style={{ margin: '0.3rem 0' }}>Les Sandwichs</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Idéal pour le partenariat Boulangerie</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Sandwichs gourmets, focaccias, Healthy & Fit avec pain des boulangeries partenaires.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : EntrePains · Crostini & Co · Sandwich Lab</p>
          </div>
          {/* Marque 2 : Crêperie */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🥞</div>
            <h4 style={{ margin: '0.3rem 0' }}>La Crêperie</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Desserts & Brunch</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Crêpes salées/sucrées, gaufres, format cône pour le "el algo" colombien.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : Crêpe Station · La Crêperie Virtuelle · Sweet Loops</p>
          </div>
          {/* Marque 3 : Fast Food */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🍔</div>
            <h4 style={{ margin: '0.3rem 0' }}>Fast Food / Street Food</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Volume & Soirée</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Burgers gourmets, arepas, empanadas revisitées, sauces signature.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : SnapBurger · Studio Burger · Fuego Street Food</p>
          </div>
          {/* Marque 4 : Pizza (fusionnée) */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🍕</div>
            <h4 style={{ margin: '0.3rem 0' }}>Pizza internationale</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Rentable</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Positionnement rentable avec cuisson optimisée et ingrédients mutualisés.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : Slice & Go · Pizza Lab · Al Taglio Popayán</p>
          </div>
          {/* Marque 5 : Pollo Mundo */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🍗</div>
            <h4 style={{ margin: '0.3rem 0' }}>Pollo Mundo</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Spécialiste du poulet</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Poulet rôti, frit, tenders, box familiales. Alternative généreuse et rentable.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : Pollo Mundo · Crispy Chicken · Alitas & Co · El Pollón</p>
          </div>
          {/* Marque 6 : Sazón de la Abuela */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🍲</div>
            <h4 style={{ margin: '0.3rem 0' }}>Sazón de la Abuela</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Cuisine traditionnelle familiale</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Plats mijotés, soupes, ragoûts (sancocho, ajiaco, bandeja paisa, osso buco, curry…).</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : Sazón de la Abuela · Olla Familiar · Comida de Casa · Tradición & Sazón</p>
          </div>
          {/* Marque 7 : Corner Antojo (épicerie) */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.2rem', background: '#fff' }}>
            <div style={{ fontSize: '2rem' }}>🛒</div>
            <h4 style={{ margin: '0.3rem 0' }}>Corner Antojo</h4>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0', color: '#555' }}><strong>Épicerie / Dépanneur</strong></p>
            <p style={{ fontSize: '0.9rem', margin: '0.3rem 0' }}>Produits secs, boissons, chips, bières artisanales, sauces signatures en pot.</p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Noms : Corner Antojo · El Depa · Snack Box</p>
          </div>
        </div>
      </section>

      {/* === 5. ANALYSE STRATÉGIQUE === */}
      <section style={{ marginBottom: '3rem', background: '#f3e5f5', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🧠</span> 5. Analyse stratégique du modèle multi‑marques
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
          <thead style={{ background: '#7b1fa2', color: '#fff' }}>
            <tr>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Avantage</th>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Explication</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>⏰ Couverture temporelle</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Chaque marque couvre un moment de la journée (petit‑déjeuner, déjeuner, goûter, dîner). La production tourne à plein régime sur une plage horaire élargie.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>🔄 Diversification des risques</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Si une marque ralentit, les autres segments compensent.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>🧪 Test de marché</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Une marque peut être lancée, testée et ajustée sans impact sur les autres.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>📦 Économies d'échelle</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Achats groupés, personnel polyvalent, équipements partagés réduisent les coûts unitaires.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>📊 Données clients</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Le système central collecte des données pour optimiser menus et promotions.</td></tr>
            <tr><td style={{ padding: '0.8rem' }}>🌱 Préparation à la Phase 2</td><td style={{ padding: '0.8rem' }}>Les volumes de consommation détermineront ce que Hacienda Esmeralda devra produire.</td></tr>
          </tbody>
        </table>
      </section>

      {/* === 6. POSITION CONCURRENTIELLE === */}
      <section style={{ marginBottom: '3rem', background: '#e0f7fa', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📍</span> 6. Position concurrentielle à Popayán
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
          <thead style={{ background: '#00695c', color: '#fff' }}>
            <tr><th style={{ padding: '0.8rem', textAlign: 'left' }}>Élément</th><th style={{ padding: '0.8rem', textAlign: 'left' }}>Réponse apportée</th></tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>⭐ Qualité constante</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Processus standardisé, contrôle qualité centralisé.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>⏱️ Délais réduits</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Cuisine optimisée pour le Take Away, pas de gestion de salle.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>🍽️ Choix</td><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Plusieurs marques, plusieurs styles de cuisine en un seul lieu.</td></tr>
            <tr><td style={{ padding: '0.8rem' }}>🤝 Partenariats</td><td style={{ padding: '0.8rem' }}>Proposition aux boulangeries et épiceries de compléter leur offre sans investissement.</td></tr>
          </tbody>
        </table>
      </section>

      {/* === 7. SYNTHÈSE — LIEN AVEC HACIENDA ESMERALDA === */}
      <section style={{ marginBottom: '3rem', background: '#e8f5e9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🔗</span> 7. Synthèse — Lien avec Hacienda Esmeralda
        </h2>
        <p>La Cloud Kitchen et Hacienda Esmeralda forment un <strong>continuum économique</strong> :</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ flex: '1 1 250px', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>Phase 1 (0‑24 mois)</h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Production et vente de repas</li>
              <li>Création de la marque, cash‑flow</li>
              <li>Collecte de données clients</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}><strong>Hacienda Esmeralda :</strong> cultive herbes, salades, légumes à cycle court pour approvisionner la cuisine.</p>
          </div>
          <div style={{ flex: '1 1 250px', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>Phase 2 (24‑48 mois)</h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Poursuite de l'activité</li>
              <li>Intégration progressive des produits agricoles comme fournisseurs internes</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}><strong>Hacienda Esmeralda :</strong> production dimensionnée sur les volumes réels de la Cloud Kitchen.</p>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>La Cloud Kitchen ne remplace pas Hacienda Esmeralda. Elle la précède, la finance et la sécurise.</p>
      </section>

      {/* === 8. CONCLUSION === */}
      <section style={{ marginBottom: '3rem', background: '#fff8e1', padding: '2rem', borderRadius: '12px', border: '2px solid #ffc107' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🏆</span> 8. Conclusion
        </h2>
        <p>Le modèle <strong>Cloud Kitchen multi‑marques</strong>, sous le nom <strong>BrandFusion</strong>, répond à plusieurs impératifs objectifs :</p>
        <ol style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>💰 <strong>Rentabilité</strong> : rotation du capital rapide, marges de transformation élevées.</li>
          <li>🔁 <strong>Adaptabilité</strong> : plusieurs marques pour toucher plusieurs segments et couvrir plusieurs moments de la journée.</li>
          <li>🛡️ <strong>Partage du risque</strong> : diversification des gammes et des canaux.</li>
          <li>👩‍🍳 <strong>Création d'emplois</strong> : postes variés (cuisine, logistique, marketing, gestion).</li>
          <li>📊 <strong>Préparation du projet agricole</strong> : collecte de données pour dimensionner la future production d'Hacienda Esmeralda.</li>
          <li>✅ <strong>Éligibilité SENA</strong> : coche les cases innovation, transformation, digital, emploi local.</li>
        </ol>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Le projet est présenté comme une séquence chronologique cohérente, où chaque étape prépare et sécurise la suivante.</p>
        <p>Le projet et ses composants sont validés par une étude de terrain.</p>
      </section>

      {/* === FOOTER === */}
      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#888', borderTop: '1px solid #eaeaea', paddingTop: '1.5rem' }}>
        <p>BrandFusion · Cloud Kitchen · Popayán · 2026</p>
        <p style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          <span>🥪 Sandwich</span> <span>🥞 Crêperie</span> <span>🍔 Fast Food</span> <span>🍕 Pizza</span> <span>🍗 Pollo</span> <span>🍲 Tradition</span> <span>🛒 Épicerie</span>
        </p>
      </footer>
    </div>
  );
}

export default NameHistoryPage;