import { ClassType } from './classSummary'
import { PlayerChoices } from './playerChoice'
import { RaceType } from './raceSummary'

export interface CharacterRace {
  type: RaceType
  name: string
}

export interface CharacterSubRace {
  type: string
  name: string
  playerChoices?: PlayerChoices
}

export interface CharacterClassFeature {
  title: string
  playerChoices?: PlayerChoices
}

export interface CharacterClass {
  type: ClassType
  name: string
  features: CharacterClassFeature[]
  playerChoices?: PlayerChoices
}

export interface Character {
  name: string
  race?: CharacterRace
  subRace?: CharacterSubRace
  class?: CharacterClass
}
