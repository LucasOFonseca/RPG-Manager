import { Language } from './language'

export enum PlayerChoiceType {
  languages = 'languages',
  cantrips = 'cantrips',
}

export interface PlayerChoices {
  [key: string]: any[]
}

export interface PlayerChoiceFormProps<T> {
  type: PlayerChoiceType
  quantity?: number
  values?: T[]
}

export interface PlayerChoicesFormProps {
  languages?: PlayerChoiceFormProps<Language>
  cantrips?: PlayerChoiceFormProps<string>
}
