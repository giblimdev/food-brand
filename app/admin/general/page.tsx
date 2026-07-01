// app/admin/general/page.tsx

// type : page
/* role : présentation du concept Cloud Kitchen multi‑marques (BrandFusion) */
/* fonctionnement : page vitrine pour partenaires, investisseurs, points de vente */
// imports []
// exports []
// useby []
// noteIA merci de ne pas supprimer les commentaires ci‑dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

import HeaderAdmin from '@/components/admin/HeaderAdmin';
import React from 'react';

function GeneralPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <HeaderAdmin />

      {/* ============================================================ */}
      {/* 1. TITRE ET ACCROCHE */}
      {/* ============================================================ */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', color: '#1a1a1a' }}>
          ☁️ Cloud Kitchen <span style={{ color: '#1976d2' }}>BrandFusion</span>
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#333', marginTop: '0.2rem' }}>
          L’innovation culinaire à portée de main
        </p>
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0.5rem auto' }}>
          Une solution clé en main pour les points de vente : des marques variées, une logistique optimisée, une rentabilité maximisée.
        </p>
        <div style={{ background: '#e3f2fd', padding: '1rem 2rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
            « Et si un seul espace pouvait héberger plusieurs restaurants, sans frais de structure supplémentaires, et livrer des plats de qualité directement à vos clients ? Bienvenue dans l’ère de la Cloud Kitchen multi‑marques. »
          </p>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. DÉFINITION – QU'EST-CE QU'UNE CLOUD KITCHEN ? */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#f5f5f5', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #1976d2', paddingBottom: '0.5rem', color: '#1976d2' }}>
          🧠 Qu’est‑ce qu’une Cloud Kitchen ?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🏭</div>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Espace 100% dédié à la préparation</p>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Aucune salle de restaurant – réduction des coûts (loyer, personnel, équipement).</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🧩</div>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Multi‑marques</p>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Plusieurs enseignes (burgers, sushis, pizzas, healthy…) partagent la même infrastructure.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🛵</div>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Livraison / Emporte</p>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Commande via apps ou directe, livrée au client final.</p>
          </div>
        </div>
        {/* Schéma simple */}
        <div style={{ marginTop: '1.5rem', background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', margin: '0' }}>
            [Espace partagé] → [Marque A / Marque B / Marque C] → [Livraison / Emporte] → [Client final]
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. NOTRE CONCEPT – OBJECTIFS */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>
          🎯 Notre Concept – Cloud Kitchen Multi‑Marques
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <Card title="✅ Pour les points de vente existants">
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Augmenter leur offre sans investir dans une nouvelle cuisine.</li>
              <li>Diversifier leur CA avec des marques complémentaires.</li>
              <li>Bénéficier d’une logistique optimisée (livraison centralisée, stocks).</li>
            </ul>
          </Card>
          <Card title="✅ Pour les marques partenaires">
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Accéder à de nouveaux points de vente sans frais d’installation.</li>
              <li>Tester un marché avant de s’implanter physiquement.</li>
              <li>Visibilité accrue via les canaux de livraison (Uber Eats, Deliveroo…).</li>
            </ul>
          </Card>
          <Card title="✅ Pour les clients">
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Plus de choix dans un même lieu.</li>
              <li>Délais de livraison réduits (cuisine proche des zones de livraison).</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FONCTIONNEMENT CONCRET */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#f3e5f5', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #6a1b9a', paddingBottom: '0.5rem', color: '#6a1b9a' }}>
          ⚙️ Fonctionnement Concret
        </h2>
        <ol style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>
            <strong>Partenariat avec des points de vente existants</strong> (restaurants, traiteurs, épiceries…) qui mettent à disposition leur espace ou leur cuisine en heures creuses.
          </li>
          <li>
            <strong>Intégration de plusieurs marques</strong> dans ce même espace : chaque marque a son propre menu, packaging et identité.
          </li>
          <li>
            <strong>Gestion centralisée</strong> : commandes via plateformes de livraison ou en direct, logistique optimisée (livreurs dédiés, emballages standardisés).
          </li>
          <li>
            <strong>Livraison ou emporte</strong> : les clients commandent via les apps ou directement auprès du point de vente.
          </li>
        </ol>
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Exemple :</strong> Un traiteur propose déjà ses plats. Avec notre solution, il peut ajouter :
          </p>
          <ul>
            <li>Une marque de poke bowls le midi.</li>
            <li>Une marque de burgers gourmets le soir.</li>
            <li>Une marque de desserts en fin de journée.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. AVANTAGES CLÉS (TABLEAU) */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '2px solid #f57c00', paddingBottom: '0.5rem', color: '#f57c00' }}>
          ✨ Avantages Clés
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <thead style={{ background: '#f57c00', color: '#fff' }}>
            <tr>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Pour les Points de Vente</th>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Pour les Marques</th>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Pour les Clients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Revenue supplémentaire</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Expansion sans risque</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Plus de choix</td>
            </tr>
            <tr>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Optimisation des coûts</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Test de marché facile</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Livraison rapide</td>
            </tr>
            <tr>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Flexibilité horaire</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Visibilité accrue</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>✔ Qualité constante</td>
            </tr>
            <tr>
              <td style={{ padding: '0.8rem' }}>✔ Pas d’investissement lourd</td>
              <td style={{ padding: '0.8rem' }}>✔ Logistique simplifiée</td>
              <td style={{ padding: '0.8rem' }}>✔ Prix compétitifs</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================================================ */}
      {/* 6. MODÈLE ÉCONOMIQUE */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#e8f5e9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>
          💰 Modèle Économique
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>📊</div>
            <h4 style={{ textAlign: 'center' }}>Commission sur les ventes</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>15‑20% sur les ventes générées par les marques partenaires.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>📋</div>
            <h4 style={{ textAlign: 'center' }}>Abonnement mensuel</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Accès à la plateforme, formation, support pour les points de vente.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🚚</div>
            <h4 style={{ textAlign: 'center' }}>Frais de logistique</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Gestion des livraisons, emballages, etc.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. POINTS DE VENTE CIBLES */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '2px solid #1565c0', paddingBottom: '0.5rem', color: '#1565c0' }}>
          📍 Points de Vente Cibles
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          <span style={{ background: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px' }}>Restaurants (heures creuses)</span>
          <span style={{ background: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px' }}>Traiteurs / Épiceries</span>
          <span style={{ background: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px' }}>Hôtels / Résidences</span>
          <span style={{ background: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px' }}>Espaces coworking</span>
          <span style={{ background: '#e3f2fd', padding: '0.5rem 1rem', borderRadius: '20px' }}>Zones commerciales</span>
        </div>
        <div style={{ marginTop: '1rem', background: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
          <p><strong>Critères de sélection :</strong></p>
          <ul>
            <li>Emplacement stratégique (zone de livraison dense).</li>
            <li>Cuisine aux normes et équipement adaptable.</li>
            <li>Volonté de diversifier leur activité.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. ÉTAPES DE MISE EN ŒUVRE */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#fff3e0', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #e65100', paddingBottom: '0.5rem', color: '#e65100' }}>
          📅 Étapes de Mise en Œuvre
        </h2>
        <ol style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li><strong>Identification des points de vente partenaires</strong> (prospections locales, partenariats avec des réseaux existants).</li>
          <li><strong>Sélection des marques</strong> (en fonction de la demande locale et de la complémentarité).</li>
          <li><strong>Installation et formation</strong> : mise en place des processus (commandes, hygiène), formation du personnel.</li>
          <li><strong>Lancement et promotion</strong> : communication digitale, offres de lancement.</li>
          <li><strong>Suivi et optimisation</strong> : analyse des ventes, ajustement des menus, feedback clients.</li>
        </ol>
      </section>

      {/* ============================================================ */}
      {/* 9. EXEMPLES DE SUCCÈS */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '2px solid #c62828', paddingBottom: '0.5rem', color: '#c62828' }}>
          🌟 Exemples de Succès
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🇺🇸</div>
            <h4 style={{ textAlign: 'center' }}>CloudKitchens (USA)</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Leader mondial, présent dans +20 pays.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🇬🇧</div>
            <h4 style={{ textAlign: 'center' }}>Dark Kitchens (UK)</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Partenariats avec Deliveroo et Uber Eats.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🇫🇷</div>
            <h4 style={{ textAlign: 'center' }}>Kitchens Hub (France)</h4>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>Déploiement dans les grandes villes (Paris, Lyon).</p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', background: '#fce4ec', padding: '1.5rem', borderRadius: '8px' }}>
          <p><strong>Chiffres clés (moyennes) :</strong></p>
          <ul>
            <li>Réduction des coûts de <strong>30 à 50%</strong> par rapport à un restaurant traditionnel.</li>
            <li>Augmentation du CA de <strong>20 à 40%</strong> pour les points de vente partenaires.</li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. POURQUOI NOUS CHOISIR ? */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#e3f2fd', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #0d47a1', paddingBottom: '0.5rem', color: '#0d47a1' }}>
          💎 Pourquoi Nous Choisir ?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '1rem' }}>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🧠</div>
            <h4 style={{ margin: '0.3rem 0' }}>Expertise</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Connaissance du marché et des attentes des clients.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🔄</div>
            <h4 style={{ margin: '0.3rem 0' }}>Flexibilité</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Adaptation aux besoins spécifiques de chaque point de vente.</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>📱</div>
            <h4 style={{ margin: '0.3rem 0' }}>Technologie</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Outils de gestion centralisée (commandes, stocks, livraisons).</p>
          </div>
          <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem' }}>🌐</div>
            <h4 style={{ margin: '0.3rem 0' }}>Réseau</h4>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Accès à un portfolio de marques testées et plébiscitées.</p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>
            « Nous ne créons pas juste des cuisines fantômes, nous réinventons l’expérience culinaire pour les points de vente, les marques et les clients. »
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. APPEL À L'ACTION */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#2e7d32', color: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ borderBottom: '2px solid #fff', paddingBottom: '0.5rem', display: 'inline-block' }}>
          🚀 Appel à l’Action
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>Pour les points de vente</p>
            <p style={{ fontSize: '1rem' }}>Rejoignez-nous et transformez vos heures creuses en opportunités de revenus !</p>
          </div>
          <div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>Pour les marques</p>
            <p style={{ fontSize: '1rem' }}>Développez votre présence sans les contraintes d’un restaurant physique.</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            <strong>Prochaine étape :</strong> Prise de contact pour une étude personnalisée. Démonstration de notre solution (visite d’une cuisine partenaire, présentation des outils).
          </p>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Sous‑composant Carte
// ============================================================

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '1.2rem',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}>
      <h4 style={{ margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>{title}</h4>
      <div style={{ fontSize: '0.95rem', color: '#333' }}>{children}</div>
    </div>
  );
}

export default GeneralPage;