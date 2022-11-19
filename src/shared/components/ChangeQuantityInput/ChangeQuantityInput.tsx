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
  const [value, setValue] = useState<number | undefined>(1)

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {!disableSubtract && (
        <Tooltip arrow title="Subtrair">
          <IconButton onClick={() => onChange(currentValue - (value ?? 1))}>
            <Remove />
          </IconButton>
        </Tooltip>
      )}

      <TextField
        style={{ width: 90 }}
        variant="outlined"
        type="number"
        value={value ?? ''}
        onChange={({ target }) =>
          setValue(target.value ? Number(target.value) : undefined)
        }
        onBlur={() => {
          if ((value ?? 0) < 1) {
            setValue(1)
          }
        }}
      />

      <Tooltip arrow title="Adicionar">
        <IconButton onClick={() => onChange(currentValue + (value ?? 1))}>
          <Add />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
