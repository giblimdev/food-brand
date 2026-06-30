// app/r&d/architectures/LocalFileExplorer.tsx

//type : composant 
/*role : affiches l'arborecence et les script*/              
/*fonctionnement : utilise le composant FileRxplorer et expose en props EXPLORE_ROOT*/ 
//imports [@/componant/, @/config] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

import { FileExplorer } from '@/components/file-explorer'
import { EXPLORE_ROOT } from '@/config/paths'

export default function FilesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Explorateur de fichiers (tout le projet)</h1>
        <FileExplorer rootPath={EXPLORE_ROOT} />
      </div>
    </div>
  )
}