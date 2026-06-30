// app/auth/login/page.tsx

//type : page 
/*role : formulaire de login*/              
/*fonctionnement : */ 
//imports [@/lib/auth/auth-client] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

'use client'

import { authClient } from '@/lib/auth/auth-client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2,
  ArrowRight
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!email.trim()) {
      toast.error('Veuillez entrer votre adresse email')
      setLoading(false)
      return
    }

    if (!password.trim()) {
      toast.error('Veuillez entrer votre mot de passe')
      setLoading(false)
      return
    }

    try {
      await authClient.signIn.email({
        email: email.trim(),
        password,
        // Le paramètre "rememberMe" peut être passé si l'API le supporte
        // Sinon, on peut le gérer via les cookies ou session
      }, {
        onSuccess: () => {
          toast.success('Connexion réussie', {
            description: 'Bienvenue !',
            duration: 3000,
          })
          router.push('/')
          router.refresh()
        },
        onError: (ctx) => {
          console.error('Login error:', ctx.error)
          toast.error(ctx.error.message || 'Erreur lors de la connexion')
        },
      })
    } catch (err) {
      console.error('Erreur de connexion:', err)
      toast.error('Une erreur est survenue lors de la connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-[420px] relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-fuchsia-500 flex items-center justify-center shadow-2xl shadow-fuchsia-500/40">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
        </div>

        {/* Titre */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Bienvenue
          </h1>
          <p className="text-gray-300 mt-1.5">
            Connectez-vous pour continuer
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-200 block mb-1.5">
              Adresse email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 h-11 bg-white/5 backdrop-blur-sm border-white/20 text-white text-base placeholder:text-gray-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all rounded-xl"
                required
                disabled={loading}
                autoComplete="email"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label htmlFor="password" className="text-sm font-medium text-gray-200">
                Mot de passe
              </Label>
              <Link 
                href="/auth/forgot-password" 
                className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-11 pr-11 h-11 bg-white/5 backdrop-blur-sm border-white/20 text-white text-base placeholder:text-gray-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all rounded-xl"
                required
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Se souvenir de moi */}
          <div className="flex items-center space-x-2 pt-1">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              disabled={loading}
              className="border-white/30 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500 h-5 w-5 shrink-0"
            />
            <Label 
              htmlFor="remember" 
              className="text-sm text-gray-300 cursor-pointer select-none"
            >
              Se souvenir de moi
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 text-white font-medium text-base shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-all duration-300 rounded-xl"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Connexion en cours...
              </>
            ) : (
              <>
                Se connecter
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Pas encore de compte ?{' '}
            <Link 
              href="/auth/register" 
              className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              S'inscrire
            </Link>
          </p>
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