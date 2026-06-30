// lib/actions/feature.ts
"use server"

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { Prisma } from '@/lib/generated/prisma/client'
import { featureSchema, type FeatureFormValues } from '@/lib/validations/feature'
import { Persona } from '@/lib/constants/enums' // si besoin pour les valeurs par défaut

// Récupérer les features d'un epic spécifique
export async function getFeaturesByEpicId(epicId: string) {
  try {
    const features = await prisma.feature.findMany({
      where: { epicId },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
      include: {
        epic: { select: { id: true, label: true } },
        sprint: { select: { id: true, name: true } },
      },
    })
    return features
  } catch (error) {
    console.error('Erreur getFeaturesByEpicId:', error)
    throw new Error('Impossible de récupérer les features')
  }
}

// Créer une feature
export async function createFeature(data: FeatureFormValues) {
  try {
    const validatedData = featureSchema.parse(data)

    // Calcul du prochain order (si non fourni explicitement)
    let order = validatedData.order
    if (order === null || order === undefined) {
      const maxOrder = await prisma.feature.aggregate({
        where: { epicId: validatedData.epicId },
        _max: { order: true },
      })
      order = (maxOrder._max.order ?? -1) + 1
    }

    const newFeature = await prisma.feature.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        epicId: validatedData.epicId,
        status: validatedData.status,
        priority: validatedData.priority,
        personas: validatedData.personas,
        order,
        files: validatedData.files as Prisma.InputJsonValue | undefined,
        dependencies: validatedData.dependencies,
        estimatedHours: validatedData.estimatedHours,
        assignedTo: validatedData.assignedTo,
        sprintId: validatedData.sprintId,
        completedAt: validatedData.completedAt,
      },
    })

    revalidatePath('/r&d/features')
    return newFeature
  } catch (error) {
    console.error('Erreur createFeature:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Une feature avec ce titre existe déjà dans cet epic')
      }
      if (error.code === 'P2003') {
        throw new Error('Epic ou Sprint invalide')
      }
    }
    throw new Error('Erreur lors de la création de la feature')
  }
}

// Mettre à jour une feature
export async function updateFeature(id: string, data: FeatureFormValues) {
  try {
    const validatedData = featureSchema.parse(data)

    const updatedFeature = await prisma.feature.update({
      where: { id },
      data: {
        title: validatedData.title,
        description: validatedData.description,
        epicId: validatedData.epicId,
        status: validatedData.status,
        priority: validatedData.priority,
        personas: validatedData.personas,
        order: validatedData.order,
        files: validatedData.files as Prisma.InputJsonValue | undefined,
        dependencies: validatedData.dependencies,
        estimatedHours: validatedData.estimatedHours,
        assignedTo: validatedData.assignedTo,
        sprintId: validatedData.sprintId,
        completedAt: validatedData.completedAt,
      },
    })

    revalidatePath('/r&d/features')
    return updatedFeature
  } catch (error) {
    console.error('Erreur updateFeature:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Une feature avec ce titre existe déjà dans cet epic')
      }
      if (error.code === 'P2025') {
        throw new Error('Feature non trouvée')
      }
      if (error.code === 'P2003') {
        throw new Error('Epic ou Sprint invalide')
      }
    }
    throw new Error('Erreur lors de la mise à jour de la feature')
  }
}

// Supprimer une feature
export async function deleteFeature(id: string) {
  try {
    await prisma.feature.delete({
      where: { id },
    })
    revalidatePath('/r&d/features')
    return { success: true }
  } catch (error) {
    console.error('Erreur deleteFeature:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('Feature non trouvée')
      }
    }
    throw new Error('Erreur lors de la suppression de la feature')
  }
}

// Marquer une feature comme terminée (helper pratique vu le champ completedAt)
export async function markFeatureCompleted(id: string) {
  try {
    const updated = await prisma.feature.update({
      where: { id },
      data: {
        status: 'DONE',
        completedAt: new Date(),
      },
    })
    revalidatePath('/r&d/features')
    return updated
  } catch (error) {
    console.error('Erreur markFeatureCompleted:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      throw new Error('Feature non trouvée')
    }
    throw new Error('Erreur lors de la mise à jour du statut')
  }
}