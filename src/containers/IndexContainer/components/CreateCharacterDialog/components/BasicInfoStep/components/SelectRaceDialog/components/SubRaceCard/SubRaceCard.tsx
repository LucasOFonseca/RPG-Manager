import {
  alpha,
  Box,
  Card,
  Collapse,
  Divider,
  Radio,
  styled,
  Typography,
} from '@mui/material'
import { getTranslatedSkill } from '../../../../../../../../../../helpers/utils'
import { PlayerChoicesForm } from '../../../../../../../../../../shared/components/PlayerChoicesForm'
import {
  PlayerChoices,
  SubRaceSummary,
} from '../../../../../../../../../../shared/models'

const ActionBox = styled(Box)(({ theme }) => ({
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
  playerChoices?: PlayerChoices
  onClick: () => void
  handleChangeIsValidSubmit: (isValid: boolean) => void
  handleChangePlayerChoices: (value: PlayerChoices) => void
}

export const SubRaceCard: React.FC<SubRaceCardProps> = ({
  selected,
  subRace,
  playerChoices,
  onClick,
  handleChangeIsValidSubmit,
  handleChangePlayerChoices,
}) => {
  return (
    <Card variant="outlined">
      <ActionBox onClick={onClick}>
        <Radio checked={selected} />

        <Box ml={1} display="flex" flexDirection="column" gap={1}>
          <Typography style={{ fontWeight: 700 }}>{subRace.name}</Typography>

          {subRace.traits.map((trait) => (
            <Typography key={trait.title}>
              <strong>{trait.title}:</strong> {trait.description}
            </Typography>
          ))}

          {subRace.skillEnhancements.map((se) => (
            <Typography key={se.skill} style={{ fontWeight: 700 }}>{`+${
              se.value
            } de ${getTranslatedSkill(se.skill)}`}</Typography>
          ))}
        </Box>
      </ActionBox>

      {subRace.playerChoices && (
        <Collapse unmountOnExit in={selected}>
          <Divider />

          <Box padding={1} display="flex" flexDirection="column" gap={2}>
            <PlayerChoicesForm
              playerChoices={playerChoices}
              fields={subRace.playerChoices}
              handleChangeIsValidSubmit={handleChangeIsValidSubmit}
              handleChangePlayerChoices={handleChangePlayerChoices}
            />
          </Box>
        </Collapse>
      )}
    </Card>
  )
}
