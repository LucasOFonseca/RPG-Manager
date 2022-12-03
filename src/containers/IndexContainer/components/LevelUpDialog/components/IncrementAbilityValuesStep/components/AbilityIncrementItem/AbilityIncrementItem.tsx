import { Add, Remove } from '@mui/icons-material'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { FormikProps } from 'formik'
import { getTranslatedAbility } from '../../../../../../../../helpers/utils'
import { Abilities, AbilityType } from '../../../../../../../../shared/models'

interface AbilityIncrementItemProps {
  ability: AbilityType
  formik: FormikProps<Abilities>
  availablePoints: number
  changeAvailablePoints: (value: number) => void
}

export const AbilityIncrementItem: React.FC<AbilityIncrementItemProps> = ({
  ability,
  formik,
  availablePoints,
  changeAvailablePoints,
}) => {
  const { initialValues, values, setFieldValue } = formik

  return (
    <Box>
      <Typography>{getTranslatedAbility(ability)}</Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Tooltip arrow title="Subtrair">
          <IconButton
            disabled={values[ability] === initialValues[ability]}
            onClick={() => {
              setFieldValue(ability, values[ability] - 1)
              changeAvailablePoints(availablePoints + 1)
            }}
          >
            <Remove />
          </IconButton>
        </Tooltip>

        <Typography>{values[ability]}</Typography>

        {availablePoints && values[ability] < 20 ? (
          <Tooltip arrow title="Adicionar">
            <IconButton
              onClick={() => {
                setFieldValue(ability, values[ability] + 1)
                changeAvailablePoints(availablePoints - 1)
              }}
            >
              <Add />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
    </Box>
  )
}
