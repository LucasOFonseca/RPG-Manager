import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material'
import { useCharSheet } from '../../../../../stores/useCharSheet'
import { BenefitType } from '../../../../models'

export const RogueLevelTwo: React.FC = () => {
  const { setClass, charClass, resetOnLevelUp } = useCharSheet()

  const handleSubmit = () => {
    if (!charClass) {
      return
    }

    setClass({
      ...charClass,
      features: [
        ...charClass.features,
        {
          title: 'Ação ardilosa',
          benefits: [
            {
              type: BenefitType.item,
              text: 'Permite usar uma ação bônus em cada um de seus turnos de combate para realizar uma disparada, desengajar ou esconder',
            },
          ],
        },
      ],
    })

    resetOnLevelUp()
    localStorage.removeItem('currentStep')
  }

  return (
    <>
      <DialogContent style={{ padding: 16 }}>
        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700 }}
        >
          Nova habilidade de classe adquirida: Ação ardilosa
        </Typography>

        <Box mt={1} display="flex" flexDirection="column" gap={1}>
          <Typography style={{ fontWeight: 500 }}>
            Permite usar uma ação bônus em cada um de seus turnos de combate
            para realizar uma disparada, desengajar ou esconder
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions style={{ padding: '8px 16px 24px' }}>
        <Button
          fullWidth
          disableElevation
          variant="contained"
          onClick={handleSubmit}
        >
          prosseguir
        </Button>
      </DialogActions>
    </>
  )
}
