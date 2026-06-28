"use client"
import Image from "next/image";
import Link from "next/link";
import { 
  Pizza, 
  Coffee, 
  Beef, 
  Menu, 
  Utensils, 
  Flame, 
  Leaf, 
  Drumstick,
  UtensilsCrossed,
  Star,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  MapPin,
  Users,
  Clock,
  ChevronRight
} from "lucide-react";
import Header from "@/components/layout/Header";

export default function Home() {
  const popularCategories = [
    {
      id: "pizza",
      name: "Pizza / Italienne",
      description: "Le grand leader - Plus de 50% des commandes",
      icon: Pizza,
      color: "from-blue-500 to-blue-600",
      bgGlow: "blue-500",
      stats: "🔥 #1 des ventes",
      examples: "Pizzeria Italiano, Pizza Phone Gourmet",
      popularity: 98,
      emoji: "🍕"
    },
    {
      id: "colombienne",
      name: "Colombienne / Payanèse",
      description: "Empanadas, tamales, bandeja paisa",
      icon: Coffee,
      color: "from-fuchsia-500 to-fuchsia-600",
      bgGlow: "fuchsia-500",
      stats: "🇨🇴 Fait maison",
      examples: "Saveurs typiques, plats en sauce",
      popularity: 92,
      emoji: "🇨🇴"
    },
    {
      id: "parrilla",
      name: "Parrilla / Viandes grillées",
      description: "Steaks, brochettes, churrasquería",
      icon: Beef,
      color: "from-purple-500 to-purple-600",
      bgGlow: "purple-500",
      stats: "🥩 Très populaire",
      examples: "La Cosecha Parrillada",
      popularity: 88,
      emoji: "🥩"
    },
    {
      id: "fastfood",
      name: "Fast Food",
      description: "Burgers, hot-dogs, salchipapas",
      icon: Menu,
      color: "from-cyan-500 to-blue-500",
      bgGlow: "cyan-500",
      stats: "🍔 Haut volume",
      examples: "Burgers gourmets, combos familiaux",
      popularity: 95,
      emoji: "🍔"
    },
    {
      id: "asiatique",
      name: "Cuisine Asiatique",
      description: "Chinoise, Japonaise, Wok",
      icon: Utensils,
      color: "from-rose-500 to-fuchsia-500",
      bgGlow: "rose-500",
      stats: "🥢 En croissance",
      examples: "Mey Chow, Aki Maki, Sushi",
      popularity: 78,
      emoji: "🥢"
    }
  ];

  const otherCategories = [
    {
      id: "mexicaine",
      name: "Mexicaine",
      description: "Tacos, burritos, quesadillas",
      icon: Flame,
      color: "from-green-400 to-emerald-500",
      demand: "Bonne demande jeune",
      emoji: "🌮"
    },
    {
      id: "libanaise",
      name: "Libanaise / Arabe",
      description: "Shawarma, falafels, mezzés",
      icon: UtensilsCrossed,
      color: "from-emerald-400 to-teal-500",
      demand: "Option premium",
      emoji: "🥙"
    },
    {
      id: "peruvienne",
      name: "Péruvienne",
      description: "Ceviche, lomo saltado",
      icon: Award,
      color: "from-red-400 to-rose-500",
      demand: "Terrasse Inca",
      emoji: "🐟"
    },
    {
      id: "healthy",
      name: "Fusion / Healthy",
      description: "Bowls, salades, végé",
      icon: Leaf,
      color: "from-lime-400 to-green-500",
      demand: "De plus en plus demandé",
      emoji: "🥗"
    },
    {
      id: "poulet",
      name: "Poulet Rôti / Broaster",
      description: "Un classique qui marche toujours",
      icon: Drumstick,
      color: "from-amber-400 to-orange-500",
      demand: "Incontournable",
      emoji: "🍗"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section avec dégradé moderne */}
      <section className="relative overflow-hidden">
        {/* Effets de fond animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                Popayán - Cauca
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="text-blue-400">●</span> Livraison active
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
                Popayán
              </span>
              <span className="text-white"> à Domicile</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Les plats les plus populaires et rentables en livraison dans la ville blanche
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Ville universitaire & touristique</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300">
                <Clock className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm">Livraison via Rappi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Les plus populaires" */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-fuchsia-500 rounded-xl">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Les plus populaires
          </h2>
          <span className="ml-auto flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20 rounded-full border border-blue-500/20 text-blue-300 text-sm">
            <Sparkles className="w-4 h-4" />
            Commandes fréquentes
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 overflow-hidden"
              >
                {/* Effet de fond au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${cat.color} p-3 rounded-xl text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/10">
                      {cat.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                    {cat.emoji}
                    {cat.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${cat.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${cat.popularity}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-400">
                      {cat.popularity}%
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    {cat.examples}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section "Autres cuisines" */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Autres cuisines qui fonctionnent bien
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-center"
              >
                <div className={`bg-gradient-to-br ${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {cat.description}
                </p>
                <span className="inline-block mt-2 text-xs px-3 py-1 bg-white/5 rounded-full text-blue-300 border border-blue-500/20">
                  {cat.demand}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section "Conseils stratégiques" */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-fuchsia-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
          {/* Effet de fond */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">💡</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Conseils stratégiques pour Popayán
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="font-bold text-white mb-3">Très fortes</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pizza', 'Burger', 'Empanadas', 'Colombien', 'Parrilla'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20 rounded-full text-xs text-blue-300 border border-blue-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-fuchsia-500/30 transition-all">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-bold text-white mb-3">Moyennes - en hausse</h3>
                <div className="flex flex-wrap gap-2">
                  {['Sushi', 'Mexicain', 'Chinois'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-full text-xs text-fuchsia-300 border border-fuchsia-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-white mb-3">Niches intéressantes</h3>
                <div className="flex flex-wrap gap-2">
                  {['Payanèse premium', 'Végétarien', 'Desserts typiques'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-xs text-purple-300 border border-purple-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-blue-400">🎯 Contexte local :</span> Popayán étant une ville universitaire et touristique, 
                les jeunes et les familles commandent beaucoup le soir et le week-end. Les classiques réconfortants 
                (pizza + colombien + fast-food) dominent, mais il y a de la place pour de la qualité 
                (ingrédients locaux, bons emballages).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2026 R&D Lab • Popayán à Domicile
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Données basées sur les tendances de livraison locales
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
            <span>🍕 Pizza</span>
            <span>🇨🇴 Colombien</span>
            <span>🥩 Parrilla</span>
            <span>🍔 Fast Food</span>
            <span>🥢 Asiatique</span>
          </div>
        </div>
      </footer>

      {/* Styles pour l'animation du gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}