// lib/actions/epics.ts

///type : 
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 




"use server"

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { Prisma } from '@/lib/generated/prisma/client'
import { epicSchema, type EpicFormValues } from '@/lib/validations/epic' // ← import depuis le nouveau fichier

// ------------------------------------------------------------
// Actions (uniquement des fonctions async)
// ------------------------------------------------------------
export async function getEpics() {
  try {
    const epics = await prisma.epic.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: {
        features: {
          select: { id: true, title: true },
        },
      },
    })
    return epics
  } catch (error) {
    console.error('Erreur getEpics:', error)
    throw new Error('Impossible de récupérer les epics')
  }
}

export async function createEpic(data: EpicFormValues) {
  try {
    const validatedData = epicSchema.parse(data)

    const maxOrder = await prisma.epic.aggregate({
      _max: { order: true },
    })
    const nextOrder = (maxOrder._max.order ?? -1) + 1

    const newEpic = await prisma.epic.create({
      data: {
        ...validatedData,
        order: nextOrder,
        description: validatedData.description ?? null,
        icon: validatedData.icon ?? null,
        color: validatedData.color ?? null,
        emoji: validatedData.emoji ?? null,
      },
    })

    revalidatePath('/r&d/features')
    return newEpic
  } catch (error) {
    console.error('Erreur createEpic:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Un epic avec ce nom existe déjà')
      }
    }
    throw new Error('Erreur lors de la création de l\'epic')
  }
}

export async function updateEpic(id: string, data: EpicFormValues) {
  try {
    const validatedData = epicSchema.parse(data)

    const updatedEpic = await prisma.epic.update({
      where: { id },
      data: {
        ...validatedData,
        description: validatedData.description ?? null,
        icon: validatedData.icon ?? null,
        color: validatedData.color ?? null,
        emoji: validatedData.emoji ?? null,
      },
    })

    revalidatePath('/r&d/features')
    return updatedEpic
  } catch (error) {
    console.error('Erreur updateEpic:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Un epic avec ce nom existe déjà')
      }
      if (error.code === 'P2025') {
        throw new Error('Epic non trouvé')
      }
    }
    throw new Error('Erreur lors de la mise à jour de l\'epic')
  }
}

export async function deleteEpic(id: string) {
  try {
    const epic = await prisma.epic.findUnique({
      where: { id },
      include: { features: { select: { id: true } } },
    })

    if (!epic) {
      throw new Error('Epic non trouvé')
    }

    if (epic.features.length > 0) {
      throw new Error('Impossible de supprimer un epic qui contient des features')
    }

    await prisma.epic.delete({
      where: { id },
    })

    revalidatePath('/r&d/features')
    return { success: true }
  } catch (error) {
    console.error('Erreur deleteEpic:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('Epic non trouvé')
      }
    }
    throw error
  }
}