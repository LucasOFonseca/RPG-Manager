import { Delete, Edit, MoreVert } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { useConfirm } from 'material-ui-confirm'
import { useState } from 'react'
import { useInventory } from '../../../../../../../../stores/useInventory'

interface CoinItemMenuProps {
  coinName: string
  onEdit: () => void
}

export const CoinItemMenu: React.FC<CoinItemMenuProps> = ({
  coinName,
  onEdit,
}) => {
  const confirm = useConfirm()
  const { removeCoinSlot } = useInventory()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const onClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleDeleteCoinSlot = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    confirm({
      title: 'Remover espaço de moeda?',
      confirmationText: 'remover',
    }).then(() => {
      removeCoinSlot(coinName)
      onClose(event)
    })
  }

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <MoreVert />
      </IconButton>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem
          onClick={(e) => {
            onEdit()
            onClose(e)
          }}
        >
          <Edit style={{ marginRight: 8 }} />

          <Typography>Editar</Typography>
        </MenuItem>

        <MenuItem style={{ color: red[500] }} onClick={handleDeleteCoinSlot}>
          <Delete style={{ marginRight: 8 }} />

          <Typography style={{ color: red[500] }}>Excluir</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
