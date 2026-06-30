// app/auth/register/page.tsx
//type : page 
/*role : formulaire d'inscription*/              
/*fonctionnement : 
afiche les champs necesssaire a Better Auth, deux champ mot de pass, verifie la concordance. 
afficher masquer les mots de pass
casse a cocher condition génral
redirection en cas de succer*/ 
//imports [@/lib/auth/auth-client, sonner] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


'use client'

import { authClient } from '@/lib/auth/auth-client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'
import { 
  Mail, 
  Lock, 
  User, 
  Loader2, 
  ArrowRight, 
  Eye, 
  EyeOff,
  Camera,
  X
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatarBase64, setAvatarBase64] = useState<string | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Vérifier la taille de l'image (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('L\'image ne doit pas dépasser 5MB')
        return
      }

      // Vérifier le type de l'image
      if (!file.type.startsWith('image/')) {
        toast.error('Veuillez sélectionner une image valide')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setAvatarBase64(base64String)
        setAvatarPreview(base64String)
        toast.success('Photo de profil ajoutée')
      }
      reader.onerror = () => {
        toast.error('Erreur lors du chargement de l\'image')
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAvatar = () => {
    setAvatarBase64(null)
    setAvatarPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    toast.info('Photo de profil supprimée')
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation des champs
    if (!name.trim()) {
      toast.error('Veuillez entrer votre nom complet')
      return
    }

    if (!email.trim()) {
      toast.error('Veuillez entrer votre adresse email')
      return
    }

    if (password.length < 8) {
      toast.error('Le mot de passe doit contenir au moins 8 caractères')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas')
      return
    }

    if (!acceptTerms) {
      toast.error('Vous devez accepter les conditions d\'utilisation')
      return
    }

    setLoading(true)

    try {
      // Création du compte via Better Auth
      const result = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
        // Ajouter l'image en base64 si présente
        image: avatarBase64 || undefined,
      })

      if (result.error) {
        toast.error(result.error.message || 'Erreur lors de l\'inscription')
        setLoading(false)
        return
      }

      toast.success('Compte créé avec succès !', {
        description: 'Vous pouvez maintenant vous connecter',
        duration: 5000,
      })

      // Rediriger vers la page de connexion après 1.5s
      setTimeout(() => {
        router.push('/auth/login')
      }, 1500)

    } catch (err) {
      console.error('Erreur d\'inscription:', err)
      toast.error('Une erreur est survenue lors de l\'inscription')
    }

    setLoading(false)
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
            Créer un compte
          </h1>
          <p className="text-gray-300 mt-1.5">
            Rejoignez-nous et commencez dès maintenant
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div 
                className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 border-2 border-dashed border-white/30 flex items-center justify-center overflow-hidden cursor-pointer hover:border-fuchsia-400 transition-all group"
                onClick={() => fileInputRef.current?.click()}
              >
                {avatarPreview ? (
                  <Image
                    src={avatarPreview}
                    alt="Avatar"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <Camera className="h-6 w-6 text-gray-400 group-hover:text-fuchsia-400 transition-colors" />
                    <span className="text-[10px] text-gray-400 group-hover:text-fuchsia-400 transition-colors">
                      Ajouter
                    </span>
                  </div>
                )}
              </div>
              {avatarPreview && (
                <button
                  type="button"
                  onClick={removeAvatar}
                  className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
                disabled={loading}
              />
            </div>
          </div>

          {/* Nom */}
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-200 block mb-1.5">
              Nom complet
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-11 h-11 bg-white/5 backdrop-blur-sm border-white/20 text-white text-base placeholder:text-gray-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all rounded-xl"
                required
                disabled={loading}
                autoComplete="name"
              />
            </div>
          </div>

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
            <Label htmlFor="password" className="text-sm font-medium text-gray-200 block mb-1.5">
              Mot de passe
            </Label>
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
                minLength={8}
                disabled={loading}
                autoComplete="new-password"
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
            <p className="text-xs text-gray-400 mt-1">
              Minimum 8 caractères
            </p>
          </div>

          {/* Confirmation mot de passe */}
          <div>
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-200 block mb-1.5">
              Confirmer le mot de passe
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-11 pr-11 h-11 bg-white/5 backdrop-blur-sm border-white/20 text-white text-base placeholder:text-gray-400 focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all rounded-xl"
                required
                disabled={loading}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                disabled={loading}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {password && confirmPassword && password !== confirmPassword && (
              <p className="text-xs text-red-400 mt-1">
                Les mots de passe ne correspondent pas
              </p>
            )}
          </div>

          {/* Conditions générales */}
          <div className="flex items-start space-x-2 pt-1">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              required 
              disabled={loading}
              className="mt-0.5 border-white/30 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500 h-5 w-5 shrink-0"
            />
            <Label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer select-none leading-relaxed">
              J'ai pris connaissance et j'accepte les{' '}
              <Link href="/terms" className="text-fuchsia-400 hover:text-fuchsia-300 font-medium hover:underline transition-colors">
                conditions générales d'utilisation
              </Link>
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
                Création en cours...
              </>
            ) : (
              <>
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Déjà un compte ?{' '}
            <Link 
              href="/auth/login" 
              className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              Se connecter
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