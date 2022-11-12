import { RaceType } from './raceSummary'

export interface CharacterRace {
  type: RaceType
  name: string
}

export interface CharacterSubRace {
  type: string
  name: string
}

export interface Character {
  name: string
  race?: CharacterRace
  subRace?: CharacterSubRace
}
