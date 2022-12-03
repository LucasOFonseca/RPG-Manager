import { Abilities, CharacterProficiencies, Language } from '.'

export interface CharacterBasicInfo {
  name: string
  baseMovement: number
  languages: Language[]
}

export interface Character {
  basicInfo: CharacterBasicInfo
  level: number
  currentExperience: number
  maxHitPoints: number
  currentHitPoints: number
  acBonusWithArmor?: number
  abilities: Abilities
  proficiencies: CharacterProficiencies
}
