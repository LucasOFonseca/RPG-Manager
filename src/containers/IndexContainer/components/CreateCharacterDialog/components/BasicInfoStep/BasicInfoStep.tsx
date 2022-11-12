import { Box, TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { useState } from 'react'
import { Character } from '../../../../../../shared/models'
import { SelectRaceDialog } from '../SelectRaceDialog'

interface BasicInfoStepProps {
  formik: FormikProps<Character>
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ formik }) => {
  const { values, handleChange } = formik

  const [showSelectRaceDialog, setShowSelectRaceDialog] = useState(false)

  const handleOpenSelectRaceDialog = () => {
    setShowSelectRaceDialog(true)
  }

  const handleCloseSelectRaceDialog = () => {
    setShowSelectRaceDialog(false)
  }

  return (
    <>
      {showSelectRaceDialog && (
        <SelectRaceDialog
          formik={formik}
          onClose={handleCloseSelectRaceDialog}
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

        <TextField fullWidth variant="outlined" label="Classe" />

        <TextField fullWidth variant="outlined" label="Antecedente" />
      </Box>
    </>
  )
}
