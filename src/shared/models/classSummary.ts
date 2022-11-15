import { PlayerChoicesFormProps } from '.'
import { Proficiencies } from './proficiency'

export enum ClassType {
  ranger = 'ranger',
}

export enum BenefitType {
  item = 'item',
  description = 'description',
}

export interface BenefitSummary {
  type: BenefitType
  text: string
}

export interface ClassFeatureSummary {
  title: string
  description: string | string[]
  benefits: BenefitSummary[]
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
