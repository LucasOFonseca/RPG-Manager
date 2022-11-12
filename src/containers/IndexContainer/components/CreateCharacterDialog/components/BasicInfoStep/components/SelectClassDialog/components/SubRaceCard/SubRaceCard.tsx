import { alpha, Box, Card, Radio, styled, Typography } from '@mui/material'
import { getTranslatedSkill } from '../../../../../../../../../../helpers/utils'
import { SubRaceSummary } from '../../../../../../../../../../shared/models'

const Root = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 8,

  transition: 'all .2s',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}))

interface SubRaceCardProps {
  selected: boolean
  subRace: SubRaceSummary
  onClick: () => void
}

export const SubRaceCard: React.FC<SubRaceCardProps> = ({
  selected,
  subRace,
  onClick,
}) => {
  return (
    <Root variant="outlined" onClick={onClick}>
      <Radio checked={selected} />

      <Box ml={1} display="flex" flexDirection="column" gap={1}>
        <Typography style={{ fontWeight: 700 }}>{subRace.name}</Typography>

        {subRace.traits.map((trait) => (
          <Typography>
            <strong>{trait.title}:</strong> {trait.description}
          </Typography>
        ))}

        {subRace.skillEnhancements.map((se) => (
          <Typography style={{ fontWeight: 700 }}>{`+${
            se.value
          } de ${getTranslatedSkill(se.skill)}`}</Typography>
        ))}
      </Box>
    </Root>
  )
}
