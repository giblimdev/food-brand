//@/app/amin/page.tsx

//type : page 
/*role : page d'entré admin vers
gestion des utilisateur (attribution du role admin)
daschbord : (a developper) 
chart restaurent point de vent (pos), 
gestion des catégorie et enum(visualisation),
communication BtB
*/              
/*fonctionnement : 
verifie le role de l'utilisateur (ne âs implementer pour l'instant)
*/ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

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
verifie le role de l'utilisateur (pas implementer pour l'instant)
*/ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  LayoutDashboard, 
  BarChart3, 
  Tag, 
  MessageSquare, 
  Settings,
  ArrowRight,
  Package,
  ShoppingCart,
  TrendingUp,
  Store
} from 'lucide-react';

function AdminPage() {
  // Données statistiques (à remplacer par vos données réelles)
  const stats = [
    { label: 'Utilisateurs', value: '24', icon: Users, color: 'bg-blue-500' },
    { label: 'Commandes', value: '156', icon: ShoppingCart, color: 'bg-green-500' },
    { label: 'Produits', value: '43', icon: Package, color: 'bg-purple-500' },
    { label: 'Partenaires', value: '8', icon: Store, color: 'bg-orange-500' },
  ];

  // Modules d'administration
  const modules = [
    {
      title: '👥 Gestion des utilisateurs',
      description: 'Gérer les comptes, attribuer les rôles (admin, manager, user)',
      href: '/admin/users',
      icon: Users,
      color: 'border-blue-500',
      bg: 'hover:bg-blue-50'
    },
    {
      title: '📊 Dashboard',
      description: 'Vue d\'ensemble des performances, KPI et tendances',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      color: 'border-emerald-500',
      bg: 'hover:bg-emerald-50'
    },
    {
      title: '📈 POS & Ventes',
      description: 'Graphiques des points de vente, chiffre d\'affaires et analyse',
      href: '/admin/pos',
      icon: BarChart3,
      color: 'border-purple-500',
      bg: 'hover:bg-purple-50'
    },
    {
      title: '🏷️ Catégories & Énumérations',
      description: 'Visualiser et gérer les catégories de produits et les énumérations',
      href: '/admin/categories',
      icon: Tag,
      color: 'border-amber-500',
      bg: 'hover:bg-amber-50'
    },
    {
      title: '💬 Communication B2B',
      description: 'Gérer les partenariats, messages et offres professionnelles',
      href: '/admin/b2b',
      icon: MessageSquare,
      color: 'border-rose-500',
      bg: 'hover:bg-rose-50'
    },
    {
      title: '⚙️ Équipement',
      description: 'Gérer l\'inventaire des équipements de la cuisine centrale',
      href: '/admin/equipement',
      icon: Settings,
      color: 'border-slate-500',
      bg: 'hover:bg-slate-50'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
           <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
        <Link href="/admin">🏠 Home Admin</Link>
        <Link href="/admin/equipements">⚙️ Équipement</Link>
        <Link href="/admin/general">📊 General</Link>
        <Link href="/admin/name">📝 Name</Link>
      </nav>
 {/* En-tête */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              🏠 Dashboard Admin
            </h1>
            <p className="text-gray-500 mt-1">
              BrandFusion — Cloud Kitchen Popayán
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Admin</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Statistiques */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12% ce mois</span>
            </div>
          </div>
        ))}
      </section>

      {/* Modules d'accès */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🚀 Accès rapide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={index}
              href={module.href}
              className={`
                group bg-white rounded-xl shadow-sm border-l-4 ${module.color} 
                p-6 hover:shadow-md transition-all duration-200 ${module.bg}
              `}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <module.icon className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-800">
                      {module.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {module.description}
                  </p>
                </div>
                <ArrowRight 
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" 
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section rapide : Activité récente */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📋 Activité récente
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-4">
            {[
              { action: 'Nouvel utilisateur inscrit', time: 'Il y a 5 min', user: 'Maria G.' },
              { action: 'Commande #1042 livrée', time: 'Il y a 1h', user: 'Pedro R.' },
              { action: 'Partenariat avec Boulangerie Popayán', time: 'Il y a 3h', user: 'Système' },
              { action: 'Mise à jour des catégories', time: 'Il y a 6h', user: 'Admin' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-400">par {activity.user}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;