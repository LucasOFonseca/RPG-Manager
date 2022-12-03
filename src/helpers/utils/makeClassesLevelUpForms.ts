import React from 'react'
import { RangerLevelTwo } from '../../shared/classes/ranger/levelUpForms/RangerLevelTwo'
import { RogueLevelTwo } from '../../shared/classes/rogue/levelUpForms/RogueLevelTwo'

interface ClassesLevelUpForms {
  [key: string]: { [key: number]: React.FC<any> }
}

export const makeClassesLevelUpForms = (): ClassesLevelUpForms => ({
  ranger: {
    2: RangerLevelTwo,
  },
  rogue: {
    2: RogueLevelTwo,
  },
})
