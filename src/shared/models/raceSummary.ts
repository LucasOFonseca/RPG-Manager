import { GenericDescriptionItem, Language, SkillType } from '.'

export enum RaceType {
  elf = 'elf',
}

export interface SkillEnhancementItem {
  skill: SkillType
  value: number
}

export interface RacialTraits {
  physicalDescription: string
  ageDescription: string
  languages: Language[]
  baseMovement: number
  otherTraits?: GenericDescriptionItem[]
  skillEnhancements: SkillEnhancementItem[]
}

export interface SubRaceSummary {
  type: string
  name: string
  traits: GenericDescriptionItem[]
  skillEnhancements: SkillEnhancementItem[]
}

export interface RaceSummary {
  type: RaceType
  name: string
  summary: string | string[]
  racialTraits: RacialTraits
  subRaces?: SubRaceSummary[]
}
