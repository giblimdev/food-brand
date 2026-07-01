// equipementData.ts

/*
🧩 Structure des données
id : identifiant unique
order : ordre d'affichage
slug : non unique (généré à partir du nom)
name : nom de l'équipement
energie : tableau des énergies compatibles
category : catégorie principale
subCategory : sous-catégorie pour un filtrage plus fin
priority : 1 (indispensable), 2 (important), 3 (optionnel)
image : tableau d'URLs (vide par défaut)
role : fonctions principales
description : description détaillée
prix : fourchette de prix [min, max] en euros (estimation pour une dark kitchen)
*/

export interface Equipment {
  id: string;
  order: number;
  slug: string;
  name: string;
  energie: string[];
  category: string;
  subCategory: string;
  priority: number;
  image: string[];
  role: string[];
  description: string;
  prix: number[];
}

export const equipementData: Equipment[] = [
  // ==================== CATÉGORIE : CUISSON ====================
  // Sous-catégorie : Fours
  {
    id: "four-mixte-001",
    order: 1,
    slug: "four-mixte-professionnel",
    name: "Four mixte professionnel",
    energie: ["Électrique"],
    category: "Cuisson",
    subCategory: "Fours",
    priority: 1,
    image: ["/four-mixte-professionnel1.jpg"],
    role: ["Cuisson", "Rôtissage", "Cuisson vapeur"],
    description: "Polyvalent, permet de cuire, rôtir, braiser et cuire à la vapeur. Modèle compact à 2 ou 3 niveaux. Idéal pour une production moyenne.",
    prix: [5000, 12000] // Baissé de 8000-25000 à 5000-12000
  },
  {
    id: "four-pizza-002",
    order: 2,
    slug: "four-a-pizza-professionnel",
    name: "Four à pizza professionnel",
    energie: ["Électrique", "Gaz"],
    category: "Cuisson",
    subCategory: "Fours",
    priority: 2,
    image: ["/four-a-pizza-professionnel.avif"],
    role: ["Cuisson pizza", "Cuisson pain"],
    description: "Atteint jusqu'à 500°C. Version électrique pour précision ou gaz pour montée rapide. Modèle 2-3 pizzas.",
    prix: [2000, 6000] // Baissé de 3000-12000 à 2000-6000
  },
  // Sous-catégorie : Marmites et sauteuses
  {
    id: "marmite-003",
    order: 3,
    slug: "marmite-basculante",
    name: "Marmite basculante",
    energie: ["Gaz", "Électrique (induction)"],
    category: "Cuisson",
    subCategory: "Marmites et sauteuses",
    priority: 2, // Passé de 1 à 2 (peut être remplacée par des marmites fixes)
    image: [],
    role: ["Cuisson soupes", "Ragoûts", "Plats en sauce"],
    description: "Capacité de 30 à 100 litres. Version d'occasion recommandée pour démarrer. Le gaz est plus économique à l'achat.",
    prix: [2500, 8000] // Baissé de 5000-18000 à 2500-8000
  },
  {
    id: "sauteuse-004",
    order: 4,
    slug: "sauteuse-basculante",
    name: "Sauteuse basculante",
    energie: ["Gaz", "Électrique"],
    category: "Cuisson",
    subCategory: "Marmites et sauteuses",
    priority: 3, // Optionnel pour une dark kitchen
    image: [],
    role: ["Sauté", "Mijotage"],
    description: "Version compacte 50L. Permet de saisir et mijoter. Alternative : utiliser des grandes poêles.",
    prix: [2000, 6000] // Baissé de 4000-15000 à 2000-6000
  },
  // Sous-catégorie : Friture
  {
    id: "friteuse-005",
    order: 5,
    slug: "friteuse-professionnelle",
    name: "Friteuse professionnelle",
    energie: ["Électrique"], // Enlevé le triphasé pour une version standard
    category: "Cuisson",
    subCategory: "Friture",
    priority: 2, // Important mais pas indispensable pour toutes les marques
    image: ["/25b0d2dec070f14a6afc2caf24b8ae58703f27a1.jpg"],
    role: ["Friture", "Cuisson rapide"],
    description: "Modèle simple cuve avec filtration manuelle. Version électrique 220V. Idéal pour frites, beignets, churros.",
    prix: [1200, 4000] // Baissé de 6000-20000 à 1200-4000
  },
  // Sous-catégorie : Plaques et grills
  {
    id: "plaque-006",
    order: 6,
    slug: "plaque-de-cuisson-piano",
    name: "Plaque de cuisson Gaz (piano)",
    energie: ["Gaz"],
    category: "Cuisson",
    subCategory: "Plaques et grills",
    priority: 1,
    image: ["/plaque-de-cuisson-piano.jpg"],
    role: ["Saisie", "Sauté", "Cuisson à la poêle"],
    description: "Plaque 4 feux. Modèle d'occasion très répandu, parfait pour démarrer.",
    prix: [1500, 4500] // Baissé de 3000-12000 à 1500-4500
  },
  {
    id: "grill-007",
    order: 7,
    slug: "grill-plancha-professionnel",
    name: "Grill / Plancha professionnel",
    energie: ["Gaz", "Électrique"],
    category: "Cuisson",
    subCategory: "Plaques et grills",
    priority: 1,
    image: ["/grill-plancha-professionnel.webp"],
    role: ["Grillade", "Plancha"],
    description: "Plancha 60x40 cm. Gaz recommandé pour l'autonomie. Parfait pour viandes, poissons, légumes.",
    prix: [1200, 4000] // Baissé de 2500-9000 à 1200-4000
  },
  // Sous-catégorie : Spécialités
  {
    id: "robot-cuisson-008",
    order: 8,
    slug: "robot-de-cuisson-automatique",
    name: "Robot de cuisson automatique",
    energie: ["Électrique"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 3, // Optionnel (coût élevé, non prioritaire)
    image: [],
    role: ["Cuisson automatisée", "Brassage"],
    description: "Robot de cuisson compact (5L). Automatise cuisson et brassage. Bon pour les sauces et risottos.",
    prix: [3000, 8000] // Baissé de 10000-30000 à 3000-8000
  },
  {
    id: "cuiseur-riz-009",
    order: 9,
    slug: "cuiseur-a-riz-professionnel",
    name: "Cuiseur à riz professionnel",
    energie: ["Électrique"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 2,
    image: [],
    role: ["Cuisson riz"],
    description: "Capacité 10-20L. Cuiseur électrique simple, fiable et abordable.",
    prix: [800, 2500] // Baissé de 1500-6000 à 800-2500
  },
  {
    id: "crepiere-010",
    order: 10,
    slug: "crepiere-professionnelle",
    name: "Crêpière Gaz professionnelle",
    energie: ["Électrique", "Gaz"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 1,
    image: ["/crepiere-professionnelle.webp"],
    role: ["Crêpes", "Galettes"],
    description: "Surface 50 cm. Gaz recommandé pour monter vite. Modèle compact pour crêperie mobile.",
    prix: [600, 2000] // Baissé de 800-4000 à 600-2000
  },
  {
    id: "gaufrier-011",
    order: 11,
    slug: "gaufrier-professionnel",
    name: "Gaufrier professionnel",
    energie: ["Électrique"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 1,
    image: ["/gaufrier-professionnel.jpg"],
    role: ["Gaufres"],
    description: "Modèle 4 moules. Régulation électronique. Compact, idéal pour brunch.",
    prix: [600, 2000] // Baissé de 1200-5000 à 600-2000
  },
  {
    id: "machine-churros-012",
    order: 12,
    slug: "machine-a-churros",
    name: "Machine à churros",
    energie: ["Électrique"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 2, // Important mais peut être externalisé au début
    image: ["/Fourdeur de pâtisserie portable.jpg"],
    role: ["Churros"],
    description: "Doseur + friteuse intégrée. Version compacte (50 churros/heure). Parfait pour tester le marché.",
    prix: [1500, 4000] // Baissé de 3000-10000 à 1500-4000
  },
  {
    id: "barbecue-asado-013",
    order: 13,
    slug: "barbecue-asado-professionnel",
    name: "Barbecue / Asado professionnel",
    energie: ["Charbon", "Bois", "Gaz (optionnel)"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 3,
    image: [],
    role: ["Cuisson lente", "Grillade"],
    description: "Asado simple, fabriqué localement (Popayán). Coût très variable, peut être artisanal.",
    prix: [1500, 5000] // Baissé de 5000-20000 à 1500-5000
  },
  {
    id: "rotisserie-014",
    order: 14,
    slug: "rotisserie-professionnelle",
    name: "Rôtisserie Gaz professionnelle",
    energie: ["Électrique", "Gaz"],
    category: "Cuisson",
    subCategory: "Spécialités",
    priority: 1,
    image: ["/rotisserie-professionnelle.webp"],
    role: ["Rôtissage", "Cuisson à la broche"],
    description: "Rôtissoire 5 broches. Gaz pour économie d'énergie. Parfait pour Pollo Mundo.",
    prix: [2500, 8000] // Baissé de 4000-15000 à 2500-8000
  },

  // ==================== CATÉGORIE : PRÉPARATION ====================
  {
    id: "coupe-legumes-015",
    order: 15,
    slug: "coupe-legumes-professionnel",
    name: "Coupe-légumes professionnel",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Découpe",
    priority: 2, // Important mais peut se faire à la main au début
    image: [],
    role: ["Découpe", "Éminçage", "Râpage"],
    description: "Coupe-légumes compact (modèle 5 kg/min). Disques interchangeables. Entrée de gamme.",
    prix: [800, 2500] // Baissé de 2000-8000 à 800-2500
  },
  {
    id: "batteur-melangeur-016",
    order: 16,
    slug: "batteur-melangeur-professionnel",
    name: "Batteur-mélangeur professionnel",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Mixage",
    priority: 1,
    image: [],
    role: ["Mixage", "Pétrissage", "Émulsion"],
    description: "Batteur 20L. Version d'occasion très abordable. Incontournable pour pâtes, purées, mayonnaises.",
    prix: [1500, 4500] // Baissé de 3000-12000 à 1500-4500
  },
  {
    id: "hachoir-viande-017",
    order: 17,
    slug: "hachoir-a-viande-professionnel",
    name: "Hachoir à viande professionnel",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Hachage",
    priority: 1,
    image: ["/hachoir-a-viande-professionnel.webp"],
    role: ["Hachage viande"],
    description: "Hachoir 200 kg/h. Modèle compact, idéal pour burgers et charcuterie.",
    prix: [800, 2500] // Baissé de 1500-6000 à 800-2500
  },
  {
    id: "trancheur-018",
    order: 18,
    slug: "trancheur-professionnel",
    name: "Trancheur professionnel",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Découpe",
    priority: 2,
    image: [],
    role: ["Tranche", "Affinage"],
    description: "Trancheur compact, diamètre 25 cm. Idéal pour fromages et charcuteries.",
    prix: [800, 2500] // Baissé de 2500-8000 à 800-2500
  },
  {
    id: "mixeur-plongeant-019",
    order: 19,
    slug: "mixeur-plongeant-professionnel",
    name: "Mixeur plongeant professionnel",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Mixage",
    priority: 1,
    image: [],
    role: ["Mixage direct", "Purée"],
    description: "Mixeur plongeant 1200W, tige 40 cm. Version professionnelle entrée de gamme.",
    prix: [400, 1200] // Baissé de 800-3000 à 400-1200
  },
  {
    id: "marinade-020",
    order: 20,
    slug: "machine-a-marinader-et-attendrir",
    name: "Machine à marinader et attendrir la viande",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Autres",
    priority: 3,
    image: [],
    role: ["Attendrissage", "Marinade"],
    description: "Machine à aiguilles, simple, 10 aiguilles. Parfait pour viandes à burger.",
    prix: [1500, 5000] // Baissé de 4000-15000 à 1500-5000
  },
  {
    id: "eplucheuse-021",
    order: 21,
    slug: "eplucheuse-mecanique",
    name: "Éplucheuse mécanique",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Autres",
    priority: 2,
    image: [],
    role: ["Épluchage"],
    description: "Éplucheuse 5 kg, version simple. Entrée de gamme, fiable.",
    prix: [800, 2500] // Baissé de 2000-7000 à 800-2500
  },
  {
    id: "fourdeur-patisserie-portable-003",
    order: 22, // Décalé à 22 (avant c'était 21 en doublon)
    slug: "fourdeur-de-patisserie-portable",
    name: "Fourdeur de pâtisserie portable",
    energie: ["Électrique"],
    category: "Préparation",
    subCategory: "Autres",
    priority: 1,
    image: [],
    role: ["Fourrage", "Dosage", "Finition"],
    description: "Fourdeur manuel ou pneumatique. Buses interchangeables. Idéal pour choux, beignets, donuts.",
    prix: [200, 800] // Baissé de 100-200 à 200-800 (plage plus réaliste pour du pro)
  },

  // ==================== CATÉGORIE : RÉFRIGÉRATION ET CONSERVATION ====================
  {
    id: "chambre-positive-022",
    order: 23, // Décalé pour éviter doublon
    slug: "chambre-froide-positive",
    name: "Chambre froide positive",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Chambres froides",
    priority: 2, // Important mais on peut commencer par des armoires
    image: [],
    role: ["Stockage frais"],
    description: "Chambre froide 10m². Option d'occasion conseillée pour réduire l'investissement.",
    prix: [4000, 12000] // Baissé de 8000-25000 à 4000-12000
  },
  {
    id: "chambre-negative-023",
    order: 24, // Décalé
    slug: "chambre-froide-negative",
    name: "Chambre froide négative",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Chambres froides",
    priority: 1,
    image: [],
    role: ["Stockage surgelé"],
    description: "Chambre négative 8m². Congélateur compact. Peut être remplacée par des armoires négatives.",
    prix: [5000, 15000] // Baissé de 10000-30000 à 5000-15000
  },
  {
    id: "armoire-refrigeree-024",
    order: 25, // Décalé
    slug: "armoire-refrigeree-professionnelle",
    name: "Armoire réfrigérée professionnelle",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Armoires",
    priority: 1,
    image: [],
    role: ["Stockage intermédiaire"],
    description: "Armoire 800L, porte pleine. Modèle d'occasion très abordable et fiable.",
    prix: [1200, 3500] // Baissé de 2000-8000 à 1200-3500
  },
  {
    id: "table-refrigeree-025",
    order: 26, // Décalé
    slug: "table-de-travail-refrigeree",
    name: "Table de travail réfrigérée",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Armoires",
    priority: 2,
    image: [],
    role: ["Préparation sous froid"],
    description: "Table 150 cm avec zone réfrigérée. Pratique mais coûteuse. Peut être remplacée par une table simple + armoire.",
    prix: [1500, 4500] // Baissé de 3000-10000 à 1500-4500
  },
  {
    id: "saladette-refrigeree-026",
    order: 27, // Décalé
    slug: "saladette-refrigeree",
    name: "Saladette réfrigérée",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Armoires",
    priority: 2,
    image: [],
    role: ["Préparation sous froid", "Stockage des ingrédients frais"],
    description: "Saladette 6 bacs GN. Compacte, idéale pour légumes et fromages. Entrée de gamme.",
    prix: [1200, 3500] // Baissé de 2500-7000 à 1200-3500
  },
  {
    id: "cellule-refroidissement-026",
    order: 28, // Décalé (avant était 26 en conflit avec saladette)
    slug: "cellule-de-refroidissement-rapide",
    name: "Cellule de refroidissement rapide (blast chiller)",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Cellules",
    priority: 2, // Important mais coûteux
    image: [],
    role: ["Refroidissement rapide", "Surgélation"],
    description: "Cellule compacte, 6 bacs GN. Permet de refroidir les plats en moins de 90 min. Normes HACCP.",
    prix: [6000, 18000] // Baissé de 12000-35000 à 6000-18000
  },
  {
    id: "armoire-maturation-027",
    order: 29, // Décalé
    slug: "armoire-de-maturation",
    name: "Armoire de maturation",
    energie: ["Électrique"],
    category: "Réfrigération",
    subCategory: "Armoires",
    priority: 3,
    image: [],
    role: ["Maturation viande"],
    description: "Armoire maturation 100 kg. Équipement de niche. À envisager en phase 2.",
    prix: [2500, 8000] // Baissé de 5000-15000 à 2500-8000
  },

  // ==================== CATÉGORIE : CONSERVATION SPÉCIFIQUE ====================
  {
    id: "sterilisateur-028",
    order: 30,
    slug: "sterilisateur-autoclave",
    name: "Stérilisateur / Autoclave pour bocaux",
    energie: ["Électrique", "Gaz"],
    category: "Conservation spécifique",
    subCategory: "Stérilisation",
    priority: 2, // Important pour la gamme conserves
    image: ["/sterilisateur-autoclave.webp"],
    role: ["Stérilisation", "Pasteurisation"],
    description: "Autoclave 20L. Permet de stériliser des bocaux en petite série. Idéal pour sauces et confitures.",
    prix: [2500, 8000] // Baissé de 5000-20000 à 2500-8000
  },
  {
    id: "deshydrateur-029",
    order: 31,
    slug: "deshydrateur-alimentaire-professionnel",
    name: "Déshydrateur alimentaire professionnel",
    energie: ["Électrique"],
    category: "Conservation spécifique",
    subCategory: "Déshydratation",
    priority: 1,
    image: ["/33077361-b670-48fe-a474-cc4a7089f625.avif"],
    role: ["Déshydratation", "Séchage"],
    description: "Déshydrateur 10 plateaux. Modèle entrée de gamme, excellent rapport qualité-prix.",
    prix: [800, 3000] // Baissé de 2000-8000 à 800-3000
  },
  {
    id: "fumoir-030",
    order: 32,
    slug: "fumoir-professionnel",
    name: "Fumoir professionnel",
    energie: ["Électrique", "Gaz / sciure"],
    category: "Conservation spécifique",
    subCategory: "Fumage",
    priority: 1,
    image: [],
    role: ["Fumage à froid", "Fumage à chaud"],
    description: "Fumoir compact 50L. Version électrique simple, facile à utiliser.",
    prix: [1500, 5000] // Baissé de 3000-12000 à 1500-5000
  },

  // ==================== CATÉGORIE : DISTRIBUTION ====================
  {
    id: "chariot-chauffant-031",
    order: 33,
    slug: "chariot-chauffant-de-service",
    name: "Chariot chauffant de service",
    energie: ["Électrique (secteur ou batterie)"],
    category: "Distribution",
    subCategory: "Maintien en température",
    priority: 3,
    image: [],
    role: ["Transport chaud", "Maintien >63°C"],
    description: "Chariot chauffant 6 bacs GN. Peut être remplacé par des boîtes isothermes au début.",
    prix: [2000, 6000] // Baissé de 4000-12000 à 2000-6000
  },
  {
    id: "bain-marie-032",
    order: 34,
    slug: "bain-marie-professionnel",
    name: "Bain-marie professionnel",
    energie: ["Électrique", "Gaz"],
    category: "Distribution",
    subCategory: "Maintien en température",
    priority: 3,
    image: [],
    role: ["Maintien chaud", "Service en buffet"],
    description: "Bain-marie 6 GN, modèle d'occasion très abordable.",
    prix: [800, 2500] // Baissé de 1500-6000 à 800-2500
  },
  {
    id: "vitrine-froide-033",
    order: 35,
    slug: "vitrine-refrigeree",
    name: "Vitrine réfrigérée",
    energie: ["Électrique"],
    category: "Distribution",
    subCategory: "Présentation",
    priority: 2,
    image: [],
    role: ["Présentation froide", "Conservation"],
    description: "Vitrine 150 cm. Permet de présenter desserts et salades. Entrée de gamme.",
    prix: [1500, 4500] // Baissé de 2500-10000 à 1500-4500
  },
  {
    id: "self-034",
    order: 36,
    slug: "ligne-de-distribution-self",
    name: "Ligne de distribution (self)",
    energie: ["Électrique"],
    category: "Distribution",
    subCategory: "Ligne",
    priority: 3,
    image: [],
    role: ["Service self"],
    description: "Ligne self modulable 3 mètres. Équipement à envisager en phase 2.",
    prix: [5000, 15000] // Baissé de 10000-40000 à 5000-15000
  },
  {
    id: "chariot-isotherme-035",
    order: 37,
    slug: "chariot-isotherme-gastronorme",
    name: "Chariot isotherme gastronorme",
    energie: ["Aucune (passif)"],
    category: "Distribution",
    subCategory: "Transport",
    priority: 3,
    image: [],
    role: ["Transport isotherme"],
    description: "Chariot isotherme 10 GN. Solution passive économique.",
    prix: [800, 2500] // Baissé de 2000-7000 à 800-2500
  },

  // ==================== CATÉGORIE : NETTOYAGE ET HYGIÈNE ====================
  {
    id: "lave-tunnel-036",
    order: 38,
    slug: "lave-vaisselle-tunnel",
    name: "Lave-vaisselle tunnel",
    energie: ["Électrique"],
    category: "Nettoyage",
    subCategory: "Lave-vaisselle",
    priority: 3,
    image: [],
    role: ["Lavage intensif"],
    description: "Lave-vaisselle tunnel compact. Investissement lourd, à envisager en phase 2.",
    prix: [8000, 20000] // Baissé de 15000-45000 à 8000-20000
  },
  {
    id: "lave-bacs-037",
    order: 39,
    slug: "lave-bacs-gastronormes",
    name: "Lave-bacs gastronormes",
    energie: ["Électrique"],
    category: "Nettoyage",
    subCategory: "Lave-vaisselle",
    priority: 3,
    image: [],
    role: ["Nettoyage bacs", "Marmites"],
    description: "Lave-bacs 10 GN. Version compacte. Peut être remplacée par un lave-vaisselle standard.",
    prix: [4000, 12000] // Baissé de 8000-25000 à 4000-12000
  },
  {
    id: "sterilisation-uv-038",
    order: 40,
    slug: "armoire-de-sterilisation-uv",
    name: "Armoire de stérilisation UV",
    energie: ["Électrique"],
    category: "Nettoyage",
    subCategory: "Stérilisation",
    priority: 2,
    image: [],
    role: ["Stérilisation outillage"],
    description: "Armoire UV 60 cm. Stérilise couteaux et planches. Entrée de gamme.",
    prix: [800, 2000] // Baissé de 1500-5000 à 800-2000
  },
  {
    id: "separateur-huile-039",
    order: 41,
    slug: "separateur-huile-eau",
    name: "Séparateur huile-eau",
    energie: ["Aucune (passif)"],
    category: "Nettoyage",
    subCategory: "Traitement eaux",
    priority: 1, // Obligatoire par la loi
    image: [],
    role: ["Traitement eaux usées"],
    description: "Séparateur 200L, modèle de base. Obligatoire pour les cuisines professionnelles.",
    prix: [1500, 4000] // Baissé de 3000-10000 à 1500-4000
  },
  {
    id: "nettoyage-hp-040",
    order: 42,
    slug: "systeme-de-nettoyage-haute-pression",
    name: "Système de nettoyage haute pression",
    energie: ["Électrique"],
    category: "Nettoyage",
    subCategory: "Équipement",
    priority: 2,
    image: [],
    role: ["Nettoyage sols", "Nettoyage équipements"],
    description: "Nettoyeur haute pression 150 bars. Compact et efficace.",
    prix: [400, 1200] // Baissé de 800-3000 à 400-1200
  },

  // ==================== CATÉGORIE : MOBILIER ====================
  {
    id: "table-inox-041",
    order: 43,
    slug: "table-de-travail-en-inox",
    name: "Table de travail en inox",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Tables",
    priority: 1,
    image: [],
    role: ["Préparation", "Conditionnement"],
    description: "Table inox 150x70 cm. Modèle d'occasion très abordable.",
    prix: [300, 1200] // Baissé de 500-2000 à 300-1200
  },
  {
    id: "table-bacs-042",
    order: 44,
    slug: "plan-de-travail-avec-bacs-integres",
    name: "Plan de travail avec bacs intégrés",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Tables",
    priority: 2,
    image: [],
    role: ["Préparation avec rinçage"],
    description: "Table 150 cm avec 2 bacs. Pratique pour légumes.",
    prix: [400, 1500] // Baissé de 800-3000 à 400-1500
  },
  {
    id: "etageres-043",
    order: 45,
    slug: "etageres-en-inox",
    name: "Étagères en inox",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Rangement",
    priority: 1,
    image: [],
    role: ["Rangement petit matériel"],
    description: "Étagères 4 niveaux. Modèle économique.",
    prix: [200, 600] // Baissé de 300-1200 à 200-600
  },
  {
    id: "rayonnages-044",
    order: 46,
    slug: "rayonnages-pour-chambres-froides",
    name: "Rayonnages pour chambres froides",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Rangement",
    priority: 1,
    image: [],
    role: ["Stockage en froid"],
    description: "Rayonnages inox pour chambre froide. Prix au mètre.",
    prix: [200, 800] // Baissé de 500-2000 à 200-800
  },
  {
    id: "chariot-transport-045",
    order: 47,
    slug: "chariot-de-transport",
    name: "Chariot de transport",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Transport",
    priority: 2,
    image: [],
    role: ["Déplacement marchandises"],
    description: "Chariot 2 plateaux. Très utile pour la logistique.",
    prix: [200, 800] // Baissé de 300-1500 à 200-800
  },
  {
    id: "bacs-gn-046",
    order: 48,
    slug: "bacs-gastronormes-gn",
    name: "Bacs gastronormes (GN)",
    energie: ["Aucune"],
    category: "Mobilier",
    subCategory: "Contenants",
    priority: 1,
    image: [],
    role: ["Cuisson", "Conservation", "Transport"],
    description: "Bacs GN 1/1, 1/2, 1/3. Inox 304. Prix par lot.",
    prix: [15, 80] // Baissé de 20-100 à 15-80 (plus réaliste en lot)
  },

  // ==================== CATÉGORIE : USTENSILES ====================
  {
    id: "batterie-047",
    order: 49,
    slug: "batterie-de-cuisine",
    name: "Batterie de cuisine",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Batterie",
    priority: 1,
    image: [],
    role: ["Cuisson", "Préparation"],
    description: "Set de 10 casseroles, poêles, marmites. Inox entrée de gamme.",
    prix: [500, 2000] // Baissé de 1000-5000 à 500-2000
  },
  {
    id: "couteaux-048",
    order: 50,
    slug: "ustensiles-de-coupe-couteaux",
    name: "Ustensiles de coupe (couteaux)",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Coupe",
    priority: 1,
    image: [],
    role: ["Découpe", "Éminçage", "Désossage"],
    description: "Set de 5 couteaux (chef, office, éminceur, désosseur, pain). Entrée de gamme.",
    prix: [150, 500] // Baissé de 200-800 à 150-500
  },
  {
    id: "planches-049",
    order: 51,
    slug: "planches-a-decouper-haccp",
    name: "Planches à découper HACCP",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Coupe",
    priority: 1,
    image: [],
    role: ["Découpe hygiénique"],
    description: "Set de 6 planches colorées (rouge, blanc, jaune, bleu, vert, marron).",
    prix: [20, 80] // Baissé de 30-100 à 20-80
  },
  {
    id: "petit-ustensiles-050",
    order: 52,
    slug: "fouets-spatules-louches-ecumoises",
    name: "Fouets, spatules, louches, écumoises",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Petit outillage",
    priority: 1,
    image: [],
    role: ["Mélange", "Service"],
    description: "Lot de 10 ustensiles : fouets, spatules, louches, écumoises.",
    prix: [40, 200] // Baissé de 50-300 à 40-200
  },
  {
    id: "douilles-051",
    order: 53,
    slug: "poches-a-douille-et-douilles",
    name: "Poches à douille et douilles",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Dressage",
    priority: 1,
    image: [],
    role: ["Dressage", "Décoration"],
    description: "Set de 10 douilles + 5 poches. Entrée de gamme.",
    prix: [15, 60] // Baissé de 20-100 à 15-60
  },
  {
    id: "rapes-052",
    order: 54,
    slug: "rapes-zesteurs-et-mandolines",
    name: "Râpes, zesteurs et mandolines",
    energie: ["Aucune"],
    category: "Ustensiles",
    subCategory: "Coupe",
    priority: 1,
    image: [],
    role: ["Râpage", "Zestage", "Tranchage fin"],
    description: "Set râpe, zester, mandoline. Entrée de gamme.",
    prix: [30, 150] // Baissé de 50-300 à 30-150
  },
  {
    id: "balance-053",
    order: 55,
    slug: "balance-de-precision",
    name: "Balance de précision",
    energie: ["Électrique (piles)"],
    category: "Ustensiles",
    subCategory: "Mesure",
    priority: 1,
    image: [],
    role: ["Pesage précis"],
    description: "Balance 5 kg, précision 1g. Indispensable.",
    prix: [60, 200] // Baissé de 100-400 à 60-200
  },
  {
    id: "sonde-temp-054",
    order: 56,
    slug: "sonde-de-temperature-thermoplongeur",
    name: "Sonde de température (thermoplongeur)",
    energie: ["Électrique (piles)"],
    category: "Ustensiles",
    subCategory: "Mesure",
    priority: 1,
    image: [],
    role: ["Contrôle température"],
    description: "Sonde à viande + thermomètre de poche. Obligatoire HACCP.",
    prix: [30, 120] // Baissé de 50-200 à 30-120
  },
  {
    id: "minuteurs-055",
    order: 57,
    slug: "minuteurs-et-chronometres",
    name: "Minuteurs et chronomètres",
    energie: ["Électrique (piles)"],
    category: "Ustensiles",
    subCategory: "Gestion du temps",
    priority: 1,
    image: [],
    role: ["Minutage"],
    description: "Lot de 3 minuteurs digitaux.",
    prix: [15, 50] // Baissé de 20-80 à 15-50
  },

  // ==================== CATÉGORIE : SÉCURITÉ ET VENTILATION ====================
  {
    id: "hotte-056",
    order: 58,
    slug: "hotte-professionnelle-et-extraction",
    name: "Hotte professionnelle et extraction",
    energie: ["Électrique (ventilateurs)"],
    category: "Sécurité et ventilation",
    subCategory: "Ventilation",
    priority: 1,
    image: [],
    role: ["Extraction fumées", "Évacuation chaleur"],
    description: "Hotte 2 mètres + extracteur. Modèle d'occasion à vérifier.",
    prix: [3000, 10000] // Baissé de 5000-20000 à 3000-10000
  },
  {
    id: "extinction-057",
    order: 59,
    slug: "systeme-d-extinction-d-incendie-automatique",
    name: "Système d'extinction d'incendie automatique",
    energie: ["Aucune (déclenchement thermique)"],
    category: "Sécurité et ventilation",
    subCategory: "Sécurité incendie",
    priority: 3,
    image: [],
    role: ["Extinction incendie"],
    description: "Système d'extinction automatique. Obligatoire selon la réglementation.",
    prix: [1500, 5000] // Baissé de 3000-10000 à 1500-5000
  },
  {
    id: "detecteurs-058",
    order: 60,
    slug: "detecteurs-de-gaz-et-de-fumee",
    name: "Détecteurs de gaz et de fumée",
    energie: ["Électrique (secteur ou piles)"],
    category: "Sécurité et ventilation",
    subCategory: "Sécurité incendie",
    priority: 1,
    image: [],
    role: ["Détection gaz", "Détection fumée"],
    description: "Lot de 3 détecteurs (gaz, fumée, CO).",
    prix: [80, 250] // Baissé de 100-400 à 80-250
  },
  {
    id: "issue-secours-059",
    order: 61,
    slug: "issues-de-secours-et-eclairage-de-securite",
    name: "Issues de secours et éclairage de sécurité",
    energie: ["Électrique (secteur + batterie)"],
    category: "Sécurité et ventilation",
    subCategory: "Évacuation",
    priority: 1,
    image: [],
    role: ["Évacuation"],
    description: "Éclairage de secours 2 heures. Obligatoire.",
    prix: [150, 500] // Baissé de 200-800 à 150-500
  },

  // ==================== CATÉGORIE : CONDITIONNEMENT ====================
  {
    id: "sous-vide-060",
    order: 62,
    slug: "machine-a-souder-sous-vide",
    name: "Machine à souder sous vide (thermoscelleuse)",
    energie: ["Électrique"],
    category: "Conditionnement",
    subCategory: "Emballage",
    priority: 1,
    image: [],
    role: ["Emballage sous vide"],
    description: "Machine sous vide 300 mm. Modèle compact et abordable.",
    prix: [600, 2000] // Baissé de 1500-6000 à 600-2000
  },
  {
    id: "thermoscelleuse-061",
    order: 63,
    slug: "thermoscelleuse-a-barrette",
    name: "Thermoscelleuse à barrette",
    energie: ["Électrique"],
    category: "Conditionnement",
    subCategory: "Emballage",
    priority: 1,
    image: [],
    role: ["Fermeture barquettes"],
    description: "Thermoscelleuse 300 mm. Facile à utiliser.",
    prix: [400, 1500] // Baissé de 800-3000 à 400-1500
  },
  {
    id: "etiqueteuse-062",
    order: 64,
    slug: "etiqueteuse-tracabilite",
    name: "Étiqueteuse (traçabilité)",
    energie: ["Électrique"],
    category: "Conditionnement",
    subCategory: "Étiquetage",
    priority: 1,
    image: [],
    role: ["Étiquetage", "Traçabilité"],
    description: "Étiqueteuse compacte, imprime DLC et allergènes.",
    prix: [300, 1200] // Baissé de 500-2000 à 300-1200
  },
  {
    id: "portionneur-063",
    order: 65,
    slug: "machine-a-portionner",
    name: "Machine à portionner",
    energie: ["Électrique"],
    category: "Conditionnement",
    subCategory: "Portionnage",
    priority: 3,
    image: [],
    role: ["Portionnage", "Découpe"],
    description: "Portionneur à rouleau, manuel ou électrique. Pour viandes et fromages.",
    prix: [800, 3000] // Baissé de 2000-8000 à 800-3000
  }
];