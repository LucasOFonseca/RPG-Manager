import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { calculateAbilityModifier } from '../../../../../../helpers/utils'
import { Abilities, AbilityType } from '../../../../../../shared/models'
import { useCharSheet } from '../../../../../../stores/useCharSheet'
import { AbilityIncrementItem } from './components/AbilityIncrementItem'

interface IncrementAbilityValuesStepProps {
  goToNextStep: () => void
}

export const IncrementAbilityValuesStep: React.FC<
  IncrementAbilityValuesStepProps
> = ({ goToNextStep }) => {
  const { character, setCharacter } = useCharSheet()

  const [availablePoints, setAvailablePoints] = useState(2)

  const initialValues = character?.abilities as Abilities

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (!character) {
        return
      }

      const newValues = { ...character, abilities: values }

      if (
        calculateAbilityModifier(values.constitution) % 2 === 0 &&
        values.constitution !== initialValues.constitution
      ) {
        if (character.currentHitPoints === character.maxHitPoints) {
          newValues.currentHitPoints = newValues.maxHitPoints + newValues.level
        }

        newValues.maxHitPoints = newValues.maxHitPoints + newValues.level
      }

      setCharacter(newValues)
      goToNextStep()
    },
  })

  const { handleSubmit } = formik

  return (
    <>
      <DialogContent style={{ padding: 16 }}>
        <Typography>
          <strong>Pontos disponíveis:</strong> {availablePoints}
        </Typography>

        <Box mt={4} display="flex" flexDirection="column" gap={1}>
          <AbilityIncrementItem
            ability={AbilityType.strength}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />

          <AbilityIncrementItem
            ability={AbilityType.dexterity}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />

          <AbilityIncrementItem
            ability={AbilityType.constitution}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />

          <AbilityIncrementItem
            ability={AbilityType.intelligence}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />

          <AbilityIncrementItem
            ability={AbilityType.wisdom}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />

          <AbilityIncrementItem
            ability={AbilityType.charisma}
            formik={formik}
            availablePoints={availablePoints}
            changeAvailablePoints={(value) => setAvailablePoints(value)}
          />
        </Box>
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={!!availablePoints}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          próximo
        </Button>
      </DialogActions>
    </>
  )
}
