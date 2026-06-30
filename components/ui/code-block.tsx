// components/ui/code-block.tsx



///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from '@/components/ui/button'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = 'json',
  showLineNumbers = true,
  className = '',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative rounded-xl overflow-hidden border border-white/10 ${className}`}>
      {/* En-tête avec le langage et le bouton copier */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 backdrop-blur-sm border-b border-white/5">
        <span className="text-xs font-mono text-gray-400 uppercase">
          {language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-gray-400 hover:text-white hover:bg-white/10"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span className="ml-1.5 text-xs">
            {copied ? 'Copié !' : 'Copier'}
          </span>
        </Button>
      </div>

      {/* Code colorisé */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLines
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'rgba(0,0,0,0.3)',
          fontSize: '13px',
          lineHeight: '1.6',
        }}
        lineNumberStyle={{
          color: '#4a5568',
          paddingRight: '1rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}