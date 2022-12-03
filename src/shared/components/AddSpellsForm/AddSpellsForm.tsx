import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { Spell } from '../../models'

interface AddSpellsFormProps {
  values: Spell[]
  onChange: (value: Spell, index: number) => void
}

export const AddSpellsForm: React.FC<AddSpellsFormProps> = ({
  values,
  onChange,
}) => {
  return (
    <>
      <Typography style={{ marginBottom: 24 }}>
        Adicione as magias aprendidas por seu personagem ao subir de nível
      </Typography>

      {values.map((value, index) => (
        <>
          <Box key={index}>
            <Box mb={2} display="flex" gap={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Nome da magia"
                value={value.name}
                onChange={({ target }) =>
                  onChange({ ...value, name: target.value }, index)
                }
              />

              <FormControl style={{ minWidth: 75 }}>
                <InputLabel>Nível</InputLabel>
                <Select
                  value={value.level}
                  label="Nível"
                  onChange={({ target }) =>
                    onChange({ ...value, level: Number(target.value) }, index)
                  }
                >
                  <MenuItem value={1}>1</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label="Descrição"
              value={value.description ?? ''}
              onChange={({ target }) =>
                onChange({ ...value, description: target.value }, index)
              }
            />
          </Box>

          {index < values.length - 1 && (
            <Divider style={{ margin: '16px 0' }} />
          )}
        </>
      ))}
    </>
  )
}
