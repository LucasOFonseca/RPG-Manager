import { debounce, TextField } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

interface ToolsInputProps {
  initialValues?: string[]
  quantity?: number
  label?: string
  onChange: (values: string[]) => void
  handleValidate: (isValid: boolean) => void
}

export const ToolsInput: React.FC<ToolsInputProps> = ({
  initialValues,
  quantity,
  label,
  onChange,
  handleValidate,
}) => {
  const [value, setValue] = useState(initialValues?.[0])

  const onChangeDebounce = useCallback(debounce(onChange, 300), [])

  useEffect(() => {
    if (value) {
      handleValidate(true)
    } else {
      handleValidate(false)
    }
  }, [value])

  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label ?? 'Ferramenta'}
      value={value ?? ''}
      onChange={({ target }) => {
        onChangeDebounce([target.value])
        setValue(target.value)
      }}
      helperText="(Consulte o mestre para saber quais estão disponíveis para escolha)"
    />
  )
}
