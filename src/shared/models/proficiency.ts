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
  weapons?: WeaponType[]
  savingThrows?: AbilityType[]
  skills?: Skill[]
  tools?: string
}
