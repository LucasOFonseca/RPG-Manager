import { WeaponType } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedWeaponType = (weaponType: WeaponType) => {
  const translations: Translations = {
    [WeaponType.martial]: 'Marcial',
    [WeaponType.simple]: 'Simples',
  }

  return translations[weaponType]
}
