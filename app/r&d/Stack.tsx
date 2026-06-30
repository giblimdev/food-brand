// app/r&d/stack/page.tsx 



///type : Composant
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 





'use client';

import React from 'react';
import {
  Server,
  Database,
  Shield,
  Brain,
  FormInput,
  Palette,
  Grip,
  Calendar,
  Image,
  Search,
  Wrench,
  Layout,
  CheckCircle,
  Zap,
  Sparkles,
  Rocket,
  Users,
  ShoppingCart,
  BarChart,
  Globe,
  Code2,
  LucideIcon
} from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  icon: LucideIcon;
}

interface Category {
  title: string;
  icon: LucideIcon;
  technologies: TechItem[];
}

const techCategories: Category[] = [
  {
    title: "⚙️ Moteur & Infrastructure",
    icon: Server,
    technologies: [
      { name: "Next.js 16", role: "Framework React full-stack avec SSR, ISR, App Router", icon: Server },
      { name: "React 19", role: "Bibliothèque UI avec Concurrent Features & Server Components", icon: Zap },
      { name: "TypeScript 5", role: "Typage statique strict pour une base de code robuste", icon: Code2 },
      { name: "Node.js 20+", role: "Environnement d'exécution", icon: Server }
    ]
  },
  {
    title: "🗄️ Base de données & ORM",
    icon: Database,
    technologies: [
      { name: "Prisma 7", role: "ORM moderne avec génération de types et migrations", icon: Database },
      { name: "Prisma Client", role: "Requêtes typées et performantes", icon: Database },
      { name: "Prisma Adapter PG", role: "Adaptation native pour PostgreSQL", icon: Database },
      { name: "PostgreSQL", role: "Base de données relationnelle principale", icon: Database }
    ]
  },
  {
    title: "🔐 Authentification & Sécurité",
    icon: Shield,
    technologies: [
      { name: "Better Auth", role: "Auth moderne et modulaire (magic links, OAuth, sessions)", icon: Shield },
      { name: "Prisma Adapter", role: "Liaison entre Better Auth et la base de données", icon: Shield },
      { name: "Zod", role: "Validation des données côté serveur et client", icon: Shield }
    ]
  },
  {
    title: "🧠 Gestion d'état & Data Fetching",
    icon: Brain,
    technologies: [
      { name: "TanStack Query v5", role: "Gestion asynchrone des requêtes, cache, revalidation", icon: Brain },
      { name: "Zustand", role: "Gestion d'état local global simple et performant", icon: Brain },
      { name: "Next Safe Action", role: "Mutations sécurisées entre client et serveur", icon: Brain },
      { name: "React Hook Form", role: "Intégration entre Safe Actions et formulaires", icon: FormInput }
    ]
  },
  {
    title: "🎨 UI / UX / Design System",
    icon: Palette,
    technologies: [
      { name: "Tailwind CSS 4", role: "Framework utilitaire ultra-rapide (moteur Rust)", icon: Palette },
      { name: "ShadCN + Radix UI", role: "Composants UI réutilisables et accessibles", icon: Palette },
      { name: "Framer Motion", role: "Animations fluides et gestuelles", icon: Palette },
      { name: "Lucide React", role: "Icônes SVG modernes et cohérentes", icon: Palette },
      { name: "CVA + Tailwind Merge", role: "Gestion des variantes et fusion de classes", icon: Palette },
      { name: "Sonner", role: "Toasts / notifications élégants et accessibles", icon: Palette }
    ]
  },
  {
    title: "🧩 Drag & Drop",
    icon: Grip,
    technologies: [
      { name: "DND Kit", role: "Système de drag & drop moderne et accessible", icon: Grip }
    ]
  },
  {
    title: "📅 Gestion des dates",
    icon: Calendar,
    technologies: [
      { name: "date-fns", role: "Manipulation légère des dates", icon: Calendar },
      { name: "date-fns-tz", role: "Gestion des fuseaux horaires", icon: Calendar }
    ]
  },
  {
    title: "🖼️ Optimisation des images",
    icon: Image,
    technologies: [
      { name: "Sharp", role: "Optimisation d'images en production", icon: Image }
    ]
  },
  {
    title: "🔍 SEO & Sitemap",
    icon: Search,
    technologies: [
      { name: "Next Sitemap", role: "Génération automatique du sitemap.xml", icon: Search }
    ]
  },
  {
    title: "🧪 Outils de développement",
    icon: Wrench,
    technologies: [
      { name: "TypeScript", role: "Typage strict pour un meilleur DX", icon: Wrench },
      { name: "@types/*", role: "Types pour un meilleur DX", icon: Wrench }
    ]
  }
];

const strengths = [
  { icon: Shield, title: "🔒 Sécurité", description: "Better Auth + Zod + Server Actions typées" },
  { icon: Zap, title: "⚡ Performance", description: "Next.js 16 + Tailwind 4 + React 19 + Sharp" },
  { icon: Layout, title: "🧩 Modularité", description: "Séparation claire des couches (UI, logique, données, auth)" },
  { icon: Sparkles, title: "🎯 DX", description: "Typescript strict, outils modernes, feedback rapide" },
  { icon: Rocket, title: "🧠 Scalabilité", description: "Prisma + PostgreSQL + React Query pour des données complexes" },
  { icon: Palette, title: "🎨 UI/UX", description: "Composants accessibles, animations fluides, dark mode possible" }
];

const useCases = [
  { icon: ShoppingCart, title: "Catalogue de produits", description: "Gestion complète des produits avec catégories" },
  { icon: Grip, title: "Gestion des catégories", description: "Drag & drop pour réorganiser les catégories" },
  { icon: ShoppingCart, title: "Panier / Commandes", description: "Système de panier et suivi des commandes" },
  { icon: Users, title: "Authentification", description: "Clients, pros et admins avec rôles distincts" },
  { icon: Database, title: "Suivi des stocks", description: "Gestion des inventaires et alertes" },
  { icon: Palette, title: "Interface responsive", description: "Animées et adaptées à tous les écrans" }
];

const evolutions = [
  { icon: Wrench, title: "Tests", description: "Vitest, Playwright" },
  { icon: Server, title: "Monitoring", description: "Sentry, Logtail" },
  { icon: Globe, title: "i18n", description: "next-intl pour internationalisation" },
  { icon: Zap, title: "PWA", description: "Next.js PWA plugin" },
  { icon: BarChart, title: "Analytics", description: "Plausible, Umami" }
];

function Stack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl mb-6">
            <Server className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Food Brand - Stack Technique
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Application web moderne full-stack TypeScript, orientée performance 
            et expérience utilisateur fluide
          </p>
        </header>

        {/* Vue d'ensemble */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">🧱 Vue d'ensemble</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Food Brand</strong> est une application web moderne construite avec 
            <span className="text-orange-600 font-semibold"> Next.js 16</span> (App Router), 
            full-stack TypeScript, orientée performance, expérience utilisateur fluide et maintenabilité.
          </p>
        </section>

        {/* Catégories techniques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {techCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.technologies.map((tech, techIdx) => (
                  <li key={techIdx} className="border-b border-slate-100 dark:border-slate-700 last:border-0 pb-2 last:pb-0">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {tech.name}:
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {tech.role}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">📦 Structure & Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "App Router Next.js 16",
              "Server Actions via next-safe-action",
              "ShadCN + Radix UI",
              "Validation centralisée avec Zod",
              "État global avec Zustand",
              "React Query pour les données",
              "Better Auth + sessions sécurisées",
              "Drag & Drop avec DND Kit",
              "Optimisation images avec Sharp"
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Points forts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">✅ Points forts de la stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <strength.icon className="w-8 h-8 text-orange-500" />
                  <h3 className="text-lg font-semibold">{strength.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">💡 Cas d'usage pour Food Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-2">
                  <useCase.icon className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Évolutions */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📈 Évolutions possibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {evolutions.map((evo, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <evo.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">{evo.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{evo.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-8">
          <p>
            Stack technique de <span className="font-semibold text-orange-600">Food Brand</span> — 
            {new Date().getFullYear()} • Construit avec ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Stack;