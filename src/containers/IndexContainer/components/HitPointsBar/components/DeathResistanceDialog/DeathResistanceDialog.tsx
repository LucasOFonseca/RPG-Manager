import { Add, Remove } from '@mui/icons-material'
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
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { green, red } from '@mui/material/colors'
import { TransitionProps } from '@mui/material/transitions'
import React, { useEffect, useState } from 'react'
import { CharacterDeathDialog } from '../CharacterDeathDialog'
import { DeathConfirmationDialog } from '../DeathConfirmationDialog'

const DialogPaper = styled(Paper)(({ theme }) => ({
  margin: '8px !important',
  borderRadius: 8,
}))

interface SuccessIndicatorStyleProps {
  checked: boolean
}

const SuccessIndicator = styled(Box)<SuccessIndicatorStyleProps>(
  ({ theme, checked }) => ({
    width: 16,
    minWidth: 16,
    height: 16,
    border: `1px solid ${green[500]}`,
    borderRadius: '50%',
    backgroundColor: checked ? green[500] : undefined,

    transition: 'all .2s',

    [theme.breakpoints.down(321)]: {
      width: 14,
      minWidth: 14,
      height: 14,
    },
  })
)

interface FailIndicatorStyleProps {
  checked: boolean
}

const FailIndicator = styled(Box)<FailIndicatorStyleProps>(
  ({ theme, checked }) => ({
    width: 16,
    minWidth: 16,
    height: 16,
    border: `1px solid ${red[500]}`,
    borderRadius: '50%',
    backgroundColor: checked ? red[500] : undefined,

    transition: 'all .2s',

    [theme.breakpoints.down(321)]: {
      width: 14,
      minWidth: 14,
      height: 14,
    },
  })
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface DeathResistanceDialogProps {
  open: boolean
  onClose: () => void
}

export const DeathResistanceDialog: React.FC<DeathResistanceDialogProps> = ({
  open,
  onClose,
}) => {
  const theme = useTheme()

  const isSmallMobile = useMediaQuery(theme.breakpoints.down(321))

  const [successes, setSuccesses] = useState(0)
  const [fails, setFails] = useState(0)
  const [showDeathConfirmationDialog, setShowDeathConfirmationDialog] =
    useState(false)
  const [showCharacterDeathDialog, setShowCharacterDeathDialog] =
    useState(false)

  const handleOpenDeathConfirmationDialog = () => {
    setShowDeathConfirmationDialog(true)
  }

  const handleCloseDeathConfirmationDialog = () => {
    setShowDeathConfirmationDialog(false)
  }

  const handleOpenCharacterDeathDialog = () => {
    setShowCharacterDeathDialog(true)
  }

  useEffect(() => {
    if (successes === 3) {
      setFails(0)
      setSuccesses(0)

      onClose()
    }

    if (fails === 3) {
      handleOpenCharacterDeathDialog()
    }
  }, [successes, fails]) // eslint-disable-line

  return (
    <>
      <DeathConfirmationDialog
        open={showDeathConfirmationDialog}
        onClose={handleCloseDeathConfirmationDialog}
      />

      <CharacterDeathDialog open={showCharacterDeathDialog} />

      <Dialog
        open={open}
        PaperComponent={DialogPaper}
        TransitionComponent={Transition}
      >
        <Box padding="16px 16px 0" display="flex" justifyContent="center">
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Resistência à morte
          </Typography>
        </Box>

        <DialogContent style={{ padding: '24px 16px 0' }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={isSmallMobile ? 1 : 2}
          >
            <Typography>Sucessos</Typography>

            <Tooltip arrow title="Remover">
              <IconButton
                onClick={() => {
                  if (successes > 0) {
                    setSuccesses(successes - 1)
                  }
                }}
              >
                <Remove />
              </IconButton>
            </Tooltip>

            <SuccessIndicator checked={successes >= 1} />
            <SuccessIndicator checked={successes >= 2} />
            <SuccessIndicator checked={successes === 3} />

            <Tooltip arrow title="Adicionar">
              <IconButton
                onClick={() => {
                  if (successes < 3) {
                    setSuccesses(successes + 1)
                  }
                }}
              >
                <Add />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            mt={1}
            display="flex"
            alignItems="center"
            gap={isSmallMobile ? 1 : 2}
          >
            <Typography>Fracassos</Typography>

            <Tooltip arrow title="Remover">
              <IconButton
                onClick={() => {
                  if (fails > 0) {
                    setFails(fails - 1)
                  }
                }}
              >
                <Remove />
              </IconButton>
            </Tooltip>

            <FailIndicator checked={fails >= 1} />
            <FailIndicator checked={fails >= 2} />
            <FailIndicator checked={fails === 3} />

            <Tooltip arrow title="Adicionar">
              <IconButton
                onClick={() => {
                  if (fails < 3) {
                    setFails(fails + 1)
                  }
                }}
              >
                <Add />
              </IconButton>
            </Tooltip>
          </Box>
        </DialogContent>

        <DialogActions disableSpacing style={{ padding: '24px 16px' }}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleOpenDeathConfirmationDialog}
          >
            declarar morte
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
