import { GenericDescriptionItem, Language, Proficiencies } from '.'

export interface SubRace {
  name: string
  baseMovement?: number
  proficiencies: Proficiencies
  traits?: GenericDescriptionItem[]
}

export interface Race {
  name: string
  languages: Language[]
  baseMovement: number
  proficiencies: Proficiencies
  subRaces?: { [key: string]: SubRace }
  traits: GenericDescriptionItem[]
}
