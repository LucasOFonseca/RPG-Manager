import { Language } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedLanguage = (language: Language) => {
  const translations: Translations = {
    [Language.common]: 'Comum',
    [Language.draconic]: 'Dracônico',
    [Language.dwarvish]: 'Anão',
    [Language.elvish]: 'Élfico',
    [Language.giant]: 'Gigante',
    [Language.gnomish]: 'Gnômico',
    [Language.goblin]: 'Goblin',
    [Language.halfling]: 'Halfling',
    [Language.infernal]: 'Infernal',
    [Language.orc]: 'Orc',
  }

  return translations[language]
}
