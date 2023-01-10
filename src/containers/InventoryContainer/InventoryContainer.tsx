import { Box, Divider, Typography } from '@mui/material'
import { NextPage } from 'next'
import { CoinsAccordion } from './components/CoinsAccordion'

const Inventory: NextPage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="100%" maxWidth={600}>
        <Typography variant="h6" style={{ fontWeight: 700, marginBottom: 8 }}>
          Inventário
        </Typography>

        <Divider />

        <CoinsAccordion />
      </Box>
    </Box>
  )
}

export default Inventory
