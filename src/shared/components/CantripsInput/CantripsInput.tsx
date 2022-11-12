import { debounce, TextField } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

interface CantripsInputProps {
  initialValues?: string[]
  onChange: (values: string[]) => void
  handleValidate: (isValid: boolean) => void
}

export const CantripsInput: React.FC<CantripsInputProps> = ({
  initialValues,
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
      label="Truque"
      value={value ?? ''}
      onChange={({ target }) => {
        onChangeDebounce([target.value])
        setValue(target.value)
      }}
      helperText="(Consulte o mestre para saber quais truques estão disponíveis)"
    />
  )
}
