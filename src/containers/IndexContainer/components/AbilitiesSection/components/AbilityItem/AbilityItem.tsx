import { Box, Card, styled, Typography } from '@mui/material'
import { calculateAbilityModifier } from '../../../../../../helpers/utils'

const ModifierContainer = styled(Card)(() => ({
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
}))

const ValueContainer = styled(Card)(() => ({
  width: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 11,
  marginTop: 4,
  padding: 4,
}))

interface AbilityItemProps {
  label: string
  abilityValue: number
}

export const AbilityItem: React.FC<AbilityItemProps> = ({
  label,
  abilityValue,
}) => {
  const modifier = calculateAbilityModifier(abilityValue)

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography style={{ fontSize: '.875rem', fontWeight: 700 }}>
        {label}
      </Typography>

      <ModifierContainer variant="outlined">
        <Typography>{modifier > 0 ? `+${modifier}` : modifier}</Typography>
      </ModifierContainer>

      <ValueContainer variant="outlined">
        <Typography style={{ fontSize: '.75rem', lineHeight: '.75rem' }}>
          {abilityValue}
        </Typography>
      </ValueContainer>
    </Box>
  )
}
