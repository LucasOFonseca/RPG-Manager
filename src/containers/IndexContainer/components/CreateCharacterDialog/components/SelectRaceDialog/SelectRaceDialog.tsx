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
import { grey } from '@mui/material/colors'
import { FormikProps } from 'formik'
import { useState } from 'react'
import {
  getTranslatedLanguage,
  getTranslatedSkill,
  makeRaceSummaries,
} from '../../../../../../helpers/utils'
import {
  Character,
  CharacterSubRace,
  RaceType,
} from '../../../../../../shared/models'
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
  formik: FormikProps<Character>
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

  const [selectedSubRace, setSelectedSubRace] = useState<
    CharacterSubRace | undefined
  >(values.subRace)

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
            Selecionar raça
          </Typography>

          <Tooltip arrow title="Fechar">
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <FormControl fullWidth>
          <InputLabel>Raça</InputLabel>
          <Select
            value={selectedRace ?? ''}
            label="Raça"
            onChange={({ target }) => setSelectedRace(target.value as RaceType)}
          >
            <MenuItem value={RaceType.elf}>Elfo</MenuItem>
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
                  {raceSummary.summary.map((paragraph) => (
                    <Typography>{paragraph}</Typography>
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
                Traços raciais
              </Typography>

              <RacialTraitsContainer>
                <Typography>
                  <strong>Físico:</strong>{' '}
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
                  <Typography>
                    <strong>{trait.title}:</strong> {trait.description}
                  </Typography>
                ))}

                {raceSummary.racialTraits.skillEnhancements.map((se) => (
                  <Typography style={{ fontWeight: 700 }}>{`+${
                    se.value
                  } de ${getTranslatedSkill(se.skill)}`}</Typography>
                ))}
              </RacialTraitsContainer>
            </Box>

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
                  Sub-raça
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                  {raceSummary.subRaces.map((subRace) => (
                    <SubRaceCard
                      selected={selectedSubRace?.type === subRace.type}
                      key={subRace.type}
                      subRace={subRace}
                      onClick={() =>
                        setSelectedSubRace({
                          type: subRace.type,
                          name: subRace.name,
                        })
                      }
                    />
                  ))}
                </Box>
              </>
            )}
          </>
        ) : (
          <Typography style={{ color: grey[800], textAlign: 'center' }}>
            Selecione uma Raça para ver suas características
          </Typography>
        )}
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={
            !selectedRace || (raceSummary?.subRaces && !selectedSubRace)
          }
          variant="contained"
          onClick={() => {
            setFieldValue('race', {
              type: raceSummary?.type,
              name: raceSummary?.name,
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
