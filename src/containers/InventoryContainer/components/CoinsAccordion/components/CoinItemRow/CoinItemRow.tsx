import { Menu, styled, TableCell, TableRow } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
import { ChangeQuantityInput } from '../../../../../../shared/components/ChangeQuantityInput'
import { CoinItem } from '../../../../../../shared/models'
import { useInventory } from '../../../../../../stores/useInventory'
import { CoinItemMenu } from './components/CoinItemMenu'

interface StyledTableCellProps {
  isLastItem: boolean
}

const Row = styled(TableRow)(({ theme }) => ({
  transition: 'all ease .2s',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: grey[theme.palette.mode === 'light' ? 100 : 900],
  },
}))

const StyledTableCell = styled(TableCell)<StyledTableCellProps>(
  ({ isLastItem }) => ({
    padding: '8px 16px',
    border: isLastItem ? 'none' : undefined,
  })
)

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

interface CoinItemRowProps {
  isLastItem: boolean
  coin: CoinItem
  onEdit: () => void
}

export const CoinItemRow: React.FC<CoinItemRowProps> = ({
  isLastItem,
  coin,
  onEdit,
}) => {
  const { editCoinInfo } = useInventory()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Row onClick={handleClick}>
        <StyledTableCell isLastItem={isLastItem}>{coin.name}</StyledTableCell>

        <StyledTableCell isLastItem={isLastItem} style={{ width: 150 }}>
          {coin.quantity}
        </StyledTableCell>

        <StyledTableCell isLastItem={isLastItem} style={{ width: 66 }}>
          <CoinItemMenu coinName={coin.name} onEdit={onEdit} />
        </StyledTableCell>
      </Row>

      <StyledMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <ChangeQuantityInput
          currentValue={coin.quantity}
          onChange={(value) => editCoinInfo(coin.name, value < 0 ? 0 : value)}
        />
      </StyledMenu>
    </>
  )
}
