import { Box, Divider, Typography } from '@mui/material'
import {
  getTranslatedAbility,
  getTranslatedArmorType,
  getTranslatedSkill,
  getTranslatedWeaponType,
} from '../../../../helpers/utils'
import { WeaponType } from '../../../../shared/models'
import { useCharSheet } from '../../../../stores/useCharSheet'

export const ProficienciesSection: React.FC = () => {
  const { character } = useCharSheet()

  return (
    <Box mt={2}>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700 }}
        >
          Proficiências
        </Typography>

        <Typography
          variant="h6"
          style={{ fontSize: '1.125rem', fontWeight: 700 }}
        >
          (+{character?.proficiencies.bonus})
        </Typography>
      </Box>

      <Divider />

      {character?.proficiencies.armors && (
        <Typography style={{ marginTop: 8 }}>
          <strong>Armaduras:</strong>{' '}
          {character?.proficiencies.armors
            .map((armorType) => getTranslatedArmorType(armorType))
            .join(' - ')}
        </Typography>
      )}

      {character?.proficiencies.weapons && (
        <Typography style={{ marginTop: 8 }}>
          <strong>Armas:</strong>{' '}
          {character?.proficiencies.weapons
            .map((weapon) =>
              weapon === WeaponType.martial || weapon === WeaponType.simple
                ? getTranslatedWeaponType(weapon)
                : weapon
            )
            .join(' - ')}
        </Typography>
      )}

      {character?.proficiencies.tools && (
        <Typography style={{ marginTop: 8 }}>
          <strong>Ferramentas:</strong>{' '}
          {character?.proficiencies.tools.map((tool) => tool).join(' - ')}
        </Typography>
      )}

      {character?.proficiencies.savingThrows && (
        <Typography style={{ marginTop: 8 }}>
          <strong>Testes de resistência:</strong>{' '}
          {character?.proficiencies.savingThrows
            .map((savingThrow) => getTranslatedAbility(savingThrow))
            .join(' - ')}
        </Typography>
      )}

      {character?.proficiencies.skills && (
        <Typography style={{ marginTop: 8 }}>
          <strong>Perícias:</strong>{' '}
          {character?.proficiencies.skills
            .map((skill) => getTranslatedSkill(skill))
            .join(' - ')}
        </Typography>
      )}
    </Box>
  )
}
