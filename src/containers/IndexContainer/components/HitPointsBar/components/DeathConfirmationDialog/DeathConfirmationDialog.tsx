import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Slide,
  styled,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'
import { useCharSheet } from '../../../../../../stores/useCharSheet'

const DialogPaper = styled(Paper)(() => ({
  width: 320,
  margin: '8px !important',
  borderRadius: 8,
}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface DeathConfirmationDialogProps {
  open: boolean
  onClose: () => void
}

export const DeathConfirmationDialog: React.FC<
  DeathConfirmationDialogProps
> = ({ open, onClose }) => {
  const { character, resetCharSheet } = useCharSheet()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={DialogPaper}
      TransitionComponent={Transition}
    >
      <Box padding="16px 16px 0" display="flex" justifyContent="center">
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          Declarar a morte de {character?.basicInfo.name}?
        </Typography>
      </Box>

      <DialogContent style={{ padding: '24px 16px 0' }}>
        <Typography>
          Ao declarar {character?.basicInfo.name} como morto(a) a ficha será
          excluída e você deverá criar outro personagem para jogar novamente.
          Deseja continuar?
        </Typography>
      </DialogContent>

      <DialogActions style={{ padding: '24px 16px' }}>
        <Button variant="outlined" onClick={onClose}>
          cancelar
        </Button>

        <Button variant="outlined" color="error" onClick={resetCharSheet}>
          confirmar morte
        </Button>
      </DialogActions>
    </Dialog>
  )
}
