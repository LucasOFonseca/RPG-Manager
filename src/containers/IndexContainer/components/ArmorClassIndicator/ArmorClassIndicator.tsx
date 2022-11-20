import { Box, styled, Typography } from '@mui/material'
import { calculateAbilityModifier } from '../../../../helpers/utils'
import { useCharSheet } from '../../../../stores/useCharSheet'

const Root = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 43,
  minWidth: 43,
  height: 53,
  backgroundImage: 'url(/svg/shield.svg)',
}))

export const ArmorClassIndicator: React.FC = () => {
  const { character } = useCharSheet()

  return (
    <Root ml={1}>
      <Typography style={{ color: '#000', fontWeight: 700 }}>
        {10 + calculateAbilityModifier(character?.abilities.dexterity ?? 0)}
      </Typography>
    </Root>
  )
}
