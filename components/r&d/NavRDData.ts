// R&D/NavRDData.ts



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


import { 
  Home, 
  Star, 
  Layers, 
  Database, 
  Code2,
  LayoutDashboard,
  Sparkles,
  Server,
  HardDrive,
  Terminal
} from 'lucide-react';

// Interface pour un élément de navigation
export interface NavItemRD {
  id: string;
  label: string;
  href: string;
  icon: any;
  children?: NavItemRD[]; // Possibilité d'ajouter des sous-pages
  isActive?: boolean;
}

// Menu principal - 5 pages principales avec possibilité d'enfants
export const mainNav: NavItemRD[] = [
  {
    id: 'home',
    label: 'Accueil',
    href: '/',
    icon: Home,
    isActive: true,
    children: [] // Prêt pour des sous-pages futures
  },
    {
    id: 'homeRD',
    label: 'Accueil R&D',
    href: '/r&d',
    icon: Home,
    isActive: true,
    children: [] // Prêt pour des sous-pages futures
  },
  {
    id: 'features',
    label: 'Features',
    href: '/r&d/features',
    icon: Star,
    children: [] // Prêt pour des sous-pages futures
  },
  {
    id: 'architecture',
    label: 'Architecture',
    href: '/r&d/architectures',
    icon: Layers,
    children: [] // Prêt pour des sous-pages futures
  },
  {
    id: 'db',
    label: 'Base de données',
    href: '/r&d/db',
    icon: Database,
    children: [] // Prêt pour des sous-pages futures
  },
  {
    id: 'stack',
    label: 'Stack technique',
    href: '/r&d/stack',
    icon: Code2,
    children: [] // Prêt pour des sous-pages futures
  },
    {
    id: 'senario',
    label: 'Senarios',
    href: '/r&d/senario',
    icon: Code2,
    children: [] // Prêt pour des sous-pages futures
  },

  {
    id: 'devtools',
    label: 'DevTools',
    href: '/r&d/devTools',
    icon: Star,
    children: [  {
    id: '',
    label: '',
    href: '',
    icon: Star,
    children: [] // Prêt pour des sous-pages futures
  },] // Prêt pour des sous-pages futures
  },
    {
    id: 'devhelp',
    label: 'DevHelp',
    href: '/r&d/devHelp',
    icon: Code2,
    children: [] // Prêt pour des sous-pages futures
  },

];

// Navigation secondaire - Utilitaires
export const secondaryNav: NavItemRD[] = [
  {
    id: 'settings',
    label: 'Paramètres',
    href: '/r&d/settings',
    icon: LayoutDashboard,
    children: []
  },
  {
    id: 'help',
    label: 'Aide',
    href: '/public/help',
    icon: Terminal,
    children: []
  }
];

// Fonction utilitaire pour ajouter des enfants à une page
export const addChildrenToNavItem = (items: NavItemRD[], parentId: string, children: NavItemRD[]): NavItemRD[] => {
  return items.map(item => {
    if (item.id === parentId) {
      return { ...item, children: [...(item.children || []), ...children] };
    }
    return item;
  });
};

// Export par défaut
export default {
  mainNav,
  secondaryNav,
  addChildrenToNavItem
};