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

interface CharacterDeathDialogProps {
  open: boolean
}

export const CharacterDeathDialog: React.FC<CharacterDeathDialogProps> = ({
  open,
}) => {
  const { character, charClass, resetCharSheet } = useCharSheet()

  return (
    <Dialog
      open={open}
      PaperComponent={DialogPaper}
      TransitionComponent={Transition}
    >
      <Box padding="16px 16px 0" display="flex" justifyContent="center">
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          {character?.basicInfo.name} está morto(a)!
        </Typography>
      </Box>

      <DialogContent style={{ padding: '24px 16px 0' }}>
        <Typography>
          {character?.basicInfo.name} foi um(a) bravo(a) {charClass?.name},
          lutou com coragem até seu último suspiro. Mas infelizmente não foi
          capaz de resistir à morte.
        </Typography>
      </DialogContent>

      <DialogActions disableSpacing style={{ padding: '24px 16px' }}>
        <Button fullWidth variant="outlined" onClick={resetCharSheet}>
          criar outro personagem
        </Button>
      </DialogActions>
    </Dialog>
  )
}
