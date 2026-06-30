//layout/NavData.ts



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



import { 
  Home, 
  Utensils, 
  LayoutDashboard, 
  Star, 
  ShoppingBag,
  Pizza,
  Coffee,
  Beef,
  Flame,
  UtensilsCrossed,
  Award,
  Leaf,
  Drumstick,
  Cookie,
  Store,
  MapPin,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Shield,
  Globe,
  Truck,
  PlusCircle,
  TrendingUp,
  Zap,
  Sparkles,
  Search,
  Filter,
  Heart,
  ThumbsUp,
  Share2,
  MessageCircle,
  Phone,
  Clock,
  Calendar,
  CreditCard,
  Wallet,
  Gift,
  Package,
  Box,
  Layers,
  Menu
} from 'lucide-react';

// Interface pour un élément de navigation
export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon: any; // L'icône Lucide React
  children?: NavItem[];

  badgeColor?: string;
  isActive?: boolean;
}
// Menu principal - Navigation principale
export const mainNav: NavItem[] = [
  {
    id: 'home',
    label: 'Accueil',
    href: '/',
    icon: Home,
  },  {
    id: 'client',
    label: 'Espace Clients',
    href: '/client',
    icon: Home,
  },  {
    id: 'pro',
    label: 'Espace Pro',
    href: '/pro',
    icon: Home,
  },
  {
    id: 'r&d',
    label: 'R&D',
    href: '/r&d',
    icon: Home,
  },

  {
    id: 'restaurants',
    label: 'Restaurants',
    icon: Store,
    children: [
      {
        id: 'all-restaurants',
        label: 'Tous les restaurants',
        href: '/restaurants',
        icon: Store,
      },
      {
        id: 'popular-restaurants',
        label: 'Les plus populaires',
        href: '/restaurants/popular',
        icon: Star,
        
        badgeColor: 'bg-red-500',
      },
      {
        id: 'nearby-restaurants',
        label: 'Proches de moi',
        href: '/restaurants/nearby',
        icon: MapPin,
        
        badgeColor: 'bg-green-500',
      },
      {
        id: 'new-restaurants',
        label: 'Nouveaux restaurants',
        href: '/restaurants/new',
        icon: Sparkles,
        
        badgeColor: 'bg-purple-500',
      },
    ],
  },
  {
    id: 'categories',
    label: 'Catégories',
    icon: Utensils,
    children: [
      {
        id: 'cat-pizza',
        label: 'Pizza / Italienne',
        href: '/categories/pizza',
        icon: Pizza,
        badgeColor: 'bg-red-500',
      },
      {
        id: 'cat-colombian',
        label: 'Colombienne / Payanèse',
        href: '/categories/colombian',
        icon: Coffee,
        badgeColor: 'bg-yellow-600',
      },
      {
        id: 'cat-parrilla',
        label: 'Parrilla / Viandes',
        href: '/categories/parrilla',
        icon: Beef,
        
        badgeColor: 'bg-amber-700',
      },
      {
        id: 'cat-fastfood',
        label: 'Fast Food',
        href: '/categories/fastfood',
        icon: Menu,
        
        badgeColor: 'bg-orange-500',
      },
      {
        id: 'cat-asian',
        label: 'Cuisine Asiatique',
        href: '/categories/asian',
        icon: Menu,
        badgeColor: 'bg-red-700',
      },
      {
        id: 'cat-mexican',
        label: 'Mexicaine',
        href: '/categories/mexican',
        icon: Flame,
        badgeColor: 'bg-green-600',
      },
      {
        id: 'cat-lebanese',
        label: 'Libanaise / Arabe',
        href: '/categories/lebanese',
        icon: UtensilsCrossed,
      },
      {
        id: 'cat-peruvian',
        label: 'Péruvienne',
        href: '/categories/peruvian',
        icon: Award,
      },
      {
        id: 'cat-healthy',
        label: 'Healthy / Fusion',
        href: '/categories/healthy',
        icon: Leaf,
        
        badgeColor: 'bg-green-500',
      },
      {
        id: 'cat-chicken',
        label: 'Poulet Rôti / Broaster',
        href: '/categories/chicken',
        icon: Drumstick,
      },
      {
        id: 'cat-creperie',
        label: 'Crêperie',
        href: '/categories/creperie',
        icon: Cookie,
      },
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    badgeColor: 'bg-purple-500',
  },
];