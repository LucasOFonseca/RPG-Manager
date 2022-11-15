import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { getTranslatedLanguage } from '../../../helpers/utils'
import { Language } from '../../models'

interface LanguagesSelectorProps {
  initialValues?: Language[]
  quantity?: number
  values?: Language[]
  onChange: (values: Language[]) => void
  handleValidate: (isValid: boolean) => void
}

export const LanguagesSelector: React.FC<LanguagesSelectorProps> = ({
  initialValues,
  quantity,
  values,
  onChange,
  handleValidate,
}) => {
  const allLanguages = [
    Language.common,
    Language.draconic,
    Language.dwarvish,
    Language.elvish,
    Language.giant,
    Language.gnomish,
    Language.goblin,
    Language.halfling,
    Language.infernal,
    Language.orc,
  ]

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
        {values
          ? values.map((value) => (
              <MenuItem key={value} value={value}>
                {getTranslatedLanguage(value)}
              </MenuItem>
            ))
          : allLanguages.map((value) => (
              <MenuItem key={value} value={value}>
                {getTranslatedLanguage(value)}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  )
}
