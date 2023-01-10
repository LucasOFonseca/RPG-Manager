import { Add, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Button,
  Collapse,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
import { CoinItem } from '../../../../shared/models'
import { useInventory } from '../../../../stores/useInventory'
import { AddCoinSlotDialogForm } from './components/AddCoinSlotDialogForm'
import { CoinItemRow } from './components/CoinItemRow'

interface TitleContainerProps {
  expanded: boolean
}

const TitleContainer = styled(Box)<TitleContainerProps>(
  ({ theme, expanded }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    color: theme.palette.text.primary,

    transition: 'all ease .2s',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: grey[theme.palette.mode === 'light' ? 100 : 900],
    },

    '& span': {
      height: 24,
      transform: expanded ? 'rotate(180deg)' : undefined,

      transition: 'all ease .2s',
    },
  })
)

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: 16,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
}))

const StyledTableCell = styled(TableCell)(() => ({
  padding: '8px 16px',
}))

export const CoinsAccordion: React.FC = () => {
  const { coins } = useInventory()

  const [expand, setExpand] = useState(false)
  const [showAddCoinSlotDialogForm, setShowAddCoinSlotDialogForm] =
    useState(false)
  const [coinToEdit, setCoinToEdit] = useState<CoinItem>()

  const handleOpenAddCoinSlotDialogForm = () => {
    setShowAddCoinSlotDialogForm(true)
  }

  const handleCloseAddCoinSlotDialogForm = () => {
    setCoinToEdit(undefined)
    setShowAddCoinSlotDialogForm(false)
  }

  return (
    <>
      {showAddCoinSlotDialogForm && (
        <AddCoinSlotDialogForm
          coinToEdit={coinToEdit}
          onClose={handleCloseAddCoinSlotDialogForm}
        />
      )}

      <TitleContainer expanded={expand} onClick={() => setExpand(!expand)}>
        <Typography style={{ fontWeight: 700 }}>Moedas</Typography>

        <span>
          <ExpandMore />
        </span>
      </TitleContainer>

      <Collapse unmountOnExit in={expand}>
        {coins && coins.length > 0 ? (
          <StyledTableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell colSpan={2}>Quantidade</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {coins.map((coin, index) => (
                  <CoinItemRow
                    key={coin.name}
                    isLastItem={index === coins.length - 1}
                    coin={coin}
                    onEdit={() => {
                      setCoinToEdit(coin)
                      handleOpenAddCoinSlotDialogForm()
                    }}
                  />
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        ) : null}

        <Button
          fullWidth
          startIcon={<Add />}
          style={{ margin: '16px 0' }}
          onClick={handleOpenAddCoinSlotDialogForm}
        >
          adicionar espaço de moeda
        </Button>
      </Collapse>

      <Divider />
    </>
  )
}
