import { Benefit, PlayerChoicesFormProps } from '.'
import { Proficiencies } from './proficiency'

export enum ClassType {
  ranger = 'ranger',
  rogue = 'rogue',
}

export interface ClassFeatureSummary {
  title: string
  description: string | string[]
  benefits: Benefit[]
  playerChoices?: PlayerChoicesFormProps
}

export interface ClassSummary {
  type: ClassType
  name: string
  summary: string | string[]
  initialHitPoints: number
  proficiencies: Proficiencies
  equipment: string[]
  features: ClassFeatureSummary[]
  playerChoices?: PlayerChoicesFormProps
}
