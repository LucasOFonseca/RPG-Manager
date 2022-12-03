import {
  AbilityType,
  GenericDescriptionItem,
  Language,
  PlayerChoicesFormProps,
} from '.'

export enum RaceType {
  elf = 'elf',
  human = 'human',
}

export interface AbilityEnhancementItem {
  ability: AbilityType
  value: number
}

export interface RacialTraits {
  physicalDescription: string
  ageDescription: string
  languages: Language[]
  baseMovement: number
  otherTraits?: GenericDescriptionItem[]
  abilityEnhancements: AbilityEnhancementItem[]
}

export interface SubRaceSummary {
  type: string
  name: string
  traits: GenericDescriptionItem[]
  abilityEnhancements: AbilityEnhancementItem[]
  playerChoices?: PlayerChoicesFormProps
}

export interface RaceSummary {
  type: RaceType
  name: string
  summary: string | string[]
  racialTraits: RacialTraits
  subRaces?: SubRaceSummary[]
  playerChoices?: PlayerChoicesFormProps
}
