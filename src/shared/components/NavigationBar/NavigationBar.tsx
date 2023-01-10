import { AccountBox } from '@mui/icons-material'
import { Button, styled, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { InventoryIcon } from '../../../../public/svg/InventoryIcon'

interface NavigationButtonStyleProps {
  selected: boolean
}

const NavigationButton = styled(Button)<NavigationButtonStyleProps>(
  ({ theme, selected }) => ({
    flexDirection: 'column',
    fontSize: '.75rem',
    textTransform: 'none',
    color: selected ? theme.palette.primary.main : theme.palette.text.disabled,
    borderRadius: 0,

    '& .MuiButton-startIcon': {
      margin: 0,
    },
  })
)

export const NavigationBar: React.FC = () => {
  const theme = useTheme()
  const { route, push } = useRouter()

  return (
    <footer
      style={{
        width: '100vw',
        display: 'flex',
        height: 56,
        position: 'fixed',
        bottom: 0,
        left: 0,
        background: theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <NavigationButton
        fullWidth
        selected={route === '/'}
        startIcon={<AccountBox />}
        onClick={() => push('/')}
      >
        Ficha
      </NavigationButton>

      <NavigationButton
        fullWidth
        selected={route === '/inventory'}
        startIcon={<InventoryIcon />}
        onClick={() => push('/inventory')}
      >
        Inventário
      </NavigationButton>
    </footer>
  )
}
