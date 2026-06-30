// app/not-found.tsx


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-7xl font-bold text-muted-foreground">404</h2>
      <h3 className="text-2xl font-semibold">Page non trouvée</h3>
      <p className="text-muted-foreground max-w-sm">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Button asChild>
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  )
}