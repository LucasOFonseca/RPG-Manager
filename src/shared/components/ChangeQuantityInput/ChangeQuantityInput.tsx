import { Add, Remove } from '@mui/icons-material'
import { Box, IconButton, TextField, Tooltip } from '@mui/material'
import { useState } from 'react'

interface ChangeQuantityInputProps {
  disableSubtract?: boolean
  currentValue: number
  onChange: (value: number) => void
}

export const ChangeQuantityInput: React.FC<ChangeQuantityInputProps> = ({
  disableSubtract,
  currentValue,
  onChange,
}) => {
  const [value, setValue] = useState(1)

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {!disableSubtract && (
        <Tooltip arrow title="Subtrair">
          <IconButton onClick={() => onChange(currentValue - value)}>
            <Remove />
          </IconButton>
        </Tooltip>
      )}

      <TextField
        style={{ width: 90 }}
        variant="outlined"
        type="number"
        value={value}
        onChange={({ target }) => setValue(Number(target.value))}
        onBlur={() => {
          if (value < 1) {
            setValue(1)
          }
        }}
      />

      <Tooltip arrow title="Adicionar">
        <IconButton onClick={() => onChange(currentValue + value)}>
          <Add />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
