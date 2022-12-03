import { alpha, Box, Card, Radio, styled, Typography } from '@mui/material'

const Container = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 8,

  transition: 'all .2s',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}))

interface ItemCardProps {
  selected: boolean
  title: string
  description: string
  onClick: () => void
}

export const ItemCard: React.FC<ItemCardProps> = ({
  selected,
  title,
  description,
  onClick,
}) => {
  return (
    <Container variant="outlined" onClick={onClick}>
      <Radio checked={selected} />

      <Box>
        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 8 }}
        >
          {title}
        </Typography>

        <Typography>{description}</Typography>
      </Box>
    </Container>
  )
}
