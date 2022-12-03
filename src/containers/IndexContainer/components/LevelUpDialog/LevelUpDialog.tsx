import { Box, Dialog, Paper, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { makeClassesLevelUpForms } from '../../../../helpers/utils'
import { useCharSheet } from '../../../../stores/useCharSheet'
import { AddHitPointsStep } from './components/AddHitPointsStep'
import { IncrementAbilityValuesStep } from './components/IncrementAbilityValuesStep'

const DialogPaper = styled(Paper)(({ theme }) => ({
  width: 415,
  margin: '0 !important',
  borderRadius: 8,

  [theme.breakpoints.down(416)]: {
    width: '100%',
    height: '100%',
    maxHeight: 'unset',
    borderRadius: 0,
  },
}))

export const LevelUpDialog: React.FC = () => {
  const { character, charClass } = useCharSheet()

  const [currentStep, setCurrentStep] = useState(
    Number(localStorage.getItem('currentStep')) ?? 0
  )

  const ClassForm =
    makeClassesLevelUpForms()[charClass?.type ?? '']?.[character?.level ?? 1]

  useEffect(() => {
    const hasAbilityIncrement =
      character?.level === 4 ||
      character?.level === 8 ||
      character?.level === 12 ||
      character?.level === 16 ||
      character?.level === 19

    if (!hasAbilityIncrement && currentStep === 0) {
      setCurrentStep(1)
    }

    localStorage.setItem('currentStep', currentStep.toString())
  }, [character?.level, currentStep])

  return (
    <Dialog open PaperComponent={DialogPaper}>
      <Box padding="24px 16px 0">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Novo nível alcançado
          </Typography>
        </Box>
      </Box>

      {currentStep === 0 && (
        <IncrementAbilityValuesStep goToNextStep={() => setCurrentStep(1)} />
      )}

      {currentStep === 1 && (
        <AddHitPointsStep
          hasNextStep={ClassForm !== undefined}
          goToNextStep={() => setCurrentStep(2)}
        />
      )}

      {currentStep === 2 && <ClassForm />}
    </Dialog>
  )
}
