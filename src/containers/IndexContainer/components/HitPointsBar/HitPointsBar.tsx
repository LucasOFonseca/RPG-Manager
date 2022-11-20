import { Box, LinearProgress, Menu, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ChangeQuantityInput } from '../../../../shared/components/ChangeQuantityInput'
import { useCharSheet } from '../../../../stores/useCharSheet'
import { DeathResistanceDialog } from './components/DeathResistanceDialog'

const Root = styled(Box)(() => ({
  width: '100%',
  padding: '8px 4px',
  borderRadius: 4,
  transition: 'all .2s',

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.32)',
  },
}))

const HpBar = styled(LinearProgress)(() => ({
  height: 18,
  backgroundColor: '#292E2A',
  border: '2px solid #292E2A',
  borderRadius: 4,

  '& .MuiLinearProgress-bar': {
    backgroundColor: '#53B462',
    borderRadius: 2,
  },
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    display: 'flex',
    marginTop: 10,

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 'calc(50% - 5px)',
      width: 10,
      height: 10,
      backgroundColor:
        theme.palette.mode === 'dark'
          ? '#2F2F2F'
          : theme.palette.background.paper,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },

    '& .MuiList-root': {
      width: '100%',
      padding: 16,
    },
  },
}))

export const HitPointsBar: React.FC = () => {
  const { character, setCurrentHitPoints } = useCharSheet()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showDeathResistanceDialog, setShowDeathResistanceDialog] =
    useState(false)

  const handleOpenDeathResistanceDialog = () => {
    setShowDeathResistanceDialog(true)
  }

  const handleCloseDeathResistanceDialog = () => {
    setShowDeathResistanceDialog(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null)
  }

  const normalize = (value: number): number => {
    const normalizedValue = (value * 100) / (character?.maxHitPoints ?? 1)

    if (normalizedValue > 100) {
      return 100
    }

    return normalizedValue
  }
  useEffect(() => {
    if (character?.currentHitPoints === 0) {
      handleOpenDeathResistanceDialog()
    }
  }, [character?.currentHitPoints]) // eslint-disable-line

  return (
    <>
      <DeathResistanceDialog
        open={showDeathResistanceDialog}
        onClose={handleCloseDeathResistanceDialog}
      />

      <Root onClick={handleClick}>
        <Typography style={{ fontSize: '.875rem', fontWeight: 700 }}>
          HP
        </Typography>

        <HpBar
          variant="determinate"
          value={normalize(character?.currentHitPoints ?? 0)}
        />

        <Typography style={{ fontSize: '.75rem', marginTop: 8 }}>
          {character?.currentHitPoints}/{character?.maxHitPoints}
        </Typography>
      </Root>

      <StyledMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <ChangeQuantityInput
          currentValue={character?.currentHitPoints ?? 0}
          onChange={setCurrentHitPoints}
        />
      </StyledMenu>
    </>
  )
}
