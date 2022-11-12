import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { getTranslatedLanguage } from '../../../helpers/utils'
import { Language } from '../../models'

interface LanguagesSelectorProps {
  initialValues?: Language[]
  values?: Language[]
  onChange: (values: Language[]) => void
  handleValidate: (isValid: boolean) => void
}

export const LanguagesSelector: React.FC<LanguagesSelectorProps> = ({
  initialValues,
  values = [],
  onChange,
  handleValidate,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialValues?.[0])

  useEffect(() => {
    if (selectedLanguage) {
      handleValidate(true)
    } else {
      handleValidate(false)
    }
  }, [selectedLanguage])

  return (
    <FormControl fullWidth>
      <InputLabel>Idioma</InputLabel>
      <Select
        value={selectedLanguage ?? ''}
        label="Idioma"
        onChange={({ target }) => {
          onChange([target.value] as Language[])
          setSelectedLanguage(target.value as Language)
        }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {getTranslatedLanguage(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
