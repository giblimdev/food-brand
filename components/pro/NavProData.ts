// components/pro/NavProData.ts

///type : data
/*role : Définit la navigation principale et secondaire pour l'espace professionnel */
/*fonctionnement : Exporte des tableaux d'objets NavItemPro utilisés par NavRD pour afficher les menus */
//imports [lucide-react]
//exports [mainNav, secondaryNav, addChildrenToNavItem]
//useby [NavRD]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent.

import {
  Home,
  LayoutDashboard,
  Settings,
  HelpCircle,
  Utensils,
  ChefHat,
  Package,
  Warehouse,
  ShoppingCart,
  Truck,
  Users,
  Building2,
  UsersRound,
  UserCog,
  BarChart,
} from 'lucide-react';

// Interface pour un élément de navigation
export interface NavItemPro {
  id: string;
  label: string;
  href: string;
  icon: any;
  children?: NavItemPro[];
  isActive?: boolean;
}

// ============================================
// MENU PRINCIPAL
// ============================================
export const mainNav: NavItemPro[] = [
  // --- Accueil ---
  {
    id: 'home',
    label: 'Accueil',
    href: '/pro',
    icon: Home,
    isActive: true,
    children: [],
  },
  // --- Commandes & Livraisons ---
  {
    id: 'orders',
    label: 'Commandes',
    href: '/pro/orders',
    icon: ShoppingCart,
    children: [
      {
        id: 'orders-list',
        label: 'Commandes',
        href: '/pro/orders/list',
        icon: ShoppingCart,
      },
      {
        id: 'deliveries',
        label: 'Livraisons',
        href: '/pro/deliveries',
        icon: Truck,
      },
      {
        id: 'customers',
        label: 'Clients',
        href: '/pro/customers',
        icon: Users,
      },
],
  },
      {
      id: 'livraison',
     label: 'Livraison',
      href: '#',
      icon: Warehouse,
      children: [
        {
        id: 'livraison',
        label: 'Livraison',
        href: '/pro/livraison',
        icon: Building2,
        },
       {
        id: 'livreur',
        label: 'Livreur',
        href: '/pro/fournisseur',
        icon: Building2,
        },    
        {
        id: 'toune',
        label: 'Tournés',
        href: '/pro/circle',
        icon: Building2,
        },
        {
        id: 'message',
        label: 'Messagerie',
        href: '/pro/message',
        icon: Building2,
      }
    ]  
      },
  // --- Produits (Recettes, Ingrédients, option) ---
  {
    id: 'produc',
    label: 'Menu',
    href: '#',
    icon: Utensils,
    children: [
          {id: 'menu',
    label: 'Menu',
    href: '#',
    icon: Utensils,
          },
   {id: 'produitsu',
    label: 'Produits',
    href: '/pro/produits',
    icon: Utensils,
          },
      {
        id: 'recipes',
        label: 'Recettes',
        href: '/pro/recipes',
        icon: ChefHat,
      },
      {
        id: 'ingredients',
        label: 'Ingrédients',
        href: '/pro/ingredients',
        icon: Package,
      },
    ],
  },
    {
    id: 'marketting',
    label: 'Marketing',
    href: '/pro/marketing',
    icon: Home,
    isActive: true,
    children: [
        {
        id: 'promotions',
        label: 'Promotions',
        href: '/pro/promotions',
        icon: Package,
      },  {
        id: 'coupons',
        label: 'Coupons',
        href: '/pro/coupons',
        icon: Package,
      },  {
        id: 'happyH',
        label: 'Happy hours',
        href: '/pro/happyH',
        icon: Package,
      },  {
        id: 'pub',
        label: 'Publicités',
        href: '/pro/pub',
        icon: Package,
      },  {
        id: 'notifications',
        label: 'Notifications',
        href: '/pro/notifications',
        icon: Package,
      }
],
  },
      {
      id: 'stock',
     label: 'Stocks',
      href: '#',
      icon: Warehouse,
      children: [
        {
        id: 'stock',
        label: 'Stock',
        href: '/pro/stock',
        icon: Building2,
        },
       {
        id: 'fournisseur',
        label: 'Fournisseur',
        href: '/pro/fournisseur',
        icon: Building2,
        },    
        {
        id: 'commandPro',
        label: 'MyCommand',
        href: '/pro/commandPro',
        icon: Building2,
        },
        {
        id: 'alert',
        label: 'Alert',
        href: '/pro/alert',
        icon: Building2,
      }
    ]  
      },


  // --- Gestion (Marques, Équipes, Utilisateurs) ---
  {
    id: 'Restaurents',
    label: 'Restaurents',
    href: '#',
    icon: Building2,
    children: [
      {
        id: 'brands',
        label: 'Marques',
        href: '/pro/brands',
        icon: Building2,
      },      
      {
        id: 'restaurants',
        label: 'Restaurants',
        href: '/pro/restaurants',
        icon: Utensils,
      },
    ],
  },
  // --- Gestion (Équipes, staff) ---
  {
    id: 'management',
    label: 'Rh',
    href: '#',
    icon: Building2,
    children: [
      {
    id: 'management',
    label: 'Gestion',
    href: '/pro/management',
    icon: Building2,
      },      {
        id: 'restaurants',
        label: 'Restaurants',
        href: '/pro/restaurants',
        icon: Utensils,
      },

      {
        id: 'teams',
        label: 'Équipes',
        href: '/pro/teams',
        icon: UsersRound,
      },
      {
        id: 'staff',
        label: 'Staff',
        href: '/pro/staff',
        icon: UserCog,
      },
    ],
  },

];

// ============================================
// NAVIGATION SECONDAIRE
// ============================================
export const secondaryNav: NavItemPro[] = [
  {
    id: 'stats',
    label: 'Dashboard',
    href: '/#',
    icon: BarChart,
    children: [
    {
    id: 'Dash',
    label: 'Dashboard',
    href: '/pro/dashboardPro',
    icon: BarChart,
    },
    {
    id: 'fiance',
    label: 'Finance',
    href: '/pro/finance',
    icon: BarChart,
    },
    {
    id: 'factures',
    label: 'Factures',
    href: '/pro/Facture',
    icon: BarChart,
    },    
    {
    id: 'taxe',
    label: 'Taxes',
    href: '/pro/taxe',
    icon: BarChart,
    },]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    href: '/pro/settings',
    icon: Settings,
    children: [],
  },
  {
    id: 'help',
    label: 'Aide',
    href: '/pro/helpPro',
    icon: HelpCircle,
    children: [],
  },
];

// ============================================
// FONCTION UTILITAIRE
// ============================================
export const addChildrenToNavItem = (
  items: NavItemPro[],
  parentId: string,
  children: NavItemPro[]
): NavItemPro[] => {
  return items.map((item) => {
    if (item.id === parentId) {
      return { ...item, children: [...(item.children || []), ...children] };
    }
    return item;
  });
};

export default {
  mainNav,
  secondaryNav,
  addChildrenToNavItem,
};