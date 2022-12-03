import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Spell } from '../shared/models'

interface UseSpellsState {
  spells?: Spell[]
  setSpells: (spells: Spell[]) => void
  addSpells: (spells: Spell[]) => void
}

export const useSpells = create(
  persist<UseSpellsState>(
    (set, get) => ({
      setSpells: (spells) => set({ spells }),
      addSpells: (spells) => {
        const currentSpells = get().spells

        if (currentSpells) {
          set({ spells: [...currentSpells, ...spells] })
        }
      },
    }),
    {
      name: 'spells',
    }
  )
)
