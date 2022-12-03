import {
  Button,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { calculateAbilityModifier } from '../../../../../../helpers/utils'
import { useCharSheet } from '../../../../../../stores/useCharSheet'

interface AddHitPointsStepProps {
  hasNextStep: boolean
  goToNextStep: () => void
}

export const AddHitPointsStep: React.FC<AddHitPointsStepProps> = ({
  hasNextStep,
  goToNextStep,
}) => {
  const {
    character,
    charClass,
    setCurrentHitPoints,
    setMaxHitPoints,
    resetOnLevelUp,
  } = useCharSheet()

  const [value, setValue] = useState<number | undefined>()

  const handleSaveNewMaxHitPoints = () => {
    if (value && character) {
      const newMaxHp =
        character.maxHitPoints +
        value +
        calculateAbilityModifier(character.abilities.constitution)

      if (character.currentHitPoints === character.maxHitPoints) {
        setCurrentHitPoints(newMaxHp)
      }

      setMaxHitPoints(newMaxHp)

      if (hasNextStep) {
        goToNextStep()
      } else {
        localStorage.removeItem('currentStep')
        resetOnLevelUp()
      }
    }
  }

  return (
    <>
      <DialogContent style={{ padding: 16 }}>
        <Typography style={{ marginBottom: 24 }}>
          Jogue o seu dado de vida <strong>{`(1d${charClass?.hitDie})`}</strong>{' '}
          e digite o resultado no campo abaixo.
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          type="number"
          value={value ?? ''}
          onChange={({ target }) =>
            setValue(target.value ? Number(target.value) : undefined)
          }
          onBlur={() => {
            if ((value ?? 0) < 1) {
              setValue(1)
            } else if ((value ?? 1) > (charClass?.hitDie ?? 1)) {
              setValue(charClass?.hitDie)
            }
          }}
        />
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          variant="contained"
          onClick={handleSaveNewMaxHitPoints}
        >
          {hasNextStep ? 'próximo' : 'salvar'}
        </Button>
      </DialogActions>
    </>
  )
}
