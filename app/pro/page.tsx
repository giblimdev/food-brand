//@/app/pro/page.tsx


///type : page
/*role : Page d'accueil de l'espace professionnel */
/*fonctionnement : Affiche un tableau de bord ou une vue d'ensemble des activités */
//imports []
//exports [default]
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

import React from 'react'; 
import { 
  Pizza, 
  Coffee, 
  Beef, 
  Menu, 
Flame, 
  UtensilsCrossed,
  Award,
  Leaf,
  Drumstick,
  Cookie,
  Star,
  TrendingUp,
  Utensils,
  CheckCircle2,
  ListChecks,
  Store,
  Sparkles
} from 'lucide-react';

function Page() {
  const categories = [
    {
      id: "pizza",
      name: "Pizza / Italienne",
      icon: Pizza,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      description: "Le grand leader - Plus de 50% des commandes",
      popularity: "🔥 #1 des ventes",
      items: [
        "Pizzas classiques : Margherita, Pepperoni, Hawaienne, Quatre Fromages, Végétarienne",
        "Pizzas locales : Pollo con Champiñones, Carne Desmechada, Chorizo Payanés, Jamón y Queso",
        "Pizzas gourmandes : Pizza de Pollo BBQ, Suprema, Mexicana",
        "Accompagnements : Ailes de poulet, Pain à l'ail, Salade César, Calzone"
      ],
      restaurants: ["Restaurante Pizzeria Italiano", "Pizza Phone Gourmet"],
      rentability: "⭐ Très rentable - Bon ticket moyen"
    },
    {
      id: "colombienne",
      name: "Colombienne / Payanèse",
      icon: Coffee,
      color: "from-yellow-600 to-amber-700",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      description: "Très demandé par les locaux - Fait maison",
      popularity: "🇨🇴 Cuisine traditionnelle",
      items: [
        "Empanadas de Pipián (classique + version viande)",
        "Tamales Payaneses",
        "Carantanta con Guiso",
        "Bandeja Paisa (version réduite pour livraison)",
        "Sancocho de Gallina",
        "Arroz Atollado",
        "Ternero (si disponible)",
        "Chuleta de Cerdo / Pollo Sudado",
        "Patacones con Hogao",
        "Mazamorra Chiquita (dessert)"
      ],
      restaurants: ["Restaurantes traditionnels locaux"],
      rentability: "⭐ Très demandé - Fidélité clientèle"
    },
    {
      id: "parrilla",
      name: "Parrilla / Viandes grillées",
      icon: Beef,
      color: "from-amber-600 to-red-800",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      description: "Steaks, brochettes, churrasquería",
      popularity: "🥩 Très populaire",
      items: [
        "Bandeja de Carne (Filete, Costilla, Chorizo)",
        "Pollo a la Parrilla",
        "Brochettes mixtes (Res + Pollo + Chorizo)",
        "Asado Colombiano",
        "Churrasco con Arepa y Patacón",
        "Costillas BBQ",
        "Platos combinados (Carne + Pollo)"
      ],
      restaurants: ["La Cosecha Parrillada"],
      rentability: "⭐ Bonne marge - Viandes de qualité"
    },
    {
      id: "fastfood",
      name: "Fast Food",
      icon: Menu,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      description: "Haut volume de commandes",
      popularity: "🍔 Commandes fréquentes",
      items: [
        "Hamburgers : Clásica, Doble Carne, Queso Bacon, Hawaiana, Mexicana",
        "Perros Calientes : Especial, Super Perro, Ranchero",
        "Salchipapas (classique + version cargada avec queso y tocineta)",
        "Arepas Rellenas (Pollo, Carne, Queso)",
        "Nuggets + Papas",
        "Alitas Picantes"
      ],
      restaurants: ["Fast-food locaux"],
      rentability: "⭐ Haut volume - Rotation rapide"
    },
    {
      id: "asiatique",
      name: "Cuisine Asiatique",
      icon: Menu,
      color: "from-red-700 to-orange-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      description: "Chinoise, Japonaise, Wok",
      popularity: "🥢 En croissance",
      items: [
        "Chinoise : Arroz Chino (Pollo, Res, Mixta), Pollo agridulce, Kung Pao, Chop Suey",
        "Wantanes Fritos, Fideos Saltados",
        "Japonaise : Makis (California, Philadelphia), Sushis et Sashimis",
        "Ramen / Yakisoba, Pollo Teriyaki"
      ],
      restaurants: ["Mey Chow", "Aki Maki"],
      rentability: "⭐ Bonne croissance - Tendances actuelles"
    },
    {
      id: "mexicaine",
      name: "Mexicaine",
      icon: Flame,
      color: "from-green-700 to-red-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-200 dark:border-green-800",
      description: "Tacos, burritos, quesadillas",
      popularity: "🌮 Bonne demande jeune",
      items: [
        "Tacos (Pastor, Res, Pollo, Vegetariano)",
        "Burritos",
        "Quesadillas",
        "Nachos Supremos",
        "Fajitas"
      ],
      restaurants: ["Restaurants mexicains locaux"],
      rentability: "⭐ Bonne demande - Clientèle jeune"
    },
    {
      id: "libanaise",
      name: "Libanaise / Arabe",
      icon: UtensilsCrossed,
      color: "from-emerald-600 to-teal-700",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      description: "Shawarma, falafels, mezzés",
      popularity: "🧆 Option premium",
      items: [
        "Shawarma de Pollo / Res",
        "Falafel",
        "Taboulé",
        "Hummus + Pita",
        "Fatayer (empanadas libanaises)"
      ],
      restaurants: ["Pita et similaires"],
      rentability: "⭐ Niche premium - Bonne marge"
    },
    {
      id: "peruvienne",
      name: "Péruvienne",
      icon: Award,
      color: "from-red-600 to-purple-700",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      description: "Ceviche, lomo saltado",
      popularity: "🏆 Cuisine reconnue",
      items: [
        "Lomo Saltado",
        "Arroz Chaufa",
        "Ceviche (version simplifiée pour livraison)",
        "Pollo a la Brasa"
      ],
      restaurants: ["Terra Inca"],
      rentability: "⭐ Bonne image - Clientèle exigeante"
    },
    {
      id: "healthy",
      name: "Fusion / Healthy",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-200 dark:border-green-800",
      description: "Bowls, salades, options végétariennes",
      popularity: "🌱 De plus en plus demandé",
      items: [
        "Bowls (Quinoa, Poulet grillé, Saumon)",
        "Salades complètes",
        "Wraps protéinés",
        "Smoothies et jus naturels"
      ],
      restaurants: ["Options healthy locales"],
      rentability: "⭐ Tendance montante - Clientèle moderne"
    },
    {
      id: "poulet",
      name: "Poulet Rôti / Broaster",
      icon: Drumstick,
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      description: "Un classique qui marche toujours",
      popularity: "🍗 Incontournable",
      items: [
        "Pollo Asado (¼, ½, entero)",
        "Pollo Broaster",
        "Wings / Pilon",
        "Nuggets",
        "Combos avec papas + ensalada + arepa"
      ],
      restaurants: ["Rôtisseries locales"],
      rentability: "⭐ Stable - Demande constante"
    },
    {
      id: "creperie",
      name: "Crêperie",
      icon: Cookie,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      borderColor: "border-pink-200 dark:border-pink-800",
      description: "Crêpes salées et sucrées",
      popularity: "🥞 Nouvelle tendance",
      items: [
        "Crêpes salées : Jambon-fromage, Champignons, Poulet, Saumon",
        "Crêpes sucrées : Nutella, Fruits, Caramel, Chocolat",
        "Galettes complètes",
        "Desserts typiques : Champús, Salpicón, Helados"
      ],
      restaurants: ["Crêperies locales"],
      rentability: "⭐ Niche prometteuse - Originalité"
    }
  ];

  const strongCategories = ["Pizza", "Burger", "Empanadas/Colombien", "Parrilla"];
  const mediumCategories = ["Sushi", "Mexicain", "Chinois"];
  const nicheCategories = ["Payanèse premium", "Végétarien/Healthy", "Desserts typiques"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Store className="w-12 h-12" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Créer mes restaurants
              </h1>
              <p className="text-xl opacity-90 mt-2">
                Les plus populaires et rentables en livraison à Popayán
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Via Rappi
            </span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Voyagent facilement
            </span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Demande locale
            </span>
          </div>
        </div>
      </div>

      {/* Conseils stratégiques */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-2">Très fortes</h3>
            <div className="flex flex-wrap gap-2">
              {strongCategories.map((cat) => (
                <span key={cat} className="bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-2">Moyennes - en hausse</h3>
            <div className="flex flex-wrap gap-2">
              {mediumCategories.map((cat) => (
                <span key={cat} className="bg-yellow-200 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-2">Niches intéressantes</h3>
            <div className="flex flex-wrap gap-2">
              {nicheCategories.map((cat) => (
                <span key={cat} className="bg-purple-200 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contexte local */}
        <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-bold text-blue-600 dark:text-blue-400">📍 Popayán</span> étant une ville universitaire et touristique, 
            les jeunes et les familles commandent beaucoup le soir et le week-end. Les classiques réconfortants 
            (pizza + colombien + fast-food) dominent, mais il y a de la place pour de la qualité 
            (ingrédients locaux, bons emballages).
          </p>
        </div>
      </div>

      {/* Liste des catégories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ListChecks className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Toutes les catégories
          </h2>
          <span className="ml-auto text-sm bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full">
            {categories.length} catégories
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`${cat.bgColor} border ${cat.borderColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`bg-gradient-to-r ${cat.color} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">{cat.name}</h3>
                      <p className="text-sm opacity-90">{cat.description}</p>
                    </div>
                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                      {cat.popularity}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2">
                      <Utensils className="w-4 h-4" />
                      Plats proposés
                    </h4>
                    <ul className="space-y-1">
                      {cat.items.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Store className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {cat.restaurants.join(", ")}
                        </span>
                      </div>
                      <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                        {cat.rentability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            📊 Catalogue des restaurants - Popayán à Domicile
          </p>
          <p className="text-xs opacity-60 mt-2">
            Basé sur les tendances de livraison locales • Via Rappi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Page;