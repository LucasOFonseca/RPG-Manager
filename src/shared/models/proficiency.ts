import { AbilityType, Skill } from '.'

export enum ArmorType {
  light = 'light',
  medium = 'medium',
  shields = 'shields',
}

export enum WeaponType {
  simple = 'simple',
  martial = 'martial',
}

export interface Proficiencies {
  armors?: ArmorType[]
  weapons?: Array<WeaponType | string>
  savingThrows?: AbilityType[]
  skills?: Skill[]
  tools?: string[]
}

export interface CharacterProficiencies extends Proficiencies {
  bonus: number
}
