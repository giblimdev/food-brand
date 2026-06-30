// app/r&d/senario/page.tsx
'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  User,
  Building2,
  Utensils,
  Sandwich,
  Users,
  Shield,
  Key,
  Settings,
  Package,
  ShoppingCart,
  Truck,
  CreditCard,
  Sparkles,
  Wrench,
  BookOpen,
  Database,
  FileCode,
  Layers,
  Link2,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  ChevronRight,
  List,
  Table,
  Hash,
  Type,
  Calendar,
  Grid,
  Copy,
  Check,
  Eye,
  Code2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Heart,
  Share2,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Filter,
  SortAsc,
  RefreshCw,
  Zap,
  Rocket,
  Award,
  Crown,
  Flag,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Cpu,
  HardDrive,
  Cloud,
  Wifi,
  Bluetooth,
  Sun,
  Moon,
  EyeOff,
  Lock,
  Unlock,
  Fingerprint,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
  Tv,
  Radio,
  Headphones,
  Speaker,
  Mic,
  Camera,
  Video,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  ExternalLink,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Printer,
  DownloadCloud,
  UploadCloud,
  Save,
  Bookmark,
  Bell,
  BellOff,
  Timer,
  AlarmClock,
  Coffee,
  Pizza,
  Cake,
  Cookie,
  IceCream,
  Apple,
  Grape,
  Cherry,
  Banana,
  Carrot,
  Salad,
  Donut,
  Croissant,
  Egg,
  Milk,
  Fish,
  Shrimp,
  Beer,
  Wine,
  Droplet,
  Flame,
  Snowflake,
  Wind,
  CloudRain,
  CloudSnow,
  CloudLightning,
  SunMedium,
  MoonStar,
  Sparkle,
  Wand2,
  Brush,
  Pencil,
  Eraser,
  Scissors,
  Ruler,
  Compass,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Diamond,
  Trophy,
  Medal,
  Ribbon,
  Gift,
  Box,
  Package2,
  Plane,
  Ship,
  Train,
  Bus,
  Car,
  Bike,
  Scooter,
  Dumbbell,
  Brain,
  BrainCircuit,
  HeartPulse,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  Hospital,
  Ambulance,
  BriefcaseMedical,
  Microscope,
  TestTube,
  Atom,
  Dna,
  Beaker,
} from 'lucide-react'

// ============================================
// TYPES
// ============================================

interface Scenario {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: 'auth' | 'dev' | 'domain' | 'epic' | 'feature'
  steps: string[]
  models: string[]
  relations: string[]
  useCase: string
  priority: 'critical' | 'high' | 'medium' | 'low'
}

// ============================================
// SCÉNARIOS
// ============================================

const scenarios: Scenario[] = [
  // ============================================
  // SCÉNARIOS AUTH
  // ============================================
  {
    id: 'auth-register',
    title: 'Inscription utilisateur',
    description: 'Un nouvel utilisateur crée un compte sur la plateforme',
    icon: <User className="w-5 h-5 text-blue-500" />,
    category: 'auth',
    priority: 'critical',
    useCase: 'Un client potentiel s\'inscrit pour accéder aux fonctionnalités',
    models: ['User', 'Account', 'VerificationToken'],
    relations: ['User → Account (OAuth)', 'User → VerificationToken (email)'],
    steps: [
      '1. L\'utilisateur remplit le formulaire d\'inscription',
      '2. Création d\'un User avec role = CLIENT',
      '3. Envoi d\'un email de vérification → VerificationToken',
      '4. L\'utilisateur clique sur le lien de vérification',
      '5. emailVerified = true',
      '6. Connexion automatique (Session)'
    ]
  },
  {
    id: 'auth-login',
    title: 'Connexion utilisateur',
    description: 'Un utilisateur existant se connecte à son compte',
    icon: <Key className="w-5 h-5 text-yellow-500" />,
    category: 'auth',
    priority: 'critical',
    useCase: 'Un utilisateur s\'authentifie pour accéder à son espace',
    models: ['User', 'Session'],
    relations: ['User → Session (One-to-Many)'],
    steps: [
      '1. L\'utilisateur entre email/mot de passe',
      '2. Vérification des identifiants dans User',
      '3. Création d\'une Session avec sessionToken',
      '4. L\'utilisateur est connecté',
      '5. La session expire à la date définie'
    ]
  },
  {
    id: 'auth-oauth',
    title: 'Connexion via OAuth (Google/GitHub)',
    description: 'Un utilisateur se connecte via un fournisseur tiers',
    icon: <Shield className="w-5 h-5 text-indigo-500" />,
    category: 'auth',
    priority: 'high',
    useCase: 'Connexion rapide sans mot de passe',
    models: ['User', 'Account'],
    relations: ['User → Account (One-to-Many)'],
    steps: [
      '1. L\'utilisateur clique sur "Se connecter avec Google"',
      '2. Redirection vers Google OAuth',
      '3. Retour avec provider, providerAccountId',
      '4. Création d\'un Account lié au User',
      '5. Si User n\'existe pas, création automatique',
      '6. Connexion réussie'
    ]
  },
  {
    id: 'auth-reset-password',
    title: 'Réinitialisation du mot de passe',
    description: 'Un utilisateur oublié son mot de passe',
    icon: <Mail className="w-5 h-5 text-red-500" />,
    category: 'auth',
    priority: 'high',
    useCase: 'Un utilisateur ne parvient pas à se connecter',
    models: ['User', 'VerificationToken'],
    relations: ['User → VerificationToken (email)'],
    steps: [
      '1. L\'utilisateur demande la réinitialisation',
      '2. Création d\'un VerificationToken',
      '3. Email envoyé avec le token',
      '4. L\'utilisateur clique sur le lien',
      '5. Vérification du token',
      '6. Formulaire de nouveau mot de passe',
      '7. Mise à jour du User'
    ]
  },
  {
    id: 'auth-change-role',
    title: 'Changement de rôle utilisateur',
    description: 'Un administrateur change le rôle d\'un utilisateur',
    icon: <Settings className="w-5 h-5 text-purple-500" />,
    category: 'auth',
    priority: 'medium',
    useCase: 'Un utilisateur devient BUSINESS ou COLLABORATOR',
    models: ['User'],
    relations: [],
    steps: [
      '1. L\'admin accède à la liste des utilisateurs',
      '2. Sélectionne un utilisateur',
      '3. Change le role (CLIENT → BUSINESS)',
      '4. Les permissions sont mises à jour',
      '5. L\'utilisateur a accès aux nouvelles fonctionnalités'
    ]
  },

  // ============================================
  // SCÉNARIOS DEV
  // ============================================
  {
    id: 'dev-epic-create',
    title: 'Création d\'un Epic',
    description: 'Un développeur crée une nouvelle thématique',
    icon: <Layers className="w-5 h-5 text-purple-500" />,
    category: 'dev',
    priority: 'high',
    useCase: 'Organisation des fonctionnalités par thème',
    models: ['Epic', 'Feature'],
    relations: ['Epic → Feature (One-to-Many)'],
    steps: [
      '1. Le développeur définit le nom de l\'Epic',
      '2. Ajoute une description et des métadonnées (icon, color, emoji)',
      '3. L\'Epic est créé avec status = PLANNED',
      '4. Des Features peuvent être attachées à l\'Epic',
      '5. L\'Epic sert de catégorie pour les fonctionnalités'
    ]
  },
  {
    id: 'dev-feature-create',
    title: 'Création d\'une Feature',
    description: 'Un développeur crée une nouvelle fonctionnalité',
    icon: <Sparkles className="w-5 h-5 text-orange-500" />,
    category: 'dev',
    priority: 'critical',
    useCase: 'Suivi du développement des fonctionnalités',
    models: ['Feature', 'Epic', 'File'],
    relations: ['Feature → Epic (Many-to-One)', 'Feature → File (via fileIds)'],
    steps: [
      '1. Le développeur définit le titre et la description',
      '2. Associe l\'Epic correspondant',
      '3. Définit les personas concernés',
      '4. Définit le status et la priority',
      '5. Associe les fichiers (File) liés',
      '6. La Feature est suivie dans le sprint'
    ]
  },
  {
    id: 'dev-file-sync',
    title: 'Synchronisation des fichiers',
    description: 'Synchronisation des fichiers locaux avec la DB',
    icon: <FileCode className="w-5 h-5 text-orange-500" />,
    category: 'dev',
    priority: 'high',
    useCase: 'Suivi de l\'architecture des fichiers',
    models: ['File', 'Feature', 'Log'],
    relations: ['File → Feature (via featureIds)', 'File → Log (audit)'],
    steps: [
      '1. Scan des fichiers locaux',
      '2. Comparaison avec les fichiers en DB',
      '3. Détection des différences',
      '4. Mise à jour de la DB (File)',
      '5. Mise à jour du syncStatus',
      '6. Création d\'un Log pour audit'
    ]
  },
  {
    id: 'dev-schema-validate',
    title: 'Validation du schéma Prisma',
    description: 'Vérification de la cohérence du schéma',
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    category: 'dev',
    priority: 'high',
    useCase: 'Maintien de la qualité de la base de données',
    models: ['Schema', 'Model', 'Field', 'SchemaValidation'],
    relations: ['Schema → Model (One-to-Many)', 'Model → Field (One-to-Many)', 'Schema → SchemaValidation (One-to-Many)'],
    steps: [
      '1. Lecture du fichier schema.prisma',
      '2. Comparaison avec la DB réelle',
      '3. Détection des différences (tables, champs, relations)',
      '4. Création d\'une SchemaValidation',
      '5. Génération d\'un rapport (differences, errors, warnings)',
      '6. Proposition de migration'
    ]
  },
  {
    id: 'dev-log-audit',
    title: 'Audit des actions DevTools',
    description: 'Suivi de toutes les actions dans les DevTools',
    icon: <BookOpen className="w-5 h-5 text-slate-500" />,
    category: 'dev',
    priority: 'medium',
    useCase: 'Traçabilité et débogage',
    models: ['Log', 'Feature', 'File'],
    relations: ['Log → Feature (via featureId)', 'Log → File (via fileId)'],
    steps: [
      '1. Une action est effectuée (SCAN, CREATE, UPDATE, etc.)',
      '2. Un Log est créé avec la catégorie appropriée',
      '3. Les détails sont stockés en JSON',
      '4. Le status de l\'action est enregistré',
      '5. Les logs permettent de tracer les problèmes',
      '6. Consultation des logs pour déboguer'
    ]
  },

  // ============================================
  // SCÉNARIOS DOMAIN
  // ============================================
  {
    id: 'domain-brand-create',
    title: 'Création d\'une marque',
    description: 'Un utilisateur crée une marque alimentaire',
    icon: <Building2 className="w-5 h-5 text-blue-500" />,
    category: 'domain',
    priority: 'critical',
    useCase: 'Lancement d\'une marque sur la plateforme',
    models: ['Brand', 'BrandOwner', 'User'],
    relations: ['Brand → User (creator)', 'Brand → BrandOwner (propriétaires)'],
    steps: [
      '1. L\'utilisateur (User) crée une Brand',
      '2. Le User devient le créateur (createdById)',
      '3. Création automatique d\'un BrandOwner avec role = ADMIN',
      '4. D\'autres utilisateurs peuvent être ajoutés comme propriétaires',
      '5. La marque peut avoir plusieurs restaurants'
    ]
  },
  {
    id: 'domain-brand-add-owner',
    title: 'Ajout d\'un propriétaire à une marque',
    description: 'Un administrateur de marque ajoute un propriétaire',
    icon: <Users className="w-5 h-5 text-green-500" />,
    category: 'domain',
    priority: 'high',
    useCase: 'Gestion des droits sur la marque',
    models: ['BrandOwner', 'Brand', 'User'],
    relations: ['BrandOwner → Brand (Many-to-One)', 'BrandOwner → User (Many-to-One)'],
    steps: [
      '1. L\'admin de la marque sélectionne un utilisateur',
      '2. Définit le rôle (ADMIN, MANAGER, VIEWER)',
      '3. Création d\'un BrandOwner',
      '4. L\'utilisateur a maintenant accès à la marque',
      '5. Les permissions sont définies selon le rôle'
    ]
  },
  {
    id: 'domain-restaurant-create',
    title: 'Création d\'un restaurant',
    description: 'Un propriétaire crée un restaurant pour sa marque',
    icon: <Utensils className="w-5 h-5 text-red-500" />,
    category: 'domain',
    priority: 'high',
    useCase: 'Ajout d\'un nouveau point de vente',
    models: ['Restaurant', 'Brand', 'Recipe'],
    relations: ['Restaurant → Brand (Many-to-One)', 'Restaurant → Recipe (One-to-Many)'],
    steps: [
      '1. Le propriétaire accède à sa marque (Brand)',
      '2. Crée un Restaurant avec nom, adresse, téléphone',
      '3. Le restaurant est actif par défaut (isActive = true)',
      '4. Des Recettes peuvent être ajoutées au restaurant',
      '5. Les restaurants sont visibles sur la page de la marque'
    ]
  },
  {
    id: 'domain-recipe-create',
    title: 'Création d\'une recette',
    description: 'Un propriétaire crée une recette pour un restaurant',
    icon: <Sandwich className="w-5 h-5 text-amber-500" />,
    category: 'domain',
    priority: 'high',
    useCase: 'Ajout d\'un nouveau produit au menu',
    models: ['Recipe', 'Brand', 'Restaurant'],
    relations: ['Recipe → Brand (Many-to-One)', 'Recipe → Restaurant (Many-to-One)'],
    steps: [
      '1. Le propriétaire accède à un restaurant',
      '2. Crée une Recipe avec nom, description, prix',
      '3. Ajoute les ingrédients et instructions',
      '4. Définit le temps de préparation',
      '5. La recette est disponible (isAvailable = true)',
      '6. La recette apparaît dans le menu'
    ]
  },
  {
    id: 'domain-glossary-add',
    title: 'Ajout d\'un terme au glossaire',
    description: 'Un utilisateur ajoute une définition au glossaire',
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    category: 'domain',
    priority: 'low',
    useCase: 'Centralisation des définitions',
    models: ['Glossary', 'User'],
    relations: ['Glossary → User (creator)'],
    steps: [
      '1. Un utilisateur propose un terme',
      '2. Ajoute la définition',
      '3. Le terme est enregistré avec le créateur',
      '4. Les autres utilisateurs peuvent consulter le glossaire',
      '5. Le glossaire est partagé sur toute la plateforme'
    ]
  },
  {
    id: 'domain-recipe-search',
    title: 'Recherche de recettes',
    description: 'Un client recherche une recette par nom ou ingrédient',
    icon: <Search className="w-5 h-5 text-cyan-500" />,
    category: 'domain',
    priority: 'medium',
    useCase: 'Découverte de nouveaux produits',
    models: ['Recipe', 'Brand', 'Restaurant'],
    relations: ['Recipe → Brand', 'Recipe → Restaurant'],
    steps: [
      '1. Le client saisit un terme de recherche',
      '2. Recherche dans Recipe.name, description, ingredients',
      '3. Affichage des résultats avec Brand et Restaurant',
      '4. Le client peut voir la fiche détaillée',
      '5. Le client peut contacter le restaurant'
    ]
  },
  {
    id: 'domain-restaurant-management',
    title: 'Gestion des restaurants',
    description: 'Un propriétaire gère ses restaurants (CRUD)',
    icon: <Settings className="w-5 h-5 text-slate-500" />,
    category: 'domain',
    priority: 'high',
    useCase: 'Maintenance des informations',
    models: ['Restaurant', 'Brand', 'Recipe'],
    relations: ['Restaurant → Brand', 'Restaurant → Recipe'],
    steps: [
      '1. Le propriétaire liste ses restaurants',
      '2. Modifie les informations (nom, adresse, téléphone)',
      '3. Active/désactive un restaurant (isActive)',
      '4. Ajoute ou supprime des recettes',
      '5. Les modifications sont visibles en temps réel'
    ]
  },
  {
    id: 'domain-recipe-management',
    title: 'Gestion des recettes (CRUD)',
    description: 'Un propriétaire gère les recettes de ses restaurants',
    icon: <Edit className="w-5 h-5 text-amber-500" />,
    category: 'domain',
    priority: 'high',
    useCase: 'Mise à jour du menu',
    models: ['Recipe', 'Brand', 'Restaurant'],
    relations: ['Recipe → Brand', 'Recipe → Restaurant'],
    steps: [
      '1. Le propriétaire liste les recettes d\'un restaurant',
      '2. Modifie le prix, la description, les ingrédients',
      '3. Active/désactive une recette (isAvailable)',
      '4. Supprime une recette',
      '5. Les modifications sont visibles sur le menu'
    ]
  },
  {
    id: 'domain-brand-overview',
    title: 'Vue d\'ensemble de la marque',
    description: 'Visualisation de toutes les informations d\'une marque',
    icon: <Building2 className="w-5 h-5 text-indigo-500" />,
    category: 'domain',
    priority: 'medium',
    useCase: 'Tableau de bord de la marque',
    models: ['Brand', 'BrandOwner', 'Restaurant', 'Recipe', 'User'],
    relations: ['Brand → BrandOwner → User', 'Brand → Restaurant → Recipe'],
    steps: [
      '1. Le propriétaire accède au dashboard de la marque',
      '2. Voir les informations de la marque',
      '3. Voir la liste des propriétaires et leurs rôles',
      '4. Voir la liste des restaurants et recettes',
      '5. Statistiques: nombre de restaurants, recettes, etc.'
    ]
  },

  // ============================================
  // SCÉNARIOS EPIC & FEATURE
  // ============================================
  {
    id: 'epic-feature-planning',
    title: 'Planification des fonctionnalités',
    description: 'Gestion du backlog des fonctionnalités',
    icon: <List className="w-5 h-5 text-purple-500" />,
    category: 'epic',
    priority: 'high',
    useCase: 'Organisation du développement',
    models: ['Epic', 'Feature', 'Priority', 'Status'],
    relations: ['Epic → Feature (One-to-Many)'],
    steps: [
      '1. Le product owner crée des Epics',
      '2. Définit les Features pour chaque Epic',
      '3. Attribue une priorité (CRITICAL, HIGH, etc.)',
      '4. Définit le status (PLANNED, IN_PROGRESS, etc.)',
      '5. Planification dans les sprints',
      '6. Suivi de l\'avancement'
    ]
  },
  {
    id: 'feature-dependencies',
    title: 'Gestion des dépendances entre Features',
    description: 'Une feature dépend d\'une autre pour être implémentée',
    icon: <Link2 className="w-5 h-5 text-orange-500" />,
    category: 'feature',
    priority: 'medium',
    useCase: 'Ordonnancement du développement',
    models: ['Feature'],
    relations: ['Feature → Feature (dependencies)'],
    steps: [
      '1. Le développeur identifie les dépendances',
      '2. Ajoute les IDs dans dependencies',
      '3. Les features dépendantes sont bloquées',
      '4. La feature parente doit être terminée d\'abord',
      '5. Mise à jour automatique du status'
    ]
  },
  {
    id: 'feature-sprint-planning',
    title: 'Planification des sprints',
    description: 'Organisation des features dans les sprints',
    icon: <Calendar className="w-5 h-5 text-blue-500" />,
    category: 'feature',
    priority: 'high',
    useCase: 'Gestion de projet agile',
    models: ['Feature', 'Sprint'],
    relations: ['Feature → Sprint (via sprint field)'],
    steps: [
      '1. Le chef de projet définit les sprints',
      '2. Assigne les features aux sprints',
      '3. Définit le temps estimé (estimatedHours)',
      '4. Suivi de l\'avancement du sprint',
      '5. Ajustement des priorités'
    ]
  },
  {
    id: 'feature-assignment',
    title: 'Assignation des développeurs',
    description: 'Attribution des features aux développeurs',
    icon: <Users className="w-5 h-5 text-green-500" />,
    category: 'feature',
    priority: 'medium',
    useCase: 'Répartition des tâches',
    models: ['Feature', 'User'],
    relations: ['Feature → User (assignedTo)'],
    steps: [
      '1. Le chef de projet sélectionne une feature',
      '2. L\'assigne à un développeur (assignedTo)',
      '3. Le développeur commence à travailler',
      '4. Suivi du status (IN_PROGRESS)',
      '5. Validation et passage en DONE'
    ]
  }
]

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

function ScenarioPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'auth' | 'dev' | 'domain' | 'epic' | 'feature'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { value: 'all', label: '📚 Tous' },
    { value: 'auth', label: '🔐 Auth' },
    { value: 'dev', label: '🛠️ DevTools' },
    { value: 'domain', label: '📦 Domain' },
    { value: 'epic', label: '📁 Epics' },
    { value: 'feature', label: '📋 Features' },
  ]

  const filteredScenarios = scenarios.filter(s => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const priorityColors = {
    critical: 'border-red-500 bg-red-50 dark:bg-red-950/20',
    high: 'border-orange-500 bg-orange-50 dark:bg-orange-950/20',
    medium: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20',
    low: 'border-green-500 bg-green-50 dark:bg-green-950/20',
  }

  const priorityLabels = {
    critical: '🔴 Critique',
    high: '🟠 Haute',
    medium: '🟡 Moyenne',
    low: '🟢 Basse',
  }

  const categoryLabels = {
    auth: '🔐 Authentification',
    dev: '🛠️ DevTools',
    domain: '📦 Domain',
    epic: '📁 Epics',
    feature: '📋 Features',
  }

  const stats = {
    total: scenarios.length,
    byCategory: {
      auth: scenarios.filter(s => s.category === 'auth').length,
      dev: scenarios.filter(s => s.category === 'dev').length,
      domain: scenarios.filter(s => s.category === 'domain').length,
      epic: scenarios.filter(s => s.category === 'epic').length,
      feature: scenarios.filter(s => s.category === 'feature').length,
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                <Rocket className="w-8 h-8 text-orange-500" />
                Scénarios utilisateurs
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Tous les scénarios possibles basés sur le schéma Prisma
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline" className="gap-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <List className="w-3 h-3" />
                {stats.total} scénarios
              </Badge>
              <Badge variant="outline" className="gap-1 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                🔐 {stats.byCategory.auth}
              </Badge>
              <Badge variant="outline" className="gap-1 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300">
                🛠️ {stats.byCategory.dev}
              </Badge>
              <Badge variant="outline" className="gap-1 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                📦 {stats.byCategory.domain}
              </Badge>
            </div>
          </div>
        </header>

        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un scénario..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg 
                         bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.value as any)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Scénarios */}
        <div className="space-y-4">
          {filteredScenarios.length === 0 ? (
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="text-center py-12">
                <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  Aucun scénario trouvé
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredScenarios.map((scenario) => (
              <ScenarioCard key={scenario.id} scenario={scenario} priorityColors={priorityColors} priorityLabels={priorityLabels} categoryLabels={categoryLabels} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// COMPOSANT SCENARIO CARD
// ============================================

function ScenarioCard({ scenario, priorityColors, priorityLabels, categoryLabels }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={`border-l-4 ${priorityColors[scenario.priority]} shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800`}>
      <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {scenario.icon}
            </div>
            <div>
              <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                {scenario.title}
                <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                  {categoryLabels[scenario.category]}
                </Badge>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {scenario.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={`text-xs ${scenario.priority === 'critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                              scenario.priority === 'high' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                              scenario.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
              {priorityLabels[scenario.priority]}
            </Badge>
            <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
          <span className="font-medium">📌 Cas d'usage:</span> {scenario.useCase}
        </p>
      </CardHeader>

      {isOpen && (
        <CardContent className="pt-0">
          <Separator className="mb-4 bg-slate-200 dark:bg-slate-700" />

          {/* Modèles concernés */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
              <Table className="w-4 h-4 text-orange-500" />
              Modèles concernés
            </h4>
            <div className="flex flex-wrap gap-1">
              {scenario.models.map((model: string) => (
                <Badge key={model} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {model}
                </Badge>
              ))}
            </div>
          </div>

          {/* Relations */}
          {scenario.relations.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-orange-500" />
                Relations utilisées
              </h4>
              <div className="space-y-1">
                {scenario.relations.map((rel: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm">
                    <Link2 className="w-3 h-3 text-orange-400" />
                    <span className="font-mono text-slate-700 dark:text-slate-300">{rel}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Étapes */}
          <div>
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
              <List className="w-4 h-4 text-orange-500" />
              Étapes
            </h4>
            <div className="space-y-1">
              {scenario.steps.map((step: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm">
                  <span className="text-orange-500 font-medium">{idx + 1}.</span>
                  <span className="text-slate-700 dark:text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default ScenarioPage