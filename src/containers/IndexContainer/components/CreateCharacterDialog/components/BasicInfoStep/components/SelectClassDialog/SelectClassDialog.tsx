import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
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
import React, { useEffect, useState } from 'react'
import { makeClassSummaries } from '../../../../../../../../helpers/utils'
import { EquipmentSection } from '../../../../../../../../shared/components/EquipmentSection'
import { PlayerChoicesForm } from '../../../../../../../../shared/components/PlayerChoicesForm'
import { ProficienciesSection } from '../../../../../../../../shared/components/ProficienciesSection'
import {
  CharacterClassFeature,
  CharacterForm,
  ClassType,
  PlayerChoices,
} from '../../../../../../../../shared/models'
import { ClassFeature } from './components/ClassFeature'

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

interface SelectClassDialogProps {
  formik: FormikProps<CharacterForm>
  onClose: () => void
}

export const SelectClassDialog: React.FC<SelectClassDialogProps> = ({
  formik,
  onClose,
}) => {
  const { values, setFieldValue } = formik

  const [selectedClass, setSelectedClass] = useState<ClassType | undefined>(
    values.class?.type
  )
  const [selectedClassPlayerChoices, setSelectedClassPlayerChoices] = useState<
    PlayerChoices | undefined
  >(values.class?.playerChoices)
  const [selectedClassFeatures, setSelectedClassFeatures] = useState<
    CharacterClassFeature[] | undefined
  >(values.class?.features)
  const [isValidSubmit, setIsValidSubmit] = useState(false)

  const classSummary = selectedClass
    ? makeClassSummaries()[selectedClass]
    : undefined

  useEffect(() => {
    if (classSummary) {
      setSelectedClassFeatures(
        classSummary.features.map((feature) => ({ title: feature.title }))
      )
    }
  }, [selectedClass])

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
            Selecionar classe
          </Typography>

          <Tooltip arrow title="Fechar">
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>

        <FormControl fullWidth>
          <InputLabel>Classe</InputLabel>
          <Select
            value={selectedClass ?? ''}
            label="Classe"
            onChange={({ target }) => {
              setSelectedClass(target.value as ClassType)
            }}
          >
            <MenuItem value={ClassType.ranger}>Patrulheiro</MenuItem>
            <MenuItem value={ClassType.rogue}>Ladino</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DialogContent style={{ padding: 16 }}>
        {classSummary ? (
          <>
            <Typography
              variant="h6"
              style={{ fontSize: '1.125rem', fontWeight: 700 }}
            >
              {classSummary.name}
            </Typography>

            <Box mt={1}>
              {typeof classSummary.summary === 'string' ? (
                <Typography>{classSummary.summary}</Typography>
              ) : (
                <>
                  {classSummary.summary.map((paragraph, index) => (
                    <Typography key={index}>{paragraph}</Typography>
                  ))}
                </>
              )}
            </Box>

            <Box mt={2}>
              <Typography>
                <strong>Pontos de vida iniciais:</strong>{' '}
                {classSummary.initialHitPoints} + modificador de Constituição
              </Typography>

              <EquipmentSection equipments={classSummary.equipment} />
            </Box>

            <Box mt={2}>
              <Divider />

              {classSummary.features.map((feature, index) => (
                <React.Fragment key={feature.title}>
                  <ClassFeature
                    feature={feature}
                    playerChoices={
                      selectedClassFeatures?.[index]?.playerChoices
                    }
                    handleChangeIsValidSubmit={(isValid) =>
                      setIsValidSubmit(isValid)
                    }
                    handleChangePlayerChoices={(value) => {
                      const newSelectedClassFeatures =
                        selectedClassFeatures ?? []
                      newSelectedClassFeatures[index].playerChoices = value
                    }}
                  />

                  <Divider />
                </React.Fragment>
              ))}
            </Box>

            <Box mt={2}>
              <ProficienciesSection
                proficiencies={classSummary.proficiencies}
              />

              {classSummary.playerChoices && (
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                  <PlayerChoicesForm
                    playerChoices={selectedClassPlayerChoices}
                    fields={classSummary.playerChoices}
                    handleChangeIsValidSubmit={(isValid) =>
                      setIsValidSubmit(isValid)
                    }
                    handleChangePlayerChoices={(value) => {
                      setSelectedClassPlayerChoices(value)
                    }}
                  />
                </Box>
              )}
            </Box>
          </>
        ) : (
          <Typography style={{ textAlign: 'center' }}>
            Selecione uma Classe para ver suas características
          </Typography>
        )}
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={!selectedClass || !isValidSubmit}
          variant="contained"
          onClick={() => {
            setFieldValue('class', {
              type: classSummary?.type,
              name: classSummary?.name,
              features: selectedClassFeatures,
              playerChoices: selectedClassPlayerChoices,
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
