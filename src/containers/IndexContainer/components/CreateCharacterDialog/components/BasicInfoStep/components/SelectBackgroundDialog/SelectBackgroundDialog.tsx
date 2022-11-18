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
import React, { useState } from 'react'
import { makeBackgroundSummaries } from '../../../../../../../../helpers/utils'
import { EquipmentSection } from '../../../../../../../../shared/components/EquipmentSection'
import { PlayerChoicesForm } from '../../../../../../../../shared/components/PlayerChoicesForm'
import { ProficienciesSection } from '../../../../../../../../shared/components/ProficienciesSection'
import {
  BackgroundType,
  CharacterForm,
  PlayerChoices,
} from '../../../../../../../../shared/models'

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

interface SelectBackgroundDialogProps {
  formik: FormikProps<CharacterForm>
  onClose: () => void
}

export const SelectBackgroundDialog: React.FC<SelectBackgroundDialogProps> = ({
  formik,
  onClose,
}) => {
  const { values, setFieldValue } = formik

  const [selectedBackground, setSelectedBackground] = useState<
    BackgroundType | undefined
  >(values.background?.type)
  const [selectedBackgroundPlayerChoices, setSelectedBackgroundPlayerChoices] =
    useState<PlayerChoices | undefined>(values.background?.playerChoices)
  const [isValidSubmit, setIsValidSubmit] = useState(false)

  const backgroundSummary = selectedBackground
    ? makeBackgroundSummaries()[selectedBackground]
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
            Selecionar antecedente
          </Typography>

          <Tooltip arrow title="Fechar">
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <FormControl fullWidth>
          <InputLabel>Antecedente</InputLabel>
          <Select
            value={selectedBackground ?? ''}
            label="Antecedente"
            onChange={({ target }) => {
              setSelectedBackground(target.value as BackgroundType)
            }}
          >
            <MenuItem value={BackgroundType.outlander}>Forasteiro</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DialogContent style={{ padding: 16 }}>
        {backgroundSummary ? (
          <>
            <Typography
              variant="h6"
              style={{ fontSize: '1.125rem', fontWeight: 700 }}
            >
              {backgroundSummary.name}
            </Typography>

            <Box mt={1}>
              {typeof backgroundSummary.summary === 'string' ? (
                <Typography>{backgroundSummary.summary}</Typography>
              ) : (
                <>
                  {backgroundSummary.summary.map((paragraph, index) => (
                    <Typography key={index}>{paragraph}</Typography>
                  ))}
                </>
              )}
            </Box>

            <Box mt={2}>
              <Typography
                variant="h6"
                style={{ fontSize: '1.125rem', fontWeight: 700 }}
              >
                Característica: {backgroundSummary.feature.title}
              </Typography>

              <Box mt={1} display="flex" flexDirection="column" gap={1}>
                {typeof backgroundSummary.summary === 'string' ? (
                  <Typography>{backgroundSummary.summary}</Typography>
                ) : (
                  <>
                    {backgroundSummary.summary.map((paragraph, index) => (
                      <Typography key={index}>{paragraph}</Typography>
                    ))}
                  </>
                )}
              </Box>
            </Box>

            <EquipmentSection equipments={backgroundSummary.equipment} />

            <Box mt={2}>
              <ProficienciesSection
                proficiencies={backgroundSummary.proficiencies}
              />

              {backgroundSummary.playerChoices && (
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                  <PlayerChoicesForm
                    playerChoices={selectedBackgroundPlayerChoices}
                    fields={backgroundSummary.playerChoices}
                    handleChangeIsValidSubmit={(isValid) =>
                      setIsValidSubmit(isValid)
                    }
                    handleChangePlayerChoices={(value) => {
                      setSelectedBackgroundPlayerChoices(value)
                    }}
                  />
                </Box>
              )}
            </Box>
          </>
        ) : (
          <Typography style={{ textAlign: 'center' }}>
            Selecione um Antecedente para ver suas características
          </Typography>
        )}
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={!selectedBackground || !isValidSubmit}
          variant="contained"
          onClick={() => {
            setFieldValue('background', {
              type: backgroundSummary?.type,
              name: backgroundSummary?.name,
              playerChoices: selectedBackgroundPlayerChoices,
            })
            onClose()
          }}
        >
          salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
