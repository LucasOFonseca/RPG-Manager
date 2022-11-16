import { Box, TextField, Typography } from '@mui/material'
import { FormikProps } from 'formik'
import { makeRaceSummaries } from '../../../../../../helpers/utils'
import { Character } from '../../../../../../shared/models'

interface AbilitiesStepProps {
  formik: FormikProps<Character>
}

export const AbilitiesStep: React.FC<AbilitiesStepProps> = ({ formik }) => {
  const { values, setFieldValue } = formik

  const getAbilityEnhancements = () => {
    const race = makeRaceSummaries()[values.race?.type ?? '']
    const subRace =
      values.subRace && race.subRaces
        ? race.subRaces.find((subRace) => subRace.type === values.subRace?.type)
        : undefined

    const { abilityEnhancements } = race.racialTraits

    const raceValues = abilityEnhancements.reduce(
      (a, v) => ({ ...a, [v.ability]: v.value }),
      {}
    )

    if (subRace) {
      const subRaceValues = subRace.abilityEnhancements.reduce(
        (a, v) => ({ ...a, [v.ability]: v.value }),
        {}
      )

      return { ...raceValues, ...subRaceValues }
    }

    return raceValues
  }

  const enhancements = getAbilityEnhancements() as any

  return (
    <>
      <Typography>
        Para determinar o valor das suas <strong>Habilidades</strong> você pode
        utilizar o conjunto de valores padrão{' '}
        <strong>(15, 14, 13, 12, 10, 8)</strong> ou gerar um conjunto aleatório.
        Para isso jogue <strong>4d6</strong> e anote a soma dos três resultados
        mais altos, repita o processo até ter um conjunto de seis valores,
        distribua-os como quiser nos campos abaixo.
      </Typography>

      <Box mt={3}>
        <Box display="flex" gap={2}>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Força"
            value={
              values.abilities.strength !== 0 ? values.abilities.strength : ''
            }
            onChange={({ target }) => {
              setFieldValue('abilities.strength', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.strength < 3) {
                setFieldValue('abilities.strength', 3)
              } else if (values.abilities.strength > 18) {
                setFieldValue('abilities.strength', 18)
              }
            }}
            helperText={
              enhancements.strength ? `+${enhancements.strength}` : undefined
            }
          />

          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Destreza"
            value={
              values.abilities.dexterity !== 0 ? values.abilities.dexterity : ''
            }
            onChange={({ target }) => {
              setFieldValue('abilities.dexterity', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.dexterity < 3) {
                setFieldValue('abilities.dexterity', 3)
              } else if (values.abilities.dexterity > 18) {
                setFieldValue('abilities.dexterity', 18)
              }
            }}
            helperText={
              enhancements.dexterity ? `+${enhancements.dexterity}` : undefined
            }
          />
        </Box>

        <Box mt={2} display="flex" gap={2}>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Constituição"
            value={
              values.abilities.constitution !== 0
                ? values.abilities.constitution
                : ''
            }
            onChange={({ target }) => {
              setFieldValue('abilities.constitution', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.constitution < 3) {
                setFieldValue('abilities.constitution', 3)
              } else if (values.abilities.constitution > 18) {
                setFieldValue('abilities.constitution', 18)
              }
            }}
            helperText={
              enhancements.constitution
                ? `+${enhancements.constitution}`
                : undefined
            }
          />

          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Inteligência"
            value={
              values.abilities.intelligence !== 0
                ? values.abilities.intelligence
                : ''
            }
            onChange={({ target }) => {
              setFieldValue('abilities.intelligence', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.intelligence < 3) {
                setFieldValue('abilities.intelligence', 3)
              } else if (values.abilities.intelligence > 18) {
                setFieldValue('abilities.intelligence', 18)
              }
            }}
            helperText={
              enhancements.intelligence
                ? `+${enhancements.intelligence}`
                : undefined
            }
          />
        </Box>

        <Box mt={2} display="flex" gap={2}>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Sabedoria"
            value={values.abilities.wisdom !== 0 ? values.abilities.wisdom : ''}
            onChange={({ target }) => {
              setFieldValue('abilities.wisdom', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.wisdom < 3) {
                setFieldValue('abilities.wisdom', 3)
              } else if (values.abilities.wisdom > 18) {
                setFieldValue('abilities.wisdom', 18)
              }
            }}
            helperText={
              enhancements.wisdom ? `+${enhancements.wisdom}` : undefined
            }
          />

          <TextField
            fullWidth
            type="number"
            variant="outlined"
            label="Carisma"
            value={
              values.abilities.charisma !== 0 ? values.abilities.charisma : ''
            }
            onChange={({ target }) => {
              setFieldValue('abilities.charisma', Number(target.value))
            }}
            onBlur={() => {
              if (values.abilities.charisma < 3) {
                setFieldValue('abilities.charisma', 3)
              } else if (values.abilities.charisma > 18) {
                setFieldValue('abilities.charisma', 18)
              }
            }}
            helperText={
              enhancements.charisma ? `+${enhancements.charisma}` : undefined
            }
          />
        </Box>
      </Box>
    </>
  )
}
