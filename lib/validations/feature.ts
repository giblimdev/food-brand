// lib/validations/feature.ts


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 





/*
model Epic {
  id          String   @id @default(uuid())
  order       Int?     @default(0)
  name        String   @unique
  label       String
  description String?
  icon        String?
  color       String?
  emoji       String?
  status      Status   @default(PLANNED)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  features    Feature[]

  @@index([name])
  @@index([status])
  @@map("epics")
}

model Feature {
  id              String     @id @default(uuid()) 
  order           Int?       @default(0)
  title           String
  description     String?
  epicId          String     
  epic            Epic       @relation(fields: [epicId], references: [id], onDelete: Restrict)
  personas        Persona[]  @default([CLIENT])
  status          Status     @default(PLANNED)
  priority        Priority   @default(MEDIUM)
  files           Json?
  dependencies    String[]   @default([])
  estimatedHours  Int?       @default(0)
  assignedTo      String?    @db.VarChar(100)
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt
  completedAt     DateTime?
  sprintId        String?    
  sprint          Sprint?    @relation(fields: [sprintId], references: [id])

  @@index([epicId])
  @@index([status])
  @@index([priority])
  @@map("features")
}
enum Persona {
  CLIENT
  PRO
  ADMIN
  DEVELOPER
  VISITEUR
  LIVREUR
}

enum Status {
  PLANNED
  IN_PROGRESS
  DONE
  BLOCKED
  REVIEW
  TESTING
  DEPLOYED
}

enum Priority {
  CRITICAL
  HIGH
  MEDIUM
  LOW
  TRIVIAL
}

*/


import { z } from 'zod'
import { Status, Priority, Persona } from '@/lib/constants/enums' // ← importer depuis les constantes

export const featureSchema = z.object({
  title: z.string().min(1, 'Le titre est requis').max(100, 'Trop long'),
  description: z.string().nullable().default(null),
  epicId: z.string().uuid('Epic invalide'),
  status: z.nativeEnum(Status).default(Status.PLANNED),
  priority: z.nativeEnum(Priority).default(Priority.MEDIUM),
  personas: z.array(z.nativeEnum(Persona)).default([Persona.CLIENT]),
  estimatedHours: z.number().int().min(0).nullable().default(null),
  assignedTo: z.string().nullable().default(null),
  order: z.number().int().nullable().default(null),
  files: z.any().nullable().default(null),
  dependencies: z.array(z.string()).default([]),
  sprintId: z.string().uuid().nullable().default(null),
  completedAt: z.date().nullable().default(null),
})

export type FeatureFormValues = z.infer<typeof featureSchema>