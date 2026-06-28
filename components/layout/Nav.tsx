// components/layout/Nav.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { mainNav, NavItem } from './navData';

interface NavProps {
  mobile?: boolean;
}

function Nav({ mobile = false }: NavProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href?: string): boolean => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isItemActive = (item: NavItem): boolean => {
    if (item.href && isActive(item.href)) return true;
    if (item.children) {
      return item.children.some(child => isItemActive(child));
    }
    return false;
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const getItemPath = (item: NavItem): string => {
    if (item.href) return item.href;
    if (item.children && item.children.length > 0) {
      const firstChild = item.children[0];
      if (firstChild.href) return firstChild.href;
    }
    return '#';
  };

  const renderNavItem = (item: NavItem, depth: number = 0): React.ReactNode => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdown === item.id;
    const active = isItemActive(item);
    const itemPath = getItemPath(item);

    if (mobile) {
      if (hasChildren) {
        return (
          <div key={item.id} className="space-y-1">
            <button
              onClick={() => toggleDropdown(item.id)}
              className={`
                flex items-center justify-between w-full px-4 py-3 rounded-xl
                transition-all duration-200
                ${active 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-medium' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${active ? 'text-blue-500' : ''}`} />
                <span className="text-sm">{item.label}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="ml-6 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                {item.children!.map((child: NavItem) => renderNavItem(child, depth + 1))}
              </div>
            )}
          </div>
        );
      }

      return (
        <Link
          key={item.id}
          href={itemPath}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-xl
            transition-all duration-200
            ${active 
              ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-medium' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }
          `}
        >
          <item.icon className={`w-5 h-5 ${active ? 'text-blue-500' : ''}`} />
          <span className="text-sm">{item.label}</span>
        </Link>
      );
    }

    if (hasChildren) {
      return (
        <div 
          key={item.id} 
          className="relative group"
          onMouseEnter={() => setOpenDropdown(item.id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            className={`
              flex items-center gap-2 px-3 py-2 rounded-xl
              text-sm font-medium transition-all duration-200
              ${active 
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <div 
            className={`
              absolute left-0 mt-2 w-64 
              bg-white dark:bg-gray-800 
              rounded-2xl shadow-2xl 
              border border-gray-100 dark:border-gray-700
              transition-all duration-200
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
          >
            <div className="p-2 space-y-1">
              {item.children!.map((child: NavItem) => {
                const childActive = isItemActive(child);
                const childPath = getItemPath(child);
                
                return (
                  <Link
                    key={child.id}
                    href={childPath}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-xl
                      transition-all duration-200
                      ${childActive 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <child.icon className="w-4 h-4" />
                    <span className="text-sm">{child.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        href={itemPath}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl
          text-sm font-medium transition-all duration-200
          ${active 
            ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
          }
        `}
      >
        <item.icon className="w-4 h-4" />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className={mobile ? 'flex flex-col space-y-1' : 'flex items-center space-x-1'}>
      {mainNav.map((item: NavItem) => renderNavItem(item))}
    </nav>
  );
}

export default Nav;