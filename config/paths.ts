//@/config/paths.ts

///type : 
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



/*que fait ce fichier ? */
//utiliser par : [@/libfile-system.ts]

// config/paths.ts
import path from 'path'

/**
 * Chemin racine du projet (dossier contenant package.json)
 * Utilisé pour explorer les fichiers depuis le serveur.
 */
export const PROJECT_ROOT = process.cwd()

/**
 * Dossier racine à explorer. Par défaut, tout le projet.
 * Vous pouvez restreindre à un sous-dossier si nécessaire (ex: path.join(PROJECT_ROOT, 'app')).
 */
export const EXPLORE_ROOT = PROJECT_ROOT

/**
 * Extensions de fichiers à afficher (filtre optionnel).
 * Laisser vide pour tout afficher (sauf binaires).
 */
export const ALLOWED_EXTENSIONS: string[] = ['.ts', '.tsx', '.js', '.jsx', '.css', '.md', '.json', '.prisma', '.sql', '.yaml', '.yml', '.toml']

/**
 * Dossiers à exclure de l'exploration (par nom exact ou partiel).
 */
export const EXCLUDED_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', 'out', '.vercel', '.turbo', 'coverage']