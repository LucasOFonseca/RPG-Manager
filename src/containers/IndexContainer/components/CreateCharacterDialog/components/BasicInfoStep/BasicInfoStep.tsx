import { Box, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { useState } from 'react'
import { Character } from '../../../../../../shared/models'
import { SelectClassDialog } from './components/SelectClassDialog'
import { SelectRaceDialog } from './components/SelectRaceDialog'

interface BasicInfoStepProps {
  formik: FormikProps<Character>
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ formik }) => {
  const { values, handleChange } = formik

  const [showSelectRaceDialog, setShowSelectRaceDialog] = useState(false)
  const [showSelectClassDialog, setShowSelectClassDialog] = useState(false)

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

  return (
    <>
      {showSelectRaceDialog && (
        <SelectRaceDialog
          formik={formik}
          onClose={handleCloseSelectRaceDialog}
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
          variant="outlined"
          label="Nome"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Raça"
          value={values.race?.name ?? ''}
          onClick={handleOpenSelectRaceDialog}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Classe"
          value={values.class?.name ?? ''}
          onClick={handleOpenSelectClassDialog}
        />

        <TextField fullWidth variant="outlined" label="Antecedente" />
      </Box>
    </>
  )
}
