import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { getTranslatedSkill } from '../../../helpers/utils'
import { Skill } from '../../models'

const ItemButton = styled(Button)(() => ({
  justifyContent: 'flex-start',
  borderRadius: 8,
  padding: 8,
  textTransform: 'none',
}))

interface SkillsSelectorProps {
  initialValues?: Skill[]
  quantity?: number
  values?: Skill[]
  onChange: (values: Skill[]) => void
  handleValidate: (isValid: boolean) => void
}

export const SkillsSelector: React.FC<SkillsSelectorProps> = ({
  initialValues,
  quantity,
  values = [],
  onChange,
  handleValidate,
}) => {
  const [selectedSkills, setSelectedSkills] = useState(initialValues ?? [])

  useEffect(() => {
    if (quantity) {
      if (selectedSkills.length === quantity) {
        handleValidate(true)
        onChange(selectedSkills)
      } else {
        handleValidate(false)
      }
    } else {
      if (selectedSkills[0]) {
        handleValidate(true)
      } else {
        handleValidate(false)
      }
    }
  }, [selectedSkills])

  return (
    <>
      {quantity ? (
        <Box>
          <Typography
            variant="h6"
            style={{ fontSize: '1.125rem', fontWeight: 700 }}
          >
            Perícias:
          </Typography>

          <Typography>{`Escolha ${quantity} entre:`}</Typography>

          <Box mt={1} display="flex" flexDirection="column" gap={2}>
            {values?.map((value) => (
              <ItemButton
                disabled={
                  selectedSkills.length === quantity &&
                  !selectedSkills.some((skill) => skill === value)
                }
                variant="outlined"
                color="inherit"
                key={value}
                onClick={() => {
                  if (selectedSkills.some((skill) => skill === value)) {
                    setSelectedSkills(
                      selectedSkills.filter((skill) => skill !== value)
                    )
                  } else {
                    setSelectedSkills([...selectedSkills, value])
                  }
                }}
              >
                <Checkbox
                  checked={selectedSkills.some((skill) => skill === value)}
                />

                <Typography>{getTranslatedSkill(value)}</Typography>
              </ItemButton>
            ))}
          </Box>
        </Box>
      ) : (
        <FormControl fullWidth>
          <InputLabel>Tipo de inimigo</InputLabel>
          <Select
            value={selectedSkills[0] ?? ''}
            label="Tipo de inimigo"
            onChange={({ target }) => {
              onChange([target.value] as Skill[])
              setSelectedSkills([target.value] as Skill[])
            }}
          >
            {values.map((value) => (
              <MenuItem key={value} value={value}>
                {getTranslatedSkill(value)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  )
}
