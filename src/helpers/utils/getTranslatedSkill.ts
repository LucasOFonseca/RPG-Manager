import { Skill } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedSkill = (skill: Skill) => {
  const translations: Translations = {
    [Skill.animalHandling]: 'Adestrar animais',
    [Skill.athletics]: 'Atletismo',
    [Skill.insight]: 'Intuição',
    [Skill.investigation]: 'Investigação',
    [Skill.nature]: 'Natureza',
    [Skill.perception]: 'Percepção',
    [Skill.stealth]: 'Furtividade',
    [Skill.survival]: 'Sobrevivência',
  }

  return translations[skill]
}
