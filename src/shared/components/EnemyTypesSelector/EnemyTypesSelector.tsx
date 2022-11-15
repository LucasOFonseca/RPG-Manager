import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { getTranslatedEnemyType } from '../../../helpers/utils'
import { EnemyType } from '../../models'

interface EnemyTypesSelectorProps {
  initialValues?: EnemyType[]
  quantity?: number
  values?: EnemyType[]
  onChange: (values: EnemyType[]) => void
  handleValidate: (isValid: boolean) => void
}

export const EnemyTypesSelector: React.FC<EnemyTypesSelectorProps> = ({
  initialValues,
  quantity,
  values = [],
  onChange,
  handleValidate,
}) => {
  const [selectedEnemyType, setSelectedEnemyType] = useState(initialValues?.[0])

  useEffect(() => {
    if (selectedEnemyType) {
      handleValidate(true)
    } else {
      handleValidate(false)
    }
  }, [selectedEnemyType])

  return (
    <FormControl fullWidth>
      <InputLabel>Tipo de inimigo</InputLabel>
      <Select
        value={selectedEnemyType ?? ''}
        label="Tipo de inimigo"
        onChange={({ target }) => {
          onChange([target.value] as EnemyType[])
          setSelectedEnemyType(target.value as EnemyType)
        }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {getTranslatedEnemyType(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
