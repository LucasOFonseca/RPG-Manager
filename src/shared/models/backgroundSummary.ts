import { PlayerChoicesFormProps } from '.'
import { Proficiencies } from './proficiency'

export enum BackgroundType {
  outlander = 'outlander',
}

export interface BackgroundFeatureSummary {
  title: string
  description: string | string[]
}

export interface BackgroundSummary {
  type: BackgroundType
  name: string
  summary: string | string[]
  feature: BackgroundFeatureSummary
  equipment: string[]
  proficiencies: Proficiencies
  playerChoices?: PlayerChoicesFormProps
}
