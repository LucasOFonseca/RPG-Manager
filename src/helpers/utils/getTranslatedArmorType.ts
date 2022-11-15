import { ArmorType } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedArmorType = (armorType: ArmorType) => {
  const translations: Translations = {
    [ArmorType.light]: 'Leve',
    [ArmorType.medium]: 'Média',
    [ArmorType.shields]: 'Escudos',
  }

  return translations[armorType]
}
