// app/admin/techniques/page.tsx
// Page listant les techniques de production culinaire

import HeaderAdmin from '@/components/admin/HeaderAdmin';
import React from 'react';

function TechniquesPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <HeaderAdmin />

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', color: '#1a1a1a' }}>🧪 Techniques de production</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Maîtrisez les gestes professionnels et diversifiez votre offre
        </p>
      </header>

      {/* ============================================================ */}
      {/* 1. CONSERVATION */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #2e7d32', paddingBottom: '0.5rem', color: '#2e7d32' }}>
          🧊 Conservation
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <TechniqueCard
            title="Réfrigération / Congélation"
            description="Ralentissement des micro-organismes par le froid. Idéal pour viandes, légumes, plats cuisinés."
            example="Stockage de vos soupes, sauces, viandes marinées."
            videoUrl="https://www.youtube.com/embed/3oHf4mTqKkI?si=ABCD" // Lien fictif – remplacez par une vraie vidéo
          />
          <TechniqueCard
            title="Stérilisation / Pasteurisation"
            description="Destruction des bactéries par la chaleur. Pour bocaux, sauces, compotes."
            example="Conserves de sancocho, de soupe de légumes, de sauces tomate."
            videoUrl="https://www.youtube.com/embed/xYz123?si=EFGH"
          />
          <TechniqueCard
            title="Salaison / Saumurage"
            description="Conservation par le sel. Utilisée pour viandes, poissons, légumes."
            example="Préparation de jambons, de poissons fumés, de cornichons."
            videoUrl="https://www.youtube.com/embed/abc123?si=IJKL"
          />
          <TechniqueCard
            title="Marinade & Confisage"
            description="Immersion dans un liquide aromatique (huile, vinaigre) ou dans le sucre."
            example="Anchois marinés à l'huile d'olive, fruits confits pour pâtisserie."
            videoUrl="https://www.youtube.com/embed/def456?si=MNOP"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CUISSON */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #c62828', paddingBottom: '0.5rem', color: '#c62828' }}>
          🔥 Cuisson
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <TechniqueCard
            title="Rôtissage"
            description="Cuisson à la chaleur sèche, au four ou à la broche."
            example="Poulet rôti, rôti de bœuf, légumes rôtis."
            videoUrl="https://www.youtube.com/embed/ghi789?si=QRST"
          />
          <TechniqueCard
            title="Poêlage & Sauté"
            description="Cuisson rapide à la poêle ou à feu vif en remuant."
            example="Steak, champignons sautés, légumes sautés."
            videoUrl="https://www.youtube.com/embed/jkl012?si=UVWX"
          />
          <TechniqueCard
            title="Grillade & Plancha"
            description="Cuisson sur grille ou plaque, contact direct avec la chaleur."
            example="Viandes grillées, poissons, légumes plancha."
            videoUrl="https://www.youtube.com/embed/mno345?si=YZAB"
          />
          <TechniqueCard
            title="Friture"
            description="Immersion dans un corps gras chaud."
            example="Frites, beignets, nuggets, churros."
            videoUrl="https://www.youtube.com/embed/pqr678?si=CDEF"
          />
          <TechniqueCard
            title="Braisage & Mijotage"
            description="Cuisson mixte : saisie puis cuisson longue dans un liquide."
            example="Bœuf bourguignon, osso buco, ragoûts."
            videoUrl="https://www.youtube.com/embed/stu901?si=GHIJ"
          />
          <TechniqueCard
            title="Cuisson sous vide"
            description="Cuisson à basse température dans un sachet hermétique."
            example="Filets de poulet, poissons, légumes tendres."
            videoUrl="https://www.youtube.com/embed/vwx234?si=KLMN"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TRANSFORMATION / PRÉPARATION */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #1565c0', paddingBottom: '0.5rem', color: '#1565c0' }}>
          🔪 Transformation & Préparation
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <TechniqueCard
            title="Taillage (brunoise, julienne, etc.)"
            description="Coupes régulières pour une cuisson homogène et une présentation soignée."
            example="Légumes pour soupes, salades, garnitures."
            videoUrl="https://www.youtube.com/embed/yzx567?si=OPQR"
          />
          <TechniqueCard
            title="Hachage & Mixage"
            description="Réduction en morceaux fins ou en purée."
            example="Viande hachée pour burgers, purées, sauces."
            videoUrl="https://www.youtube.com/embed/abc890?si=STUV"
          />
          <TechniqueCard
            title="Pétrissage & Tourage"
            description="Travail des pâtes pour les rendre élastiques ou feuilletées."
            example="Pains, viennoiseries, pâtes feuilletées."
            videoUrl="https://www.youtube.com/embed/def123?si=WXYZ"
          />
          <TechniqueCard
            title="Émulsion"
            description="Mélange stable de deux liquides non miscibles."
            example="Mayonnaise, vinaigrettes, sauces émulsionnées."
            videoUrl="https://www.youtube.com/embed/ghi456?si=ABCD"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CONSERVATION SPÉCIFIQUE */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #f57c00', paddingBottom: '0.5rem', color: '#f57c00' }}>
          🌿 Conservation spécifique (Fumage, Déshydratation, Fermentation)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <TechniqueCard
            title="Fumage"
            description="Exposition à la fumée pour aromatiser et conserver."
            example="Poissons, viandes, fromages, sauces fumées."
            videoUrl="https://www.youtube.com/embed/jkl789?si=EFGH"
          />
          <TechniqueCard
            title="Déshydratation"
            description="Élimination de l'eau pour une conservation longue."
            example="Fruits, légumes, herbes, viandes séchées."
            videoUrl="https://www.youtube.com/embed/mno012?si=IJKL"
          />
          <TechniqueCard
            title="Fermentation"
            description="Transformation par des micro-organismes (bactéries, levures)."
            example="Choucroute, cornichons, pain au levain, boissons fermentées."
            videoUrl="https://www.youtube.com/embed/pqr345?si=MNOP"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. AUTRES TECHNIQUES */}
      {/* ============================================================ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '3px solid #6a1b9a', paddingBottom: '0.5rem', color: '#6a1b9a' }}>
          🧪 Autres techniques
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <TechniqueCard
            title="Extraction de jus et huiles"
            description="Pressage ou distillation pour obtenir des jus et huiles essentielles."
            example="Jus de fruits, huiles aromatisées."
            videoUrl="https://www.youtube.com/embed/stu678?si=QRST"
          />
          <TechniqueCard
            title="Torréfaction"
            description="Cuisson à sec de graines ou de fruits."
            example="Café, cacao, épices grillées."
            videoUrl="https://www.youtube.com/embed/vwx901?si=UVWX"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* Conclusion */}
      {/* ============================================================ */}
      <section style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>💡</span> Application dans votre atelier
        </h2>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li><strong>Diversification :</strong> proposez des produits uniques (fumés, fermentés, déshydratés) qui sortent de l'ordinaire.</li>
          <li><strong>Réduction du gaspillage :</strong> transformez les invendus (fruits trop mûrs, légumes abîmés) en conserves, confitures, purées.</li>
          <li><strong>Augmentation de la valeur ajoutée :</strong> une sauce maison ou un jambon fumé se vend plus cher qu'un produit brut.</li>
          <li><strong>Préparation des plats en avance :</strong> les techniques de conservation vous permettent de préparer des plats et de les stocker longtemps, facilitant ainsi la gestion des pics de production.</li>
          <li><strong>Marketing :</strong> mettez en avant l'artisanat et le savoir-faire auprès de vos clients.</li>
        </ul>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Ces techniques sont au cœur de votre projet BrandFusion – elles donnent à vos marques une identité forte et authentique.
        </p>
      </section>
    </div>
  );
}

// Composant réutilisable pour chaque fiche technique
function TechniqueCard({
  title,
  description,
  example,
  videoUrl,
}: {
  title: string;
  description: string;
  example: string;
  videoUrl?: string;
}) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '1.2rem',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s',
    }}>
      <h4 style={{ margin: '0 0 0.4rem 0' }}>{title}</h4>
      <p style={{ fontSize: '0.95rem', margin: '0.3rem 0', color: '#333' }}>{description}</p>
      <p style={{ fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
        <strong>Exemple :</strong> {example}
      </p>
      {videoUrl && (
        <div style={{ marginTop: '0.8rem' }}>
          <iframe
            width="100%"
            height="180"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          />
          <p style={{ fontSize: '0.8rem', color: '#888', margin: '0.3rem 0 0 0' }}>
            🎥 Vidéo technique en français
          </p>
        </div>
      )}
    </div>
  );
}

export default TechniquesPage;