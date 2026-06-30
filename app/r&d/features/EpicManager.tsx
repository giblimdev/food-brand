//@/app/r&d/features/EpicManager.tsx

//type :  composant
/*role : CRUD les epic*/              
/*fonctionnement : 
- Affiche la liste des epics dans un tableau / Kanban
- Permet d'ajouter, modifier, supprimer un epic
- Utilise des server actions pour interagir avec la base de données
- Gère les états de chargement et les notifications toast
*/ 
//imports [react, react-hook-form, zod, shadcn/ui, lucide-react, sonner, lib/actions/epics, lib/validations/epic]
//exports [EpicManager]
//useby [app/r&d/features/page.tsx]
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

'use client'

import React, { useState, useEffect, useTransition } from 'react'
import { useForm } from 'react-hook-form'
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

// Types basés sur le schéma Prisma
type Epic = {
  id: string
  order: number | null
  name: string
  label: string
  description: string | null
  icon: string | null
  color: string | null
  emoji: string | null
  status: 'PLANNED' | 'IN_PROGRESS' | 'DONE' | 'BLOCKED' | 'REVIEW' | 'TESTING' | 'DEPLOYED'
  createdAt: Date
  updatedAt: Date
  features?: { id: string; title: string }[]
}

// Importer le schéma et le type depuis le fichier de validation
import { epicSchema, type EpicFormValues } from '@/lib/validations/epic'

// Importer les actions serveur
import {
  getEpics,
  createEpic,
  updateEpic,
  deleteEpic,
} from '@/lib/actions/epics'

// Composant principal
export function EpicManager() {
  const [epics, setEpics] = useState<Epic[]>([])
  const [loading, setLoading] = useState(true)
  const [editingEpic, setEditingEpic] = useState<Epic | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, startTransition] = useTransition()

  // État pour le dialogue de confirmation de suppression
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [epicToDelete, setEpicToDelete] = useState<{ id: string; label: string } | null>(null)

  // Charger les epics au montage
  useEffect(() => {
    loadEpics()
  }, [])

  const loadEpics = async () => {
    try {
      setLoading(true)
      const data = await getEpics()
      setEpics(data)
    } catch (error) {
      toast.error('Erreur lors du chargement des epics')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Formulaire
  const form = useForm<EpicFormValues>({
    resolver: zodResolver(epicSchema),
    defaultValues: {
      name: '',
      label: '',
      description: '',
      icon: '',
      color: '',
      emoji: '',
      status: 'PLANNED',
    },
  })

  // Soumission du formulaire (création ou mise à jour)
  const onSubmit = async (values: EpicFormValues) => {
    startTransition(async () => {
      try {
        if (editingEpic) {
          // Mise à jour
          await toast.promise(updateEpic(editingEpic.id, values), {
            loading: 'Mise à jour en cours...',
            success: `Epic "${values.label}" mis à jour`,
            error: (err) => err?.message || 'Erreur lors de la mise à jour',
          })
        } else {
          // Création
          await toast.promise(createEpic(values), {
            loading: 'Création en cours...',
            success: `Epic "${values.label}" créé`,
            error: (err) => err?.message || 'Erreur lors de la création',
          })
        }
        setIsDialogOpen(false)
        form.reset()
        setEditingEpic(null)
        await loadEpics()
      } catch (error) {
        // Les erreurs sont déjà gérées par toast.promise, mais on logue
        console.error(error)
      }
    })
  }

  // Supprimer un epic (appelée après confirmation)
  const handleConfirmDelete = async () => {
    if (!epicToDelete) return
    const { id, label } = epicToDelete
    startTransition(async () => {
      try {
        await toast.promise(deleteEpic(id), {
          loading: 'Suppression en cours...',
          success: `Epic "${label}" supprimé`,
          error: (err) => err?.message || 'Erreur lors de la suppression',
        })
        setDeleteDialogOpen(false)
        setEpicToDelete(null)
        await loadEpics()
      } catch (error) {
        console.error(error)
      }
    })
  }

  // Ouvrir le dialogue d'édition
  const handleEdit = (epic: Epic) => {
    setEditingEpic(epic)
    form.reset({
      name: epic.name,
      label: epic.label,
      description: epic.description || '',
      icon: epic.icon || '',
      color: epic.color || '',
      emoji: epic.emoji || '',
      status: epic.status,
    })
    setIsDialogOpen(true)
  }

  // Ouvrir le dialogue de création
  const handleCreate = () => {
    setEditingEpic(null)
    form.reset({
      name: '',
      label: '',
      description: '',
      icon: '',
      color: '',
      emoji: '',
      status: 'PLANNED',
    })
    setIsDialogOpen(true)
  }

  // Ouvrir le dialogue de confirmation de suppression
  const handleDelete = (id: string, label: string) => {
    setEpicToDelete({ id, label })
    setDeleteDialogOpen(true)
  }

  // Couleur du statut
  const statusColorMap: Record<string, string> = {
    PLANNED: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    IN_PROGRESS: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    DONE: 'bg-green-500/20 text-green-300 border-green-500/30',
    BLOCKED: 'bg-red-500/20 text-red-300 border-red-500/30',
    REVIEW: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    TESTING: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    DEPLOYED: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  }

  const statusLabels: Record<string, string> = {
    PLANNED: 'Planifié',
    IN_PROGRESS: 'En cours',
    DONE: 'Terminé',
    BLOCKED: 'Bloqué',
    REVIEW: 'En relecture',
    TESTING: 'En test',
    DEPLOYED: 'Déployé',
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec bouton d'ajout */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Gestion des Epics</h2>
          <p className="text-sm text-gray-400">
            Gérez vos epics : créez, modifiez ou supprimez des epics pour organiser vos fonctionnalités.
          </p>
        </div>
        <Button
          onClick={handleCreate}
          className="bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/30"
        >
          <Plus className="mr-2 h-4 w-4" />
          Nouvel Epic
        </Button>
      </div>

      {/* Tableau des epics */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-gray-400 font-medium">Nom</TableHead>
                <TableHead className="text-gray-400 font-medium">Label</TableHead>
                <TableHead className="text-gray-400 font-medium">Statut</TableHead>
                <TableHead className="text-gray-400 font-medium">Émoji</TableHead>
                <TableHead className="text-gray-400 font-medium">Features</TableHead>
                <TableHead className="text-gray-400 font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                // Squelettes de chargement
                Array.from({ length: 3 }).map((_, i) => (
                  <TableRow key={i} className="border-white/5">
                    <TableCell><Skeleton className="h-4 w-32 bg-white/10" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24 bg-white/10" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20 bg-white/10 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-8 bg-white/10 rounded-full" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-12 bg-white/10" /></TableCell>
                    <TableCell className="text-right"><Skeleton className="h-8 w-20 bg-white/10 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : epics.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-400 py-8">
                    Aucun epic trouvé. Créez votre premier epic !
                  </TableCell>
                </TableRow>
              ) : (
                epics.map((epic) => (
                  <TableRow key={epic.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-medium text-white">{epic.name}</TableCell>
                    <TableCell className="text-gray-300">{epic.label}</TableCell>
                    <TableCell>
                      <Badge className={`${statusColorMap[epic.status]} border`}>
                        {statusLabels[epic.status] || epic.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-2xl">{epic.emoji || '📋'}</TableCell>
                    <TableCell className="text-gray-300">
                      {epic.features?.length || 0}
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
                            onClick={() => handleEdit(epic)}
                            className="hover:bg-white/10 cursor-pointer"
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(epic.id, epic.label)}
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

      {/* Dialogue de confirmation de suppression */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription className="text-gray-400">
              Êtes-vous sûr de vouloir supprimer l'epic "{epicToDelete?.label}" ? Cette action est irréversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setDeleteDialogOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              Annuler
            </Button>
            <Button
              type="button"
              onClick={handleConfirmDelete}
              disabled={isSubmitting}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {isSubmitting ? 'Suppression...' : 'Supprimer'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialogue de création / édition */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingEpic ? 'Modifier l\'epic' : 'Nouvel epic'}</DialogTitle>
            <DialogDescription className="text-gray-400">
              {editingEpic
                ? 'Modifiez les informations de l\'epic ci-dessous.'
                : 'Remplissez les informations pour créer un nouvel epic.'}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Nom */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Nom (identifiant technique)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ex: user-authentication"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                {/* Label */}
                <FormField
                  control={form.control}
                  name="label"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Label (affiché)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ex: Authentification"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Décrivez l'epic..."
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50 min-h-[80px]"
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 gap-4">
                {/* Emoji */}
                <FormField
                  control={form.control}
                  name="emoji"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Émoji</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="🚀"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50"
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                {/* Icon */}
                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Icône (nom Lucide)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ex: UserCircle"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50"
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                {/* Couleur */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Couleur (hex)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input
                            {...field}
                            placeholder="#a855f7"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:ring-fuchsia-500/50 flex-1"
                            value={field.value ?? ''}
                          />
                          {field.value && (
                            <div
                              className="w-8 h-8 rounded-full border border-white/20 shrink-0"
                              style={{ backgroundColor: field.value }}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Statut */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Statut</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white focus:ring-fuchsia-500/50">
                          <SelectValue placeholder="Sélectionnez un statut" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-800 border-white/10 text-white">
                        {Object.entries(statusLabels).map(([key, label]) => (
                          <SelectItem key={key} value={key}>
                            <Badge className={`${statusColorMap[key]} border`}>
                              {label}
                            </Badge>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-400 hover:text-white"
                  disabled={isSubmitting}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/30"
                >
                  {isSubmitting ? 'En cours...' : (editingEpic ? 'Mettre à jour' : 'Créer')}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EpicManager