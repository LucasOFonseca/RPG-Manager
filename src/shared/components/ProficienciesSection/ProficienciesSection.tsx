import { Box, Typography } from '@mui/material'
import {
  getTranslatedAbility,
  getTranslatedArmorType,
  getTranslatedSkill,
  getTranslatedWeaponType,
} from '../../../helpers/utils'
import { Proficiencies } from '../../models'

interface ProficienciesSectionProps {
  proficiencies: Proficiencies
}

export const ProficienciesSection: React.FC<ProficienciesSectionProps> = ({
  proficiencies,
}) => {
  return (
    <>
      <Typography
        variant="h6"
        style={{ fontSize: '1.125rem', fontWeight: 700 }}
      >
        Proficiências
      </Typography>

      <Box mt={1} display="flex" flexDirection="column" gap={1}>
        {proficiencies.armors && (
          <Typography>
            <strong>Armaduras:</strong>{' '}
            {proficiencies.armors
              .map((armorType) => getTranslatedArmorType(armorType))
              .join(' - ')}
          </Typography>
        )}

        {proficiencies.weapons && (
          <Typography>
            <strong>Armas:</strong>{' '}
            {proficiencies.weapons
              .map((weaponType) => getTranslatedWeaponType(weaponType))
              .join(' - ')}
          </Typography>
        )}

        {proficiencies.tools && (
          <Typography>
            <strong>Ferramentas:</strong> {proficiencies.tools}
          </Typography>
        )}

        {proficiencies.savingThrows && (
          <Typography>
            <strong>Testes de resistência:</strong>{' '}
            {proficiencies.savingThrows
              .map((savingThrow) => getTranslatedAbility(savingThrow))
              .join(' - ')}
          </Typography>
        )}

        {proficiencies.skills && (
          <Typography>
            <strong>Perícias:</strong>{' '}
            {proficiencies.skills
              .map((skill) => getTranslatedSkill(skill))
              .join(' - ')}
          </Typography>
        )}
      </Box>
    </>
  )
}
