// components/file-explorer.tsx




///type : Composant
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 



'use client'

import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronRight, File, Folder, FolderOpen, Loader2 } from 'lucide-react'
import { CodeBlock } from '@/components/ui/code-block'
import { FileNode, getFileTree, getFileContent } from '@/lib/file-system'
import { EXPLORE_ROOT } from '@/config/paths'

interface FileExplorerProps {
  rootPath?: string // facultatif, utilisé pour initialiser l'explorateur
}

export function FileExplorer({ rootPath = EXPLORE_ROOT }: FileExplorerProps) {
  const [tree, setTree] = useState<FileNode | null>(null)
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null)
  const [fileContent, setFileContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Charger l'arborescence au montage
  useEffect(() => {
    const fetchTree = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getFileTree(rootPath)
        setTree(data)
      } catch (err) {
        setError('Impossible de charger l’arborescence.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchTree()
  }, [rootPath])

  // Charger le contenu d'un fichier sélectionné
  useEffect(() => {
    if (!selectedFile || selectedFile.type !== 'file') {
      setFileContent('')
      return
    }
    const fetchContent = async () => {
      try {
        const content = await getFileContent(selectedFile.path)
        setFileContent(content)
      } catch (err) {
        setFileContent(`❌ Erreur de lecture : ${(err as Error).message}`)
      }
    }
    fetchContent()
  }, [selectedFile])

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-400">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        Chargement de l’arborescence...
      </div>
    )
  }

  if (error) {
    return <div className="text-red-400 p-4">{error}</div>
  }

  if (!tree) {
    return <div className="text-gray-400 p-4">Aucun fichier trouvé.</div>
  }

  // Fonction récursive pour afficher les nœuds
  const renderNode = (node: FileNode, level: number = 0): React.ReactNode => {
    if (node.type === 'file') {
      return (
        <button
          key={node.path}
          onClick={() => setSelectedFile(node)}
          className={`
            flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md
            text-sm hover:bg-white/5 transition-colors
            ${selectedFile?.path === node.path ? 'bg-fuchsia-500/20 text-fuchsia-300' : 'text-gray-300'}
          `}
          style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
        >
          <File className="h-4 w-4 shrink-0 text-gray-400" />
          <span className="truncate">{node.name}</span>
        </button>
      )
    }

    // C'est un dossier → on utilise Accordion
    return (
      <Accordion type="single" collapsible key={node.path} className="w-full">
        <AccordionItem value={node.path} className="border-none">
          <AccordionTrigger
            className="hover:bg-white/5 rounded-md px-2 py-1.5 text-sm hover:no-underline"
            style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
          >
            <span className="flex items-center gap-2">
              <Folder className="h-4 w-4 text-blue-400 shrink-0" />
              <span className="text-white">{node.name}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-0 pt-0 space-y-0.5">
            {node.children?.map((child) => renderNode(child, level + 1))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">
      {/* Panneau de gauche : arborescence */}
      <div className="lg:w-1/3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-y-auto max-h-[80vh] min-h-[500px]">
        <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3 px-2">
          📁 Structure des fichiers
        </h3>
        <div className="space-y-0.5">{renderNode(tree)}</div>
      </div>

      {/* Panneau de droite : aperçu du contenu */}
      <div className="lg:w-2/3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-y-auto max-h-[80vh] min-h-[500px]">
        {selectedFile ? (
          <>
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-mono text-gray-400 truncate">
                📄 {selectedFile.name}
              </span>
              <span className="text-xs text-gray-500 truncate">{selectedFile.path}</span>
            </div>
            <CodeBlock code={fileContent} language={getFileExtension(selectedFile.name)} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
            Sélectionnez un fichier dans l’arborescence pour voir son contenu.
          </div>
        )}
      </div>
    </div>
  )
}

// Fonction utilitaire pour déduire le langage à partir de l'extension
function getFileExtension(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || ''
  const map: Record<string, string> = {
    ts: 'typescript',
    tsx: 'tsx',
    js: 'javascript',
    jsx: 'jsx',
    css: 'css',
    json: 'json',
    md: 'markdown',
    prisma: 'prisma',
    yaml: 'yaml',
    yml: 'yaml',
    toml: 'toml',
    sql: 'sql',
  }
  return map[ext] || 'text'
}