import { Box, Divider, styled, Typography } from '@mui/material'
import { useCharSheet } from '../../../../stores/useCharSheet'
import { AbilityItem } from './components/AbilityItem'

const AbilitiesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,

  [theme.breakpoints.down(330)]: {
    width: 140,
  },
}))

export const AbilitiesSection: React.FC = () => {
  const { character } = useCharSheet()

  return (
    <Box mt={2}>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        Habilidades
      </Typography>

      <Divider />

      <Box mt={1} display="flex" justifyContent="center">
        <AbilitiesContainer>
          <AbilityItem
            label="For"
            abilityValue={character?.abilities.strength ?? 0}
          />

          <AbilityItem
            label="Des"
            abilityValue={character?.abilities.dexterity ?? 0}
          />

          <AbilityItem
            label="Con"
            abilityValue={character?.abilities.constitution ?? 0}
          />

          <AbilityItem
            label="Int"
            abilityValue={character?.abilities.intelligence ?? 0}
          />

          <AbilityItem
            label="Sab"
            abilityValue={character?.abilities.wisdom ?? 0}
          />

          <AbilityItem
            label="Car"
            abilityValue={character?.abilities.charisma ?? 0}
          />
        </AbilitiesContainer>
      </Box>
    </Box>
  )
}
