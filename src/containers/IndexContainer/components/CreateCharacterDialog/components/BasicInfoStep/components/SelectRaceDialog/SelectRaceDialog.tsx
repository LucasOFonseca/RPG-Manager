import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Tooltip,
  Typography,
} from '@mui/material'
import { FormikProps } from 'formik'
import { useState } from 'react'
import {
  getTranslatedAbility,
  getTranslatedLanguage,
  makeRaceSummaries,
} from '../../../../../../../../helpers/utils'
import { PlayerChoicesForm } from '../../../../../../../../shared/components/PlayerChoicesForm'
import {
  CharacterForm,
  CharacterSubRace,
  PlayerChoices,
  RaceType,
} from '../../../../../../../../shared/models'
import { SubRaceCard } from './components/SubRaceCard'

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

const RacialTraitsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}))

interface SelectRaceDialogProps {
  formik: FormikProps<CharacterForm>
  onClose: () => void
}

export const SelectRaceDialog: React.FC<SelectRaceDialogProps> = ({
  formik,
  onClose,
}) => {
  const { values, setFieldValue } = formik

  const [selectedRace, setSelectedRace] = useState<RaceType | undefined>(
    values.race?.type
  )
  const [racePlayerChoices, setRacePlayerChoices] = useState<
    PlayerChoices | undefined
  >(values.race?.playerChoices)
  const [selectedSubRace, setSelectedSubRace] = useState<
    CharacterSubRace | undefined
  >(values.subRace)
  const [isValidSubmit, setIsValidSubmit] = useState(false)

  const raceSummary = selectedRace
    ? makeRaceSummaries()[selectedRace]
    : undefined

  return (
    <Dialog open onClose={onClose} PaperComponent={DialogPaper}>
      <Box padding="24px 16px 8px">
        <Box
          mb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Selecionar ra??a
          </Typography>

          <Tooltip arrow title="Fechar">
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <FormControl fullWidth>
          <InputLabel>Ra??a</InputLabel>
          <Select
            value={selectedRace ?? ''}
            label="Ra??a"
            onChange={({ target }) => setSelectedRace(target.value as RaceType)}
          >
            <MenuItem value={RaceType.elf}>Elfo</MenuItem>
            <MenuItem value={RaceType.human}>Humano</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DialogContent style={{ padding: 16 }}>
        {raceSummary ? (
          <>
            <Typography
              variant="h6"
              style={{ fontSize: '1.125rem', fontWeight: 700 }}
            >
              {raceSummary.name}
            </Typography>

            <Box mt={1}>
              {typeof raceSummary.summary === 'string' ? (
                <Typography>{raceSummary.summary}</Typography>
              ) : (
                <>
                  {raceSummary.summary.map((paragraph, index) => (
                    <Typography key={index}>{paragraph}</Typography>
                  ))}
                </>
              )}
            </Box>

            <Box mt={2}>
              <Typography
                variant="h6"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                }}
              >
                Tra??os raciais
              </Typography>

              <RacialTraitsContainer>
                <Typography>
                  <strong>F??sico:</strong>{' '}
                  {raceSummary.racialTraits.physicalDescription}
                </Typography>

                <Typography>
                  <strong>Idade:</strong>{' '}
                  {raceSummary.racialTraits.ageDescription}
                </Typography>

                <Typography>
                  <strong>Deslocamento base:</strong>{' '}
                  {raceSummary.racialTraits.baseMovement} metros.
                </Typography>

                <Typography>
                  <strong>Idiomas:</strong>{' '}
                  {raceSummary.racialTraits.languages
                    .map((language) => getTranslatedLanguage(language))
                    .join(' - ')}
                </Typography>

                {raceSummary.racialTraits.otherTraits?.map((trait) => (
                  <Typography key={trait.title}>
                    <strong>{trait.title}:</strong> {trait.description}
                  </Typography>
                ))}

                {raceSummary.racialTraits.abilityEnhancements.map((ae) => (
                  <Typography key={ae.ability} style={{ fontWeight: 700 }}>{`+${
                    ae.value
                  } de ${getTranslatedAbility(ae.ability)}`}</Typography>
                ))}
              </RacialTraitsContainer>
            </Box>

            {raceSummary.playerChoices && (
              <Box mt={3}>
                <PlayerChoicesForm
                  playerChoices={racePlayerChoices}
                  fields={raceSummary.playerChoices}
                  handleChangeIsValidSubmit={(isValid) =>
                    setIsValidSubmit(isValid)
                  }
                  handleChangePlayerChoices={(value) =>
                    setRacePlayerChoices(value)
                  }
                />
              </Box>
            )}

            {raceSummary.subRaces && (
              <>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    marginTop: 24,
                  }}
                >
                  Sub-ra??a
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                  {raceSummary.subRaces.map((subRace) => (
                    <SubRaceCard
                      key={subRace.type}
                      selected={selectedSubRace?.type === subRace.type}
                      subRace={subRace}
                      playerChoices={selectedSubRace?.playerChoices}
                      onClick={() => {
                        if (subRace.playerChoices) {
                          setIsValidSubmit(false)
                        } else {
                          setIsValidSubmit(true)
                        }

                        setSelectedSubRace({
                          type: subRace.type,
                          name: subRace.name,
                        })
                      }}
                      handleChangeIsValidSubmit={(isValid) =>
                        setIsValidSubmit(isValid)
                      }
                      handleChangePlayerChoices={(value) => {
                        setSelectedSubRace({
                          type: subRace.type,
                          name: subRace.name,
                          playerChoices: value,
                        })
                      }}
                    />
                  ))}
                </Box>
              </>
            )}
          </>
        ) : (
          <Typography style={{ textAlign: 'center' }}>
            Selecione uma Ra??a para ver suas caracter??sticas
          </Typography>
        )}
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={
            !selectedRace ||
            (raceSummary?.subRaces && !selectedSubRace) ||
            !isValidSubmit
          }
          variant="contained"
          onClick={() => {
            setFieldValue('race', {
              type: raceSummary?.type,
              name: raceSummary?.name,
              playerChoices: racePlayerChoices,
            })
            setFieldValue('subRace', selectedSubRace)
            onClose()
          }}
        >
          salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
