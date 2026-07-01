// app/admin/strategie/page.tsx

// type : page
/* role : présentation de la stratégie globale du projet BrandFusion */
/* fonctionnement : affiche les axes stratégiques du modèle multi‑marques */
// imports []
// exports []
// useby []
// noteIA merci de ne pas supprimer les commentaires ci‑dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

import HeaderAdmin from '@/components/admin/HeaderAdmin';
import React from 'react';

function StrategiePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <HeaderAdmin />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', color: '#1a1a1a' }}>📈 Stratégie BrandFusion</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Vision, positionnement et feuille de route de la Cloud Kitchen</p>
      </header>

      {/* ============================================================ */}
      {/* 1. Résumé exécutif */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#f9f9f9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>🎯 Résumé exécutif</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          <strong>BrandFusion</strong> est une Cloud Kitchen multi‑marques implantée à Popayán (Colombie). 
          Elle propose 7 marques distinctes couvrant l’ensemble des moments de consommation (petit‑déjeuner, déjeuner, goûter, dîner, dépannage). 
          La production est mutualisée, les achats sont groupés, et le modèle s’appuie sur des partenariats locaux (boulangeries, épiceries) pour élargir son réseau de distribution sans investissement lourd.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Le projet est conçu comme une <strong>séquence chronologique</strong> : la Cloud Kitchen génère du cash‑flow et collecte des données de consommation, qui serviront à dimensionner la future production agricole d’<strong>Hacienda Esmeralda</strong> (Phase 2).
        </p>
      </section>

      {/* ============================================================ */}
      {/* 2. Modèle économique */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #1976d2', paddingBottom: '0.5rem', color: '#1976d2' }}>🧩 Modèle économique</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <Card title="Production mutualisée" icon="🏭">
            Tous les ingrédients (poulet, farine, légumes) servent plusieurs marques. Réduction des pertes, optimisation des stocks.
          </Card>
          <Card title="7 marques complémentaires" icon="🧩">
            Sandwichs, Crêperie, Fast Food, Pizza, Poulet, Cuisine familiale, Épicerie – couverture de toutes les tranches horaires.
          </Card>
          <Card title="Vente uniquement Take Away / Livraison" icon="🛵">
            Pas de salle, donc charges fixes réduites, équipe de production optimisée pour le flux continu.
          </Card>
          <Card title="Partenariats locaux" icon="🤝">
            Boulangeries, épiceries, cafétérias intègrent les produits BrandFusion dans leur offre sans investissement en cuisine.
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. Proposition de valeur */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#e3f2fd', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #1565c0', paddingBottom: '0.5rem', color: '#1565c0' }}>💎 Proposition de valeur</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: '1rem' }}>
          <ValueItem emoji="⭐" text="Qualité constante – processus standardisé et contrôle centralisé" />
          <ValueItem emoji="⚡" text="Rapidité – pas de salle, cuisine optimisée pour le Take Away" />
          <ValueItem emoji="🍽️" text="Choix – 7 univers culinaires en un seul point de commande" />
          <ValueItem emoji="🤝" text="Partenariats – extension de réseau sans investissement" />
          <ValueItem emoji="📊" text="Données clients – optimisation continue des menus" />
          <ValueItem emoji="🌱" text="Circularité – lien avec Hacienda Esmeralda pour une production locale" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. Cibles et segmentation */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #f57c00', paddingBottom: '0.5rem', color: '#f57c00' }}>👥 Cibles et segmentation</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <thead style={{ background: '#f57c00', color: '#fff' }}>
            <tr>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Segment</th>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Marques associées</th>
              <th style={{ padding: '0.8rem', textAlign: 'left' }}>Moment de consommation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Particuliers / familles</td><td>Pizza, Pollo, Sazón de la Abuela</td><td>Déjeuner / dîner</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Professionnels / bureaux</td><td>Sandwichs, Fast Food</td><td>Pause midi</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Étudiants / jeunes</td><td>Crêperie, Fast Food, Corner Antojo</td><td>Goûter / soirée</td></tr>
            <tr><td style={{ padding: '0.8rem' }}>Touristes / visiteurs</td><td>Toutes les marques</td><td>Variable</td></tr>
          </tbody>
        </table>
      </section>

      {/* ============================================================ */}
      {/* 5. Analyse concurrentielle */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#fce4ec', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #c62828', paddingBottom: '0.5rem', color: '#c62828' }}>📍 Position concurrentielle à Popayán</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
          <thead style={{ background: '#c62828', color: '#fff' }}>
            <tr><th style={{ padding: '0.8rem', textAlign: 'left' }}>Élément</th><th style={{ padding: '0.8rem', textAlign: 'left' }}>Réponse BrandFusion</th></tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Qualité</td><td>Processus standardisé, contrôle qualité centralisé.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Délais de livraison</td><td>Cuisine optimisée pour le Take Away, pas de gestion de salle.</td></tr>
            <tr><td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Diversité de l’offre</td><td>7 marques, 7 univers culinaires en un seul lieu.</td></tr>
            <tr><td style={{ padding: '0.8rem' }}>Partenariats</td><td>Extension du réseau via les boulangeries et épiceries sans investissement.</td></tr>
          </tbody>
        </table>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          L’offre de livraison à Popayán est aujourd’hui fragmentée. BrandFusion apporte une réponse unifiée, de qualité et économique.
        </p>
      </section>

      {/* ============================================================ */}
      {/* 6. Stratégie opérationnelle */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>🛠️ Stratégie opérationnelle</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <Card title="Production centralisée" icon="🏭">Toutes les préparations sont réalisées dans un atelier unique, permettant une meilleure maîtrise des coûts et de la qualité.</Card>
          <Card title="Logistique optimisée" icon="📦">Les commandes sont regroupées par tournée pour réduire les frais de livraison et améliorer les délais.</Card>
          <Card title="Équipe polyvalente" icon="👨‍🍳">Les cuisiniers sont formés à plusieurs techniques (cuisson, pâtisserie, découpe) pour assurer la flexibilité.</Card>
          <Card title="Outils digitaux" icon="📱">Application de commande, suivi en temps réel, collecte de données pour l’amélioration continue.</Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. Stratégie de partenariat */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#e8f5e9', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>🤝 Stratégie de partenariat</h2>
        <p>BrandFusion propose à des points de vente existants (boulangeries, épiceries, cafétérias) d’intégrer ses produits dans leur offre.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '8px', overflow: 'hidden', marginTop: '1rem' }}>
          <thead style={{ background: '#2e7d32', color: '#fff' }}>
            <tr><th style={{ padding: '0.8rem', textAlign: 'left' }}>Partenaire</th><th style={{ padding: '0.8rem', textAlign: 'left' }}>Apport</th><th style={{ padding: '0.8rem', textAlign: 'left' }}>Bénéfice</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Boulangerie</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Pain, emplacement, clientèle</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #eee' }}>Élargit son offre sans investissement ; capte une nouvelle clientèle.</td>
            </tr>
            <tr>
              <td style={{ padding: '0.8rem' }}>Cloud Kitchen</td>
              <td style={{ padding: '0.8rem' }}>Recettes, production, logistique</td>
              <td style={{ padding: '0.8rem' }}>Accès à une clientèle physique sans ouvrir de point de vente ; réduction des coûts d’acquisition.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ============================================================ */}
      {/* 8. Feuille de route (Roadmap) */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #6a1b9a', paddingBottom: '0.5rem', color: '#6a1b9a' }}>📅 Feuille de route</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ flex: '1 1 300px', background: '#f3e5f5', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Phase 1 (0‑24 mois)</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Lancement de la Cloud Kitchen</li>
              <li>Déploiement des 7 marques</li>
              <li>Mise en place des partenariats (boulangeries, épiceries)</li>
              <li>Génération de cash‑flow</li>
              <li>Collecte des données de consommation</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              <strong>Hacienda Esmeralda :</strong> culture d’herbes, salades, légumes courts pour approvisionner la cuisine.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', background: '#e0f7fa', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Phase 2 (24‑48 mois)</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Poursuite de l’activité Cloud Kitchen</li>
              <li>Intégration progressive des produits d’Hacienda Esmeralda</li>
              <li>Optimisation des recettes avec les ingrédients locaux</li>
              <li>Lancement d’une gamme “terroir”</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              <strong>Hacienda Esmeralda :</strong> production dimensionnée sur les volumes réels de la Cloud Kitchen.
            </p>
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
          La Cloud Kitchen ne remplace pas Hacienda Esmeralda. Elle la précède, la finance et la sécurise.
        </p>
      </section>

      {/* ============================================================ */}
      {/* 9. Indicateurs clés de performance (KPI) */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#fff8e1', padding: '2rem', borderRadius: '12px' }}>
        <h2 style={{ borderBottom: '2px solid #f9a825', paddingBottom: '0.5rem', color: '#f57f17' }}>📊 Indicateurs clés (KPI)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: '1rem' }}>
          <KPI label="Panier moyen" value="~12 000 COP" />
          <KPI label="Taux de transformation" value="> 15%" />
          <KPI label="Délai de livraison" value="< 30 min" />
          <KPI label="Rotation des stocks" value="5 jours" />
          <KPI label="Satisfaction client" value="4.8 / 5" />
          <KPI label="Part de marché (livraison)" value="Objectif 20 % à 24 mois" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. Conclusion */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem', background: '#fafafa', padding: '2rem', borderRadius: '12px', border: '2px solid #1a1a1a' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>🏆 Conclusion stratégique</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Le modèle <strong>BrandFusion</strong> repose sur une <strong>mutualisation des ressources</strong>, une <strong>diversification des risques</strong> et une <strong>intégration verticale progressive</strong> avec la production agricole.
        </p>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>✅ Rentabilité rapide grâce à la rotation élevée et aux marges de transformation.</li>
          <li>✅ Adaptabilité : 7 marques couvrent tous les moments de consommation.</li>
          <li>✅ Effet de levier des partenariats locaux.</li>
          <li>✅ Préparation solide pour la phase agricole (Hacienda Esmeralda).</li>
          <li>✅ Éligibilité aux dispositifs d’accompagnement (SENA, innovation, digital).</li>
        </ul>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          La stratégie est validée par une étude de terrain et une analyse concurrentielle approfondie.
        </p>
      </section>
    </div>
  );
}

// ============================================================
// Sous‑composants réutilisables
// ============================================================

function Card({ title, icon, children }: { title: string; icon?: string; children: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '1.2rem',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}>
      {icon && <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>{icon}</div>}
      <h4 style={{ margin: '0 0 0.5rem 0' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>{children}</p>
    </div>
  );
}

function ValueItem({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div style={{
      background: '#fff',
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
      <span style={{ fontSize: '0.95rem' }}>{text}</span>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f57f17' }}>{value}</div>
      <div style={{ fontSize: '0.85rem', color: '#555' }}>{label}</div>
    </div>
  );
}

export default StrategiePage;