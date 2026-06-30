// lib/store/epicStore.ts
import { create } from 'zustand'

type Epic = {
  id: string
  name: string
  label: string
  // ... autres champs utiles
}

type EpicStore = {
  selectedEpic: Epic | null
  setSelectedEpic: (epic: Epic | null) => void
}

export const useEpicStore = create<EpicStore>((set) => ({
  selectedEpic: null,
  setSelectedEpic: (epic) => set({ selectedEpic: epic }),
}))