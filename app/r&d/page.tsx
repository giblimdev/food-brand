//


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


"use client"

import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Effet de fond animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête avec dégradé */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
              R&D Lab
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mt-2"></div>
          </div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Exploration des tendances digitales & innovation technologique
          </p>
        </div>

        {/* Section Plateformes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-400 to-fuchsia-500 rounded-full"></span>
            Plateformes Stratégiques
            <span className="w-12 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-400 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deliveroo */}
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Deliveroo</h3>
                  <span className="text-4xl group-hover:scale-110 transition-transform">🛵</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Livraison ultra-rapide • Expérience utilisateur premium
                </p>
                <Link 
                  href="https://deliveroo.fr" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
                >
                  Découvrir
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* UberEats */}
            <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">UberEats</h3>
                  <span className="text-4xl group-hover:scale-110 transition-transform">🚗</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Marketplace mondiale • Innovation constante
                </p>
                <Link 
                  href="https://ubereats.com" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  Découvrir
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Just Eat */}
            <div className="group relative bg-white/5 backdrop-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Just Eat</h3>
                  <span className="text-4xl group-hover:scale-110 transition-transform">🍕</span>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Leader européen • Partenariats exclusifs
                </p>
                <Link 
                  href="https://just-eat.fr" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  Découvrir
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Charte Graphique - Version améliorée */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-400 to-fuchsia-500 rounded-full"></span>
            Identité Visuelle
            <span className="w-12 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-400 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Couleurs - Version améliorée */}
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-fuchsia-500 rounded-full"></span>
                Palette Chromatique
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="group/color relative overflow-hidden rounded-xl">
                  <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    <span className="relative z-10 drop-shadow-lg">#3B82F6</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/color:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold">Primary Blue</span>
                  </div>
                </div>
                <div className="group/color relative overflow-hidden rounded-xl">
                  <div className="h-24 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 flex items-center justify-center text-white font-bold text-sm">
                    <span className="relative z-10 drop-shadow-lg">#D946EF</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/color:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold">Fuchsia Accent</span>
                  </div>
                </div>
                <div className="group/color relative overflow-hidden rounded-xl">
                  <div className="h-24 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    <span className="relative z-10 drop-shadow-lg">#8B5CF6</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/color:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold">Purple Vibe</span>
                  </div>
                </div>
                <div className="group/color relative overflow-hidden rounded-xl">
                  <div className="h-24 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    <span className="relative z-10 drop-shadow-lg">#06B6D4</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/color:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold">Cyan Energy</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Dégradés dynamiques</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Neon vibes</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Contraste élevé</span>
              </div>
            </div>

            {/* Polices - Version améliorée */}
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-fuchsia-400 to-blue-500 rounded-full"></span>
                Typographie Impact
              </h3>
              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-fuchsia-500/30 transition-all hover:bg-white/10">
                  <p className="font-['Poppins'] text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text">
                    Poppins Black
                  </p>
                  <p className="font-['Poppins'] text-sm text-gray-400 mt-1">
                    Titres percutants • Fort impact visuel
                  </p>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/10">
                  <p className="font-['Inter'] text-2xl font-extrabold text-white">
                    Inter ExtraBold
                  </p>
                  <p className="font-['Inter'] text-sm text-gray-400 mt-1">
                    Corps de texte • Lisibilité optimale
                  </p>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all hover:bg-white/10">
                  <p className="font-['Outfit'] text-2xl font-bold text-white">
                    Outfit Bold
                  </p>
                  <p className="font-['Outfit'] text-sm text-gray-400 mt-1">
                    Éléments UI • Design system moderne
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Google Fonts</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Variable fonts</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Accessibilité</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pied de page design */}
        <footer className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 R&D Lab • Designed with 
            <span className="inline-block mx-1 animate-pulse text-fuchsia-400">✦</span>
            Innovation & Passion
          </p>
        </footer>
      </div>

      {/* Styles personnalisés pour les animations */}
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
  )
}