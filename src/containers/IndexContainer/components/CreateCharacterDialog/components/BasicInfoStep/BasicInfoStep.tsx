import { Box, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { useState } from 'react'
import { Character } from '../../../../../../shared/models'
import { SelectBackgroundDialog } from './components/SelectBackgroundDialog'
import { SelectClassDialog } from './components/SelectClassDialog'
import { SelectRaceDialog } from './components/SelectRaceDialog'

interface BasicInfoStepProps {
  formik: FormikProps<Character>
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ formik }) => {
  const { values, handleChange } = formik

  const [showSelectRaceDialog, setShowSelectRaceDialog] = useState(false)
  const [showSelectClassDialog, setShowSelectClassDialog] = useState(false)
  const [showSelectBackgroundDialog, setShowSelectBackgroundDialog] =
    useState(false)

  const handleOpenSelectRaceDialog = () => {
    setShowSelectRaceDialog(true)
  }

  const handleCloseSelectRaceDialog = () => {
    setShowSelectRaceDialog(false)
  }

  const handleOpenSelectClassDialog = () => {
    setShowSelectClassDialog(true)
  }

  const handleCloseSelectClassDialog = () => {
    setShowSelectClassDialog(false)
  }

  const handleOpenSelectBackgroundDialog = () => {
    setShowSelectBackgroundDialog(true)
  }

  const handleCloseSelectBackgroundDialog = () => {
    setShowSelectBackgroundDialog(false)
  }

  return (
    <>
      {showSelectRaceDialog && (
        <SelectRaceDialog
          formik={formik}
          onClose={handleCloseSelectRaceDialog}
        />
      )}

      {showSelectBackgroundDialog && (
        <SelectBackgroundDialog
          formik={formik}
          onClose={handleCloseSelectBackgroundDialog}
        />
      )}

      {showSelectClassDialog && (
        <SelectClassDialog
          formik={formik}
          onClose={handleCloseSelectClassDialog}
        />
      )}

      <Box display="flex" flexDirection="column" gap={3}>
        <TextField
          fullWidth
          required
          variant="outlined"
          label="Nome"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          required
          variant="outlined"
          label="Raça"
          value={values.race?.name ?? ''}
          onClick={handleOpenSelectRaceDialog}
        />

        <TextField
          fullWidth
          required
          variant="outlined"
          label="Classe"
          value={values.class?.name ?? ''}
          onClick={handleOpenSelectClassDialog}
        />

        <TextField
          fullWidth
          required
          variant="outlined"
          label="Antecedente"
          value={values.background?.name ?? ''}
          onClick={handleOpenSelectBackgroundDialog}
        />
      </Box>
    </>
  )
}
