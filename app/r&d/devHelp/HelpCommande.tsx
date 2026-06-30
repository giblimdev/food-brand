//HelpCommande.tsx

//type :  
/*role : */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

/*
liste des composant schadcn. 
commandes github. 
commandes prisma. 
liste des bibliotheque utilisé */

// app/r&d/help-commands/page.tsx
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
import {
  Copy,
  Check,
  Terminal,
  Package,
  GitBranch,
  Database,
  Layers,
  Code2,
  BookOpen,
  Command,
  Server,
  Shield,
  Zap,
  Sparkles,
  Rocket,
  Wrench,
  FileCode,
  FolderTree,
  Search,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronRight,
  ChevronDown,
  ExternalLink
} from 'lucide-react'

function HelpCommandsPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                <Command className="w-8 h-8 text-orange-500" />
                Help Commands
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Toutes les commandes et composants utiles pour Food Brand
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Package className="w-3 h-3" />
                36 dépendances
              </Badge>
              <Badge variant="outline" className="gap-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Layers className="w-3 h-3" />
                52 composants
              </Badge>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="shadcn" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-slate-100 dark:bg-slate-800">
            <TabsTrigger value="shadcn" className="gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 text-slate-700 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              <Layers className="w-4 h-4" />
              ShadCN
            </TabsTrigger>
            <TabsTrigger value="github" className="gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 text-slate-700 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              <GitBranch className="w-4 h-4" />
              GitHub
            </TabsTrigger>
            <TabsTrigger value="prisma" className="gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 text-slate-700 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              <Database className="w-4 h-4" />
              Prisma
            </TabsTrigger>
            <TabsTrigger value="dependencies" className="gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 text-slate-700 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white">
              <Package className="w-4 h-4" />
              Dépendances
            </TabsTrigger>
          </TabsList>

          {/* Tab: ShadCN */}
          <TabsContent value="shadcn">
            <ShadCNTab copyToClipboard={copyToClipboard} copied={copied} />
          </TabsContent>

          {/* Tab: GitHub */}
          <TabsContent value="github">
            <GitHubTab copyToClipboard={copyToClipboard} copied={copied} />
          </TabsContent>

          {/* Tab: Prisma */}
          <TabsContent value="prisma">
            <PrismaTab copyToClipboard={copyToClipboard} copied={copied} />
          </TabsContent>

          {/* Tab: Dependencies */}
          <TabsContent value="dependencies">
            <DependenciesTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// ============================================
// 1. TAB SHADCN
// ============================================

function ShadCNTab({ copyToClipboard, copied }: any) {
  return (
    <div className="space-y-6">
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Layers className="w-5 h-5 text-orange-500" />
            Composants ShadCN disponibles
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Liste de tous les composants ShadCN installés dans le projet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {shadcnComponents.map((comp) => (
              <div
                key={comp}
                className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm font-mono hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors text-slate-800 dark:text-slate-200"
              >
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                {comp}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Terminal className="w-5 h-5 text-orange-500" />
            Commandes d'installation ShadCN
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Ajouter de nouveaux composants ShadCN au projet
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {shadcnCommands.map((cmd) => (
            <div key={cmd.id} className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-900 dark:bg-slate-950 rounded-lg">
                <code className="text-sm text-white font-mono">{cmd.command}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                >
                  {copied === cmd.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {cmd.description}
              </p>
              <Separator className="bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// 2. TAB GITHUB
// ============================================

function GitHubTab({ copyToClipboard, copied }: any) {
  return (
    <div className="space-y-6">
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <GitBranch className="w-5 h-5 text-orange-500" />
            Commandes GitHub
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Commandes Git essentielles pour le projet
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {githubCommands.map((cmd) => (
            <div key={cmd.id} className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-900 dark:bg-slate-950 rounded-lg">
                <code className="text-sm text-white font-mono">{cmd.command}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                >
                  {copied === cmd.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {cmd.description}
              </p>
              <Separator className="bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <BookOpen className="w-5 h-5 text-orange-500" />
            Workflow Git recommandé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                <span className="text-orange-500 font-bold">1.</span> Créer une branche
              </div>
              <code className="text-xs font-mono text-slate-700 dark:text-slate-300 block mt-1">
                git checkout -b feature/nom-de-la-feature
              </code>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                <span className="text-orange-500 font-bold">2.</span> Commiter les changements
              </div>
              <code className="text-xs font-mono text-slate-700 dark:text-slate-300 block mt-1">
                git add . &amp;&amp; git commit -m "feat: description"
              </code>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                <span className="text-orange-500 font-bold">3.</span> Pusher et créer une PR
              </div>
              <code className="text-xs font-mono text-slate-700 dark:text-slate-300 block mt-1">
                git push origin feature/nom-de-la-feature
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// 3. TAB PRISMA
// ============================================

function PrismaTab({ copyToClipboard, copied }: any) {
  return (
    <div className="space-y-6">
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Database className="w-5 h-5 text-orange-500" />
            Commandes Prisma
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Toutes les commandes Prisma pour la gestion de la base de données
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {prismaCommands.map((cmd) => (
            <div key={cmd.id} className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-900 dark:bg-slate-950 rounded-lg">
                <code className="text-sm text-white font-mono">{cmd.command}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                  onClick={() => copyToClipboard(cmd.command, cmd.id)}
                >
                  {copied === cmd.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {cmd.description}
              </p>
              <Separator className="bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// 4. TAB DEPENDENCIES
// ============================================

function DependenciesTab() {
  return (
    <div className="space-y-6">
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Package className="w-5 h-5 text-orange-500" />
            Dépendances du projet
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Liste complète des bibliothèques utilisées dans Food Brand
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {/* Dependencies */}
            <AccordionItem value="dependencies" className="border border-slate-200 dark:border-slate-700 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-3 text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Dependencies</span>
                  <Badge variant="secondary" className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    36
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-3">
                  {dependencies.map((dep) => (
                    <div
                      key={dep.name}
                      className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm"
                    >
                      <span className="font-mono text-slate-800 dark:text-slate-200">{dep.name}</span>
                      <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                        {dep.version}
                      </Badge>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* DevDependencies */}
            <AccordionItem value="devDependencies" className="border border-slate-200 dark:border-slate-700 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-3 text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">DevDependencies</span>
                  <Badge variant="secondary" className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    6
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-3">
                  {devDependencies.map((dep) => (
                    <div
                      key={dep.name}
                      className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm"
                    >
                      <span className="font-mono text-slate-800 dark:text-slate-200">{dep.name}</span>
                      <Badge variant="outline" className="text-xs border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                        {dep.version}
                      </Badge>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// DONNÉES
// ============================================

// Composants ShadCN
const shadcnComponents = [
  'Accordion', 'Alert', 'AlertDialog', 'AspectRatio', 'Avatar',
  'Badge', 'Breadcrumb', 'Button', 'Calendar', 'Card',
  'Carousel', 'Checkbox', 'Collapsible', 'Combobox', 'Command',
  'ContextMenu', 'DataTable', 'DatePicker', 'Dialog', 'Drawer',
  'DropdownMenu', 'Form', 'HoverCard', 'Input', 'InputOtp',
  'Label', 'Menubar', 'NavigationMenu', 'Pagination', 'Popover',
  'Progress', 'RadioGroup', 'Resizable', 'ScrollArea', 'Select',
  'Separator', 'Sheet', 'Skeleton', 'Slider', 'Sonner',
  'Switch', 'Table', 'Tabs', 'Textarea', 'Toast',
  'Toggle', 'ToggleGroup', 'Tooltip'
]

// Commandes ShadCN
const shadcnCommands = [
  { id: 'shadcn-init', command: 'npx shadcn@latest init', description: 'Initialiser ShadCN dans le projet' },
  { id: 'shadcn-add', command: 'npx shadcn@latest add [component]', description: 'Ajouter un composant spécifique (ex: button, card, dialog)' },
  { id: 'shadcn-add-all', command: 'npx shadcn@latest add -a', description: 'Ajouter tous les composants ShadCN' },
  { id: 'shadcn-add-multiple', command: 'npx shadcn@latest add button card dialog', description: 'Ajouter plusieurs composants en une fois' },
  { id: 'shadcn-update', command: 'npx shadcn@latest update', description: 'Mettre à jour tous les composants ShadCN' },
]

// Commandes GitHub
const githubCommands = [
  { id: 'git-clone', command: 'git clone https://github.com/food-brand/food-brand.git', description: 'Cloner le dépôt' },
  { id: 'git-branch', command: 'git checkout -b feature/nom-de-la-feature', description: 'Créer une nouvelle branche' },
  { id: 'git-add-commit', command: 'git add . && git commit -m "feat: description"', description: 'Ajouter et commiter les changements' },
  { id: 'git-push', command: 'git push origin feature/nom-de-la-feature', description: 'Pousser la branche sur GitHub' },
  { id: 'git-pull', command: 'git pull origin main', description: 'Récupérer les dernières modifications' },
  { id: 'git-status', command: 'git status', description: 'Voir l\'état des fichiers modifiés' },
  { id: 'git-log', command: 'git log --oneline --graph --all', description: 'Voir l\'historique des commits' },
]

// Commandes Prisma
const prismaCommands = [
  { id: 'prisma-generate', command: 'npx prisma generate', description: 'Générer les types Prisma Client' },
  { id: 'prisma-migrate-dev', command: 'npx prisma migrate dev --name nom_de_la_migration', description: 'Créer et appliquer une migration en développement' },
  { id: 'prisma-migrate-deploy', command: 'npx prisma migrate deploy', description: 'Appliquer les migrations en production' },
  { id: 'prisma-studio', command: 'npx prisma studio', description: 'Ouvrir l\'interface Prisma Studio' },
  { id: 'prisma-db-pull', command: 'npx prisma db pull', description: 'Importer le schéma de la base de données' },
  { id: 'prisma-db-push', command: 'npx prisma db push', description: 'Pousser le schéma vers la base de données' },
  { id: 'prisma-format', command: 'npx prisma format', description: 'Formater le fichier schema.prisma' },
  { id: 'prisma-validate', command: 'npx prisma validate', description: 'Valider le fichier schema.prisma' },
  { id: 'prisma-reset', command: 'npx prisma migrate reset', description: 'Réinitialiser la base de données' },
  { id: 'prisma-seed', command: 'npx prisma db seed', description: 'Exécuter le script de seeding' },
]

// Dependencies
const dependencies = [
  { name: '@better-auth/prisma-adapter', version: '^1.6.22' },
  { name: '@dnd-kit/core', version: '^6.3.1' },
  { name: '@dnd-kit/sortable', version: '^10.0.0' },
  { name: '@dnd-kit/utilities', version: '^3.2.2' },
  { name: '@hookform/resolvers', version: '^5.4.0' },
  { name: '@next-safe-action/adapter-react-hook-form', version: '^2.0.6' },
  { name: '@prisma/adapter-pg', version: '^7.8.0' },
  { name: '@prisma/client', version: '^7.8.0' },
  { name: '@tanstack/react-query', version: '^5.101.2' },
  { name: 'better-auth', version: '^1.6.22' },
  { name: 'class-variance-authority', version: '^0.7.1' },
  { name: 'clsx', version: '^2.1.1' },
  { name: 'date-fns', version: '^4.4.0' },
  { name: 'date-fns-tz', version: '^3.2.0' },
  { name: 'framer-motion', version: '^12.42.0' },
  { name: 'lucide-react', version: '^1.21.0' },
  { name: 'next', version: '16.2.9' },
  { name: 'next-safe-action', version: '^8.5.5' },
  { name: 'next-sitemap', version: '^4.2.3' },
  { name: 'prisma', version: '^7.8.0' },
  { name: 'radix-ui', version: '^1.6.0' },
  { name: 'react', version: '19.2.4' },
  { name: 'react-dom', version: '19.2.4' },
  { name: 'react-hook-form', version: '^7.80.0' },
  { name: 'react-syntax-highlighter', version: '^16.1.1' },
  { name: 'shadcn', version: '^4.12.0' },
  { name: 'sharp', version: '^0.35.2' },
  { name: 'sonner', version: '^2.0.7' },
  { name: 'tailwind-merge', version: '^3.6.0' },
  { name: 'tw-animate-css', version: '^1.4.0' },
  { name: 'zod', version: '^4.4.3' },
  { name: 'zustand', version: '^5.0.14' },
]

// DevDependencies
const devDependencies = [
  { name: '@tailwindcss/postcss', version: '^4' },
  { name: '@types/node', version: '^20' },
  { name: '@types/react', version: '^19' },
  { name: '@types/react-dom', version: '^19' },
  { name: 'tailwindcss', version: '^4' },
  { name: 'typescript', version: '^5' },
]

export default HelpCommandsPage