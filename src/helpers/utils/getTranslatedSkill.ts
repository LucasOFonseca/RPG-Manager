import { SkillType } from "../../shared/models";

interface Translations {
  [key: string]: string;
}

export const getTranslatedSkill = (skill: SkillType) => {
  const translations: Translations = {
    [SkillType.charisma]: "Carisma",
    [SkillType.constitution]: "Constituição",
    [SkillType.dexterity]: "Destreza",
    [SkillType.intelligence]: "Inteligência",
    [SkillType.strength]: "Força",
    [SkillType.wisdom]: "Sabedoria",
  };

  return translations[skill];
};
