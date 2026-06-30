//@/lib/validations/epic.ts

///type : 
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 







// lib/validations/epic.ts
import { z } from 'zod'

export const epicSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  label: z.string().min(1, 'Le label est requis').max(50, 'Le label ne peut pas dépasser 50 caractères'),
  description: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  emoji: z.string().optional().nullable(),
  status: z.enum(['PLANNED', 'IN_PROGRESS', 'DONE', 'BLOCKED', 'REVIEW', 'TESTING', 'DEPLOYED']),
})

export type EpicFormValues = z.infer<typeof epicSchema>