//@/app/r&d/page.tsx

//type : page 
/*role : 
affiches l'arborecence et les script*/              
/*fonctionnement : utilise le composant FileRxplorer et expose en props EXPLORE_ROOT*/ 
//imports [@/componant/, @/config] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



import React from 'react';
import { files, fileStats, filesByType } from './architectureData';
import {
  FolderTree,
  FileCode,
  Layout,
  Database,
  Shield,
  Palette,
  Grip,
  Calendar,
  Image,
  Search,
  Wrench,
  Server,
  Brain,
  FormInput,
Network,
  Settings,
  Users,
  ShoppingCart,
  Home,
  HelpCircle,
  UserCog,
  Briefcase,
  ShieldCheck,
  FileJson,
  FileText,
  ChevronRight,
  FolderOpen,
  File,
  Code2
} from 'lucide-react';
import LocalFileExplorer from './LocalFileExplorer';

// Fonction pour obtenir l'icône selon le type de fichier
const getFileIcon = (type: string) => {
  const icons: Record<string, React.ReactNode> = {
    layout: <Layout className="w-4 h-4 text-blue-500" />,
    page: <FileCode className="w-4 h-4 text-green-500" />,
    composant: <Palette className="w-4 h-4 text-purple-500" />,
    lib: <Database className="w-4 h-4 text-red-500" />,
    utils: <Wrench className="w-4 h-4 text-yellow-500" />,
    next: <Server className="w-4 h-4 text-black dark:text-white" />,
    store: <Brain className="w-4 h-4 text-pink-500" />,
    api: <Network className="w-4 h-4 text-orange-500" />,
    config: <Settings className="w-4 h-4 text-gray-500" />,
    middleware: <Shield className="w-4 h-4 text-indigo-500" />,
    schema: <FileJson className="w-4 h-4 text-teal-500" />,
    action: <Code2 className="w-4 h-4 text-cyan-500" />
  };
  return icons[type] || <File className="w-4 h-4 text-gray-400" />;
};

// Fonction pour obtenir l'icône de dossier selon la route
const getFolderIcon = (path: string) => {
  if (path.includes('/public')) return <Home className="w-4 h-4 text-blue-400" />;
  if (path.includes('/auth')) return <Shield className="w-4 h-4 text-indigo-400" />;
  if (path.includes('/client')) return <Users className="w-4 h-4 text-green-400" />;
  if (path.includes('/pro')) return <Briefcase className="w-4 h-4 text-orange-400" />;
  if (path.includes('/admin')) return <ShieldCheck className="w-4 h-4 text-red-400" />;
  if (path.includes('/api')) return <Network className="w-4 h-4 text-purple-400" />;
  if (path.includes('/components')) return <Palette className="w-4 h-4 text-pink-400" />;
  if (path.includes('/lib')) return <Database className="w-4 h-4 text-red-400" />;
  if (path.includes('/store')) return <Brain className="w-4 h-4 text-yellow-400" />;
  if (path.includes('/prisma')) return <Database className="w-4 h-4 text-emerald-400" />;
  return <FolderOpen className="w-4 h-4 text-gray-400" />;
};

// Composant pour afficher un arbre de fichiers
const FileTree: React.FC<{ files: typeof files; parentId: string | null; level?: number }> = ({ 
  files, 
  parentId, 
  level = 0 
}) => {
  const children = files.filter(f => f.parentId === parentId);
  
  if (children.length === 0) return null;

  return (
    <ul className={`space-y-1 ${level > 0 ? 'ml-6 border-l-2 border-slate-200 dark:border-slate-700 pl-4' : ''}`}>
      {children.map((file) => {
        const hasChildren = files.some(f => f.parentId === file.id);
        const isFolder = hasChildren || file.type === 'layout' || file.type === 'next';
        
        return (
          <li key={file.id} className="group">
            <div className={`
              flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
              hover:bg-slate-100 dark:hover:bg-slate-700/50
              ${isFolder ? 'font-medium' : ''}
            `}>
              {isFolder ? (
                <>
                  {getFolderIcon(file.path)}
                  <span className="text-slate-700 dark:text-slate-300">
                    {file.label}
                  </span>
                  <span className="text-xs text-slate-400 ml-2">
                    ({files.filter(f => f.parentId === file.id).length})
                  </span>
                </>
              ) : (
                <>
                  {getFileIcon(file.type)}
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {file.label}
                  </span>
                  {file.role && (
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                      • {file.role}
                    </span>
                  )}
                  {file.fonctionnement && (
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-2 hidden lg:inline">
                      - {file.fonctionnement}
                    </span>
                  )}
                </>
              )}
            </div>
            {hasChildren && (
              <FileTree files={files} parentId={file.id} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

function ArchitecturePage() {
  // Statistiques par type
  const typeStats = Object.entries(fileStats.byType).map(([type, count]) => ({
    type,
    count,
    icon: getFileIcon(type)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* En-tête */}
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl mb-6">
            <FolderTree className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Architecture - Food Brand
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Structure complète des fichiers et composants de l'application
          </p>
          <div className="mt-4 inline-flex items-center gap-4 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-md">
            <span className="text-sm font-medium">
              📊 {fileStats.total} fichiers
            </span>
            <span className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
            <span className="text-sm font-medium">
              📁 {Object.keys(filesByType).length} types
            </span>
          </div>
        </header>

        {/* LocalFileExplorer */}
        <section className="mb-16">
          <LocalFileExplorer />
        </section>

        {/* Statistiques des fichiers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Search className="w-6 h-6 text-orange-500" />
            Statistiques par type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {typeStats.map((stat) => (
              <div 
                key={stat.type}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {stat.count}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                  {stat.type}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arbre des fichiers */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FolderTree className="w-6 h-6 text-orange-500" />
              Arborescence des fichiers
            </h2>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-blue-500" /> Layout
              </span>
              <span className="inline-flex items-center gap-1 ml-3">
                <span className="w-3 h-3 rounded bg-green-500" /> Page
              </span>
              <span className="inline-flex items-center gap-1 ml-3">
                <span className="w-3 h-3 rounded bg-purple-500" /> Composant
              </span>
              <span className="inline-flex items-center gap-1 ml-3">
                <span className="w-3 h-3 rounded bg-red-500" /> Lib
              </span>
              <span className="inline-flex items-center gap-1 ml-3">
                <span className="w-3 h-3 rounded bg-orange-500" /> API
              </span>
            </div>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <FileTree files={files} parentId="root" />
          </div>

          {/* Légende des dossiers */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-blue-400" />
              <span>Public</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>Auth</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>Client</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-purple-400" />
              <span>API</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-pink-400" />
              <span>Components</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Lib/Prisma</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-8">
          <p>
            Architecture de <span className="font-semibold text-orange-600">Food Brand</span> — 
            {new Date().getFullYear()} • {fileStats.total} fichiers organisés
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ArchitecturePage;