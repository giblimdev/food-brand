//@/app/r&d/devHelp/ChartSample.tsx

//type :  
/*role : */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 












'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// ------------------------------------------------------------
// Données fictives pour les graphiques
// ------------------------------------------------------------
const monthlyData = [
  { name: 'Jan', ventes: 4000, commandes: 2400, revenus: 2400 },
  { name: 'Fév', ventes: 3000, commandes: 1398, revenus: 2210 },
  { name: 'Mar', ventes: 2000, commandes: 9800, revenus: 2290 },
  { name: 'Avr', ventes: 2780, commandes: 3908, revenus: 2000 },
  { name: 'Mai', ventes: 1890, commandes: 4800, revenus: 2181 },
  { name: 'Juin', ventes: 2390, commandes: 3800, revenus: 2500 },
  { name: 'Juil', ventes: 3490, commandes: 4300, revenus: 2100 },
]

const pieData = [
  { name: 'Restaurant', value: 40 },
  { name: 'Fast Food', value: 25 },
  { name: 'Café', value: 20 },
  { name: 'Traiteur', value: 15 },
]

const COLORS = ['#a855f7', '#3b82f6', '#f472b6', '#f59e0b']

// ------------------------------------------------------------
// Composants d'indicateurs
// ------------------------------------------------------------
function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
}: {
  title: string
  value: string
  change: string
  icon: React.ElementType
  trend: 'up' | 'down'
}) {
  const isUp = trend === 'up'
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-fuchsia-500/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={`text-xs font-medium flex items-center gap-1 ${
              isUp ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {isUp ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {change}
          </span>
        </div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
      </CardContent>
    </Card>
  )
}

// ------------------------------------------------------------
// Page principale
// ------------------------------------------------------------
export default function GraphiqueChart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-fuchsia-400" />
              Tableau de bord
            </h1>
            <p className="text-gray-300 mt-1">Analyse des performances et tendances</p>
          </div>
          <div className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Dernière mise à jour : aujourd'hui
          </div>
        </div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Ventes totales"
            value="12 450 €"
            change="+12.5%"
            icon={DollarSign}
            trend="up"
          />
          <StatCard
            title="Commandes"
            value="1 234"
            change="+8.2%"
            icon={ShoppingCart}
            trend="up"
          />
          <StatCard
            title="Utilisateurs"
            value="5 678"
            change="-2.1%"
            icon={Users}
            trend="down"
          />
          <StatCard
            title="Produits"
            value="89"
            change="+4.3%"
            icon={Package}
            trend="up"
          />
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* BarChart : Évolution des ventes */}
          <Card className="lg:col-span-2 bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg">Évolution mensuelle</CardTitle>
              <CardDescription className="text-gray-400">
                Ventes, commandes et revenus sur 7 mois
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                      }}
                    />
                    <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                    <Bar dataKey="ventes" fill="#a855f7" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="commandes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="revenus" fill="#f472b6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* PieChart : Répartition par catégorie */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg">Répartition par catégorie</CardTitle>
              <CardDescription className="text-gray-400">Part de marché</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ligne de tendance (optionnel) */}
        <div className="mt-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg">Tendance des revenus</CardTitle>
              <CardDescription className="text-gray-400">
                Évolution des revenus sur la période
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                      }}
                    />
                    <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                    <Line
                      type="monotone"
                      dataKey="revenus"
                      stroke="#f472b6"
                      strokeWidth={2}
                      dot={{ fill: '#f472b6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          <span className="flex items-center justify-center gap-2">
            <TrendingUp className="h-3 w-3 text-fuchsia-400" />
            Données simulées – Tableau de bord Food Brand
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}