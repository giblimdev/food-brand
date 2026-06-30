// app/r&d/features/page.tsx
import React from 'react';
import { files } from '../architectures/architectureData';
import {
  // Personas
  User,
  Briefcase,
  ShieldCheck,
  Code2,
  // Epic icons
  Key,
  Package,
  Users,
  ShoppingCart,
  Truck,
  CreditCard,
  Layout,
  Settings,
  Database,
  Bell,
  Search,
  BarChart3,
  FileCode,
  Palette,
  Network,
  Star,
  MapPin,
  Clock,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  RefreshCw,
  AlertCircle,
  Zap,
  Sparkles,
  Rocket,
  LucideIcon,
  Grip,
  FileText,
  Home,
  UserCog
} from 'lucide-react';

// ==================== TYPES ====================

type Persona = 'client' | 'pro' | 'admin' | 'developer';
type Epic = 
  | 'authentification' 
  | 'catalogue' 
  | 'panier-commande' 
  | 'livraison' 
  | 'paiement'
  | 'gestion-produits'
  | 'gestion-commandes'
  | 'gestion-utilisateurs'
  | 'gestion-stock'
  | 'seo-analytics'
  | 'ui-ux'
  | 'api-integration'
  | 'performances'
  | 'securite';
type Status = 'done' | 'in-progress' | 'planned' | 'blocked';

interface FeatureFile {
  id: string;
  label: string;
  path: string;
  type: string;
  role?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  epic: Epic;
  personas: Persona[];
  status: Status;
  priority: 'critical' | 'high' | 'medium' | 'low';
  files: FeatureFile[];
  dependencies?: string[];
  estimatedHours?: number;
  sprint?: string;
}

// ==================== CONFIGURATION ====================

const epicConfig: Record<Epic, { icon: LucideIcon; label: string; color: string }> = {
  authentification: { icon: Key, label: 'Authentification', color: 'indigo' },
  catalogue: { icon: Package, label: 'Catalogue', color: 'blue' },
  'panier-commande': { icon: ShoppingCart, label: 'Panier & Commande', color: 'orange' },
  livraison: { icon: Truck, label: 'Livraison', color: 'yellow' },
  paiement: { icon: CreditCard, label: 'Paiement', color: 'green' },
  'gestion-produits': { icon: Package, label: 'Gestion Produits', color: 'teal' },
  'gestion-commandes': { icon: ShoppingCart, label: 'Gestion Commandes', color: 'amber' },
  'gestion-utilisateurs': { icon: Users, label: 'Gestion Utilisateurs', color: 'purple' },
  'gestion-stock': { icon: Database, label: 'Gestion Stock', color: 'emerald' },
  'seo-analytics': { icon: BarChart3, label: 'SEO & Analytics', color: 'cyan' },
  'ui-ux': { icon: Palette, label: 'UI/UX Design', color: 'pink' },
  'api-integration': { icon: Network, label: 'API Integration', color: 'red' },
  performances: { icon: Zap, label: 'Performances', color: 'lime' },
  securite: { icon: ShieldCheck, label: 'Sécurité', color: 'rose' }
};

const personaConfig: Record<Persona, { icon: LucideIcon; label: string; color: string }> = {
  client: { icon: User, label: 'Client', color: 'blue' },
  pro: { icon: Briefcase, label: 'Professionnel', color: 'orange' },
  admin: { icon: ShieldCheck, label: 'Administrateur', color: 'red' },
  developer: { icon: Code2, label: 'Développeur', color: 'purple' }
};

const statusConfig: Record<Status, { icon: LucideIcon; label: string; color: string }> = {
  done: { icon: CheckCircle, label: 'Terminé', color: 'emerald' },
  'in-progress': { icon: RefreshCw, label: 'En cours', color: 'amber' },
  planned: { icon: AlertCircle, label: 'Planifié', color: 'blue' },
  blocked: { icon: AlertCircle, label: 'Bloqué', color: 'rose' }
};

const priorityConfig: Record<Feature['priority'], { label: string; color: string }> = {
  critical: { label: 'Critique', color: 'rose' },
  high: { label: 'Haute', color: 'red' },
  medium: { label: 'Moyenne', color: 'amber' },
  low: { label: 'Basse', color: 'emerald' }
};

// ==================== DONNÉES ====================

// Fonction utilitaire pour trouver des fichiers
const findFiles = (patterns: string[]): FeatureFile[] => {
  return files
    .filter(file => patterns.some(p => file.path.includes(p) || file.label.includes(p)))
    .map(file => ({
      id: file.id,
      label: file.label,
      path: file.path,
      type: file.type,
      role: file.role
    }))
    .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
};

const features: Feature[] = [
  // ==================== EPIC: AUTHENTIFICATION ====================
  {
    id: 'auth-login',
    title: 'Connexion / Inscription',
    description: 'Système d\'authentification complet avec email, mot de passe et OAuth (Google, GitHub)',
    epic: 'authentification',
    personas: ['client', 'pro', 'admin'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['auth/login', 'auth/register', 'better-auth', 'auth.ts']),
    estimatedHours: 8,
    sprint: 'Sprint 1'
  },
  {
    id: 'auth-roles',
    title: 'Gestion des rôles et permissions',
    description: 'Système de rôles (client, pro, admin) avec middleware de protection des routes',
    epic: 'authentification',
    personas: ['admin', 'developer'],
    status: 'done',
    priority: 'high',
    files: findFiles(['middleware', 'auth.ts', 'types/auth', 'admin/users']),
    dependencies: ['auth-login'],
    estimatedHours: 6,
    sprint: 'Sprint 2'
  },
  {
    id: 'auth-reset',
    title: 'Réinitialisation de mot de passe',
    description: 'Flow complet de réinitialisation avec email, token et formulaire sécurisé',
    epic: 'authentification',
    personas: ['client', 'pro', 'admin'],
    status: 'done',
    priority: 'medium',
    files: findFiles(['auth/forgot-password', 'auth/reset-password', 'auth/verify-email']),
    dependencies: ['auth-login'],
    estimatedHours: 4,
    sprint: 'Sprint 2'
  },

  // ==================== EPIC: CATALOGUE ====================
  {
    id: 'catalog-products',
    title: 'Catalogue de produits',
    description: 'Affichage des produits avec filtres, recherche, pagination et mise en page responsive',
    epic: 'catalogue',
    personas: ['client', 'pro'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['public/products', 'useProducts', 'ProductCard']),
    estimatedHours: 12,
    sprint: 'Sprint 3'
  },
  {
    id: 'catalog-categories',
    title: 'Navigation par catégories',
    description: 'Système de catégories hiérarchique avec affichage des produits associés',
    epic: 'catalogue',
    personas: ['client', 'pro'],
    status: 'done',
    priority: 'high',
    files: findFiles(['public/categories', 'CategoryCard', 'CategoryDragDrop']),
    dependencies: ['catalog-products'],
    estimatedHours: 6,
    sprint: 'Sprint 3'
  },
  {
    id: 'catalog-detail',
    title: 'Page produit détaillée',
    description: 'Fiche produit complète avec images, description, spécifications, avis et recommandations',
    epic: 'catalogue',
    personas: ['client', 'pro'],
    status: 'done',
    priority: 'high',
    files: findFiles(['public/products/[slug]', 'ProductDetail']),
    dependencies: ['catalog-products'],
    estimatedHours: 8,
    sprint: 'Sprint 3'
  },

  // ==================== EPIC: PANIER & COMMANDE ====================
  {
    id: 'cart-management',
    title: 'Gestion du panier',
    description: 'Ajout, suppression, modification des quantités avec persistance et calcul du total',
    epic: 'panier-commande',
    personas: ['client'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['store/cart', 'useCart', 'Cart']),
    dependencies: ['catalog-products'],
    estimatedHours: 8,
    sprint: 'Sprint 4'
  },
  {
    id: 'checkout',
    title: 'Processus de validation',
    description: 'Checkout multi-étapes avec récapitulatif, adresse de livraison et choix du mode de livraison',
    epic: 'panier-commande',
    personas: ['client'],
    status: 'in-progress',
    priority: 'critical',
    files: findFiles(['checkout', 'cart', 'addresses']),
    dependencies: ['cart-management'],
    estimatedHours: 10,
    sprint: 'Sprint 4'
  },

  // ==================== EPIC: LIVRAISON ====================
  {
    id: 'delivery-options',
    title: 'Modes de livraison',
    description: 'Configuration des modes de livraison (standard, express, retrait en magasin) et calcul des frais',
    epic: 'livraison',
    personas: ['client', 'pro', 'admin'],
    status: 'planned',
    priority: 'high',
    files: findFiles(['delivery', 'shipping', 'pro/settings']),
    dependencies: ['checkout'],
    estimatedHours: 6,
    sprint: 'Sprint 5'
  },
  {
    id: 'delivery-tracking',
    title: 'Suivi de livraison',
    description: 'Suivi en temps réel des commandes avec statuts et notifications',
    epic: 'livraison',
    personas: ['client', 'pro'],
    status: 'planned',
    priority: 'medium',
    files: findFiles(['orders', 'tracking', 'notifications']),
    dependencies: ['delivery-options'],
    estimatedHours: 8,
    sprint: 'Sprint 5'
  },

  // ==================== EPIC: PAIEMENT ====================
  {
    id: 'payment-methods',
    title: 'Moyens de paiement',
    description: 'Intégration des moyens de paiement (carte bancaire, PayPal, virement)',
    epic: 'paiement',
    personas: ['client', 'admin'],
    status: 'planned',
    priority: 'critical',
    files: findFiles(['payment', 'checkout', 'settings']),
    dependencies: ['checkout'],
    estimatedHours: 12,
    sprint: 'Sprint 6'
  },
  {
    id: 'payment-secure',
    title: 'Paiement sécurisé',
    description: 'Protocole de paiement sécurisé avec validation et conformité PCI-DSS',
    epic: 'paiement',
    personas: ['client', 'admin', 'developer'],
    status: 'planned',
    priority: 'critical',
    files: findFiles(['security', 'payment', 'middleware']),
    dependencies: ['payment-methods'],
    estimatedHours: 8,
    sprint: 'Sprint 6'
  },

  // ==================== EPIC: GESTION PRODUITS ====================
  {
    id: 'pro-products-crud',
    title: 'CRUD Produits',
    description: 'Création, modification, suppression et duplication des produits avec formulaire complet',
    epic: 'gestion-produits',
    personas: ['pro'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['pro/products', 'ProductForm', 'useProducts']),
    estimatedHours: 12,
    sprint: 'Sprint 7'
  },
  {
    id: 'pro-products-images',
    title: 'Gestion des images produits',
    description: 'Upload, optimisation (Sharp), recadrage et gestion des images multiples',
    epic: 'gestion-produits',
    personas: ['pro', 'developer'],
    status: 'done',
    priority: 'high',
    files: findFiles(['api/upload', 'file.ts', 'sharp', 'ProductImage']),
    dependencies: ['pro-products-crud'],
    estimatedHours: 6,
    sprint: 'Sprint 7'
  },
  {
    id: 'pro-categories-dnd',
    title: 'Gestion des catégories (Drag & Drop)',
    description: 'Réorganisation hiérarchique des catégories par glisser-déposer avec DND Kit',
    epic: 'gestion-produits',
    personas: ['pro'],
    status: 'done',
    priority: 'medium',
    files: findFiles(['pro/categories', 'CategoryDragDrop', 'dnd']),
    dependencies: ['pro-products-crud'],
    estimatedHours: 6,
    sprint: 'Sprint 8'
  },

  // ==================== EPIC: GESTION COMMANDES ====================
  {
    id: 'pro-orders-management',
    title: 'Gestion des commandes',
    description: 'Visualisation, filtrage et mise à jour des statuts des commandes',
    epic: 'gestion-commandes',
    personas: ['pro'],
    status: 'done',
    priority: 'high',
    files: findFiles(['pro/orders', 'useOrders', 'OrderTable']),
    estimatedHours: 8,
    sprint: 'Sprint 8'
  },
  {
    id: 'pro-orders-detail',
    title: 'Détail commande',
    description: 'Fiche détaillée d\'une commande avec historique et actions',
    epic: 'gestion-commandes',
    personas: ['pro'],
    status: 'done',
    priority: 'high',
    files: findFiles(['pro/orders/[id]', 'OrderDetail']),
    dependencies: ['pro-orders-management'],
    estimatedHours: 4,
    sprint: 'Sprint 8'
  },
  {
    id: 'pro-orders-export',
    title: 'Export des commandes',
    description: 'Export des commandes en CSV/PDF pour la comptabilité',
    epic: 'gestion-commandes',
    personas: ['pro', 'admin'],
    status: 'planned',
    priority: 'low',
    files: findFiles(['export', 'orders']),
    dependencies: ['pro-orders-management'],
    estimatedHours: 4,
    sprint: 'Sprint 9'
  },

  // ==================== EPIC: GESTION UTILISATEURS ====================
  {
    id: 'admin-users-crud',
    title: 'CRUD Utilisateurs',
    description: 'Gestion complète des utilisateurs avec recherche, filtres et actions groupées',
    epic: 'gestion-utilisateurs',
    personas: ['admin'],
    status: 'done',
    priority: 'high',
    files: findFiles(['admin/users', 'UserTable', 'useUsers']),
    estimatedHours: 8,
    sprint: 'Sprint 9'
  },
  {
    id: 'admin-users-roles',
    title: 'Gestion des rôles utilisateurs',
    description: 'Attribution et modification des rôles (client, pro, admin) avec audit',
    epic: 'gestion-utilisateurs',
    personas: ['admin'],
    status: 'done',
    priority: 'high',
    files: findFiles(['admin/users', 'auth.ts', 'roles']),
    dependencies: ['admin-users-crud', 'auth-roles'],
    estimatedHours: 4,
    sprint: 'Sprint 9'
  },

  // ==================== EPIC: GESTION STOCK ====================
  {
    id: 'pro-stock-management',
    title: 'Gestion des stocks',
    description: 'Suivi des quantités, alertes de stock bas et historique des mouvements',
    epic: 'gestion-stock',
    personas: ['pro'],
    status: 'in-progress',
    priority: 'high',
    files: findFiles(['pro/inventory', 'stock', 'ProductForm']),
    dependencies: ['pro-products-crud'],
    estimatedHours: 8,
    sprint: 'Sprint 10'
  },
  {
    id: 'pro-stock-alerts',
    title: 'Alertes de stock',
    description: 'Notifications automatiques lorsque les seuils de stock sont atteints',
    epic: 'gestion-stock',
    personas: ['pro'],
    status: 'planned',
    priority: 'medium',
    files: findFiles(['notifications', 'stock', 'settings']),
    dependencies: ['pro-stock-management'],
    estimatedHours: 4,
    sprint: 'Sprint 10'
  },

  // ==================== EPIC: UI/UX ====================
  {
    id: 'ui-components',
    title: 'Composants UI (ShadCN)',
    description: 'Bibliothèque complète de composants accessibles et réutilisables',
    epic: 'ui-ux',
    personas: ['developer'],
    status: 'done',
    priority: 'high',
    files: findFiles(['components/ui', 'shadcn']),
    estimatedHours: 16,
    sprint: 'Sprint 0'
  },
  {
    id: 'ui-theme',
    title: 'Système de thème',
    description: 'Mode clair/sombre, personnalisation des couleurs et typographie',
    epic: 'ui-ux',
    personas: ['client', 'pro', 'admin', 'developer'],
    status: 'done',
    priority: 'medium',
    files: findFiles(['theme.ts', 'tailwind.config', 'globals.css']),
    dependencies: ['ui-components'],
    estimatedHours: 4,
    sprint: 'Sprint 1'
  },
  {
    id: 'ui-animations',
    title: 'Animations (Framer Motion)',
    description: 'Animations fluides pour les transitions, interactions et feedbacks utilisateur',
    epic: 'ui-ux',
    personas: ['client', 'pro', 'admin'],
    status: 'done',
    priority: 'low',
    files: findFiles(['framer-motion', 'animations', 'motion']),
    dependencies: ['ui-components'],
    estimatedHours: 6,
    sprint: 'Sprint 2'
  },

  // ==================== EPIC: SEO & ANALYTICS ====================
  {
    id: 'seo-metadata',
    title: 'Métadonnées SEO',
    description: 'Optimisation des métadonnées, Open Graph, et structuration des données',
    epic: 'seo-analytics',
    personas: ['developer'],
    status: 'done',
    priority: 'medium',
    files: findFiles(['layout.tsx', 'metadata', 'head']),
    estimatedHours: 4,
    sprint: 'Sprint 3'
  },
  {
    id: 'seo-sitemap',
    title: 'Sitemap et robots.txt',
    description: 'Génération automatique du sitemap et configuration du robots.txt',
    epic: 'seo-analytics',
    personas: ['developer'],
    status: 'done',
    priority: 'medium',
    files: findFiles(['next-sitemap', 'sitemap', 'robots']),
    dependencies: ['seo-metadata'],
    estimatedHours: 2,
    sprint: 'Sprint 3'
  },

  // ==================== EPIC: API INTEGRATION ====================
  {
    id: 'api-auth',
    title: 'API Authentification',
    description: 'Endpoints d\'authentification, session et gestion des utilisateurs (Better Auth)',
    epic: 'api-integration',
    personas: ['developer'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['api/auth', 'better-auth', 'auth.ts']),
    estimatedHours: 8,
    sprint: 'Sprint 1'
  },
  {
    id: 'api-products',
    title: 'API Produits',
    description: 'CRUD des produits avec validation, sécurité et documentation',
    epic: 'api-integration',
    personas: ['developer'],
    status: 'done',
    priority: 'high',
    files: findFiles(['api/products', 'safe-action', 'product.ts']),
    dependencies: ['api-auth'],
    estimatedHours: 6,
    sprint: 'Sprint 3'
  },
  {
    id: 'api-orders',
    title: 'API Commandes',
    description: 'Gestion des commandes, statuts, historique avec validation',
    epic: 'api-integration',
    personas: ['developer'],
    status: 'done',
    priority: 'high',
    files: findFiles(['api/orders', 'order.ts']),
    dependencies: ['api-auth'],
    estimatedHours: 6,
    sprint: 'Sprint 4'
  },

  // ==================== EPIC: PERFORMANCES ====================
  {
    id: 'perf-optimization',
    title: 'Optimisation des performances',
    description: 'Lazy loading, code splitting, optimisation des images et caching',
    epic: 'performances',
    personas: ['developer'],
    status: 'in-progress',
    priority: 'high',
    files: findFiles(['next.config', 'dynamic', 'lazy', 'image']),
    estimatedHours: 10,
    sprint: 'Sprint 6'
  },
  {
    id: 'perf-monitoring',
    title: 'Monitoring des performances',
    description: 'Suivi des temps de chargement, Core Web Vitals et erreurs',
    epic: 'performances',
    personas: ['admin', 'developer'],
    status: 'planned',
    priority: 'medium',
    files: findFiles(['monitoring', 'analytics', 'sentry']),
    dependencies: ['perf-optimization'],
    estimatedHours: 6,
    sprint: 'Sprint 7'
  },

  // ==================== EPIC: SÉCURITÉ ====================
  {
    id: 'security-validation',
    title: 'Validation des données (Zod)',
    description: 'Validation centralisée des entrées avec Zod pour la sécurité',
    epic: 'securite',
    personas: ['developer'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['validations', 'zod', 'schemas']),
    estimatedHours: 6,
    sprint: 'Sprint 1'
  },
  {
    id: 'security-middleware',
    title: 'Middleware de sécurité',
    description: 'Protection des routes, authentification, CORS et rate limiting',
    epic: 'securite',
    personas: ['developer'],
    status: 'done',
    priority: 'critical',
    files: findFiles(['middleware', 'auth.ts', 'security']),
    dependencies: ['security-validation', 'auth-roles'],
    estimatedHours: 6,
    sprint: 'Sprint 2'
  },
  {
    id: 'security-audit',
    title: 'Audit de sécurité',
    description: 'Audit régulier des dépendances et pratiques de sécurité',
    epic: 'securite',
    personas: ['admin', 'developer'],
    status: 'planned',
    priority: 'high',
    files: findFiles(['security', 'audit', 'dependencies']),
    dependencies: ['security-middleware'],
    estimatedHours: 4,
    sprint: 'Sprint 8'
  }
];

// ==================== COMPOSANTS ====================

// Composant Badge
const Badge: React.FC<{ 
  icon?: LucideIcon; 
  label: string; 
  color: string;
  size?: 'sm' | 'md';
}> = ({ icon: Icon, label, color, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  const colors: Record<string, string> = {
    indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    orange: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    green: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    teal: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    cyan: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    pink: 'bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
    red: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    lime: 'bg-lime-50 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClasses} ${colors[color] || colors.slate}`}>
      {Icon && <Icon className={`${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'}`} />}
      {label}
    </span>
  );
};

// Composant PersonaBadge
const PersonaBadge: React.FC<{ persona: Persona }> = ({ persona }) => {
  const config = personaConfig[persona];
  return <Badge icon={config.icon} label={config.label} color={config.color} size="sm" />;
};

// Composant FeatureCard
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const epic = epicConfig[feature.epic];
  const status = statusConfig[feature.status];
  const priority = priorityConfig[feature.priority];
  const EpicIcon = epic.icon;
  const StatusIcon = status.icon;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-800">
      <div className="p-5">
        {/* En-tête */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg bg-${epic.color}-50 dark:bg-${epic.color}-900/20 shrink-0`}>
              <EpicIcon className={`w-5 h-5 text-${epic.color}-500`} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {feature.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <Badge icon={StatusIcon} label={status.label} color={status.color} size="sm" />
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-${priority.color}-50 text-${priority.color}-700 dark:bg-${priority.color}-900/30 dark:text-${priority.color}-400`}>
              {priority.label}
            </span>
          </div>
        </div>

        {/* Métadonnées */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge icon={epic.icon} label={epic.label} color={epic.color} size="sm" />
          {feature.personas.map((p) => (
            <PersonaBadge key={p} persona={p} />
          ))}
          {feature.sprint && (
            <Badge label={`📋 ${feature.sprint}`} color="slate" size="sm" />
          )}
          {feature.estimatedHours && (
            <Badge label={`⏱️ ${feature.estimatedHours}h`} color="slate" size="sm" />
          )}
        </div>

        {/* Fichiers */}
        {feature.files.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <div className="flex flex-wrap gap-1.5">
              {feature.files.slice(0, 6).map((file) => (
                <span
                  key={file.id}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 dark:bg-slate-700/50 rounded text-xs font-mono text-slate-600 dark:text-slate-400"
                >
                  <FileText className="w-3 h-3" />
                  {file.label}
                </span>
              ))}
              {feature.files.length > 6 && (
                <span className="text-xs text-slate-400 dark:text-slate-500 px-2 py-0.5">
                  +{feature.files.length - 6}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Dépendances */}
        {feature.dependencies && feature.dependencies.length > 0 && (
          <div className="mt-2 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            <span>Dépend de:</span>
            {feature.dependencies.map((dep, i) => (
              <span key={i} className="font-mono bg-slate-50 dark:bg-slate-700/50 px-1.5 py-0.5 rounded">
                {dep}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== PAGE PRINCIPALE ====================

function FeaturesPage() {
  // Groupement par Epic
  const groupedByEpic = features.reduce((acc, feature) => {
    if (!acc[feature.epic]) acc[feature.epic] = [];
    acc[feature.epic].push(feature);
    return acc;
  }, {} as Record<Epic, Feature[]>);

  // Statistiques
  const stats = {
    total: features.length,
    done: features.filter(f => f.status === 'done').length,
    inProgress: features.filter(f => f.status === 'in-progress').length,
    planned: features.filter(f => f.status === 'planned').length,
    blocked: features.filter(f => f.status === 'blocked').length,
    epics: Object.keys(groupedByEpic).length,
    personas: {
      client: features.filter(f => f.personas.includes('client')).length,
      pro: features.filter(f => f.personas.includes('pro')).length,
      admin: features.filter(f => f.personas.includes('admin')).length,
      developer: features.filter(f => f.personas.includes('developer')).length,
    },
    totalHours: features.reduce((acc, f) => acc + (f.estimatedHours || 0), 0)
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                Fonctionnalités
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Food Brand — {features.length} fonctionnalités organisées par Epic
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stats.total}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Total</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-emerald-200 dark:border-emerald-800">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.done}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">✅ Terminé</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-amber-200 dark:border-amber-800">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{stats.inProgress}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">🔄 En cours</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-blue-200 dark:border-blue-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.planned}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">📋 Planifié</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stats.epics}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">📁 Epics</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stats.totalHours}h</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">⏱️ Estimé</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {stats.personas.client + stats.personas.pro + stats.personas.admin}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">👥 Personas</div>
            </div>
          </div>
        </header>

        {/* Features par Epic */}
        {Object.entries(groupedByEpic).map(([epicKey, epicFeatures]) => {
          const epic = epicConfig[epicKey as Epic];
          const EpicIcon = epic.icon;
          const done = epicFeatures.filter(f => f.status === 'done').length;

          return (
            <section key={epicKey} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${epic.color}-50 dark:bg-${epic.color}-900/20`}>
                  <EpicIcon className={`w-5 h-5 text-${epic.color}-500`} />
                </div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {epic.label}
                </h2>
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  {done}/{epicFeatures.length} • {epicFeatures.reduce((acc, f) => acc + (f.estimatedHours || 0), 0)}h
                </span>
                <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${(done / epicFeatures.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {epicFeatures.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-400 dark:text-slate-500">
          <p>
            Food Brand • {features.length} fonctionnalités • {stats.epics} epics • 
            {stats.totalHours}h estimées • {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default FeaturesPage;