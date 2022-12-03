import { Skill } from '../../shared/models'

interface Translations {
  [key: string]: string
}

export const getTranslatedSkill = (skill: Skill) => {
  const translations: Translations = {
    [Skill.acrobatics]: 'Acrobacia',
    [Skill.animalHandling]: 'Adestrar animais',
    [Skill.athletics]: 'Atletismo',
    [Skill.deception]: 'Enganação',
    [Skill.insight]: 'Intuição',
    [Skill.investigation]: 'Investigação',
    [Skill.intimidation]: 'Intimidação',
    [Skill.nature]: 'Natureza',
    [Skill.perception]: 'Percepção',
    [Skill.performance]: 'Atuação',
    [Skill.persuasion]: 'Persuasão',
    [Skill.sleightOfHand]: 'Prestidigitação',
    [Skill.stealth]: 'Furtividade',
    [Skill.survival]: 'Sobrevivência',
  }

  return translations[skill]
}
