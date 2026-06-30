// app/r&d/devhelp/page.tsx

//type :  
/*role : */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



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
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sparkles,
  Database,
  FolderTree,
  FileCode,
  Upload,
  Download,
  CheckCircle,
  AlertCircle,
  GitBranch,
  ChevronRight,
  FileJson as FileJsonIcon,
  Database as DatabaseIcon,
  Layout as LayoutIcon,
  Link2,
  Layers,
  BookOpen,
  Settings,
  HardDrive as HardDriveIcon,
  Zap as ZapIcon,
  ArrowRight,
  Clock as ClockIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Tablet as TabletIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon,
  Tv as TvIcon,
  Speaker as SpeakerIcon,
  Headphones as HeadphonesIcon,
  Mic as MicIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Maximize2 as Maximize2Icon,
  Minimize2 as Minimize2Icon,
  X as XIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  ExternalLink as ExternalLinkIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  Move as MoveIcon,
  RotateCw as RotateCwIcon,
  RotateCcw as RotateCcwIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  Printer as PrinterIcon,
  DownloadCloud as DownloadCloudIcon,
  UploadCloud as UploadCloudIcon,
  Save as SaveIcon,
  Bookmark as BookmarkIcon,
  Bell as BellIcon,
  BellOff as BellOffIcon,
  Timer as TimerIcon,
  AlarmClock as AlarmClockIcon,
  Coffee as CoffeeIcon,
  Utensils as UtensilsIcon,
  Pizza as PizzaIcon,
  Cake as CakeIcon,
  Cookie as CookieIcon,
  IceCream as IceCreamIcon,
  Apple as AppleIcon,
  Grape as GrapeIcon,
  Banana as BananaIcon,
  Carrot as CarrotIcon,
  Salad as SaladIcon,
  Sandwich as SandwichIcon,
  Croissant as CroissantIcon,
  Egg as EggIcon,
  Milk as MilkIcon,
  Fish as FishIcon,
  Shrimp as ShrimpIcon,
  Beer as BeerIcon,
  Wine as WineIcon,
  Droplet as DropletIcon,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon,
  Wind as WindIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  SunMedium as SunMediumIcon,
  MoonStar as MoonStarIcon,
  Sparkle as SparkleIcon,
  Wand2 as Wand2Icon,
  Brush as BrushIcon,
  Pencil as PencilIcon,
  Eraser as EraserIcon,
  Scissors as ScissorsIcon,
  Ruler as RulerIcon,
  Compass as CompassIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Pentagon as PentagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  Trophy as TrophyIcon,
  Medal as MedalIcon,
  Ribbon as RibbonIcon,
  Gift as GiftIcon,
  Box as BoxIcon,
  Package2 as Package2Icon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Train as TrainIcon,
  Bus as BusIcon,
  Car as CarIcon,
  Bike as BikeIcon,
  Scooter as ScooterIcon,
  Brain as BrainIcon,
  BrainCircuit as BrainCircuitIcon,
  HeartPulse as HeartPulseIcon,
  Stethoscope as StethoscopeIcon,
  Pill as PillIcon,
  Syringe as SyringeIcon,
  Bandage as BandageIcon,
  Hospital as HospitalIcon,
  Ambulance as AmbulanceIcon,
  BriefcaseMedical as BriefcaseMedicalIcon,
  Microscope as MicroscopeIcon,
  TestTube as TestTubeIcon,
  Atom as AtomIcon,
  Dna as DnaIcon,
  Beaker as BeakerIcon,
} from 'lucide-react'
import HelpCommmande from './HelpCommande'
import GraphiqueChart from './GraphiqueChart'
import ChartSample from './ChartSample'

// ==================== TYPES ====================

interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: 'features' | 'schema' | 'architecture'
  status: 'ready' | 'development' | 'planned'
  files: ToolFile[]
  architecture: ArchitectureInfo
  fonctionnement: FonctionnementInfo
}

interface ToolFile {
  path: string
  role: string
  description: string
  isMain: boolean
}

interface ArchitectureInfo {
  description: string
  diagram: string
  components: string[]
  flows: string[]
}

interface FonctionnementInfo {
  steps: string[]
  apis: string[]
  database: string[]
}

// ==================== DONNÉES ====================

const tools: Tool[] = [
  // ==================== FEATURES ====================
  {
    id: 'features-manager',
    name: 'Features Manager',
    description: 'Gestion CRUD complète des fonctionnalités de l\'application',
    icon: <Sparkles className="w-5 h-5" />,
    category: 'features',
    status: 'ready',
    files: [
      {
        path: 'app/api/features/route.ts',
        role: 'API Backend',
        description: 'Route GET (liste), POST (création) des features',
        isMain: true
      },
      {
        path: 'app/api/features/[id]/route.ts',
        role: 'API Backend',
        description: 'Route GET (détail), PUT (mise à jour), DELETE (suppression)',
        isMain: true
      },
      {
        path: 'components/features/FeaturesTable.tsx',
        role: 'UI Component',
        description: 'Tableau d\'affichage des features avec actions',
        isMain: true
      },
      {
        path: 'components/features/FeatureForm.tsx',
        role: 'UI Component',
        description: 'Formulaire de création/édition d\'une feature',
        isMain: true
      },
      {
        path: 'components/features/FeatureFilters.tsx',
        role: 'UI Component',
        description: 'Filtres de recherche par titre, statut, priorité, epic',
        isMain: false
      },
      {
        path: 'hooks/useFeatures.ts',
        role: 'Hook',
        description: 'Gestion des états et appels API pour les features',
        isMain: true
      },
      {
        path: 'lib/validations/feature.ts',
        role: 'Validation',
        description: 'Schéma Zod pour la validation des données feature',
        isMain: true
      },
      {
        path: 'store/features.ts',
        role: 'Store Zustand',
        description: 'Gestion d\'état global pour les features',
        isMain: false
      },
      {
        path: 'prisma/schema.prisma',
        role: 'Database',
        description: 'Modèle Feature: id, title, description, epic, personas, status, priority, files, dependencies',
        isMain: true
      }
    ],
    architecture: {
      description: 'Architecture en couches avec API REST, UI React, et base de données Prisma',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                      Features Manager                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  useFeatures │───▶│  API Routes  │───▶│   Prisma DB  │  │
│  │    (Hook)    │    │  (Backend)   │    │   (Storage)  │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│         │                   │                    │          │
│         ▼                   ▼                    ▼          │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  Features    │    │  FeatureForm │    │  Schema      │  │
│  │    Table     │    │   (CRUD)     │    │  Validation  │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'useFeatures - Hook de gestion des données',
        'FeaturesTable - Composant d\'affichage',
        'FeatureForm - Formulaire CRUD',
        'API Routes - Endpoints REST',
        'Prisma Model - Couche de données'
      ],
      flows: [
        'Lecture: useFeatures → GET /api/features → prisma.feature.findMany()',
        'Création: FeatureForm → POST /api/features → prisma.feature.create()',
        'Édition: FeatureForm → PUT /api/features/:id → prisma.feature.update()',
        'Suppression: FeaturesTable → DELETE /api/features/:id → prisma.feature.delete()'
      ]
    },
    fonctionnement: {
      steps: [
        '1. Chargement de la page → useFeatures()',
        '2. GET /api/features → Liste des features',
        '3. Affichage dans FeaturesTable',
        '4. Actions: Éditer, Supprimer, Ajouter, Filtrer'
      ],
      apis: [
        'GET /api/features - Récupère toutes les features',
        'POST /api/features - Crée une nouvelle feature',
        'GET /api/features/:id - Récupère une feature',
        'PUT /api/features/:id - Met à jour une feature',
        'DELETE /api/features/:id - Supprime une feature'
      ],
      database: [
        'Table: Feature',
        'Champs: id, title, description, epic, personas, status, priority, files, dependencies, createdAt, updatedAt'
      ]
    }
  },

  // ==================== SCHEMA ====================
  {
    id: 'schema-validator',
    name: 'Schema Validator',
    description: 'Vérification de la cohérence entre le schéma Prisma et la base de données',
    icon: <Database className="w-5 h-5" />,
    category: 'schema',
    status: 'development',
    files: [
      {
        path: 'app/api/schema/validate/route.ts',
        role: 'API Backend',
        description: 'Valide la cohérence entre schema.prisma et la DB',
        isMain: true
      },
      {
        path: 'lib/prisma.ts',
        role: 'Database Client',
        description: 'Client Prisma pour les requêtes de validation',
        isMain: true
      },
      {
        path: 'prisma/schema.prisma',
        role: 'Database Schema',
        description: 'Schéma de référence pour la comparaison',
        isMain: true
      },
      {
        path: 'scripts/validate-schema.ts',
        role: 'Script',
        description: 'Script CLI pour la validation du schéma',
        isMain: false
      },
      {
        path: 'components/SchemaValidator.tsx',
        role: 'UI Component',
        description: 'Interface d\'affichage des résultats de validation',
        isMain: true
      }
    ],
    architecture: {
      description: 'Comparaison entre le schéma Prisma défini et la base de données réelle via introspection',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    Schema Validator                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Lire schema.prisma                     │    │
│  │              (Fichier de référence)                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │           Comparaison avec la DB réelle             │    │
│  │           (Prisma introspect + diff)                │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Résultats:                             │    │
│  │  ✅ Tables synchronisées                            │    │
│  │  ⚠️ Modèles manquants / en trop                     │    │
│  │  🔄 Champs différents                              │    │
│  │  ❌ Relations problématiques                       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'API de validation - Point d\'entrée backend',
        'Prisma Client - Lecture du schéma et de la DB',
        'Comparateur - Algorithme de comparaison',
        'UI SchemaValidator - Affichage des résultats'
      ],
      flows: [
        'Lecture: GET /api/schema/validate → lit schema.prisma',
        'Introspection: prisma db pull → état actuel de la DB',
        'Comparaison: diff entre le schéma et la DB',
        'Rapport: liste des différences avec actions suggérées'
      ]
    },
    fonctionnement: {
      steps: [
        '1. GET /api/schema/validate',
        '2. Lecture du fichier schema.prisma',
        '3. Introspection de la DB avec prisma db pull',
        '4. Comparaison des deux schémas',
        '5. Génération du rapport de différences'
      ],
      apis: [
        'GET /api/schema/validate - Valide la cohérence du schéma'
      ],
      database: [
        'Utilisation de prisma db pull pour l\'introspection',
        'Comparaison des modèles, champs, relations et types'
      ]
    }
  },

  // ==================== LOCAL FILES PATH ====================
  {
    id: 'local-files-path',
    name: 'Local Files Path',
    description: 'Exploration interactive des fichiers de l\'application avec visualisation du contenu',
    icon: <FolderTree className="w-5 h-5" />,
    category: 'architecture',
    status: 'ready',
    files: [
      {
        path: 'app/api/r&d/route.ts',
        role: 'API Backend',
        description: 'Scan des fichiers locaux avec exclusions',
        isMain: true
      },
      {
        path: 'lib/getFilesPath.ts',
        role: 'Utility',
        description: 'Fonction de lecture du système de fichiers',
        isMain: true
      },
      {
        path: 'components/LocalFilesPath.tsx',
        role: 'UI Component',
        description: 'Affichage de l\'arborescence avec accordéon ShadCN',
        isMain: true
      },
      {
        path: 'components/FileExplorer.tsx',
        role: 'UI Component',
        description: 'Explorateur interactif avec expansion/collapse',
        isMain: true
      },
      {
        path: 'components/FileContentModal.tsx',
        role: 'UI Component',
        description: 'Modal d\'affichage du contenu d\'un fichier',
        isMain: true
      },
      {
        path: 'components/FileFilter.tsx',
        role: 'UI Component',
        description: 'Filtres de recherche par nom, extension, type',
        isMain: false
      },
      {
        path: 'hooks/useFileScanner.ts',
        role: 'Hook',
        description: 'Scan et gestion des fichiers locaux',
        isMain: true
      }
    ],
    architecture: {
      description: 'Lecture directe du système de fichiers avec arborescence interactive',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                    Local Files Path                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Application Next.js                    │    │
│  │              (process.cwd())                        │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Scan des fichiers                     │    │
│  │              fs.readdirSync() récursif              │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Exclusions:                            │    │
│  │  🚫 node_modules  🚫 .next                         │    │
│  │  🚫 public        🚫 prisma/migrations              │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Arborescence JSON                      │    │
│  │              (structure hiérarchique)               │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Affichage avec Accordéon               │    │
│  │              (ShadCN UI)                            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'API route - Scan et filtrage',
        'getFilesPath - Logique de scan',
        'FileExplorer - Arborescence interactive',
        'FileContentModal - Vue du contenu',
        'FileFilter - Filtres de recherche'
      ],
      flows: [
        'Scan: GET /api/r&d → scanDirectory() → exclusion des dossiers',
        'Affichage: FileExplorer → accordéon avec expansion/collapse',
        'Contenu: Click "Voir" → Modal avec code coloré'
      ]
    },
    fonctionnement: {
      steps: [
        '1. GET /api/r&d?content=true&depth=5',
        '2. scanDirectory() lit tous les fichiers',
        '3. Exclusions: node_modules, .next, public, prisma/migrations',
        '4. Construction de l\'arborescence JSON',
        '5. Affichage dans FileExplorer (Accordéon ShadCN)',
        '6. Clic sur un fichier → FileContentModal'
      ],
      apis: [
        'GET /api/r&d?content=true&depth=5 - Scan des fichiers',
        'GET /api/r&d?search=button&extension=.tsx - Filtrage'
      ],
      database: [
        'Pas de DB - Lecture directe du système de fichiers',
        'Utilisation de fs.readdirSync() et fs.statSync()'
      ]
    }
  },

  // ==================== DB FILES PATH ====================
  {
    id: 'db-files-path',
    name: 'DB Files Path',
    description: 'Exploration des fichiers stockés en base de données avec leurs métadonnées',
    icon: <DatabaseIcon className="w-5 h-5" />,
    category: 'architecture',
    status: 'ready',
    files: [
      {
        path: 'app/api/files/route.ts',
        role: 'API Backend',
        description: 'Récupération des fichiers depuis la DB',
        isMain: true
      },
      {
        path: 'components/DbFilesPath.tsx',
        role: 'UI Component',
        description: 'Affichage des fichiers DB avec métadonnées',
        isMain: true
      },
      {
        path: 'hooks/useDbFiles.ts',
        role: 'Hook',
        description: 'Gestion des fichiers en DB',
        isMain: true
      },
      {
        path: 'prisma/schema.prisma',
        role: 'Database',
        description: 'Modèle File: id, path, type, label, role, fonctionnement, export, import',
        isMain: true
      }
    ],
    architecture: {
      description: 'Lecture des fichiers depuis la table File avec gestion des métadonnées',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                     DB Files Path                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  useDbFiles  │───▶│  API Files   │───▶│  Table File  │  │
│  │    (Hook)    │    │   (Backend)  │    │   (Prisma)   │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│         │                   │                    │          │
│         ▼                   ▼                    ▼          │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  DbFilesPath │    │  Métadonnées │    │  JSON Fields │  │
│  │    (UI)      │    │  (Type,Role) │    │  (Import/Export)│ │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'API Files - CRUD des fichiers en DB',
        'useDbFiles - Hook de gestion',
        'DbFilesPath - Interface d\'affichage',
        'Prisma File Model - Stockage des métadonnées'
      ],
      flows: [
        'Lecture: useDbFiles → GET /api/files → prisma.file.findMany()',
        'Création: POST /api/files → prisma.file.create()',
        'Édition: PUT /api/files/:id → prisma.file.update()',
        'Suppression: DELETE /api/files/:id → prisma.file.delete()'
      ]
    },
    fonctionnement: {
      steps: [
        '1. GET /api/files pour récupérer tous les fichiers',
        '2. Affichage des métadonnées (type, rôle, imports, exports)',
        '3. Actions: Éditer, Supprimer, Synchroniser'
      ],
      apis: [
        'GET /api/files - Liste tous les fichiers en DB',
        'POST /api/files - Ajoute un fichier en DB',
        'PUT /api/files/:id - Met à jour un fichier',
        'DELETE /api/files/:id - Supprime un fichier'
      ],
      database: [
        'Table: File',
        'Champs: id, path, type, label, role, fonctionnement, export, import, parentId'
      ]
    }
  },

  // ==================== UPDATE MY DB ====================
  {
    id: 'update-my-db',
    name: 'Update My DB',
    description: 'Synchronisation des fichiers locaux vers la base de données',
    icon: <Upload className="w-5 h-5" />,
    category: 'architecture',
    status: 'development',
    files: [
      {
        path: 'app/api/sync/local-to-db/route.ts',
        role: 'API Backend',
        description: 'Synchronisation locale → DB',
        isMain: true
      },
      {
        path: 'components/UpdateMyDb.tsx',
        role: 'UI Component',
        description: 'Interface de synchronisation avec aperçu JSON',
        isMain: true
      },
      {
        path: 'hooks/useSync.ts',
        role: 'Hook',
        description: 'Gestion de la synchronisation',
        isMain: true
      },
      {
        path: 'lib/compareFiles.ts',
        role: 'Utility',
        description: 'Comparaison entre fichiers locaux et DB',
        isMain: true
      }
    ],
    architecture: {
      description: 'Comparaison et synchronisation des fichiers locaux vers la base de données',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                      Update My DB                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  Fichiers    │    │  Fichiers    │    │  Comparaison │  │
│  │   Locaux     │───▶│    en DB     │───▶│   (Diff)     │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                  │          │
│                                                  ▼          │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Fichiers manquants en DB              │    │
│  │  📄 app/api/users/route.ts                        │    │
│  │  📄 components/UserCard.tsx                       │    │
│  │  📄 lib/utils/format.ts                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Action: Créer dans la DB              │    │
│  │  POST /api/files → prisma.file.create()            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'API Sync - Point d\'entrée backend',
        'Compare Files - Logique de comparaison',
        'UpdateMyDb - Interface UI',
        'useSync - Gestion des états'
      ],
      flows: [
        'Scan: Récupération des fichiers locaux',
        'Lecture: Récupération des fichiers en DB',
        'Comparaison: Diff entre les deux ensembles',
        'Action: Création des fichiers manquants dans la DB'
      ]
    },
    fonctionnement: {
      steps: [
        '1. GET /api/r&d → Fichiers locaux',
        '2. GET /api/files → Fichiers en DB',
        '3. Comparaison: fichiers locaux - fichiers DB = manquants',
        '4. Affichage des fichiers manquants avec JSON',
        '5. Clic sur "Créer" → POST /api/files'
      ],
      apis: [
        'GET /api/r&d - Fichiers locaux',
        'GET /api/files - Fichiers en DB',
        'POST /api/files - Création en DB'
      ],
      database: [
        'Utilise la table File pour le stockage',
        'Champs: path, type, label, role, fonctionnement, export, import'
      ]
    }
  },

  // ==================== UPDATE MY APP ====================
  {
    id: 'update-my-app',
    name: 'Update My App',
    description: 'Création des fichiers locaux à partir des données de la base de données',
    icon: <Download className="w-5 h-5" />,
    category: 'architecture',
    status: 'planned',
    files: [
      {
        path: 'app/api/sync/db-to-local/route.ts',
        role: 'API Backend',
        description: 'Synchronisation DB → locale',
        isMain: true
      },
      {
        path: 'components/UpdateMyApp.tsx',
        role: 'UI Component',
        description: 'Interface de création de fichiers locaux',
        isMain: true
      },
      {
        path: 'lib/createFile.ts',
        role: 'Utility',
        description: 'Création de fichiers sur le disque',
        isMain: true
      },
      {
        path: 'hooks/useSync.ts',
        role: 'Hook',
        description: 'Gestion de la synchronisation',
        isMain: true
      }
    ],
    architecture: {
      description: 'Création de fichiers locaux à partir des métadonnées stockées en DB',
      diagram: `
┌─────────────────────────────────────────────────────────────┐
│                      Update My App                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  Fichiers    │    │  Fichiers    │    │  Comparaison │  │
│  │    en DB     │───▶│   Locaux     │───▶│   (Diff)     │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                  │          │
│                                                  ▼          │
│  ┌─────────────────────────────────────────────────────┐    │
│  │          Fichiers à créer localement               │    │
│  │  📄 lib/validations/product.ts                     │    │
│  │    Path: lib/validations/product.ts                │    │
│  │    Role: Schema validation                         │    │
│  │    Imports: zod, prisma                            │    │
│  │    Exports: productSchema                          │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │          Action: Créer localement                  │    │
│  │  fs.writeFileSync() → fichier sur le disque        │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
      `,
      components: [
        'API Sync - Point d\'entrée backend',
        'Create File - Logique de création',
        'UpdateMyApp - Interface UI',
        'useSync - Gestion des états'
      ],
      flows: [
        'Lecture: Récupération des fichiers en DB',
        'Scan: Récupération des fichiers locaux',
        'Comparaison: Diff entre les deux ensembles',
        'Action: Création des fichiers manquants localement'
      ]
    },
    fonctionnement: {
      steps: [
        '1. GET /api/files → Fichiers en DB',
        '2. GET /api/r&d → Fichiers locaux',
        '3. Comparaison: fichiers DB - fichiers locaux = à créer',
        '4. Affichage avec toutes les métadonnées',
        '5. Clic sur "Créer" → création du fichier sur le disque'
      ],
      apis: [
        'GET /api/files - Fichiers en DB',
        'GET /api/r&d - Fichiers locaux',
        'POST /api/sync/db-to-local - Création locale'
      ],
      database: [
        'Utilise la table File pour les métadonnées',
        'Création physique avec fs.writeFileSync()'
      ]
    }
  }
]

// ==================== COMPOSANT PRINCIPAL ====================

function DevHelpPage() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Filtrer les outils par catégorie
  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(t => t.category === activeCategory)

  // Statistiques
  const stats = {
    total: tools.length,
    ready: tools.filter(t => t.status === 'ready').length,
    development: tools.filter(t => t.status === 'development').length,
    planned: tools.filter(t => t.status === 'planned').length,
    categories: new Set(tools.map(t => t.category)).size
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
     
     <section><GraphiqueChart/>
     </section> 
     <section><HelpCommmande /></section>
     <section>
      <ChartSample />
     </section>

      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-orange-500" />
                DevHelp
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Documentation technique des outils de développement
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                {stats.ready} Prêts
              </Badge>
              <Badge variant="outline" className="gap-1">
                <AlertCircle className="w-3 h-3 text-yellow-500" />
                {stats.development} En cours
              </Badge>
              <Badge variant="outline" className="gap-1">
                <ClockIcon className="w-3 h-3 text-blue-500" />
                {stats.planned} Planifiés
              </Badge>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{stats.total}</div>
              <div className="text-xs text-slate-500">Outils</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{stats.ready}</div>
              <div className="text-xs text-slate-500">Prêts</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-yellow-600">{stats.development}</div>
              <div className="text-xs text-slate-500">En développement</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{stats.categories}</div>
              <div className="text-xs text-slate-500">Catégories</div>
            </div>
          </div>
        </header>

        {/* Tabs de catégories */}
        <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="all" className="gap-2">
              <Layers className="w-4 h-4" />
              Tous
            </TabsTrigger>
            <TabsTrigger value="features" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Features
            </TabsTrigger>
            <TabsTrigger value="schema" className="gap-2">
              <Database className="w-4 h-4" />
              Schema
            </TabsTrigger>
            <TabsTrigger value="architecture" className="gap-2">
              <FolderTree className="w-4 h-4" />
              Architecture
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Liste des outils */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredTools.map((tool) => (
            <Card 
              key={tool.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedTool?.id === tool.id ? 'ring-2 ring-orange-500' : ''
              }`}
              onClick={() => setSelectedTool(tool)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-base">{tool.name}</CardTitle>
                  </div>
                  <Badge variant={tool.status === 'ready' ? 'default' : tool.status === 'development' ? 'secondary' : 'outline'}>
                    {tool.status === 'ready' ? '✅ Prêt' : tool.status === 'development' ? '🔄 En cours' : '📋 Planifié'}
                  </Badge>
                </div>
                <CardDescription className="text-sm mt-1">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    {tool.files.length} fichiers
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {tool.architecture.components.length} composants
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Détail de l'outil sélectionné */}
        {selectedTool && (
          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    {selectedTool.icon}
                  </div>
                  <div>
                    <CardTitle>{selectedTool.name}</CardTitle>
                    <CardDescription>{selectedTool.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={selectedTool.status === 'ready' ? 'default' : 'secondary'}>
                  {selectedTool.status === 'ready' ? '✅ Prêt' : selectedTool.status === 'development' ? '🔄 En cours' : '📋 Planifié'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="files" className="space-y-4">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="files" className="gap-2">
                    <FileCode className="w-4 h-4" />
                    Fichiers
                  </TabsTrigger>
                  <TabsTrigger value="architecture" className="gap-2">
                    <GitBranch className="w-4 h-4" />
                    Architecture
                  </TabsTrigger>
                  <TabsTrigger value="fonctionnement" className="gap-2">
                    <Settings className="w-4 h-4" />
                    Fonctionnement
                  </TabsTrigger>
                  <TabsTrigger value="relations" className="gap-2">
                    <Link2 className="w-4 h-4" />
                    Relations
                  </TabsTrigger>
                </TabsList>

                {/* Fichiers */}
                <TabsContent value="files">
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {selectedTool.files.map((file, index) => (
                        <div key={index} className={`p-3 rounded-lg border ${file.isMain ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                {file.isMain && <StarIcon className="w-3 h-3 text-orange-500" />}
                                <code className="text-sm font-mono">{file.path}</code>
                              </div>
                              <div className="text-sm font-medium mt-1">{file.role}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">{file.description}</div>
                            </div>
                            {file.isMain && <Badge className="text-xs">Principal</Badge>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Architecture */}
                <TabsContent value="architecture">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {selectedTool.architecture.description}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium mb-2">Diagramme</h4>
                      <pre className="text-xs font-mono text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                        {selectedTool.architecture.diagram}
                      </pre>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <h4 className="font-medium mb-2">Composants</h4>
                        <ul className="space-y-1">
                          {selectedTool.architecture.components.map((comp, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-orange-500" />
                              {comp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <h4 className="font-medium mb-2">Flux</h4>
                        <ul className="space-y-1">
                          {selectedTool.architecture.flows.map((flow, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-green-500" />
                              {flow}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Fonctionnement */}
                <TabsContent value="fonctionnement">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium mb-2">Étapes de fonctionnement</h4>
                      <ol className="space-y-2">
                        {selectedTool.fonctionnement.steps.map((step, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="font-mono text-orange-500">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <h4 className="font-medium mb-2">APIs</h4>
                        <ul className="space-y-1">
                          {selectedTool.fonctionnement.apis.map((api, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                              {api}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <h4 className="font-medium mb-2">Base de données</h4>
                        <ul className="space-y-1">
                          {selectedTool.fonctionnement.database.map((db, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-400">
                              {db}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Relations */}
                <TabsContent value="relations">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <h4 className="font-medium mb-4">Relations entre les fichiers</h4>
                    <div className="space-y-3">
                      {selectedTool.files.filter(f => f.isMain).map((file, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-white dark:bg-slate-700/50 rounded-lg">
                          <div className="flex-1">
                            <code className="text-sm font-mono">{file.path}</code>
                            <div className="text-xs text-slate-500">{file.role}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Principal</Badge>
                            {selectedTool.files.filter(f => f.isMain).length > 1 && (
                              <>
                                <ArrowRight className="w-4 h-4 text-slate-400" />
                                <code className="text-xs font-mono">
                                  {selectedTool.files[(index + 1) % selectedTool.files.filter(f => f.isMain).length].path.split('/').pop()}
                                </code>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="text-sm text-slate-500">
                      <p className="font-medium mb-2">📌 Légende:</p>
                      <ul className="space-y-1">
                        <li>• Les fichiers <strong>Principaux</strong> sont essentiels au fonctionnement</li>
                        <li>• Les fichiers <strong>Secondaires</strong> sont auxiliaires ou optionnels</li>
                        <li>• Les flèches indiquent les dépendances entre fichiers</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default DevHelpPage