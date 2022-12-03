import React from 'react'
import { RangerLevelTwo } from '../../shared/classes/ranger/levelUpForms/RangerLevelTwo'

interface ClassesLevelUpForms {
  [key: string]: { [key: number]: React.FC<any> }
}

export const makeClassesLevelUpForms = (): ClassesLevelUpForms => ({
  ranger: {
    2: RangerLevelTwo,
  },
})
