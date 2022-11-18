import { makeRaceSummaries } from '.'
import { RaceType } from '../../shared/models'

interface AbilityEnhancements {
  strength?: number
  dexterity?: number
  constitution?: number
  wisdom?: number
  intelligence?: number
  charisma?: number
}

export const getAbilityEnhancements = (
  raceType: RaceType,
  subRaceType?: string
): AbilityEnhancements => {
  const race = makeRaceSummaries()[raceType]
  const subRace = race.subRaces
    ? race.subRaces.find((subRace) => subRace.type === subRaceType)
    : undefined

  const { abilityEnhancements } = race.racialTraits

  const raceValues = abilityEnhancements.reduce(
    (a, v) => ({ ...a, [v.ability]: v.value }),
    {}
  )

  if (subRace) {
    const subRaceValues = subRace.abilityEnhancements.reduce(
      (a, v) => ({ ...a, [v.ability]: v.value }),
      {}
    )

    return { ...raceValues, ...subRaceValues }
  }

  return raceValues
}
