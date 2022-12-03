import { PlayerChoices, Proficiencies } from '../../shared/models'

export const getAllProficiencies = (
  raceProficiencies?: Proficiencies,
  subRaceProficiencies?: Proficiencies,
  classProficiencies?: Proficiencies,
  backgroundProficiencies?: Proficiencies,
  playerChoices?: PlayerChoices
): Proficiencies => {
  const armors = [
    ...(raceProficiencies?.armors ?? []),
    ...(subRaceProficiencies?.armors ?? []),
    ...(classProficiencies?.armors ?? []),
    ...(backgroundProficiencies?.armors ?? []),
    ...(playerChoices?.armors ?? []),
  ]
  const savingThrows = [
    ...(raceProficiencies?.savingThrows ?? []),
    ...(subRaceProficiencies?.savingThrows ?? []),
    ...(classProficiencies?.savingThrows ?? []),
    ...(backgroundProficiencies?.savingThrows ?? []),
    ...(playerChoices?.savingThrows ?? []),
  ]
  const skills = [
    ...(raceProficiencies?.skills ?? []),
    ...(subRaceProficiencies?.skills ?? []),
    ...(classProficiencies?.skills ?? []),
    ...(backgroundProficiencies?.skills ?? []),
    ...(playerChoices?.skills ?? []),
  ]
  const tools = [
    ...(raceProficiencies?.tools ?? []),
    ...(subRaceProficiencies?.tools ?? []),
    ...(classProficiencies?.tools ?? []),
    ...(backgroundProficiencies?.tools ?? []),
    ...(playerChoices?.tools ?? []),
  ].filter((tool, index, arr) => arr.indexOf(tool) === index)
  const weapons = [
    ...(raceProficiencies?.weapons ?? []),
    ...(subRaceProficiencies?.weapons ?? []),
    ...(classProficiencies?.weapons ?? []),
    ...(backgroundProficiencies?.weapons ?? []),
    ...(playerChoices?.weapons ?? []),
  ]

  return {
    armors: armors.length >= 1 ? armors : undefined,
    savingThrows: savingThrows.length >= 1 ? savingThrows : undefined,
    skills: skills.length >= 1 ? skills : undefined,
    tools: tools.length >= 1 ? tools : undefined,
    weapons: weapons.length >= 1 ? weapons : undefined,
  }
}
