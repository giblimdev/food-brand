//@/app/r&d/devHelp/graphique.tsx

///type : composant react
/*role : afficher une présentation de la charte graphique*/              
/*fonctionnement  : */ 
//imports [lucide-react, ui components, react] 
//exports [default ChartePage] 
//useby [@/app/r&d/devHelp/page/tsx]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

/*Poppins Black

Titres percutants • Fort impact visuel

Inter ExtraBold

Corps de texte • Lisibilité optimale

Outfit Bold

Éléments UI • Design system moderne 

c'est police sont elle utiliser sur le sute si oui quels layout

*/

'use client'

import React from 'react'
import {
  Palette,
  Type,
  Layout,
  Sparkles,
  Check,
  X,
  AlertCircle,
  Info,
  ChevronRight,
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Home,
  Search,
  Menu,
  Bell,
  Settings,
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// ============================================================
// DONNÉES DE LA CHARTE GRAPHIQUE
// ============================================================

const colors = {
  primary: {
    name: 'Primaires',
    description: 'Couleurs principales pour les actions, les boutons et les éléments clés.',
    colors: [
      { name: 'Fuchsia 500', hex: '#a855f7', usage: 'Boutons primaires, liens, accents' },
      { name: 'Fuchsia 400', hex: '#c084fc', usage: 'Survols, états actifs' },
      { name: 'Fuchsia 600', hex: '#9333ea', usage: 'États pressés, ombres' },
      { name: 'Blue 500', hex: '#3b82f6', usage: 'Boutons secondaires, actions alternatives' },
      { name: 'Blue 400', hex: '#60a5fa', usage: 'Survols secondaires' },
    ],
  },
  secondary: {
    name: 'Secondaires',
    description: 'Couleurs d’accentuation pour les éléments complémentaires.',
    colors: [
      { name: 'Pink 400', hex: '#f472b6', usage: 'Accents, badges' },
      { name: 'Pink 500', hex: '#ec4899', usage: 'Éléments de mise en avant' },
      { name: 'Amber 400', hex: '#f59e0b', usage: 'Avertissements, notifications' },
      { name: 'Green 400', hex: '#34d399', usage: 'Succès, validation' },
      { name: 'Red 400', hex: '#f87171', usage: 'Erreurs, suppression' },
    ],
  },
  neutral: {
    name: 'Neutres',
    description: 'Fonds, textes, bordures et éléments structurels.',
    colors: [
      { name: 'Slate 50', hex: '#f8fafc', usage: 'Fonds clairs (dark: Slate 950)' },
      { name: 'Slate 200', hex: '#e2e8f0', usage: 'Bordures légères' },
      { name: 'Slate 400', hex: '#94a3b8', usage: 'Textes secondaires' },
      { name: 'Slate 600', hex: '#475569', usage: 'Textes principaux (light)' },
      { name: 'Slate 800', hex: '#1e293b', usage: 'Fonds de cartes' },
      { name: 'Slate 900', hex: '#0f172a', usage: 'Fonds principaux (dark)' },
      { name: 'Slate 950', hex: '#020617', usage: 'Fonds très sombres' },
      { name: 'White', hex: '#ffffff', usage: 'Textes sur fond sombre' },
    ],
  },
  gradients: {
    name: 'Dégradés',
    description: 'Fonds en dégradé pour les sections principales.',
    colors: [
      { name: 'Primary Gradient', hex: 'from-slate-900 via-purple-900 to-slate-900', usage: 'Fond principal' },
      { name: 'Button Gradient', hex: 'from-blue-500 to-fuchsia-500', usage: 'Boutons principaux' },
      { name: 'Card Gradient', hex: 'bg-white/5 backdrop-blur-sm', usage: 'Cartes glassmorphism' },
    ],
  },
}

const typography = {
  fonts: [
    {
      name: 'Inter',
      fallback: 'sans-serif',
      usage: 'Titres, sous-titres, corps de texte',
      weights: [400, 500, 600, 700],
    },
    {
      name: 'JetBrains Mono',
      fallback: 'monospace',
      usage: 'Code, URLs, commandes',
      weights: [400, 500, 600],
    },
  ],
  scale: [
    { size: 'xs', value: '0.75rem', usage: 'Légendes, petits textes' },
    { size: 'sm', value: '0.875rem', usage: 'Textes secondaires, descriptions' },
    { size: 'base', value: '1rem', usage: 'Corps de texte standard' },
    { size: 'lg', value: '1.125rem', usage: 'Sous-titres' },
    { size: 'xl', value: '1.25rem', usage: 'Titres de section' },
    { size: '2xl', value: '1.5rem', usage: 'Sous-titres de page' },
    { size: '3xl', value: '1.875rem', usage: 'Titres de page' },
    { size: '4xl', value: '2.25rem', usage: 'Grands titres' },
    { size: '5xl', value: '3rem', usage: 'Très grands titres' },
  ],
}

const spacing = {
  values: [
    { size: '0', value: '0px', usage: 'Aucun espace' },
    { size: '1', value: '4px', usage: 'Très petit espace' },
    { size: '2', value: '8px', usage: 'Petit espace' },
    { size: '3', value: '12px', usage: 'Espace moyen' },
    { size: '4', value: '16px', usage: 'Espace standard' },
    { size: '6', value: '24px', usage: 'Grand espace' },
    { size: '8', value: '32px', usage: 'Très grand espace' },
    { size: '12', value: '48px', usage: 'Espace section' },
    { size: '16', value: '64px', usage: 'Espace page' },
  ],
}

// ============================================================
// COMPOSANTS DE LA CHARTE
// ============================================================

function ColorCard({ name, hex, usage, dark }: { name: string; hex: string; usage: string; dark?: boolean }) {
  const isGradient = hex.startsWith('from-')
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300">
      <div
        className="w-16 h-16 rounded-lg shrink-0 border border-white/10"
        style={
          isGradient
            ? { background: `linear-gradient(135deg, #a855f7, #3b82f6, #f472b6)` }
            : { backgroundColor: hex }
        }
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white text-sm">{name}</span>
          <span className="font-mono text-xs text-gray-400">{hex}</span>
        </div>
        <p className="text-xs text-gray-400 mt-0.5">{usage}</p>
      </div>
    </div>
  )
}

function FontCard({ name, fallback, usage, weights }: { name: string; fallback: string; usage: string; weights: number[] }) {
  return (
    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-sm text-fuchsia-400">{name}</span>
        <span className="text-xs text-gray-500">{fallback}</span>
      </div>
      <p className="text-xs text-gray-400 mb-3">{usage}</p>
      <div className="space-y-1">
        {weights.map((w) => (
          <div key={w} className="flex items-center gap-4">
            <span className="text-xs text-gray-500 w-6 font-mono">{w}</span>
            <span style={{ fontWeight: w }} className="text-white text-sm">
              L’essentiel est invisible pour les yeux.
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// PAGE PRINCIPALE
// ============================================================

export default function ChartePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10 mb-4">
            <Palette className="h-4 w-4 text-fuchsia-400" />
            <span className="text-xs font-mono text-gray-300">Guide de style</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Charte Graphique
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Un design <span className="text-fuchsia-400 font-semibold">moderne</span>, 
            {' '}<span className="text-blue-400 font-semibold">élégant</span> et 
            {' '}<span className="text-pink-400 font-semibold">cohérent</span> pour Food Brand.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Palette className="h-4 w-4" /> 3 palettes
            </span>
            <span className="flex items-center gap-1">
              <Type className="h-4 w-4" /> 2 polices
            </span>
            <span className="flex items-center gap-1">
              <Layout className="h-4 w-4" /> Design system
            </span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="couleurs" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto bg-white/5 border border-white/10 rounded-xl">
            <TabsTrigger value="couleurs" className="text-gray-300 data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300">
              <Palette className="h-4 w-4 mr-2" />
              Couleurs
            </TabsTrigger>
            <TabsTrigger value="typographie" className="text-gray-300 data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300">
              <Type className="h-4 w-4 mr-2" />
              Typographie
            </TabsTrigger>
            <TabsTrigger value="composants" className="text-gray-300 data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300">
              <Layout className="h-4 w-4 mr-2" />
              Composants
            </TabsTrigger>
          </TabsList>

          {/* ============================================================
              TAB 1 : COULEURS
              ============================================================ */}
          <TabsContent value="couleurs" className="mt-6 space-y-6">
            {/* Palette principale */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Palette className="h-5 w-5 text-fuchsia-400" />
                  Couleurs primaires
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Couleurs principales pour les actions, les boutons et les éléments clés.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {colors.primary.colors.map((c) => (
                    <ColorCard key={c.name} {...c} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Palette secondaire */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  Couleurs secondaires
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Couleurs d’accentuation pour les éléments complémentaires.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {colors.secondary.colors.map((c) => (
                    <ColorCard key={c.name} {...c} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Palette neutre */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Layout className="h-5 w-5 text-gray-400" />
                  Couleurs neutres
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fonds, textes, bordures et éléments structurels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {colors.neutral.colors.map((c) => (
                    <ColorCard key={c.name} {...c} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dégradés */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Layout className="h-5 w-5 text-blue-400" />
                  Dégradés
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fonds en dégradé pour les sections principales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {colors.gradients.colors.map((c) => (
                    <ColorCard key={c.name} {...c} hex={c.hex} usage={c.usage} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Explication des choix */}
            <Card className="bg-fuchsia-500/10 border-fuchsia-500/20">
              <CardHeader>
                <CardTitle className="text-fuchsia-300 text-base flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Pourquoi ces couleurs ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <span className="text-fuchsia-400 font-semibold">Fuchsia et Bleu</span> créent un contraste 
                    dynamique et moderne, évoquant à la fois la <span className="text-fuchsia-400">créativité</span> 
                    (fuchsia) et la <span className="text-blue-400">confiance</span> (bleu).
                  </p>
                  <p>
                    Les <span className="text-gray-200">fonds sombres</span> (slate) mettent en valeur 
                    les éléments colorés et réduisent la fatigue visuelle.
                  </p>
                  <p>
                    L’effet <span className="text-white/80 font-medium">glassmorphism</span> 
                    (fond transparent + flou) apporte de la profondeur et une esthétique moderne.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ============================================================
              TAB 2 : TYPOGRAPHIE
              ============================================================ */}
          <TabsContent value="typographie" className="mt-6 space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Type className="h-5 w-5 text-fuchsia-400" />
                  Polices de caractères
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Polices utilisées dans l’application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {typography.fonts.map((font) => (
                    <FontCard key={font.name} {...font} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Type className="h-5 w-5 text-blue-400" />
                  Hiérarchie typographique
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Tailles et usages des textes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {typography.scale.map((item) => (
                    <div
                      key={item.size}
                      className="flex items-center gap-4 p-2 rounded-lg border border-white/5"
                    >
                      <div className="w-8 text-xs text-gray-500 font-mono">{item.size}</div>
                      <div className="w-16 text-xs text-gray-500 font-mono">{item.value}</div>
                      <div className="flex-1 text-white" style={{ fontSize: item.value }}>
                        {item.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Explication des choix */}
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-blue-300 text-base flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Pourquoi ces polices ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <span className="text-white font-medium">Inter</span> est une police sans-serif 
                    moderne, très lisible sur écran, idéale pour les interfaces.
                  </p>
                  <p>
                    <span className="text-white font-medium">JetBrains Mono</span> est utilisée 
                    pour le code, les URLs et les commandes, offrant une excellente lisibilité 
                    technique.
                  </p>
                  <p>
                    La hiérarchie typographique permet de guider le regard et d’organiser 
                    l’information de manière claire et efficace.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ============================================================
              TAB 3 : COMPOSANTS
              ============================================================ */}
          <TabsContent value="composants" className="mt-6 space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Layout className="h-5 w-5 text-fuchsia-400" />
                  Composants UI
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Exemples de composants standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Boutons */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Boutons</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/30">
                        Primaire
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Secondaire
                      </Button>
                      <Button variant="ghost" className="text-white hover:bg-white/10">
                        Ghost
                      </Button>
                      <Button variant="destructive" className="bg-red-500/80 hover:bg-red-600 text-white">
                        Danger
                      </Button>
                      <Button className="bg-green-500/80 hover:bg-green-600 text-white">
                        Succès
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  {/* Badges */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">Default</Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Info</Badge>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Succès</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Avertissement</Badge>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Erreur</Badge>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  {/* Inputs */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Champs de formulaire</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300 text-sm mb-1.5 block">
                          Nom complet
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Jean Dupont"
                            className="pl-9 h-11 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 rounded-xl"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300 text-sm mb-1.5 block">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="exemple@email.com"
                            className="pl-9 h-11 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Principes de design */}
            <Card className="bg-purple-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300 text-base flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Principes de design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <h4 className="text-white font-medium mb-1">🎨 Cohérence</h4>
                    <p>Utilisez les mêmes couleurs, polices et espacements sur toutes les pages.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <h4 className="text-white font-medium mb-1">📱 Responsive</h4>
                    <p>Tous les composants s’adaptent à toutes les tailles d’écran.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <h4 className="text-white font-medium mb-1">♿ Accessibilité</h4>
                    <p>Contrastes suffisants, composants navigables au clavier, labels ARIA.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <h4 className="text-white font-medium mb-1">✨ Élégance</h4>
                    <p>Effet glassmorphism, animations douces, dégradés subtils.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          <span className="flex items-center justify-center gap-2">
            <Palette className="h-3 w-3 text-fuchsia-400" />
            Food Brand – Guide de style v1.0 – {new Date().toLocaleDateString('fr-FR')}
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