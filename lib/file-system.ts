// lib/file-system.ts



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



/*que fait ce fichier */
// import [{ APP_DIR, ALLOWED_EXTENSIONS } from '@/config/paths'}]
// export [inter face FileNode, getFileTree, getFileContent] from '@/lib/file-system'
// utilisé par : [@/components/file-explorer.tsx]
// consigne ia merci de concerver les commentaires et de ne pas les supprimer

// lib/file-system.ts
'use server'

import fs from 'fs/promises'
import path from 'path'
import { EXPLORE_ROOT, ALLOWED_EXTENSIONS, EXCLUDED_DIRS } from '@/config/paths'

/**
 * Représentation d'un élément du système de fichiers.
 */
export interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: FileNode[]
  size?: number // optionnel
}

/**
 * Vérifie si un dossier doit être exclu.
 */
function isExcludedDir(name: string): boolean {
  return EXCLUDED_DIRS.some(excl => name === excl || name.includes(excl))
}

/**
 * Lit récursivement un répertoire et construit un arbre de fichiers.
 * @param dirPath Chemin absolu du répertoire à explorer.
 * @param depth Profondeur actuelle (pour limiter si nécessaire).
 * @param maxDepth Profondeur maximale (optionnelle).
 * @returns Promise<FileNode> (le nœud racine)
 */
export async function getFileTree(
  dirPath: string = EXPLORE_ROOT,
  depth: number = 0,
  maxDepth: number = 10 // limite de profondeur pour éviter les récursions infinies
): Promise<FileNode> {
  const stat = await fs.stat(dirPath)
  const baseName = path.basename(dirPath)

  if (!stat.isDirectory()) {
    // Si c'est un fichier, on le retourne directement
    return {
      name: baseName,
      path: dirPath,
      type: 'file',
    }
  }

  // Si on atteint la profondeur maximale, on arrête l'exploration
  if (depth >= maxDepth) {
    return {
      name: baseName,
      path: dirPath,
      type: 'directory',
      children: [],
    }
  }

  const children: FileNode[] = []
  const entries = await fs.readdir(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    // Ignorer les dossiers exclus
    if (entry.isDirectory() && isExcludedDir(entry.name)) {
      continue
    }
    // Ignorer les fichiers cachés (commençant par .)
    if (entry.name.startsWith('.')) {
      continue
    }
    // Filtrer par extensions autorisées si la liste n'est pas vide
    if (entry.isFile() && ALLOWED_EXTENSIONS.length > 0) {
      const ext = path.extname(entry.name)
      if (!ALLOWED_EXTENSIONS.includes(ext)) continue
    }
    const childNode = await getFileTree(fullPath, depth + 1, maxDepth)
    children.push(childNode)
  }

  // Trier : dossiers d'abord, puis fichiers par ordre alphabétique
  children.sort((a, b) => {
    if (a.type === 'directory' && b.type !== 'directory') return -1
    if (a.type !== 'directory' && b.type === 'directory') return 1
    return a.name.localeCompare(b.name)
  })

  return {
    name: baseName,
    path: dirPath,
    type: 'directory',
    children,
  }
}

/**
 * Lit le contenu d'un fichier.
 * @param filePath Chemin absolu du fichier.
 * @returns Promise<string> contenu textuel.
 */
export async function getFileContent(filePath: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error('Erreur de lecture du fichier:', error)
    return `❌ Impossible de lire le fichier : ${filePath}`
  }
}