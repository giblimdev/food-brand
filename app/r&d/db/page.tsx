//@/r&d/db/page.tsx

//type : page 
/*role : cette page decrit la base de donnée*/              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

/*

*/


'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
  Database,
  Table,
  Key,
  Link2,
  Hash,
  Type,
  Calendar,
  List,
  Grid,
  Search,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  Code2,
  Eye,
  Copy,
  Check,
  FileCode,
  Package,
  Users,
  ShoppingCart,
  Truck,
  CreditCard,
  Shield,
  Settings,
  Layers,
  GitBranch,
  Command,
  Wrench,
  BookOpen,
  Sparkles,
  Rocket,
  User,
  Building2,
  Utensils,
  Sandwich,
  Globe
} from 'lucide-react'

// ============================================
// TYPES
// ============================================

interface Field {
  name: string
  type: string
  isId?: boolean
  isUnique?: boolean
  isOptional?: boolean
  isList?: boolean
  isCreatedAt?: boolean
  isUpdatedAt?: boolean
  defaultValue?: string
  relation?: string
  description: string
}

interface Model {
  name: string
  label: string
  icon: React.ReactNode
  description: string
  tableName: string
  category: 'auth' | 'dev' | 'domain'
  fields: Field[]
  relations: { from: string; to: string; type: string; description?: string }[]
  indexes: string[]
  enums?: string[]
}

// ============================================
// DONNÉES DES MODÈLES
// ============================================

const models: Model[] = [
  // ============================================
  // AUTH MODELS
  // ============================================
  {
    name: 'User',
    label: '👤 Utilisateur',
    icon: <User className="w-5 h-5 text-blue-500" />,
    description: 'Utilisateur de l\'application avec authentification et rôles',
    tableName: 'users',
    category: 'auth',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique de l\'utilisateur' },
      { name: 'name', type: 'String', description: 'Nom complet de l\'utilisateur' },
      { name: 'email', type: 'String', isUnique: true, description: 'Adresse email unique' },
      { name: 'emailVerified', type: 'Boolean', defaultValue: 'false', description: 'Indique si l\'email a été vérifié' },
      { name: 'image', type: 'String', isOptional: true, description: 'URL de la photo de profil' },
      { name: 'role', type: 'Role', defaultValue: 'CLIENT', description: 'Rôle de l\'utilisateur (CLIENT, BUSINESS, COLLABORATOR)' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création du compte' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'User', to: 'Account', type: 'One-to-Many', description: 'Comptes OAuth liés' },
      { from: 'User', to: 'Session', type: 'One-to-Many', description: 'Sessions actives' },
      { from: 'User', to: 'Brand', type: 'One-to-Many', description: 'Marques créées' },
      { from: 'User', to: 'BrandOwner', type: 'One-to-Many', description: 'Marques possédées' },
      { from: 'User', to: 'Glossary', type: 'One-to-Many', description: 'Entrées du glossaire' },
    ],
    indexes: ['email'],
    enums: ['Role']
  },
  {
    name: 'Account',
    label: '🔑 Compte OAuth',
    icon: <Key className="w-5 h-5 text-yellow-500" />,
    description: 'Comptes OAuth (Google, GitHub) liés à un utilisateur',
    tableName: 'accounts',
    category: 'auth',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique' },
      { name: 'userId', type: 'String', description: 'Référence vers l\'utilisateur' },
      { name: 'type', type: 'String', description: 'Type de compte (oauth, email)' },
      { name: 'provider', type: 'String', description: 'Fournisseur (google, github)' },
      { name: 'providerAccountId', type: 'String', description: 'ID chez le fournisseur' },
      { name: 'refresh_token', type: 'String', isOptional: true, description: 'Token de rafraîchissement' },
      { name: 'access_token', type: 'String', isOptional: true, description: 'Token d\'accès' },
      { name: 'expires_at', type: 'Int', isOptional: true, description: 'Date d\'expiration' },
      { name: 'token_type', type: 'String', isOptional: true, description: 'Type de token' },
      { name: 'scope', type: 'String', isOptional: true, description: 'Périmètre d\'accès' },
      { name: 'id_token', type: 'String', isOptional: true, description: 'ID token' },
      { name: 'session_state', type: 'String', isOptional: true, description: 'État de la session' },
    ],
    relations: [
      { from: 'Account', to: 'User', type: 'Many-to-One', description: 'Utilisateur propriétaire' },
    ],
    indexes: ['userId', 'provider', 'providerAccountId'],
  },
  {
    name: 'Session',
    label: '🔒 Session',
    icon: <Shield className="w-5 h-5 text-indigo-500" />,
    description: 'Sessions actives des utilisateurs',
    tableName: 'sessions',
    category: 'auth',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique' },
      { name: 'sessionToken', type: 'String', isUnique: true, description: 'Token de session unique' },
      { name: 'userId', type: 'String', description: 'Référence vers l\'utilisateur' },
      { name: 'expires', type: 'DateTime', description: 'Date d\'expiration de la session' },
    ],
    relations: [
      { from: 'Session', to: 'User', type: 'Many-to-One', description: 'Utilisateur propriétaire' },
    ],
    indexes: ['sessionToken', 'userId'],
  },
  {
    name: 'VerificationToken',
    label: '✉️ Token de vérification',
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    description: 'Tokens de vérification d\'email et de réinitialisation',
    tableName: 'verification_tokens',
    category: 'auth',
    fields: [
      { name: 'identifier', type: 'String', description: 'Identifiant (email)' },
      { name: 'token', type: 'String', isUnique: true, description: 'Token unique' },
      { name: 'expires', type: 'DateTime', description: 'Date d\'expiration' },
    ],
    relations: [],
    indexes: ['identifier', 'token'],
  },

  // ============================================
  // DEV MODELS
  // ============================================
  {
    name: 'Epic',
    label: '📁 Epic',
    icon: <Layers className="w-5 h-5 text-purple-500" />,
    description: 'Grandes thématiques organisant les fonctionnalités',
    tableName: 'epics',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'name', type: 'String', isUnique: true, description: 'Nom technique (ex: AUTHENTIFICATION)' },
      { name: 'label', type: 'String', description: 'Nom affichable (ex: 🔐 Authentification)' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description de l\'epic' },
      { name: 'icon', type: 'String', isOptional: true, description: 'Nom de l\'icône Lucide' },
      { name: 'color', type: 'String', isOptional: true, description: 'Couleur associée' },
      { name: 'emoji', type: 'String', isOptional: true, description: 'Émoji pour l\'affichage' },
      { name: 'status', type: 'Status', defaultValue: 'PLANNED', description: 'Statut de l\'epic' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Epic', to: 'Feature', type: 'One-to-Many', description: 'Fonctionnalités liées' },
    ],
    indexes: ['name', 'status'],
  },
  {
    name: 'Feature',
    label: '📋 Fonctionnalité',
    icon: <Sparkles className="w-5 h-5 text-orange-500" />,
    description: 'Fonctionnalités de l\'application avec métadonnées',
    tableName: 'features',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'title', type: 'String', description: 'Titre de la fonctionnalité' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description détaillée' },
      { name: 'epicId', type: 'String', description: 'Référence vers l\'Epic' },
      { name: 'personas', type: 'Persona[]', description: 'Liste des personas concernés' },
      { name: 'status', type: 'Status', defaultValue: 'PLANNED', description: 'Statut actuel' },
      { name: 'priority', type: 'Priority', defaultValue: 'MEDIUM', description: 'Niveau de priorité' },
      { name: 'files', type: 'Json', isOptional: true, description: 'Liste des fichiers associés' },
      { name: 'dependencies', type: 'String[]', defaultValue: '[]', description: 'IDs des features dépendantes' },
      { name: 'estimatedHours', type: 'Int', isOptional: true, defaultValue: '0', description: 'Temps estimé en heures' },
      { name: 'sprint', type: 'String', isOptional: true, description: 'Sprint assigné' },
      { name: 'assignedTo', type: 'String', isOptional: true, description: 'Personne assignée' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
      { name: 'completedAt', type: 'DateTime', isOptional: true, description: 'Date de complétion' },
    ],
    relations: [
      { from: 'Feature', to: 'Epic', type: 'Many-to-One', description: 'Epic parent' },
    ],
    indexes: ['epicId', 'status', 'priority'],
  },
  {
    name: 'Schema',
    label: '🗄️ Schéma',
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    description: 'Gestion des schémas de base de données et validation',
    tableName: 'schemas',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'name', type: 'String', description: 'Nom du schéma' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description du schéma' },
      { name: 'version', type: 'String', defaultValue: '1.0.0', description: 'Version du schéma' },
      { name: 'status', type: 'SchemaStatus', defaultValue: 'PENDING', description: 'Statut de validation' },
      { name: 'isValid', type: 'Boolean', defaultValue: 'false', description: 'Indique si le schéma est valide' },
      { name: 'lastChecked', type: 'DateTime', isOptional: true, description: 'Date de dernière vérification' },
      { name: 'differences', type: 'Json', isOptional: true, description: 'Différences détectées' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Schema', to: 'Model', type: 'One-to-Many', description: 'Modèles du schéma' },
      { from: 'Schema', to: 'SchemaValidation', type: 'One-to-Many', description: 'Validations historiques' },
    ],
    indexes: ['status'],
  },
  {
    name: 'Model',
    label: '📊 Modèle',
    icon: <Table className="w-5 h-5 text-cyan-500" />,
    description: 'Modèles Prisma représentant les tables de la base de données',
    tableName: 'models',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'name', type: 'String', description: 'Nom du modèle' },
      { name: 'label', type: 'String', isOptional: true, description: 'Nom affichable' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description du modèle' },
      { name: 'isEnum', type: 'Boolean', defaultValue: 'false', description: 'Est-ce un enum ?' },
      { name: 'isView', type: 'Boolean', defaultValue: 'false', description: 'Est-ce une vue ?' },
      { name: 'isAbstract', type: 'Boolean', defaultValue: 'false', description: 'Est-ce un modèle abstrait ?' },
      { name: 'schemaId', type: 'String', description: 'Référence vers le schéma parent' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Model', to: 'Schema', type: 'Many-to-One', description: 'Schéma parent' },
      { from: 'Model', to: 'Field', type: 'One-to-Many', description: 'Champs du modèle' },
    ],
    indexes: ['schemaId', 'name'],
  },
  {
    name: 'Field',
    label: '🔤 Champ',
    icon: <Type className="w-5 h-5 text-yellow-500" />,
    description: 'Champs des modèles Prisma avec leurs attributs',
    tableName: 'fields',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'name', type: 'String', description: 'Nom du champ' },
      { name: 'label', type: 'String', isOptional: true, description: 'Nom affichable' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description du champ' },
      { name: 'type', type: 'String', description: 'Type Prisma (String, Int, etc.)' },
      { name: 'isOptional', type: 'Boolean', defaultValue: 'false', description: 'Est-ce optionnel ?' },
      { name: 'isList', type: 'Boolean', defaultValue: 'false', description: 'Est-ce une liste ?' },
      { name: 'isId', type: 'Boolean', defaultValue: 'false', description: 'Est-ce une clé primaire ?' },
      { name: 'isUnique', type: 'Boolean', defaultValue: 'false', description: 'Est-ce unique ?' },
      { name: 'isCreatedAt', type: 'Boolean', defaultValue: 'false', description: 'Est-ce createdAt ?' },
      { name: 'isUpdatedAt', type: 'Boolean', defaultValue: 'false', description: 'Est-ce updatedAt ?' },
      { name: 'defaultValue', type: 'String', isOptional: true, description: 'Valeur par défaut' },
      { name: 'reference', type: 'String', isOptional: true, description: 'Référence vers un autre modèle' },
      { name: 'modelId', type: 'String', description: 'Référence vers le modèle parent' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Field', to: 'Model', type: 'Many-to-One', description: 'Modèle parent' },
    ],
    indexes: ['modelId', 'type'],
  },
  {
    name: 'SchemaValidation',
    label: '✅ Validation',
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    description: 'Historique des validations de schéma',
    tableName: 'schema_validations',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'schemaId', type: 'String', description: 'Référence vers le schéma validé' },
      { name: 'isValid', type: 'Boolean', defaultValue: 'false', description: 'Validation réussie ?' },
      { name: 'differences', type: 'Json', isOptional: true, description: 'Différences détaillées' },
      { name: 'errors', type: 'Json', isOptional: true, description: 'Liste des erreurs' },
      { name: 'warnings', type: 'Json', isOptional: true, description: 'Liste des avertissements' },
      { name: 'checkedAt', type: 'DateTime', defaultValue: 'now()', description: 'Date de la validation' },
      { name: 'checkedBy', type: 'String', isOptional: true, description: 'Personne ayant validé' },
      { name: 'durationMs', type: 'Int', isOptional: true, description: 'Durée en millisecondes' },
    ],
    relations: [
      { from: 'SchemaValidation', to: 'Schema', type: 'Many-to-One', description: 'Schéma validé' },
    ],
    indexes: ['schemaId', 'checkedAt'],
  },
  {
    name: 'File',
    label: '📄 Fichier',
    icon: <FileCode className="w-5 h-5 text-orange-500" />,
    description: 'Fichiers de l\'architecture avec leur contenu et métadonnées',
    tableName: 'files',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'order', type: 'Int', isOptional: true, defaultValue: '0', description: 'Ordre d\'affichage' },
      { name: 'path', type: 'String', isUnique: true, description: 'Chemin absolu du fichier' },
      { name: 'label', type: 'String', description: 'Nom affichable du fichier' },
      { name: 'type', type: 'FileType', defaultValue: 'OTHER', description: 'Type de fichier' },
      { name: 'role', type: 'String', isOptional: true, description: 'Rôle du fichier dans l\'application' },
      { name: 'fonctionnement', type: 'String', isOptional: true, description: 'Description du fonctionnement' },
      { name: 'imports', type: 'String', isOptional: true, description: 'Imports du fichier' },
      { name: 'exports', type: 'String', isOptional: true, description: 'Exports du fichier' },
      { name: 'content', type: 'String', isOptional: true, description: 'Contenu complet du fichier' },
      { name: 'parentId', type: 'String', isOptional: true, description: 'Référence vers le dossier parent' },
      { name: 'syncStatus', type: 'SyncStatus', defaultValue: 'SYNCED', description: 'État de synchronisation' },
      { name: 'lastSyncAt', type: 'DateTime', isOptional: true, description: 'Date de dernière synchronisation' },
      { name: 'localHash', type: 'String', isOptional: true, description: 'Hash du fichier local' },
      { name: 'featureIds', type: 'String[]', defaultValue: '[]', description: 'IDs des features liées' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'File', to: 'File', type: 'Self-relation', description: 'Hiérarchie parent → enfants' },
    ],
    indexes: ['path', 'type', 'parentId', 'syncStatus'],
  },
  {
    name: 'Log',
    label: '📝 Journal',
    icon: <BookOpen className="w-5 h-5 text-slate-500" />,
    description: 'Journal des actions effectuées dans les DevTools',
    tableName: 'logs',
    category: 'dev',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'action', type: 'LogAction', defaultValue: 'SCAN', description: 'Type d\'action' },
      { name: 'category', type: 'LogCategory', defaultValue: 'SYSTEM', description: 'Catégorie de l\'action' },
      { name: 'message', type: 'String', description: 'Message descriptif' },
      { name: 'details', type: 'Json', isOptional: true, description: 'Détails supplémentaires' },
      { name: 'status', type: 'LogStatus', defaultValue: 'SUCCESS', description: 'Statut de l\'action' },
      { name: 'userId', type: 'String', isOptional: true, description: 'ID de l\'utilisateur' },
      { name: 'userEmail', type: 'String', isOptional: true, description: 'Email de l\'utilisateur' },
      { name: 'ip', type: 'String', isOptional: true, description: 'Adresse IP' },
      { name: 'userAgent', type: 'String', isOptional: true, description: 'User Agent' },
      { name: 'featureId', type: 'String', isOptional: true, description: 'Feature concernée' },
      { name: 'fileId', type: 'String', isOptional: true, description: 'Fichier concerné' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
    ],
    relations: [],
    indexes: ['action', 'category', 'createdAt', 'featureId', 'fileId'],
  },

  // ============================================
  // DOMAIN MODELS
  // ============================================
  {
    name: 'Brand',
    label: '🏷️ Marque',
    icon: <Building2 className="w-5 h-5 text-blue-500" />,
    description: 'Marque alimentaire avec ses propriétaires et restaurants',
    tableName: 'brands',
    category: 'domain',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'name', type: 'String', description: 'Nom de la marque' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description de la marque' },
      { name: 'logo', type: 'String', isOptional: true, description: 'URL du logo' },
      { name: 'createdById', type: 'String', description: 'ID du créateur' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Brand', to: 'User', type: 'Many-to-One', description: 'Créateur de la marque' },
      { from: 'Brand', to: 'BrandOwner', type: 'One-to-Many', description: 'Propriétaires de la marque' },
      { from: 'Brand', to: 'Restaurant', type: 'One-to-Many', description: 'Restaurants de la marque' },
      { from: 'Brand', to: 'Recipe', type: 'One-to-Many', description: 'Recettes de la marque' },
    ],
    indexes: ['name', 'createdById'],
  },
  {
    name: 'BrandOwner',
    label: '👥 Propriétaire',
    icon: <Users className="w-5 h-5 text-green-500" />,
    description: 'Relation many-to-many entre les marques et leurs propriétaires',
    tableName: 'brand_owners',
    category: 'domain',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique' },
      { name: 'brandId', type: 'String', description: 'Référence vers la marque' },
      { name: 'userId', type: 'String', description: 'Référence vers l\'utilisateur' },
      { name: 'role', type: 'OwnerRole', defaultValue: 'ADMIN', description: 'Rôle du propriétaire' },
      { name: 'joinedAt', type: 'DateTime', defaultValue: 'now()', description: 'Date d\'adhésion' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'BrandOwner', to: 'Brand', type: 'Many-to-One', description: 'Marque associée' },
      { from: 'BrandOwner', to: 'User', type: 'Many-to-One', description: 'Utilisateur propriétaire' },
    ],
    indexes: ['brandId', 'userId', 'role'],
  },
  {
    name: 'Restaurant',
    label: '🏪 Restaurant',
    icon: <Utensils className="w-5 h-5 text-red-500" />,
    description: 'Restaurant rattaché à une marque',
    tableName: 'restaurants',
    category: 'domain',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique' },
      { name: 'name', type: 'String', description: 'Nom du restaurant' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description du restaurant' },
      { name: 'address', type: 'String', isOptional: true, description: 'Adresse du restaurant' },
      { name: 'phone', type: 'String', isOptional: true, description: 'Numéro de téléphone' },
      { name: 'brandId', type: 'String', description: 'Référence vers la marque' },
      { name: 'isActive', type: 'Boolean', defaultValue: 'true', description: 'Est-ce actif ?' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Restaurant', to: 'Brand', type: 'Many-to-One', description: 'Marque parente' },
      { from: 'Restaurant', to: 'Recipe', type: 'One-to-Many', description: 'Recettes du restaurant' },
    ],
    indexes: ['brandId', 'isActive'],
  },
  {
    name: 'Recipe',
    label: '🍽️ Recette',
    icon: <Sandwich className="w-5 h-5 text-amber-500" />,
    description: 'Recette d\'un produit alimentaire',
    tableName: 'recipes',
    category: 'domain',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'cuid()', description: 'Identifiant unique' },
      { name: 'name', type: 'String', description: 'Nom de la recette' },
      { name: 'description', type: 'String', isOptional: true, description: 'Description de la recette' },
      { name: 'ingredients', type: 'String', isOptional: true, description: 'Ingrédients (texte ou JSON)' },
      { name: 'instructions', type: 'String', isOptional: true, description: 'Instructions de préparation' },
      { name: 'price', type: 'Float', isOptional: true, description: 'Prix en monnaie locale' },
      { name: 'prepTime', type: 'Int', isOptional: true, description: 'Temps de préparation en minutes' },
      { name: 'image', type: 'String', isOptional: true, description: 'URL de l\'image' },
      { name: 'brandId', type: 'String', description: 'Référence vers la marque' },
      { name: 'restaurantId', type: 'String', isOptional: true, description: 'Référence vers le restaurant' },
      { name: 'isAvailable', type: 'Boolean', defaultValue: 'true', description: 'Est-ce disponible ?' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Recipe', to: 'Brand', type: 'Many-to-One', description: 'Marque parente' },
      { from: 'Recipe', to: 'Restaurant', type: 'Many-to-One', description: 'Restaurant associé' },
    ],
    indexes: ['brandId', 'restaurantId', 'isAvailable'],
  },
  {
    name: 'Glossary',
    label: '📖 Glossaire',
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    description: 'Définitions des termes spécifiques à l\'application',
    tableName: 'glossary',
    category: 'domain',
    fields: [
      { name: 'id', type: 'String', isId: true, defaultValue: 'uuid()', description: 'Identifiant unique' },
      { name: 'term', type: 'String', isUnique: true, description: 'Terme défini' },
      { name: 'definition', type: 'String', description: 'Définition du terme' },
      { name: 'createdBy', type: 'String', description: 'ID de l\'utilisateur créateur' },
      { name: 'createdAt', type: 'DateTime', isCreatedAt: true, description: 'Date de création' },
      { name: 'updatedAt', type: 'DateTime', isUpdatedAt: true, description: 'Date de dernière mise à jour' },
    ],
    relations: [
      { from: 'Glossary', to: 'User', type: 'Many-to-One', description: 'Créateur du terme' },
    ],
    indexes: ['term', 'createdBy'],
  },
]

// ============================================
// ENUMS
// ============================================

const enums = [
  { name: 'Role', values: ['CLIENT', 'BUSINESS', 'COLLABORATOR'] },
  { name: 'Persona', values: ['CLIENT', 'PRO', 'ADMIN', 'DEVELOPER', 'VISITEUR'] },
  { name: 'Status', values: ['PLANNED', 'IN_PROGRESS', 'DONE', 'BLOCKED', 'REVIEW', 'TESTING', 'DEPLOYED'] },
  { name: 'Priority', values: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'TRIVIAL'] },
  { name: 'SchemaStatus', values: ['PENDING', 'VALIDATING', 'VALID', 'INVALID', 'ERROR', 'OUTDATED'] },
  { name: 'FileType', values: ['LAYOUT', 'PAGE', 'COMPOSANT', 'LIB', 'UTILS', 'NEXT', 'STORE', 'API', 'CONFIG', 'MIDDLEWARE', 'SCHEMA', 'ACTION', 'HOOK', 'STYLE', 'TEST', 'DOCUMENTATION', 'SCRIPT', 'OTHER'] },
  { name: 'SyncStatus', values: ['SYNCED', 'LOCAL_NEWER', 'DB_NEWER', 'CONFLICT', 'MISSING_LOCAL', 'MISSING_DB'] },
  { name: 'LogAction', values: ['SCAN', 'CREATE', 'UPDATE', 'DELETE', 'SYNC', 'VALIDATE', 'DEPLOY', 'ROLLBACK', 'IMPORT', 'EXPORT', 'GENERATE', 'OTHER'] },
  { name: 'LogCategory', values: ['SYSTEM', 'DATABASE', 'FILESYSTEM', 'API', 'SECURITY', 'USER', 'FEATURE', 'SCHEMA', 'DEPLOYMENT'] },
  { name: 'LogStatus', values: ['SUCCESS', 'WARNING', 'ERROR', 'INFO', 'PENDING', 'CANCELLED'] },
  { name: 'OwnerRole', values: ['ADMIN', 'MANAGER', 'VIEWER'] },
]

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

function DatabasePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'auth' | 'dev' | 'domain'>('all')

  const filteredModels = models.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          m.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          m.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { value: 'all', label: '📚 Tous', icon: <Database className="w-4 h-4" /> },
    { value: 'auth', label: '🔐 Auth', icon: <Shield className="w-4 h-4" /> },
    { value: 'dev', label: '🛠️ DevTools', icon: <Wrench className="w-4 h-4" /> },
    { value: 'domain', label: '📦 Domain', icon: <Package className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                <Database className="w-8 h-8 text-orange-500" />
                Base de données
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Documentation complète des modèles Prisma de Food Brand
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Table className="w-3 h-3" />
                {models.length} modèles
              </Badge>
              <Badge variant="outline" className="gap-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <List className="w-3 h-3" />
                {enums.length} enums
              </Badge>
            </div>
          </div>
        </header>

        {/* Filtres et recherche */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg 
                         bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.value as any)}
                className="gap-2"
              >
                {cat.icon}
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Liste des modèles */}
        <div className="space-y-4">
          {filteredModels.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>

        {/* Enums */}
        <section className="mt-12">
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                <List className="w-5 h-5 text-orange-500" />
                Enums
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Liste de tous les enums utilisés dans le schéma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enums.map((enumItem) => (
                  <div key={enumItem.name} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">
                      {enumItem.name}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {enumItem.values.map((value) => (
                        <Badge key={value} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

// ============================================
// COMPOSANT MODEL CARD
// ============================================

function ModelCard({ model }: { model: Model }) {
  const [isOpen, setIsOpen] = useState(false)

  const categoryColors = {
    auth: 'border-blue-200 dark:border-blue-800',
    dev: 'border-orange-200 dark:border-orange-800',
    domain: 'border-green-200 dark:border-green-800',
  }

  const categoryLabels = {
    auth: '🔐 Auth',
    dev: '🛠️ DevTools',
    domain: '📦 Domain',
  }

  return (
    <Card className={`border-l-4 ${categoryColors[model.category]} shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800`}>
      <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {model.icon}
            </div>
            <div>
              <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                {model.name}
                <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                  {model.tableName}
                </Badge>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                {model.label} • {categoryLabels[model.category]}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {model.fields.length} champs
            </Badge>
            <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
          {model.description}
        </p>
      </CardHeader>

      {isOpen && (
        <CardContent className="pt-0">
          <Separator className="mb-4 bg-slate-200 dark:bg-slate-700" />

          {/* Champs */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
              <Type className="w-4 h-4 text-orange-500" />
              Champs
            </h4>
            <div className="space-y-1">
              {model.fields.map((field) => (
                <div key={field.name} className="flex flex-wrap items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm">
                  <div className="flex items-center gap-2 flex-wrap min-w-[180px]">
                    <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                      {field.name}
                    </span>
                    <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                      {field.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 flex-1">
                    {field.isId && <Badge className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">@id</Badge>}
                    {field.isUnique && <Badge className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">@unique</Badge>}
                    {field.isOptional && <Badge className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">?</Badge>}
                    {field.isList && <Badge className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">[]</Badge>}
                    {field.isCreatedAt && <Badge className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">@createdAt</Badge>}
                    {field.isUpdatedAt && <Badge className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">@updatedAt</Badge>}
                    {field.defaultValue && <Badge className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">default: {field.defaultValue}</Badge>}
                    {field.relation && <Badge className="text-xs bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">→ {field.relation}</Badge>}
                  </div>
                  <div className="w-full text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {field.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relations */}
          {model.relations.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-orange-500" />
                Relations
              </h4>
              <div className="space-y-1">
                {model.relations.map((rel, idx) => (
                  <div key={idx} className="flex flex-wrap items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm">
                    <span className="font-mono text-slate-700 dark:text-slate-300">{rel.from}</span>
                    <span className="text-slate-400">→</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300">{rel.to}</span>
                    <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                      {rel.type}
                    </Badge>
                    {rel.description && (
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        • {rel.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Index */}
          {model.indexes.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                <Hash className="w-4 h-4 text-orange-500" />
                Index
              </h4>
              <div className="flex flex-wrap gap-1">
                {model.indexes.map((idx) => (
                  <Badge key={idx} variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                    {idx}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}

export default DatabasePage