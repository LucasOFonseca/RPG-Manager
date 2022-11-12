import { Language } from "../../shared/models";

interface Translations {
  [key: string]: string;
}

export const getTranslatedLanguage = (language: Language) => {
  const translations: Translations = {
    [Language.common]: "Comum",
    [Language.elvish]: "Élfico",
  };

  return translations[language];
};
