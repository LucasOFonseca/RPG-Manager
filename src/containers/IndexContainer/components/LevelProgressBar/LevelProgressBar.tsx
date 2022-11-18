import { Box, LinearProgress, Menu, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ChangeQuantityInput } from '../../../../shared/components/ChangeQuantityInput'
import { useCharSheet } from '../../../../stores/useCharSheet'

const Root = styled(Box)(() => ({
  paddingTop: 8,
  transition: 'all .2s',

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.32)',
  },
}))

const XpBar = styled(LinearProgress)(() => ({
  backgroundColor: '#2B2E30',
  borderRadius: 2,

  '& .MuiLinearProgress-bar': {
    backgroundColor: '#5297C9',
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

export const LevelProgressBar: React.FC = () => {
  const { character, setExperience, changeLevel } = useCharSheet()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const levels: { [key: number]: number } = {
    1: 300,
    2: 900,
    3: 2700,
    4: 6500,
    5: 14000,
    6: 23000,
    7: 34000,
    8: 48000,
    9: 64000,
    10: 85000,
    11: 100000,
    12: 120000,
    13: 140000,
    14: 165000,
    15: 195000,
    16: 225000,
    17: 265000,
    18: 305000,
    19: 355000,
  }

  const normalize = (value: number): number =>
    (((character?.level ?? 1) > 1
      ? value - levels[(character?.level ?? 1) - 1]
      : value) *
      100) /
    ((character?.level ?? 1) > 1
      ? levels[character?.level ?? 1] - levels[(character?.level ?? 1) - 1]
      : levels[character?.level ?? 1])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if ((character?.currentExperience ?? 0) >= levels[character?.level ?? 1]) {
      changeLevel()
    }
  }, [character?.currentExperience, character?.level]) // eslint-disable-line

  return (
    <>
      <Root onClick={handleClick}>
        <XpBar
          variant="determinate"
          value={normalize(character?.currentExperience ?? 0)}
        />

        <Box mt={1} display="flex" justifyContent="space-between">
          <Typography style={{ fontSize: '.75rem' }}>
            NVL. {character?.level}
          </Typography>

          <Typography style={{ fontSize: '.75rem' }}>
            XP{' '}
            {`${character?.currentExperience}/${levels[character?.level ?? 1]}`}
          </Typography>
        </Box>
      </Root>

      <StyledMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <ChangeQuantityInput
          disableSubtract
          currentValue={character?.currentExperience ?? 0}
          onChange={setExperience}
        />
      </StyledMenu>
    </>
  )
}
