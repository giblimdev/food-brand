// app/r&d/stack/page.tsx


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Package, 
  Box, 
  Code2, 
  Sparkles, 
  Terminal,
  ExternalLink
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '@/components/ui/code-block'

// ============================================================
// Données extraites du package.json
// ============================================================
const packageData = {
  name: "food-brand",
  version: "0.1.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "prisma generate && next build",
    start: "next start"
  },
  dependencies: {
    "@better-auth/prisma-adapter": "^1.6.22",
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@hookform/resolvers": "^5.4.0",
    "@next-safe-action/adapter-react-hook-form": "^2.0.6",
    "@prisma/adapter-pg": "^7.8.0",
    "@prisma/client": "^7.8.0",
    "@tanstack/react-query": "^5.101.2",
    "@uploadthing/react": "^7.3.3",
    "better-auth": "^1.6.22",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.4.0",
    "date-fns-tz": "^3.2.0",
    "framer-motion": "^12.42.0",
    "lucide-react": "^1.21.0",
    "next": "16.2.9",
    "next-safe-action": "^8.5.5",
    "next-seo": "^7.2.0",
    "next-sitemap": "^4.2.3",
    "radix-ui": "^1.6.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.80.0",
    "react-syntax-highlighter": "^16.1.1",
    "shadcn": "^4.12.0",
    "sharp": "^0.35.2",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0",
    "uploadthing": "^7.7.4",
    "zod": "^4.4.3",
    "zustand": "^5.0.14"
  },
  devDependencies: {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "prisma": "^7.8.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

// ============================================================
// Descriptions enrichies (rôle + fonctionnement)
// ============================================================
const descriptions: Record<string, string> = {
  // --------------------- Authentification ---------------------
  "better-auth": 
    "**Rôle** : Authentification complète (email/mot de passe, OAuth, sessions).\n" +
    "**Fonctionnement** : Utilise des JWT signés, gère les sessions et les comptes OAuth (Google, GitHub, etc.) avec une API unifiée.",
  "@better-auth/prisma-adapter": 
    "**Rôle** : Connecte Better Auth à Prisma.\n" +
    "**Fonctionnement** : Définit les modèles Prisma pour stocker les utilisateurs, comptes, sessions et jetons de vérification.",

  // --------------------- Base de données & ORM ---------------------
  "@prisma/client": 
    "**Rôle** : Client Prisma généré automatiquement.\n" +
    "**Fonctionnement** : Offre une API type-safe pour interroger la base de données (CRUD, relations, transactions).",
  "@prisma/adapter-pg": 
    "**Rôle** : Adaptateur PostgreSQL pour Prisma.\n" +
    "**Fonctionnement** : Optimise les connexions à PostgreSQL (pooling, préparation des requêtes) pour de meilleures performances.",
  "prisma": 
    "**Rôle** : Outil CLI de Prisma.\n" +
    "**Fonctionnement** : Gère les migrations, génère le client, valide le schéma. S'exécute en dev et en build.",

  // --------------------- UI & Styling ---------------------
  "shadcn": 
    "**Rôle** : Collection de composants UI réutilisables.\n" +
    "**Fonctionnement** : Basée sur Radix UI et Tailwind CSS, elle fournit des boutons, formulaires, modales, etc., avec un style cohérent.",
  "radix-ui": 
    "**Rôle** : Primitives UI accessibles.\n" +
    "**Fonctionnement** : Fournit des composants de base (Dialog, Popover, Dropdown) avec une gestion complète de l'accessibilité (ARIA).",
  "class-variance-authority": 
    "**Rôle** : Gestion des variantes de classes.\n" +
    "**Fonctionnement** : Permet de définir des variants de composants (ex: variant=primary, size=lg) et de générer les classes Tailwind correspondantes.",
  "clsx": 
    "**Rôle** : Construction de classes conditionnelles.\n" +
    "**Fonctionnement** : Combine plusieurs classes en une seule chaîne, avec des conditions (ex: 'bg-red-500' si erreur, sinon 'bg-blue-500').",
  "tailwind-merge": 
    "**Rôle** : Fusion intelligente des classes Tailwind.\n" +
    "**Fonctionnement** : Évite les conflits en fusionnant les classes (ex: 'p-4 p-2' devient 'p-2').",
  "tw-animate-css": 
    "**Rôle** : Animations CSS prêtes à l'emploi.\n" +
    "**Fonctionnement** : Ajoute des classes d'animation (fade-in, slide-up, etc.) directement utilisables avec Tailwind.",
  "framer-motion": 
    "**Rôle** : Animation de composants React.\n" +
    "**Fonctionnement** : Permet des animations fluides (transitions, gestes, orchestration) avec une API déclarative.",
  "lucide-react": 
    "**Rôle** : Icônes SVG modernes.\n" +
    "**Fonctionnement** : Fournit plus de 1000 icônes sous forme de composants React, légers et personnalisables.",

  // --------------------- Formulaires & Validation ---------------------
  "react-hook-form": 
    "**Rôle** : Gestion des formulaires.\n" +
    "**Fonctionnement** : Utilise des refs pour minimiser les re-renders, avec validation intégrée et gestion des erreurs.",
  "@hookform/resolvers": 
    "**Rôle** : Intégration de schémas de validation.\n" +
    "**Fonctionnement** : Connecte React Hook Form à des schémas Zod, Yup ou Joi pour la validation des données.",
  "zod": 
    "**Rôle** : Validation de données TypeScript-first.\n" +
    "**Fonctionnement** : Définit des schémas de validation et parsing, avec inférence de types statiques.",

  // --------------------- État & Data fetching ---------------------
  "@tanstack/react-query": 
    "**Rôle** : Gestion des requêtes asynchrones.\n" +
    "**Fonctionnement** : Gère le cache, la revalidation, les mutations et le statut de chargement pour les appels API.",
  "zustand": 
    "**Rôle** : State manager global.\n" +
    "**Fonctionnement** : Stocke l'état global de l'application (ex: thème, utilisateur, panier) avec une API simple et performante.",

  // --------------------- Next.js & Métadonnées ---------------------
  "next": 
    "**Rôle** : Framework React avec rendu serveur.\n" +
    "**Fonctionnement** : Utilise le App Router, le rendu côté serveur (SSR), le rendu statique (SSG) et les Server Components.",
  "next-seo": 
    "**Rôle** : Gestion des métadonnées SEO.\n" +
    "**Fonctionnement** : Configure les balises <title>, <meta>, Open Graph, Twitter Cards et JSON-LD pour chaque page.",
  "next-sitemap": 
    "**Rôle** : Génération de sitemap.xml.\n" +
    "**Fonctionnement** : Analyse automatiquement les routes de l'application et génère un sitemap pour les moteurs de recherche.",
  "next-safe-action": 
    "**Rôle** : Création d'actions sécurisées (server actions).\n" +
    "**Fonctionnement** : Combine Zod et les Server Actions Next.js pour valider les entrées et exécuter du code serveur avec sécurité.",
  "@next-safe-action/adapter-react-hook-form": 
    "**Rôle** : Adaptateur pour React Hook Form.\n" +
    "**Fonctionnement** : Permet d'utiliser directement une action sécurisée comme handler de soumission de formulaire.",

  // --------------------- DnD (Drag & Drop) ---------------------
  "@dnd-kit/core": 
    "**Rôle** : Noyau de drag & drop.\n" +
    "**Fonctionnement** : Gère les interactions tactiles/souris, la détection de collision et le rendu des éléments déplaçables.",
  "@dnd-kit/sortable": 
    "**Rôle** : Extension pour listes triables.\n" +
    "**Fonctionnement** : Ajoute la logique de réorganisation d'éléments dans une liste par glisser-déposer.",
  "@dnd-kit/utilities": 
    "**Rôle** : Utilitaires pour @dnd-kit.\n" +
    "**Fonctionnement** : Fournit des hooks et des fonctions pour la détection de collision, les coordonnées, etc.",

  // --------------------- Fichiers & Images ---------------------
  "@uploadthing/react": 
    "**Rôle** : Upload de fichiers côté client.\n" +
    "**Fonctionnement** : Utilise un composant React pour téléverser des fichiers vers un stockage S3 ou CDN avec suivi de progression.",
  "uploadthing": 
    "**Rôle** : Module serveur pour l'upload.\n" +
    "**Fonctionnement** : Définit les routes d'upload, la validation des fichiers et la gestion des permissions.",
  "sharp": 
    "**Rôle** : Traitement d'images.\n" +
    "**Fonctionnement** : Redimensionne, compresse et optimise les images de manière performante (Node.js).",

  // --------------------- Dates ---------------------
  "date-fns": 
    "**Rôle** : Manipulation de dates.\n" +
    "**Fonctionnement** : Fournit des fonctions (format, compare, add, sub) pour travailler avec des dates en JavaScript.",
  "date-fns-tz": 
    "**Rôle** : Gestion des fuseaux horaires.\n" +
    "**Fonctionnement** : Étend date-fns avec des fonctions pour convertir, formater et manipuler les dates avec fuseaux.",

  // --------------------- Logging & UI ---------------------
  "sonner": 
    "**Rôle** : Notifications toast.\n" +
    "**Fonctionnement** : Affiche des notifications élégantes, accessibles et animées pour informer l'utilisateur.",

  // --------------------- Outils divers ---------------------
  "react-syntax-highlighter": 
    "**Rôle** : Coloration syntaxique de code.\n" +
    "**Fonctionnement** : Utilise Prism.js pour afficher du code avec une mise en couleur selon le langage.",
  "react": 
    "**Rôle** : Moteur React (version 19).\n" +
    "**Fonctionnement** : Gère le rendu des composants, l'état, les effets et le contexte.",
  "react-dom": 
    "**Rôle** : Rendu DOM pour React.\n" +
    "**Fonctionnement** : Monte les composants React dans le DOM du navigateur.",

  // --------------------- DevDependencies ---------------------
  "@tailwindcss/postcss": 
    "**Rôle** : Plugin PostCSS pour Tailwind.\n" +
    "**Fonctionnement** : Intègre Tailwind CSS dans le pipeline de build, compilant les classes utilitaires.",
  "@types/node": 
    "**Rôle** : Types TypeScript pour Node.js.\n" +
    "**Fonctionnement** : Fournit les typages pour les modules Node.js (fs, path, process, etc.).",
  "@types/react": 
    "**Rôle** : Types TypeScript pour React.\n" +
    "**Fonctionnement** : Fournit les typages pour React (composants, hooks, JSX).",
  "@types/react-dom": 
    "**Rôle** : Types TypeScript pour React DOM.\n" +
    "**Fonctionnement** : Typages pour le rendu DOM de React.",
  "tailwindcss": 
    "**Rôle** : Framework CSS utilitaire.\n" +
    "**Fonctionnement** : Génère des classes CSS prédéfinies pour le design (marges, couleurs, flex, etc.).",
  "typescript": 
    "**Rôle** : Superset JavaScript typé.\n" +
    "**Fonctionnement** : Ajoute un typage statique, des interfaces et des génériques pour une meilleure robustesse du code.",
}

// ============================================================
// Composant principal
// ============================================================
export default function StackPage() {
  const depEntries = Object.entries(packageData.dependencies).map(([name, version]) => ({
    name,
    version,
    type: 'dependencies' as const,
    description: descriptions[name] || 'Bibliothèque utilisée dans l’application.'
  }))

  const devDepEntries = Object.entries(packageData.devDependencies).map(([name, version]) => ({
    name,
    version,
    type: 'devDependencies' as const,
    description: descriptions[name] || 'Outil ou type utilisé uniquement en développement.'
  }))

  const allDeps = [...depEntries, ...devDepEntries]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10 mb-4">
            <Package className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs font-mono text-gray-300">package.json</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Stack Technique
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez les technologies qui alimentent <span className="text-fuchsia-400 font-semibold">Food Brand</span>.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Box className="h-4 w-4" /> v{packageData.version}
            </span>
            <span className="flex items-center gap-1">
              <Code2 className="h-4 w-4" /> {Object.keys(packageData.dependencies).length} dépendances
            </span>
          </div>
        </div>

        {/* Grille des dépendances */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {allDeps.map((dep) => (
            <Card 
              key={dep.name}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/5 group"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <Code2 className="h-4 w-4 text-fuchsia-400 shrink-0" />
                    <CardTitle className="text-sm font-mono text-white truncate">
                      {dep.name}
                    </CardTitle>
                  </div>
                  <Badge 
                    variant={dep.type === 'dependencies' ? 'default' : 'secondary'}
                    className={dep.type === 'dependencies' 
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30'
                      : 'bg-slate-700/50 text-slate-300 border-slate-600/30'
                    }
                  >
                    {dep.type === 'dependencies' ? 'Prod' : 'Dev'}
                  </Badge>
                </div>
                <CardDescription className="font-mono text-xs text-gray-400">
                  {dep.version}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {dep.description}
                </div>
                <div className="mt-3 flex justify-end">
                  <Link
                    href={`https://www.npmjs.com/package/${dep.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1"
                  >
                    Documentation <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ============================================================
            Affichage du package.json complet
            ============================================================ */}
        <div className="mt-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Terminal className="h-5 w-5 text-fuchsia-400" />
                Extraits du package.json
              </CardTitle>
              <CardDescription className="text-gray-400">
                Configuration complète du projet – scripts, dépendances et versions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock 
                code={JSON.stringify(packageData, null, 2)} 
                language="json" 
                showLineNumbers={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          <span className="flex items-center justify-center gap-2">
            <Sparkles className="h-3 w-3 text-fuchsia-400" />
            Projet Food Brand – Stack mise à jour le {new Date().toLocaleDateString('fr-FR')}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}