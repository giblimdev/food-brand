// @/app/r&d/architectures/architectureData.ts

export interface File {
  id: string;
  type: 'layout' | 'page' | 'composant' | 'lib' | 'utils' | 'next' | 'store' | 'api' | 'config' | 'middleware' | 'schema' | 'action';
  label: string;
  path: string;
  parentId: string | null;
  role?: string;
  fonctionnement?: string;
  export?: string[];
  import?: string[];
}

export const files: File[] = [
  // ==================== RACINE ====================
  {
    id: "root",
    type: "next",
    label: "📦 food-brand",
    path: "/",
    parentId: null,
    role: "Projet racine",
    fonctionnement: "Structure principale de l'application"
  },

  // ==================== APP DIRECTORY ====================
  {
    id: "app",
    type: "next",
    label: "📁 app",
    path: "/app",
    parentId: "root",
    role: "Dossier principal Next.js App Router"
  },

  // --- Layout racine ---
  {
    id: "root-layout",
    type: "layout",
    label: "📄 root-layout.tsx",
    path: "/app/layout.tsx",
    parentId: "app",
    role: "Layout racine HTML",
    fonctionnement: "Structure HTML globale, métadonnées, providers (Theme, Query, Auth)",
    export: ["RootLayout", "metadata", "viewport"]
  },

  // --- Page d'accueil ---
  {
    id: "page-index",
    type: "page",
    label: "🏠 page.tsx",
    path: "/app/page.tsx",
    parentId: "app",
    role: "Page d'accueil publique",
    fonctionnement: "Landing page avec hero, catégories, produits en vedette"
  },

  // ==================== PUBLIC ROUTES ====================
  {
    id: "public",
    type: "layout",
    label: "📁 public",
    path: "/app/public",
    parentId: "app",
    role: "Dossier des pages publiques",
    fonctionnement: "Layout public sans authentification"
  },

  {
    id: "public-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/public/layout.tsx",
    parentId: "public",
    role: "Layout public",
    fonctionnement: "Header, footer, navigation publique"
  },

  {
    id: "public-index",
    type: "page",
    label: "📄 page.tsx",
    path: "/app/public/page.tsx",
    parentId: "public",
    role: "Page d'accueil publique",
    fonctionnement: "Accueil du site (équivaut à /public)",
    export: ["default", "metadata"]
  },

  {
    id: "public-help",
    type: "layout",
    label: "📁 help",
    path: "/app/public/help",
    parentId: "public",
    role: "Dossier d'aide"
  },

  {
    id: "public-help-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/public/help/layout.tsx",
    parentId: "public-help",
    role: "Layout aide",
    fonctionnement: "Structure commune pour les pages d'aide"
  },

  {
    id: "public-help-index",
    type: "page",
    label: "📄 page.tsx",
    path: "/app/public/help/page.tsx",
    parentId: "public-help",
    role: "Page aide principale",
    fonctionnement: "FAQ, centre d'aide"
  },

  {
    id: "public-help-contact",
    type: "page",
    label: "📄 contact/page.tsx",
    path: "/app/public/help/contact/page.tsx",
    parentId: "public-help",
    role: "Page contact",
    fonctionnement: "Formulaire de contact"
  },

  {
    id: "public-about",
    type: "page",
    label: "📄 about/page.tsx",
    path: "/app/public/about/page.tsx",
    parentId: "public",
    role: "Page À propos",
    fonctionnement: "Présentation de la marque"
  },

  {
    id: "public-products",
    type: "page",
    label: "📄 products/page.tsx",
    path: "/app/public/products/page.tsx",
    parentId: "public",
    role: "Catalogue produits",
    fonctionnement: "Listing des produits avec filtres"
  },

  {
    id: "public-products-detail",
    type: "page",
    label: "📄 [slug]/page.tsx",
    path: "/app/public/products/[slug]/page.tsx",
    parentId: "public",
    role: "Page produit détail",
    fonctionnement: "Détail d'un produit (SSG/ISR)"
  },

  {
    id: "public-categories",
    type: "page",
    label: "📄 categories/page.tsx",
    path: "/app/public/categories/page.tsx",
    parentId: "public",
    role: "Liste des catégories",
    fonctionnement: "Affichage de toutes les catégories"
  },

  {
    id: "public-categories-detail",
    type: "page",
    label: "📄 [slug]/page.tsx",
    path: "/app/public/categories/[slug]/page.tsx",
    parentId: "public",
    role: "Page catégorie",
    fonctionnement: "Produits par catégorie"
  },

  // ==================== AUTH ROUTES ====================
  {
    id: "auth",
    type: "layout",
    label: "📁 auth",
    path: "/app/auth",
    parentId: "app",
    role: "Dossier authentification",
    fonctionnement: "Layout minimal sans navigation"
  },

  {
    id: "auth-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/auth/layout.tsx",
    parentId: "auth",
    role: "Layout auth",
    fonctionnement: "Structure épurée pour login/register"
  },

  {
    id: "auth-login",
    type: "page",
    label: "📄 login/page.tsx",
    path: "/app/auth/login/page.tsx",
    parentId: "auth",
    role: "Page de connexion",
    fonctionnement: "Formulaire de connexion (Better Auth)"
  },

  {
    id: "auth-register",
    type: "page",
    label: "📄 register/page.tsx",
    path: "/app/auth/register/page.tsx",
    parentId: "auth",
    role: "Page d'inscription",
    fonctionnement: "Formulaire d'inscription"
  },

  {
    id: "auth-forgot",
    type: "page",
    label: "📄 forgot-password/page.tsx",
    path: "/app/auth/forgot-password/page.tsx",
    parentId: "auth",
    role: "Page mot de passe oublié",
    fonctionnement: "Formulaire de réinitialisation"
  },

  {
    id: "auth-reset",
    type: "page",
    label: "📄 reset-password/[token]/page.tsx",
    path: "/app/auth/reset-password/[token]/page.tsx",
    parentId: "auth",
    role: "Page validation reset",
    fonctionnement: "Nouveau mot de passe avec token"
  },

  {
    id: "auth-verify",
    type: "page",
    label: "📄 verify-email/[token]/page.tsx",
    path: "/app/auth/verify-email/[token]/page.tsx",
    parentId: "auth",
    role: "Page vérification email",
    fonctionnement: "Validation du token d'email (Better Auth)"
  },

  // ==================== CLIENT ROUTES (Dashboard) ====================
  {
    id: "client",
    type: "layout",
    label: "📁 client",
    path: "/app/client",
    parentId: "app",
    role: "Espace client",
    fonctionnement: "Layout avec sidebar, authentification requise (middleware)"
  },

  {
    id: "client-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/client/layout.tsx",
    parentId: "client",
    role: "Layout client",
    fonctionnement: "Sidebar, header, navigation client",
    import: ["@/components/client/Sidebar", "@/components/client/Header"]
  },

  {
    id: "client-index",
    type: "page",
    label: "📄 page.tsx",
    path: "/app/client/page.tsx",
    parentId: "client",
    role: "Dashboard client",
    fonctionnement: "Résumé: commandes, favoris, profil"
  },

  {
    id: "client-profile",
    type: "page",
    label: "📄 profile/page.tsx",
    path: "/app/client/profile/page.tsx",
    parentId: "client",
    role: "Profil client",
    fonctionnement: "Gestion des informations personnelles"
  },

  {
    id: "client-orders",
    type: "page",
    label: "📄 orders/page.tsx",
    path: "/app/client/orders/page.tsx",
    parentId: "client",
    role: "Historique commandes",
    fonctionnement: "Liste des commandes passées"
  },

  {
    id: "client-orders-detail",
    type: "page",
    label: "📄 orders/[id]/page.tsx",
    path: "/app/client/orders/[id]/page.tsx",
    parentId: "client",
    role: "Détail commande",
    fonctionnement: "Détail d'une commande spécifique"
  },

  {
    id: "client-favorites",
    type: "page",
    label: "📄 favorites/page.tsx",
    path: "/app/client/favorites/page.tsx",
    parentId: "client",
    role: "Produits favoris",
    fonctionnement: "Liste des produits mis en favoris"
  },

  {
    id: "client-addresses",
    type: "page",
    label: "📄 addresses/page.tsx",
    path: "/app/client/addresses/page.tsx",
    parentId: "client",
    role: "Adresses de livraison",
    fonctionnement: "Gestion des adresses"
  },

  // ==================== PRO ROUTES (Dashboard Pro) ====================
  {
    id: "pro",
    type: "layout",
    label: "📁 pro",
    path: "/app/pro",
    parentId: "app",
    role: "Espace professionnel",
    fonctionnement: "Layout avec sidebar pro, authentification requise"
  },

  {
    id: "pro-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/pro/layout.tsx",
    parentId: "pro",
    role: "Layout pro",
    fonctionnement: "Sidebar pro, dashboard spécifique"
  },

  {
    id: "pro-index",
    type: "page",
    label: "📄 page.tsx",
    path: "/app/pro/page.tsx",
    parentId: "pro",
    role: "Dashboard pro",
    fonctionnement: "Statistiques, ventes, commandes"
  },

  {
    id: "pro-products",
    type: "page",
    label: "📄 products/page.tsx",
    path: "/app/pro/products/page.tsx",
    parentId: "pro",
    role: "Gestion produits",
    fonctionnement: "CRUD produits, images (Sharp)"
  },

  {
    id: "pro-products-create",
    type: "page",
    label: "📄 products/create/page.tsx",
    path: "/app/pro/products/create/page.tsx",
    parentId: "pro",
    role: "Création produit",
    fonctionnement: "Formulaire de création (React Hook Form + Zod)"
  },

  {
    id: "pro-products-edit",
    type: "page",
    label: "📄 products/[id]/edit/page.tsx",
    path: "/app/pro/products/[id]/edit/page.tsx",
    parentId: "pro",
    role: "Édition produit",
    fonctionnement: "Formulaire d'édition avec données existantes"
  },

  {
    id: "pro-categories",
    type: "page",
    label: "📄 categories/page.tsx",
    path: "/app/pro/categories/page.tsx",
    parentId: "pro",
    role: "Gestion catégories",
    fonctionnement: "CRUD catégories avec Drag & Drop (DND Kit)"
  },

  {
    id: "pro-orders",
    type: "page",
    label: "📄 orders/page.tsx",
    path: "/app/pro/orders/page.tsx",
    parentId: "pro",
    role: "Gestion commandes",
    fonctionnement: "Liste des commandes, statuts"
  },

  {
    id: "pro-orders-detail",
    type: "page",
    label: "📄 orders/[id]/page.tsx",
    path: "/app/pro/orders/[id]/page.tsx",
    parentId: "pro",
    role: "Détail commande pro",
    fonctionnement: "Détail, mise à jour statut"
  },

  {
    id: "pro-clients",
    type: "page",
    label: "📄 clients/page.tsx",
    path: "/app/pro/clients/page.tsx",
    parentId: "pro",
    role: "Gestion clients",
    fonctionnement: "Liste des clients, historique"
  },

  {
    id: "pro-inventory",
    type: "page",
    label: "📄 inventory/page.tsx",
    path: "/app/pro/inventory/page.tsx",
    parentId: "pro",
    role: "Gestion stock",
    fonctionnement: "Gestion des stocks, alertes"
  },

  {
    id: "pro-settings",
    type: "page",
    label: "📄 settings/page.tsx",
    path: "/app/pro/settings/page.tsx",
    parentId: "pro",
    role: "Paramètres pro",
    fonctionnement: "Configuration boutique, horaires"
  },

  // ==================== ADMIN ROUTES ====================
  {
    id: "admin",
    type: "layout",
    label: "📁 admin",
    path: "/app/admin",
    parentId: "app",
    role: "Espace admin",
    fonctionnement: "Layout admin avec sidebar, authentification admin requise"
  },

  {
    id: "admin-layout",
    type: "layout",
    label: "📄 layout.tsx",
    path: "/app/admin/layout.tsx",
    parentId: "admin",
    role: "Layout admin",
    fonctionnement: "Sidebar admin, rôle super-admin"
  },

  {
    id: "admin-index",
    type: "page",
    label: "📄 page.tsx",
    path: "/app/admin/page.tsx",
    parentId: "admin",
    role: "Dashboard admin",
    fonctionnement: "Statistiques globales, utilisateurs"
  },

  {
    id: "admin-users",
    type: "page",
    label: "📄 users/page.tsx",
    path: "/app/admin/users/page.tsx",
    parentId: "admin",
    role: "Gestion utilisateurs",
    fonctionnement: "CRUD utilisateurs, rôles (Better Auth)"
  },

  {
    id: "admin-users-edit",
    type: "page",
    label: "📄 users/[id]/edit/page.tsx",
    path: "/app/admin/users/[id]/edit/page.tsx",
    parentId: "admin",
    role: "Édition utilisateur",
    fonctionnement: "Modification rôle, infos"
  },

  {
    id: "admin-system",
    type: "page",
    label: "📄 system/page.tsx",
    path: "/app/admin/system/page.tsx",
    parentId: "admin",
    role: "Paramètres système",
    fonctionnement: "Configuration globale"
  },

  // ==================== API ROUTES (Next.js API Routes) ====================
  {
    id: "api",
    type: "api",
    label: "📁 api",
    path: "/app/api",
    parentId: "app",
    role: "API Routes",
    fonctionnement: "Endpoints API (moins utilisés avec Server Actions)"
  },

  {
    id: "api-auth",
    type: "api",
    label: "📁 auth",
    path: "/app/api/auth",
    parentId: "api",
    role: "Auth API",
    fonctionnement: "Endpoint Better Auth"
  },

  {
    id: "api-auth-route",
    type: "api",
    label: "📄 [...all]/route.ts",
    path: "/app/api/auth/[...all]/route.ts",
    parentId: "api-auth",
    role: "Route Better Auth",
    fonctionnement: "Gère toutes les routes d'authentification",
    import: ["better-auth"]
  },

  {
    id: "api-products",
    type: "api",
    label: "📄 products/route.ts",
    path: "/app/api/products/route.ts",
    parentId: "api",
    role: "API produits",
    fonctionnement: "GET / POST produits"
  },

  {
    id: "api-products-detail",
    type: "api",
    label: "📄 products/[id]/route.ts",
    path: "/app/api/products/[id]/route.ts",
    parentId: "api",
    role: "API produit détail",
    fonctionnement: "GET / PUT / DELETE produit"
  },

  {
    id: "api-orders",
    type: "api",
    label: "📄 orders/route.ts",
    path: "/app/api/orders/route.ts",
    parentId: "api",
    role: "API commandes",
    fonctionnement: "GET / POST commandes"
  },

  {
    id: "api-upload",
    type: "api",
    label: "📄 upload/route.ts",
    path: "/app/api/upload/route.ts",
    parentId: "api",
    role: "API upload",
    fonctionnement: "Upload d'images avec Sharp"
  },

  // ==================== COMPONENTS ====================
  {
    id: "components",
    type: "composant",
    label: "📁 components",
    path: "/components",
    parentId: "root",
    role: "Dossier des composants UI"
  },

  {
    id: "components-ui",
    type: "composant",
    label: "📁 ui",
    path: "/components/ui",
    parentId: "components",
    role: "Composants ShadCN",
    fonctionnement: "Composants de base (Button, Dialog, etc.)",
    export: ["Button", "Card", "Dialog", "DropdownMenu", "Input", "Label", "Select", "Sheet", "Table", "Toast"]
  },

  {
    id: "components-public",
    type: "composant",
    label: "📁 public",
    path: "/components/public",
    parentId: "components",
    role: "Composants publics",
    fonctionnement: "Header, Footer, Hero, ProductCard, CategoryCard"
  },

  {
    id: "components-client",
    type: "composant",
    label: "📁 client",
    path: "/components/client",
    parentId: "components",
    role: "Composants client",
    fonctionnement: "Sidebar, DashboardStats, OrderCard"
  },

  {
    id: "components-pro",
    type: "composant",
    label: "📁 pro",
    path: "/components/pro",
    parentId: "components",
    role: "Composants pro",
    fonctionnement: "ProductForm, CategoryDragDrop, InventoryTable"
  },

  {
    id: "components-admin",
    type: "composant",
    label: "📁 admin",
    path: "/components/admin",
    parentId: "components",
    role: "Composants admin",
    fonctionnement: "UserTable, SystemConfig"
  },

  {
    id: "components-shared",
    type: "composant",
    label: "📁 shared",
    path: "/components/shared",
    parentId: "components",
    role: "Composants partagés",
    fonctionnement: "LoadingSpinner, EmptyState, ErrorBoundary"
  },

  {
    id: "components-forms",
    type: "composant",
    label: "📁 forms",
    path: "/components/forms",
    parentId: "components",
    role: "Composants formulaires",
    fonctionnement: "FormInput, FormSelect, FormTextarea, FormCheckbox"
  },

  // ==================== LIB & UTILS ====================
  {
    id: "lib",
    type: "lib",
    label: "📁 lib",
    path: "/lib",
    parentId: "root",
    role: "Bibliothèques internes"
  },

  {
    id: "lib-prisma",
    type: "lib",
    label: "📄 prisma.ts",
    path: "/lib/prisma.ts",
    parentId: "lib",
    role: "Client Prisma",
    fonctionnement: "Singleton PrismaClient",
    export: ["prisma"]
  },

  {
    id: "lib-auth",
    type: "lib",
    label: "📄 auth.ts",
    path: "/lib/auth.ts",
    parentId: "lib",
    role: "Configuration Better Auth",
    fonctionnement: "Setup de Better Auth avec Prisma adapter",
    import: ["better-auth", "@better-auth/prisma-adapter"],
    export: ["auth", "authClient"]
  },

  {
    id: "lib-safe-action",
    type: "lib",
    label: "📄 safe-action.ts",
    path: "/lib/safe-action.ts",
    parentId: "lib",
    role: "Configuration Safe Actions",
    fonctionnement: "createSafeActionClient avec auth intégré",
    import: ["next-safe-action"]
  },

  {
    id: "lib-validations",
    type: "lib",
    label: "📁 validations",
    path: "/lib/validations",
    parentId: "lib",
    role: "Schémas Zod",
    fonctionnement: "Tous les schémas de validation"
  },

  {
    id: "lib-validations-product",
    type: "schema",
    label: "📄 product.ts",
    path: "/lib/validations/product.ts",
    parentId: "lib-validations",
    role: "Schéma produit",
    fonctionnement: "productSchema, createProductSchema, updateProductSchema",
    export: ["productSchema"]
  },

  {
    id: "lib-validations-user",
    type: "schema",
    label: "📄 user.ts",
    path: "/lib/validations/user.ts",
    parentId: "lib-validations",
    role: "Schéma utilisateur",
    export: ["userSchema", "registerSchema", "loginSchema"]
  },

  {
    id: "lib-validations-order",
    type: "schema",
    label: "📄 order.ts",
    path: "/lib/validations/order.ts",
    parentId: "lib-validations",
    role: "Schéma commande",
    export: ["orderSchema", "orderStatusSchema"]
  },

  {
    id: "lib-utils",
    type: "utils",
    label: "📁 utils",
    path: "/lib/utils",
    parentId: "lib",
    role: "Fonctions utilitaires"
  },

  {
      id: "lib-utils-format",
      type: "utils",
      label: "📄 format.ts",
      path: "/lib/utils/format.ts",
      role: "Formattage",
      fonctionnement: "formatPrice, formatDate, formatNumber",
      import: ["date-fns", "date-fns-tz"],
      parentId: null
  },

  {
      id: "lib-utils-api",
      type: "utils",
      label: "📄 api.ts",
      path: "/lib/utils/api.ts",
      role: "Utilitaires API",
      fonctionnement: "apiHandler, errorHandler",
      parentId: null
  },

  {
      id: "lib-utils-file",
      type: "utils",
      label: "📄 file.ts",
      path: "/lib/utils/file.ts",
      role: "Gestion fichiers",
      fonctionnement: "uploadImage, deleteImage, getImageUrl",
      import: ["sharp"],
      parentId: null
  },

  // ==================== STORE (Zustand) ====================
  {
    id: "store",
    type: "store",
    label: "📁 store",
    path: "/store",
    parentId: "root",
    role: "Gestion d'état Zustand"
  },

  {
      id: "store-cart",
      type: "store",
      label: "📄 cart.ts",
      path: "/store/cart.ts",
      role: "Store panier",
      fonctionnement: "Gestion du panier (ajout, retrait, quantité)",
      import: ["zustand"],
      parentId: null
  },

  {
      id: "store-auth",
      type: "store",
      label: "📄 auth.ts",
      path: "/store/auth.ts",
      role: "Store authentification",
      fonctionnement: "État utilisateur, session",
      parentId: null
  },

  {
      id: "store-theme",
      type: "store",
      label: "📄 theme.ts",
      path: "/store/theme.ts",
      role: "Store thème",
      fonctionnement: "Mode sombre/clair",
      parentId: null
  },

  {
      id: "store-favorites",
      type: "store",
      label: "📄 favorites.ts",
      path: "/store/favorites.ts",
      role: "Store favoris",
      fonctionnement: "Gestion des favoris",
      parentId: null
  },

  // ==================== HOOKS ====================
  {
    id: "hooks",
    type: "lib",
    label: "📁 hooks",
    path: "/hooks",
    parentId: "root",
    role: "Hooks personnalisés"
  },

  {
      id: "hooks-auth",
      type: "lib",
      label: "📄 useAuth.ts",
      path: "/hooks/useAuth.ts",
      role: "Hook authentification",
      fonctionnement: "useSession, useLogin, useRegister",
      parentId: null
  },

  {
      id: "hooks-cart",
      type: "lib",
      label: "📄 useCart.ts",
      path: "/hooks/useCart.ts",
      role: "Hook panier",
      fonctionnement: "Utilisation du store cart",
      parentId: null
  },

  {
      id: "hooks-products",
      type: "lib",
      label: "📄 useProducts.ts",
      path: "/hooks/useProducts.ts",
      role: "Hook produits",
      fonctionnement: "useProducts, useProduct, useCreateProduct",
      import: ["@tanstack/react-query"],
      parentId: null
  },

  {
      id: "hooks-window",
      type: "lib",
      label: "📄 useWindowSize.ts",
      path: "/hooks/useWindowSize.ts",
      role: "Hook responsive",
      parentId: null
  },

  // ==================== TYPES ====================
  {
    id: "types",
    type: "lib",
    label: "📁 types",
    path: "/types",
    parentId: "root",
    role: "Types TypeScript globaux"
  },

  {
      id: "types-index",
      type: "lib",
      label: "📄 index.ts",
      path: "/types/index.ts",
      role: "Types principaux",
      export: ["User", "Product", "Category", "Order", "Address"],
      parentId: null
  },

  {
      id: "types-better-auth",
      type: "lib",
      label: "📄 auth.ts",
      path: "/types/auth.ts",
      role: "Types Better Auth",
      import: ["better-auth"],
      parentId: null
  },

  // ==================== MIDDLEWARE ====================
  {
    id: "middleware",
    type: "middleware",
    label: "📄 middleware.ts",
    path: "/middleware.ts",
    parentId: "root",
    role: "Middleware Next.js",
    fonctionnement: "Protection des routes (client, pro, admin) avec Better Auth"
  },

  // ==================== PRISMA ====================
  {
    id: "prisma-root",
    type: "config",
    label: "📁 prisma",
    path: "/prisma",
    parentId: "root",
    role: "Dossier Prisma"
  },

  {
    id: "prisma-schema",
    type: "config",
    label: "📄 schema.prisma",
    path: "/prisma/schema.prisma",
    parentId: "prisma-root",
    role: "Schéma Prisma",
    fonctionnement: "Modèles (User, Product, Category, Order, Address)"
  },

  {
    id: "prisma-seed",
    type: "config",
    label: "📄 seed.ts",
    path: "/prisma/seed.ts",
    parentId: "prisma-root",
    role: "Script de seeding",
    fonctionnement: "Données initiales pour le développement"
  },

  // ==================== CONFIGURATIONS ====================
  {
    id: "config-next",
    type: "config",
    label: "📄 next.config.ts",
    path: "/next.config.ts",
    parentId: "root",
    role: "Configuration Next.js",
    fonctionnement: "Images, rewrites, redirects, webpack"
  },

  {
    id: "config-tailwind",
    type: "config",
    label: "📄 tailwind.config.ts",
    path: "/tailwind.config.ts",
    parentId: "root",
    role: "Configuration Tailwind"
  },

  {
    id: "config-postcss",
    type: "config",
    label: "📄 postcss.config.mjs",
    path: "/postcss.config.mjs",
    parentId: "root",
    role: "Configuration PostCSS"
  },

  {
    id: "config-ts",
    type: "config",
    label: "📄 tsconfig.json",
    path: "/tsconfig.json",
    parentId: "root",
    role: "Configuration TypeScript",
    fonctionnement: "Paths, strict, target"
  },

  {
    id: "config-env",
    type: "config",
    label: "📄 .env.local",
    path: "/.env.local",
    parentId: "root",
    role: "Variables d'environnement",
    fonctionnement: "DATABASE_URL, BETTER_AUTH_SECRET, etc."
  },

  // ==================== SCRIPTS ====================
  {
    id: "scripts",
    type: "utils",
    label: "📁 scripts",
    path: "/scripts",
    parentId: "root",
    role: "Scripts utilitaires"
  },

  {
      id: "scripts-sitemap",
      type: "utils",
      label: "📄 sitemap.ts",
      path: "/scripts/sitemap.ts",
      role: "Génération sitemap",
      fonctionnement: "Script pour next-sitemap",
      parentId: null
  },

  // ==================== PUBLIC ====================
  {
    id: "public-assets",
    type: "utils",
    label: "📁 public",
    path: "/public",
    parentId: "root",
    role: "Assets publics"
  },

  {
    id: "public-images",
    type: "utils",
    label: "📁 images",
    path: "/public/images",
    parentId: "public-assets",
    role: "Images statiques"
  },

  {
    id: "public-favicon",
    type: "utils",
    label: "📄 favicon.ico",
    path: "/public/favicon.ico",
    parentId: "public-assets",
    role: "Favicon"
  },

  {
    id: "public-robots",
    type: "utils",
    label: "📄 robots.txt",
    path: "/public/robots.txt",
    parentId: "public-assets",
    role: "Robots SEO"
  },

  // ==================== TESTS ====================
  {
    id: "tests",
    type: "utils",
    label: "📁 __tests__",
    path: "/__tests__",
    parentId: "root",
    role: "Tests unitaires"
  }
];

// Organiser les fichiers par type pour une meilleure visualisation
export const filesByType = files.reduce((acc, file) => {
  if (!acc[file.type]) acc[file.type] = [];
  acc[file.type].push(file);
  return acc;
}, {} as Record<string, File[]>);

// Les fichiers organisés par type
export const filesByCategory = {
  // Layouts et Pages
  layouts: files.filter(f => f.type === 'layout' || f.type === 'page'),
  
  // Composants UI
  uiComponents: files.filter(f => f.type === 'composant'),
  
  // API Routes
  apiRoutes: files.filter(f => f.type === 'api'),
  
  // Configuration et Logique
  config: files.filter(f => f.type === 'config' || f.type === 'lib' || f.type === 'utils'),
  
  // Store et Hooks
  stateManagement: files.filter(f => f.type === 'store' || f.type === 'lib' && f.path.includes('/hooks')),
  
  // Schémas et Types
  schemas: files.filter(f => f.type === 'schema' || f.type === 'lib' && f.path.includes('/types'))
};

// Compter les fichiers par type
export const fileStats = {
  total: files.length,
  byType: files.reduce((acc, file) => {
    acc[file.type] = (acc[file.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
};

console.log(`📊 Architecture: ${files.length} fichiers dans food-brand`);
console.log(`📁 Types: ${Object.keys(filesByType).join(', ')}`);