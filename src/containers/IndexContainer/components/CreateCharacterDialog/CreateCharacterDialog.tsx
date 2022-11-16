import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Character } from '../../../../shared/models'
import { AbilitiesStep } from './components/AbilitiesStep'
import { BasicInfoStep } from './components/BasicInfoStep'

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

interface CreateCharacterDialogProps {
  open: boolean
}

export const CreateCharacterDialog: React.FC<CreateCharacterDialogProps> = ({
  open,
}) => {
  const [currentStep, setCurrentStep] = useState(0)

  const initialValues: Character = {
    name: '',
    abilities: {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
  }

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  })

  const { values } = formik

  return (
    <Dialog open={open} PaperComponent={DialogPaper}>
      <Box padding="24px 16px 0">
        <Typography
          variant="h6"
          style={{ fontWeight: 700, textAlign: 'center' }}
        >
          Criar personagem
        </Typography>

        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700, textAlign: 'center' }}
        >
          {currentStep === 0 && 'Informações básicas'}
          {currentStep === 1 && 'Habilidades'}
        </Typography>
      </Box>

      <DialogContent style={{ padding: '24px 16px 0' }}>
        {currentStep === 0 && <BasicInfoStep formik={formik} />}
        {currentStep === 1 && <AbilitiesStep formik={formik} />}
      </DialogContent>

      <DialogActions style={{ padding: '24px 16px' }}>
        <Button
          fullWidth
          disableElevation
          disabled={
            (currentStep === 0 &&
              (!values.name ||
                !values.race ||
                !values.class ||
                !values.background)) ||
            (currentStep === 1 &&
              (!values.abilities.charisma ||
                !values.abilities.constitution ||
                !values.abilities.dexterity ||
                !values.abilities.intelligence ||
                !values.abilities.strength ||
                !values.abilities.wisdom))
          }
          variant="contained"
          onClick={() => {
            setCurrentStep(currentStep + 1)
          }}
        >
          próximo
        </Button>
      </DialogActions>
    </Dialog>
  )
}
