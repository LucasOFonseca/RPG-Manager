import create from 'zustand'
import { persist } from 'zustand/middleware'
import {
  Character,
  Class,
  GenericDescriptionItem,
  RaceType,
} from '../shared/models'

interface RaceState {
  type: RaceType
  name: string
  traits: GenericDescriptionItem[]
}

interface UseCharSheetState {
  character?: Character
  race?: RaceState
  charClass?: Class
  setCharacter: (character: Character) => void
  setRace: (race: RaceState) => void
  setClass: (charClass: Class) => void
  setExperience: (value: number) => void
  changeLevel: () => void
}

export const useCharSheet = create(
  persist<UseCharSheetState>(
    (set, get) => ({
      setCharacter: (character) => set({ character }),
      setRace: (race) => set({ race }),
      setClass: (charClass) => set({ charClass }),
      setExperience: (value) => {
        const char = get().character

        if (char) {
          set({
            character: {
              ...char,
              currentExperience: value,
            },
          })
        }
      },
      changeLevel: () => {
        const char = get().character

        if (char) {
          set({
            character: {
              ...char,
              level: char.level + 1,
            },
          })
        }
      },
    }),
    {
      name: 'characterSheet',
    }
  )
)
