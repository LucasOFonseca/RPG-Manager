import { EnemyType, Language, Skill } from '.'

export enum PlayerChoiceType {
  languages = 'languages',
  cantrips = 'cantrips',
  enemyType = 'enemyType',
  skills = 'skills',
  tools = 'tools',
}

export interface PlayerChoices {
  [key: string]: any[]
}

export interface PlayerChoiceFormProps<T> {
  optional?: boolean
  type: PlayerChoiceType
  quantity?: number
  label?: string
  values?: T[]
}

export interface PlayerChoicesFormProps {
  languages?: PlayerChoiceFormProps<Language>
  cantrips?: PlayerChoiceFormProps<string>
  enemyType?: PlayerChoiceFormProps<EnemyType>
  skills?: PlayerChoiceFormProps<Skill>
  tools?: PlayerChoiceFormProps<string>
}
