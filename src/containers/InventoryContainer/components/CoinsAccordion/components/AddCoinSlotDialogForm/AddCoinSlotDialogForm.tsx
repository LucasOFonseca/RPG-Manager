import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Paper,
  Slide,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { useFormik } from 'formik'
import React from 'react'
import { CoinItem } from '../../../../../../shared/models'
import { useInventory } from '../../../../../../stores/useInventory'

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface AddCoinSlotDialogFormProps {
  coinToEdit?: CoinItem
  onClose: () => void
}

export const AddCoinSlotDialogForm: React.FC<AddCoinSlotDialogFormProps> = ({
  coinToEdit,
  onClose,
}) => {
  const { addCoinSlot, editCoinInfo } = useInventory()

  const initialValues = {
    name: coinToEdit?.name ?? '',
    quantity: coinToEdit?.quantity ?? 0,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (coinToEdit) {
        editCoinInfo(coinToEdit.name, values.quantity, values.name)
      } else {
        addCoinSlot(values)
      }
      onClose()
    },
  })

  const { values, handleChange, handleSubmit } = formik

  return (
    <Dialog
      open
      PaperComponent={DialogPaper}
      TransitionComponent={Transition}
      onClose={onClose}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="24px 16px 0"
      >
        <Typography variant="h6" style={{ fontWeight: 700 }}>
          {coinToEdit ? 'Editar' : 'Adicionar espaço de moeda'}
        </Typography>

        <Tooltip arrow title="Fechar">
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Tooltip>
      </Box>

      <DialogContent style={{ padding: '24px 16px 0' }}>
        <TextField
          fullWidth
          variant="outlined"
          name="name"
          label="Nome"
          value={values.name}
          onChange={handleChange}
        />

        <Box mt={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            name="quantity"
            label="Quantidade"
            value={values.quantity}
            onChange={handleChange}
          />
        </Box>
      </DialogContent>

      <DialogActions style={{ padding: '24px 16px' }}>
        <Button
          fullWidth
          disableElevation
          variant="contained"
          onClick={() => handleSubmit()}
        >
          salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
