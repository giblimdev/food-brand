//@/app/r&d/features/FeatureManager.tsx

//type :  composant
/*role : CRUD les Features*/              
/*fonctionnement : 
- Affiche la liste des Features dans un tableau / Kanban
- Permet d'ajouter, modifier, supprimer une feature
- Utilise des server actions pour interagir avec la base de données
- Gère les états de chargement et les notifications toast
*/ 
/*imports [react, react-hook-form, zod, shadcn/ui, lucide-react, sonner, 
lib/store/epicStore.ts,
lib/validations/feature.ts, 
lib/actions/feature.ts,
lib/validations/feature],
constants/enums.ts*/
//exports [FeatureManager]
//useby [app/r&d/features/page.tsx]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 





'use client'

import React, { useState, useEffect, useTransition } from 'react'
import { useForm, type Resolver, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
} from 'lucide-react'

// shadcn/ui
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

// Types et store
import { useEpicStore } from '@/lib/store/epicStore'
import { featureSchema, type FeatureFormValues } from '@/lib/validations/feature'
import {
  getFeaturesByEpicId,
  createFeature,
  updateFeature,
  deleteFeature,
} from '@/lib/actions/feature'

// Importer les enums Prisma pour le typage
import { Status, Priority, Persona } from '@/lib/constants/enums'

// Définir le type Feature en utilisant les enums Prisma
type Feature = {
  id: string
  order: number | null
  title: string
  description: string | null
  epicId: string
  status: Status
  priority: Priority
  personas: Persona[]
  files: unknown | null
  dependencies: string[]
  estimatedHours: number | null
  assignedTo: string | null
  createdAt: Date
  updatedAt: Date
  completedAt: Date | null
  sprintId: string | null
}

// Helper pour obtenir les labels des statuts
const statusLabels: Record<Status, string> = {
  [Status.PLANNED]: 'Planifié',
  [Status.IN_PROGRESS]: 'En cours',
  [Status.DONE]: 'Terminé',
  [Status.BLOCKED]: 'Bloqué',
  [Status.REVIEW]: 'Relecture',
  [Status.TESTING]: 'Test',
  [Status.DEPLOYED]: 'Déployé',
}

const statusColorMap: Record<Status, string> = {
  [Status.PLANNED]: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  [Status.IN_PROGRESS]: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  [Status.DONE]: 'bg-green-500/20 text-green-300 border-green-500/30',
  [Status.BLOCKED]: 'bg-red-500/20 text-red-300 border-red-500/30',
  [Status.REVIEW]: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  [Status.TESTING]: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  [Status.DEPLOYED]: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
}

const priorityLabels: Record<Priority, string> = {
  [Priority.LOW]: 'Basse',
  [Priority.MEDIUM]: 'Moyenne',
  [Priority.HIGH]: 'Haute',
  [Priority.CRITICAL]: 'Critique',
  [Priority.TRIVIAL]: 'Triviale',
}

const priorityColorMap: Record<Priority, string> = {
  [Priority.LOW]: 'bg-green-500/20 text-green-300 border-green-500/30',
  [Priority.MEDIUM]: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  [Priority.HIGH]: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  [Priority.CRITICAL]: 'bg-red-500/20 text-red-300 border-red-500/30',
  [Priority.TRIVIAL]: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
}

// Compléter avec toutes les valeurs de l'enum Persona
const personaLabels: Record<Persona, string> = {
  [Persona.CLIENT]: 'Client',
  [Persona.PRO]: 'Professionnel',
  [Persona.ADMIN]: 'Admin',
  [Persona.DEVELOPER]: 'Développeur',
  [Persona.VISITEUR]: 'Visiteur',
  [Persona.LIVREUR]: 'Livreur',
}

// Valeurs par défaut du formulaire — centralisées pour éviter les divergences
const emptyFormValues: FeatureFormValues = {
  order: null,
  title: '',
  description: null,
  epicId: '',
  status: Status.PLANNED,
  priority: Priority.MEDIUM,
  personas: [Persona.CLIENT],
  files: null,
  dependencies: [],
  estimatedHours: null,
  assignedTo: null,
  sprintId: null,
  completedAt: null,
}

export function FeatureManager() {
  // Récupération de l'Epic sélectionné depuis le store
  const { selectedEpic } = useEpicStore()
  const [features, setFeatures] = useState<Feature[]>([])
  const [loading, setLoading] = useState(false)
  const [editingFeature, setEditingFeature] = useState<Feature | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, startTransition] = useTransition()

  // État pour la confirmation de suppression
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [featureToDelete, setFeatureToDelete] = useState<{ id: string; title: string } | null>(null)

  // Charger les features quand l'Epic change
  useEffect(() => {
    if (selectedEpic) {
      loadFeatures(selectedEpic.id)
    } else {
      setFeatures([])
    }
  }, [selectedEpic])

  const loadFeatures = async (epicId: string) => {
    try {
      setLoading(true)
      const data = await getFeaturesByEpicId(epicId)
      setFeatures(data as Feature[])
    } catch (error) {
      toast.error('Erreur lors du chargement des features')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Formulaire
  // 👉 On type explicitement <FeatureFormValues> et on caste le resolver.
  // Raison : featureSchema utilise des .default(...), ce qui fait diverger
  // z.input (entrée, champs optionnels) et z.output (sortie, = FeatureFormValues).
  // zodResolver infère sur le type d'entrée, RHF attend le type de sortie : on force l'accord ici.
  const form = useForm<FeatureFormValues>({
    resolver: zodResolver(featureSchema) as Resolver<FeatureFormValues>,
    defaultValues: emptyFormValues,
  })

  // Mettre à jour epicId dans le formulaire quand l'Epic change
  useEffect(() => {
    if (selectedEpic) {
      form.setValue('epicId', selectedEpic.id)
    }
  }, [selectedEpic, form])

  const onSubmit: SubmitHandler<FeatureFormValues> = async (values) => {
    if (!selectedEpic) {
      toast.error('Veuillez sélectionner un Epic')
      return
    }

    startTransition(async () => {
      try {
        if (editingFeature) {
          await toast.promise(updateFeature(editingFeature.id, values), {
            loading: 'Mise à jour en cours...',
            success: `Feature "${values.title}" mise à jour`,
            error: (err) => err?.message || 'Erreur',
          })
        } else {
          await toast.promise(createFeature(values), {
            loading: 'Création en cours...',
            success: `Feature "${values.title}" créée`,
            error: (err) => err?.message || 'Erreur',
          })
        }
        setIsDialogOpen(false)
        form.reset(emptyFormValues)
        setEditingFeature(null)
        if (selectedEpic) await loadFeatures(selectedEpic.id)
      } catch (error) {
        console.error(error)
      }
    })
  }

  // Suppression
  const handleConfirmDelete = async () => {
    if (!featureToDelete) return
    startTransition(async () => {
      try {
        await toast.promise(deleteFeature(featureToDelete.id), {
          loading: 'Suppression en cours...',
          success: `Feature "${featureToDelete.title}" supprimée`,
          error: (err) => err?.message || 'Erreur',
        })
        setDeleteDialogOpen(false)
        setFeatureToDelete(null)
        if (selectedEpic) await loadFeatures(selectedEpic.id)
      } catch (error) {
        console.error(error)
      }
    })
  }

  // Ouvrir édition
  const handleEdit = (feature: Feature) => {
    setEditingFeature(feature)
    form.reset({
      order: feature.order,
      title: feature.title,
      description: feature.description ?? null,
      epicId: feature.epicId,
      status: feature.status,
      priority: feature.priority,
      personas: feature.personas,
      files: null, // édition des fichiers non gérée dans ce formulaire pour l'instant
      dependencies: feature.dependencies ?? [],
      estimatedHours: feature.estimatedHours,
      assignedTo: feature.assignedTo ?? null,
      sprintId: feature.sprintId ?? null,
      completedAt: feature.completedAt ?? null,
    })
    setIsDialogOpen(true)
  }

  // Ouvrir création
  const handleCreate = () => {
    if (!selectedEpic) {
      toast.error('Veuillez sélectionner un Epic')
      return
    }
    setEditingFeature(null)
    form.reset({
      ...emptyFormValues,
      epicId: selectedEpic.id,
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Gestion des Features</h2>
          <p className="text-sm text-gray-400">
            {selectedEpic
              ? `Features de l'epic "${selectedEpic.label}"`
              : 'Sélectionnez un epic pour voir ses features'}
          </p>
        </div>
        <Button
          onClick={handleCreate}
          disabled={!selectedEpic}
          className="bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/30 disabled:opacity-50"
        >
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle Feature
        </Button>
      </div>

      {/* Tableau des features */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-gray-400 font-medium">Titre</TableHead>
                <TableHead className="text-gray-400 font-medium">Statut</TableHead>
                <TableHead className="text-gray-400 font-medium">Priorité</TableHead>
                <TableHead className="text-gray-400 font-medium">Personas</TableHead>
                <TableHead className="text-gray-400 font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <TableRow key={i} className="border-white/5">
                    <TableCell><Skeleton className="h-4 w-32 bg-white/10" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20 bg-white/10 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20 bg-white/10 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24 bg-white/10" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-8 w-20 bg-white/10 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : !selectedEpic ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-400 py-8">
                    Veuillez sélectionner un epic dans le gestionnaire d'epics.
                  </TableCell>
                </TableRow>
              ) : features.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-400 py-8">
                    Aucune feature pour cet epic. Créez votre première feature !
                  </TableCell>
                </TableRow>
              ) : (
                features.map((feature) => (
                  <TableRow key={feature.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-white">{feature.title}</TableCell>
                    <TableCell>
                      <Badge className={`${statusColorMap[feature.status]} border`}>
                        {statusLabels[feature.status] || feature.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${priorityColorMap[feature.priority]} border`}>
                        {priorityLabels[feature.priority] || feature.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {feature.personas?.map(p => personaLabels[p] || p).join(', ') || '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-slate-800 border-white/10 text-white">
                          <DropdownMenuItem
                            onClick={() => handleEdit(feature)}
                            className="hover:bg-white/10 cursor-pointer"
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setFeatureToDelete({ id: feature.id, title: feature.title })
                              setDeleteDialogOpen(true)
                            }}
                            className="hover:bg-red-500/20 text-red-400 focus:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialogue de confirmation suppression */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription className="text-gray-400">
              Êtes-vous sûr de vouloir supprimer la feature "{featureToDelete?.title}" ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeleteDialogOpen(false)}>Annuler</Button>
            <Button onClick={handleConfirmDelete} disabled={isSubmitting} className="bg-red-500 hover:bg-red-600">
              {isSubmitting ? 'Suppression...' : 'Supprimer'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialogue de création/édition */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingFeature ? 'Modifier la feature' : 'Nouvelle feature'}</DialogTitle>
            <DialogDescription className="text-gray-400">
              {editingFeature
                ? 'Modifiez les informations de la feature ci-dessous.'
                : 'Remplissez les informations pour créer une nouvelle feature.'}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Titre */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="ex: Authentification OAuth" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Décrivez la feature..." value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                {/* Statut */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statut</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Statut" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(Status).map((status) => (
                            <SelectItem key={status} value={status}>
                              {statusLabels[status]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Priorité */}
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priorité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Priorité" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(Priority).map((priority) => (
                            <SelectItem key={priority} value={priority}>
                              {priorityLabels[priority]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Personas (multi-select amélioré plus tard) */}
              <FormField
                control={form.control}
                name="personas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Personas</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange([value as Persona])}
                      defaultValue={field.value?.[0]}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un persona" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(Persona).map((persona) => (
                          <SelectItem key={persona} value={persona}>
                            {personaLabels[persona]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Pour l'instant, un seul persona par feature.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="estimatedHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Heures estimées</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={field.value ?? ''}
                          onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : null)}
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assignedTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assigné à</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nom ou email" value={field.value ?? ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Annuler</Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'En cours...' : (editingFeature ? 'Mettre à jour' : 'Créer')}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default FeatureManager