// app/error.tsx


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button' // si tu utilises shadcn

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">Quelque chose s'est mal passé !</h2>
      <p className="text-muted-foreground max-w-md">
        {error.message || "Une erreur inattendue est survenue."}
      </p>
      <Button onClick={() => reset()}>
        Réessayer
      </Button>
    </div>
  )
}