// ingredientData.ts

/*
🧩 Structure des données d'un ingrédient
- id : identifiant unique
- name : nom de l'ingrédient
- category : catégorie principale (ex: "Légumes", "Viandes")
- subCategory : sous‑catégorie (ex: "Racines", "Volaille")
- unit : unité de mesure (kg, L, pièce, etc.)
- avgPrice : prix moyen au kilo / litre / pièce (en euros)
- seasonal : période de saisonnalité (ex: "été", "toute l'année") – optionnel
- image : tableau d'URLs (vide par défaut)
- description : brève description / usage
- allergies : liste des allergènes potentiels (ex: ["gluten", "lait"])
*/

export interface Ingredient {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  unit: string;
  avgPrice: number;          // prix moyen unitaire (euros)
  seasonal?: string;         // ex: "printemps-été", "hiver"
  image: string[];
  description: string;
  allergies: string[];
}

export const ingredientData: Ingredient[] = [
  // ==================== LÉGUMES ====================
  {
    id: "carotte-001",
    name: "Carotte",
    category: "Légumes",
    subCategory: "Racines",
    unit: "kg",
    avgPrice: 1.20,
    seasonal: "toute l'année",
    image: [],
    description: "Carotte orange, riche en bêta‑carotène, utilisée en garniture, purées, soupes.",
    allergies: []
  },
  {
    id: "pomme-de-terre-002",
    name: "Pomme de terre",
    category: "Légumes",
    subCategory: "Racines",
    unit: "kg",
    avgPrice: 0.90,
    seasonal: "toute l'année",
    image: [],
    description: "Pomme de terre à chair ferme, idéale pour frites, purées, gratins.",
    allergies: []
  },
  {
    id: "oignon-003",
    name: "Oignon",
    category: "Légumes",
    subCategory: "Bulbes",
    unit: "kg",
    avgPrice: 1.00,
    seasonal: "toute l'année",
    image: [],
    description: "Oignon jaune, base de nombreux fonds de sauce et cuissons.",
    allergies: []
  },
  {
    id: "ail-004",
    name: "Ail",
    category: "Légumes",
    subCategory: "Bulbes",
    unit: "kg",
    avgPrice: 2.50,
    seasonal: "toute l'année",
    image: [],
    description: "Ail frais, utilisé pour parfumer plats et sauces.",
    allergies: []
  },
  {
    id: "tomate-005",
    name: "Tomate",
    category: "Légumes",
    subCategory: "Fruits-légumes",
    unit: "kg",
    avgPrice: 2.00,
    seasonal: "été",
    image: [],
    description: "Tomate ronde, utilisée en salades, sauces, coulis.",
    allergies: []
  },
  {
    id: "poivron-006",
    name: "Poivron",
    category: "Légumes",
    subCategory: "Fruits-légumes",
    unit: "kg",
    avgPrice: 2.50,
    seasonal: "été-automne",
    image: [],
    description: "Poivron rouge, jaune ou vert, pour ratatouilles, grillades, farcis.",
    allergies: []
  },
  {
    id: "courgette-007",
    name: "Courgette",
    category: "Légumes",
    subCategory: "Fruits-légumes",
    unit: "kg",
    avgPrice: 1.80,
    seasonal: "été",
    image: [],
    description: "Courgette verte, utilisée en légumes sautés, soupes, gratins.",
    allergies: []
  },
  {
    id: "aubergine-008",
    name: "Aubergine",
    category: "Légumes",
    subCategory: "Fruits-légumes",
    unit: "kg",
    avgPrice: 2.20,
    seasonal: "été",
    image: [],
    description: "Aubergine violette, pour moussaka, caviar d'aubergine, grillades.",
    allergies: []
  },
  {
    id: "champignon-009",
    name: "Champignon de Paris",
    category: "Légumes",
    subCategory: "Champignons",
    unit: "kg",
    avgPrice: 3.50,
    seasonal: "toute l'année",
    image: [],
    description: "Champignon blanc, pour garnitures, sauces, pizzas.",
    allergies: []
  },
  {
    id: "salade-010",
    name: "Salade verte",
    category: "Légumes",
    subCategory: "Feuilles",
    unit: "pièce",
    avgPrice: 0.80,
    seasonal: "printemps-automne",
    image: [],
    description: "Laitue ou batavia, base de salades composées.",
    allergies: []
  },
  {
    id: "epinard-011",
    name: "Épinard",
    category: "Légumes",
    subCategory: "Feuilles",
    unit: "kg",
    avgPrice: 2.80,
    seasonal: "printemps-automne",
    image: [],
    description: "Épinard frais, pour quiches, lasagnes, accompagnements.",
    allergies: []
  },
  {
    id: "brocoli-012",
    name: "Brocoli",
    category: "Légumes",
    subCategory: "Inflorescences",
    unit: "kg",
    avgPrice: 2.50,
    seasonal: "automne-printemps",
    image: [],
    description: "Brocoli vert, riche en vitamines, pour légumes vapeur, gratin.",
    allergies: []
  },
  {
    id: "chou-013",
    name: "Chou blanc",
    category: "Légumes",
    subCategory: "Choux",
    unit: "kg",
    avgPrice: 1.20,
    seasonal: "hiver",
    image: [],
    description: "Chou blanc, pour choucroute, salades, farcis.",
    allergies: []
  },

  // ==================== FRUITS ====================
  {
    id: "banane-014",
    name: "Banane",
    category: "Fruits",
    subCategory: "Tropicaux",
    unit: "kg",
    avgPrice: 1.50,
    seasonal: "toute l'année",
    image: [],
    description: "Banane Cavendish, pour desserts, smoothies, accompagnement.",
    allergies: []
  },
  {
    id: "pomme-015",
    name: "Pomme",
    category: "Fruits",
    subCategory: "Pommes",
    unit: "kg",
    avgPrice: 2.00,
    seasonal: "automne-hiver",
    image: [],
    description: "Pomme Golden ou Gala, pour desserts, compotes, salades.",
    allergies: []
  },
  {
    id: "fraise-016",
    name: "Fraise",
    category: "Fruits",
    subCategory: "Baies",
    unit: "kg",
    avgPrice: 4.00,
    seasonal: "printemps-été",
    image: [],
    description: "Fraise gariguette, pour desserts, confitures, garnitures.",
    allergies: []
  },
  {
    id: "citron-017",
    name: "Citron",
    category: "Fruits",
    subCategory: "Agrumes",
    unit: "kg",
    avgPrice: 2.50,
    seasonal: "hiver-printemps",
    image: [],
    description: "Citron jaune, pour assaisonnement, marinades, sauces.",
    allergies: []
  },
  {
    id: "orange-018",
    name: "Orange",
    category: "Fruits",
    subCategory: "Agrumes",
    unit: "kg",
    avgPrice: 2.20,
    seasonal: "hiver-printemps",
    image: [],
    description: "Orange navelle, pour jus, desserts, salades.",
    allergies: []
  },

  // ==================== VIANDES ====================
  {
    id: "poulet-019",
    name: "Poulet entier",
    category: "Viandes",
    subCategory: "Volaille",
    unit: "kg",
    avgPrice: 4.50,
    seasonal: "toute l'année",
    image: [],
    description: "Poulet fermier, pour rôtisserie, grillades, sauces.",
    allergies: []
  },
  {
    id: "blanc-poulet-020",
    name: "Blanc de poulet",
    category: "Viandes",
    subCategory: "Volaille",
    unit: "kg",
    avgPrice: 6.00,
    seasonal: "toute l'année",
    image: [],
    description: "Filet de poulet désossé, pour escalopes, nuggets, salades.",
    allergies: []
  },
  {
    id: "cuisse-poulet-021",
    name: "Cuisse de poulet",
    category: "Viandes",
    subCategory: "Volaille",
    unit: "kg",
    avgPrice: 5.00,
    seasonal: "toute l'année",
    image: [],
    description: "Cuisse de poulet, pour rôtis, fritures, plats mijotés.",
    allergies: []
  },
  {
    id: "boeuf-hache-022",
    name: "Bœuf haché",
    category: "Viandes",
    subCategory: "Bœuf",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "toute l'année",
    image: [],
    description: "Viande de bœuf hachée, pour burgers, boulettes, chili.",
    allergies: []
  },
  {
    id: "boeuf-bourguignon-023",
    name: "Bœuf à braiser (paleron)",
    category: "Viandes",
    subCategory: "Bœuf",
    unit: "kg",
    avgPrice: 7.50,
    seasonal: "toute l'année",
    image: [],
    description: "Pièce à braiser, pour bourguignon, daube, pot‑au‑feu.",
    allergies: []
  },
  {
    id: "porc-echine-024",
    name: "Échine de porc",
    category: "Viandes",
    subCategory: "Porc",
    unit: "kg",
    avgPrice: 5.50,
    seasonal: "toute l'année",
    image: [],
    description: "Viande de porc, pour rôtis, ragoûts, brochettes.",
    allergies: []
  },
  {
    id: "porc-hache-025",
    name: "Porc haché",
    category: "Viandes",
    subCategory: "Porc",
    unit: "kg",
    avgPrice: 6.00,
    seasonal: "toute l'année",
    image: [],
    description: "Porc haché, pour farces, boulettes, saucisses.",
    allergies: []
  },
  {
    id: "agneau-026",
    name: "Agneau (gigot)",
    category: "Viandes",
    subCategory: "Agneau",
    unit: "kg",
    avgPrice: 12.00,
    seasonal: "printemps-été",
    image: [],
    description: "Gigot d'agneau, pour rôtisserie, grillades, tajines.",
    allergies: []
  },

  // ==================== POISSONS ET FRUITS DE MER ====================
  {
    id: "cabillaud-027",
    name: "Cabillaud",
    category: "Poissons",
    subCategory: "Poissons blancs",
    unit: "kg",
    avgPrice: 8.50,
    seasonal: "toute l'année",
    image: [],
    description: "Cabillaud frais, pour filets, poêlés, en papillote.",
    allergies: ["poisson"]
  },
  {
    id: "saumon-028",
    name: "Saumon",
    category: "Poissons",
    subCategory: "Poissons gras",
    unit: "kg",
    avgPrice: 10.00,
    seasonal: "toute l'année",
    image: [],
    description: "Saumon atlantique, pour grillades, sashimi, gravlax.",
    allergies: ["poisson"]
  },
  {
    id: "thon-029",
    name: "Thon",
    category: "Poissons",
    subCategory: "Poissons gras",
    unit: "kg",
    avgPrice: 9.00,
    seasonal: "été",
    image: [],
    description: "Thon frais, pour steaks grillés, tartares, salades.",
    allergies: ["poisson"]
  },
  {
    id: "crevette-030",
    name: "Crevettes",
    category: "Poissons",
    subCategory: "Crustacés",
    unit: "kg",
    avgPrice: 12.00,
    seasonal: "toute l'année",
    image: [],
    description: "Crevettes crues ou cuites, pour entrées, woks, brochettes.",
    allergies: ["crustacés"]
  },
  {
    id: "calamar-031",
    name: "Calamar",
    category: "Poissons",
    subCategory: "Mollusques",
    unit: "kg",
    avgPrice: 7.00,
    seasonal: "toute l'année",
    image: [],
    description: "Anneaux de calamar, pour fritures, salades, paella.",
    allergies: ["mollusques"]
  },

  // ==================== PRODUITS LAITIERS ET ŒUFS ====================
  {
    id: "lait-032",
    name: "Lait entier",
    category: "Produits laitiers",
    subCategory: "Lait",
    unit: "L",
    avgPrice: 0.90,
    seasonal: "toute l'année",
    image: [],
    description: "Lait de vache, pour sauces, pâtisseries, boissons.",
    allergies: ["lait"]
  },
  {
    id: "creme-033",
    name: "Crème liquide",
    category: "Produits laitiers",
    subCategory: "Crèmes",
    unit: "L",
    avgPrice: 2.50,
    seasonal: "toute l'année",
    image: [],
    description: "Crème entière, pour sauces, soupes, desserts.",
    allergies: ["lait"]
  },
  {
    id: "beurre-034",
    name: "Beurre",
    category: "Produits laitiers",
    subCategory: "Beurres",
    unit: "kg",
    avgPrice: 4.00,
    seasonal: "toute l'année",
    image: [],
    description: "Beurre doux ou salé, pour cuisson, pâtisserie, sauces.",
    allergies: ["lait"]
  },
  {
    id: "fromage-035",
    name: "Fromage râpé (Gruyère)",
    category: "Produits laitiers",
    subCategory: "Fromages",
    unit: "kg",
    avgPrice: 6.00,
    seasonal: "toute l'année",
    image: [],
    description: "Gruyère râpé, pour gratins, quiches, pizzas.",
    allergies: ["lait"]
  },
  {
    id: "parmesan-036",
    name: "Parmesan",
    category: "Produits laitiers",
    subCategory: "Fromages",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "toute l'année",
    image: [],
    description: "Fromage italien à pâte dure, pour pâtes, risottos, salades.",
    allergies: ["lait"]
  },
  {
    id: "yaourt-037",
    name: "Yaourt nature",
    category: "Produits laitiers",
    subCategory: "Yaourts",
    unit: "pièce",
    avgPrice: 0.60,
    seasonal: "toute l'année",
    image: [],
    description: "Yaourt brassé, pour marinades, sauces, desserts.",
    allergies: ["lait"]
  },
  {
    id: "oeuf-038",
    name: "Œuf",
    category: "Produits laitiers",
    subCategory: "Œufs",
    unit: "pièce",
    avgPrice: 0.20,
    seasonal: "toute l'année",
    image: [],
    description: "Œuf frais, pour pâtisseries, omelettes, sauces.",
    allergies: ["œuf"]
  },

  // ==================== FÉCULENTS ET CÉRÉALES ====================
  {
    id: "farine-039",
    name: "Farine de blé T45",
    category: "Féculents",
    subCategory: "Farines",
    unit: "kg",
    avgPrice: 1.10,
    seasonal: "toute l'année",
    image: [],
    description: "Farine blanche, pour pains, pâtisseries, sauces.",
    allergies: ["gluten"]
  },
  {
    id: "farine-complete-040",
    name: "Farine complète",
    category: "Féculents",
    subCategory: "Farines",
    unit: "kg",
    avgPrice: 1.30,
    seasonal: "toute l'année",
    image: [],
    description: "Farine de blé complet, pour pains, pâtes.",
    allergies: ["gluten"]
  },
  {
    id: "riz-041",
    name: "Riz long grain",
    category: "Féculents",
    subCategory: "Riz",
    unit: "kg",
    avgPrice: 1.50,
    seasonal: "toute l'année",
    image: [],
    description: "Riz basmati ou jasmin, pour accompagnements, plats asiatiques.",
    allergies: []
  },
  {
    id: "riz-arborio-042",
    name: "Riz Arborio",
    category: "Féculents",
    subCategory: "Riz",
    unit: "kg",
    avgPrice: 2.00,
    seasonal: "toute l'année",
    image: [],
    description: "Riz italien pour risottos.",
    allergies: []
  },
  {
    id: "pates-043",
    name: "Pâtes (spaghetti)",
    category: "Féculents",
    subCategory: "Pâtes",
    unit: "kg",
    avgPrice: 1.20,
    seasonal: "toute l'année",
    image: [],
    description: "Spaghetti de blé dur, pour plats italiens.",
    allergies: ["gluten"]
  },
  {
    id: "pomme-terre-044",
    name: "Pomme de terre (pour purée)",
    category: "Féculents",
    subCategory: "Tubercules",
    unit: "kg",
    avgPrice: 0.90,
    seasonal: "toute l'année",
    image: [],
    description: "Variété spécifique pour purée, facile à écraser.",
    allergies: []
  },

  // ==================== ÉPICES, HERBES ET CONDIMENTS ====================
  {
    id: "sel-045",
    name: "Sel fin",
    category: "Épices et herbes",
    subCategory: "Sels",
    unit: "kg",
    avgPrice: 0.50,
    seasonal: "toute l'année",
    image: [],
    description: "Sel de table, pour assaisonnement.",
    allergies: []
  },
  {
    id: "poivre-046",
    name: "Poivre noir",
    category: "Épices et herbes",
    subCategory: "Poivres",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "toute l'année",
    image: [],
    description: "Poivre moulu, pour assaisonnement.",
    allergies: []
  },
  {
    id: "cumin-047",
    name: "Cumin",
    category: "Épices et herbes",
    subCategory: "Graines",
    unit: "kg",
    avgPrice: 6.00,
    seasonal: "toute l'année",
    image: [],
    description: "Cumin en poudre, pour cuisines orientale, indienne, mexicaine.",
    allergies: []
  },
  {
    id: "paprika-048",
    name: "Paprika",
    category: "Épices et herbes",
    subCategory: "Poudres",
    unit: "kg",
    avgPrice: 5.00,
    seasonal: "toute l'année",
    image: [],
    description: "Paprika doux ou fumé, pour colorer et parfumer.",
    allergies: []
  },
  {
    id: "origan-049",
    name: "Origan",
    category: "Épices et herbes",
    subCategory: "Herbes séchées",
    unit: "kg",
    avgPrice: 7.00,
    seasonal: "toute l'année",
    image: [],
    description: "Origan séché, pour pizzas, sauces tomates.",
    allergies: []
  },
  {
    id: "thym-050",
    name: "Thym",
    category: "Épices et herbes",
    subCategory: "Herbes séchées",
    unit: "kg",
    avgPrice: 6.50,
    seasonal: "toute l'année",
    image: [],
    description: "Thym, pour marinades, rôtis, bouillons.",
    allergies: []
  },
  {
    id: "basilic-051",
    name: "Basilic frais",
    category: "Épices et herbes",
    subCategory: "Herbes fraîches",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "été",
    image: [],
    description: "Basilic, pour pesto, salades, pizzas.",
    allergies: []
  },
  {
    id: "coriandre-052",
    name: "Coriandre fraîche",
    category: "Épices et herbes",
    subCategory: "Herbes fraîches",
    unit: "kg",
    avgPrice: 7.00,
    seasonal: "toute l'année",
    image: [],
    description: "Coriandre, pour cuisines asiatique, mexicaine.",
    allergies: []
  },
  {
    id: "persil-053",
    name: "Persil",
    category: "Épices et herbes",
    subCategory: "Herbes fraîches",
    unit: "kg",
    avgPrice: 6.00,
    seasonal: "toute l'année",
    image: [],
    description: "Persil plat, pour garniture, sauces.",
    allergies: []
  },
  {
    id: "huile-olive-054",
    name: "Huile d'olive",
    category: "Épices et herbes",
    subCategory: "Huiles",
    unit: "L",
    avgPrice: 5.00,
    seasonal: "toute l'année",
    image: [],
    description: "Huile d'olive vierge extra, pour cuisson, assaisonnement.",
    allergies: []
  },
  {
    id: "huile-tournesol-055",
    name: "Huile de tournesol",
    category: "Épices et herbes",
    subCategory: "Huiles",
    unit: "L",
    avgPrice: 2.00,
    seasonal: "toute l'année",
    image: [],
    description: "Huile neutre, pour friture, cuisson.",
    allergies: []
  },
  {
    id: "vinaigre-056",
    name: "Vinaigre de vin",
    category: "Épices et herbes",
    subCategory: "Vinaigres",
    unit: "L",
    avgPrice: 2.50,
    seasonal: "toute l'année",
    image: [],
    description: "Vinaigre de vin rouge, pour vinaigrettes, marinades.",
    allergies: []
  },
  {
    id: "sauce-soja-057",
    name: "Sauce soja",
    category: "Épices et herbes",
    subCategory: "Sauces",
    unit: "L",
    avgPrice: 3.00,
    seasonal: "toute l'année",
    image: [],
    description: "Sauce soja salée, pour cuisines asiatiques.",
    allergies: ["soja", "gluten"]
  },

  // ==================== CONSERVES ET PRODUITS SECS ====================
  {
    id: "tomate-concasse-058",
    name: "Tomate concassée",
    category: "Conserves",
    subCategory: "Tomates",
    unit: "kg",
    avgPrice: 2.50,
    seasonal: "toute l'année",
    image: [],
    description: "Tomate pelée concassée, pour sauces, soupes.",
    allergies: []
  },
  {
    id: "concentre-tomate-059",
    name: "Concentré de tomate",
    category: "Conserves",
    subCategory: "Tomates",
    unit: "kg",
    avgPrice: 4.00,
    seasonal: "toute l'année",
    image: [],
    description: "Double concentré, pour relever sauces et plats.",
    allergies: []
  },
  {
    id: "haricots-blancs-060",
    name: "Haricots blancs",
    category: "Conserves",
    subCategory: "Légumineuses",
    unit: "kg",
    avgPrice: 2.00,
    seasonal: "toute l'année",
    image: [],
    description: "Haricots secs en conserve, pour salades, chili.",
    allergies: []
  },
  {
    id: "lentilles-061",
    name: "Lentilles vertes",
    category: "Conserves",
    subCategory: "Légumineuses",
    unit: "kg",
    avgPrice: 2.20,
    seasonal: "toute l'année",
    image: [],
    description: "Lentilles vertes, pour soupes, salades, accompagnements.",
    allergies: []
  },
  {
    id: "mais-062",
    name: "Maïs en grain",
    category: "Conserves",
    subCategory: "Céréales",
    unit: "kg",
    avgPrice: 1.80,
    seasonal: "toute l'année",
    image: [],
    description: "Maïs doux en conserve, pour salades, purées.",
    allergies: []
  },

  // ==================== PRODUITS DE BASE PÂTISSERIE ====================
  {
    id: "sucre-063",
    name: "Sucre en poudre",
    category: "Pâtisserie",
    subCategory: "Sucres",
    unit: "kg",
    avgPrice: 0.80,
    seasonal: "toute l'année",
    image: [],
    description: "Sucre blanc, pour desserts, pâtisseries, boissons.",
    allergies: []
  },
  {
    id: "sucre-glace-064",
    name: "Sucre glace",
    category: "Pâtisserie",
    subCategory: "Sucres",
    unit: "kg",
    avgPrice: 1.20,
    seasonal: "toute l'année",
    image: [],
    description: "Sucre glace, pour glaçages, décors.",
    allergies: []
  },
  {
    id: "chocolat-noir-065",
    name: "Chocolat noir",
    category: "Pâtisserie",
    subCategory: "Chocolats",
    unit: "kg",
    avgPrice: 6.50,
    seasonal: "toute l'année",
    image: [],
    description: "Chocolat à 70% de cacao, pour fondant, ganache.",
    allergies: ["soja", "lait"]
  },
  {
    id: "chocolat-lait-066",
    name: "Chocolat au lait",
    category: "Pâtisserie",
    subCategory: "Chocolats",
    unit: "kg",
    avgPrice: 5.50,
    seasonal: "toute l'année",
    image: [],
    description: "Chocolat au lait, pour desserts, mousses.",
    allergies: ["soja", "lait"]
  },
  {
    id: "beurre-cacao-067",
    name: "Beurre de cacao",
    category: "Pâtisserie",
    subCategory: "Matières grasses",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "toute l'année",
    image: [],
    description: "Pour enrobage chocolat, ganaches.",
    allergies: []
  },
  {
    id: "levure-068",
    name: "Levure boulangère",
    category: "Pâtisserie",
    subCategory: "Levures",
    unit: "kg",
    avgPrice: 3.00,
    seasonal: "toute l'année",
    image: [],
    description: "Levure fraîche ou sèche, pour pains et viennoiseries.",
    allergies: []
  },

  // ==================== BOISSONS ====================
  {
    id: "cafe-069",
    name: "Café moulu",
    category: "Boissons",
    subCategory: "Café",
    unit: "kg",
    avgPrice: 8.00,
    seasonal: "toute l'année",
    image: [],
    description: "Café en grains moulus, pour boissons chaudes.",
    allergies: []
  },
  {
    id: "the-070",
    name: "Thé noir",
    category: "Boissons",
    subCategory: "Thé",
    unit: "kg",
    avgPrice: 4.00,
    seasonal: "toute l'année",
    image: [],
    description: "Thé en feuilles, pour boissons chaudes et froides.",
    allergies: []
  },
  {
    id: "jus-orange-071",
    name: "Jus d'orange",
    category: "Boissons",
    subCategory: "Jus",
    unit: "L",
    avgPrice: 2.50,
    seasonal: "toute l'année",
    image: [],
    description: "Jus d'orange pur jus, pour petit‑déjeuner, cocktails.",
    allergies: []
  },

  // ==================== PRODUITS FRAIS SPÉCIFIQUES ====================
  {
    id: "poulet-panure-072",
    name: "Poulet pané (nuggets)",
    category: "Viandes",
    subCategory: "Panés",
    unit: "kg",
    avgPrice: 5.50,
    seasonal: "toute l'année",
    image: [],
    description: "Nuggets de poulet panés, pour fast‑food.",
    allergies: ["gluten"]
  },
  {
    id: "saumon-fume-073",
    name: "Saumon fumé",
    category: "Poissons",
    subCategory: "Fumés",
    unit: "kg",
    avgPrice: 15.00,
    seasonal: "toute l'année",
    image: [],
    description: "Saumon fumé, pour entrées, bagels, brunch.",
    allergies: ["poisson"]
  },
  {
    id: "jambon-074",
    name: "Jambon blanc",
    category: "Viandes",
    subCategory: "Charcuterie",
    unit: "kg",
    avgPrice: 6.50,
    seasonal: "toute l'année",
    image: [],
    description: "Jambon cuit, pour sandwichs, salades, quiches.",
    allergies: []
  },
  {
    id: "chorizo-075",
    name: "Chorizo",
    category: "Viandes",
    subCategory: "Charcuterie",
    unit: "kg",
    avgPrice: 7.00,
    seasonal: "toute l'année",
    image: [],
    description: "Chorizo espagnol, pour tapas, paella, pizzas.",
    allergies: []
  }
];

// Fonctions utilitaires (optionnelles)
export const getIngredientsByCategory = (category: string): Ingredient[] => {
  return ingredientData.filter(ing => ing.category === category);
};

export const getIngredientById = (id: string): Ingredient | undefined => {
  return ingredientData.find(ing => ing.id === id);
};

export const getCategories = (): string[] => {
  return [...new Set(ingredientData.map(ing => ing.category))];
};