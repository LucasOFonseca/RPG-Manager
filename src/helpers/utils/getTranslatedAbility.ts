import { AbilityType } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedAbility = (ability: AbilityType) => {
  const translations: Translations = {
    [AbilityType.charisma]: 'Carisma',
    [AbilityType.constitution]: 'Constituição',
    [AbilityType.dexterity]: 'Destreza',
    [AbilityType.intelligence]: 'Inteligência',
    [AbilityType.strength]: 'Força',
    [AbilityType.wisdom]: 'Sabedoria',
  }

  return translations[ability]
}
